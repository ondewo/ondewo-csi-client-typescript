import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as ondewo_nlu_project_role_pb from '../../ondewo/nlu/project_role_pb';


export class User extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): User;

  getDisplayName(): string;
  setDisplayName(value: string): User;

  getServerRoleId(): number;
  setServerRoleId(value: number): User;

  getUserEmail(): string;
  setUserEmail(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    userId: string,
    displayName: string,
    serverRoleId: number,
    userEmail: string,
  }
}

export class UserInfo extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UserInfo;
  hasUser(): boolean;
  clearUser(): UserInfo;

  getProjectRolesMap(): jspb.Map<string, ondewo_nlu_project_role_pb.ProjectRole>;
  clearProjectRolesMap(): UserInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
  static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInfo;
  static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
  export type AsObject = {
    user?: User.AsObject,
    projectRolesMap: Array<[string, ondewo_nlu_project_role_pb.ProjectRole.AsObject]>,
  }
}

export class CreateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): CreateUserRequest;
  hasUser(): boolean;
  clearUser(): CreateUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
    password: string,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateUserRequest;
  hasUser(): boolean;
  clearUser(): UpdateUserRequest;

  getPassword(): string;
  setPassword(value: string): UpdateUserRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateUserRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    user?: User.AsObject,
    password: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): GetUserRequest;

  getUserEmail(): string;
  setUserEmail(value: string): GetUserRequest;

  getUserIdentifierCase(): GetUserRequest.UserIdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    userId: string,
    userEmail: string,
  }

  export enum UserIdentifierCase { 
    USER_IDENTIFIER_NOT_SET = 0,
    USER_ID = 1,
    USER_EMAIL = 3,
  }
}

export class DeleteUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): DeleteUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
  static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class ListUsersRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    pageToken: string,
  }
}

export class ListUsersResponse extends jspb.Message {
  getUsersList(): Array<User>;
  setUsersList(value: Array<User>): ListUsersResponse;
  clearUsersList(): ListUsersResponse;
  addUsers(value?: User, index?: number): User;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<User.AsObject>,
    nextPageToken: string,
  }
}

export class ListUserInfosResponse extends jspb.Message {
  getUsersList(): Array<UserInfo>;
  setUsersList(value: Array<UserInfo>): ListUserInfosResponse;
  clearUsersList(): ListUserInfosResponse;
  addUsers(value?: UserInfo, index?: number): UserInfo;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListUserInfosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserInfosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserInfosResponse): ListUserInfosResponse.AsObject;
  static serializeBinaryToWriter(message: ListUserInfosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserInfosResponse;
  static deserializeBinaryFromReader(message: ListUserInfosResponse, reader: jspb.BinaryReader): ListUserInfosResponse;
}

export namespace ListUserInfosResponse {
  export type AsObject = {
    usersList: Array<UserInfo.AsObject>,
    nextPageToken: string,
  }
}

export class ServerRole extends jspb.Message {
  getRoleId(): number;
  setRoleId(value: number): ServerRole;

  getName(): string;
  setName(value: string): ServerRole;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ServerRole;
  clearPermissionsList(): ServerRole;
  addPermissions(value: string, index?: number): ServerRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerRole.AsObject;
  static toObject(includeInstance: boolean, msg: ServerRole): ServerRole.AsObject;
  static serializeBinaryToWriter(message: ServerRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerRole;
  static deserializeBinaryFromReader(message: ServerRole, reader: jspb.BinaryReader): ServerRole;
}

export namespace ServerRole {
  export type AsObject = {
    roleId: number,
    name: string,
    permissionsList: Array<string>,
  }
}

export class CreateServerRoleRequest extends jspb.Message {
  getRole(): ServerRole | undefined;
  setRole(value?: ServerRole): CreateServerRoleRequest;
  hasRole(): boolean;
  clearRole(): CreateServerRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServerRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServerRoleRequest): CreateServerRoleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServerRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServerRoleRequest;
  static deserializeBinaryFromReader(message: CreateServerRoleRequest, reader: jspb.BinaryReader): CreateServerRoleRequest;
}

export namespace CreateServerRoleRequest {
  export type AsObject = {
    role?: ServerRole.AsObject,
  }
}

export class UpdateServerRoleRequest extends jspb.Message {
  getRole(): ServerRole | undefined;
  setRole(value?: ServerRole): UpdateServerRoleRequest;
  hasRole(): boolean;
  clearRole(): UpdateServerRoleRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateServerRoleRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateServerRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServerRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServerRoleRequest): UpdateServerRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServerRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServerRoleRequest;
  static deserializeBinaryFromReader(message: UpdateServerRoleRequest, reader: jspb.BinaryReader): UpdateServerRoleRequest;
}

export namespace UpdateServerRoleRequest {
  export type AsObject = {
    role?: ServerRole.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteServerRoleRequest extends jspb.Message {
  getRoleId(): number;
  setRoleId(value: number): DeleteServerRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServerRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServerRoleRequest): DeleteServerRoleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServerRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServerRoleRequest;
  static deserializeBinaryFromReader(message: DeleteServerRoleRequest, reader: jspb.BinaryReader): DeleteServerRoleRequest;
}

export namespace DeleteServerRoleRequest {
  export type AsObject = {
    roleId: number,
  }
}

export class GetServerRoleRequest extends jspb.Message {
  getRoleId(): number;
  setRoleId(value: number): GetServerRoleRequest;

  getRoleName(): string;
  setRoleName(value: string): GetServerRoleRequest;

  getServerRoleIdentifierCase(): GetServerRoleRequest.ServerRoleIdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServerRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServerRoleRequest): GetServerRoleRequest.AsObject;
  static serializeBinaryToWriter(message: GetServerRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServerRoleRequest;
  static deserializeBinaryFromReader(message: GetServerRoleRequest, reader: jspb.BinaryReader): GetServerRoleRequest;
}

export namespace GetServerRoleRequest {
  export type AsObject = {
    roleId: number,
    roleName: string,
  }

  export enum ServerRoleIdentifierCase { 
    SERVER_ROLE_IDENTIFIER_NOT_SET = 0,
    ROLE_ID = 1,
    ROLE_NAME = 2,
  }
}

export class ListServerRolesRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListServerRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServerRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServerRolesRequest): ListServerRolesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServerRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServerRolesRequest;
  static deserializeBinaryFromReader(message: ListServerRolesRequest, reader: jspb.BinaryReader): ListServerRolesRequest;
}

export namespace ListServerRolesRequest {
  export type AsObject = {
    pageToken: string,
  }
}

export class ListServerRolesResponse extends jspb.Message {
  getServerRolesList(): Array<ServerRole>;
  setServerRolesList(value: Array<ServerRole>): ListServerRolesResponse;
  clearServerRolesList(): ListServerRolesResponse;
  addServerRoles(value?: ServerRole, index?: number): ServerRole;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServerRolesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServerRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServerRolesResponse): ListServerRolesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServerRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServerRolesResponse;
  static deserializeBinaryFromReader(message: ListServerRolesResponse, reader: jspb.BinaryReader): ListServerRolesResponse;
}

export namespace ListServerRolesResponse {
  export type AsObject = {
    serverRolesList: Array<ServerRole.AsObject>,
    nextPageToken: string,
  }
}

export class ListServerPermissionsRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListServerPermissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServerPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServerPermissionsRequest): ListServerPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListServerPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServerPermissionsRequest;
  static deserializeBinaryFromReader(message: ListServerPermissionsRequest, reader: jspb.BinaryReader): ListServerPermissionsRequest;
}

export namespace ListServerPermissionsRequest {
  export type AsObject = {
    pageToken: string,
  }
}

export class ListServerPermissionsResponse extends jspb.Message {
  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ListServerPermissionsResponse;
  clearPermissionsList(): ListServerPermissionsResponse;
  addPermissions(value: string, index?: number): ListServerPermissionsResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServerPermissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServerPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServerPermissionsResponse): ListServerPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListServerPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServerPermissionsResponse;
  static deserializeBinaryFromReader(message: ListServerPermissionsResponse, reader: jspb.BinaryReader): ListServerPermissionsResponse;
}

export namespace ListServerPermissionsResponse {
  export type AsObject = {
    permissionsList: Array<string>,
    nextPageToken: string,
  }
}

export class LoginRequest extends jspb.Message {
  getUserEmail(): string;
  setUserEmail(value: string): LoginRequest;

  getPassword(): string;
  setPassword(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    userEmail: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): LoginResponse;
  hasUser(): boolean;
  clearUser(): LoginResponse;

  getAuthToken(): string;
  setAuthToken(value: string): LoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    user?: User.AsObject,
    authToken: string,
  }
}

export enum DefaultServerRole { 
  SERVER_UNSPECIFIED = 0,
  SERVER_USER = 1,
  SERVER_MANAGER = 2,
  SERVER_ADMIN = 3,
  SERVER_INACTIVE = 4,
}
