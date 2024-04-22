import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_agent_pb from '../../ondewo/nlu/agent_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';

export class AgentsClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.Agent) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

	updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.Agent) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

	getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.Agent) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

	deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsResponse>;

	listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ListAgentsOfUserResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;

	listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ListAgentsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListAgentsResponse>;

	addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ListUsersInProjectResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;

	getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.GetPlatformInfoResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;

	listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ListProjectPermissionsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;

	trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.GetAgentStatisticsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;

	getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.GetSessionsStatisticsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetSessionsStatisticsResponse>;

	setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.Agent) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.Agent>;

	setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.ExportResourcesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.ExportResourcesResponse>;

	getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.GetModelStatusesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.GetModelStatusesResponse>;

	getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.PlatformMapping>;

	setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.PlatformMapping) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.PlatformMapping>;

	getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntityType) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseEntityType>;

	getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntity) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseEntity>;

	getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym>;

	getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntent) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntent>;

	getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn>;

	getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut>;

	getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays>;

	getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags>;

	getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse>;

	getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters>;

	reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;
}

export class AgentsPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createAgent(
		request: ondewo_nlu_agent_pb.CreateAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.Agent>;

	updateAgent(
		request: ondewo_nlu_agent_pb.UpdateAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.Agent>;

	getAgent(
		request: ondewo_nlu_agent_pb.GetAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.Agent>;

	deleteAgent(
		request: ondewo_nlu_agent_pb.DeleteAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	deleteAllAgents(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	listAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ListAgentsResponse>;

	listAgentsOfUser(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ListAgentsOfUserResponse>;

	listAllAgents(
		request: ondewo_nlu_agent_pb.ListAgentsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ListAgentsResponse>;

	addUserToProject(
		request: ondewo_nlu_agent_pb.AddUserToProjectRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	removeUserFromProject(
		request: ondewo_nlu_agent_pb.RemoveUserFromProjectRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	listUsersInProject(
		request: ondewo_nlu_agent_pb.ListUsersInProjectRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ListUsersInProjectResponse>;

	getPlatformInfo(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.GetPlatformInfoResponse>;

	listProjectPermissions(
		request: ondewo_nlu_agent_pb.ListProjectPermissionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ListProjectPermissionsResponse>;

	trainAgent(
		request: ondewo_nlu_agent_pb.TrainAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	buildCache(
		request: ondewo_nlu_agent_pb.BuildCacheRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	exportAgent(
		request: ondewo_nlu_agent_pb.ExportAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	exportBenchmarkAgent(
		request: ondewo_nlu_agent_pb.ExportBenchmarkAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	importAgent(
		request: ondewo_nlu_agent_pb.ImportAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	optimizeRankingMatch(
		request: ondewo_nlu_agent_pb.OptimizeRankingMatchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	restoreAgent(
		request: ondewo_nlu_agent_pb.RestoreAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	getAgentStatistics(
		request: ondewo_nlu_agent_pb.GetAgentStatisticsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.GetAgentStatisticsResponse>;

	getSessionsStatistics(
		request: ondewo_nlu_agent_pb.GetSessionsStatisticsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.GetSessionsStatisticsResponse>;

	setAgentStatus(
		request: ondewo_nlu_agent_pb.SetAgentStatusRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.Agent>;

	setResources(
		request: ondewo_nlu_agent_pb.SetResourcesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	deleteResources(
		request: ondewo_nlu_agent_pb.DeleteResourcesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	exportResources(
		request: ondewo_nlu_agent_pb.ExportResourcesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.ExportResourcesResponse>;

	getModelStatuses(
		request: ondewo_nlu_agent_pb.GetModelStatusesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.GetModelStatusesResponse>;

	getPlatformMapping(
		request: ondewo_nlu_agent_pb.GetPlatformMappingRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.PlatformMapping>;

	setPlatformMapping(
		request: ondewo_nlu_agent_pb.PlatformMapping,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.PlatformMapping>;

	getFullTextSearchEntityType(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseEntityType>;

	getFullTextSearchEntity(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseEntity>;

	getFullTextSearchEntitySynonym(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseEntitySynonym>;

	getFullTextSearchIntent(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntent>;

	getFullTextSearchIntentContextIn(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextIn>;

	getFullTextSearchIntentContextOut(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentContextOut>;

	getFullTextSearchIntentUsersays(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentUsersays>;

	getFullTextSearchIntentTags(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentTags>;

	getFullTextSearchIntentResponse(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentResponse>;

	getFullTextSearchIntentParameters(
		request: ondewo_nlu_agent_pb.FullTextSearchRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_agent_pb.FullTextSearchResponseIntentParameters>;

	reindexAgent(
		request: ondewo_nlu_agent_pb.ReindexAgentRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;
}
