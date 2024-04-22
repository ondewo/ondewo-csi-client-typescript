import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_aiservices_pb from '../../ondewo/nlu/aiservices_pb';


export class AiServicesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  extractEntities(
    request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;

  generateUserSays(
    request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.GenerateUserSaysResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.GenerateUserSaysResponse>;

  generateResponses(
    request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.GenerateResponsesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.GenerateResponsesResponse>;

  getAlternativeSentences(
    request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse>;

  getAlternativeTrainingPhrases(
    request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse>;

  getSynonyms(
    request: ondewo_nlu_aiservices_pb.GetSynonymsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.GetSynonymsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.GetSynonymsResponse>;

  classifyIntents(
    request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.ClassifyIntentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.ClassifyIntentsResponse>;

  extractEntitiesFuzzy(
    request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_aiservices_pb.ExtractEntitiesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;

}

export class AiServicesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  extractEntities(
    request: ondewo_nlu_aiservices_pb.ExtractEntitiesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;

  generateUserSays(
    request: ondewo_nlu_aiservices_pb.GenerateUserSaysRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.GenerateUserSaysResponse>;

  generateResponses(
    request: ondewo_nlu_aiservices_pb.GenerateResponsesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.GenerateResponsesResponse>;

  getAlternativeSentences(
    request: ondewo_nlu_aiservices_pb.GetAlternativeSentencesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.GetAlternativeSentencesResponse>;

  getAlternativeTrainingPhrases(
    request: ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.GetAlternativeTrainingPhrasesResponse>;

  getSynonyms(
    request: ondewo_nlu_aiservices_pb.GetSynonymsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.GetSynonymsResponse>;

  classifyIntents(
    request: ondewo_nlu_aiservices_pb.ClassifyIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.ClassifyIntentsResponse>;

  extractEntitiesFuzzy(
    request: ondewo_nlu_aiservices_pb.ExtractEntitiesFuzzyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_aiservices_pb.ExtractEntitiesResponse>;

}

