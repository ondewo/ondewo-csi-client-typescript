// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/**
 * D18 headless-SDK auth helper (keycloak-migration-plan §7.8 + D18).
 *
 * One-time ROPC login (grant_type=password, scope=offline_access) against the PUBLIC SDK client
 * `ondewo-nlu-cai-sdk-public` (no client_secret -- Q1), then a bounded background loop that refreshes
 * the short-lived access token from the offline refresh token before it expires. The current access
 * token is exposed for an `Authorization: Bearer <token>` gRPC metadata header. The refresh loop stops
 * after `tokenExpirationInS` (if given) has elapsed since login.
 *
 * @packageDocumentation
 */

/**
 * Seconds of head-room subtracted from a token's `expires_in` so the refresh fires before the access
 * token actually lapses (covers clock skew + the round-trip to Keycloak).
 */
const REFRESH_SKEW_IN_S: number = 30;

/** Lower bound for the scheduled refresh delay so a tiny/zero `expires_in` cannot spin a hot loop. */
const MIN_REFRESH_DELAY_IN_S: number = 1;

/**
 * Minimal structural type of the fetch Response fields this helper reads. Keeps the module
 * self-contained (no DOM lib dependency) while still typing the injectable `fetchImpl`.
 */
export interface TokenFetchResponse {
  /** Whether the HTTP status is in the 2xx success range (mirrors `Response.ok`). */
  ok: boolean;
  /** The numeric HTTP status code of the response. */
  status: number;
  /**
   * Read the full response body as a UTF-8 string.
   *
   * @returns A promise resolving to the raw body text (parsed as JSON by the caller).
   */
  text(): Promise<string>;
}

/** Init object passed to the injectable fetch (mirrors the subset of `RequestInit` this helper sets). */
export interface TokenFetchInit {
  /** HTTP method; always `"POST"` for the token endpoint. */
  method: string;
  /** Request headers (Content-Type + Accept) as a flat string map. */
  headers: Record<string, string>;
  /** The `application/x-www-form-urlencoded` request body. */
  body: string;
  /**
   * Optional undici dispatcher (Node only). The default transport attaches an insecure
   * `Agent({ connect: { rejectUnauthorized: false } })` here when `verifySsl` is `false`; the global
   * WHATWG fetch honours it. Never set on an injected `fetchImpl` and ignored in a browser bundle.
   */
  dispatcher?: unknown;
}

/**
 * Injectable fetch signature (a subset of the global `fetch`) used by the token endpoint call.
 *
 * @param url - The fully-qualified token-endpoint URL to POST to.
 * @param init - The request init carrying the form-encoded body and headers.
 * @returns A promise resolving to the minimal {@link TokenFetchResponse}.
 */
export type TokenFetch = (url: string, init: TokenFetchInit) => Promise<TokenFetchResponse>;

/** Parsed Keycloak token-endpoint response (only the fields this helper consumes). */
interface KeycloakTokenResponse {
  /** The short-lived OIDC access token (sent as the `Bearer` credential). */
  access_token: string;
  /** The long-lived offline refresh token, when `offline_access` was granted. */
  refresh_token?: string;
  /** Lifetime of `access_token` in seconds, when reported by Keycloak. */
  expires_in?: number;
}

/** Options for the D18 headless-SDK offline-token login. */
export interface OfflineTokenLoginOptions {
  /** Base Keycloak URL, e.g. "https://auth.example.com/auth" (trailing slash tolerated). */
  keycloakUrl: string;
  /** Realm name, e.g. "ondewo-ccai-platform". */
  realm: string;
  /** Public SDK client id, e.g. "ondewo-nlu-cai-sdk-public". NO client_secret (Q1). */
  clientId: string;
  /** 2FA-exempt technical-user email. */
  username: string;
  /** Technical-user password. */
  password: string;
  /** Optional cap (seconds) on how long the auto-refresh loop runs after login. */
  tokenExpirationInS?: number;
  /** Optional fetch override (tests inject a mock); defaults to the global fetch. */
  fetchImpl?: TokenFetch;
  /**
   * Verify the Keycloak TLS certificate on the token-endpoint call. Default `true` (secure). Set
   * `false` ONLY for a self-signed local Envoy (e.g. `https://localhost:12001/auth`). Node-only: it is
   * ignored in a browser bundle (the browser owns TLS) and ignored when a custom `fetchImpl` is
   * injected. When `false` under Node the default transport attaches an insecure undici dispatcher.
   */
  keycloakVerifySsl?: boolean;
  /** Optional clock override returning epoch ms (tests); defaults to Date.now. */
  nowInMs?: () => number;
}

/** Error raised on any token-endpoint or token-shape failure. */
export class TokenError extends Error {
  /**
   * Construct a {@link TokenError}, fixing the error `name` to `"TokenError"` for `instanceof`-free checks.
   *
   * @param message - Human-readable description of the token failure.
   */
  public constructor(message: string) {
    super(message);
    this.name = "TokenError";
  }
}

/**
 * Build the OIDC token endpoint URL for a realm, tolerating a trailing slash on `keycloakUrl` and an
 * optional `/auth` relative path already baked into it.
 *
 * @param keycloakUrl - Base Keycloak URL (trailing slashes are stripped).
 * @param realm - Realm name; URL-encoded into the path.
 * @returns The fully-qualified `.../realms/<realm>/protocol/openid-connect/token` endpoint URL.
 */
function buildTokenEndpoint(keycloakUrl: string, realm: string): string {
  const base: string = keycloakUrl.replace(/\/+$/, "");
  return `${base}/realms/${encodeURIComponent(realm)}/protocol/openid-connect/token`;
}

/**
 * POST an `application/x-www-form-urlencoded` body to the token endpoint and return the parsed JSON.
 *
 * @param tokenEndpoint - The fully-qualified OIDC token-endpoint URL.
 * @param params - Form parameters (grant_type, client_id, credentials, ...) to URL-encode into the body.
 * @param fetchImpl - The injectable fetch used to perform the request.
 * @returns A promise resolving to the parsed {@link KeycloakTokenResponse}.
 * @throws {@link TokenError} On a non-2xx response, an unparseable body, or a body with no `access_token`.
 */
async function postTokenRequest(
  tokenEndpoint: string,
  params: Record<string, string>,
  fetchImpl: TokenFetch
): Promise<KeycloakTokenResponse> {
  const body: string = new URLSearchParams(params).toString();
  const response: TokenFetchResponse = await fetchImpl(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    body
  });

  const text: string = await response.text();
  if (!response.ok) {
    throw new TokenError(`Keycloak token endpoint returned HTTP ${response.status}: ${text}`);
  }

  let parsed: KeycloakTokenResponse;
  try {
    parsed = JSON.parse(text) as KeycloakTokenResponse;
  } catch {
    throw new TokenError(`Keycloak token endpoint returned a non-JSON body: ${text}`);
  }
  if (typeof parsed.access_token !== "string" || parsed.access_token.length === 0) {
    throw new TokenError("Keycloak token response did not contain an access_token");
  }
  return parsed;
}

/** Cached insecure undici dispatcher (built once, reused) so `verifySsl:false` costs one Agent. */
let insecureNodeDispatcher: unknown;

/**
 * Lazily build a cached undici `Agent` that skips TLS certificate verification -- the Node analog of
 * Python's `requests.post(..., verify=False)`. Node-guarded and loaded via a dynamic `import("undici")`
 * so a browser bundle never pulls in `undici` and the flag stays a hard no-op outside Node.
 *
 * @returns The insecure dispatcher under Node, or `undefined` in a browser (TLS is owned by the browser).
 */
async function getInsecureNodeDispatcher(): Promise<unknown> {
  const nodeProcess: { versions?: { node?: string } } | undefined = (
    globalThis as { process?: { versions?: { node?: string } } }
  ).process;
  /* c8 ignore next 3 -- browser guard: not exercised under the Node test runner */
  if (nodeProcess === undefined || nodeProcess.versions === undefined || nodeProcess.versions.node === undefined) {
    return undefined;
  }
  if (insecureNodeDispatcher === undefined) {
    const undiciModuleName: string = "undici";
    const undici: { Agent: new (options: unknown) => unknown } = (await import(undiciModuleName)) as {
      Agent: new (options: unknown) => unknown;
    };
    insecureNodeDispatcher = new undici.Agent({ connect: { rejectUnauthorized: false } });
  }
  return insecureNodeDispatcher;
}

/**
 * Build the DEFAULT token transport (used only when no `fetchImpl` is injected). It delegates to the
 * global WHATWG fetch, and -- when `verifySsl` is `false` under Node -- attaches an insecure undici
 * dispatcher to the request init so the token POST skips certificate verification. With `verifySsl`
 * `true` (the default) it is a plain pass-through to `globalThis.fetch`, i.e. unchanged behavior.
 *
 * @param verifySsl - Whether to verify the Keycloak TLS certificate; `false` opts into the insecure path.
 * @returns A {@link TokenFetch} that resolves the global fetch at call time (honoring test overrides).
 */
export function createDefaultTokenFetch(verifySsl: boolean): TokenFetch {
  return async (url: string, init: TokenFetchInit): Promise<TokenFetchResponse> => {
    const dispatcher: unknown = verifySsl ? undefined : await getInsecureNodeDispatcher();
    const effectiveInit: TokenFetchInit = dispatcher !== undefined ? { ...init, dispatcher } : init;
    const globalFetch: TokenFetch = globalThis.fetch;
    return globalFetch(url, effectiveInit);
  };
}

/**
 * A live access-token holder backed by a bounded auto-refresh loop. Obtain one from {@link login};
 * read {@link getAuthorizationHeader} for the gRPC `Authorization` metadata and call {@link stop} when done.
 */
export class OfflineTokenProvider {
  /** Resolved OIDC token-endpoint URL derived from `keycloakUrl` + `realm`. */
  private readonly tokenEndpoint: string;
  /** Public SDK client id sent on every token request (no client_secret -- Q1). */
  private readonly clientId: string;
  /** Optional cap (seconds) on the auto-refresh loop's lifetime; `undefined` means unbounded. */
  private readonly tokenExpirationInS: number | undefined;
  /** Fetch implementation used for all token-endpoint calls (test-injectable). */
  private readonly fetchImpl: TokenFetch;
  /** Clock returning epoch milliseconds, used for deadline math (test-injectable). */
  private readonly nowInMs: () => number;

  /** Current access token, or `null` before bootstrap / after the bounded loop lapses. */
  private accessToken: string | null;
  /** Current offline refresh token, or `null` before bootstrap. */
  private refreshToken: string | null;
  /** Handle of the pending refresh timer, or `null` when no refresh is armed. */
  private timer: ReturnType<typeof setTimeout> | null;
  /** Whether {@link stop} has been called; suppresses any further re-arming. */
  private stopped: boolean;
  /** Absolute epoch-ms deadline after which the loop stops, or `null` when unbounded. */
  private deadlineInMs: number | null;
  /** Optional callback invoked with the error of a failed background refresh. */
  private onRefreshErrorHandler: ((error: unknown) => void) | null;

  /**
   * Construct an idle provider; call {@link bootstrap} (or use the {@link login} factory) to log in.
   *
   * @param options - Login + behavior options; `fetchImpl` and `nowInMs` default to the globals.
   */
  public constructor(options: OfflineTokenLoginOptions) {
    this.tokenEndpoint = buildTokenEndpoint(options.keycloakUrl, options.realm);
    this.clientId = options.clientId;
    this.tokenExpirationInS = options.tokenExpirationInS;
    // A custom fetchImpl always wins (the verifySsl flag is ignored for injected transports); only the
    // DEFAULT transport honors verifySsl, and only under Node. Absent/undefined verifySsl => secure (true).
    const verifySsl: boolean = options.keycloakVerifySsl !== false;
    this.fetchImpl =
      options.fetchImpl !== undefined ? options.fetchImpl : createDefaultTokenFetch(verifySsl);
    this.nowInMs = options.nowInMs !== undefined ? options.nowInMs : Date.now;

    this.accessToken = null;
    this.refreshToken = null;
    this.timer = null;
    this.stopped = false;
    this.deadlineInMs = null;
    this.onRefreshErrorHandler = null;
  }

  /**
   * Perform the one-time ROPC login and arm the first refresh. Awaited by {@link login}.
   *
   * @param username - 2FA-exempt technical-user email.
   * @param password - Technical-user password.
   * @returns A promise that resolves once the access token is set and the first refresh is armed.
   * @throws {@link TokenError} When the token endpoint fails or the response carries no refresh_token.
   */
  public async bootstrap(username: string, password: string): Promise<void> {
    const tokenResponse: KeycloakTokenResponse = await postTokenRequest(
      this.tokenEndpoint,
      {
        grant_type: "password",
        client_id: this.clientId,
        username,
        password,
        scope: "offline_access"
      },
      this.fetchImpl
    );

    this.accessToken = tokenResponse.access_token;
    this.refreshToken = typeof tokenResponse.refresh_token === "string" ? tokenResponse.refresh_token : null;
    if (this.refreshToken === null) {
      throw new TokenError(
        "Keycloak token response did not contain a refresh_token; the SDK client must have " +
          "directAccessGrants + the offline_access scope (ondewo-nlu-cai-sdk-public)"
      );
    }

    if (this.tokenExpirationInS !== undefined) {
      const expirationInMs: number = this.tokenExpirationInS * 1000;
      this.deadlineInMs = this.nowInMs() + expirationInMs;
    }
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Exchange the offline refresh token for a fresh access token and re-arm the next refresh.
   *
   * @returns A promise that resolves once the token is refreshed and the next refresh is armed (or the
   *   loop has stopped because its bounded deadline elapsed).
   * @throws {@link TokenError} When the refresh token-endpoint call fails or returns an invalid body.
   */
  private async refresh(): Promise<void> {
    /* c8 ignore next 3 -- unreachable: stop() always clears the only timer that calls refresh() */
    if (this.stopped) {
      return;
    }
    // Re-check the bounded deadline at fire time (not just at schedule time): once it has elapsed the
    // loop stops with no further renewal -> the access token lapses -> re-login is required.
    if (this.deadlineInMs !== null && this.nowInMs() >= this.deadlineInMs) {
      this.stop();
      return;
    }
    const tokenResponse: KeycloakTokenResponse = await postTokenRequest(
      this.tokenEndpoint,
      {
        grant_type: "refresh_token",
        client_id: this.clientId,
        refresh_token: this.refreshToken as string
      },
      this.fetchImpl
    );

    this.accessToken = tokenResponse.access_token;
    // Keycloak may rotate the offline refresh token; keep the newest one when present.
    if (typeof tokenResponse.refresh_token === "string" && tokenResponse.refresh_token.length > 0) {
      this.refreshToken = tokenResponse.refresh_token;
    }
    this.scheduleRefresh(tokenResponse.expires_in);
  }

  /**
   * Arm a single timer for the next refresh, clamped to the bounded deadline. Stops silently once
   * `tokenExpirationInS` has elapsed (no further renewal -> access lapses -> re-login required).
   *
   * @param expiresInRaw - The token's reported `expires_in` (seconds), or `undefined` when absent;
   *   non-positive / missing values fall back to {@link MIN_REFRESH_DELAY_IN_S}.
   */
  private scheduleRefresh(expiresInRaw: number | undefined): void {
    if (this.stopped) {
      return;
    }
    const expiresInS: number =
      typeof expiresInRaw === "number" && expiresInRaw > 0 ? expiresInRaw : MIN_REFRESH_DELAY_IN_S;
    let delayInS: number = Math.max(expiresInS - REFRESH_SKEW_IN_S, MIN_REFRESH_DELAY_IN_S);

    if (this.deadlineInMs !== null) {
      const remainingInMs: number = this.deadlineInMs - this.nowInMs();
      if (remainingInMs <= 0) {
        this.stop();
        return;
      }
      delayInS = Math.min(delayInS, remainingInMs / 1000);
    }

    this.timer = setTimeout((): void => {
      this.refresh().catch((refreshError: unknown): void => {
        // Swallow a transient refresh failure but surface it so the caller can react; the next
        // gRPC call gets the stale (possibly expired) token and re-logs in on UNAUTHENTICATED.
        if (this.onRefreshErrorHandler !== null) {
          this.onRefreshErrorHandler(refreshError);
        }
      });
    }, delayInS * 1000);
    // Do not keep the event loop alive solely for the refresh timer.
    /* c8 ignore next 3 -- the else branch is unreachable: Node's Timeout always exposes unref() */
    if (typeof this.timer.unref === "function") {
      this.timer.unref();
    }
  }

  /**
   * Register a callback invoked with the error of a failed background refresh (optional diagnostics).
   *
   * @param handler - Receives the thrown error of any failed background refresh; replaces a prior handler.
   */
  public onRefreshError(handler: (error: unknown) => void): void {
    this.onRefreshErrorHandler = handler;
  }

  /**
   * Read the current access token.
   *
   * @returns The access token, or `null` before bootstrap / after the bounded loop has lapsed.
   */
  public getAccessToken(): string | null {
    return this.accessToken;
  }

  /**
   * Build the `Authorization` gRPC metadata header value.
   *
   * @returns The header value `Bearer <access_token>`.
   * @throws {@link TokenError} When no access token is available (login incomplete or lapsed).
   */
  public getAuthorizationHeader(): string {
    if (this.accessToken === null) {
      throw new TokenError("No access token available; login() has not completed or has lapsed");
    }
    return `Bearer ${this.accessToken}`;
  }

  /** Stop the auto-refresh loop. Idempotent; safe to call from any state. */
  public stop(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

/**
 * One-time ROPC + offline_access login against the PUBLIC SDK client, returning a live token provider
 * whose access token is auto-refreshed in the background until `tokenExpirationInS` elapses.
 *
 * @param options - Login + behavior options; the five string fields are required and non-empty.
 * @returns A promise resolving to a bootstrapped {@link OfflineTokenProvider} with an active refresh loop.
 * @throws {@link TokenError} When `options` is missing, a required field is empty, or the login fails.
 */
export async function login(options: OfflineTokenLoginOptions): Promise<OfflineTokenProvider> {
  if (options === undefined || options === null) {
    throw new TokenError("login() requires an options object");
  }
  const requiredKeys: (keyof OfflineTokenLoginOptions)[] = [
    "keycloakUrl",
    "realm",
    "clientId",
    "username",
    "password"
  ];
  for (const key of requiredKeys) {
    const value: unknown = options[key];
    if (typeof value !== "string" || value.length === 0) {
      throw new TokenError(`login() option "${key}" is required and must be a non-empty string`);
    }
  }

  const provider: OfflineTokenProvider = new OfflineTokenProvider(options);
  await provider.bootstrap(options.username, options.password);
  return provider;
}
