import * as jspb from 'google-protobuf';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class TranscribeRequestConfig extends jspb.Message {
	getS2tPipelineId(): string;
	setS2tPipelineId(value: string): TranscribeRequestConfig;

	getDecoding(): Decoding;
	setDecoding(value: Decoding): TranscribeRequestConfig;

	getLanguageModelName(): string;
	setLanguageModelName(value: string): TranscribeRequestConfig;

	getPostProcessing(): PostProcessingOptions | undefined;
	setPostProcessing(value?: PostProcessingOptions): TranscribeRequestConfig;
	hasPostProcessing(): boolean;
	clearPostProcessing(): TranscribeRequestConfig;

	getUtteranceDetection(): UtteranceDetectionOptions | undefined;
	setUtteranceDetection(value?: UtteranceDetectionOptions): TranscribeRequestConfig;
	hasUtteranceDetection(): boolean;
	clearUtteranceDetection(): TranscribeRequestConfig;

	getPyannote(): Pyannote | undefined;
	setPyannote(value?: Pyannote): TranscribeRequestConfig;
	hasPyannote(): boolean;
	clearPyannote(): TranscribeRequestConfig;

	getMatchbox(): Matchbox | undefined;
	setMatchbox(value?: Matchbox): TranscribeRequestConfig;
	hasMatchbox(): boolean;
	clearMatchbox(): TranscribeRequestConfig;

	getReturnOptions(): TranscriptionReturnOptions | undefined;
	setReturnOptions(value?: TranscriptionReturnOptions): TranscribeRequestConfig;
	hasReturnOptions(): boolean;
	clearReturnOptions(): TranscribeRequestConfig;

	getOneofLanguageModelNameCase(): TranscribeRequestConfig.OneofLanguageModelNameCase;

	getOneofPostProcessingCase(): TranscribeRequestConfig.OneofPostProcessingCase;

	getOneofUtteranceDetectionCase(): TranscribeRequestConfig.OneofUtteranceDetectionCase;

	getVoiceActivityDetectionCase(): TranscribeRequestConfig.VoiceActivityDetectionCase;

	getOneofReturnOptionsCase(): TranscribeRequestConfig.OneofReturnOptionsCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscribeRequestConfig.AsObject;
	static toObject(includeInstance: boolean, msg: TranscribeRequestConfig): TranscribeRequestConfig.AsObject;
	static serializeBinaryToWriter(message: TranscribeRequestConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscribeRequestConfig;
	static deserializeBinaryFromReader(
		message: TranscribeRequestConfig,
		reader: jspb.BinaryReader
	): TranscribeRequestConfig;
}

export namespace TranscribeRequestConfig {
	export type AsObject = {
		s2tPipelineId: string;
		decoding: Decoding;
		languageModelName: string;
		postProcessing?: PostProcessingOptions.AsObject;
		utteranceDetection?: UtteranceDetectionOptions.AsObject;
		pyannote?: Pyannote.AsObject;
		matchbox?: Matchbox.AsObject;
		returnOptions?: TranscriptionReturnOptions.AsObject;
	};

	export enum OneofLanguageModelNameCase {
		ONEOF_LANGUAGE_MODEL_NAME_NOT_SET = 0,
		LANGUAGE_MODEL_NAME = 3
	}

	export enum OneofPostProcessingCase {
		ONEOF_POST_PROCESSING_NOT_SET = 0,
		POST_PROCESSING = 4
	}

	export enum OneofUtteranceDetectionCase {
		ONEOF_UTTERANCE_DETECTION_NOT_SET = 0,
		UTTERANCE_DETECTION = 5
	}

	export enum VoiceActivityDetectionCase {
		VOICE_ACTIVITY_DETECTION_NOT_SET = 0,
		PYANNOTE = 6,
		MATCHBOX = 7
	}

	export enum OneofReturnOptionsCase {
		ONEOF_RETURN_OPTIONS_NOT_SET = 0,
		RETURN_OPTIONS = 8
	}
}

export class TranscriptionReturnOptions extends jspb.Message {
	getReturnStartOfSpeech(): boolean;
	setReturnStartOfSpeech(value: boolean): TranscriptionReturnOptions;

	getReturnAudio(): boolean;
	setReturnAudio(value: boolean): TranscriptionReturnOptions;

	getReturnConfidenceScore(): boolean;
	setReturnConfidenceScore(value: boolean): TranscriptionReturnOptions;

	getReturnAlternativeTranscriptions(): boolean;
	setReturnAlternativeTranscriptions(value: boolean): TranscriptionReturnOptions;

	getReturnAlternativeTranscriptionsNr(): number;
	setReturnAlternativeTranscriptionsNr(value: number): TranscriptionReturnOptions;

	getReturnAlternativeWords(): boolean;
	setReturnAlternativeWords(value: boolean): TranscriptionReturnOptions;

	getReturnAlternativeWordsNr(): number;
	setReturnAlternativeWordsNr(value: number): TranscriptionReturnOptions;

	getReturnWordTiming(): boolean;
	setReturnWordTiming(value: boolean): TranscriptionReturnOptions;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscriptionReturnOptions.AsObject;
	static toObject(includeInstance: boolean, msg: TranscriptionReturnOptions): TranscriptionReturnOptions.AsObject;
	static serializeBinaryToWriter(message: TranscriptionReturnOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscriptionReturnOptions;
	static deserializeBinaryFromReader(
		message: TranscriptionReturnOptions,
		reader: jspb.BinaryReader
	): TranscriptionReturnOptions;
}

export namespace TranscriptionReturnOptions {
	export type AsObject = {
		returnStartOfSpeech: boolean;
		returnAudio: boolean;
		returnConfidenceScore: boolean;
		returnAlternativeTranscriptions: boolean;
		returnAlternativeTranscriptionsNr: number;
		returnAlternativeWords: boolean;
		returnAlternativeWordsNr: number;
		returnWordTiming: boolean;
	};
}

export class UtteranceDetectionOptions extends jspb.Message {
	getTranscribeNotFinal(): boolean;
	setTranscribeNotFinal(value: boolean): UtteranceDetectionOptions;

	getStartOfUtteranceThreshold(): number;
	setStartOfUtteranceThreshold(value: number): UtteranceDetectionOptions;

	getEndOfUtteranceThreshold(): number;
	setEndOfUtteranceThreshold(value: number): UtteranceDetectionOptions;

	getNextChunkTimeout(): number;
	setNextChunkTimeout(value: number): UtteranceDetectionOptions;

	getOneofTranscribeNotFinalCase(): UtteranceDetectionOptions.OneofTranscribeNotFinalCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UtteranceDetectionOptions.AsObject;
	static toObject(includeInstance: boolean, msg: UtteranceDetectionOptions): UtteranceDetectionOptions.AsObject;
	static serializeBinaryToWriter(message: UtteranceDetectionOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UtteranceDetectionOptions;
	static deserializeBinaryFromReader(
		message: UtteranceDetectionOptions,
		reader: jspb.BinaryReader
	): UtteranceDetectionOptions;
}

export namespace UtteranceDetectionOptions {
	export type AsObject = {
		transcribeNotFinal: boolean;
		startOfUtteranceThreshold: number;
		endOfUtteranceThreshold: number;
		nextChunkTimeout: number;
	};

	export enum OneofTranscribeNotFinalCase {
		ONEOF_TRANSCRIBE_NOT_FINAL_NOT_SET = 0,
		TRANSCRIBE_NOT_FINAL = 1
	}
}

export class PostProcessingOptions extends jspb.Message {
	getSpellingCorrection(): boolean;
	setSpellingCorrection(value: boolean): PostProcessingOptions;

	getNormalize(): boolean;
	setNormalize(value: boolean): PostProcessingOptions;

	getConfig(): PostProcessing | undefined;
	setConfig(value?: PostProcessing): PostProcessingOptions;
	hasConfig(): boolean;
	clearConfig(): PostProcessingOptions;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PostProcessingOptions.AsObject;
	static toObject(includeInstance: boolean, msg: PostProcessingOptions): PostProcessingOptions.AsObject;
	static serializeBinaryToWriter(message: PostProcessingOptions, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PostProcessingOptions;
	static deserializeBinaryFromReader(message: PostProcessingOptions, reader: jspb.BinaryReader): PostProcessingOptions;
}

export namespace PostProcessingOptions {
	export type AsObject = {
		spellingCorrection: boolean;
		normalize: boolean;
		config?: PostProcessing.AsObject;
	};
}

export class Transcription extends jspb.Message {
	getTranscription(): string;
	setTranscription(value: string): Transcription;

	getConfidenceScore(): number;
	setConfidenceScore(value: number): Transcription;

	getWordsList(): Array<WordDetail>;
	setWordsList(value: Array<WordDetail>): Transcription;
	clearWordsList(): Transcription;
	addWords(value?: WordDetail, index?: number): WordDetail;

	getAlternativesList(): Array<TranscriptionAlternative>;
	setAlternativesList(value: Array<TranscriptionAlternative>): Transcription;
	clearAlternativesList(): Transcription;
	addAlternatives(value?: TranscriptionAlternative, index?: number): TranscriptionAlternative;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Transcription.AsObject;
	static toObject(includeInstance: boolean, msg: Transcription): Transcription.AsObject;
	static serializeBinaryToWriter(message: Transcription, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Transcription;
	static deserializeBinaryFromReader(message: Transcription, reader: jspb.BinaryReader): Transcription;
}

export namespace Transcription {
	export type AsObject = {
		transcription: string;
		confidenceScore: number;
		wordsList: Array<WordDetail.AsObject>;
		alternativesList: Array<TranscriptionAlternative.AsObject>;
	};
}

export class TranscriptionAlternative extends jspb.Message {
	getTranscript(): string;
	setTranscript(value: string): TranscriptionAlternative;

	getConfidence(): number;
	setConfidence(value: number): TranscriptionAlternative;

	getWordsList(): Array<WordDetail>;
	setWordsList(value: Array<WordDetail>): TranscriptionAlternative;
	clearWordsList(): TranscriptionAlternative;
	addWords(value?: WordDetail, index?: number): WordDetail;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscriptionAlternative.AsObject;
	static toObject(includeInstance: boolean, msg: TranscriptionAlternative): TranscriptionAlternative.AsObject;
	static serializeBinaryToWriter(message: TranscriptionAlternative, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscriptionAlternative;
	static deserializeBinaryFromReader(
		message: TranscriptionAlternative,
		reader: jspb.BinaryReader
	): TranscriptionAlternative;
}

export namespace TranscriptionAlternative {
	export type AsObject = {
		transcript: string;
		confidence: number;
		wordsList: Array<WordDetail.AsObject>;
	};
}

export class WordDetail extends jspb.Message {
	getStartTime(): number;
	setStartTime(value: number): WordDetail;

	getEndTime(): number;
	setEndTime(value: number): WordDetail;

	getWord(): string;
	setWord(value: string): WordDetail;

	getConfidence(): number;
	setConfidence(value: number): WordDetail;

	getWordAlternativesList(): Array<WordAlternative>;
	setWordAlternativesList(value: Array<WordAlternative>): WordDetail;
	clearWordAlternativesList(): WordDetail;
	addWordAlternatives(value?: WordAlternative, index?: number): WordAlternative;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): WordDetail.AsObject;
	static toObject(includeInstance: boolean, msg: WordDetail): WordDetail.AsObject;
	static serializeBinaryToWriter(message: WordDetail, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): WordDetail;
	static deserializeBinaryFromReader(message: WordDetail, reader: jspb.BinaryReader): WordDetail;
}

export namespace WordDetail {
	export type AsObject = {
		startTime: number;
		endTime: number;
		word: string;
		confidence: number;
		wordAlternativesList: Array<WordAlternative.AsObject>;
	};
}

export class WordAlternative extends jspb.Message {
	getWord(): string;
	setWord(value: string): WordAlternative;

	getConfidence(): number;
	setConfidence(value: number): WordAlternative;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): WordAlternative.AsObject;
	static toObject(includeInstance: boolean, msg: WordAlternative): WordAlternative.AsObject;
	static serializeBinaryToWriter(message: WordAlternative, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): WordAlternative;
	static deserializeBinaryFromReader(message: WordAlternative, reader: jspb.BinaryReader): WordAlternative;
}

export namespace WordAlternative {
	export type AsObject = {
		word: string;
		confidence: number;
	};
}

export class TranscribeStreamRequest extends jspb.Message {
	getAudioChunk(): Uint8Array | string;
	getAudioChunk_asU8(): Uint8Array;
	getAudioChunk_asB64(): string;
	setAudioChunk(value: Uint8Array | string): TranscribeStreamRequest;

	getEndOfStream(): boolean;
	setEndOfStream(value: boolean): TranscribeStreamRequest;

	getConfig(): TranscribeRequestConfig | undefined;
	setConfig(value?: TranscribeRequestConfig): TranscribeStreamRequest;
	hasConfig(): boolean;
	clearConfig(): TranscribeStreamRequest;

	getMuteAudio(): boolean;
	setMuteAudio(value: boolean): TranscribeStreamRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscribeStreamRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TranscribeStreamRequest): TranscribeStreamRequest.AsObject;
	static serializeBinaryToWriter(message: TranscribeStreamRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscribeStreamRequest;
	static deserializeBinaryFromReader(
		message: TranscribeStreamRequest,
		reader: jspb.BinaryReader
	): TranscribeStreamRequest;
}

export namespace TranscribeStreamRequest {
	export type AsObject = {
		audioChunk: Uint8Array | string;
		endOfStream: boolean;
		config?: TranscribeRequestConfig.AsObject;
		muteAudio: boolean;
	};
}

export class TranscribeStreamResponse extends jspb.Message {
	getTranscriptionsList(): Array<Transcription>;
	setTranscriptionsList(value: Array<Transcription>): TranscribeStreamResponse;
	clearTranscriptionsList(): TranscribeStreamResponse;
	addTranscriptions(value?: Transcription, index?: number): Transcription;

	getTime(): number;
	setTime(value: number): TranscribeStreamResponse;

	getFinal(): boolean;
	setFinal(value: boolean): TranscribeStreamResponse;

	getReturnAudio(): boolean;
	setReturnAudio(value: boolean): TranscribeStreamResponse;

	getAudio(): Uint8Array | string;
	getAudio_asU8(): Uint8Array;
	getAudio_asB64(): string;
	setAudio(value: Uint8Array | string): TranscribeStreamResponse;

	getUtteranceStart(): boolean;
	setUtteranceStart(value: boolean): TranscribeStreamResponse;

	getAudioUuid(): string;
	setAudioUuid(value: string): TranscribeStreamResponse;

	getConfig(): TranscribeRequestConfig | undefined;
	setConfig(value?: TranscribeRequestConfig): TranscribeStreamResponse;
	hasConfig(): boolean;
	clearConfig(): TranscribeStreamResponse;

	getOneofConfigCase(): TranscribeStreamResponse.OneofConfigCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscribeStreamResponse.AsObject;
	static toObject(includeInstance: boolean, msg: TranscribeStreamResponse): TranscribeStreamResponse.AsObject;
	static serializeBinaryToWriter(message: TranscribeStreamResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscribeStreamResponse;
	static deserializeBinaryFromReader(
		message: TranscribeStreamResponse,
		reader: jspb.BinaryReader
	): TranscribeStreamResponse;
}

export namespace TranscribeStreamResponse {
	export type AsObject = {
		transcriptionsList: Array<Transcription.AsObject>;
		time: number;
		pb_final: boolean;
		returnAudio: boolean;
		audio: Uint8Array | string;
		utteranceStart: boolean;
		audioUuid: string;
		config?: TranscribeRequestConfig.AsObject;
	};

	export enum OneofConfigCase {
		ONEOF_CONFIG_NOT_SET = 0,
		CONFIG = 8
	}
}

export class TranscribeFileRequest extends jspb.Message {
	getAudioFile(): Uint8Array | string;
	getAudioFile_asU8(): Uint8Array;
	getAudioFile_asB64(): string;
	setAudioFile(value: Uint8Array | string): TranscribeFileRequest;

	getConfig(): TranscribeRequestConfig | undefined;
	setConfig(value?: TranscribeRequestConfig): TranscribeFileRequest;
	hasConfig(): boolean;
	clearConfig(): TranscribeFileRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscribeFileRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TranscribeFileRequest): TranscribeFileRequest.AsObject;
	static serializeBinaryToWriter(message: TranscribeFileRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscribeFileRequest;
	static deserializeBinaryFromReader(message: TranscribeFileRequest, reader: jspb.BinaryReader): TranscribeFileRequest;
}

export namespace TranscribeFileRequest {
	export type AsObject = {
		audioFile: Uint8Array | string;
		config?: TranscribeRequestConfig.AsObject;
	};
}

export class TranscribeFileResponse extends jspb.Message {
	getTranscriptionsList(): Array<Transcription>;
	setTranscriptionsList(value: Array<Transcription>): TranscribeFileResponse;
	clearTranscriptionsList(): TranscribeFileResponse;
	addTranscriptions(value?: Transcription, index?: number): Transcription;

	getTime(): number;
	setTime(value: number): TranscribeFileResponse;

	getAudioUuid(): string;
	setAudioUuid(value: string): TranscribeFileResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TranscribeFileResponse.AsObject;
	static toObject(includeInstance: boolean, msg: TranscribeFileResponse): TranscribeFileResponse.AsObject;
	static serializeBinaryToWriter(message: TranscribeFileResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TranscribeFileResponse;
	static deserializeBinaryFromReader(
		message: TranscribeFileResponse,
		reader: jspb.BinaryReader
	): TranscribeFileResponse;
}

export namespace TranscribeFileResponse {
	export type AsObject = {
		transcriptionsList: Array<Transcription.AsObject>;
		time: number;
		audioUuid: string;
	};
}

export class S2tPipelineId extends jspb.Message {
	getId(): string;
	setId(value: string): S2tPipelineId;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2tPipelineId.AsObject;
	static toObject(includeInstance: boolean, msg: S2tPipelineId): S2tPipelineId.AsObject;
	static serializeBinaryToWriter(message: S2tPipelineId, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2tPipelineId;
	static deserializeBinaryFromReader(message: S2tPipelineId, reader: jspb.BinaryReader): S2tPipelineId;
}

export namespace S2tPipelineId {
	export type AsObject = {
		id: string;
	};
}

export class ListS2tPipelinesRequest extends jspb.Message {
	getLanguagesList(): Array<string>;
	setLanguagesList(value: Array<string>): ListS2tPipelinesRequest;
	clearLanguagesList(): ListS2tPipelinesRequest;
	addLanguages(value: string, index?: number): ListS2tPipelinesRequest;

	getPipelineOwnersList(): Array<string>;
	setPipelineOwnersList(value: Array<string>): ListS2tPipelinesRequest;
	clearPipelineOwnersList(): ListS2tPipelinesRequest;
	addPipelineOwners(value: string, index?: number): ListS2tPipelinesRequest;

	getDomainsList(): Array<string>;
	setDomainsList(value: Array<string>): ListS2tPipelinesRequest;
	clearDomainsList(): ListS2tPipelinesRequest;
	addDomains(value: string, index?: number): ListS2tPipelinesRequest;

	getRegisteredOnly(): boolean;
	setRegisteredOnly(value: boolean): ListS2tPipelinesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tPipelinesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tPipelinesRequest): ListS2tPipelinesRequest.AsObject;
	static serializeBinaryToWriter(message: ListS2tPipelinesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tPipelinesRequest;
	static deserializeBinaryFromReader(
		message: ListS2tPipelinesRequest,
		reader: jspb.BinaryReader
	): ListS2tPipelinesRequest;
}

export namespace ListS2tPipelinesRequest {
	export type AsObject = {
		languagesList: Array<string>;
		pipelineOwnersList: Array<string>;
		domainsList: Array<string>;
		registeredOnly: boolean;
	};
}

export class ListS2tPipelinesResponse extends jspb.Message {
	getPipelineConfigsList(): Array<Speech2TextConfig>;
	setPipelineConfigsList(value: Array<Speech2TextConfig>): ListS2tPipelinesResponse;
	clearPipelineConfigsList(): ListS2tPipelinesResponse;
	addPipelineConfigs(value?: Speech2TextConfig, index?: number): Speech2TextConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tPipelinesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tPipelinesResponse): ListS2tPipelinesResponse.AsObject;
	static serializeBinaryToWriter(message: ListS2tPipelinesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tPipelinesResponse;
	static deserializeBinaryFromReader(
		message: ListS2tPipelinesResponse,
		reader: jspb.BinaryReader
	): ListS2tPipelinesResponse;
}

export namespace ListS2tPipelinesResponse {
	export type AsObject = {
		pipelineConfigsList: Array<Speech2TextConfig.AsObject>;
	};
}

export class ListS2tLanguagesRequest extends jspb.Message {
	getDomainsList(): Array<string>;
	setDomainsList(value: Array<string>): ListS2tLanguagesRequest;
	clearDomainsList(): ListS2tLanguagesRequest;
	addDomains(value: string, index?: number): ListS2tLanguagesRequest;

	getPipelineOwnersList(): Array<string>;
	setPipelineOwnersList(value: Array<string>): ListS2tLanguagesRequest;
	clearPipelineOwnersList(): ListS2tLanguagesRequest;
	addPipelineOwners(value: string, index?: number): ListS2tLanguagesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tLanguagesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tLanguagesRequest): ListS2tLanguagesRequest.AsObject;
	static serializeBinaryToWriter(message: ListS2tLanguagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tLanguagesRequest;
	static deserializeBinaryFromReader(
		message: ListS2tLanguagesRequest,
		reader: jspb.BinaryReader
	): ListS2tLanguagesRequest;
}

export namespace ListS2tLanguagesRequest {
	export type AsObject = {
		domainsList: Array<string>;
		pipelineOwnersList: Array<string>;
	};
}

export class ListS2tLanguagesResponse extends jspb.Message {
	getLanguagesList(): Array<string>;
	setLanguagesList(value: Array<string>): ListS2tLanguagesResponse;
	clearLanguagesList(): ListS2tLanguagesResponse;
	addLanguages(value: string, index?: number): ListS2tLanguagesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tLanguagesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tLanguagesResponse): ListS2tLanguagesResponse.AsObject;
	static serializeBinaryToWriter(message: ListS2tLanguagesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tLanguagesResponse;
	static deserializeBinaryFromReader(
		message: ListS2tLanguagesResponse,
		reader: jspb.BinaryReader
	): ListS2tLanguagesResponse;
}

export namespace ListS2tLanguagesResponse {
	export type AsObject = {
		languagesList: Array<string>;
	};
}

export class ListS2tDomainsRequest extends jspb.Message {
	getLanguagesList(): Array<string>;
	setLanguagesList(value: Array<string>): ListS2tDomainsRequest;
	clearLanguagesList(): ListS2tDomainsRequest;
	addLanguages(value: string, index?: number): ListS2tDomainsRequest;

	getPipelineOwnersList(): Array<string>;
	setPipelineOwnersList(value: Array<string>): ListS2tDomainsRequest;
	clearPipelineOwnersList(): ListS2tDomainsRequest;
	addPipelineOwners(value: string, index?: number): ListS2tDomainsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tDomainsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tDomainsRequest): ListS2tDomainsRequest.AsObject;
	static serializeBinaryToWriter(message: ListS2tDomainsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tDomainsRequest;
	static deserializeBinaryFromReader(message: ListS2tDomainsRequest, reader: jspb.BinaryReader): ListS2tDomainsRequest;
}

export namespace ListS2tDomainsRequest {
	export type AsObject = {
		languagesList: Array<string>;
		pipelineOwnersList: Array<string>;
	};
}

export class ListS2tDomainsResponse extends jspb.Message {
	getDomainsList(): Array<string>;
	setDomainsList(value: Array<string>): ListS2tDomainsResponse;
	clearDomainsList(): ListS2tDomainsResponse;
	addDomains(value: string, index?: number): ListS2tDomainsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tDomainsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tDomainsResponse): ListS2tDomainsResponse.AsObject;
	static serializeBinaryToWriter(message: ListS2tDomainsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tDomainsResponse;
	static deserializeBinaryFromReader(
		message: ListS2tDomainsResponse,
		reader: jspb.BinaryReader
	): ListS2tDomainsResponse;
}

export namespace ListS2tDomainsResponse {
	export type AsObject = {
		domainsList: Array<string>;
	};
}

export class S2TGetServiceInfoResponse extends jspb.Message {
	getVersion(): string;
	setVersion(value: string): S2TGetServiceInfoResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2TGetServiceInfoResponse.AsObject;
	static toObject(includeInstance: boolean, msg: S2TGetServiceInfoResponse): S2TGetServiceInfoResponse.AsObject;
	static serializeBinaryToWriter(message: S2TGetServiceInfoResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2TGetServiceInfoResponse;
	static deserializeBinaryFromReader(
		message: S2TGetServiceInfoResponse,
		reader: jspb.BinaryReader
	): S2TGetServiceInfoResponse;
}

export namespace S2TGetServiceInfoResponse {
	export type AsObject = {
		version: string;
	};
}

export class Speech2TextConfig extends jspb.Message {
	getId(): string;
	setId(value: string): Speech2TextConfig;

	getDescription(): S2TDescription | undefined;
	setDescription(value?: S2TDescription): Speech2TextConfig;
	hasDescription(): boolean;
	clearDescription(): Speech2TextConfig;

	getActive(): boolean;
	setActive(value: boolean): Speech2TextConfig;

	getInference(): S2TInference | undefined;
	setInference(value?: S2TInference): Speech2TextConfig;
	hasInference(): boolean;
	clearInference(): Speech2TextConfig;

	getStreamingServer(): StreamingServer | undefined;
	setStreamingServer(value?: StreamingServer): Speech2TextConfig;
	hasStreamingServer(): boolean;
	clearStreamingServer(): Speech2TextConfig;

	getVoiceActivityDetection(): VoiceActivityDetection | undefined;
	setVoiceActivityDetection(value?: VoiceActivityDetection): Speech2TextConfig;
	hasVoiceActivityDetection(): boolean;
	clearVoiceActivityDetection(): Speech2TextConfig;

	getPostProcessing(): PostProcessing | undefined;
	setPostProcessing(value?: PostProcessing): Speech2TextConfig;
	hasPostProcessing(): boolean;
	clearPostProcessing(): Speech2TextConfig;

	getLogging(): Logging | undefined;
	setLogging(value?: Logging): Speech2TextConfig;
	hasLogging(): boolean;
	clearLogging(): Speech2TextConfig;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Speech2TextConfig.AsObject;
	static toObject(includeInstance: boolean, msg: Speech2TextConfig): Speech2TextConfig.AsObject;
	static serializeBinaryToWriter(message: Speech2TextConfig, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Speech2TextConfig;
	static deserializeBinaryFromReader(message: Speech2TextConfig, reader: jspb.BinaryReader): Speech2TextConfig;
}

export namespace Speech2TextConfig {
	export type AsObject = {
		id: string;
		description?: S2TDescription.AsObject;
		active: boolean;
		inference?: S2TInference.AsObject;
		streamingServer?: StreamingServer.AsObject;
		voiceActivityDetection?: VoiceActivityDetection.AsObject;
		postProcessing?: PostProcessing.AsObject;
		logging?: Logging.AsObject;
	};
}

export class S2TDescription extends jspb.Message {
	getLanguage(): string;
	setLanguage(value: string): S2TDescription;

	getPipelineOwner(): string;
	setPipelineOwner(value: string): S2TDescription;

	getDomain(): string;
	setDomain(value: string): S2TDescription;

	getComments(): string;
	setComments(value: string): S2TDescription;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2TDescription.AsObject;
	static toObject(includeInstance: boolean, msg: S2TDescription): S2TDescription.AsObject;
	static serializeBinaryToWriter(message: S2TDescription, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2TDescription;
	static deserializeBinaryFromReader(message: S2TDescription, reader: jspb.BinaryReader): S2TDescription;
}

export namespace S2TDescription {
	export type AsObject = {
		language: string;
		pipelineOwner: string;
		domain: string;
		comments: string;
	};
}

export class S2TInference extends jspb.Message {
	getAcousticModels(): AcousticModels | undefined;
	setAcousticModels(value?: AcousticModels): S2TInference;
	hasAcousticModels(): boolean;
	clearAcousticModels(): S2TInference;

	getLanguageModels(): LanguageModels | undefined;
	setLanguageModels(value?: LanguageModels): S2TInference;
	hasLanguageModels(): boolean;
	clearLanguageModels(): S2TInference;

	getInferenceBackend(): InferenceBackend;
	setInferenceBackend(value: InferenceBackend): S2TInference;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2TInference.AsObject;
	static toObject(includeInstance: boolean, msg: S2TInference): S2TInference.AsObject;
	static serializeBinaryToWriter(message: S2TInference, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2TInference;
	static deserializeBinaryFromReader(message: S2TInference, reader: jspb.BinaryReader): S2TInference;
}

export namespace S2TInference {
	export type AsObject = {
		acousticModels?: AcousticModels.AsObject;
		languageModels?: LanguageModels.AsObject;
		inferenceBackend: InferenceBackend;
	};
}

export class AcousticModels extends jspb.Message {
	getType(): string;
	setType(value: string): AcousticModels;

	getQuartznet(): Quartznet | undefined;
	setQuartznet(value?: Quartznet): AcousticModels;
	hasQuartznet(): boolean;
	clearQuartznet(): AcousticModels;

	getQuartznetTriton(): QuartznetTriton | undefined;
	setQuartznetTriton(value?: QuartznetTriton): AcousticModels;
	hasQuartznetTriton(): boolean;
	clearQuartznetTriton(): AcousticModels;

	getWav2vec(): Wav2Vec | undefined;
	setWav2vec(value?: Wav2Vec): AcousticModels;
	hasWav2vec(): boolean;
	clearWav2vec(): AcousticModels;

	getWav2vecTriton(): Wav2VecTriton | undefined;
	setWav2vecTriton(value?: Wav2VecTriton): AcousticModels;
	hasWav2vecTriton(): boolean;
	clearWav2vecTriton(): AcousticModels;

	getWhisper(): Whisper | undefined;
	setWhisper(value?: Whisper): AcousticModels;
	hasWhisper(): boolean;
	clearWhisper(): AcousticModels;

	getWhisperTriton(): WhisperTriton | undefined;
	setWhisperTriton(value?: WhisperTriton): AcousticModels;
	hasWhisperTriton(): boolean;
	clearWhisperTriton(): AcousticModels;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AcousticModels.AsObject;
	static toObject(includeInstance: boolean, msg: AcousticModels): AcousticModels.AsObject;
	static serializeBinaryToWriter(message: AcousticModels, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AcousticModels;
	static deserializeBinaryFromReader(message: AcousticModels, reader: jspb.BinaryReader): AcousticModels;
}

export namespace AcousticModels {
	export type AsObject = {
		type: string;
		quartznet?: Quartznet.AsObject;
		quartznetTriton?: QuartznetTriton.AsObject;
		wav2vec?: Wav2Vec.AsObject;
		wav2vecTriton?: Wav2VecTriton.AsObject;
		whisper?: Whisper.AsObject;
		whisperTriton?: WhisperTriton.AsObject;
	};
}

export class Whisper extends jspb.Message {
	getModelPath(): string;
	setModelPath(value: string): Whisper;

	getUseGpu(): boolean;
	setUseGpu(value: boolean): Whisper;

	getLanguage(): string;
	setLanguage(value: string): Whisper;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Whisper.AsObject;
	static toObject(includeInstance: boolean, msg: Whisper): Whisper.AsObject;
	static serializeBinaryToWriter(message: Whisper, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Whisper;
	static deserializeBinaryFromReader(message: Whisper, reader: jspb.BinaryReader): Whisper;
}

export namespace Whisper {
	export type AsObject = {
		modelPath: string;
		useGpu: boolean;
		language: string;
	};
}

export class WhisperTriton extends jspb.Message {
	getProcessorPath(): string;
	setProcessorPath(value: string): WhisperTriton;

	getTritonModelName(): string;
	setTritonModelName(value: string): WhisperTriton;

	getTritonModelVersion(): string;
	setTritonModelVersion(value: string): WhisperTriton;

	getCheckStatusTimeout(): number;
	setCheckStatusTimeout(value: number): WhisperTriton;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): WhisperTriton.AsObject;
	static toObject(includeInstance: boolean, msg: WhisperTriton): WhisperTriton.AsObject;
	static serializeBinaryToWriter(message: WhisperTriton, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): WhisperTriton;
	static deserializeBinaryFromReader(message: WhisperTriton, reader: jspb.BinaryReader): WhisperTriton;
}

export namespace WhisperTriton {
	export type AsObject = {
		processorPath: string;
		tritonModelName: string;
		tritonModelVersion: string;
		checkStatusTimeout: number;
	};
}

export class Wav2Vec extends jspb.Message {
	getModelPath(): string;
	setModelPath(value: string): Wav2Vec;

	getUseGpu(): boolean;
	setUseGpu(value: boolean): Wav2Vec;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Wav2Vec.AsObject;
	static toObject(includeInstance: boolean, msg: Wav2Vec): Wav2Vec.AsObject;
	static serializeBinaryToWriter(message: Wav2Vec, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Wav2Vec;
	static deserializeBinaryFromReader(message: Wav2Vec, reader: jspb.BinaryReader): Wav2Vec;
}

export namespace Wav2Vec {
	export type AsObject = {
		modelPath: string;
		useGpu: boolean;
	};
}

export class Wav2VecTriton extends jspb.Message {
	getProcessorPath(): string;
	setProcessorPath(value: string): Wav2VecTriton;

	getTritonModelName(): string;
	setTritonModelName(value: string): Wav2VecTriton;

	getTritonModelVersion(): string;
	setTritonModelVersion(value: string): Wav2VecTriton;

	getCheckStatusTimeout(): number;
	setCheckStatusTimeout(value: number): Wav2VecTriton;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Wav2VecTriton.AsObject;
	static toObject(includeInstance: boolean, msg: Wav2VecTriton): Wav2VecTriton.AsObject;
	static serializeBinaryToWriter(message: Wav2VecTriton, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Wav2VecTriton;
	static deserializeBinaryFromReader(message: Wav2VecTriton, reader: jspb.BinaryReader): Wav2VecTriton;
}

export namespace Wav2VecTriton {
	export type AsObject = {
		processorPath: string;
		tritonModelName: string;
		tritonModelVersion: string;
		checkStatusTimeout: number;
	};
}

export class Quartznet extends jspb.Message {
	getConfigPath(): string;
	setConfigPath(value: string): Quartznet;

	getLoadType(): string;
	setLoadType(value: string): Quartznet;

	getPtFiles(): PtFiles | undefined;
	setPtFiles(value?: PtFiles): Quartznet;
	hasPtFiles(): boolean;
	clearPtFiles(): Quartznet;

	getCkptFile(): CkptFile | undefined;
	setCkptFile(value?: CkptFile): Quartznet;
	hasCkptFile(): boolean;
	clearCkptFile(): Quartznet;

	getUseGpu(): boolean;
	setUseGpu(value: boolean): Quartznet;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Quartznet.AsObject;
	static toObject(includeInstance: boolean, msg: Quartznet): Quartznet.AsObject;
	static serializeBinaryToWriter(message: Quartznet, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Quartznet;
	static deserializeBinaryFromReader(message: Quartznet, reader: jspb.BinaryReader): Quartznet;
}

export namespace Quartznet {
	export type AsObject = {
		configPath: string;
		loadType: string;
		ptFiles?: PtFiles.AsObject;
		ckptFile?: CkptFile.AsObject;
		useGpu: boolean;
	};
}

export class PtFiles extends jspb.Message {
	getPath(): string;
	setPath(value: string): PtFiles;

	getStep(): string;
	setStep(value: string): PtFiles;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PtFiles.AsObject;
	static toObject(includeInstance: boolean, msg: PtFiles): PtFiles.AsObject;
	static serializeBinaryToWriter(message: PtFiles, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PtFiles;
	static deserializeBinaryFromReader(message: PtFiles, reader: jspb.BinaryReader): PtFiles;
}

export namespace PtFiles {
	export type AsObject = {
		path: string;
		step: string;
	};
}

export class CkptFile extends jspb.Message {
	getPath(): string;
	setPath(value: string): CkptFile;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CkptFile.AsObject;
	static toObject(includeInstance: boolean, msg: CkptFile): CkptFile.AsObject;
	static serializeBinaryToWriter(message: CkptFile, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CkptFile;
	static deserializeBinaryFromReader(message: CkptFile, reader: jspb.BinaryReader): CkptFile;
}

export namespace CkptFile {
	export type AsObject = {
		path: string;
	};
}

export class QuartznetTriton extends jspb.Message {
	getConfigPath(): string;
	setConfigPath(value: string): QuartznetTriton;

	getTritonUrl(): string;
	setTritonUrl(value: string): QuartznetTriton;

	getTritonModel(): string;
	setTritonModel(value: string): QuartznetTriton;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): QuartznetTriton.AsObject;
	static toObject(includeInstance: boolean, msg: QuartznetTriton): QuartznetTriton.AsObject;
	static serializeBinaryToWriter(message: QuartznetTriton, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): QuartznetTriton;
	static deserializeBinaryFromReader(message: QuartznetTriton, reader: jspb.BinaryReader): QuartznetTriton;
}

export namespace QuartznetTriton {
	export type AsObject = {
		configPath: string;
		tritonUrl: string;
		tritonModel: string;
	};
}

export class LanguageModels extends jspb.Message {
	getPath(): string;
	setPath(value: string): LanguageModels;

	getBeamSize(): number;
	setBeamSize(value: number): LanguageModels;

	getDefaultLm(): string;
	setDefaultLm(value: string): LanguageModels;

	getBeamSearchScorerAlpha(): number;
	setBeamSearchScorerAlpha(value: number): LanguageModels;

	getBeamSearchScorerBeta(): number;
	setBeamSearchScorerBeta(value: number): LanguageModels;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): LanguageModels.AsObject;
	static toObject(includeInstance: boolean, msg: LanguageModels): LanguageModels.AsObject;
	static serializeBinaryToWriter(message: LanguageModels, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): LanguageModels;
	static deserializeBinaryFromReader(message: LanguageModels, reader: jspb.BinaryReader): LanguageModels;
}

export namespace LanguageModels {
	export type AsObject = {
		path: string;
		beamSize: number;
		defaultLm: string;
		beamSearchScorerAlpha: number;
		beamSearchScorerBeta: number;
	};
}

export class StreamingServer extends jspb.Message {
	getHost(): string;
	setHost(value: string): StreamingServer;

	getPort(): number;
	setPort(value: number): StreamingServer;

	getOutputStyle(): string;
	setOutputStyle(value: string): StreamingServer;

	getStreamingSpeechRecognition(): StreamingSpeechRecognition | undefined;
	setStreamingSpeechRecognition(value?: StreamingSpeechRecognition): StreamingServer;
	hasStreamingSpeechRecognition(): boolean;
	clearStreamingSpeechRecognition(): StreamingServer;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamingServer.AsObject;
	static toObject(includeInstance: boolean, msg: StreamingServer): StreamingServer.AsObject;
	static serializeBinaryToWriter(message: StreamingServer, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StreamingServer;
	static deserializeBinaryFromReader(message: StreamingServer, reader: jspb.BinaryReader): StreamingServer;
}

export namespace StreamingServer {
	export type AsObject = {
		host: string;
		port: number;
		outputStyle: string;
		streamingSpeechRecognition?: StreamingSpeechRecognition.AsObject;
	};
}

export class StreamingSpeechRecognition extends jspb.Message {
	getTranscribeNotFinal(): boolean;
	setTranscribeNotFinal(value: boolean): StreamingSpeechRecognition;

	getDecodingMethod(): string;
	setDecodingMethod(value: string): StreamingSpeechRecognition;

	getSamplingRate(): number;
	setSamplingRate(value: number): StreamingSpeechRecognition;

	getMinAudioChunkSize(): number;
	setMinAudioChunkSize(value: number): StreamingSpeechRecognition;

	getStartOfUtteranceThreshold(): number;
	setStartOfUtteranceThreshold(value: number): StreamingSpeechRecognition;

	getEndOfUtteranceThreshold(): number;
	setEndOfUtteranceThreshold(value: number): StreamingSpeechRecognition;

	getNextChunkTimeout(): number;
	setNextChunkTimeout(value: number): StreamingSpeechRecognition;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): StreamingSpeechRecognition.AsObject;
	static toObject(includeInstance: boolean, msg: StreamingSpeechRecognition): StreamingSpeechRecognition.AsObject;
	static serializeBinaryToWriter(message: StreamingSpeechRecognition, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): StreamingSpeechRecognition;
	static deserializeBinaryFromReader(
		message: StreamingSpeechRecognition,
		reader: jspb.BinaryReader
	): StreamingSpeechRecognition;
}

export namespace StreamingSpeechRecognition {
	export type AsObject = {
		transcribeNotFinal: boolean;
		decodingMethod: string;
		samplingRate: number;
		minAudioChunkSize: number;
		startOfUtteranceThreshold: number;
		endOfUtteranceThreshold: number;
		nextChunkTimeout: number;
	};
}

export class VoiceActivityDetection extends jspb.Message {
	getActive(): string;
	setActive(value: string): VoiceActivityDetection;

	getSamplingRate(): number;
	setSamplingRate(value: number): VoiceActivityDetection;

	getPyannote(): Pyannote | undefined;
	setPyannote(value?: Pyannote): VoiceActivityDetection;
	hasPyannote(): boolean;
	clearPyannote(): VoiceActivityDetection;

	getMatchbox(): Matchbox | undefined;
	setMatchbox(value?: Matchbox): VoiceActivityDetection;
	hasMatchbox(): boolean;
	clearMatchbox(): VoiceActivityDetection;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): VoiceActivityDetection.AsObject;
	static toObject(includeInstance: boolean, msg: VoiceActivityDetection): VoiceActivityDetection.AsObject;
	static serializeBinaryToWriter(message: VoiceActivityDetection, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): VoiceActivityDetection;
	static deserializeBinaryFromReader(
		message: VoiceActivityDetection,
		reader: jspb.BinaryReader
	): VoiceActivityDetection;
}

export namespace VoiceActivityDetection {
	export type AsObject = {
		active: string;
		samplingRate: number;
		pyannote?: Pyannote.AsObject;
		matchbox?: Matchbox.AsObject;
	};
}

export class Pyannote extends jspb.Message {
	getModelPath(): string;
	setModelPath(value: string): Pyannote;

	getMinAudioSize(): number;
	setMinAudioSize(value: number): Pyannote;

	getOffset(): number;
	setOffset(value: number): Pyannote;

	getOnset(): number;
	setOnset(value: number): Pyannote;

	getLogScale(): boolean;
	setLogScale(value: boolean): Pyannote;

	getMinDurationOff(): number;
	setMinDurationOff(value: number): Pyannote;

	getMinDurationOn(): number;
	setMinDurationOn(value: number): Pyannote;

	getOneofLogScaleCase(): Pyannote.OneofLogScaleCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Pyannote.AsObject;
	static toObject(includeInstance: boolean, msg: Pyannote): Pyannote.AsObject;
	static serializeBinaryToWriter(message: Pyannote, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Pyannote;
	static deserializeBinaryFromReader(message: Pyannote, reader: jspb.BinaryReader): Pyannote;
}

export namespace Pyannote {
	export type AsObject = {
		modelPath: string;
		minAudioSize: number;
		offset: number;
		onset: number;
		logScale: boolean;
		minDurationOff: number;
		minDurationOn: number;
	};

	export enum OneofLogScaleCase {
		ONEOF_LOG_SCALE_NOT_SET = 0,
		LOG_SCALE = 5
	}
}

export class Matchbox extends jspb.Message {
	getModelConfig(): string;
	setModelConfig(value: string): Matchbox;

	getEncoderPath(): string;
	setEncoderPath(value: string): Matchbox;

	getDecoderPath(): string;
	setDecoderPath(value: string): Matchbox;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Matchbox.AsObject;
	static toObject(includeInstance: boolean, msg: Matchbox): Matchbox.AsObject;
	static serializeBinaryToWriter(message: Matchbox, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Matchbox;
	static deserializeBinaryFromReader(message: Matchbox, reader: jspb.BinaryReader): Matchbox;
}

export namespace Matchbox {
	export type AsObject = {
		modelConfig: string;
		encoderPath: string;
		decoderPath: string;
	};
}

export class PostProcessing extends jspb.Message {
	getPipelineList(): Array<string>;
	setPipelineList(value: Array<string>): PostProcessing;
	clearPipelineList(): PostProcessing;
	addPipeline(value: string, index?: number): PostProcessing;

	getPostProcessors(): PostProcessors | undefined;
	setPostProcessors(value?: PostProcessors): PostProcessing;
	hasPostProcessors(): boolean;
	clearPostProcessors(): PostProcessing;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PostProcessing.AsObject;
	static toObject(includeInstance: boolean, msg: PostProcessing): PostProcessing.AsObject;
	static serializeBinaryToWriter(message: PostProcessing, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PostProcessing;
	static deserializeBinaryFromReader(message: PostProcessing, reader: jspb.BinaryReader): PostProcessing;
}

export namespace PostProcessing {
	export type AsObject = {
		pipelineList: Array<string>;
		postProcessors?: PostProcessors.AsObject;
	};
}

export class PostProcessors extends jspb.Message {
	getSymSpell(): SymSpell | undefined;
	setSymSpell(value?: SymSpell): PostProcessors;
	hasSymSpell(): boolean;
	clearSymSpell(): PostProcessors;

	getNormalization(): S2TNormalization | undefined;
	setNormalization(value?: S2TNormalization): PostProcessors;
	hasNormalization(): boolean;
	clearNormalization(): PostProcessors;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): PostProcessors.AsObject;
	static toObject(includeInstance: boolean, msg: PostProcessors): PostProcessors.AsObject;
	static serializeBinaryToWriter(message: PostProcessors, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): PostProcessors;
	static deserializeBinaryFromReader(message: PostProcessors, reader: jspb.BinaryReader): PostProcessors;
}

export namespace PostProcessors {
	export type AsObject = {
		symSpell?: SymSpell.AsObject;
		normalization?: S2TNormalization.AsObject;
	};
}

export class SymSpell extends jspb.Message {
	getDictPath(): string;
	setDictPath(value: string): SymSpell;

	getMaxDictionaryEditDistance(): number;
	setMaxDictionaryEditDistance(value: number): SymSpell;

	getPrefixLength(): number;
	setPrefixLength(value: number): SymSpell;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): SymSpell.AsObject;
	static toObject(includeInstance: boolean, msg: SymSpell): SymSpell.AsObject;
	static serializeBinaryToWriter(message: SymSpell, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): SymSpell;
	static deserializeBinaryFromReader(message: SymSpell, reader: jspb.BinaryReader): SymSpell;
}

export namespace SymSpell {
	export type AsObject = {
		dictPath: string;
		maxDictionaryEditDistance: number;
		prefixLength: number;
	};
}

export class S2TNormalization extends jspb.Message {
	getLanguage(): string;
	setLanguage(value: string): S2TNormalization;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): S2TNormalization.AsObject;
	static toObject(includeInstance: boolean, msg: S2TNormalization): S2TNormalization.AsObject;
	static serializeBinaryToWriter(message: S2TNormalization, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): S2TNormalization;
	static deserializeBinaryFromReader(message: S2TNormalization, reader: jspb.BinaryReader): S2TNormalization;
}

export namespace S2TNormalization {
	export type AsObject = {
		language: string;
	};
}

export class Logging extends jspb.Message {
	getType(): string;
	setType(value: string): Logging;

	getPath(): string;
	setPath(value: string): Logging;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Logging.AsObject;
	static toObject(includeInstance: boolean, msg: Logging): Logging.AsObject;
	static serializeBinaryToWriter(message: Logging, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Logging;
	static deserializeBinaryFromReader(message: Logging, reader: jspb.BinaryReader): Logging;
}

export namespace Logging {
	export type AsObject = {
		type: string;
		path: string;
	};
}

export class ListS2tLanguageModelsRequest extends jspb.Message {
	getIdsList(): Array<string>;
	setIdsList(value: Array<string>): ListS2tLanguageModelsRequest;
	clearIdsList(): ListS2tLanguageModelsRequest;
	addIds(value: string, index?: number): ListS2tLanguageModelsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tLanguageModelsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tLanguageModelsRequest): ListS2tLanguageModelsRequest.AsObject;
	static serializeBinaryToWriter(message: ListS2tLanguageModelsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tLanguageModelsRequest;
	static deserializeBinaryFromReader(
		message: ListS2tLanguageModelsRequest,
		reader: jspb.BinaryReader
	): ListS2tLanguageModelsRequest;
}

export namespace ListS2tLanguageModelsRequest {
	export type AsObject = {
		idsList: Array<string>;
	};
}

export class LanguageModelPipelineId extends jspb.Message {
	getPipelineId(): string;
	setPipelineId(value: string): LanguageModelPipelineId;

	getModelNamesList(): Array<string>;
	setModelNamesList(value: Array<string>): LanguageModelPipelineId;
	clearModelNamesList(): LanguageModelPipelineId;
	addModelNames(value: string, index?: number): LanguageModelPipelineId;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): LanguageModelPipelineId.AsObject;
	static toObject(includeInstance: boolean, msg: LanguageModelPipelineId): LanguageModelPipelineId.AsObject;
	static serializeBinaryToWriter(message: LanguageModelPipelineId, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): LanguageModelPipelineId;
	static deserializeBinaryFromReader(
		message: LanguageModelPipelineId,
		reader: jspb.BinaryReader
	): LanguageModelPipelineId;
}

export namespace LanguageModelPipelineId {
	export type AsObject = {
		pipelineId: string;
		modelNamesList: Array<string>;
	};
}

export class ListS2tLanguageModelsResponse extends jspb.Message {
	getLmPipelineIdsList(): Array<LanguageModelPipelineId>;
	setLmPipelineIdsList(value: Array<LanguageModelPipelineId>): ListS2tLanguageModelsResponse;
	clearLmPipelineIdsList(): ListS2tLanguageModelsResponse;
	addLmPipelineIds(value?: LanguageModelPipelineId, index?: number): LanguageModelPipelineId;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListS2tLanguageModelsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListS2tLanguageModelsResponse): ListS2tLanguageModelsResponse.AsObject;
	static serializeBinaryToWriter(message: ListS2tLanguageModelsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListS2tLanguageModelsResponse;
	static deserializeBinaryFromReader(
		message: ListS2tLanguageModelsResponse,
		reader: jspb.BinaryReader
	): ListS2tLanguageModelsResponse;
}

export namespace ListS2tLanguageModelsResponse {
	export type AsObject = {
		lmPipelineIdsList: Array<LanguageModelPipelineId.AsObject>;
	};
}

export class CreateUserLanguageModelRequest extends jspb.Message {
	getLanguageModelName(): string;
	setLanguageModelName(value: string): CreateUserLanguageModelRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateUserLanguageModelRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: CreateUserLanguageModelRequest
	): CreateUserLanguageModelRequest.AsObject;
	static serializeBinaryToWriter(message: CreateUserLanguageModelRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateUserLanguageModelRequest;
	static deserializeBinaryFromReader(
		message: CreateUserLanguageModelRequest,
		reader: jspb.BinaryReader
	): CreateUserLanguageModelRequest;
}

export namespace CreateUserLanguageModelRequest {
	export type AsObject = {
		languageModelName: string;
	};
}

export class DeleteUserLanguageModelRequest extends jspb.Message {
	getLanguageModelName(): string;
	setLanguageModelName(value: string): DeleteUserLanguageModelRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteUserLanguageModelRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: DeleteUserLanguageModelRequest
	): DeleteUserLanguageModelRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteUserLanguageModelRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteUserLanguageModelRequest;
	static deserializeBinaryFromReader(
		message: DeleteUserLanguageModelRequest,
		reader: jspb.BinaryReader
	): DeleteUserLanguageModelRequest;
}

export namespace DeleteUserLanguageModelRequest {
	export type AsObject = {
		languageModelName: string;
	};
}

export class AddDataToUserLanguageModelRequest extends jspb.Message {
	getLanguageModelName(): string;
	setLanguageModelName(value: string): AddDataToUserLanguageModelRequest;

	getZippedData(): Uint8Array | string;
	getZippedData_asU8(): Uint8Array;
	getZippedData_asB64(): string;
	setZippedData(value: Uint8Array | string): AddDataToUserLanguageModelRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): AddDataToUserLanguageModelRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: AddDataToUserLanguageModelRequest
	): AddDataToUserLanguageModelRequest.AsObject;
	static serializeBinaryToWriter(message: AddDataToUserLanguageModelRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): AddDataToUserLanguageModelRequest;
	static deserializeBinaryFromReader(
		message: AddDataToUserLanguageModelRequest,
		reader: jspb.BinaryReader
	): AddDataToUserLanguageModelRequest;
}

export namespace AddDataToUserLanguageModelRequest {
	export type AsObject = {
		languageModelName: string;
		zippedData: Uint8Array | string;
	};
}

export class TrainUserLanguageModelRequest extends jspb.Message {
	getLanguageModelName(): string;
	setLanguageModelName(value: string): TrainUserLanguageModelRequest;

	getOrder(): number;
	setOrder(value: number): TrainUserLanguageModelRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TrainUserLanguageModelRequest.AsObject;
	static toObject(includeInstance: boolean, msg: TrainUserLanguageModelRequest): TrainUserLanguageModelRequest.AsObject;
	static serializeBinaryToWriter(message: TrainUserLanguageModelRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TrainUserLanguageModelRequest;
	static deserializeBinaryFromReader(
		message: TrainUserLanguageModelRequest,
		reader: jspb.BinaryReader
	): TrainUserLanguageModelRequest;
}

export namespace TrainUserLanguageModelRequest {
	export type AsObject = {
		languageModelName: string;
		order: number;
	};
}

export enum Decoding {
	DEFAULT = 0,
	GREEDY = 1,
	BEAM_SEARCH_WITH_LM = 2,
	BEAM_SEARCH = 3
}
export enum InferenceBackend {
	INFERENCE_BACKEND_UNKNOWN = 0,
	INFERENCE_BACKEND_PYTORCH = 1,
	INFERENCE_BACKEND_FLAX = 2
}
