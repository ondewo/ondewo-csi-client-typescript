import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb'; // proto import: "google/api/annotations.proto"
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_rpc_status_pb from '../../google/rpc/status_pb'; // proto import: "google/rpc/status.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_operation_metadata_pb from '../../ondewo/nlu/operation_metadata_pb'; // proto import: "ondewo/nlu/operation_metadata.proto"
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb'; // proto import: "ondewo/nlu/common.proto"


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

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetOperationRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetOperationRequest;

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
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListOperationsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListOperationsRequest;

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
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
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

export class StreamRemoteOperationContainerLogsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StreamRemoteOperationContainerLogsRequest;

  getMinLogLevel(): ondewo_nlu_common_pb.LogSeverity;
  setMinLogLevel(value: ondewo_nlu_common_pb.LogSeverity): StreamRemoteOperationContainerLogsRequest;

  getTailLines(): number;
  setTailLines(value: number): StreamRemoteOperationContainerLogsRequest;

  getContainerId(): string;
  setContainerId(value: string): StreamRemoteOperationContainerLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRemoteOperationContainerLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRemoteOperationContainerLogsRequest): StreamRemoteOperationContainerLogsRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRemoteOperationContainerLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRemoteOperationContainerLogsRequest;
  static deserializeBinaryFromReader(message: StreamRemoteOperationContainerLogsRequest, reader: jspb.BinaryReader): StreamRemoteOperationContainerLogsRequest;
}

export namespace StreamRemoteOperationContainerLogsRequest {
  export type AsObject = {
    name: string,
    minLogLevel: ondewo_nlu_common_pb.LogSeverity,
    tailLines: number,
    containerId: string,
  }
}

export class GetRemoteOperationContainerLogsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRemoteOperationContainerLogsRequest;

  getMinLogLevel(): ondewo_nlu_common_pb.LogSeverity;
  setMinLogLevel(value: ondewo_nlu_common_pb.LogSeverity): GetRemoteOperationContainerLogsRequest;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): GetRemoteOperationContainerLogsRequest;
  hasStartTime(): boolean;
  clearStartTime(): GetRemoteOperationContainerLogsRequest;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): GetRemoteOperationContainerLogsRequest;
  hasEndTime(): boolean;
  clearEndTime(): GetRemoteOperationContainerLogsRequest;

  getMaxLines(): number;
  setMaxLines(value: number): GetRemoteOperationContainerLogsRequest;

  getRegex(): string;
  setRegex(value: string): GetRemoteOperationContainerLogsRequest;

  getContainerId(): string;
  setContainerId(value: string): GetRemoteOperationContainerLogsRequest;

  getBeforeSeq(): number;
  setBeforeSeq(value: number): GetRemoteOperationContainerLogsRequest;

  getAfterSeq(): number;
  setAfterSeq(value: number): GetRemoteOperationContainerLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemoteOperationContainerLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemoteOperationContainerLogsRequest): GetRemoteOperationContainerLogsRequest.AsObject;
  static serializeBinaryToWriter(message: GetRemoteOperationContainerLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemoteOperationContainerLogsRequest;
  static deserializeBinaryFromReader(message: GetRemoteOperationContainerLogsRequest, reader: jspb.BinaryReader): GetRemoteOperationContainerLogsRequest;
}

export namespace GetRemoteOperationContainerLogsRequest {
  export type AsObject = {
    name: string,
    minLogLevel: ondewo_nlu_common_pb.LogSeverity,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    maxLines: number,
    regex: string,
    containerId: string,
    beforeSeq: number,
    afterSeq: number,
  }
}

export class GetRemoteOperationContainerLogsResponse extends jspb.Message {
  getLogLinesList(): Array<RemoteOperationContainerLogLine>;
  setLogLinesList(value: Array<RemoteOperationContainerLogLine>): GetRemoteOperationContainerLogsResponse;
  clearLogLinesList(): GetRemoteOperationContainerLogsResponse;
  addLogLines(value?: RemoteOperationContainerLogLine, index?: number): RemoteOperationContainerLogLine;

  getTruncated(): boolean;
  setTruncated(value: boolean): GetRemoteOperationContainerLogsResponse;

  getMinAvailableSeq(): number;
  setMinAvailableSeq(value: number): GetRemoteOperationContainerLogsResponse;

  getMaxAvailableSeq(): number;
  setMaxAvailableSeq(value: number): GetRemoteOperationContainerLogsResponse;

  getHasMoreOlder(): boolean;
  setHasMoreOlder(value: boolean): GetRemoteOperationContainerLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemoteOperationContainerLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemoteOperationContainerLogsResponse): GetRemoteOperationContainerLogsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRemoteOperationContainerLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemoteOperationContainerLogsResponse;
  static deserializeBinaryFromReader(message: GetRemoteOperationContainerLogsResponse, reader: jspb.BinaryReader): GetRemoteOperationContainerLogsResponse;
}

export namespace GetRemoteOperationContainerLogsResponse {
  export type AsObject = {
    logLinesList: Array<RemoteOperationContainerLogLine.AsObject>,
    truncated: boolean,
    minAvailableSeq: number,
    maxAvailableSeq: number,
    hasMoreOlder: boolean,
  }
}

export class RemoteOperationContainerLogLine extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainerLogLine;
  hasTimestamp(): boolean;
  clearTimestamp(): RemoteOperationContainerLogLine;

  getLevel(): ondewo_nlu_common_pb.LogSeverity;
  setLevel(value: ondewo_nlu_common_pb.LogSeverity): RemoteOperationContainerLogLine;

  getMessage(): string;
  setMessage(value: string): RemoteOperationContainerLogLine;

  getContainerId(): string;
  setContainerId(value: string): RemoteOperationContainerLogLine;

  getContainerName(): string;
  setContainerName(value: string): RemoteOperationContainerLogLine;

  getSeq(): number;
  setSeq(value: number): RemoteOperationContainerLogLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteOperationContainerLogLine.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteOperationContainerLogLine): RemoteOperationContainerLogLine.AsObject;
  static serializeBinaryToWriter(message: RemoteOperationContainerLogLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteOperationContainerLogLine;
  static deserializeBinaryFromReader(message: RemoteOperationContainerLogLine, reader: jspb.BinaryReader): RemoteOperationContainerLogLine;
}

export namespace RemoteOperationContainerLogLine {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    level: ondewo_nlu_common_pb.LogSeverity,
    message: string,
    containerId: string,
    containerName: string,
    seq: number,
  }
}

export class GetRemoteOperationContainerStatusRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRemoteOperationContainerStatusRequest;

  getContainerId(): string;
  setContainerId(value: string): GetRemoteOperationContainerStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemoteOperationContainerStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemoteOperationContainerStatusRequest): GetRemoteOperationContainerStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetRemoteOperationContainerStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemoteOperationContainerStatusRequest;
  static deserializeBinaryFromReader(message: GetRemoteOperationContainerStatusRequest, reader: jspb.BinaryReader): GetRemoteOperationContainerStatusRequest;
}

export namespace GetRemoteOperationContainerStatusRequest {
  export type AsObject = {
    name: string,
    containerId: string,
  }
}

export class RemoteOperationContainerStatus extends jspb.Message {
  getName(): string;
  setName(value: string): RemoteOperationContainerStatus;

  getLifecycleState(): RemoteOperationContainerLifecycleState;
  setLifecycleState(value: RemoteOperationContainerLifecycleState): RemoteOperationContainerStatus;

  getHostName(): string;
  setHostName(value: string): RemoteOperationContainerStatus;

  getContainerName(): string;
  setContainerName(value: string): RemoteOperationContainerStatus;

  getContainerId(): string;
  setContainerId(value: string): RemoteOperationContainerStatus;

  getExitCode(): number;
  setExitCode(value: number): RemoteOperationContainerStatus;

  getOomKilled(): boolean;
  setOomKilled(value: boolean): RemoteOperationContainerStatus;

  getHealthStatus(): string;
  setHealthStatus(value: string): RemoteOperationContainerStatus;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainerStatus;
  hasStartedAt(): boolean;
  clearStartedAt(): RemoteOperationContainerStatus;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainerStatus;
  hasFinishedAt(): boolean;
  clearFinishedAt(): RemoteOperationContainerStatus;

  getObservedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setObservedAt(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainerStatus;
  hasObservedAt(): boolean;
  clearObservedAt(): RemoteOperationContainerStatus;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): RemoteOperationContainerStatus;

  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): RemoteOperationContainerStatus;
  clearCommandList(): RemoteOperationContainerStatus;
  addCommand(value: string, index?: number): RemoteOperationContainerStatus;

  getMemoryLimitBytes(): number;
  setMemoryLimitBytes(value: number): RemoteOperationContainerStatus;

  getNanoCpus(): number;
  setNanoCpus(value: number): RemoteOperationContainerStatus;

  getCpusetCpus(): string;
  setCpusetCpus(value: string): RemoteOperationContainerStatus;

  getCpuQuota(): number;
  setCpuQuota(value: number): RemoteOperationContainerStatus;

  getCpuPeriod(): number;
  setCpuPeriod(value: number): RemoteOperationContainerStatus;

  getImage(): string;
  setImage(value: string): RemoteOperationContainerStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteOperationContainerStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteOperationContainerStatus): RemoteOperationContainerStatus.AsObject;
  static serializeBinaryToWriter(message: RemoteOperationContainerStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteOperationContainerStatus;
  static deserializeBinaryFromReader(message: RemoteOperationContainerStatus, reader: jspb.BinaryReader): RemoteOperationContainerStatus;
}

export namespace RemoteOperationContainerStatus {
  export type AsObject = {
    name: string,
    lifecycleState: RemoteOperationContainerLifecycleState,
    hostName: string,
    containerName: string,
    containerId: string,
    exitCode: number,
    oomKilled: boolean,
    healthStatus: string,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    observedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    environmentVariablesMap: Array<[string, string]>,
    commandList: Array<string>,
    memoryLimitBytes: number,
    nanoCpus: number,
    cpusetCpus: string,
    cpuQuota: number,
    cpuPeriod: number,
    image: string,
  }
}

export class RemoteOperationContainer extends jspb.Message {
  getContainerId(): string;
  setContainerId(value: string): RemoteOperationContainer;

  getContainerName(): string;
  setContainerName(value: string): RemoteOperationContainer;

  getHostName(): string;
  setHostName(value: string): RemoteOperationContainer;

  getLifecycleState(): RemoteOperationContainerLifecycleState;
  setLifecycleState(value: RemoteOperationContainerLifecycleState): RemoteOperationContainer;

  getOperationName(): string;
  setOperationName(value: string): RemoteOperationContainer;

  getImage(): string;
  setImage(value: string): RemoteOperationContainer;

  getPhase(): string;
  setPhase(value: string): RemoteOperationContainer;

  getExitCode(): number;
  setExitCode(value: number): RemoteOperationContainer;

  getOomKilled(): boolean;
  setOomKilled(value: boolean): RemoteOperationContainer;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainer;
  hasStartedAt(): boolean;
  clearStartedAt(): RemoteOperationContainer;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): RemoteOperationContainer;
  hasFinishedAt(): boolean;
  clearFinishedAt(): RemoteOperationContainer;

  getLogsAvailable(): boolean;
  setLogsAvailable(value: boolean): RemoteOperationContainer;

  getEnvironmentVariablesMap(): jspb.Map<string, string>;
  clearEnvironmentVariablesMap(): RemoteOperationContainer;

  getCommandList(): Array<string>;
  setCommandList(value: Array<string>): RemoteOperationContainer;
  clearCommandList(): RemoteOperationContainer;
  addCommand(value: string, index?: number): RemoteOperationContainer;

  getMemoryLimitBytes(): number;
  setMemoryLimitBytes(value: number): RemoteOperationContainer;

  getNanoCpus(): number;
  setNanoCpus(value: number): RemoteOperationContainer;

  getCpusetCpus(): string;
  setCpusetCpus(value: string): RemoteOperationContainer;

  getCpuQuota(): number;
  setCpuQuota(value: number): RemoteOperationContainer;

  getCpuPeriod(): number;
  setCpuPeriod(value: number): RemoteOperationContainer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteOperationContainer.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteOperationContainer): RemoteOperationContainer.AsObject;
  static serializeBinaryToWriter(message: RemoteOperationContainer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteOperationContainer;
  static deserializeBinaryFromReader(message: RemoteOperationContainer, reader: jspb.BinaryReader): RemoteOperationContainer;
}

export namespace RemoteOperationContainer {
  export type AsObject = {
    containerId: string,
    containerName: string,
    hostName: string,
    lifecycleState: RemoteOperationContainerLifecycleState,
    operationName: string,
    image: string,
    phase: string,
    exitCode: number,
    oomKilled: boolean,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    logsAvailable: boolean,
    environmentVariablesMap: Array<[string, string]>,
    commandList: Array<string>,
    memoryLimitBytes: number,
    nanoCpus: number,
    cpusetCpus: string,
    cpuQuota: number,
    cpuPeriod: number,
  }
}

export class ListRemoteOperationContainersRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListRemoteOperationContainersRequest;

  getIncludeSubOperations(): boolean;
  setIncludeSubOperations(value: boolean): ListRemoteOperationContainersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRemoteOperationContainersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRemoteOperationContainersRequest): ListRemoteOperationContainersRequest.AsObject;
  static serializeBinaryToWriter(message: ListRemoteOperationContainersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRemoteOperationContainersRequest;
  static deserializeBinaryFromReader(message: ListRemoteOperationContainersRequest, reader: jspb.BinaryReader): ListRemoteOperationContainersRequest;
}

export namespace ListRemoteOperationContainersRequest {
  export type AsObject = {
    name: string,
    includeSubOperations: boolean,
  }
}

export class ListRemoteOperationContainersResponse extends jspb.Message {
  getContainersList(): Array<RemoteOperationContainer>;
  setContainersList(value: Array<RemoteOperationContainer>): ListRemoteOperationContainersResponse;
  clearContainersList(): ListRemoteOperationContainersResponse;
  addContainers(value?: RemoteOperationContainer, index?: number): RemoteOperationContainer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRemoteOperationContainersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRemoteOperationContainersResponse): ListRemoteOperationContainersResponse.AsObject;
  static serializeBinaryToWriter(message: ListRemoteOperationContainersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRemoteOperationContainersResponse;
  static deserializeBinaryFromReader(message: ListRemoteOperationContainersResponse, reader: jspb.BinaryReader): ListRemoteOperationContainersResponse;
}

export namespace ListRemoteOperationContainersResponse {
  export type AsObject = {
    containersList: Array<RemoteOperationContainer.AsObject>,
  }
}

export enum RemoteOperationContainerLifecycleState { 
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_UNSPECIFIED = 0,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_NOT_FOUND = 1,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_CREATED = 2,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RUNNING = 3,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_PAUSED = 4,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_RESTARTING = 5,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_EXITED = 6,
  REMOTE_OPERATION_CONTAINER_LIFECYCLE_STATE_DEAD = 7,
}
