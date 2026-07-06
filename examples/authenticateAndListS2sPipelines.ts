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
 * Runnable end-to-end demo: authenticate with the ONDEWO CSI server and list its S2S
 * (speech-to-speech) pipelines.
 *
 * Flow:
 *   1. one-time ROPC login via the D18 headless-SDK offline-token helper ({@link login}) against the
 *      PUBLIC SDK client `ondewo-nlu-cai-sdk-public`, yielding a short-lived, auto-refreshed OIDC
 *      access token (the SDK's bearer-only auth convention);
 *   2. construct the generated gRPC-web {@link ConversationsPromiseClient};
 *   3. call the representative `ListS2sPipelines` RPC, forwarding the access token as the
 *      `Authorization: Bearer <token>` gRPC metadata header via {@link listS2sPipelineSummaries};
 *   4. print one line per pipeline, then stop the provider's background refresh loop.
 *
 * Configuration is read from `examples/environment.env` (loaded via dotenv) so nothing is hard-coded:
 *
 *   - `ONDEWO_HOST`               CSI server host, e.g. `csi.example.com`
 *   - `ONDEWO_PORT`               CSI server port, e.g. `443`
 *   - `ONDEWO_USE_SECURE_CHANNEL` `true` for an https gRPC-web channel, `false` for plaintext http
 *   - `KEYCLOAK_URL`              e.g. `https://auth.example.com/auth`
 *   - `KEYCLOAK_REALM`            e.g. `ondewo-ccai-platform`
 *   - `KEYCLOAK_CLIENT_ID`        public SDK client id, e.g. `ondewo-nlu-cai-sdk-public`
 *   - `KEYCLOAK_USER_NAME`        2FA-exempt technical-user email
 *   - `KEYCLOAK_PASSWORD`         technical-user password
 *   - `KEYCLOAK_VERIFY_SSL`       `false` disables Keycloak TLS verification (self-signed local setups)
 *
 * Run (after `npm run build`, from the compiled output) with:
 *
 * ```shell
 * node authenticateAndListS2sPipelines.js
 * ```
 *
 * @packageDocumentation
 */

import * as path from "path";

import * as dotenv from "dotenv";

import { ConversationsPromiseClient } from "../api/ondewo/csi/conversation_grpc_web_pb";
import { ListS2sPipelinesRequest } from "../api/ondewo/csi/conversation_pb";
import { login, OfflineTokenProvider } from "../auth/offlineTokenProvider";

import { listS2sPipelineSummaries, PipelineSummary } from "./listS2sPipelinesExample";

// Load configuration from examples/environment.env; the path is resolved relative to this script so
// the example can be launched from any working directory.
dotenv.config({ path: path.join(__dirname, "environment.env") });

/**
 * Read a required environment variable or throw a descriptive error.
 *
 * @param name - The environment variable name.
 * @returns The non-empty variable value.
 * @throws {@link Error} When the variable is unset or empty.
 */
function requireEnv(name: string): string {
  const value: string | undefined = process.env[name];
  if (value === undefined || value.length === 0) {
    throw new Error(`missing required environment variable ${name}`);
  }
  return value;
}

/**
 * Read an optional boolean environment variable (case-insensitive `"true"`), falling back to a default.
 *
 * @param name - The environment variable name.
 * @param defaultValue - The value to use when the variable is unset or empty.
 * @returns `true` when the variable equals `"true"` (any case), otherwise `false` / the default.
 */
function readBooleanEnv(name: string, defaultValue: boolean): boolean {
  const value: string | undefined = process.env[name];
  if (value === undefined || value.length === 0) {
    return defaultValue;
  }
  return value.toLowerCase() === "true";
}

/**
 * Authenticate, list the S2S pipelines and print a one-line summary of each.
 *
 * @returns A promise that resolves once the pipelines have been listed and printed.
 */
export async function main(): Promise<void> {
  const keycloakRealm: string = requireEnv("KEYCLOAK_REALM");
  const useSecureChannel: boolean = readBooleanEnv("ONDEWO_USE_SECURE_CHANNEL", false);
  let scheme: string = "http";
  if (useSecureChannel) {
    scheme = "https";
  }
  const grpcHost: string = `${scheme}://${requireEnv("ONDEWO_HOST")}:${requireEnv("ONDEWO_PORT")}`;

  console.log(`START: authenticating against Keycloak realm '${keycloakRealm}' and listing ONDEWO CSI S2S pipelines`);

  const provider: OfflineTokenProvider = await login({
    keycloakUrl: requireEnv("KEYCLOAK_URL"),
    realm: keycloakRealm,
    clientId: requireEnv("KEYCLOAK_CLIENT_ID"),
    username: requireEnv("KEYCLOAK_USER_NAME"),
    password: requireEnv("KEYCLOAK_PASSWORD"),
    keycloakVerifySsl: readBooleanEnv("KEYCLOAK_VERIFY_SSL", true)
  });
  console.log("authenticated: obtained an OIDC access token from Keycloak");
  try {
    console.log(`connecting to ONDEWO CSI gRPC-web endpoint ${grpcHost}`);
    const client: ConversationsPromiseClient = new ConversationsPromiseClient(grpcHost, null, null);
    const request: ListS2sPipelinesRequest = new ListS2sPipelinesRequest();
    console.log("calling ListS2sPipelines RPC ...");
    const summaries: PipelineSummary[] = await listS2sPipelineSummaries(
      client,
      request,
      provider.getAuthorizationHeader()
    );
    console.log(`found ${summaries.length} S2S pipeline(s):`);
    for (const summary of summaries) {
      console.log(`  ${summary.id} -> project=${summary.nluProjectId} lang=${summary.nluLanguageCode}`);
    }
    console.log("DONE: listed ONDEWO CSI S2S pipelines");
  } finally {
    provider.stop();
  }
}

if (require.main === module) {
  main().catch((error: unknown): void => {
    console.error("FAILED: could not authenticate and list ONDEWO CSI S2S pipelines");
    console.error(error);
    process.exit(1);
  });
}
