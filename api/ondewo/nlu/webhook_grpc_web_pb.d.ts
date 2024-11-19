import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_nlu_webhook_pb from '../../ondewo/nlu/webhook_pb'; // proto import: "ondewo/nlu/webhook.proto"


export class WebhookClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  responseRefinement(
    request: ondewo_nlu_webhook_pb.WebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_webhook_pb.WebhookResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.WebhookResponse>;

  slotFilling(
    request: ondewo_nlu_webhook_pb.WebhookRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_webhook_pb.WebhookResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.WebhookResponse>;

  ping(
    request: ondewo_nlu_webhook_pb.PingRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_webhook_pb.PingResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.PingResponse>;

  createSessionEntityType(
    request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_webhook_pb.SessionEntityType) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.SessionEntityType>;

  updateSessionEntityType(
    request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_webhook_pb.SessionEntityType) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.SessionEntityType>;

  deleteSessionEntityType(
    request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class WebhookPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  responseRefinement(
    request: ondewo_nlu_webhook_pb.WebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_webhook_pb.WebhookResponse>;

  slotFilling(
    request: ondewo_nlu_webhook_pb.WebhookRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_webhook_pb.WebhookResponse>;

  ping(
    request: ondewo_nlu_webhook_pb.PingRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_webhook_pb.PingResponse>;

  createSessionEntityType(
    request: ondewo_nlu_webhook_pb.CreateSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_webhook_pb.SessionEntityType>;

  updateSessionEntityType(
    request: ondewo_nlu_webhook_pb.UpdateSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_webhook_pb.SessionEntityType>;

  deleteSessionEntityType(
    request: ondewo_nlu_webhook_pb.DeleteSessionEntityTypeRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

