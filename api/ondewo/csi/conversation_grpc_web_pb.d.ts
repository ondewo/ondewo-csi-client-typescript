import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_csi_conversation_pb from '../../ondewo/csi/conversation_pb';

export class ConversationsClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipeline,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	getS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipelineId,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_csi_conversation_pb.S2sPipeline) => void
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.S2sPipeline>;

	updateS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipeline,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	deleteS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipelineId,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	listS2sPipelines(
		request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_csi_conversation_pb.ListS2sPipelinesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.ListS2sPipelinesResponse>;

	checkUpstreamHealth(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_csi_conversation_pb.CheckUpstreamHealthResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.CheckUpstreamHealthResponse>;

	getControlStream(
		request: ondewo_csi_conversation_pb.ControlStreamRequest,
		metadata?: grpcWeb.Metadata
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;

	setControlStatus(
		request: ondewo_csi_conversation_pb.SetControlStatusRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_csi_conversation_pb.SetControlStatusResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.SetControlStatusResponse>;
}

export class ConversationsPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipeline,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	getS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipelineId,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_csi_conversation_pb.S2sPipeline>;

	updateS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipeline,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	deleteS2sPipeline(
		request: ondewo_csi_conversation_pb.S2sPipelineId,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	listS2sPipelines(
		request: ondewo_csi_conversation_pb.ListS2sPipelinesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_csi_conversation_pb.ListS2sPipelinesResponse>;

	checkUpstreamHealth(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_csi_conversation_pb.CheckUpstreamHealthResponse>;

	getControlStream(
		request: ondewo_csi_conversation_pb.ControlStreamRequest,
		metadata?: grpcWeb.Metadata
	): grpcWeb.ClientReadableStream<ondewo_csi_conversation_pb.ControlStreamResponse>;

	setControlStatus(
		request: ondewo_csi_conversation_pb.SetControlStatusRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_csi_conversation_pb.SetControlStatusResponse>;
}
