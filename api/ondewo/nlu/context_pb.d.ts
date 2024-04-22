import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

export class Context extends jspb.Message {
	getName(): string;
	setName(value: string): Context;

	getLifespanCount(): number;
	setLifespanCount(value: number): Context;

	getParametersMap(): jspb.Map<string, Context.Parameter>;
	clearParametersMap(): Context;

	getLifespanTime(): number;
	setLifespanTime(value: number): Context;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Context.AsObject;
	static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
	static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Context;
	static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
}

export namespace Context {
	export type AsObject = {
		name: string;
		lifespanCount: number;
		parametersMap: Array<[string, Context.Parameter.AsObject]>;
		lifespanTime: number;
	};

	export class Parameter extends jspb.Message {
		getName(): string;
		setName(value: string): Parameter;

		getDisplayName(): string;
		setDisplayName(value: string): Parameter;

		getValue(): string;
		setValue(value: string): Parameter;

		getValueOriginal(): string;
		setValueOriginal(value: string): Parameter;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Parameter.AsObject;
		static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
		static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): Parameter;
		static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
	}

	export namespace Parameter {
		export type AsObject = {
			name: string;
			displayName: string;
			value: string;
			valueOriginal: string;
		};
	}
}

export class ListContextsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): ListContextsRequest;

	getPageToken(): string;
	setPageToken(value: string): ListContextsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListContextsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListContextsRequest): ListContextsRequest.AsObject;
	static serializeBinaryToWriter(message: ListContextsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListContextsRequest;
	static deserializeBinaryFromReader(message: ListContextsRequest, reader: jspb.BinaryReader): ListContextsRequest;
}

export namespace ListContextsRequest {
	export type AsObject = {
		sessionId: string;
		pageToken: string;
	};
}

export class ListContextsResponse extends jspb.Message {
	getContextsList(): Array<Context>;
	setContextsList(value: Array<Context>): ListContextsResponse;
	clearContextsList(): ListContextsResponse;
	addContexts(value?: Context, index?: number): Context;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListContextsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListContextsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListContextsResponse): ListContextsResponse.AsObject;
	static serializeBinaryToWriter(message: ListContextsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListContextsResponse;
	static deserializeBinaryFromReader(message: ListContextsResponse, reader: jspb.BinaryReader): ListContextsResponse;
}

export namespace ListContextsResponse {
	export type AsObject = {
		contextsList: Array<Context.AsObject>;
		nextPageToken: string;
	};
}

export class GetContextRequest extends jspb.Message {
	getName(): string;
	setName(value: string): GetContextRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetContextRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetContextRequest): GetContextRequest.AsObject;
	static serializeBinaryToWriter(message: GetContextRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetContextRequest;
	static deserializeBinaryFromReader(message: GetContextRequest, reader: jspb.BinaryReader): GetContextRequest;
}

export namespace GetContextRequest {
	export type AsObject = {
		name: string;
	};
}

export class CreateContextRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): CreateContextRequest;

	getContext(): Context | undefined;
	setContext(value?: Context): CreateContextRequest;
	hasContext(): boolean;
	clearContext(): CreateContextRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateContextRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CreateContextRequest): CreateContextRequest.AsObject;
	static serializeBinaryToWriter(message: CreateContextRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateContextRequest;
	static deserializeBinaryFromReader(message: CreateContextRequest, reader: jspb.BinaryReader): CreateContextRequest;
}

export namespace CreateContextRequest {
	export type AsObject = {
		sessionId: string;
		context?: Context.AsObject;
	};
}

export class UpdateContextRequest extends jspb.Message {
	getContext(): Context | undefined;
	setContext(value?: Context): UpdateContextRequest;
	hasContext(): boolean;
	clearContext(): UpdateContextRequest;

	getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateContextRequest;
	hasUpdateMask(): boolean;
	clearUpdateMask(): UpdateContextRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateContextRequest.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateContextRequest): UpdateContextRequest.AsObject;
	static serializeBinaryToWriter(message: UpdateContextRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateContextRequest;
	static deserializeBinaryFromReader(message: UpdateContextRequest, reader: jspb.BinaryReader): UpdateContextRequest;
}

export namespace UpdateContextRequest {
	export type AsObject = {
		context?: Context.AsObject;
		updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
	};
}

export class DeleteContextRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteContextRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteContextRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteContextRequest): DeleteContextRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteContextRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteContextRequest;
	static deserializeBinaryFromReader(message: DeleteContextRequest, reader: jspb.BinaryReader): DeleteContextRequest;
}

export namespace DeleteContextRequest {
	export type AsObject = {
		name: string;
	};
}

export class DeleteAllContextsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): DeleteAllContextsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteAllContextsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteAllContextsRequest): DeleteAllContextsRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteAllContextsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteAllContextsRequest;
	static deserializeBinaryFromReader(
		message: DeleteAllContextsRequest,
		reader: jspb.BinaryReader
	): DeleteAllContextsRequest;
}

export namespace DeleteAllContextsRequest {
	export type AsObject = {
		sessionId: string;
	};
}
