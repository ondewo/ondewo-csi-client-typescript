import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_webhook_pb from '../../ondewo/nlu/webhook_pb';

export class WebhookClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	responseRefinement(
		request: ondewo_nlu_webhook_pb.WebhookRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_webhook_pb.WebhookResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.WebhookResponse>;

	slotFilling(
		request: ondewo_nlu_webhook_pb.WebhookRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_webhook_pb.WebhookResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.WebhookResponse>;

	ping(
		request: ondewo_nlu_webhook_pb.PingRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_webhook_pb.PingResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_webhook_pb.PingResponse>;
}

export class WebhookPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

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
}
