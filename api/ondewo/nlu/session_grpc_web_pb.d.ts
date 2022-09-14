import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';

export class SessionsClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	detectIntent(
		request: ondewo_nlu_session_pb.DetectIntentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.DetectIntentResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.DetectIntentResponse>;

	listSessions(
		request: ondewo_nlu_session_pb.ListSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListSessionsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListSessionsResponse>;

	getSession(
		request: ondewo_nlu_session_pb.GetSessionRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	createSession(
		request: ondewo_nlu_session_pb.CreateSessionRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	trackSessionStep(
		request: ondewo_nlu_session_pb.TrackSessionStepRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	deleteSession(
		request: ondewo_nlu_session_pb.DeleteSessionRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	listSessionLabels(
		request: ondewo_nlu_session_pb.ListSessionLabelsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListSessionLabelsResponse>;

	addSessionLabels(
		request: ondewo_nlu_session_pb.AddSessionLabelsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	removeSessionLabels(
		request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	listSessionReviews(
		request: ondewo_nlu_session_pb.ListSessionReviewsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListSessionReviewsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListSessionReviewsResponse>;

	getSessionReview(
		request: ondewo_nlu_session_pb.GetSessionReviewRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.SessionReview) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.SessionReview>;

	getLatestSessionReview(
		request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.SessionReview) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.SessionReview>;

	createSessionReview(
		request: ondewo_nlu_session_pb.CreateSessionReviewRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.SessionReview) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.SessionReview>;
}

export class SessionsPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	detectIntent(
		request: ondewo_nlu_session_pb.DetectIntentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.DetectIntentResponse>;

	listSessions(
		request: ondewo_nlu_session_pb.ListSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListSessionsResponse>;

	getSession(
		request: ondewo_nlu_session_pb.GetSessionRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	createSession(
		request: ondewo_nlu_session_pb.CreateSessionRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	trackSessionStep(
		request: ondewo_nlu_session_pb.TrackSessionStepRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	deleteSession(
		request: ondewo_nlu_session_pb.DeleteSessionRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	listSessionLabels(
		request: ondewo_nlu_session_pb.ListSessionLabelsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListSessionLabelsResponse>;

	addSessionLabels(
		request: ondewo_nlu_session_pb.AddSessionLabelsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	removeSessionLabels(
		request: ondewo_nlu_session_pb.RemoveSessionLabelsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	listSessionReviews(
		request: ondewo_nlu_session_pb.ListSessionReviewsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListSessionReviewsResponse>;

	getSessionReview(
		request: ondewo_nlu_session_pb.GetSessionReviewRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.SessionReview>;

	getLatestSessionReview(
		request: ondewo_nlu_session_pb.GetLatestSessionReviewRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.SessionReview>;

	createSessionReview(
		request: ondewo_nlu_session_pb.CreateSessionReviewRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.SessionReview>;
}
