import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ProjectRole extends jspb.Message {
  getRoleId(): number;
  setRoleId(value: number): ProjectRole;

  getName(): string;
  setName(value: string): ProjectRole;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): ProjectRole;
  clearPermissionsList(): ProjectRole;
  addPermissions(value: string, index?: number): ProjectRole;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectRole;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ProjectRole;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProjectRole;
  hasModifiedAt(): boolean;
  clearModifiedAt(): ProjectRole;

  getCreatedBy(): string;
  setCreatedBy(value: string): ProjectRole;

  getModifiedBy(): string;
  setModifiedBy(value: string): ProjectRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProjectRole.AsObject;
  static toObject(includeInstance: boolean, msg: ProjectRole): ProjectRole.AsObject;
  static serializeBinaryToWriter(message: ProjectRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProjectRole;
  static deserializeBinaryFromReader(message: ProjectRole, reader: jspb.BinaryReader): ProjectRole;
}

export namespace ProjectRole {
  export type AsObject = {
    roleId: number,
    name: string,
    permissionsList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class CreateProjectRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateProjectRoleRequest;

  getRole(): ProjectRole | undefined;
  setRole(value?: ProjectRole): CreateProjectRoleRequest;
  hasRole(): boolean;
  clearRole(): CreateProjectRoleRequest;

  getProjectRoleView(): ProjectRoleView;
  setProjectRoleView(value: ProjectRoleView): CreateProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateProjectRoleRequest): CreateProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateProjectRoleRequest;
  static deserializeBinaryFromReader(message: CreateProjectRoleRequest, reader: jspb.BinaryReader): CreateProjectRoleRequest;
}

export namespace CreateProjectRoleRequest {
  export type AsObject = {
    parent: string,
    role?: ProjectRole.AsObject,
    projectRoleView: ProjectRoleView,
  }
}

export class UpdateProjectRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): UpdateProjectRoleRequest;

  getRole(): ProjectRole | undefined;
  setRole(value?: ProjectRole): UpdateProjectRoleRequest;
  hasRole(): boolean;
  clearRole(): UpdateProjectRoleRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateProjectRoleRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateProjectRoleRequest;

  getProjectRoleView(): ProjectRoleView;
  setProjectRoleView(value: ProjectRoleView): UpdateProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProjectRoleRequest): UpdateProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProjectRoleRequest;
  static deserializeBinaryFromReader(message: UpdateProjectRoleRequest, reader: jspb.BinaryReader): UpdateProjectRoleRequest;
}

export namespace UpdateProjectRoleRequest {
  export type AsObject = {
    parent: string,
    role?: ProjectRole.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    projectRoleView: ProjectRoleView,
  }
}

export class GetProjectRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetProjectRoleRequest;

  getRoleId(): number;
  setRoleId(value: number): GetProjectRoleRequest;

  getRoleName(): string;
  setRoleName(value: string): GetProjectRoleRequest;

  getProjectRoleView(): ProjectRoleView;
  setProjectRoleView(value: ProjectRoleView): GetProjectRoleRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetProjectRoleRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetProjectRoleRequest;

  getProjectRoleIdentifierCase(): GetProjectRoleRequest.ProjectRoleIdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectRoleRequest): GetProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectRoleRequest;
  static deserializeBinaryFromReader(message: GetProjectRoleRequest, reader: jspb.BinaryReader): GetProjectRoleRequest;
}

export namespace GetProjectRoleRequest {
  export type AsObject = {
    parent: string,
    roleId: number,
    roleName: string,
    projectRoleView: ProjectRoleView,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum ProjectRoleIdentifierCase { 
    PROJECT_ROLE_IDENTIFIER_NOT_SET = 0,
    ROLE_ID = 2,
    ROLE_NAME = 3,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 5,
  }
}

export class DeleteProjectRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): DeleteProjectRoleRequest;

  getRoleId(): number;
  setRoleId(value: number): DeleteProjectRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteProjectRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteProjectRoleRequest): DeleteProjectRoleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteProjectRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteProjectRoleRequest;
  static deserializeBinaryFromReader(message: DeleteProjectRoleRequest, reader: jspb.BinaryReader): DeleteProjectRoleRequest;
}

export namespace DeleteProjectRoleRequest {
  export type AsObject = {
    parent: string,
    roleId: number,
  }
}

export class ListProjectRolesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListProjectRolesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListProjectRolesRequest;

  getProjectRoleView(): ProjectRoleView;
  setProjectRoleView(value: ProjectRoleView): ListProjectRolesRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListProjectRolesRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListProjectRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRolesRequest): ListProjectRolesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProjectRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRolesRequest;
  static deserializeBinaryFromReader(message: ListProjectRolesRequest, reader: jspb.BinaryReader): ListProjectRolesRequest;
}

export namespace ListProjectRolesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    projectRoleView: ProjectRoleView,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 4,
  }
}

export class ListProjectRolesResponse extends jspb.Message {
  getProjectRolesList(): Array<ProjectRole>;
  setProjectRolesList(value: Array<ProjectRole>): ListProjectRolesResponse;
  clearProjectRolesList(): ListProjectRolesResponse;
  addProjectRoles(value?: ProjectRole, index?: number): ProjectRole;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListProjectRolesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProjectRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProjectRolesResponse): ListProjectRolesResponse.AsObject;
  static serializeBinaryToWriter(message: ListProjectRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProjectRolesResponse;
  static deserializeBinaryFromReader(message: ListProjectRolesResponse, reader: jspb.BinaryReader): ListProjectRolesResponse;
}

export namespace ListProjectRolesResponse {
  export type AsObject = {
    projectRolesList: Array<ProjectRole.AsObject>,
    nextPageToken: string,
  }
}

export enum DefaultProjectRole { 
  PROJECT_UNSPECIFIED = 0,
  PROJECT_USER = 1,
  PROJECT_EXECUTOR = 2,
  PROJECT_DEVELOPER = 3,
  PROJECT_ADMIN = 4,
  PROJECT_INACTIVE = 5,
}
export enum ProjectRoleView { 
  PROJECT_ROLE_VIEW_UNSPECIFIED = 0,
  PROJECT_ROLE_VIEW_SHALLOW = 1,
  PROJECT_ROLE_VIEW_FULL = 2,
}
