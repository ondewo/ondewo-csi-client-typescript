import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';

export class OperationsClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.ListOperationsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.ListOperationsResponse>;

	getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
}

export class OperationsPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	listOperations(
		request: ondewo_nlu_operations_pb.ListOperationsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.ListOperationsResponse>;

	getOperation(
		request: ondewo_nlu_operations_pb.GetOperationRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	deleteOperation(
		request: ondewo_nlu_operations_pb.DeleteOperationRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	cancelOperation(
		request: ondewo_nlu_operations_pb.CancelOperationRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;
}
