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
 * Reusable, transport-agnostic core of the "list the S2S pipelines" example: attach the bearer
 * `authorization` metadata (the SDK's bearer-only auth convention), issue the representative
 * `ListS2sPipelines` RPC through the injected client, and map the response to plain, JSON-friendly
 * summaries.
 *
 * The client, request and `Authorization` header are all parameters, so this function is fully unit
 * testable with hand-rolled mocks and never touches the network on its own (see
 * `listS2sPipelinesExample.spec.ts`). The runnable end-to-end demo that wires in the REAL generated
 * gRPC-web client and the REAL offline-token provider lives in `authenticateAndListS2sPipelines.ts`.
 *
 * The structural `*Like` / `Lister` interfaces below are the minimal shape this logic depends on; the
 * generated `ConversationsPromiseClient` and `ListS2sPipelinesResponse` satisfy them structurally, so
 * the same function serves both the real demo and the mocked test. Keeping this module free of any
 * `../api/**` value import is deliberate: the generated grpc-web stubs are browser/bundler-oriented
 * and are not loadable under a plain Node test runner.
 *
 * @packageDocumentation
 */

import type * as grpcWeb from "grpc-web";

/** A flattened, JSON-friendly view of one S2S pipeline (the subset of fields this example surfaces). */
export interface PipelineSummary {
  /** The unique pipeline id. */
  id: string;
  /** The NLU project the pipeline routes speech-recognized text to. */
  nluProjectId: string;
  /** The NLU language code the pipeline is configured for. */
  nluLanguageCode: string;
}

/** The subset of the generated `S2sPipeline` message this example reads. */
export interface S2sPipelineLike {
  /** @returns The unique pipeline id. */
  getId(): string;
  /** @returns The NLU project id. */
  getNluProjectId(): string;
  /** @returns The NLU language code. */
  getNluLanguageCode(): string;
}

/** The subset of the generated `ListS2sPipelinesResponse` message this example reads. */
export interface ListS2sPipelinesResponseLike {
  /** @returns The configured pipelines. */
  getPipelinesList(): S2sPipelineLike[];
}

/**
 * The single gRPC method this example needs. The generated `ConversationsPromiseClient` satisfies
 * this interface structurally, so a real client is used in the demo while the unit test injects a
 * lightweight mock.
 */
export interface S2sPipelineLister {
  /**
   * List the S2S pipelines configured on the server.
   *
   * @param request - The (field-less) list request; the generated `ListS2sPipelinesRequest`.
   * @param metadata - Optional gRPC metadata; carries the `authorization` bearer header.
   * @returns A promise resolving to the list response.
   */
  listS2sPipelines(request: object, metadata?: grpcWeb.Metadata): Promise<ListS2sPipelinesResponseLike>;
}

/**
 * Issue `ListS2sPipelines` with a bearer-auth header and map the response to plain summaries.
 *
 * @param client - The CSI conversations client (real or mocked) to issue the RPC through.
 * @param request - The list request to send (the generated `ListS2sPipelinesRequest`).
 * @param authorizationHeader - The `Authorization` header value, e.g. `"Bearer <access-token>"`,
 *   typically read from the offline-token provider's `getAuthorizationHeader()`.
 * @returns A promise resolving to one {@link PipelineSummary} per configured pipeline.
 */
export async function listS2sPipelineSummaries(
  client: S2sPipelineLister,
  request: object,
  authorizationHeader: string
): Promise<PipelineSummary[]> {
  const metadata: grpcWeb.Metadata = { Authorization: authorizationHeader };
  const response: ListS2sPipelinesResponseLike = await client.listS2sPipelines(request, metadata);
  return response.getPipelinesList().map(
    (pipeline: S2sPipelineLike): PipelineSummary => ({
      id: pipeline.getId(),
      nluProjectId: pipeline.getNluProjectId(),
      nluLanguageCode: pipeline.getNluLanguageCode()
    })
  );
}
