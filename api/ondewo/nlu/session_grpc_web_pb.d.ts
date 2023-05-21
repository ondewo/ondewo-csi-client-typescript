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

	listSessionLabelsOfAllSessions(
		request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListSessionLabelsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListSessionLabelsResponse>;

	listLanguageCodesOfAllSessions(
		request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListLanguageCodesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListLanguageCodesResponse>;

	listMatchedIntentsOfAllSessions(
		request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListMatchedIntentsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListMatchedIntentsResponse>;

	listMatchedEntityTypesOfAllSessions(
		request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListMatchedEntityTypesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListMatchedEntityTypesResponse>;

	listUserIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListUserIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListUserIdsResponse>;

	listIdentifiedUserIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse>;

	listTagsOfAllSessions(
		request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListTagsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListTagsResponse>;

	listInputContextsOfAllSessions(
		request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListInputContextsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListInputContextsResponse>;

	listOutputContextsOfAllSessions(
		request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListOutputContextsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListOutputContextsResponse>;

	listPlatformsOfAllSessions(
		request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListPlatformsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListPlatformsResponse>;

	listAccountIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListAccountIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListAccountIdsResponse>;

	listPropertyIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListPropertyIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListPropertyIdsResponse>;

	listDatastreamIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListDatastreamIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListDatastreamIdsResponse>;

	listOriginIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.ListOriginIdsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.ListOriginIdsResponse>;

	addSessionLabels(
		request: ondewo_nlu_session_pb.AddSessionLabelsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_session_pb.Session) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_session_pb.Session>;

	deleteSessionLabels(
		request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest,
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

	listSessionLabelsOfAllSessions(
		request: ondewo_nlu_session_pb.ListSessionLabelsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListSessionLabelsResponse>;

	listLanguageCodesOfAllSessions(
		request: ondewo_nlu_session_pb.ListLanguageCodesOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListLanguageCodesResponse>;

	listMatchedIntentsOfAllSessions(
		request: ondewo_nlu_session_pb.ListMatchedIntentsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListMatchedIntentsResponse>;

	listMatchedEntityTypesOfAllSessions(
		request: ondewo_nlu_session_pb.ListMatchedEntityTypesOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListMatchedEntityTypesResponse>;

	listUserIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListUserIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListUserIdsResponse>;

	listIdentifiedUserIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListIdentifiedUserIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListIdentifiedUserIdsResponse>;

	listTagsOfAllSessions(
		request: ondewo_nlu_session_pb.ListTagsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListTagsResponse>;

	listInputContextsOfAllSessions(
		request: ondewo_nlu_session_pb.ListInputContextsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListInputContextsResponse>;

	listOutputContextsOfAllSessions(
		request: ondewo_nlu_session_pb.ListOutputContextsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListOutputContextsResponse>;

	listPlatformsOfAllSessions(
		request: ondewo_nlu_session_pb.ListPlatformsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListPlatformsResponse>;

	listAccountIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListAccountIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListAccountIdsResponse>;

	listPropertyIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListPropertyIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListPropertyIdsResponse>;

	listDatastreamIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListDatastreamIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListDatastreamIdsResponse>;

	listOriginIdsOfAllSessions(
		request: ondewo_nlu_session_pb.ListOriginIdsOfAllSessionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.ListOriginIdsResponse>;

	addSessionLabels(
		request: ondewo_nlu_session_pb.AddSessionLabelsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_session_pb.Session>;

	deleteSessionLabels(
		request: ondewo_nlu_session_pb.DeleteSessionLabelsRequest,
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
