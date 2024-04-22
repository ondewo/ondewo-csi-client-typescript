import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';


export class IntentsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listIntents(
    request: ondewo_nlu_intent_pb.ListIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.ListIntentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListIntentsResponse>;

  getIntent(
    request: ondewo_nlu_intent_pb.GetIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  createIntent(
    request: ondewo_nlu_intent_pb.CreateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  updateIntent(
    request: ondewo_nlu_intent_pb.UpdateIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.Intent) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.Intent>;

  deleteIntent(
    request: ondewo_nlu_intent_pb.DeleteIntentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  batchDeleteIntents(
    request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  tagIntent(
    request: ondewo_nlu_intent_pb.IntentTagRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteIntentTag(
    request: ondewo_nlu_intent_pb.IntentTagRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  getIntentTags(
    request: ondewo_nlu_intent_pb.GetIntentTagsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.GetIntentTagsResponse>;

  getAllIntentTags(
    request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.GetIntentTagsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.GetIntentTagsResponse>;

  batchCreateTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchGetTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchUpdateTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchDeleteTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse>;

  listTrainingPhrases(
    request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.ListTrainingPhrasesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;

  batchCreateResponseMessages(
    request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchGetResponseMessages(
    request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchUpdateResponseMessages(
    request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchDeleteResponseMessages(
    request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse>;

  listResponseMessages(
    request: ondewo_nlu_intent_pb.ListResponseMessagesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.ListResponseMessagesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListResponseMessagesResponse>;

  batchCreateParameters(
    request: ondewo_nlu_intent_pb.BatchCreateParametersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchGetParameters(
    request: ondewo_nlu_intent_pb.BatchGetParametersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchUpdateParameters(
    request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchParametersStatusResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchDeleteParameters(
    request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.BatchDeleteParametersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.BatchDeleteParametersResponse>;

  listParameters(
    request: ondewo_nlu_intent_pb.ListParametersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.ListParametersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListParametersResponse>;

  listTrainingPhrasesofIntentsWithEnrichment(
    request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;

}

export class IntentsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listIntents(
    request: ondewo_nlu_intent_pb.ListIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListIntentsResponse>;

  getIntent(
    request: ondewo_nlu_intent_pb.GetIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  createIntent(
    request: ondewo_nlu_intent_pb.CreateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  updateIntent(
    request: ondewo_nlu_intent_pb.UpdateIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.Intent>;

  deleteIntent(
    request: ondewo_nlu_intent_pb.DeleteIntentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  batchUpdateIntents(
    request: ondewo_nlu_intent_pb.BatchUpdateIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  batchDeleteIntents(
    request: ondewo_nlu_intent_pb.BatchDeleteIntentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  tagIntent(
    request: ondewo_nlu_intent_pb.IntentTagRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteIntentTag(
    request: ondewo_nlu_intent_pb.IntentTagRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  getIntentTags(
    request: ondewo_nlu_intent_pb.GetIntentTagsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.GetIntentTagsResponse>;

  getAllIntentTags(
    request: ondewo_nlu_intent_pb.GetAllIntentTagsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.GetIntentTagsResponse>;

  batchCreateTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchCreateTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchGetTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchGetTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchUpdateTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchUpdateTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchTrainingPhrasesStatusResponse>;

  batchDeleteTrainingPhrases(
    request: ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchDeleteTrainingPhrasesResponse>;

  listTrainingPhrases(
    request: ondewo_nlu_intent_pb.ListTrainingPhrasesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListTrainingPhrasesResponse>;

  batchCreateResponseMessages(
    request: ondewo_nlu_intent_pb.BatchCreateResponseMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchGetResponseMessages(
    request: ondewo_nlu_intent_pb.BatchGetResponseMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchUpdateResponseMessages(
    request: ondewo_nlu_intent_pb.BatchUpdateResponseMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchResponseMessagesStatusResponse>;

  batchDeleteResponseMessages(
    request: ondewo_nlu_intent_pb.BatchDeleteResponseMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchDeleteResponseMessagesResponse>;

  listResponseMessages(
    request: ondewo_nlu_intent_pb.ListResponseMessagesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListResponseMessagesResponse>;

  batchCreateParameters(
    request: ondewo_nlu_intent_pb.BatchCreateParametersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchGetParameters(
    request: ondewo_nlu_intent_pb.BatchGetParametersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchUpdateParameters(
    request: ondewo_nlu_intent_pb.BatchUpdateParametersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchParametersStatusResponse>;

  batchDeleteParameters(
    request: ondewo_nlu_intent_pb.BatchDeleteParametersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.BatchDeleteParametersResponse>;

  listParameters(
    request: ondewo_nlu_intent_pb.ListParametersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListParametersResponse>;

  listTrainingPhrasesofIntentsWithEnrichment(
    request: ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_intent_pb.ListTrainingPhrasesofIntentsWithEnrichmentResponse>;

}

