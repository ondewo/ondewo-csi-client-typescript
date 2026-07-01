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
 *      access token (this replaces the removed legacy cai-token / HTTP-basic `users.login()` auth);
 *   2. construct the generated gRPC-web {@link ConversationsPromiseClient};
 *   3. call the representative `ListS2sPipelines` RPC, forwarding the access token as the
 *      `Authorization: Bearer <token>` gRPC metadata header via {@link listS2sPipelineSummaries};
 *   4. print one line per pipeline, then stop the provider's background refresh loop.
 *
 * Configuration is read from the environment so nothing is hard-coded:
 *
 *   - `ONDEWO_CSI_GRPC_HOST`     e.g. `https://csi.example.com:443`
 *   - `ONDEWO_KEYCLOAK_URL`      e.g. `https://auth.example.com/auth`
 *   - `ONDEWO_KEYCLOAK_REALM`    e.g. `ondewo-ccai-platform`
 *   - `ONDEWO_KEYCLOAK_USERNAME` 2FA-exempt technical-user email
 *   - `ONDEWO_KEYCLOAK_PASSWORD` technical-user password
 *
 * Run (after `npm run build`, from the compiled output) with:
 *
 * ```shell
 * node authenticateAndListS2sPipelines.js
 * ```
 *
 * @packageDocumentation
 */

import { ConversationsPromiseClient } from "../api/ondewo/csi/conversation_grpc_web_pb";
import { ListS2sPipelinesRequest } from "../api/ondewo/csi/conversation_pb";
import { login, OfflineTokenProvider } from "../auth/offlineTokenProvider";

import { listS2sPipelineSummaries, PipelineSummary } from "./listS2sPipelinesExample";

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
 * Authenticate, list the S2S pipelines and print a one-line summary of each.
 *
 * @returns A promise that resolves once the pipelines have been listed and printed.
 */
export async function main(): Promise<void> {
  const provider: OfflineTokenProvider = await login({
    keycloakUrl: requireEnv("ONDEWO_KEYCLOAK_URL"),
    realm: requireEnv("ONDEWO_KEYCLOAK_REALM"),
    clientId: "ondewo-nlu-cai-sdk-public",
    username: requireEnv("ONDEWO_KEYCLOAK_USERNAME"),
    password: requireEnv("ONDEWO_KEYCLOAK_PASSWORD")
  });
  try {
    const client: ConversationsPromiseClient = new ConversationsPromiseClient(
      requireEnv("ONDEWO_CSI_GRPC_HOST"),
      null,
      null
    );
    const request: ListS2sPipelinesRequest = new ListS2sPipelinesRequest();
    const summaries: PipelineSummary[] = await listS2sPipelineSummaries(
      client,
      request,
      provider.getAuthorizationHeader()
    );
    console.log(`found ${summaries.length} S2S pipeline(s):`);
    for (const summary of summaries) {
      console.log(`  ${summary.id} -> project=${summary.nluProjectId} lang=${summary.nluLanguageCode}`);
    }
  } finally {
    provider.stop();
  }
}

if (require.main === module) {
  main().catch((error: unknown): void => {
    console.error(error);
    process.exitCode = 1;
  });
}
