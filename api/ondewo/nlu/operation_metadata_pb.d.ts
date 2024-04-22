import * as jspb from 'google-protobuf';

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class OperationMetadata extends jspb.Message {
	getStatus(): OperationMetadata.Status;
	setStatus(value: OperationMetadata.Status): OperationMetadata;

	getParentOperationName(): string;
	setParentOperationName(value: string): OperationMetadata;

	getSubOperationNamesList(): Array<string>;
	setSubOperationNamesList(value: Array<string>): OperationMetadata;
	clearSubOperationNamesList(): OperationMetadata;
	addSubOperationNames(value: string, index?: number): OperationMetadata;

	getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
	hasCreateTime(): boolean;
	clearCreateTime(): OperationMetadata;

	getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
	hasStartTime(): boolean;
	clearStartTime(): OperationMetadata;

	getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): OperationMetadata;
	hasEndTime(): boolean;
	clearEndTime(): OperationMetadata;

	getIsCancellationRequested(): boolean;
	setIsCancellationRequested(value: boolean): OperationMetadata;

	getCancelCommand(): string;
	setCancelCommand(value: string): OperationMetadata;

	getUserIdCreated(): string;
	setUserIdCreated(value: string): OperationMetadata;

	getUserIdCancelled(): string;
	setUserIdCancelled(value: string): OperationMetadata;

	getProjectParent(): string;
	setProjectParent(value: string): OperationMetadata;

	getOperationType(): OperationMetadata.OperationType;
	setOperationType(value: OperationMetadata.OperationType): OperationMetadata;

	getHostName(): string;
	setHostName(value: string): OperationMetadata;

	getNumReruns(): number;
	setNumReruns(value: number): OperationMetadata;

	getMaxNumReruns(): number;
	setMaxNumReruns(value: number): OperationMetadata;

	getDescription(): string;
	setDescription(value: string): OperationMetadata;

	getLogList(): Array<string>;
	setLogList(value: Array<string>): OperationMetadata;
	clearLogList(): OperationMetadata;
	addLog(value: string, index?: number): OperationMetadata;

	getLogLimit(): number;
	setLogLimit(value: number): OperationMetadata;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): OperationMetadata.AsObject;
	static toObject(includeInstance: boolean, msg: OperationMetadata): OperationMetadata.AsObject;
	static serializeBinaryToWriter(message: OperationMetadata, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): OperationMetadata;
	static deserializeBinaryFromReader(message: OperationMetadata, reader: jspb.BinaryReader): OperationMetadata;
}

export namespace OperationMetadata {
	export type AsObject = {
		status: OperationMetadata.Status;
		parentOperationName: string;
		subOperationNamesList: Array<string>;
		createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		isCancellationRequested: boolean;
		cancelCommand: string;
		userIdCreated: string;
		userIdCancelled: string;
		projectParent: string;
		operationType: OperationMetadata.OperationType;
		hostName: string;
		numReruns: number;
		maxNumReruns: number;
		description: string;
		logList: Array<string>;
		logLimit: number;
	};

	export enum Status {
		STATUS_UNSPECIFIED = 0,
		NOT_STARTED = 1,
		IN_PROGRESS = 2,
		DONE = 3,
		CANCELLED = 4,
		FAILED = 5
	}

	export enum OperationType {
		OPERATION_TYPE_UNSPECIFIED = 0,
		CREATE_AGENT = 1,
		IMPORT_AGENT = 2,
		EXPORT_AGENT = 3,
		DELETE_AGENT = 4,
		RESTORE_AGENT = 5,
		BUILD_AGENT_CACHE = 6,
		TRAIN_AGENT = 7,
		EXPORT_BENCHMARK_AGENT = 8
	}
}
