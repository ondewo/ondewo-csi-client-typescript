import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_project_role_pb from '../../ondewo/nlu/project_role_pb';

export class ProjectRolesClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_project_role_pb.ProjectRole>;

	getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_project_role_pb.ProjectRole>;

	deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_project_role_pb.ProjectRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_project_role_pb.ProjectRole>;

	listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_project_role_pb.ListProjectRolesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_project_role_pb.ListProjectRolesResponse>;
}

export class ProjectRolesPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createProjectRole(
		request: ondewo_nlu_project_role_pb.CreateProjectRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_project_role_pb.ProjectRole>;

	getProjectRole(
		request: ondewo_nlu_project_role_pb.GetProjectRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_project_role_pb.ProjectRole>;

	deleteProjectRole(
		request: ondewo_nlu_project_role_pb.DeleteProjectRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	updateProjectRole(
		request: ondewo_nlu_project_role_pb.UpdateProjectRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_project_role_pb.ProjectRole>;

	listProjectRoles(
		request: ondewo_nlu_project_role_pb.ListProjectRolesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_project_role_pb.ListProjectRolesResponse>;
}
