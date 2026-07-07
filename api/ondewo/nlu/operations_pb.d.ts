import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_rpc_status_pb from '../../google/rpc/status_pb'; // proto import: "google/rpc/status.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_operation_metadata_pb from '../../ondewo/nlu/operation_metadata_pb'; // proto import: "ondewo/nlu/operation_metadata.proto"


export class Operation extends jspb.Message {
  getName(): string;
  setName(value: string): Operation;

  getMetadata(): ondewo_nlu_operation_metadata_pb.OperationMetadata | undefined;
  setMetadata(value?: ondewo_nlu_operation_metadata_pb.OperationMetadata): Operation;
  hasMetadata(): boolean;
  clearMetadata(): Operation;

  getDone(): boolean;
  setDone(value: boolean): Operation;

  getError(): google_rpc_status_pb.Status | undefined;
  setError(value?: google_rpc_status_pb.Status): Operation;
  hasError(): boolean;
  clearError(): Operation;

  getResponse(): google_protobuf_any_pb.Any | undefined;
  setResponse(value?: google_protobuf_any_pb.Any): Operation;
  hasResponse(): boolean;
  clearResponse(): Operation;

  getResultCase(): Operation.ResultCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operation.AsObject;
  static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
  static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operation;
  static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
}

export namespace Operation {
  export type AsObject = {
    name: string,
    metadata?: ondewo_nlu_operation_metadata_pb.OperationMetadata.AsObject,
    done: boolean,
    error?: google_rpc_status_pb.Status.AsObject,
    response?: google_protobuf_any_pb.Any.AsObject,
  }

  export enum ResultCase { 
    RESULT_NOT_SET = 0,
    ERROR = 4,
    RESPONSE = 5,
  }
}

export class GetOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOperationRequest): GetOperationRequest.AsObject;
  static serializeBinaryToWriter(message: GetOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOperationRequest;
  static deserializeBinaryFromReader(message: GetOperationRequest, reader: jspb.BinaryReader): GetOperationRequest;
}

export namespace GetOperationRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListOperationsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListOperationsRequest;

  getFilter(): string;
  setFilter(value: string): ListOperationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListOperationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListOperationsRequest;

  getOperationFilter(): OperationFilter | undefined;
  setOperationFilter(value?: OperationFilter): ListOperationsRequest;
  hasOperationFilter(): boolean;
  clearOperationFilter(): ListOperationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsRequest): ListOperationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsRequest;
  static deserializeBinaryFromReader(message: ListOperationsRequest, reader: jspb.BinaryReader): ListOperationsRequest;
}

export namespace ListOperationsRequest {
  export type AsObject = {
    name: string,
    filter: string,
    pageSize: number,
    pageToken: string,
    operationFilter?: OperationFilter.AsObject,
  }
}

export class OperationFilter extends jspb.Message {
  getProjectParentsList(): Array<string>;
  setProjectParentsList(value: Array<string>): OperationFilter;
  clearProjectParentsList(): OperationFilter;
  addProjectParents(value: string, index?: number): OperationFilter;

  getStatusesList(): Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.Status>;
  setStatusesList(value: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.Status>): OperationFilter;
  clearStatusesList(): OperationFilter;
  addStatuses(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status, index?: number): OperationFilter;

  getTypesList(): Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>;
  setTypesList(value: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>): OperationFilter;
  clearTypesList(): OperationFilter;
  addTypes(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType, index?: number): OperationFilter;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationFilter;
  hasStartTime(): boolean;
  clearStartTime(): OperationFilter;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationFilter;
  hasEndTime(): boolean;
  clearEndTime(): OperationFilter;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): OperationFilter;
  clearUserIdsList(): OperationFilter;
  addUserIds(value: string, index?: number): OperationFilter;

  getStartTimeOneofCase(): OperationFilter.StartTimeOneofCase;

  getEndTimeOneofCase(): OperationFilter.EndTimeOneofCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: OperationFilter): OperationFilter.AsObject;
  static serializeBinaryToWriter(message: OperationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationFilter;
  static deserializeBinaryFromReader(message: OperationFilter, reader: jspb.BinaryReader): OperationFilter;
}

export namespace OperationFilter {
  export type AsObject = {
    projectParentsList: Array<string>,
    statusesList: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.Status>,
    typesList: Array<ondewo_nlu_operation_metadata_pb.OperationMetadata.OperationType>,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userIdsList: Array<string>,
  }

  export enum StartTimeOneofCase { 
    START_TIME_ONEOF_NOT_SET = 0,
    START_TIME = 4,
  }

  export enum EndTimeOneofCase { 
    END_TIME_ONEOF_NOT_SET = 0,
    END_TIME = 5,
  }
}

export class ListOperationsResponse extends jspb.Message {
  getOperationsList(): Array<Operation>;
  setOperationsList(value: Array<Operation>): ListOperationsResponse;
  clearOperationsList(): ListOperationsResponse;
  addOperations(value?: Operation, index?: number): Operation;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListOperationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationsResponse): ListOperationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationsResponse;
  static deserializeBinaryFromReader(message: ListOperationsResponse, reader: jspb.BinaryReader): ListOperationsResponse;
}

export namespace ListOperationsResponse {
  export type AsObject = {
    operationsList: Array<Operation.AsObject>,
    nextPageToken: string,
  }
}

export class CancelOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOperationRequest): CancelOperationRequest.AsObject;
  static serializeBinaryToWriter(message: CancelOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOperationRequest;
  static deserializeBinaryFromReader(message: CancelOperationRequest, reader: jspb.BinaryReader): CancelOperationRequest;
}

export namespace CancelOperationRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteOperationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteOperationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOperationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOperationRequest): DeleteOperationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteOperationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOperationRequest;
  static deserializeBinaryFromReader(message: DeleteOperationRequest, reader: jspb.BinaryReader): DeleteOperationRequest;
}

export namespace DeleteOperationRequest {
  export type AsObject = {
    name: string,
  }
}

