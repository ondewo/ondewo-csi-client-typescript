import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb'; // proto import: "ondewo/nlu/context.proto"


export class ContextsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listContexts(
    request: ondewo_nlu_context_pb.ListContextsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_context_pb.ListContextsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_context_pb.ListContextsResponse>;

  getContext(
    request: ondewo_nlu_context_pb.GetContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_context_pb.Context) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_context_pb.Context>;

  createContext(
    request: ondewo_nlu_context_pb.CreateContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_context_pb.Context) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_context_pb.Context>;

  updateContext(
    request: ondewo_nlu_context_pb.UpdateContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_context_pb.Context) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_context_pb.Context>;

  deleteContext(
    request: ondewo_nlu_context_pb.DeleteContextRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  deleteAllContexts(
    request: ondewo_nlu_context_pb.DeleteAllContextsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class ContextsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  listContexts(
    request: ondewo_nlu_context_pb.ListContextsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_context_pb.ListContextsResponse>;

  getContext(
    request: ondewo_nlu_context_pb.GetContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_context_pb.Context>;

  createContext(
    request: ondewo_nlu_context_pb.CreateContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_context_pb.Context>;

  updateContext(
    request: ondewo_nlu_context_pb.UpdateContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_context_pb.Context>;

  deleteContext(
    request: ondewo_nlu_context_pb.DeleteContextRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  deleteAllContexts(
    request: ondewo_nlu_context_pb.DeleteAllContextsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

