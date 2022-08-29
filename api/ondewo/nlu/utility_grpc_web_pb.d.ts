import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_utility_pb from '../../ondewo/nlu/utility_pb';


export class UtilitiesClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateRegex(
    request: ondewo_nlu_utility_pb.ValidateRegexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.ValidateRegexResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.ValidateRegexResponse>;

  validateEmbeddedRegex(
    request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse>;

  cleanAllIntents(
    request: ondewo_nlu_utility_pb.CleanAllIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.CleanAllIntentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.CleanAllIntentsResponse>;

  cleanIntent(
    request: ondewo_nlu_utility_pb.CleanIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.CleanIntentResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.CleanIntentResponse>;

  cleanAllEntityTypes(
    request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.CleanAllEntityTypesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.CleanAllEntityTypesResponse>;

  cleanEntityType(
    request: ondewo_nlu_utility_pb.CleanEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.CleanEntityTypeResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.CleanEntityTypeResponse>;

  addTrainingPhrases(
    request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;

  addTrainingPhrasesFromCSV(
    request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_utility_pb.AddTrainingPhrasesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;

}

export class UtilitiesPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  validateRegex(
    request: ondewo_nlu_utility_pb.ValidateRegexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.ValidateRegexResponse>;

  validateEmbeddedRegex(
    request: ondewo_nlu_utility_pb.ValidateEmbeddedRegexRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.ValidateEmbeddedRegexResponse>;

  cleanAllIntents(
    request: ondewo_nlu_utility_pb.CleanAllIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.CleanAllIntentsResponse>;

  cleanIntent(
    request: ondewo_nlu_utility_pb.CleanIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.CleanIntentResponse>;

  cleanAllEntityTypes(
    request: ondewo_nlu_utility_pb.CleanAllEntityTypesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.CleanAllEntityTypesResponse>;

  cleanEntityType(
    request: ondewo_nlu_utility_pb.CleanEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.CleanEntityTypeResponse>;

  addTrainingPhrases(
    request: ondewo_nlu_utility_pb.AddTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;

  addTrainingPhrasesFromCSV(
    request: ondewo_nlu_utility_pb.AddTrainingPhrasesFromCSVRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_utility_pb.AddTrainingPhrasesResponse>;

}

