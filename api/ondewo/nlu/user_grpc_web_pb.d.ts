import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_user_pb from '../../ondewo/nlu/user_pb';

export class UsersClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createUser(
		request: ondewo_nlu_user_pb.CreateUserRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.User) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.User>;

	getUser(
		request: ondewo_nlu_user_pb.GetUserRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.User) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.User>;

	getUserInfo(
		request: ondewo_nlu_user_pb.GetUserRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.UserInfo) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.UserInfo>;

	deleteUser(
		request: ondewo_nlu_user_pb.GetUserRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	updateUser(
		request: ondewo_nlu_user_pb.UpdateUserRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.User) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.User>;

	listUsers(
		request: ondewo_nlu_user_pb.ListUsersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ListUsersResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ListUsersResponse>;

	listUserInfos(
		request: ondewo_nlu_user_pb.ListUsersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ListUserInfosResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ListUserInfosResponse>;

	createServerRole(
		request: ondewo_nlu_user_pb.CreateServerRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ServerRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ServerRole>;

	getServerRole(
		request: ondewo_nlu_user_pb.GetServerRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ServerRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ServerRole>;

	deleteServerRole(
		request: ondewo_nlu_user_pb.DeleteServerRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	updateServerRole(
		request: ondewo_nlu_user_pb.UpdateServerRoleRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ServerRole) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ServerRole>;

	listServerRoles(
		request: ondewo_nlu_user_pb.ListServerRolesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ListServerRolesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ListServerRolesResponse>;

	listServerPermissions(
		request: ondewo_nlu_user_pb.ListServerPermissionsRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.ListServerPermissionsResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.ListServerPermissionsResponse>;

	login(
		request: ondewo_nlu_user_pb.LoginRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_user_pb.LoginResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_user_pb.LoginResponse>;

	checkLogin(
		request: google_protobuf_empty_pb.Empty,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
}

export class UsersPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createUser(
		request: ondewo_nlu_user_pb.CreateUserRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.User>;

	getUser(request: ondewo_nlu_user_pb.GetUserRequest, metadata?: grpcWeb.Metadata): Promise<ondewo_nlu_user_pb.User>;

	getUserInfo(
		request: ondewo_nlu_user_pb.GetUserRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.UserInfo>;

	deleteUser(
		request: ondewo_nlu_user_pb.GetUserRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	updateUser(
		request: ondewo_nlu_user_pb.UpdateUserRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.User>;

	listUsers(
		request: ondewo_nlu_user_pb.ListUsersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ListUsersResponse>;

	listUserInfos(
		request: ondewo_nlu_user_pb.ListUsersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ListUserInfosResponse>;

	createServerRole(
		request: ondewo_nlu_user_pb.CreateServerRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ServerRole>;

	getServerRole(
		request: ondewo_nlu_user_pb.GetServerRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ServerRole>;

	deleteServerRole(
		request: ondewo_nlu_user_pb.DeleteServerRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	updateServerRole(
		request: ondewo_nlu_user_pb.UpdateServerRoleRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ServerRole>;

	listServerRoles(
		request: ondewo_nlu_user_pb.ListServerRolesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ListServerRolesResponse>;

	listServerPermissions(
		request: ondewo_nlu_user_pb.ListServerPermissionsRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.ListServerPermissionsResponse>;

	login(
		request: ondewo_nlu_user_pb.LoginRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_user_pb.LoginResponse>;

	checkLogin(
		request: google_protobuf_empty_pb.Empty,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;
}
