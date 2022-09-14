import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
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

	getLanguageCode(): string;
	setLanguageCode(value: string): QueryResult;

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

	getDiagnosticInfo(): google_protobuf_struct_pb.Struct | undefined;
	setDiagnosticInfo(value?: google_protobuf_struct_pb.Struct): QueryResult;
	hasDiagnosticInfo(): boolean;
	clearDiagnosticInfo(): QueryResult;

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
		languageCode: string;
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
		diagnosticInfo?: google_protobuf_struct_pb.Struct.AsObject;
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
	getSessionId(): string;
	setSessionId(value: string): Session;

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
		sessionId: string;
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

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionStep.AsObject;
	static toObject(includeInstance: boolean, msg: SessionStep): SessionStep.AsObject;
	static serializeBinaryToWriter(message: SessionStep, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionStep;
	static deserializeBinaryFromReader(message: SessionStep, reader: jspb.BinaryReader): SessionStep;
}

export namespace SessionStep {
	export type AsObject = {
		detectIntentRequest?: DetectIntentRequest.AsObject;
		detectIntentResponse?: DetectIntentResponse.AsObject;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
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
	};
}

export class CreateSessionRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CreateSessionRequest;

	getSessionUuid(): string;
	setSessionUuid(value: string): CreateSessionRequest;

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
	getSessionReviewId(): string;
	setSessionReviewId(value: string): SessionReview;

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
		sessionReviewId: string;
		sessionReviewStepsList: Array<SessionReviewStep.AsObject>;
	};

	export enum View {
		VIEW_UNSPECIFIED = 0,
		VIEW_FULL = 1,
		VIEW_SPARSE = 2
	}
}

export class SessionReviewStep extends jspb.Message {
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

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SessionReviewStep.AsObject;
	static toObject(includeInstance: boolean, msg: SessionReviewStep): SessionReviewStep.AsObject;
	static serializeBinaryToWriter(message: SessionReviewStep, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SessionReviewStep;
	static deserializeBinaryFromReader(message: SessionReviewStep, reader: jspb.BinaryReader): SessionReviewStep;
}

export namespace SessionReviewStep {
	export type AsObject = {
		annotatedUsersays?: ondewo_nlu_intent_pb.Intent.TrainingPhrase.AsObject;
		languageCode: string;
		detectedIntentsList: Array<DetectedIntent.AsObject>;
		contextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		contextsOutList: Array<ondewo_nlu_context_pb.Context.AsObject>;
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
	getParent(): string;
	setParent(value: string): ListSessionLabelsRequest;

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
		parent: string;
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

export class AddSessionLabelsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): AddSessionLabelsRequest;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): AddSessionLabelsRequest;
	clearLabelsList(): AddSessionLabelsRequest;
	addLabels(value: string, index?: number): AddSessionLabelsRequest;

	getSessionView(): Session.View;
	setSessionView(value: Session.View): AddSessionLabelsRequest;

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
		sessionView: Session.View;
	};
}

export class RemoveSessionLabelsRequest extends jspb.Message {
	getSessionId(): string;
	setSessionId(value: string): RemoveSessionLabelsRequest;

	getLabelsList(): Array<string>;
	setLabelsList(value: Array<string>): RemoveSessionLabelsRequest;
	clearLabelsList(): RemoveSessionLabelsRequest;
	addLabels(value: string, index?: number): RemoveSessionLabelsRequest;

	getSessionView(): Session.View;
	setSessionView(value: Session.View): RemoveSessionLabelsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): RemoveSessionLabelsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: RemoveSessionLabelsRequest): RemoveSessionLabelsRequest.AsObject;
	static serializeBinaryToWriter(message: RemoveSessionLabelsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): RemoveSessionLabelsRequest;
	static deserializeBinaryFromReader(
		message: RemoveSessionLabelsRequest,
		reader: jspb.BinaryReader
	): RemoveSessionLabelsRequest;
}

export namespace RemoveSessionLabelsRequest {
	export type AsObject = {
		sessionId: string;
		labelsList: Array<string>;
		sessionView: Session.View;
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
