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
 * Unit tests for the reusable `ListS2sPipelines` example core. The gRPC client is a hand-rolled mock
 * that records the request + metadata it receives and returns a scripted response -- there is NO
 * network access and no live CSI server.
 *
 * The mocks implement the module's own structural `*Like` / `Lister` interfaces (the same shapes the
 * generated stubs satisfy), so the test exercises the exact code path the real client would drive,
 * without loading the browser-oriented generated grpc-web runtime.
 *
 * Run directly with: `node --test --experimental-strip-types examples/listS2sPipelinesExample.spec.ts`
 *
 * @packageDocumentation
 */

import { test as runTestCase } from "node:test";
import assert from "node:assert/strict";

import type * as grpcWeb from "grpc-web";

import {
  listS2sPipelineSummaries,
  type ListS2sPipelinesResponseLike,
  type PipelineSummary,
  type S2sPipelineLike,
  type S2sPipelineLister
} from "./listS2sPipelinesExample";

/** The bearer header the example must forward verbatim as `authorization` gRPC metadata. */
const AUTHORIZATION_HEADER: string = "Bearer access-token-xyz";

/** A stand-in for the field-less generated `ListS2sPipelinesRequest`. */
const REQUEST: object = { kind: "ListS2sPipelinesRequest" };

/** A single RPC invocation captured by the client mock for later assertion. */
interface RecordedCall {
  /** The request the example passed to the RPC. */
  request: object;
  /** The metadata the example attached to the RPC (carries the bearer header). */
  metadata: grpcWeb.Metadata | undefined;
}

/** A mocked {@link S2sPipelineLister} plus the mutable list of calls it has recorded. */
interface ClientStub {
  /** The mock to inject as the example's client. */
  client: S2sPipelineLister;
  /** RPC invocations recorded in call order; assertions read this after the code under test runs. */
  calls: RecordedCall[];
}

/**
 * Build a mocked {@link S2sPipelineLike} from primitive fields.
 *
 * @param id - The pipeline id.
 * @param nluProjectId - The NLU project id.
 * @param nluLanguageCode - The NLU language code.
 * @returns A fake pipeline exposing the getters the example reads.
 */
function makePipeline(id: string, nluProjectId: string, nluLanguageCode: string): S2sPipelineLike {
  return {
    getId: (): string => id,
    getNluProjectId: (): string => nluProjectId,
    getNluLanguageCode: (): string => nluLanguageCode
  };
}

/**
 * Build a mock CSI client that returns a fixed response and records every RPC it receives.
 *
 * @param pipelines - The pipelines the scripted response should expose.
 * @returns A {@link ClientStub} exposing the mock `client` and its recorded `calls`.
 */
function makeClientStub(pipelines: S2sPipelineLike[]): ClientStub {
  const calls: RecordedCall[] = [];
  const response: ListS2sPipelinesResponseLike = { getPipelinesList: (): S2sPipelineLike[] => pipelines };
  const client: S2sPipelineLister = {
    listS2sPipelines(request: object, metadata?: grpcWeb.Metadata): Promise<ListS2sPipelinesResponseLike> {
      calls.push({ request, metadata });
      return Promise.resolve(response);
    }
  };
  return { client, calls };
}

runTestCase("lists pipelines, maps them to summaries and forwards the bearer auth header", async (): Promise<void> => {
  const stub: ClientStub = makeClientStub([
    makePipeline("pipeline-1", "project-42", "en"),
    makePipeline("pipeline-2", "project-7", "de")
  ]);

  const summaries: PipelineSummary[] = await listS2sPipelineSummaries(stub.client, REQUEST, AUTHORIZATION_HEADER);

  // The example issued exactly one RPC, forwarding the request and the bearer header as metadata.
  assert.equal(stub.calls.length, 1);
  assert.equal(stub.calls[0].request, REQUEST);
  assert.equal(stub.calls[0].metadata?.authorization, AUTHORIZATION_HEADER);

  // The response was mapped to the flattened summary shape, preserving order.
  assert.deepEqual(summaries, [
    { id: "pipeline-1", nluProjectId: "project-42", nluLanguageCode: "en" },
    { id: "pipeline-2", nluProjectId: "project-7", nluLanguageCode: "de" }
  ]);
});

runTestCase("returns an empty array when the server reports no pipelines", async (): Promise<void> => {
  const stub: ClientStub = makeClientStub([]);

  const summaries: PipelineSummary[] = await listS2sPipelineSummaries(stub.client, REQUEST, AUTHORIZATION_HEADER);

  assert.equal(stub.calls.length, 1);
  assert.deepEqual(summaries, []);
});
