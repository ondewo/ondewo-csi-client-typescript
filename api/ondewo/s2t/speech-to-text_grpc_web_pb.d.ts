import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb'; // proto import: "ondewo/s2t/speech-to-text.proto"


export class Speech2TextClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transcribeFile(
    request: ondewo_s2t_speech$to$text_pb.TranscribeFileRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.TranscribeFileResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.TranscribeFileResponse>;

  getS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.S2tPipelineId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.Speech2TextConfig) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.Speech2TextConfig>;

  createS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.Speech2TextConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.S2tPipelineId) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.S2tPipelineId>;

  deleteS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.S2tPipelineId,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.Speech2TextConfig,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listS2tPipelines(
    request: ondewo_s2t_speech$to$text_pb.ListS2tPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.ListS2tPipelinesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.ListS2tPipelinesResponse>;

  listS2tLanguages(
    request: ondewo_s2t_speech$to$text_pb.ListS2tLanguagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.ListS2tLanguagesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.ListS2tLanguagesResponse>;

  listS2tDomains(
    request: ondewo_s2t_speech$to$text_pb.ListS2tDomainsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.ListS2tDomainsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.ListS2tDomainsResponse>;

  getServiceInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.S2tGetServiceInfoResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.S2tGetServiceInfoResponse>;

  listS2tLanguageModels(
    request: ondewo_s2t_speech$to$text_pb.ListS2tLanguageModelsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.ListS2tLanguageModelsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.ListS2tLanguageModelsResponse>;

  createUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.CreateUserLanguageModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.DeleteUserLanguageModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  addDataToUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.AddDataToUserLanguageModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  trainUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.TrainUserLanguageModelRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  listS2tNormalizationPipelines(
    request: ondewo_s2t_speech$to$text_pb.ListS2tNormalizationPipelinesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_s2t_speech$to$text_pb.ListS2tNormalizationPipelinesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_s2t_speech$to$text_pb.ListS2tNormalizationPipelinesResponse>;

}

export class Speech2TextPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  transcribeFile(
    request: ondewo_s2t_speech$to$text_pb.TranscribeFileRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.TranscribeFileResponse>;

  getS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.S2tPipelineId,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.Speech2TextConfig>;

  createS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.Speech2TextConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.S2tPipelineId>;

  deleteS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.S2tPipelineId,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  updateS2tPipeline(
    request: ondewo_s2t_speech$to$text_pb.Speech2TextConfig,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listS2tPipelines(
    request: ondewo_s2t_speech$to$text_pb.ListS2tPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.ListS2tPipelinesResponse>;

  listS2tLanguages(
    request: ondewo_s2t_speech$to$text_pb.ListS2tLanguagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.ListS2tLanguagesResponse>;

  listS2tDomains(
    request: ondewo_s2t_speech$to$text_pb.ListS2tDomainsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.ListS2tDomainsResponse>;

  getServiceInfo(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.S2tGetServiceInfoResponse>;

  listS2tLanguageModels(
    request: ondewo_s2t_speech$to$text_pb.ListS2tLanguageModelsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.ListS2tLanguageModelsResponse>;

  createUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.CreateUserLanguageModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.DeleteUserLanguageModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  addDataToUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.AddDataToUserLanguageModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  trainUserLanguageModel(
    request: ondewo_s2t_speech$to$text_pb.TrainUserLanguageModelRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  listS2tNormalizationPipelines(
    request: ondewo_s2t_speech$to$text_pb.ListS2tNormalizationPipelinesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_s2t_speech$to$text_pb.ListS2tNormalizationPipelinesResponse>;

}

