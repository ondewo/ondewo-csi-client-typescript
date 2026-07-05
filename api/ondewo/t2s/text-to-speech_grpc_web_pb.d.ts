import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb'; // proto import: "ondewo/t2s/text-to-speech.proto"


export class Text2SpeechClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  synthesize(
    request: ondewo_t2s_text$to$speech_pb.SynthesizeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.SynthesizeResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.SynthesizeResponse>;

  batchSynthesize(
    request: ondewo_t2s_text$to$speech_pb.BatchSynthesizeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse>;

  normalizeText(
    request: ondewo_t2s_text$to$speech_pb.NormalizeTextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.NormalizeTextResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.NormalizeTextResponse>;

  getT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.Text2SpeechConfig>;

  createT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.T2sPipelineId) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.T2sPipelineId>;

  deleteT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listT2sPipelines(
    request: ondewo_t2s_text$to$speech_pb.ListT2sPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse>;

  listT2sLanguages(
    request: ondewo_t2s_text$to$speech_pb.ListT2sLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse>;

  listT2sDomains(
    request: ondewo_t2s_text$to$speech_pb.ListT2sDomainsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse>;

  listT2sNormalizationPipelines(
    request: ondewo_t2s_text$to$speech_pb.ListT2sNormalizationPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.ListT2sNormalizationPipelinesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.ListT2sNormalizationPipelinesResponse>;

  getServiceInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse>;

  getCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto>;

  createCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.CreateCustomPhonemizerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.PhonemizerId) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.PhonemizerId>;

  deleteCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.UpdateCustomPhonemizerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto>;

  listCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse>;

}

export class Text2SpeechPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  synthesize(
    request: ondewo_t2s_text$to$speech_pb.SynthesizeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.SynthesizeResponse>;

  batchSynthesize(
    request: ondewo_t2s_text$to$speech_pb.BatchSynthesizeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.BatchSynthesizeResponse>;

  normalizeText(
    request: ondewo_t2s_text$to$speech_pb.NormalizeTextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.NormalizeTextResponse>;

  getT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.Text2SpeechConfig>;

  createT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.T2sPipelineId>;

  deleteT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.T2sPipelineId,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateT2sPipeline(
    request: ondewo_t2s_text$to$speech_pb.Text2SpeechConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listT2sPipelines(
    request: ondewo_t2s_text$to$speech_pb.ListT2sPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.ListT2sPipelinesResponse>;

  listT2sLanguages(
    request: ondewo_t2s_text$to$speech_pb.ListT2sLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.ListT2sLanguagesResponse>;

  listT2sDomains(
    request: ondewo_t2s_text$to$speech_pb.ListT2sDomainsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.ListT2sDomainsResponse>;

  listT2sNormalizationPipelines(
    request: ondewo_t2s_text$to$speech_pb.ListT2sNormalizationPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.ListT2sNormalizationPipelinesResponse>;

  getServiceInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.T2SGetServiceInfoResponse>;

  getCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto>;

  createCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.CreateCustomPhonemizerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.PhonemizerId>;

  deleteCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.PhonemizerId,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.UpdateCustomPhonemizerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.CustomPhonemizerProto>;

  listCustomPhonemizer(
    request: ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_t2s_text$to$speech_pb.ListCustomPhonemizerResponse>;

}

