import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_rpc_status_pb from '../../google/rpc/status_pb';
import * as google_type_latlng_pb from '../../google/type/latlng_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';

export class DetectIntentRequest extends jspb.Message {
	getSession(): string;
	setSession(value: string): DetectIntentRequest;

	getQueryParams(): QueryParameters | undefined;
	setQueryParams(value?: QueryParameters): DetectIntentRequest;
	hasQueryParams(): boolean;
	clearQueryParams(): DetectIntentRequest;

	getQueryInput(): QueryInput | undefined;
	setQueryInput(value?: QueryInput): DetectIntentRequest;
	hasQueryInput(): boolean;
	clearQueryInput(): DetectIntentRequest;

	getInputAudio(): Uint8Array | string;
	getInputAudio_asU8(): Uint8Array;
	getInputAudio_asB64(): string;
	setInputAudio(value: Uint8Array | string): DetectIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DetectIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DetectIntentRequest): DetectIntentRequest.AsObject;
	static serializeBinaryToWriter(message: DetectIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DetectIntentRequest;
	static deserializeBinaryFromReader(message: DetectIntentRequest, reader: jspb.BinaryReader): DetectIntentRequest;
}

export namespace DetectIntentRequest {
	export type AsObject = {
		session: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		inputAudio: Uint8Array | string;
	};
}

export class DetectIntentResponse extends jspb.Message {
	getResponseId(): string;
	setResponseId(value: string): DetectIntentResponse;

	getQueryResult(): QueryResult | undefined;
	setQueryResult(value?: QueryResult): DetectIntentResponse;
	hasQueryResult(): boolean;
	clearQueryResult(): DetectIntentResponse;

	getWebhookStatus(): google_rpc_status_pb.Status | undefined;
	setWebhookStatus(value?: google_rpc_status_pb.Status): DetectIntentResponse;
	hasWebhookStatus(): boolean;
	clearWebhookStatus(): DetectIntentResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DetectIntentResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DetectIntentResponse): DetectIntentResponse.AsObject;
	static serializeBinaryToWriter(message: DetectIntentResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DetectIntentResponse;
	static deserializeBinaryFromReader(message: DetectIntentResponse, reader: jspb.BinaryReader): DetectIntentResponse;
}

export namespace DetectIntentResponse {
	export type AsObject = {
		responseId: string;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: google_rpc_status_pb.Status.AsObject;
	};
}

export class QueryParameters extends jspb.Message {
	getTimeZone(): string;
	setTimeZone(value: string): QueryParameters;

	getGeoLocation(): google_type_latlng_pb.LatLng | undefined;
	setGeoLocation(value?: google_type_latlng_pb.LatLng): QueryParameters;
	hasGeoLocation(): boolean;
	clearGeoLocation(): QueryParameters;

	getContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsList(value: Array<ondewo_nlu_context_pb.Context>): QueryParameters;
	clearContextsList(): QueryParameters;
	addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getResetContexts(): boolean;
	setResetContexts(value: boolean): QueryParameters;

	getPayload(): google_protobuf_struct_pb.Struct | undefined;
	setPayload(value?: google_protobuf_struct_pb.Struct): QueryParameters;
	hasPayload(): boolean;
	clearPayload(): QueryParameters;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): QueryParameters;
	clearLabelsList(): QueryParameters;
	addLabels(value: string, index?: number): QueryParameters;

	getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): QueryParameters;
	clearPlatformsList(): QueryParameters;
	addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): QueryParameters;

	getAccountId(): string;
	setAccountId(value: string): QueryParameters;

	getPropertyId(): string;
	setPropertyId(value: string): QueryParameters;

	getDatastreamId(): string;
	setDatastreamId(value: string): QueryParameters;

	getOriginId(): string;
	setOriginId(value: string): QueryParameters;

	getIdentifiedUserId(): string;
	setIdentifiedUserId(value: string): QueryParameters;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QueryParameters.AsObject;
	static toObject(includeInstance: boolean, msg: QueryParameters): QueryParameters.AsObject;
	static serializeBinaryToWriter(message: QueryParameters, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): QueryParameters;
	static deserializeBinaryFromReader(message: QueryParameters, reader: jspb.BinaryReader): QueryParameters;
}

export namespace QueryParameters {
	export type AsObject = {
		timeZone: string;
		geoLocation?: google_type_latlng_pb.LatLng.AsObject;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		resetContexts: boolean;
		payload?: google_protobuf_struct_pb.Struct.AsObject;
		labelsList: Array<string>;
		platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
		accountId: string;
		propertyId: string;
		datastreamId: string;
		originId: string;
		identifiedUserId: string;
	};
}

export class QueryInput extends jspb.Message {
	getAudioConfig(): InputAudioConfig | undefined;
	setAudioConfig(value?: InputAudioConfig): QueryInput;
	hasAudioConfig(): boolean;
	clearAudioConfig(): QueryInput;

	getText(): TextInput | undefined;
	setText(value?: TextInput): QueryInput;
	hasText(): boolean;
	clearText(): QueryInput;

	getEvent(): EventInput | undefined;
	setEvent(value?: EventInput): QueryInput;
	hasEvent(): boolean;
	clearEvent(): QueryInput;

	getInputCase(): QueryInput.InputCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QueryInput.AsObject;
	static toObject(includeInstance: boolean, msg: QueryInput): QueryInput.AsObject;
	static serializeBinaryToWriter(message: QueryInput, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): QueryInput;
	static deserializeBinaryFromReader(message: QueryInput, reader: jspb.BinaryReader): QueryInput;
}

export namespace QueryInput {
	export type AsObject = {
		audioConfig?: InputAudioConfig.AsObject;
		text?: TextInput.AsObject;
		event?: EventInput.AsObject;
	};

	export enum InputCase {
		INPUT_NOT_SET = 0,
		AUDIO_CONFIG = 1,
		TEXT = 2,
		EVENT = 3
	}
}

export class QueryResult extends jspb.Message {
	getQueryText(): string;
	setQueryText(value: string): QueryResult;

	getSpeechRecognitionConfidence(): number;
	setSpeechRecognitionConfidence(value: number): QueryResult;

	getAction(): string;
	setAction(value: string): QueryResult;

	getParameters(): google_protobuf_struct_pb.Struct | undefined;
	setParameters(value?: google_protobuf_struct_pb.Struct): QueryResult;
	hasParameters(): boolean;
	clearParameters(): QueryResult;

	getAllRequiredParamsPresent(): boolean;
	setAllRequiredParamsPresent(value: boolean): QueryResult;

	getFulfillmentText(): string;
	setFulfillmentText(value: string): QueryResult;

	getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
	setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): QueryResult;
	clearFulfillmentMessagesList(): QueryResult;
	addFulfillmentMessages(
		value?: ondewo_nlu_intent_pb.Intent.Message,
		index?: number
	): ondewo_nlu_intent_pb.Intent.Message;

	getWebhookSource(): string;
	setWebhookSource(value: string): QueryResult;

	getWebhookPayload(): google_protobuf_struct_pb.Struct | undefined;
	setWebhookPayload(value?: google_protobuf_struct_pb.Struct): QueryResult;
	hasWebhookPayload(): boolean;
	clearWebhookPayload(): QueryResult;

	getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): QueryResult;
	clearOutputContextsList(): QueryResult;
	addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getIntent(): ondewo_nlu_intent_pb.Intent | undefined;
	setIntent(value?: ondewo_nlu_intent_pb.Intent): QueryResult;
	hasIntent(): boolean;
	clearIntent(): QueryResult;

	getIntentDetectionConfidence(): number;
	setIntentDetectionConfidence(value: number): QueryResult;

	getQueryTextOriginal(): string;
	setQueryTextOriginal(value: string): QueryResult;

	getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
	setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): QueryResult;
	hasDiagnosticInfo(): boolean;
	clearDiagnosticInfo(): QueryResult;

	getLanguageCode(): string;
	setLanguageCode(value: string): QueryResult;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QueryResult.AsObject;
	static toObject(includeInstance: boolean, msg: QueryResult): QueryResult.AsObject;
	static serializeBinaryToWriter(message: QueryResult, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): QueryResult;
	static deserializeBinaryFromReader(message: QueryResult, reader: jspb.BinaryReader): QueryResult;
}

export namespace QueryResult {
	export type AsObject = {
		queryText: string;
		speechRecognitionConfidence: number;
		action: string;
		parameters?: google_protobuf_struct_pb.Struct.AsObject;
		allRequiredParamsPresent: boolean;
		fulfillmentText: string;
		fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>;
		webhookSource: string;
		webhookPayload?: google_protobuf_struct_pb.Struct.AsObject;
		outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		intent?: ondewo_nlu_intent_pb.Intent.AsObject;
		intentDetectionConfidence: number;
		queryTextOriginal: string;
		diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject;
		languageCode: string;
	};
}

export class StreamingDetectIntentRequest extends jspb.Message {
	getSession(): string;
	setSession(value: string): StreamingDetectIntentRequest;

	getQueryParams(): QueryParameters | undefined;
	setQueryParams(value?: QueryParameters): StreamingDetectIntentRequest;
	hasQueryParams(): boolean;
	clearQueryParams(): StreamingDetectIntentRequest;

	getQueryInput(): QueryInput | undefined;
	setQueryInput(value?: QueryInput): StreamingDetectIntentRequest;
	hasQueryInput(): boolean;
	clearQueryInput(): StreamingDetectIntentRequest;

	getSingleUtterance(): boolean;
	setSingleUtterance(value: boolean): StreamingDetectIntentRequest;

	getInputAudio(): Uint8Array | string;
	getInputAudio_asU8(): Uint8Array;
	getInputAudio_asB64(): string;
	setInputAudio(value: Uint8Array | string): StreamingDetectIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamingDetectIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: StreamingDetectIntentRequest): StreamingDetectIntentRequest.AsObject;
	static serializeBinaryToWriter(message: StreamingDetectIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentRequest;
	static deserializeBinaryFromReader(
		message: StreamingDetectIntentRequest,
		reader: jspb.BinaryReader
	): StreamingDetectIntentRequest;
}

export namespace StreamingDetectIntentRequest {
	export type AsObject = {
		session: string;
		queryParams?: QueryParameters.AsObject;
		queryInput?: QueryInput.AsObject;
		singleUtterance: boolean;
		inputAudio: Uint8Array | string;
	};
}

export class StreamingDetectIntentResponse extends jspb.Message {
	getResponseId(): string;
	setResponseId(value: string): StreamingDetectIntentResponse;

	getRecognitionResult(): StreamingRecognitionResult | undefined;
	setRecognitionResult(value?: StreamingRecognitionResult): StreamingDetectIntentResponse;
	hasRecognitionResult(): boolean;
	clearRecognitionResult(): StreamingDetectIntentResponse;

	getQueryResult(): QueryResult | undefined;
	setQueryResult(value?: QueryResult): StreamingDetectIntentResponse;
	hasQueryResult(): boolean;
	clearQueryResult(): StreamingDetectIntentResponse;

	getWebhookStatus(): google_rpc_status_pb.Status | undefined;
	setWebhookStatus(value?: google_rpc_status_pb.Status): StreamingDetectIntentResponse;
	hasWebhookStatus(): boolean;
	clearWebhookStatus(): StreamingDetectIntentResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamingDetectIntentResponse.AsObject;
	static toObject(includeInstance: boolean, msg: StreamingDetectIntentResponse): StreamingDetectIntentResponse.AsObject;
	static serializeBinaryToWriter(message: StreamingDetectIntentResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StreamingDetectIntentResponse;
	static deserializeBinaryFromReader(
		message: StreamingDetectIntentResponse,
		reader: jspb.BinaryReader
	): StreamingDetectIntentResponse;
}

export namespace StreamingDetectIntentResponse {
	export type AsObject = {
		responseId: string;
		recognitionResult?: StreamingRecognitionResult.AsObject;
		queryResult?: QueryResult.AsObject;
		webhookStatus?: google_rpc_status_pb.Status.AsObject;
	};
}

export class StreamingRecognitionResult extends jspb.Message {
	getMessageType(): StreamingRecognitionResult.MessageType;
	setMessageType(value: StreamingRecognitionResult.MessageType): StreamingRecognitionResult;

	getTranscript(): string;
	setTranscript(value: string): StreamingRecognitionResult;

	getIsFinal(): boolean;
	setIsFinal(value: boolean): StreamingRecognitionResult;

	getConfidence(): number;
	setConfidence(value: number): StreamingRecognitionResult;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamingRecognitionResult.AsObject;
	static toObject(includeInstance: boolean, msg: StreamingRecognitionResult): StreamingRecognitionResult.AsObject;
	static serializeBinaryToWriter(message: StreamingRecognitionResult, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StreamingRecognitionResult;
	static deserializeBinaryFromReader(
		message: StreamingRecognitionResult,
		reader: jspb.BinaryReader
	): StreamingRecognitionResult;
}

export namespace StreamingRecognitionResult {
	export type AsObject = {
		messageType: StreamingRecognitionResult.MessageType;
		transcript: string;
		isFinal: boolean;
		confidence: number;
	};

	export enum MessageType {
		MESSAGE_TYPE_UNSPECIFIED = 0,
		TRANSCRIPT = 1,
		END_OF_SINGLE_UTTERANCE = 2
	}
}

export class InputAudioConfig extends jspb.Message {
	getAudioEncoding(): AudioEncoding;
	setAudioEncoding(value: AudioEncoding): InputAudioConfig;

	getSampleRateHertz(): number;
	setSampleRateHertz(value: number): InputAudioConfig;

	getLanguageCode(): string;
	setLanguageCode(value: string): InputAudioConfig;

	getPhraseHintsList(): Array<string>;
	setPhraseHintsList(value: Array<string>): InputAudioConfig;
	clearPhraseHintsList(): InputAudioConfig;
	addPhraseHints(value: string, index?: number): InputAudioConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): InputAudioConfig.AsObject;
	static toObject(includeInstance: boolean, msg: InputAudioConfig): InputAudioConfig.AsObject;
	static serializeBinaryToWriter(message: InputAudioConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): InputAudioConfig;
	static deserializeBinaryFromReader(message: InputAudioConfig, reader: jspb.BinaryReader): InputAudioConfig;
}

export namespace InputAudioConfig {
	export type AsObject = {
		audioEncoding: AudioEncoding;
		sampleRateHertz: number;
		languageCode: string;
		phraseHintsList: Array<string>;
	};
}

export class TextInput extends jspb.Message {
	getText(): string;
	setText(value: string): TextInput;

	getLanguageCode(): string;
	setLanguageCode(value: string): TextInput;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TextInput.AsObject;
	static toObject(includeInstance: boolean, msg: TextInput): TextInput.AsObject;
	static serializeBinaryToWriter(message: TextInput, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TextInput;
	static deserializeBinaryFromReader(message: TextInput, reader: jspb.BinaryReader): TextInput;
}

export namespace TextInput {
	export type AsObject = {
		text: string;
		languageCode: string;
	};
}

export class EventInput extends jspb.Message {
	getName(): string;
	setName(value: string): EventInput;

	getParameters(): google_protobuf_struct_pb.Struct | undefined;
	setParameters(value?: google_protobuf_struct_pb.Struct): EventInput;
	hasParameters(): boolean;
	clearParameters(): EventInput;

	getLanguageCode(): string;
	setLanguageCode(value: string): EventInput;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): EventInput.AsObject;
	static toObject(includeInstance: boolean, msg: EventInput): EventInput.AsObject;
	static serializeBinaryToWriter(message: EventInput, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): EventInput;
	static deserializeBinaryFromReader(message: EventInput, reader: jspb.BinaryReader): EventInput;
}

export namespace EventInput {
	export type AsObject = {
		name: string;
		parameters?: google_protobuf_struct_pb.Struct.AsObject;
		languageCode: string;
	};
}

export class Session extends jspb.Message {
	getName(): string;
	setName(value: string): Session;

	getSessionStepsList(): Array<SessionStep>;
	setSessionStepsList(value: Array<SessionStep>): Session;
	clearSessionStepsList(): Session;
	addSessionSteps(value?: SessionStep, index?: number): SessionStep;

	getSessionInfo(): SessionInfo | undefined;
	setSessionInfo(value?: SessionInfo): Session;
	hasSessionInfo(): boolean;
	clearSessionInfo(): Session;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Session.AsObject;
	static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
	static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Session;
	static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
	export type AsObject = {
		name: string;
		sessionStepsList: Array<SessionStep.AsObject>;
		sessionInfo?: SessionInfo.AsObject;
	};

	export enum View {
		VIEW_UNSPECIFIED = 0,
		VIEW_FULL = 1,
		VIEW_SPARSE = 2
	}
}

export class SessionStep extends jspb.Message {
	getName(): string;
	setName(value: string): SessionStep;

	getDetectIntentRequest(): DetectIntentRequest | undefined;
	setDetectIntentRequest(value?: DetectIntentRequest): SessionStep;
	hasDetectIntentRequest(): boolean;
	clearDetectIntentRequest(): SessionStep;

	getDetectIntentResponse(): DetectIntentResponse | undefined;
	setDetectIntentResponse(value?: DetectIntentResponse): SessionStep;
	hasDetectIntentResponse(): boolean;
	clearDetectIntentResponse(): SessionStep;

	getContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionStep;
	clearContextsList(): SessionStep;
	addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SessionStep;
	hasTimestamp(): boolean;
	clearTimestamp(): SessionStep;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionStep.AsObject;
	static toObject(includeInstance: boolean, msg: SessionStep): SessionStep.AsObject;
	static serializeBinaryToWriter(message: SessionStep, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionStep;
	static deserializeBinaryFromReader(message: SessionStep, reader: jspb.BinaryReader): SessionStep;
}

export namespace SessionStep {
	export type AsObject = {
		name: string;
		detectIntentRequest?: DetectIntentRequest.AsObject;
		detectIntentResponse?: DetectIntentResponse.AsObject;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class TrackSessionStepRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): TrackSessionStepRequest;

	getSessionStep(): SessionStep | undefined;
	setSessionStep(value?: SessionStep): TrackSessionStepRequest;
	hasSessionStep(): boolean;
	clearSessionStep(): TrackSessionStepRequest;

	getSessionView(): Session.View;
	setSessionView(value: Session.View): TrackSessionStepRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TrackSessionStepRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TrackSessionStepRequest): TrackSessionStepRequest.AsObject;
	static serializeBinaryToWriter(message: TrackSessionStepRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TrackSessionStepRequest;
	static deserializeBinaryFromReader(
		message: TrackSessionStepRequest,
		reader: jspb.BinaryReader
	): TrackSessionStepRequest;
}

export namespace TrackSessionStepRequest {
	export type AsObject = {
		sessionId: string;
		sessionStep?: SessionStep.AsObject;
		sessionView: Session.View;
	};
}

export class ListSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListSessionsRequest;

	getSessionView(): Session.View;
	setSessionView(value: Session.View): ListSessionsRequest;

	getPageToken(): string;
	setPageToken(value: string): ListSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListSessionsRequest;

	getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListSessionsRequest;
	hasFieldMask(): boolean;
	clearFieldMask(): ListSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
	static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionView: Session.View;
		pageToken: string;
		sessionFilter?: SessionFilter.AsObject;
		fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
	};
}

export class ContextFilter extends jspb.Message {
	getContextName(): string;
	setContextName(value: string): ContextFilter;

	getKey(): string;
	setKey(value: string): ContextFilter;

	getValue(): string;
	setValue(value: string): ContextFilter;

	getOperator(): ComparisonOperator;
	setOperator(value: ComparisonOperator): ContextFilter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ContextFilter.AsObject;
	static toObject(includeInstance: boolean, msg: ContextFilter): ContextFilter.AsObject;
	static serializeBinaryToWriter(message: ContextFilter, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ContextFilter;
	static deserializeBinaryFromReader(message: ContextFilter, reader: jspb.BinaryReader): ContextFilter;
}

export namespace ContextFilter {
	export type AsObject = {
		contextName: string;
		key: string;
		value: string;
		operator: ComparisonOperator;
	};
}

export class SessionFilter extends jspb.Message {
	getLanguageCodesList(): Array<string>;
	setLanguageCodesList(value: Array<string>): SessionFilter;
	clearLanguageCodesList(): SessionFilter;
	addLanguageCodes(value: string, index?: number): SessionFilter;

	getMatchedIntentsList(): Array<ondewo_nlu_intent_pb.Intent>;
	setMatchedIntentsList(value: Array<ondewo_nlu_intent_pb.Intent>): SessionFilter;
	clearMatchedIntentsList(): SessionFilter;
	addMatchedIntents(value?: ondewo_nlu_intent_pb.Intent, index?: number): ondewo_nlu_intent_pb.Intent;

	getMatchedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
	setMatchedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): SessionFilter;
	clearMatchedEntityTypesList(): SessionFilter;
	addMatchedEntityTypes(
		value?: ondewo_nlu_entity_type_pb.EntityType,
		index?: number
	): ondewo_nlu_entity_type_pb.EntityType;

	getMinIntentsConfidenceMin(): number;
	setMinIntentsConfidenceMin(value: number): SessionFilter;

	getMinIntentsConfidenceMax(): number;
	setMinIntentsConfidenceMax(value: number): SessionFilter;

	getMinEntityTypesConfidenceMin(): number;
	setMinEntityTypesConfidenceMin(value: number): SessionFilter;

	getMinEntityTypesConfidenceMax(): number;
	setMinEntityTypesConfidenceMax(value: number): SessionFilter;

	getEarliest(): number;
	setEarliest(value: number): SessionFilter;

	getLatest(): number;
	setLatest(value: number): SessionFilter;

	getMinNumberTurns(): number;
	setMinNumberTurns(value: number): SessionFilter;

	getMaxNumberTurns(): number;
	setMaxNumberTurns(value: number): SessionFilter;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): SessionFilter;
	clearLabelsList(): SessionFilter;
	addLabels(value: string, index?: number): SessionFilter;

	getUserIdsList(): Array<string>;
	setUserIdsList(value: Array<string>): SessionFilter;
	clearUserIdsList(): SessionFilter;
	addUserIds(value: string, index?: number): SessionFilter;

	getIntentTagsList(): Array<string>;
	setIntentTagsList(value: Array<string>): SessionFilter;
	clearIntentTagsList(): SessionFilter;
	addIntentTags(value: string, index?: number): SessionFilter;

	getSessionIdsList(): Array<string>;
	setSessionIdsList(value: Array<string>): SessionFilter;
	clearSessionIdsList(): SessionFilter;
	addSessionIds(value: string, index?: number): SessionFilter;

	getInputContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setInputContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionFilter;
	clearInputContextsList(): SessionFilter;
	addInputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionFilter;
	clearOutputContextsList(): SessionFilter;
	addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getDurationInSMin(): number;
	setDurationInSMin(value: number): SessionFilter;

	getDurationInSMax(): number;
	setDurationInSMax(value: number): SessionFilter;

	getDurationInMMin(): number;
	setDurationInMMin(value: number): SessionFilter;

	getDurationInMMax(): number;
	setDurationInMMax(value: number): SessionFilter;

	getDurationInMRoundedMin(): number;
	setDurationInMRoundedMin(value: number): SessionFilter;

	getDurationInMRoundedMax(): number;
	setDurationInMRoundedMax(value: number): SessionFilter;

	getDurationInterval15sRoundedMin(): number;
	setDurationInterval15sRoundedMin(value: number): SessionFilter;

	getDurationInterval15sRoundedMax(): number;
	setDurationInterval15sRoundedMax(value: number): SessionFilter;

	getDurationInterval30sRoundedMin(): number;
	setDurationInterval30sRoundedMin(value: number): SessionFilter;

	getDurationInterval30sRoundedMax(): number;
	setDurationInterval30sRoundedMax(value: number): SessionFilter;

	getDurationInterval45sRoundedMin(): number;
	setDurationInterval45sRoundedMin(value: number): SessionFilter;

	getDurationInterval45sRoundedMax(): number;
	setDurationInterval45sRoundedMax(value: number): SessionFilter;

	getStartedTimeSlotPerHourMin(): string;
	setStartedTimeSlotPerHourMin(value: string): SessionFilter;

	getStartedTimeSlotPerHourMax(): string;
	setStartedTimeSlotPerHourMax(value: string): SessionFilter;

	getStartedTimeSlotPerQuarterHourMin(): string;
	setStartedTimeSlotPerQuarterHourMin(value: string): SessionFilter;

	getStartedTimeSlotPerQuarterHourMax(): string;
	setStartedTimeSlotPerQuarterHourMax(value: string): SessionFilter;

	getStartedTimeSlotPerHalfHourMin(): string;
	setStartedTimeSlotPerHalfHourMin(value: string): SessionFilter;

	getStartedTimeSlotPerHalfHourMax(): string;
	setStartedTimeSlotPerHalfHourMax(value: string): SessionFilter;

	getStartedTimeSlotPerDayPhaseMin(): string;
	setStartedTimeSlotPerDayPhaseMin(value: string): SessionFilter;

	getStartedTimeSlotPerDayPhaseMax(): string;
	setStartedTimeSlotPerDayPhaseMax(value: string): SessionFilter;

	getStartedTimeSlotPerMinuteMin(): string;
	setStartedTimeSlotPerMinuteMin(value: string): SessionFilter;

	getStartedTimeSlotPerMinuteMax(): string;
	setStartedTimeSlotPerMinuteMax(value: string): SessionFilter;

	getDurationInSRoundedMin(): number;
	setDurationInSRoundedMin(value: number): SessionFilter;

	getDurationInSRoundedMax(): number;
	setDurationInSRoundedMax(value: number): SessionFilter;

	getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionFilter;
	clearPlatformsList(): SessionFilter;
	addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): SessionFilter;

	getAccountIdsList(): Array<string>;
	setAccountIdsList(value: Array<string>): SessionFilter;
	clearAccountIdsList(): SessionFilter;
	addAccountIds(value: string, index?: number): SessionFilter;

	getPropertyIdsList(): Array<string>;
	setPropertyIdsList(value: Array<string>): SessionFilter;
	clearPropertyIdsList(): SessionFilter;
	addPropertyIds(value: string, index?: number): SessionFilter;

	getDatastreamIdsList(): Array<string>;
	setDatastreamIdsList(value: Array<string>): SessionFilter;
	clearDatastreamIdsList(): SessionFilter;
	addDatastreamIds(value: string, index?: number): SessionFilter;

	getOriginIdsList(): Array<string>;
	setOriginIdsList(value: Array<string>): SessionFilter;
	clearOriginIdsList(): SessionFilter;
	addOriginIds(value: string, index?: number): SessionFilter;

	getIdentifiedUserIdsList(): Array<string>;
	setIdentifiedUserIdsList(value: Array<string>): SessionFilter;
	clearIdentifiedUserIdsList(): SessionFilter;
	addIdentifiedUserIds(value: string, index?: number): SessionFilter;

	getDurationInterval60sRoundedMin(): number;
	setDurationInterval60sRoundedMin(value: number): SessionFilter;

	getDurationInterval60sRoundedMax(): number;
	setDurationInterval60sRoundedMax(value: number): SessionFilter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionFilter.AsObject;
	static toObject(includeInstance: boolean, msg: SessionFilter): SessionFilter.AsObject;
	static serializeBinaryToWriter(message: SessionFilter, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionFilter;
	static deserializeBinaryFromReader(message: SessionFilter, reader: jspb.BinaryReader): SessionFilter;
}

export namespace SessionFilter {
	export type AsObject = {
		languageCodesList: Array<string>;
		matchedIntentsList: Array<ondewo_nlu_intent_pb.Intent.AsObject>;
		matchedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>;
		minIntentsConfidenceMin: number;
		minIntentsConfidenceMax: number;
		minEntityTypesConfidenceMin: number;
		minEntityTypesConfidenceMax: number;
		earliest: number;
		latest: number;
		minNumberTurns: number;
		maxNumberTurns: number;
		labelsList: Array<string>;
		userIdsList: Array<string>;
		intentTagsList: Array<string>;
		sessionIdsList: Array<string>;
		inputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		durationInSMin: number;
		durationInSMax: number;
		durationInMMin: number;
		durationInMMax: number;
		durationInMRoundedMin: number;
		durationInMRoundedMax: number;
		durationInterval15sRoundedMin: number;
		durationInterval15sRoundedMax: number;
		durationInterval30sRoundedMin: number;
		durationInterval30sRoundedMax: number;
		durationInterval45sRoundedMin: number;
		durationInterval45sRoundedMax: number;
		startedTimeSlotPerHourMin: string;
		startedTimeSlotPerHourMax: string;
		startedTimeSlotPerQuarterHourMin: string;
		startedTimeSlotPerQuarterHourMax: string;
		startedTimeSlotPerHalfHourMin: string;
		startedTimeSlotPerHalfHourMax: string;
		startedTimeSlotPerDayPhaseMin: string;
		startedTimeSlotPerDayPhaseMax: string;
		startedTimeSlotPerMinuteMin: string;
		startedTimeSlotPerMinuteMax: string;
		durationInSRoundedMin: number;
		durationInSRoundedMax: number;
		platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
		accountIdsList: Array<string>;
		propertyIdsList: Array<string>;
		datastreamIdsList: Array<string>;
		originIdsList: Array<string>;
		identifiedUserIdsList: Array<string>;
		durationInterval60sRoundedMin: number;
		durationInterval60sRoundedMax: number;
	};
}

export class SessionInfo extends jspb.Message {
	getLanguageCodesList(): Array<string>;
	setLanguageCodesList(value: Array<string>): SessionInfo;
	clearLanguageCodesList(): SessionInfo;
	addLanguageCodes(value: string, index?: number): SessionInfo;

	getMatchedIntentsList(): Array<ondewo_nlu_intent_pb.Intent>;
	setMatchedIntentsList(value: Array<ondewo_nlu_intent_pb.Intent>): SessionInfo;
	clearMatchedIntentsList(): SessionInfo;
	addMatchedIntents(value?: ondewo_nlu_intent_pb.Intent, index?: number): ondewo_nlu_intent_pb.Intent;

	getMatchedEntityTypesList(): Array<ondewo_nlu_entity_type_pb.EntityType>;
	setMatchedEntityTypesList(value: Array<ondewo_nlu_entity_type_pb.EntityType>): SessionInfo;
	clearMatchedEntityTypesList(): SessionInfo;
	addMatchedEntityTypes(
		value?: ondewo_nlu_entity_type_pb.EntityType,
		index?: number
	): ondewo_nlu_entity_type_pb.EntityType;

	getMinIntentsConfidence(): number;
	setMinIntentsConfidence(value: number): SessionInfo;

	getMinEntityTypesConfidence(): number;
	setMinEntityTypesConfidence(value: number): SessionInfo;

	getEarliest(): number;
	setEarliest(value: number): SessionInfo;

	getLatest(): number;
	setLatest(value: number): SessionInfo;

	getNumberTurns(): number;
	setNumberTurns(value: number): SessionInfo;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): SessionInfo;
	clearLabelsList(): SessionInfo;
	addLabels(value: string, index?: number): SessionInfo;

	getUserIdsList(): Array<string>;
	setUserIdsList(value: Array<string>): SessionInfo;
	clearUserIdsList(): SessionInfo;
	addUserIds(value: string, index?: number): SessionInfo;

	getIntentTagsList(): Array<string>;
	setIntentTagsList(value: Array<string>): SessionInfo;
	clearIntentTagsList(): SessionInfo;
	addIntentTags(value: string, index?: number): SessionInfo;

	getInputContextStepsList(): Array<SessionInfo.ContextSteps>;
	setInputContextStepsList(value: Array<SessionInfo.ContextSteps>): SessionInfo;
	clearInputContextStepsList(): SessionInfo;
	addInputContextSteps(value?: SessionInfo.ContextSteps, index?: number): SessionInfo.ContextSteps;

	getOutputContextStepsList(): Array<SessionInfo.ContextSteps>;
	setOutputContextStepsList(value: Array<SessionInfo.ContextSteps>): SessionInfo;
	clearOutputContextStepsList(): SessionInfo;
	addOutputContextSteps(value?: SessionInfo.ContextSteps, index?: number): SessionInfo.ContextSteps;

	getDurationInS(): number;
	setDurationInS(value: number): SessionInfo;

	getDurationInM(): number;
	setDurationInM(value: number): SessionInfo;

	getDurationInMRounded(): number;
	setDurationInMRounded(value: number): SessionInfo;

	getDurationInterval15sRounded(): number;
	setDurationInterval15sRounded(value: number): SessionInfo;

	getDurationInterval30sRounded(): number;
	setDurationInterval30sRounded(value: number): SessionInfo;

	getDurationInterval45sRounded(): number;
	setDurationInterval45sRounded(value: number): SessionInfo;

	getStartedTimeSlotPerHour(): string;
	setStartedTimeSlotPerHour(value: string): SessionInfo;

	getStartedTimeSlotPerQuarterHour(): string;
	setStartedTimeSlotPerQuarterHour(value: string): SessionInfo;

	getStartedTimeSlotPerHalfHour(): string;
	setStartedTimeSlotPerHalfHour(value: string): SessionInfo;

	getStartedTimeSlotPerDayPhase(): string;
	setStartedTimeSlotPerDayPhase(value: string): SessionInfo;

	getStartedTimeSlotPerMinute(): string;
	setStartedTimeSlotPerMinute(value: string): SessionInfo;

	getDurationInSRounded(): number;
	setDurationInSRounded(value: number): SessionInfo;

	getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionInfo;
	clearPlatformsList(): SessionInfo;
	addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): SessionInfo;

	getAccountIdsList(): Array<string>;
	setAccountIdsList(value: Array<string>): SessionInfo;
	clearAccountIdsList(): SessionInfo;
	addAccountIds(value: string, index?: number): SessionInfo;

	getPropertyIdsList(): Array<string>;
	setPropertyIdsList(value: Array<string>): SessionInfo;
	clearPropertyIdsList(): SessionInfo;
	addPropertyIds(value: string, index?: number): SessionInfo;

	getDatastreamIdsList(): Array<string>;
	setDatastreamIdsList(value: Array<string>): SessionInfo;
	clearDatastreamIdsList(): SessionInfo;
	addDatastreamIds(value: string, index?: number): SessionInfo;

	getOriginIdsList(): Array<string>;
	setOriginIdsList(value: Array<string>): SessionInfo;
	clearOriginIdsList(): SessionInfo;
	addOriginIds(value: string, index?: number): SessionInfo;

	getIdentifiedUserIdsList(): Array<string>;
	setIdentifiedUserIdsList(value: Array<string>): SessionInfo;
	clearIdentifiedUserIdsList(): SessionInfo;
	addIdentifiedUserIds(value: string, index?: number): SessionInfo;

	getDurationInterval60sRounded(): number;
	setDurationInterval60sRounded(value: number): SessionInfo;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionInfo.AsObject;
	static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
	static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionInfo;
	static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
	export type AsObject = {
		languageCodesList: Array<string>;
		matchedIntentsList: Array<ondewo_nlu_intent_pb.Intent.AsObject>;
		matchedEntityTypesList: Array<ondewo_nlu_entity_type_pb.EntityType.AsObject>;
		minIntentsConfidence: number;
		minEntityTypesConfidence: number;
		earliest: number;
		latest: number;
		numberTurns: number;
		labelsList: Array<string>;
		userIdsList: Array<string>;
		intentTagsList: Array<string>;
		inputContextStepsList: Array<SessionInfo.ContextSteps.AsObject>;
		outputContextStepsList: Array<SessionInfo.ContextSteps.AsObject>;
		durationInS: number;
		durationInM: number;
		durationInMRounded: number;
		durationInterval15sRounded: number;
		durationInterval30sRounded: number;
		durationInterval45sRounded: number;
		startedTimeSlotPerHour: string;
		startedTimeSlotPerQuarterHour: string;
		startedTimeSlotPerHalfHour: string;
		startedTimeSlotPerDayPhase: string;
		startedTimeSlotPerMinute: string;
		durationInSRounded: number;
		platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
		accountIdsList: Array<string>;
		propertyIdsList: Array<string>;
		datastreamIdsList: Array<string>;
		originIdsList: Array<string>;
		identifiedUserIdsList: Array<string>;
		durationInterval60sRounded: number;
	};

	export class ContextSteps extends jspb.Message {
		getContextsList(): Array<ondewo_nlu_context_pb.Context>;
		setContextsList(value: Array<ondewo_nlu_context_pb.Context>): ContextSteps;
		clearContextsList(): ContextSteps;
		addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): ContextSteps.AsObject;
		static toObject(includeInstance: boolean, msg: ContextSteps): ContextSteps.AsObject;
		static serializeBinaryToWriter(message: ContextSteps, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): ContextSteps;
		static deserializeBinaryFromReader(message: ContextSteps, reader: jspb.BinaryReader): ContextSteps;
	}

	export namespace ContextSteps {
		export type AsObject = {
			contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		};
	}
}

export class ListSessionsResponse extends jspb.Message {
	getSessionsList(): Array<Session>;
	setSessionsList(value: Array<Session>): ListSessionsResponse;
	clearSessionsList(): ListSessionsResponse;
	addSessions(value?: Session, index?: number): Session;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListSessionsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
	static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
	static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
	export type AsObject = {
		sessionsList: Array<Session.AsObject>;
		nextPageToken: string;
	};
}

export class GetSessionRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): GetSessionRequest;

	getSessionView(): Session.View;
	setSessionView(value: Session.View): GetSessionRequest;

	getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetSessionRequest;
	hasFieldMask(): boolean;
	clearFieldMask(): GetSessionRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
	static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
	static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
	export type AsObject = {
		sessionId: string;
		sessionView: Session.View;
		fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
	};
}

export class CreateSessionRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CreateSessionRequest;

	getSessionUuid(): string;
	setSessionUuid(value: string): CreateSessionRequest;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): CreateSessionRequest;
	clearLabelsList(): CreateSessionRequest;
	addLabels(value: string, index?: number): CreateSessionRequest;

	getContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsList(value: Array<ondewo_nlu_context_pb.Context>): CreateSessionRequest;
	clearContextsList(): CreateSessionRequest;
	addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
	static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
	static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
	export type AsObject = {
		parent: string;
		sessionUuid: string;
		labelsList: Array<string>;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
	};
}

export class DeleteSessionRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): DeleteSessionRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
	static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
	export type AsObject = {
		sessionId: string;
	};
}

export class CreateSessionReviewRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): CreateSessionReviewRequest;

	getParentReviewId(): string;
	setParentReviewId(value: string): CreateSessionReviewRequest;

	getSessionReview(): SessionReview | undefined;
	setSessionReview(value?: SessionReview): CreateSessionReviewRequest;
	hasSessionReview(): boolean;
	clearSessionReview(): CreateSessionReviewRequest;

	getSessionReviewView(): SessionReview.View;
	setSessionReviewView(value: SessionReview.View): CreateSessionReviewRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateSessionReviewRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CreateSessionReviewRequest): CreateSessionReviewRequest.AsObject;
	static serializeBinaryToWriter(message: CreateSessionReviewRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateSessionReviewRequest;
	static deserializeBinaryFromReader(
		message: CreateSessionReviewRequest,
		reader: jspb.BinaryReader
	): CreateSessionReviewRequest;
}

export namespace CreateSessionReviewRequest {
	export type AsObject = {
		sessionId: string;
		parentReviewId: string;
		sessionReview?: SessionReview.AsObject;
		sessionReviewView: SessionReview.View;
	};
}

export class SessionReview extends jspb.Message {
	getName(): string;
	setName(value: string): SessionReview;

	getSessionReviewStepsList(): Array<SessionReviewStep>;
	setSessionReviewStepsList(value: Array<SessionReviewStep>): SessionReview;
	clearSessionReviewStepsList(): SessionReview;
	addSessionReviewSteps(value?: SessionReviewStep, index?: number): SessionReviewStep;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionReview.AsObject;
	static toObject(includeInstance: boolean, msg: SessionReview): SessionReview.AsObject;
	static serializeBinaryToWriter(message: SessionReview, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionReview;
	static deserializeBinaryFromReader(message: SessionReview, reader: jspb.BinaryReader): SessionReview;
}

export namespace SessionReview {
	export type AsObject = {
		name: string;
		sessionReviewStepsList: Array<SessionReviewStep.AsObject>;
	};

	export enum View {
		VIEW_UNSPECIFIED = 0,
		VIEW_FULL = 1,
		VIEW_SPARSE = 2
	}
}

export class SessionReviewStep extends jspb.Message {
	getName(): string;
	setName(value: string): SessionReviewStep;

	getAnnotatedUsersays(): ondewo_nlu_intent_pb.Intent.TrainingPhrase | undefined;
	setAnnotatedUsersays(value?: ondewo_nlu_intent_pb.Intent.TrainingPhrase): SessionReviewStep;
	hasAnnotatedUsersays(): boolean;
	clearAnnotatedUsersays(): SessionReviewStep;

	getLanguageCode(): string;
	setLanguageCode(value: string): SessionReviewStep;

	getDetectedIntentsList(): Array<DetectedIntent>;
	setDetectedIntentsList(value: Array<DetectedIntent>): SessionReviewStep;
	clearDetectedIntentsList(): SessionReviewStep;
	addDetectedIntents(value?: DetectedIntent, index?: number): DetectedIntent;

	getContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsList(value: Array<ondewo_nlu_context_pb.Context>): SessionReviewStep;
	clearContextsList(): SessionReviewStep;
	addContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getContextsOutList(): Array<ondewo_nlu_context_pb.Context>;
	setContextsOutList(value: Array<ondewo_nlu_context_pb.Context>): SessionReviewStep;
	clearContextsOutList(): SessionReviewStep;
	addContextsOut(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getQueryTextOriginal(): string;
	setQueryTextOriginal(value: string): SessionReviewStep;

	getPlatformsList(): Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
	setPlatformsList(value: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>): SessionReviewStep;
	clearPlatformsList(): SessionReviewStep;
	addPlatforms(value: ondewo_nlu_intent_pb.Intent.Message.Platform, index?: number): SessionReviewStep;

	getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SessionReviewStep;
	hasTimestamp(): boolean;
	clearTimestamp(): SessionReviewStep;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionReviewStep.AsObject;
	static toObject(includeInstance: boolean, msg: SessionReviewStep): SessionReviewStep.AsObject;
	static serializeBinaryToWriter(message: SessionReviewStep, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionReviewStep;
	static deserializeBinaryFromReader(message: SessionReviewStep, reader: jspb.BinaryReader): SessionReviewStep;
}

export namespace SessionReviewStep {
	export type AsObject = {
		name: string;
		annotatedUsersays?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.AsObject;
		languageCode: string;
		detectedIntentsList: Array<DetectedIntent.AsObject>;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		contextsOutList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		queryTextOriginal: string;
		platformsList: Array<ondewo_nlu_intent_pb.Intent.Message.Platform>;
		timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject;
	};
}

export class DetectedIntent extends jspb.Message {
	getIntent(): ondewo_nlu_intent_pb.Intent | undefined;
	setIntent(value?: ondewo_nlu_intent_pb.Intent): DetectedIntent;
	hasIntent(): boolean;
	clearIntent(): DetectedIntent;

	getScore(): number;
	setScore(value: number): DetectedIntent;

	getAlgorithm(): string;
	setAlgorithm(value: string): DetectedIntent;

	getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
	setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): DetectedIntent;
	clearFulfillmentMessagesList(): DetectedIntent;
	addFulfillmentMessages(
		value?: ondewo_nlu_intent_pb.Intent.Message,
		index?: number
	): ondewo_nlu_intent_pb.Intent.Message;

	getRequiredParamMissing(): boolean;
	setRequiredParamMissing(value: boolean): DetectedIntent;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DetectedIntent.AsObject;
	static toObject(includeInstance: boolean, msg: DetectedIntent): DetectedIntent.AsObject;
	static serializeBinaryToWriter(message: DetectedIntent, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DetectedIntent;
	static deserializeBinaryFromReader(message: DetectedIntent, reader: jspb.BinaryReader): DetectedIntent;
}

export namespace DetectedIntent {
	export type AsObject = {
		intent?: ondewo_nlu_intent_pb.Intent.AsObject;
		score: number;
		algorithm: string;
		fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>;
		requiredParamMissing: boolean;
	};
}

export class ListSessionLabelsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): ListSessionLabelsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionLabelsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionLabelsRequest): ListSessionLabelsRequest.AsObject;
	static serializeBinaryToWriter(message: ListSessionLabelsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionLabelsRequest;
	static deserializeBinaryFromReader(
		message: ListSessionLabelsRequest,
		reader: jspb.BinaryReader
	): ListSessionLabelsRequest;
}

export namespace ListSessionLabelsRequest {
	export type AsObject = {
		sessionId: string;
	};
}

export class ListSessionLabelsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListSessionLabelsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListSessionLabelsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListSessionLabelsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionLabelsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListSessionLabelsOfAllSessionsRequest
	): ListSessionLabelsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListSessionLabelsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionLabelsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListSessionLabelsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListSessionLabelsOfAllSessionsRequest;
}

export namespace ListSessionLabelsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListSessionLabelsResponse extends jspb.Message {
	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): ListSessionLabelsResponse;
	clearLabelsList(): ListSessionLabelsResponse;
	addLabels(value: string, index?: number): ListSessionLabelsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionLabelsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionLabelsResponse): ListSessionLabelsResponse.AsObject;
	static serializeBinaryToWriter(message: ListSessionLabelsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionLabelsResponse;
	static deserializeBinaryFromReader(
		message: ListSessionLabelsResponse,
		reader: jspb.BinaryReader
	): ListSessionLabelsResponse;
}

export namespace ListSessionLabelsResponse {
	export type AsObject = {
		labelsList: Array<string>;
	};
}

export class ListLanguageCodesOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListLanguageCodesOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListLanguageCodesOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListLanguageCodesOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListLanguageCodesOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListLanguageCodesOfAllSessionsRequest
	): ListLanguageCodesOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListLanguageCodesOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListLanguageCodesOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListLanguageCodesOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListLanguageCodesOfAllSessionsRequest;
}

export namespace ListLanguageCodesOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListLanguageCodesResponse extends jspb.Message {
	getLanguageCodesList(): Array<string>;
	setLanguageCodesList(value: Array<string>): ListLanguageCodesResponse;
	clearLanguageCodesList(): ListLanguageCodesResponse;
	addLanguageCodes(value: string, index?: number): ListLanguageCodesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListLanguageCodesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListLanguageCodesResponse): ListLanguageCodesResponse.AsObject;
	static serializeBinaryToWriter(message: ListLanguageCodesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListLanguageCodesResponse;
	static deserializeBinaryFromReader(
		message: ListLanguageCodesResponse,
		reader: jspb.BinaryReader
	): ListLanguageCodesResponse;
}

export namespace ListLanguageCodesResponse {
	export type AsObject = {
		languageCodesList: Array<string>;
	};
}

export class ListMatchedIntentsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListMatchedIntentsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListMatchedIntentsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListMatchedIntentsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListMatchedIntentsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListMatchedIntentsOfAllSessionsRequest
	): ListMatchedIntentsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListMatchedIntentsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListMatchedIntentsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListMatchedIntentsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListMatchedIntentsOfAllSessionsRequest;
}

export namespace ListMatchedIntentsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListMatchedIntentsResponse extends jspb.Message {
	getMatchedIntentsList(): Array<string>;
	setMatchedIntentsList(value: Array<string>): ListMatchedIntentsResponse;
	clearMatchedIntentsList(): ListMatchedIntentsResponse;
	addMatchedIntents(value: string, index?: number): ListMatchedIntentsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListMatchedIntentsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListMatchedIntentsResponse): ListMatchedIntentsResponse.AsObject;
	static serializeBinaryToWriter(message: ListMatchedIntentsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListMatchedIntentsResponse;
	static deserializeBinaryFromReader(
		message: ListMatchedIntentsResponse,
		reader: jspb.BinaryReader
	): ListMatchedIntentsResponse;
}

export namespace ListMatchedIntentsResponse {
	export type AsObject = {
		matchedIntentsList: Array<string>;
	};
}

export class ListMatchedEntityTypesOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListMatchedEntityTypesOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListMatchedEntityTypesOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListMatchedEntityTypesOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListMatchedEntityTypesOfAllSessionsRequest
	): ListMatchedEntityTypesOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListMatchedEntityTypesOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListMatchedEntityTypesOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListMatchedEntityTypesOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListMatchedEntityTypesOfAllSessionsRequest;
}

export namespace ListMatchedEntityTypesOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListMatchedEntityTypesResponse extends jspb.Message {
	getMatchedEntityTypesList(): Array<string>;
	setMatchedEntityTypesList(value: Array<string>): ListMatchedEntityTypesResponse;
	clearMatchedEntityTypesList(): ListMatchedEntityTypesResponse;
	addMatchedEntityTypes(value: string, index?: number): ListMatchedEntityTypesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListMatchedEntityTypesResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListMatchedEntityTypesResponse
	): ListMatchedEntityTypesResponse.AsObject;
	static serializeBinaryToWriter(message: ListMatchedEntityTypesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListMatchedEntityTypesResponse;
	static deserializeBinaryFromReader(
		message: ListMatchedEntityTypesResponse,
		reader: jspb.BinaryReader
	): ListMatchedEntityTypesResponse;
}

export namespace ListMatchedEntityTypesResponse {
	export type AsObject = {
		matchedEntityTypesList: Array<string>;
	};
}

export class ListUserIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListUserIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListUserIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListUserIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListUserIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListUserIdsOfAllSessionsRequest
	): ListUserIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListUserIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListUserIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListUserIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListUserIdsOfAllSessionsRequest;
}

export namespace ListUserIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListUserIdsResponse extends jspb.Message {
	getUserIdsList(): Array<string>;
	setUserIdsList(value: Array<string>): ListUserIdsResponse;
	clearUserIdsList(): ListUserIdsResponse;
	addUserIds(value: string, index?: number): ListUserIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListUserIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListUserIdsResponse): ListUserIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListUserIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListUserIdsResponse;
	static deserializeBinaryFromReader(message: ListUserIdsResponse, reader: jspb.BinaryReader): ListUserIdsResponse;
}

export namespace ListUserIdsResponse {
	export type AsObject = {
		userIdsList: Array<string>;
	};
}

export class ListIdentifiedUserIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListIdentifiedUserIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListIdentifiedUserIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListIdentifiedUserIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListIdentifiedUserIdsOfAllSessionsRequest
	): ListIdentifiedUserIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListIdentifiedUserIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListIdentifiedUserIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListIdentifiedUserIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListIdentifiedUserIdsOfAllSessionsRequest;
}

export namespace ListIdentifiedUserIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListIdentifiedUserIdsResponse extends jspb.Message {
	getIdentifiedUserIdsList(): Array<string>;
	setIdentifiedUserIdsList(value: Array<string>): ListIdentifiedUserIdsResponse;
	clearIdentifiedUserIdsList(): ListIdentifiedUserIdsResponse;
	addIdentifiedUserIds(value: string, index?: number): ListIdentifiedUserIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListIdentifiedUserIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListIdentifiedUserIdsResponse): ListIdentifiedUserIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListIdentifiedUserIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListIdentifiedUserIdsResponse;
	static deserializeBinaryFromReader(
		message: ListIdentifiedUserIdsResponse,
		reader: jspb.BinaryReader
	): ListIdentifiedUserIdsResponse;
}

export namespace ListIdentifiedUserIdsResponse {
	export type AsObject = {
		identifiedUserIdsList: Array<string>;
	};
}

export class ListTagsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListTagsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListTagsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListTagsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTagsOfAllSessionsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListTagsOfAllSessionsRequest): ListTagsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListTagsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListTagsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListTagsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListTagsOfAllSessionsRequest;
}

export namespace ListTagsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListTagsResponse extends jspb.Message {
	getTagsList(): Array<string>;
	setTagsList(value: Array<string>): ListTagsResponse;
	clearTagsList(): ListTagsResponse;
	addTags(value: string, index?: number): ListTagsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTagsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListTagsResponse): ListTagsResponse.AsObject;
	static serializeBinaryToWriter(message: ListTagsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListTagsResponse;
	static deserializeBinaryFromReader(message: ListTagsResponse, reader: jspb.BinaryReader): ListTagsResponse;
}

export namespace ListTagsResponse {
	export type AsObject = {
		tagsList: Array<string>;
	};
}

export class ListInputContextsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListInputContextsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListInputContextsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListInputContextsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListInputContextsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListInputContextsOfAllSessionsRequest
	): ListInputContextsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListInputContextsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListInputContextsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListInputContextsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListInputContextsOfAllSessionsRequest;
}

export namespace ListInputContextsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListInputContextsResponse extends jspb.Message {
	getInputContextsList(): Array<string>;
	setInputContextsList(value: Array<string>): ListInputContextsResponse;
	clearInputContextsList(): ListInputContextsResponse;
	addInputContexts(value: string, index?: number): ListInputContextsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListInputContextsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListInputContextsResponse): ListInputContextsResponse.AsObject;
	static serializeBinaryToWriter(message: ListInputContextsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListInputContextsResponse;
	static deserializeBinaryFromReader(
		message: ListInputContextsResponse,
		reader: jspb.BinaryReader
	): ListInputContextsResponse;
}

export namespace ListInputContextsResponse {
	export type AsObject = {
		inputContextsList: Array<string>;
	};
}

export class ListOutputContextsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListOutputContextsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListOutputContextsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListOutputContextsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOutputContextsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListOutputContextsOfAllSessionsRequest
	): ListOutputContextsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListOutputContextsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOutputContextsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListOutputContextsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListOutputContextsOfAllSessionsRequest;
}

export namespace ListOutputContextsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListOutputContextsResponse extends jspb.Message {
	getOutputContextsList(): Array<string>;
	setOutputContextsList(value: Array<string>): ListOutputContextsResponse;
	clearOutputContextsList(): ListOutputContextsResponse;
	addOutputContexts(value: string, index?: number): ListOutputContextsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOutputContextsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListOutputContextsResponse): ListOutputContextsResponse.AsObject;
	static serializeBinaryToWriter(message: ListOutputContextsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOutputContextsResponse;
	static deserializeBinaryFromReader(
		message: ListOutputContextsResponse,
		reader: jspb.BinaryReader
	): ListOutputContextsResponse;
}

export namespace ListOutputContextsResponse {
	export type AsObject = {
		outputContextsList: Array<string>;
	};
}

export class ListPlatformsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListPlatformsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListPlatformsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListPlatformsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListPlatformsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListPlatformsOfAllSessionsRequest
	): ListPlatformsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListPlatformsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListPlatformsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListPlatformsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListPlatformsOfAllSessionsRequest;
}

export namespace ListPlatformsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListPlatformsResponse extends jspb.Message {
	getPlatformsList(): Array<string>;
	setPlatformsList(value: Array<string>): ListPlatformsResponse;
	clearPlatformsList(): ListPlatformsResponse;
	addPlatforms(value: string, index?: number): ListPlatformsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListPlatformsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListPlatformsResponse): ListPlatformsResponse.AsObject;
	static serializeBinaryToWriter(message: ListPlatformsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListPlatformsResponse;
	static deserializeBinaryFromReader(message: ListPlatformsResponse, reader: jspb.BinaryReader): ListPlatformsResponse;
}

export namespace ListPlatformsResponse {
	export type AsObject = {
		platformsList: Array<string>;
	};
}

export class ListAccountIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListAccountIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListAccountIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListAccountIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListAccountIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListAccountIdsOfAllSessionsRequest
	): ListAccountIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListAccountIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListAccountIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListAccountIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListAccountIdsOfAllSessionsRequest;
}

export namespace ListAccountIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListAccountIdsResponse extends jspb.Message {
	getAccountIdsList(): Array<string>;
	setAccountIdsList(value: Array<string>): ListAccountIdsResponse;
	clearAccountIdsList(): ListAccountIdsResponse;
	addAccountIds(value: string, index?: number): ListAccountIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListAccountIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListAccountIdsResponse): ListAccountIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListAccountIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListAccountIdsResponse;
	static deserializeBinaryFromReader(
		message: ListAccountIdsResponse,
		reader: jspb.BinaryReader
	): ListAccountIdsResponse;
}

export namespace ListAccountIdsResponse {
	export type AsObject = {
		accountIdsList: Array<string>;
	};
}

export class ListPropertyIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListPropertyIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListPropertyIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListPropertyIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListPropertyIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListPropertyIdsOfAllSessionsRequest
	): ListPropertyIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListPropertyIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListPropertyIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListPropertyIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListPropertyIdsOfAllSessionsRequest;
}

export namespace ListPropertyIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListPropertyIdsResponse extends jspb.Message {
	getPropertyIdsList(): Array<string>;
	setPropertyIdsList(value: Array<string>): ListPropertyIdsResponse;
	clearPropertyIdsList(): ListPropertyIdsResponse;
	addPropertyIds(value: string, index?: number): ListPropertyIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListPropertyIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListPropertyIdsResponse): ListPropertyIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListPropertyIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListPropertyIdsResponse;
	static deserializeBinaryFromReader(
		message: ListPropertyIdsResponse,
		reader: jspb.BinaryReader
	): ListPropertyIdsResponse;
}

export namespace ListPropertyIdsResponse {
	export type AsObject = {
		propertyIdsList: Array<string>;
	};
}

export class ListDatastreamIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListDatastreamIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListDatastreamIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListDatastreamIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListDatastreamIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListDatastreamIdsOfAllSessionsRequest
	): ListDatastreamIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListDatastreamIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListDatastreamIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListDatastreamIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListDatastreamIdsOfAllSessionsRequest;
}

export namespace ListDatastreamIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListDatastreamIdsResponse extends jspb.Message {
	getDatastreamIdsList(): Array<string>;
	setDatastreamIdsList(value: Array<string>): ListDatastreamIdsResponse;
	clearDatastreamIdsList(): ListDatastreamIdsResponse;
	addDatastreamIds(value: string, index?: number): ListDatastreamIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListDatastreamIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListDatastreamIdsResponse): ListDatastreamIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListDatastreamIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListDatastreamIdsResponse;
	static deserializeBinaryFromReader(
		message: ListDatastreamIdsResponse,
		reader: jspb.BinaryReader
	): ListDatastreamIdsResponse;
}

export namespace ListDatastreamIdsResponse {
	export type AsObject = {
		datastreamIdsList: Array<string>;
	};
}

export class ListOriginIdsOfAllSessionsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListOriginIdsOfAllSessionsRequest;

	getSessionFilter(): SessionFilter | undefined;
	setSessionFilter(value?: SessionFilter): ListOriginIdsOfAllSessionsRequest;
	hasSessionFilter(): boolean;
	clearSessionFilter(): ListOriginIdsOfAllSessionsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOriginIdsOfAllSessionsRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListOriginIdsOfAllSessionsRequest
	): ListOriginIdsOfAllSessionsRequest.AsObject;
	static serializeBinaryToWriter(message: ListOriginIdsOfAllSessionsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOriginIdsOfAllSessionsRequest;
	static deserializeBinaryFromReader(
		message: ListOriginIdsOfAllSessionsRequest,
		reader: jspb.BinaryReader
	): ListOriginIdsOfAllSessionsRequest;
}

export namespace ListOriginIdsOfAllSessionsRequest {
	export type AsObject = {
		parent: string;
		sessionFilter?: SessionFilter.AsObject;
	};
}

export class ListOriginIdsResponse extends jspb.Message {
	getOriginIdsList(): Array<string>;
	setOriginIdsList(value: Array<string>): ListOriginIdsResponse;
	clearOriginIdsList(): ListOriginIdsResponse;
	addOriginIds(value: string, index?: number): ListOriginIdsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListOriginIdsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListOriginIdsResponse): ListOriginIdsResponse.AsObject;
	static serializeBinaryToWriter(message: ListOriginIdsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListOriginIdsResponse;
	static deserializeBinaryFromReader(message: ListOriginIdsResponse, reader: jspb.BinaryReader): ListOriginIdsResponse;
}

export namespace ListOriginIdsResponse {
	export type AsObject = {
		originIdsList: Array<string>;
	};
}

export class AddSessionLabelsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): AddSessionLabelsRequest;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): AddSessionLabelsRequest;
	clearLabelsList(): AddSessionLabelsRequest;
	addLabels(value: string, index?: number): AddSessionLabelsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AddSessionLabelsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: AddSessionLabelsRequest): AddSessionLabelsRequest.AsObject;
	static serializeBinaryToWriter(message: AddSessionLabelsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AddSessionLabelsRequest;
	static deserializeBinaryFromReader(
		message: AddSessionLabelsRequest,
		reader: jspb.BinaryReader
	): AddSessionLabelsRequest;
}

export namespace AddSessionLabelsRequest {
	export type AsObject = {
		sessionId: string;
		labelsList: Array<string>;
	};
}

export class DeleteSessionLabelsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): DeleteSessionLabelsRequest;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): DeleteSessionLabelsRequest;
	clearLabelsList(): DeleteSessionLabelsRequest;
	addLabels(value: string, index?: number): DeleteSessionLabelsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteSessionLabelsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteSessionLabelsRequest): DeleteSessionLabelsRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteSessionLabelsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteSessionLabelsRequest;
	static deserializeBinaryFromReader(
		message: DeleteSessionLabelsRequest,
		reader: jspb.BinaryReader
	): DeleteSessionLabelsRequest;
}

export namespace DeleteSessionLabelsRequest {
	export type AsObject = {
		sessionId: string;
		labelsList: Array<string>;
	};
}

export class ListSessionReviewsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): ListSessionReviewsRequest;

	getSessionReviewView(): SessionReview.View;
	setSessionReviewView(value: SessionReview.View): ListSessionReviewsRequest;

	getPageToken(): string;
	setPageToken(value: string): ListSessionReviewsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionReviewsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionReviewsRequest): ListSessionReviewsRequest.AsObject;
	static serializeBinaryToWriter(message: ListSessionReviewsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionReviewsRequest;
	static deserializeBinaryFromReader(
		message: ListSessionReviewsRequest,
		reader: jspb.BinaryReader
	): ListSessionReviewsRequest;
}

export namespace ListSessionReviewsRequest {
	export type AsObject = {
		sessionId: string;
		sessionReviewView: SessionReview.View;
		pageToken: string;
	};
}

export class ListSessionReviewsResponse extends jspb.Message {
	getSessionReviewsList(): Array<SessionReview>;
	setSessionReviewsList(value: Array<SessionReview>): ListSessionReviewsResponse;
	clearSessionReviewsList(): ListSessionReviewsResponse;
	addSessionReviews(value?: SessionReview, index?: number): SessionReview;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListSessionReviewsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListSessionReviewsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListSessionReviewsResponse): ListSessionReviewsResponse.AsObject;
	static serializeBinaryToWriter(message: ListSessionReviewsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListSessionReviewsResponse;
	static deserializeBinaryFromReader(
		message: ListSessionReviewsResponse,
		reader: jspb.BinaryReader
	): ListSessionReviewsResponse;
}

export namespace ListSessionReviewsResponse {
	export type AsObject = {
		sessionReviewsList: Array<SessionReview.AsObject>;
		nextPageToken: string;
	};
}

export class GetSessionReviewRequest extends jspb.Message {
	getSessionReviewId(): string;
	setSessionReviewId(value: string): GetSessionReviewRequest;

	getSessionReviewView(): SessionReview.View;
	setSessionReviewView(value: SessionReview.View): GetSessionReviewRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetSessionReviewRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetSessionReviewRequest): GetSessionReviewRequest.AsObject;
	static serializeBinaryToWriter(message: GetSessionReviewRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetSessionReviewRequest;
	static deserializeBinaryFromReader(
		message: GetSessionReviewRequest,
		reader: jspb.BinaryReader
	): GetSessionReviewRequest;
}

export namespace GetSessionReviewRequest {
	export type AsObject = {
		sessionReviewId: string;
		sessionReviewView: SessionReview.View;
	};
}

export class GetLatestSessionReviewRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): GetLatestSessionReviewRequest;

	getSessionReviewView(): SessionReview.View;
	setSessionReviewView(value: SessionReview.View): GetLatestSessionReviewRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetLatestSessionReviewRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetLatestSessionReviewRequest): GetLatestSessionReviewRequest.AsObject;
	static serializeBinaryToWriter(message: GetLatestSessionReviewRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetLatestSessionReviewRequest;
	static deserializeBinaryFromReader(
		message: GetLatestSessionReviewRequest,
		reader: jspb.BinaryReader
	): GetLatestSessionReviewRequest;
}

export namespace GetLatestSessionReviewRequest {
	export type AsObject = {
		sessionId: string;
		sessionReviewView: SessionReview.View;
	};
}

export enum AudioEncoding {
	AUDIO_ENCODING_UNSPECIFIED = 0,
	AUDIO_ENCODING_LINEAR_16 = 1,
	AUDIO_ENCODING_FLAC = 2,
	AUDIO_ENCODING_MULAW = 3,
	AUDIO_ENCODING_AMR = 4,
	AUDIO_ENCODING_AMR_WB = 5,
	AUDIO_ENCODING_OGG_OPUS = 6,
	AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE = 7
}
export enum ComparisonOperator {
	EQUAL = 0,
	GREATER = 1,
	GREATER_OR_EQUAL = 2,
	LESS_OR_EQUAL = 3,
	CONTAINS = 4,
	STARTS_WITH = 5,
	ENDS_WITH = 6
}
