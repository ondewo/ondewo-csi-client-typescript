import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_project_statistics_pb from '../../ondewo/nlu/project_statistics_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';

export class ProjectStatisticsClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;

	getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_common_pb.StatResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_common_pb.StatResponse>;
}

export class ProjectStatisticsPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	getIntentCount(
		request: ondewo_nlu_project_statistics_pb.GetIntentCountRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getEntityTypeCount(
		request: ondewo_nlu_project_statistics_pb.GetEntityTypeCountRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getUserCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getSessionCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getTrainingPhraseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getResponseCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getEntityValueCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;

	getEntitySynonymCount(
		request: ondewo_nlu_project_statistics_pb.GetProjectElementStatRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_common_pb.StatResponse>;
}
