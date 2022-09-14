import * as jspb from 'google-protobuf';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_rpc_status_pb from '../../google/rpc/status_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';
import * as ondewo_t2s_text$to$speech_pb from '../../ondewo/t2s/text-to-speech_pb';
import * as ondewo_s2t_speech$to$text_pb from '../../ondewo/s2t/speech-to-text_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';

export class S2sPipeline extends jspb.Message {
	getId(): string;
	setId(value: string): S2sPipeline;

	getS2tPipelineId(): string;
	setS2tPipelineId(value: string): S2sPipeline;

	getNluProjectId(): string;
	setNluProjectId(value: string): S2sPipeline;

	getNluLanguageCode(): string;
	setNluLanguageCode(value: string): S2sPipeline;

	getT2sPipelineId(): string;
	setT2sPipelineId(value: string): S2sPipeline;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2sPipeline.AsObject;
	static toObject(includeInstance: boolean, msg: S2sPipeline): S2sPipeline.AsObject;
	static serializeBinaryToWriter(message: S2sPipeline, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2sPipeline;
	static deserializeBinaryFromReader(message: S2sPipeline, reader: jspb.BinaryReader): S2sPipeline;
}

export namespace S2sPipeline {
	export type AsObject = {
		id: string;
		s2tPipelineId: string;
		nluProjectId: string;
		nluLanguageCode: string;
		t2sPipelineId: string;
	};
}

export class S2sPipelineId extends jspb.Message {
	getId(): string;
	setId(value: string): S2sPipelineId;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2sPipelineId.AsObject;
	static toObject(includeInstance: boolean, msg: S2sPipelineId): S2sPipelineId.AsObject;
	static serializeBinaryToWriter(message: S2sPipelineId, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2sPipelineId;
	static deserializeBinaryFromReader(message: S2sPipelineId, reader: jspb.BinaryReader): S2sPipelineId;
}

export namespace S2sPipelineId {
	export type AsObject = {
		id: string;
	};
}

export class ListS2sPipelinesRequest extends jspb.Message {
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2sPipelinesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2sPipelinesRequest): ListS2sPipelinesRequest.AsObject;
	static serializeBinaryToWriter(message: ListS2sPipelinesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2sPipelinesRequest;
	static deserializeBinaryFromReader(
		message: ListS2sPipelinesRequest,
		reader: jspb.BinaryReader
	): ListS2sPipelinesRequest;
}

export namespace ListS2sPipelinesRequest {
	export type AsObject = {};
}

export class ListS2sPipelinesResponse extends jspb.Message {
	getPipelinesList(): Array<S2sPipeline>;
	setPipelinesList(value: Array<S2sPipeline>): ListS2sPipelinesResponse;
	clearPipelinesList(): ListS2sPipelinesResponse;
	addPipelines(value?: S2sPipeline, index?: number): S2sPipeline;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2sPipelinesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2sPipelinesResponse): ListS2sPipelinesResponse.AsObject;
	static serializeBinaryToWriter(message: ListS2sPipelinesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2sPipelinesResponse;
	static deserializeBinaryFromReader(
		message: ListS2sPipelinesResponse,
		reader: jspb.BinaryReader
	): ListS2sPipelinesResponse;
}

export namespace ListS2sPipelinesResponse {
	export type AsObject = {
		pipelinesList: Array<S2sPipeline.AsObject>;
	};
}

export class S2sStreamRequest extends jspb.Message {
	getPipelineId(): string;
	setPipelineId(value: string): S2sStreamRequest;

	getSessionId(): string;
	setSessionId(value: string): S2sStreamRequest;

	getAudio(): Uint8Array | string;
	getAudio_asU8(): Uint8Array;
	getAudio_asB64(): string;
	setAudio(value: Uint8Array | string): S2sStreamRequest;

	getEndOfStream(): boolean;
	setEndOfStream(value: boolean): S2sStreamRequest;

	getInitialIntentDisplayName(): string;
	setInitialIntentDisplayName(value: string): S2sStreamRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2sStreamRequest.AsObject;
	static toObject(includeInstance: boolean, msg: S2sStreamRequest): S2sStreamRequest.AsObject;
	static serializeBinaryToWriter(message: S2sStreamRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2sStreamRequest;
	static deserializeBinaryFromReader(message: S2sStreamRequest, reader: jspb.BinaryReader): S2sStreamRequest;
}

export namespace S2sStreamRequest {
	export type AsObject = {
		pipelineId: string;
		sessionId: string;
		audio: Uint8Array | string;
		endOfStream: boolean;
		initialIntentDisplayName: string;
	};
}

export class S2sStreamResponse extends jspb.Message {
	getDetectIntentResponse(): ondewo_nlu_session_pb.DetectIntentResponse | undefined;
	setDetectIntentResponse(value?: ondewo_nlu_session_pb.DetectIntentResponse): S2sStreamResponse;
	hasDetectIntentResponse(): boolean;
	clearDetectIntentResponse(): S2sStreamResponse;

	getSynthetizeResponse(): ondewo_t2s_text$to$speech_pb.SynthesizeResponse | undefined;
	setSynthetizeResponse(value?: ondewo_t2s_text$to$speech_pb.SynthesizeResponse): S2sStreamResponse;
	hasSynthetizeResponse(): boolean;
	clearSynthetizeResponse(): S2sStreamResponse;

	getSipTrigger(): SipTrigger | undefined;
	setSipTrigger(value?: SipTrigger): S2sStreamResponse;
	hasSipTrigger(): boolean;
	clearSipTrigger(): S2sStreamResponse;

	getResponseCase(): S2sStreamResponse.ResponseCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2sStreamResponse.AsObject;
	static toObject(includeInstance: boolean, msg: S2sStreamResponse): S2sStreamResponse.AsObject;
	static serializeBinaryToWriter(message: S2sStreamResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2sStreamResponse;
	static deserializeBinaryFromReader(message: S2sStreamResponse, reader: jspb.BinaryReader): S2sStreamResponse;
}

export namespace S2sStreamResponse {
	export type AsObject = {
		detectIntentResponse?: ondewo_nlu_session_pb.DetectIntentResponse.AsObject;
		synthetizeResponse?: ondewo_t2s_text$to$speech_pb.SynthesizeResponse.AsObject;
		sipTrigger?: SipTrigger.AsObject;
	};

	export enum ResponseCase {
		RESPONSE_NOT_SET = 0,
		DETECT_INTENT_RESPONSE = 1,
		SYNTHETIZE_RESPONSE = 2,
		SIP_TRIGGER = 3
	}
}

export class SipTrigger extends jspb.Message {
	getType(): SipTrigger.SipTriggerType;
	setType(value: SipTrigger.SipTriggerType): SipTrigger;

	getContent(): google_protobuf_struct_pb.Struct | undefined;
	setContent(value?: google_protobuf_struct_pb.Struct): SipTrigger;
	hasContent(): boolean;
	clearContent(): SipTrigger;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SipTrigger.AsObject;
	static toObject(includeInstance: boolean, msg: SipTrigger): SipTrigger.AsObject;
	static serializeBinaryToWriter(message: SipTrigger, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SipTrigger;
	static deserializeBinaryFromReader(message: SipTrigger, reader: jspb.BinaryReader): SipTrigger;
}

export namespace SipTrigger {
	export type AsObject = {
		type: SipTrigger.SipTriggerType;
		content?: google_protobuf_struct_pb.Struct.AsObject;
	};

	export enum SipTriggerType {
		UNSPECIFIED = 0,
		HANGUP = 1,
		HUMAN_HANDOVER = 2,
		SEND_NOW = 3,
		PAUSE = 4
	}
}

export class CheckUpstreamHealthResponse extends jspb.Message {
	getS2tStatus(): google_rpc_status_pb.Status | undefined;
	setS2tStatus(value?: google_rpc_status_pb.Status): CheckUpstreamHealthResponse;
	hasS2tStatus(): boolean;
	clearS2tStatus(): CheckUpstreamHealthResponse;

	getNluStatus(): google_rpc_status_pb.Status | undefined;
	setNluStatus(value?: google_rpc_status_pb.Status): CheckUpstreamHealthResponse;
	hasNluStatus(): boolean;
	clearNluStatus(): CheckUpstreamHealthResponse;

	getT2sStatus(): google_rpc_status_pb.Status | undefined;
	setT2sStatus(value?: google_rpc_status_pb.Status): CheckUpstreamHealthResponse;
	hasT2sStatus(): boolean;
	clearT2sStatus(): CheckUpstreamHealthResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CheckUpstreamHealthResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CheckUpstreamHealthResponse): CheckUpstreamHealthResponse.AsObject;
	static serializeBinaryToWriter(message: CheckUpstreamHealthResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CheckUpstreamHealthResponse;
	static deserializeBinaryFromReader(
		message: CheckUpstreamHealthResponse,
		reader: jspb.BinaryReader
	): CheckUpstreamHealthResponse;
}

export namespace CheckUpstreamHealthResponse {
	export type AsObject = {
		s2tStatus?: google_rpc_status_pb.Status.AsObject;
		nluStatus?: google_rpc_status_pb.Status.AsObject;
		t2sStatus?: google_rpc_status_pb.Status.AsObject;
	};
}

export class ControlStreamRequest extends jspb.Message {
	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ControlStreamRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ControlStreamRequest): ControlStreamRequest.AsObject;
	static serializeBinaryToWriter(message: ControlStreamRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ControlStreamRequest;
	static deserializeBinaryFromReader(message: ControlStreamRequest, reader: jspb.BinaryReader): ControlStreamRequest;
}

export namespace ControlStreamRequest {
	export type AsObject = {};
}

export class ControlStreamResponse extends jspb.Message {
	getControlStatus(): ControlStatus;
	setControlStatus(value: ControlStatus): ControlStreamResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ControlStreamResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ControlStreamResponse): ControlStreamResponse.AsObject;
	static serializeBinaryToWriter(message: ControlStreamResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ControlStreamResponse;
	static deserializeBinaryFromReader(message: ControlStreamResponse, reader: jspb.BinaryReader): ControlStreamResponse;
}

export namespace ControlStreamResponse {
	export type AsObject = {
		controlStatus: ControlStatus;
	};
}

export class SetControlStatusRequest extends jspb.Message {
	getControlStatus(): ControlStatus;
	setControlStatus(value: ControlStatus): SetControlStatusRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SetControlStatusRequest.AsObject;
	static toObject(includeInstance: boolean, msg: SetControlStatusRequest): SetControlStatusRequest.AsObject;
	static serializeBinaryToWriter(message: SetControlStatusRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SetControlStatusRequest;
	static deserializeBinaryFromReader(
		message: SetControlStatusRequest,
		reader: jspb.BinaryReader
	): SetControlStatusRequest;
}

export namespace SetControlStatusRequest {
	export type AsObject = {
		controlStatus: ControlStatus;
	};
}

export class SetControlStatusResponse extends jspb.Message {
	getOldControlStatus(): ControlStatus;
	setOldControlStatus(value: ControlStatus): SetControlStatusResponse;

	getNewControlStatus(): ControlStatus;
	setNewControlStatus(value: ControlStatus): SetControlStatusResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SetControlStatusResponse.AsObject;
	static toObject(includeInstance: boolean, msg: SetControlStatusResponse): SetControlStatusResponse.AsObject;
	static serializeBinaryToWriter(message: SetControlStatusResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SetControlStatusResponse;
	static deserializeBinaryFromReader(
		message: SetControlStatusResponse,
		reader: jspb.BinaryReader
	): SetControlStatusResponse;
}

export namespace SetControlStatusResponse {
	export type AsObject = {
		oldControlStatus: ControlStatus;
		newControlStatus: ControlStatus;
	};
}

export class CondtionValueUnion extends jspb.Message {
	getIntValue(): number;
	setIntValue(value: number): CondtionValueUnion;

	getFloatValue(): number;
	setFloatValue(value: number): CondtionValueUnion;

	getDatetimeValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setDatetimeValue(value?: google_protobuf_timestamp_pb.Timestamp): CondtionValueUnion;
	hasDatetimeValue(): boolean;
	clearDatetimeValue(): CondtionValueUnion;

	getUniononeofCase(): CondtionValueUnion.UniononeofCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CondtionValueUnion.AsObject;
	static toObject(includeInstance: boolean, msg: CondtionValueUnion): CondtionValueUnion.AsObject;
	static serializeBinaryToWriter(message: CondtionValueUnion, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CondtionValueUnion;
	static deserializeBinaryFromReader(message: CondtionValueUnion, reader: jspb.BinaryReader): CondtionValueUnion;
}

export namespace CondtionValueUnion {
	export type AsObject = {
		intValue: number;
		floatValue: number;
		datetimeValue?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};

	export enum UniononeofCase {
		UNIONONEOF_NOT_SET = 0,
		INT_VALUE = 1,
		FLOAT_VALUE = 2,
		DATETIME_VALUE = 3
	}
}

export class Condition extends jspb.Message {
	getType(): ConditionType;
	setType(value: ConditionType): Condition;

	getValue(): string;
	setValue(value: string): Condition;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Condition.AsObject;
	static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
	static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Condition;
	static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
}

export namespace Condition {
	export type AsObject = {
		type: ConditionType;
		value: string;
	};
}

export class ControlMessageServiceParameters extends jspb.Message {
	getT2sConfig(): ondewo_t2s_text$to$speech_pb.RequestConfig | undefined;
	setT2sConfig(value?: ondewo_t2s_text$to$speech_pb.RequestConfig): ControlMessageServiceParameters;
	hasT2sConfig(): boolean;
	clearT2sConfig(): ControlMessageServiceParameters;

	getS2tConfig(): ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig | undefined;
	setS2tConfig(value?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig): ControlMessageServiceParameters;
	hasS2tConfig(): boolean;
	clearS2tConfig(): ControlMessageServiceParameters;

	getTransferId(): string;
	setTransferId(value: string): ControlMessageServiceParameters;

	getWavFilesList(): Array<Uint8Array | string>;
	setWavFilesList(value: Array<Uint8Array | string>): ControlMessageServiceParameters;
	clearWavFilesList(): ControlMessageServiceParameters;
	addWavFiles(value: Uint8Array | string, index?: number): ControlMessageServiceParameters;

	getText(): string;
	setText(value: string): ControlMessageServiceParameters;

	getContext(): ondewo_nlu_context_pb.Context | undefined;
	setContext(value?: ondewo_nlu_context_pb.Context): ControlMessageServiceParameters;
	hasContext(): boolean;
	clearContext(): ControlMessageServiceParameters;

	getSessionId(): string;
	setSessionId(value: string): ControlMessageServiceParameters;

	getContextName(): string;
	setContextName(value: string): ControlMessageServiceParameters;

	getConditionStart(): Condition | undefined;
	setConditionStart(value?: Condition): ControlMessageServiceParameters;
	hasConditionStart(): boolean;
	clearConditionStart(): ControlMessageServiceParameters;

	getConditionEnd(): Condition | undefined;
	setConditionEnd(value?: Condition): ControlMessageServiceParameters;
	hasConditionEnd(): boolean;
	clearConditionEnd(): ControlMessageServiceParameters;

	getConfigCase(): ControlMessageServiceParameters.ConfigCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ControlMessageServiceParameters.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ControlMessageServiceParameters
	): ControlMessageServiceParameters.AsObject;
	static serializeBinaryToWriter(message: ControlMessageServiceParameters, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ControlMessageServiceParameters;
	static deserializeBinaryFromReader(
		message: ControlMessageServiceParameters,
		reader: jspb.BinaryReader
	): ControlMessageServiceParameters;
}

export namespace ControlMessageServiceParameters {
	export type AsObject = {
		t2sConfig?: ondewo_t2s_text$to$speech_pb.RequestConfig.AsObject;
		s2tConfig?: ondewo_s2t_speech$to$text_pb.TranscribeRequestConfig.AsObject;
		transferId: string;
		wavFilesList: Array<Uint8Array | string>;
		text: string;
		context?: ondewo_nlu_context_pb.Context.AsObject;
		sessionId: string;
		contextName: string;
		conditionStart?: Condition.AsObject;
		conditionEnd?: Condition.AsObject;
	};

	export enum ConfigCase {
		CONFIG_NOT_SET = 0,
		T2S_CONFIG = 1,
		S2T_CONFIG = 2
	}
}

export class ControlMessage extends jspb.Message {
	getService(): ControlMessageServiceName;
	setService(value: ControlMessageServiceName): ControlMessage;

	getMethod(): ControlMessageServiceMethod;
	setMethod(value: ControlMessageServiceMethod): ControlMessage;

	getParameters(): ControlMessageServiceParameters | undefined;
	setParameters(value?: ControlMessageServiceParameters): ControlMessage;
	hasParameters(): boolean;
	clearParameters(): ControlMessage;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ControlMessage.AsObject;
	static toObject(includeInstance: boolean, msg: ControlMessage): ControlMessage.AsObject;
	static serializeBinaryToWriter(message: ControlMessage, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ControlMessage;
	static deserializeBinaryFromReader(message: ControlMessage, reader: jspb.BinaryReader): ControlMessage;
}

export namespace ControlMessage {
	export type AsObject = {
		service: ControlMessageServiceName;
		method: ControlMessageServiceMethod;
		parameters?: ControlMessageServiceParameters.AsObject;
	};
}

export enum ControlStatus {
	OK = 0,
	EMERGENCY_STOP = 1
}
export enum ControlMessageServiceName {
	UNKNOWNNAME = 0,
	ONDEWO_S2T = 1,
	ONDEWO_T2S = 2,
	ONDEWO_NLU = 3,
	ONDEWO_SIP = 4
}
export enum ControlMessageServiceMethod {
	UNKNOWNMETHOD = 0,
	UPDATE_CONFIG = 1,
	UNDO_CONFIG = 2,
	RESET_CONFIG = 3,
	END_CALL = 4,
	TRANSFER_CALL = 5,
	PLAY_WAV_FILES = 6,
	PLAY_TEXT = 7,
	MUTE = 8,
	UN_MUTE = 9,
	STOP_ALL_CONTROL_MESSAGES = 10,
	TRAIN_AGENT = 11,
	CANCEL_TRAIN_AGENT = 12,
	DELETE_SESSION = 13,
	DELETE_ALL_CONTEXTS = 14,
	CREATE_CONTEXT = 15,
	UPDATE_CONTEXT = 16,
	DELETE_CONTEXT = 17,
	DETECT_INTENT = 18
}
export enum ConditionType {
	UNKNOWTYPE = 0,
	IMMEDIATE = 1,
	DURATION = 2,
	DATETIME = 3,
	INTERACTIONS = 4
}
