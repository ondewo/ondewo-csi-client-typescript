import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb'; // proto import: "ondewo/nlu/common.proto"
import * as ondewo_nlu_operation_metadata_pb from '../../ondewo/nlu/operation_metadata_pb'; // proto import: "ondewo/nlu/operation_metadata.proto"
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb'; // proto import: "ondewo/nlu/operations.proto"
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb'; // proto import: "ondewo/nlu/session.proto"


export class RagFileMetadata extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): RagFileMetadata;

  getContentType(): string;
  setContentType(value: string): RagFileMetadata;

  getSize(): number;
  setSize(value: number): RagFileMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileMetadata): RagFileMetadata.AsObject;
  static serializeBinaryToWriter(message: RagFileMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileMetadata;
  static deserializeBinaryFromReader(message: RagFileMetadata, reader: jspb.BinaryReader): RagFileMetadata;
}

export namespace RagFileMetadata {
  export type AsObject = {
    fileName: string,
    contentType: string,
    size: number,
  }
}

export class RagPartialSuccess extends jspb.Message {
  getSuccessCount(): number;
  setSuccessCount(value: number): RagPartialSuccess;

  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): RagPartialSuccess;
  clearErrorsList(): RagPartialSuccess;
  addErrors(value: string, index?: number): RagPartialSuccess;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagPartialSuccess.AsObject;
  static toObject(includeInstance: boolean, msg: RagPartialSuccess): RagPartialSuccess.AsObject;
  static serializeBinaryToWriter(message: RagPartialSuccess, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagPartialSuccess;
  static deserializeBinaryFromReader(message: RagPartialSuccess, reader: jspb.BinaryReader): RagPartialSuccess;
}

export namespace RagPartialSuccess {
  export type AsObject = {
    successCount: number,
    errorsList: Array<string>,
  }
}

export class RagCreateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagCreateDatasetRequest;

  getName(): string;
  setName(value: string): RagCreateDatasetRequest;

  getDescription(): string;
  setDescription(value: string): RagCreateDatasetRequest;

  getAvatar(): string;
  setAvatar(value: string): RagCreateDatasetRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagCreateDatasetRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagCreateDatasetRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagCreateDatasetRequest;

  getEmbeddingModelCcaiServiceName(): string;
  setEmbeddingModelCcaiServiceName(value: string): RagCreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateDatasetRequest): RagCreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateDatasetRequest;
  static deserializeBinaryFromReader(message: RagCreateDatasetRequest, reader: jspb.BinaryReader): RagCreateDatasetRequest;
}

export namespace RagCreateDatasetRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    name: string,
    description: string,
    avatar: string,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    embeddingModelCcaiServiceName: string,
  }
}

export class RagParserConfig extends jspb.Message {
  getAutoKeywords(): number;
  setAutoKeywords(value: number): RagParserConfig;
  hasAutoKeywords(): boolean;
  clearAutoKeywords(): RagParserConfig;

  getAutoQuestions(): number;
  setAutoQuestions(value: number): RagParserConfig;
  hasAutoQuestions(): boolean;
  clearAutoQuestions(): RagParserConfig;

  getChunkTokenNum(): number;
  setChunkTokenNum(value: number): RagParserConfig;

  getDelimiter(): string;
  setDelimiter(value: string): RagParserConfig;

  getHtml4excel(): boolean;
  setHtml4excel(value: boolean): RagParserConfig;
  hasHtml4excel(): boolean;
  clearHtml4excel(): RagParserConfig;

  getLayoutRecognize(): string;
  setLayoutRecognize(value: string): RagParserConfig;

  getTagKbIdsList(): Array<string>;
  setTagKbIdsList(value: Array<string>): RagParserConfig;
  clearTagKbIdsList(): RagParserConfig;
  addTagKbIds(value: string, index?: number): RagParserConfig;

  getTopnTags(): number;
  setTopnTags(value: number): RagParserConfig;

  getFilenameEmbdWeight(): number;
  setFilenameEmbdWeight(value: number): RagParserConfig;
  hasFilenameEmbdWeight(): boolean;
  clearFilenameEmbdWeight(): RagParserConfig;

  getTaskPageSize(): number;
  setTaskPageSize(value: number): RagParserConfig;

  getRaptor(): RagRaptorConfig | undefined;
  setRaptor(value?: RagRaptorConfig): RagParserConfig;
  hasRaptor(): boolean;
  clearRaptor(): RagParserConfig;

  getGraphrag(): RagGraphRagConfig | undefined;
  setGraphrag(value?: RagGraphRagConfig): RagParserConfig;
  hasGraphrag(): boolean;
  clearGraphrag(): RagParserConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagParserConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagParserConfig): RagParserConfig.AsObject;
  static serializeBinaryToWriter(message: RagParserConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagParserConfig;
  static deserializeBinaryFromReader(message: RagParserConfig, reader: jspb.BinaryReader): RagParserConfig;
}

export namespace RagParserConfig {
  export type AsObject = {
    autoKeywords?: number,
    autoQuestions?: number,
    chunkTokenNum: number,
    delimiter: string,
    html4excel?: boolean,
    layoutRecognize: string,
    tagKbIdsList: Array<string>,
    topnTags: number,
    filenameEmbdWeight?: number,
    taskPageSize: number,
    raptor?: RagRaptorConfig.AsObject,
    graphrag?: RagGraphRagConfig.AsObject,
  }

  export enum AutoKeywordsCase { 
    _AUTO_KEYWORDS_NOT_SET = 0,
    AUTO_KEYWORDS = 1,
  }

  export enum AutoQuestionsCase { 
    _AUTO_QUESTIONS_NOT_SET = 0,
    AUTO_QUESTIONS = 2,
  }

  export enum Html4excelCase { 
    _HTML4EXCEL_NOT_SET = 0,
    HTML4EXCEL = 5,
  }

  export enum FilenameEmbdWeightCase { 
    _FILENAME_EMBD_WEIGHT_NOT_SET = 0,
    FILENAME_EMBD_WEIGHT = 9,
  }
}

export class RagRaptorConfig extends jspb.Message {
  getUseRaptor(): boolean;
  setUseRaptor(value: boolean): RagRaptorConfig;
  hasUseRaptor(): boolean;
  clearUseRaptor(): RagRaptorConfig;

  getPrompt(): string;
  setPrompt(value: string): RagRaptorConfig;

  getMaxToken(): number;
  setMaxToken(value: number): RagRaptorConfig;

  getThreshold(): number;
  setThreshold(value: number): RagRaptorConfig;
  hasThreshold(): boolean;
  clearThreshold(): RagRaptorConfig;

  getMaxCluster(): number;
  setMaxCluster(value: number): RagRaptorConfig;

  getRandomSeed(): number;
  setRandomSeed(value: number): RagRaptorConfig;
  hasRandomSeed(): boolean;
  clearRandomSeed(): RagRaptorConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRaptorConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagRaptorConfig): RagRaptorConfig.AsObject;
  static serializeBinaryToWriter(message: RagRaptorConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRaptorConfig;
  static deserializeBinaryFromReader(message: RagRaptorConfig, reader: jspb.BinaryReader): RagRaptorConfig;
}

export namespace RagRaptorConfig {
  export type AsObject = {
    useRaptor?: boolean,
    prompt: string,
    maxToken: number,
    threshold?: number,
    maxCluster: number,
    randomSeed?: number,
  }

  export enum UseRaptorCase { 
    _USE_RAPTOR_NOT_SET = 0,
    USE_RAPTOR = 1,
  }

  export enum ThresholdCase { 
    _THRESHOLD_NOT_SET = 0,
    THRESHOLD = 4,
  }

  export enum RandomSeedCase { 
    _RANDOM_SEED_NOT_SET = 0,
    RANDOM_SEED = 6,
  }
}

export class RagGraphRagConfig extends jspb.Message {
  getUseGraphrag(): boolean;
  setUseGraphrag(value: boolean): RagGraphRagConfig;
  hasUseGraphrag(): boolean;
  clearUseGraphrag(): RagGraphRagConfig;

  getEntityTypesList(): Array<string>;
  setEntityTypesList(value: Array<string>): RagGraphRagConfig;
  clearEntityTypesList(): RagGraphRagConfig;
  addEntityTypes(value: string, index?: number): RagGraphRagConfig;

  getMethod(): RagGraphRagMethod;
  setMethod(value: RagGraphRagMethod): RagGraphRagConfig;
  hasMethod(): boolean;
  clearMethod(): RagGraphRagConfig;

  getCommunity(): boolean;
  setCommunity(value: boolean): RagGraphRagConfig;
  hasCommunity(): boolean;
  clearCommunity(): RagGraphRagConfig;

  getResolution(): boolean;
  setResolution(value: boolean): RagGraphRagConfig;
  hasResolution(): boolean;
  clearResolution(): RagGraphRagConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGraphRagConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagGraphRagConfig): RagGraphRagConfig.AsObject;
  static serializeBinaryToWriter(message: RagGraphRagConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGraphRagConfig;
  static deserializeBinaryFromReader(message: RagGraphRagConfig, reader: jspb.BinaryReader): RagGraphRagConfig;
}

export namespace RagGraphRagConfig {
  export type AsObject = {
    useGraphrag?: boolean,
    entityTypesList: Array<string>,
    method?: RagGraphRagMethod,
    community?: boolean,
    resolution?: boolean,
  }

  export enum UseGraphragCase { 
    _USE_GRAPHRAG_NOT_SET = 0,
    USE_GRAPHRAG = 1,
  }

  export enum MethodCase { 
    _METHOD_NOT_SET = 0,
    METHOD = 3,
  }

  export enum CommunityCase { 
    _COMMUNITY_NOT_SET = 0,
    COMMUNITY = 4,
  }

  export enum ResolutionCase { 
    _RESOLUTION_NOT_SET = 0,
    RESOLUTION = 5,
  }
}

export class RagDataset extends jspb.Message {
  getId(): string;
  setId(value: string): RagDataset;

  getAvatar(): string;
  setAvatar(value: string): RagDataset;

  getName(): string;
  setName(value: string): RagDataset;

  getDescription(): string;
  setDescription(value: string): RagDataset;

  getDocumentCount(): number;
  setDocumentCount(value: number): RagDataset;
  hasDocumentCount(): boolean;
  clearDocumentCount(): RagDataset;

  getTokenNum(): number;
  setTokenNum(value: number): RagDataset;
  hasTokenNum(): boolean;
  clearTokenNum(): RagDataset;

  getChunkCount(): number;
  setChunkCount(value: number): RagDataset;
  hasChunkCount(): boolean;
  clearChunkCount(): RagDataset;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagDataset;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagDataset;
  hasParserConfig(): boolean;
  clearParserConfig(): RagDataset;

  getPagerank(): number;
  setPagerank(value: number): RagDataset;
  hasPagerank(): boolean;
  clearPagerank(): RagDataset;

  getParsingStatus(): RagDatasetParsingStatus | undefined;
  setParsingStatus(value?: RagDatasetParsingStatus): RagDataset;
  hasParsingStatus(): boolean;
  clearParsingStatus(): RagDataset;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;
  hasCreateTime(): boolean;
  clearCreateTime(): RagDataset;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDataset;
  hasUpdateTime(): boolean;
  clearUpdateTime(): RagDataset;

  getEmbeddingModelCcaiServiceName(): string;
  setEmbeddingModelCcaiServiceName(value: string): RagDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDataset.AsObject;
  static toObject(includeInstance: boolean, msg: RagDataset): RagDataset.AsObject;
  static serializeBinaryToWriter(message: RagDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDataset;
  static deserializeBinaryFromReader(message: RagDataset, reader: jspb.BinaryReader): RagDataset;
}

export namespace RagDataset {
  export type AsObject = {
    id: string,
    avatar: string,
    name: string,
    description: string,
    documentCount?: number,
    tokenNum?: number,
    chunkCount?: number,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    pagerank?: number,
    parsingStatus?: RagDatasetParsingStatus.AsObject,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    embeddingModelCcaiServiceName: string,
  }

  export enum DocumentCountCase { 
    _DOCUMENT_COUNT_NOT_SET = 0,
    DOCUMENT_COUNT = 5,
  }

  export enum TokenNumCase { 
    _TOKEN_NUM_NOT_SET = 0,
    TOKEN_NUM = 6,
  }

  export enum ChunkCountCase { 
    _CHUNK_COUNT_NOT_SET = 0,
    CHUNK_COUNT = 7,
  }

  export enum PagerankCase { 
    _PAGERANK_NOT_SET = 0,
    PAGERANK = 10,
  }
}

export class RagDatasetParsingStatus extends jspb.Message {
  getUnstart(): number;
  setUnstart(value: number): RagDatasetParsingStatus;

  getRunning(): number;
  setRunning(value: number): RagDatasetParsingStatus;

  getCancel(): number;
  setCancel(value: number): RagDatasetParsingStatus;

  getDone(): number;
  setDone(value: number): RagDatasetParsingStatus;

  getFail(): number;
  setFail(value: number): RagDatasetParsingStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDatasetParsingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: RagDatasetParsingStatus): RagDatasetParsingStatus.AsObject;
  static serializeBinaryToWriter(message: RagDatasetParsingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDatasetParsingStatus;
  static deserializeBinaryFromReader(message: RagDatasetParsingStatus, reader: jspb.BinaryReader): RagDatasetParsingStatus;
}

export namespace RagDatasetParsingStatus {
  export type AsObject = {
    unstart: number,
    running: number,
    cancel: number,
    done: number,
    fail: number,
  }
}

export class RagUpdateDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagUpdateDatasetRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUpdateDatasetRequest;

  getName(): string;
  setName(value: string): RagUpdateDatasetRequest;

  getDescription(): string;
  setDescription(value: string): RagUpdateDatasetRequest;
  hasDescription(): boolean;
  clearDescription(): RagUpdateDatasetRequest;

  getAvatar(): string;
  setAvatar(value: string): RagUpdateDatasetRequest;
  hasAvatar(): boolean;
  clearAvatar(): RagUpdateDatasetRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagUpdateDatasetRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagUpdateDatasetRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagUpdateDatasetRequest;

  getPagerank(): number;
  setPagerank(value: number): RagUpdateDatasetRequest;
  hasPagerank(): boolean;
  clearPagerank(): RagUpdateDatasetRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDatasetRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): RagUpdateDatasetRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDatasetRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagUpdateDatasetRequest;

  getEmbeddingModelCcaiServiceName(): string;
  setEmbeddingModelCcaiServiceName(value: string): RagUpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateDatasetRequest): RagUpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateDatasetRequest;
  static deserializeBinaryFromReader(message: RagUpdateDatasetRequest, reader: jspb.BinaryReader): RagUpdateDatasetRequest;
}

export namespace RagUpdateDatasetRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    name: string,
    description?: string,
    avatar?: string,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    pagerank?: number,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    embeddingModelCcaiServiceName: string,
  }

  export enum DescriptionCase { 
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 5,
  }

  export enum AvatarCase { 
    _AVATAR_NOT_SET = 0,
    AVATAR = 6,
  }

  export enum PagerankCase { 
    _PAGERANK_NOT_SET = 0,
    PAGERANK = 9,
  }

  export enum UpdateMaskCase { 
    _UPDATE_MASK_NOT_SET = 0,
    UPDATE_MASK = 10,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 11,
  }
}

export class RagDeleteRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDeleteRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteRequest;
  clearIdsList(): RagDeleteRequest;
  addIds(value: string, index?: number): RagDeleteRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteRequest): RagDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteRequest;
  static deserializeBinaryFromReader(message: RagDeleteRequest, reader: jspb.BinaryReader): RagDeleteRequest;
}

export namespace RagDeleteRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class RagListDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListDatasetsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagListDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagListDatasetsRequest;

  getId(): string;
  setId(value: string): RagListDatasetsRequest;

  getName(): string;
  setName(value: string): RagListDatasetsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListDatasetsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListDatasetsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListDatasetsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListDatasetsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagListDatasetsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListDatasetsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListDatasetsRequest): RagListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListDatasetsRequest;
  static deserializeBinaryFromReader(message: RagListDatasetsRequest, reader: jspb.BinaryReader): RagListDatasetsRequest;
}

export namespace RagListDatasetsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    pageToken: string,
    id: string,
    name: string,
    orderby: string,
    desc?: boolean,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 7,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 8,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 9,
  }
}

export class RagDatasetList extends jspb.Message {
  getDatasetsList(): Array<RagDataset>;
  setDatasetsList(value: Array<RagDataset>): RagDatasetList;
  clearDatasetsList(): RagDatasetList;
  addDatasets(value?: RagDataset, index?: number): RagDataset;

  getTotal(): number;
  setTotal(value: number): RagDatasetList;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagDatasetList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: RagDatasetList): RagDatasetList.AsObject;
  static serializeBinaryToWriter(message: RagDatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDatasetList;
  static deserializeBinaryFromReader(message: RagDatasetList, reader: jspb.BinaryReader): RagDatasetList;
}

export namespace RagDatasetList {
  export type AsObject = {
    datasetsList: Array<RagDataset.AsObject>,
    total: number,
    nextPageToken: string,
  }
}

export class RagUploadDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUploadDocumentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagUploadDocumentRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUploadDocumentRequest;

  getMetadata(): RagFileMetadata | undefined;
  setMetadata(value?: RagFileMetadata): RagUploadDocumentRequest;
  hasMetadata(): boolean;
  clearMetadata(): RagUploadDocumentRequest;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RagUploadDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUploadDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUploadDocumentRequest): RagUploadDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagUploadDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUploadDocumentRequest;
  static deserializeBinaryFromReader(message: RagUploadDocumentRequest, reader: jspb.BinaryReader): RagUploadDocumentRequest;
}

export namespace RagUploadDocumentRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    metadata?: RagFileMetadata.AsObject,
    data: Uint8Array | string,
  }
}

export class RagDocument extends jspb.Message {
  getId(): string;
  setId(value: string): RagDocument;

  getThumbnail(): string;
  setThumbnail(value: string): RagDocument;

  getDatasetId(): string;
  setDatasetId(value: string): RagDocument;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagDocument;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagDocument;
  hasParserConfig(): boolean;
  clearParserConfig(): RagDocument;

  getType(): RagDocumentType;
  setType(value: RagDocumentType): RagDocument;

  getName(): string;
  setName(value: string): RagDocument;

  getSize(): number;
  setSize(value: number): RagDocument;
  hasSize(): boolean;
  clearSize(): RagDocument;

  getChunkCount(): number;
  setChunkCount(value: number): RagDocument;
  hasChunkCount(): boolean;
  clearChunkCount(): RagDocument;

  getTokenCount(): number;
  setTokenCount(value: number): RagDocument;
  hasTokenCount(): boolean;
  clearTokenCount(): RagDocument;

  getProgress(): number;
  setProgress(value: number): RagDocument;
  hasProgress(): boolean;
  clearProgress(): RagDocument;

  getProgressMsg(): string;
  setProgressMsg(value: string): RagDocument;

  getProcessBeginAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setProcessBeginAt(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;
  hasProcessBeginAt(): boolean;
  clearProcessBeginAt(): RagDocument;

  getProcessDuration(): number;
  setProcessDuration(value: number): RagDocument;
  hasProcessDuration(): boolean;
  clearProcessDuration(): RagDocument;

  getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
  setMetaFields(value?: google_protobuf_struct_pb.Struct): RagDocument;
  hasMetaFields(): boolean;
  clearMetaFields(): RagDocument;

  getRun(): RagDocumentStatus;
  setRun(value: RagDocumentStatus): RagDocument;

  getStatus(): string;
  setStatus(value: string): RagDocument;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;
  hasCreateTime(): boolean;
  clearCreateTime(): RagDocument;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagDocument;
  hasUpdateTime(): boolean;
  clearUpdateTime(): RagDocument;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocument.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocument): RagDocument.AsObject;
  static serializeBinaryToWriter(message: RagDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocument;
  static deserializeBinaryFromReader(message: RagDocument, reader: jspb.BinaryReader): RagDocument;
}

export namespace RagDocument {
  export type AsObject = {
    id: string,
    thumbnail: string,
    datasetId: string,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    type: RagDocumentType,
    name: string,
    size?: number,
    chunkCount?: number,
    tokenCount?: number,
    progress?: number,
    progressMsg: string,
    processBeginAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    processDuration?: number,
    metaFields?: google_protobuf_struct_pb.Struct.AsObject,
    run: RagDocumentStatus,
    status: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum SizeCase { 
    _SIZE_NOT_SET = 0,
    SIZE = 8,
  }

  export enum ChunkCountCase { 
    _CHUNK_COUNT_NOT_SET = 0,
    CHUNK_COUNT = 9,
  }

  export enum TokenCountCase { 
    _TOKEN_COUNT_NOT_SET = 0,
    TOKEN_COUNT = 10,
  }

  export enum ProgressCase { 
    _PROGRESS_NOT_SET = 0,
    PROGRESS = 11,
  }

  export enum ProcessDurationCase { 
    _PROCESS_DURATION_NOT_SET = 0,
    PROCESS_DURATION = 14,
  }
}

export class RagUpdateDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagUpdateDocumentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagUpdateDocumentRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagUpdateDocumentRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagUpdateDocumentRequest;

  getName(): string;
  setName(value: string): RagUpdateDocumentRequest;

  getChunkMethod(): RagChunkMethod;
  setChunkMethod(value: RagChunkMethod): RagUpdateDocumentRequest;

  getParserConfig(): RagParserConfig | undefined;
  setParserConfig(value?: RagParserConfig): RagUpdateDocumentRequest;
  hasParserConfig(): boolean;
  clearParserConfig(): RagUpdateDocumentRequest;

  getEnabled(): boolean;
  setEnabled(value: boolean): RagUpdateDocumentRequest;
  hasEnabled(): boolean;
  clearEnabled(): RagUpdateDocumentRequest;

  getMetaFields(): google_protobuf_struct_pb.Struct | undefined;
  setMetaFields(value?: google_protobuf_struct_pb.Struct): RagUpdateDocumentRequest;
  hasMetaFields(): boolean;
  clearMetaFields(): RagUpdateDocumentRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDocumentRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): RagUpdateDocumentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateDocumentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagUpdateDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateDocumentRequest): RagUpdateDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateDocumentRequest;
  static deserializeBinaryFromReader(message: RagUpdateDocumentRequest, reader: jspb.BinaryReader): RagUpdateDocumentRequest;
}

export namespace RagUpdateDocumentRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    documentId: string,
    name: string,
    chunkMethod: RagChunkMethod,
    parserConfig?: RagParserConfig.AsObject,
    enabled?: boolean,
    metaFields?: google_protobuf_struct_pb.Struct.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum EnabledCase { 
    _ENABLED_NOT_SET = 0,
    ENABLED = 8,
  }

  export enum UpdateMaskCase { 
    _UPDATE_MASK_NOT_SET = 0,
    UPDATE_MASK = 10,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 11,
  }
}

export class RagDownloadDocumentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDownloadDocumentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDownloadDocumentRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDownloadDocumentRequest;

  getDocumentId(): string;
  setDocumentId(value: string): RagDownloadDocumentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDownloadDocumentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDownloadDocumentRequest): RagDownloadDocumentRequest.AsObject;
  static serializeBinaryToWriter(message: RagDownloadDocumentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDownloadDocumentRequest;
  static deserializeBinaryFromReader(message: RagDownloadDocumentRequest, reader: jspb.BinaryReader): RagDownloadDocumentRequest;
}

export namespace RagDownloadDocumentRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    documentId: string,
  }
}

export class RagFileChunk extends jspb.Message {
  getMetadata(): RagFileMetadata | undefined;
  setMetadata(value?: RagFileMetadata): RagFileChunk;
  hasMetadata(): boolean;
  clearMetadata(): RagFileChunk;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): RagFileChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagFileChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagFileChunk): RagFileChunk.AsObject;
  static serializeBinaryToWriter(message: RagFileChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagFileChunk;
  static deserializeBinaryFromReader(message: RagFileChunk, reader: jspb.BinaryReader): RagFileChunk;
}

export namespace RagFileChunk {
  export type AsObject = {
    metadata?: RagFileMetadata.AsObject,
    data: Uint8Array | string,
  }
}

export class RagListDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListDocumentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagListDocumentsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagListDocumentsRequest;

  getId(): string;
  setId(value: string): RagListDocumentsRequest;

  getName(): string;
  setName(value: string): RagListDocumentsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagListDocumentsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListDocumentsRequest;

  getDesc(): boolean;
  setDesc(value: boolean): RagListDocumentsRequest;
  hasDesc(): boolean;
  clearDesc(): RagListDocumentsRequest;

  getKeywords(): string;
  setKeywords(value: string): RagListDocumentsRequest;

  getSuffixList(): Array<string>;
  setSuffixList(value: Array<string>): RagListDocumentsRequest;
  clearSuffixList(): RagListDocumentsRequest;
  addSuffix(value: string, index?: number): RagListDocumentsRequest;

  getRunStatusList(): Array<RagDocumentStatus>;
  setRunStatusList(value: Array<RagDocumentStatus>): RagListDocumentsRequest;
  clearRunStatusList(): RagListDocumentsRequest;
  addRunStatus(value: RagDocumentStatus, index?: number): RagListDocumentsRequest;

  getCreateTimeFrom(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTimeFrom(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;
  hasCreateTimeFrom(): boolean;
  clearCreateTimeFrom(): RagListDocumentsRequest;

  getCreateTimeTo(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTimeTo(value?: google_protobuf_timestamp_pb.Timestamp): RagListDocumentsRequest;
  hasCreateTimeTo(): boolean;
  clearCreateTimeTo(): RagListDocumentsRequest;

  getMetadataCondition(): RagMetadataConditions | undefined;
  setMetadataCondition(value?: RagMetadataConditions): RagListDocumentsRequest;
  hasMetadataCondition(): boolean;
  clearMetadataCondition(): RagListDocumentsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListDocumentsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagListDocumentsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListDocumentsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagListDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListDocumentsRequest): RagListDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListDocumentsRequest;
  static deserializeBinaryFromReader(message: RagListDocumentsRequest, reader: jspb.BinaryReader): RagListDocumentsRequest;
}

export namespace RagListDocumentsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    id: string,
    name: string,
    pageToken: string,
    orderby: string,
    desc?: boolean,
    keywords: string,
    suffixList: Array<string>,
    runStatusList: Array<RagDocumentStatus>,
    createTimeFrom?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createTimeTo?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataCondition?: RagMetadataConditions.AsObject,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum DescCase { 
    _DESC_NOT_SET = 0,
    DESC = 8,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 15,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 16,
  }
}

export class RagMetadataConditions extends jspb.Message {
  getLogic(): RagLogic;
  setLogic(value: RagLogic): RagMetadataConditions;

  getConditionsList(): Array<RagMetadataCondition>;
  setConditionsList(value: Array<RagMetadataCondition>): RagMetadataConditions;
  clearConditionsList(): RagMetadataConditions;
  addConditions(value?: RagMetadataCondition, index?: number): RagMetadataCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagMetadataConditions.AsObject;
  static toObject(includeInstance: boolean, msg: RagMetadataConditions): RagMetadataConditions.AsObject;
  static serializeBinaryToWriter(message: RagMetadataConditions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagMetadataConditions;
  static deserializeBinaryFromReader(message: RagMetadataConditions, reader: jspb.BinaryReader): RagMetadataConditions;
}

export namespace RagMetadataConditions {
  export type AsObject = {
    logic: RagLogic,
    conditionsList: Array<RagMetadataCondition.AsObject>,
  }
}

export class RagMetadataCondition extends jspb.Message {
  getName(): string;
  setName(value: string): RagMetadataCondition;

  getComparisonOperator(): RagComparisonOperator;
  setComparisonOperator(value: RagComparisonOperator): RagMetadataCondition;

  getValue(): string;
  setValue(value: string): RagMetadataCondition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagMetadataCondition.AsObject;
  static toObject(includeInstance: boolean, msg: RagMetadataCondition): RagMetadataCondition.AsObject;
  static serializeBinaryToWriter(message: RagMetadataCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagMetadataCondition;
  static deserializeBinaryFromReader(message: RagMetadataCondition, reader: jspb.BinaryReader): RagMetadataCondition;
}

export namespace RagMetadataCondition {
  export type AsObject = {
    name: string,
    comparisonOperator: RagComparisonOperator,
    value: string,
  }
}

export class RagDocumentList extends jspb.Message {
  getDocumentsList(): Array<RagDocument>;
  setDocumentsList(value: Array<RagDocument>): RagDocumentList;
  clearDocumentsList(): RagDocumentList;
  addDocuments(value?: RagDocument, index?: number): RagDocument;

  getTotal(): number;
  setTotal(value: number): RagDocumentList;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagDocumentList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocumentList.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocumentList): RagDocumentList.AsObject;
  static serializeBinaryToWriter(message: RagDocumentList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocumentList;
  static deserializeBinaryFromReader(message: RagDocumentList, reader: jspb.BinaryReader): RagDocumentList;
}

export namespace RagDocumentList {
  export type AsObject = {
    documentsList: Array<RagDocument.AsObject>,
    total: number,
    nextPageToken: string,
  }
}

export class RagDeleteDocumentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteDocumentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDeleteDocumentsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDeleteDocumentsRequest;

  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): RagDeleteDocumentsRequest;
  clearIdsList(): RagDeleteDocumentsRequest;
  addIds(value: string, index?: number): RagDeleteDocumentsRequest;

  getDeleteAll(): boolean;
  setDeleteAll(value: boolean): RagDeleteDocumentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteDocumentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteDocumentsRequest): RagDeleteDocumentsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteDocumentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteDocumentsRequest;
  static deserializeBinaryFromReader(message: RagDeleteDocumentsRequest, reader: jspb.BinaryReader): RagDeleteDocumentsRequest;
}

export namespace RagDeleteDocumentsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    idsList: Array<string>,
    deleteAll: boolean,
  }
}

export class RagDocumentIdsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDocumentIdsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDocumentIdsRequest;

  getDatasetId(): string;
  setDatasetId(value: string): RagDocumentIdsRequest;

  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): RagDocumentIdsRequest;
  clearDocumentIdsList(): RagDocumentIdsRequest;
  addDocumentIds(value: string, index?: number): RagDocumentIdsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocumentIdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocumentIdsRequest): RagDocumentIdsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDocumentIdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocumentIdsRequest;
  static deserializeBinaryFromReader(message: RagDocumentIdsRequest, reader: jspb.BinaryReader): RagDocumentIdsRequest;
}

export namespace RagDocumentIdsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetId: string,
    documentIdsList: Array<string>,
  }
}

export class RagRetrievalRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRetrievalRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagRetrievalRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagRetrievalRequest;
  clearDatasetIdsList(): RagRetrievalRequest;
  addDatasetIds(value: string, index?: number): RagRetrievalRequest;

  getPageToken(): string;
  setPageToken(value: string): RagRetrievalRequest;

  getQuestion(): string;
  setQuestion(value: string): RagRetrievalRequest;

  getDocumentIdsList(): Array<string>;
  setDocumentIdsList(value: Array<string>): RagRetrievalRequest;
  clearDocumentIdsList(): RagRetrievalRequest;
  addDocumentIds(value: string, index?: number): RagRetrievalRequest;

  getUseKg(): boolean;
  setUseKg(value: boolean): RagRetrievalRequest;
  hasUseKg(): boolean;
  clearUseKg(): RagRetrievalRequest;

  getCrossLanguagesList(): Array<string>;
  setCrossLanguagesList(value: Array<string>): RagRetrievalRequest;
  clearCrossLanguagesList(): RagRetrievalRequest;
  addCrossLanguages(value: string, index?: number): RagRetrievalRequest;

  getMetadataCondition(): RagMetadataConditions | undefined;
  setMetadataCondition(value?: RagMetadataConditions): RagRetrievalRequest;
  hasMetadataCondition(): boolean;
  clearMetadataCondition(): RagRetrievalRequest;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagRetrievalRequest;
  hasSimilarityThreshold(): boolean;
  clearSimilarityThreshold(): RagRetrievalRequest;

  getVectorSimilarityWeight(): number;
  setVectorSimilarityWeight(value: number): RagRetrievalRequest;
  hasVectorSimilarityWeight(): boolean;
  clearVectorSimilarityWeight(): RagRetrievalRequest;

  getTopK(): number;
  setTopK(value: number): RagRetrievalRequest;

  getHighlight(): boolean;
  setHighlight(value: boolean): RagRetrievalRequest;
  hasHighlight(): boolean;
  clearHighlight(): RagRetrievalRequest;

  getKeyword(): boolean;
  setKeyword(value: boolean): RagRetrievalRequest;
  hasKeyword(): boolean;
  clearKeyword(): RagRetrievalRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagRetrievalRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagRetrievalRequest;

  getRerankModelCcaiServiceName(): string;
  setRerankModelCcaiServiceName(value: string): RagRetrievalRequest;
  hasRerankModelCcaiServiceName(): boolean;
  clearRerankModelCcaiServiceName(): RagRetrievalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRetrievalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRetrievalRequest): RagRetrievalRequest.AsObject;
  static serializeBinaryToWriter(message: RagRetrievalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRetrievalRequest;
  static deserializeBinaryFromReader(message: RagRetrievalRequest, reader: jspb.BinaryReader): RagRetrievalRequest;
}

export namespace RagRetrievalRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    datasetIdsList: Array<string>,
    pageToken: string,
    question: string,
    documentIdsList: Array<string>,
    useKg?: boolean,
    crossLanguagesList: Array<string>,
    metadataCondition?: RagMetadataConditions.AsObject,
    similarityThreshold?: number,
    vectorSimilarityWeight?: number,
    topK: number,
    highlight?: boolean,
    keyword?: boolean,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    rerankModelCcaiServiceName?: string,
  }

  export enum UseKgCase { 
    _USE_KG_NOT_SET = 0,
    USE_KG = 7,
  }

  export enum SimilarityThresholdCase { 
    _SIMILARITY_THRESHOLD_NOT_SET = 0,
    SIMILARITY_THRESHOLD = 10,
  }

  export enum VectorSimilarityWeightCase { 
    _VECTOR_SIMILARITY_WEIGHT_NOT_SET = 0,
    VECTOR_SIMILARITY_WEIGHT = 11,
  }

  export enum HighlightCase { 
    _HIGHLIGHT_NOT_SET = 0,
    HIGHLIGHT = 13,
  }

  export enum KeywordCase { 
    _KEYWORD_NOT_SET = 0,
    KEYWORD = 14,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 15,
  }

  export enum RerankModelCcaiServiceNameCase { 
    _RERANK_MODEL_CCAI_SERVICE_NAME_NOT_SET = 0,
    RERANK_MODEL_CCAI_SERVICE_NAME = 16,
  }
}

export class RagRetrievalResponse extends jspb.Message {
  getChunksList(): Array<RagChunk>;
  setChunksList(value: Array<RagChunk>): RagRetrievalResponse;
  clearChunksList(): RagRetrievalResponse;
  addChunks(value?: RagChunk, index?: number): RagChunk;

  getDocAggsList(): Array<RagDocAgg>;
  setDocAggsList(value: Array<RagDocAgg>): RagRetrievalResponse;
  clearDocAggsList(): RagRetrievalResponse;
  addDocAggs(value?: RagDocAgg, index?: number): RagDocAgg;

  getTotal(): number;
  setTotal(value: number): RagRetrievalResponse;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagRetrievalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRetrievalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagRetrievalResponse): RagRetrievalResponse.AsObject;
  static serializeBinaryToWriter(message: RagRetrievalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRetrievalResponse;
  static deserializeBinaryFromReader(message: RagRetrievalResponse, reader: jspb.BinaryReader): RagRetrievalResponse;
}

export namespace RagRetrievalResponse {
  export type AsObject = {
    chunksList: Array<RagChunk.AsObject>,
    docAggsList: Array<RagDocAgg.AsObject>,
    total: number,
    nextPageToken: string,
  }
}

export class RagChunk extends jspb.Message {
  getId(): string;
  setId(value: string): RagChunk;

  getDatasetId(): string;
  setDatasetId(value: string): RagChunk;

  getDocumentId(): string;
  setDocumentId(value: string): RagChunk;

  getContent(): string;
  setContent(value: string): RagChunk;

  getImportantKeywordsList(): Array<string>;
  setImportantKeywordsList(value: Array<string>): RagChunk;
  clearImportantKeywordsList(): RagChunk;
  addImportantKeywords(value: string, index?: number): RagChunk;

  getQuestionsList(): Array<string>;
  setQuestionsList(value: Array<string>): RagChunk;
  clearQuestionsList(): RagChunk;
  addQuestions(value: string, index?: number): RagChunk;

  getImageId(): string;
  setImageId(value: string): RagChunk;

  getPositionsList(): Array<google_protobuf_struct_pb.ListValue>;
  setPositionsList(value: Array<google_protobuf_struct_pb.ListValue>): RagChunk;
  clearPositionsList(): RagChunk;
  addPositions(value?: google_protobuf_struct_pb.ListValue, index?: number): google_protobuf_struct_pb.ListValue;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): RagChunk;
  hasCreateTime(): boolean;
  clearCreateTime(): RagChunk;

  getDocumentKeyword(): string;
  setDocumentKeyword(value: string): RagChunk;

  getSimilarity(): number;
  setSimilarity(value: number): RagChunk;
  hasSimilarity(): boolean;
  clearSimilarity(): RagChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagChunk.AsObject;
  static toObject(includeInstance: boolean, msg: RagChunk): RagChunk.AsObject;
  static serializeBinaryToWriter(message: RagChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagChunk;
  static deserializeBinaryFromReader(message: RagChunk, reader: jspb.BinaryReader): RagChunk;
}

export namespace RagChunk {
  export type AsObject = {
    id: string,
    datasetId: string,
    documentId: string,
    content: string,
    importantKeywordsList: Array<string>,
    questionsList: Array<string>,
    imageId: string,
    positionsList: Array<google_protobuf_struct_pb.ListValue.AsObject>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    documentKeyword: string,
    similarity?: number,
  }

  export enum SimilarityCase { 
    _SIMILARITY_NOT_SET = 0,
    SIMILARITY = 11,
  }
}

export class RagDocAgg extends jspb.Message {
  getDocName(): string;
  setDocName(value: string): RagDocAgg;

  getDocId(): string;
  setDocId(value: string): RagDocAgg;

  getCount(): number;
  setCount(value: number): RagDocAgg;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDocAgg.AsObject;
  static toObject(includeInstance: boolean, msg: RagDocAgg): RagDocAgg.AsObject;
  static serializeBinaryToWriter(message: RagDocAgg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDocAgg;
  static deserializeBinaryFromReader(message: RagDocAgg, reader: jspb.BinaryReader): RagDocAgg;
}

export namespace RagDocAgg {
  export type AsObject = {
    docName: string,
    docId: string,
    count: number,
  }
}

export class RagCreateCrawlerRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagCreateCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagCreateCrawlerRequest;

  getCrawler(): RagCrawler | undefined;
  setCrawler(value?: RagCrawler): RagCreateCrawlerRequest;
  hasCrawler(): boolean;
  clearCrawler(): RagCreateCrawlerRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagCreateCrawlerRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagCreateCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCreateCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagCreateCrawlerRequest): RagCreateCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagCreateCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCreateCrawlerRequest;
  static deserializeBinaryFromReader(message: RagCreateCrawlerRequest, reader: jspb.BinaryReader): RagCreateCrawlerRequest;
}

export namespace RagCreateCrawlerRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawler?: RagCrawler.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 4,
  }
}

export class RagDeleteCrawlerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RagDeleteCrawlerRequest;

  getParent(): string;
  setParent(value: string): RagDeleteCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDeleteCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRequest): RagDeleteCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRequest;
  static deserializeBinaryFromReader(message: RagDeleteCrawlerRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRequest;
}

export namespace RagDeleteCrawlerRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class RagDeleteCrawlerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): RagDeleteCrawlerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): RagDeleteCrawlerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlerResponse): RagDeleteCrawlerResponse.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerResponse;
  static deserializeBinaryFromReader(message: RagDeleteCrawlerResponse, reader: jspb.BinaryReader): RagDeleteCrawlerResponse;
}

export namespace RagDeleteCrawlerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class RagDeleteCrawlersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteCrawlersRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDeleteCrawlersRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): RagDeleteCrawlersRequest;
  clearNamesList(): RagDeleteCrawlersRequest;
  addNames(value: string, index?: number): RagDeleteCrawlersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlersRequest): RagDeleteCrawlersRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersRequest;
  static deserializeBinaryFromReader(message: RagDeleteCrawlersRequest, reader: jspb.BinaryReader): RagDeleteCrawlersRequest;
}

export namespace RagDeleteCrawlersRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    namesList: Array<string>,
  }
}

export class RagDeleteCrawlersResponse extends jspb.Message {
  getDeleteCrawlerResponsesList(): Array<RagDeleteCrawlerResponse>;
  setDeleteCrawlerResponsesList(value: Array<RagDeleteCrawlerResponse>): RagDeleteCrawlersResponse;
  clearDeleteCrawlerResponsesList(): RagDeleteCrawlersResponse;
  addDeleteCrawlerResponses(value?: RagDeleteCrawlerResponse, index?: number): RagDeleteCrawlerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): RagDeleteCrawlersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlersResponse): RagDeleteCrawlersResponse.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlersResponse;
  static deserializeBinaryFromReader(message: RagDeleteCrawlersResponse, reader: jspb.BinaryReader): RagDeleteCrawlersResponse;
}

export namespace RagDeleteCrawlersResponse {
  export type AsObject = {
    deleteCrawlerResponsesList: Array<RagDeleteCrawlerResponse.AsObject>,
    errorMessage: string,
  }
}

export class RagListCrawlersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListCrawlersRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagListCrawlersRequest;

  getPageToken(): string;
  setPageToken(value: string): RagListCrawlersRequest;
  hasPageToken(): boolean;
  clearPageToken(): RagListCrawlersRequest;

  getDatasetName(): string;
  setDatasetName(value: string): RagListCrawlersRequest;
  hasDatasetName(): boolean;
  clearDatasetName(): RagListCrawlersRequest;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagListCrawlersRequest;
  hasCrawlerName(): boolean;
  clearCrawlerName(): RagListCrawlersRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListCrawlersRequest;
  hasOrderby(): boolean;
  clearOrderby(): RagListCrawlersRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlersRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagListCrawlersRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagListCrawlersRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagListCrawlersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListCrawlersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListCrawlersRequest): RagListCrawlersRequest.AsObject;
  static serializeBinaryToWriter(message: RagListCrawlersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListCrawlersRequest;
  static deserializeBinaryFromReader(message: RagListCrawlersRequest, reader: jspb.BinaryReader): RagListCrawlersRequest;
}

export namespace RagListCrawlersRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    pageToken?: string,
    datasetName?: string,
    crawlerName?: string,
    orderby?: string,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 3,
  }

  export enum DatasetNameCase { 
    _DATASET_NAME_NOT_SET = 0,
    DATASET_NAME = 4,
  }

  export enum CrawlerNameCase { 
    _CRAWLER_NAME_NOT_SET = 0,
    CRAWLER_NAME = 5,
  }

  export enum OrderbyCase { 
    _ORDERBY_NOT_SET = 0,
    ORDERBY = 6,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 7,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 8,
  }
}

export class RagListCrawlersResponse extends jspb.Message {
  getCrawlersList(): Array<RagCrawler>;
  setCrawlersList(value: Array<RagCrawler>): RagListCrawlersResponse;
  clearCrawlersList(): RagListCrawlersResponse;
  addCrawlers(value?: RagCrawler, index?: number): RagCrawler;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagListCrawlersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListCrawlersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagListCrawlersResponse): RagListCrawlersResponse.AsObject;
  static serializeBinaryToWriter(message: RagListCrawlersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListCrawlersResponse;
  static deserializeBinaryFromReader(message: RagListCrawlersResponse, reader: jspb.BinaryReader): RagListCrawlersResponse;
}

export namespace RagListCrawlersResponse {
  export type AsObject = {
    crawlersList: Array<RagCrawler.AsObject>,
    nextPageToken: string,
  }
}

export class RagGetCrawlerRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RagGetCrawlerRequest;

  getParent(): string;
  setParent(value: string): RagGetCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagGetCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerRequest): RagGetCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerRequest, reader: jspb.BinaryReader): RagGetCrawlerRequest;
}

export namespace RagGetCrawlerRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 4,
  }
}

export class RagUpdateCrawlerRequest extends jspb.Message {
  getCrawler(): RagCrawler | undefined;
  setCrawler(value?: RagCrawler): RagUpdateCrawlerRequest;
  hasCrawler(): boolean;
  clearCrawler(): RagUpdateCrawlerRequest;

  getParent(): string;
  setParent(value: string): RagUpdateCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagUpdateCrawlerRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): RagUpdateCrawlerRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagUpdateCrawlerRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagUpdateCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagUpdateCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagUpdateCrawlerRequest): RagUpdateCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagUpdateCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagUpdateCrawlerRequest;
  static deserializeBinaryFromReader(message: RagUpdateCrawlerRequest, reader: jspb.BinaryReader): RagUpdateCrawlerRequest;
}

export namespace RagUpdateCrawlerRequest {
  export type AsObject = {
    crawler?: RagCrawler.AsObject,
    parent: string,
    languageCode: string,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum UpdateMaskCase { 
    _UPDATE_MASK_NOT_SET = 0,
    UPDATE_MASK = 4,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 5,
  }
}

export class RagCrawler extends jspb.Message {
  getName(): string;
  setName(value: string): RagCrawler;

  getDisplayName(): string;
  setDisplayName(value: string): RagCrawler;
  hasDisplayName(): boolean;
  clearDisplayName(): RagCrawler;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;
  hasCreatedAt(): boolean;
  clearCreatedAt(): RagCrawler;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawler;
  hasModifiedAt(): boolean;
  clearModifiedAt(): RagCrawler;

  getCreatedBy(): string;
  setCreatedBy(value: string): RagCrawler;

  getModifiedBy(): string;
  setModifiedBy(value: string): RagCrawler;

  getCrawlerSources(): RagCrawlerSources | undefined;
  setCrawlerSources(value?: RagCrawlerSources): RagCrawler;
  hasCrawlerSources(): boolean;
  clearCrawlerSources(): RagCrawler;

  getCrawlerSeedUrlFilters(): RagCrawlerSeedUrlFilters | undefined;
  setCrawlerSeedUrlFilters(value?: RagCrawlerSeedUrlFilters): RagCrawler;
  hasCrawlerSeedUrlFilters(): boolean;
  clearCrawlerSeedUrlFilters(): RagCrawler;

  getCrawlerAuth(): RagCrawlerAuth | undefined;
  setCrawlerAuth(value?: RagCrawlerAuth): RagCrawler;
  hasCrawlerAuth(): boolean;
  clearCrawlerAuth(): RagCrawler;

  getCrawlerBrowserConfig(): RagCrawlerBrowserConfig | undefined;
  setCrawlerBrowserConfig(value?: RagCrawlerBrowserConfig): RagCrawler;
  hasCrawlerBrowserConfig(): boolean;
  clearCrawlerBrowserConfig(): RagCrawler;

  getCrawlerConfig(): RagCrawlerConfig | undefined;
  setCrawlerConfig(value?: RagCrawlerConfig): RagCrawler;
  hasCrawlerConfig(): boolean;
  clearCrawlerConfig(): RagCrawler;

  getRetryConfig(): RagCrawlerRetryConfig | undefined;
  setRetryConfig(value?: RagCrawlerRetryConfig): RagCrawler;
  hasRetryConfig(): boolean;
  clearRetryConfig(): RagCrawler;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawler.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawler): RagCrawler.AsObject;
  static serializeBinaryToWriter(message: RagCrawler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawler;
  static deserializeBinaryFromReader(message: RagCrawler, reader: jspb.BinaryReader): RagCrawler;
}

export namespace RagCrawler {
  export type AsObject = {
    name: string,
    displayName?: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
    crawlerSources?: RagCrawlerSources.AsObject,
    crawlerSeedUrlFilters?: RagCrawlerSeedUrlFilters.AsObject,
    crawlerAuth?: RagCrawlerAuth.AsObject,
    crawlerBrowserConfig?: RagCrawlerBrowserConfig.AsObject,
    crawlerConfig?: RagCrawlerConfig.AsObject,
    retryConfig?: RagCrawlerRetryConfig.AsObject,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 2,
  }

  export enum CrawlerSourcesCase { 
    _CRAWLER_SOURCES_NOT_SET = 0,
    CRAWLER_SOURCES = 7,
  }

  export enum CrawlerSeedUrlFiltersCase { 
    _CRAWLER_SEED_URL_FILTERS_NOT_SET = 0,
    CRAWLER_SEED_URL_FILTERS = 8,
  }

  export enum CrawlerAuthCase { 
    _CRAWLER_AUTH_NOT_SET = 0,
    CRAWLER_AUTH = 9,
  }

  export enum CrawlerBrowserConfigCase { 
    _CRAWLER_BROWSER_CONFIG_NOT_SET = 0,
    CRAWLER_BROWSER_CONFIG = 10,
  }

  export enum CrawlerConfigCase { 
    _CRAWLER_CONFIG_NOT_SET = 0,
    CRAWLER_CONFIG = 11,
  }

  export enum RetryConfigCase { 
    _RETRY_CONFIG_NOT_SET = 0,
    RETRY_CONFIG = 12,
  }
}

export class RagCrawlerSources extends jspb.Message {
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): RagCrawlerSources;
  clearUrlsList(): RagCrawlerSources;
  addUrls(value: string, index?: number): RagCrawlerSources;

  getSitemapsList(): Array<string>;
  setSitemapsList(value: Array<string>): RagCrawlerSources;
  clearSitemapsList(): RagCrawlerSources;
  addSitemaps(value: string, index?: number): RagCrawlerSources;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerSources.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerSources): RagCrawlerSources.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerSources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerSources;
  static deserializeBinaryFromReader(message: RagCrawlerSources, reader: jspb.BinaryReader): RagCrawlerSources;
}

export namespace RagCrawlerSources {
  export type AsObject = {
    urlsList: Array<string>,
    sitemapsList: Array<string>,
  }
}

export class RagCrawlerFilters extends jspb.Message {
  getAllowedDomainsList(): Array<string>;
  setAllowedDomainsList(value: Array<string>): RagCrawlerFilters;
  clearAllowedDomainsList(): RagCrawlerFilters;
  addAllowedDomains(value: string, index?: number): RagCrawlerFilters;

  getDisallowedDomainsList(): Array<string>;
  setDisallowedDomainsList(value: Array<string>): RagCrawlerFilters;
  clearDisallowedDomainsList(): RagCrawlerFilters;
  addDisallowedDomains(value: string, index?: number): RagCrawlerFilters;

  getAllowInternalLinks(): boolean;
  setAllowInternalLinks(value: boolean): RagCrawlerFilters;
  hasAllowInternalLinks(): boolean;
  clearAllowInternalLinks(): RagCrawlerFilters;

  getAllowExternalLinks(): boolean;
  setAllowExternalLinks(value: boolean): RagCrawlerFilters;
  hasAllowExternalLinks(): boolean;
  clearAllowExternalLinks(): RagCrawlerFilters;

  getAllowSocialMediaLinks(): boolean;
  setAllowSocialMediaLinks(value: boolean): RagCrawlerFilters;
  hasAllowSocialMediaLinks(): boolean;
  clearAllowSocialMediaLinks(): RagCrawlerFilters;

  getAllowedRegexList(): Array<string>;
  setAllowedRegexList(value: Array<string>): RagCrawlerFilters;
  clearAllowedRegexList(): RagCrawlerFilters;
  addAllowedRegex(value: string, index?: number): RagCrawlerFilters;

  getDisallowedRegexList(): Array<string>;
  setDisallowedRegexList(value: Array<string>): RagCrawlerFilters;
  clearDisallowedRegexList(): RagCrawlerFilters;
  addDisallowedRegex(value: string, index?: number): RagCrawlerFilters;

  getAllowedPathsList(): Array<string>;
  setAllowedPathsList(value: Array<string>): RagCrawlerFilters;
  clearAllowedPathsList(): RagCrawlerFilters;
  addAllowedPaths(value: string, index?: number): RagCrawlerFilters;

  getDisallowedPathsList(): Array<string>;
  setDisallowedPathsList(value: Array<string>): RagCrawlerFilters;
  clearDisallowedPathsList(): RagCrawlerFilters;
  addDisallowedPaths(value: string, index?: number): RagCrawlerFilters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerFilters.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerFilters): RagCrawlerFilters.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerFilters;
  static deserializeBinaryFromReader(message: RagCrawlerFilters, reader: jspb.BinaryReader): RagCrawlerFilters;
}

export namespace RagCrawlerFilters {
  export type AsObject = {
    allowedDomainsList: Array<string>,
    disallowedDomainsList: Array<string>,
    allowInternalLinks?: boolean,
    allowExternalLinks?: boolean,
    allowSocialMediaLinks?: boolean,
    allowedRegexList: Array<string>,
    disallowedRegexList: Array<string>,
    allowedPathsList: Array<string>,
    disallowedPathsList: Array<string>,
  }

  export enum AllowInternalLinksCase { 
    _ALLOW_INTERNAL_LINKS_NOT_SET = 0,
    ALLOW_INTERNAL_LINKS = 3,
  }

  export enum AllowExternalLinksCase { 
    _ALLOW_EXTERNAL_LINKS_NOT_SET = 0,
    ALLOW_EXTERNAL_LINKS = 4,
  }

  export enum AllowSocialMediaLinksCase { 
    _ALLOW_SOCIAL_MEDIA_LINKS_NOT_SET = 0,
    ALLOW_SOCIAL_MEDIA_LINKS = 5,
  }
}

export class RagCrawlerSeedUrlFilters extends jspb.Message {
  getAllowedRegexList(): Array<string>;
  setAllowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
  clearAllowedRegexList(): RagCrawlerSeedUrlFilters;
  addAllowedRegex(value: string, index?: number): RagCrawlerSeedUrlFilters;

  getDisallowedRegexList(): Array<string>;
  setDisallowedRegexList(value: Array<string>): RagCrawlerSeedUrlFilters;
  clearDisallowedRegexList(): RagCrawlerSeedUrlFilters;
  addDisallowedRegex(value: string, index?: number): RagCrawlerSeedUrlFilters;

  getAllowedDomainsList(): Array<string>;
  setAllowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
  clearAllowedDomainsList(): RagCrawlerSeedUrlFilters;
  addAllowedDomains(value: string, index?: number): RagCrawlerSeedUrlFilters;

  getDisallowedDomainsList(): Array<string>;
  setDisallowedDomainsList(value: Array<string>): RagCrawlerSeedUrlFilters;
  clearDisallowedDomainsList(): RagCrawlerSeedUrlFilters;
  addDisallowedDomains(value: string, index?: number): RagCrawlerSeedUrlFilters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerSeedUrlFilters.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerSeedUrlFilters): RagCrawlerSeedUrlFilters.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerSeedUrlFilters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerSeedUrlFilters;
  static deserializeBinaryFromReader(message: RagCrawlerSeedUrlFilters, reader: jspb.BinaryReader): RagCrawlerSeedUrlFilters;
}

export namespace RagCrawlerSeedUrlFilters {
  export type AsObject = {
    allowedRegexList: Array<string>,
    disallowedRegexList: Array<string>,
    allowedDomainsList: Array<string>,
    disallowedDomainsList: Array<string>,
  }
}

export class RagCrawlerAuth extends jspb.Message {
  getHttpAuth(): RagCrawlerHttpAuth | undefined;
  setHttpAuth(value?: RagCrawlerHttpAuth): RagCrawlerAuth;
  hasHttpAuth(): boolean;
  clearHttpAuth(): RagCrawlerAuth;

  getHtmlAuth(): RagCrawlerHtmlAuth | undefined;
  setHtmlAuth(value?: RagCrawlerHtmlAuth): RagCrawlerAuth;
  hasHtmlAuth(): boolean;
  clearHtmlAuth(): RagCrawlerAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerAuth.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerAuth): RagCrawlerAuth.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerAuth;
  static deserializeBinaryFromReader(message: RagCrawlerAuth, reader: jspb.BinaryReader): RagCrawlerAuth;
}

export namespace RagCrawlerAuth {
  export type AsObject = {
    httpAuth?: RagCrawlerHttpAuth.AsObject,
    htmlAuth?: RagCrawlerHtmlAuth.AsObject,
  }

  export enum HttpAuthCase { 
    _HTTP_AUTH_NOT_SET = 0,
    HTTP_AUTH = 1,
  }

  export enum HtmlAuthCase { 
    _HTML_AUTH_NOT_SET = 0,
    HTML_AUTH = 2,
  }
}

export class RagCrawlerHtmlAuth extends jspb.Message {
  getHtmlAuthBaseUrl(): string;
  setHtmlAuthBaseUrl(value: string): RagCrawlerHtmlAuth;
  hasHtmlAuthBaseUrl(): boolean;
  clearHtmlAuthBaseUrl(): RagCrawlerHtmlAuth;

  getHtmlAuthUsernameSelectorType(): RagCrawlerSelectorType;
  setHtmlAuthUsernameSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
  hasHtmlAuthUsernameSelectorType(): boolean;
  clearHtmlAuthUsernameSelectorType(): RagCrawlerHtmlAuth;

  getHtmlAuthUsernameSelector(): string;
  setHtmlAuthUsernameSelector(value: string): RagCrawlerHtmlAuth;
  hasHtmlAuthUsernameSelector(): boolean;
  clearHtmlAuthUsernameSelector(): RagCrawlerHtmlAuth;

  getHtmlAuthUsername(): string;
  setHtmlAuthUsername(value: string): RagCrawlerHtmlAuth;
  hasHtmlAuthUsername(): boolean;
  clearHtmlAuthUsername(): RagCrawlerHtmlAuth;

  getHtmlAuthPasswordSelectorType(): RagCrawlerSelectorType;
  setHtmlAuthPasswordSelectorType(value: RagCrawlerSelectorType): RagCrawlerHtmlAuth;
  hasHtmlAuthPasswordSelectorType(): boolean;
  clearHtmlAuthPasswordSelectorType(): RagCrawlerHtmlAuth;

  getHtmlAuthPasswordSelector(): string;
  setHtmlAuthPasswordSelector(value: string): RagCrawlerHtmlAuth;
  hasHtmlAuthPasswordSelector(): boolean;
  clearHtmlAuthPasswordSelector(): RagCrawlerHtmlAuth;

  getHtmlAuthPassword(): string;
  setHtmlAuthPassword(value: string): RagCrawlerHtmlAuth;
  hasHtmlAuthPassword(): boolean;
  clearHtmlAuthPassword(): RagCrawlerHtmlAuth;

  getAuthenticationExecutionType(): RagCrawlerAuthenticationExecutionType;
  setAuthenticationExecutionType(value: RagCrawlerAuthenticationExecutionType): RagCrawlerHtmlAuth;
  hasAuthenticationExecutionType(): boolean;
  clearAuthenticationExecutionType(): RagCrawlerHtmlAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerHtmlAuth.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerHtmlAuth): RagCrawlerHtmlAuth.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerHtmlAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerHtmlAuth;
  static deserializeBinaryFromReader(message: RagCrawlerHtmlAuth, reader: jspb.BinaryReader): RagCrawlerHtmlAuth;
}

export namespace RagCrawlerHtmlAuth {
  export type AsObject = {
    htmlAuthBaseUrl?: string,
    htmlAuthUsernameSelectorType?: RagCrawlerSelectorType,
    htmlAuthUsernameSelector?: string,
    htmlAuthUsername?: string,
    htmlAuthPasswordSelectorType?: RagCrawlerSelectorType,
    htmlAuthPasswordSelector?: string,
    htmlAuthPassword?: string,
    authenticationExecutionType?: RagCrawlerAuthenticationExecutionType,
  }

  export enum HtmlAuthBaseUrlCase { 
    _HTML_AUTH_BASE_URL_NOT_SET = 0,
    HTML_AUTH_BASE_URL = 1,
  }

  export enum HtmlAuthUsernameSelectorTypeCase { 
    _HTML_AUTH_USERNAME_SELECTOR_TYPE_NOT_SET = 0,
    HTML_AUTH_USERNAME_SELECTOR_TYPE = 2,
  }

  export enum HtmlAuthUsernameSelectorCase { 
    _HTML_AUTH_USERNAME_SELECTOR_NOT_SET = 0,
    HTML_AUTH_USERNAME_SELECTOR = 3,
  }

  export enum HtmlAuthUsernameCase { 
    _HTML_AUTH_USERNAME_NOT_SET = 0,
    HTML_AUTH_USERNAME = 4,
  }

  export enum HtmlAuthPasswordSelectorTypeCase { 
    _HTML_AUTH_PASSWORD_SELECTOR_TYPE_NOT_SET = 0,
    HTML_AUTH_PASSWORD_SELECTOR_TYPE = 5,
  }

  export enum HtmlAuthPasswordSelectorCase { 
    _HTML_AUTH_PASSWORD_SELECTOR_NOT_SET = 0,
    HTML_AUTH_PASSWORD_SELECTOR = 6,
  }

  export enum HtmlAuthPasswordCase { 
    _HTML_AUTH_PASSWORD_NOT_SET = 0,
    HTML_AUTH_PASSWORD = 7,
  }

  export enum AuthenticationExecutionTypeCase { 
    _AUTHENTICATION_EXECUTION_TYPE_NOT_SET = 0,
    AUTHENTICATION_EXECUTION_TYPE = 8,
  }
}

export class RagCrawlerHttpAuth extends jspb.Message {
  getHttpAuthUsername(): string;
  setHttpAuthUsername(value: string): RagCrawlerHttpAuth;

  getHttpAuthPassword(): string;
  setHttpAuthPassword(value: string): RagCrawlerHttpAuth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerHttpAuth.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerHttpAuth): RagCrawlerHttpAuth.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerHttpAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerHttpAuth;
  static deserializeBinaryFromReader(message: RagCrawlerHttpAuth, reader: jspb.BinaryReader): RagCrawlerHttpAuth;
}

export namespace RagCrawlerHttpAuth {
  export type AsObject = {
    httpAuthUsername: string,
    httpAuthPassword: string,
  }
}

export class RagCrawlerBrowserConfig extends jspb.Message {
  getCrawlerHeadersList(): Array<google_protobuf_struct_pb.Struct>;
  setCrawlerHeadersList(value: Array<google_protobuf_struct_pb.Struct>): RagCrawlerBrowserConfig;
  clearCrawlerHeadersList(): RagCrawlerBrowserConfig;
  addCrawlerHeaders(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  getCrawlerCookiesList(): Array<RagCrawlerCookie>;
  setCrawlerCookiesList(value: Array<RagCrawlerCookie>): RagCrawlerBrowserConfig;
  clearCrawlerCookiesList(): RagCrawlerBrowserConfig;
  addCrawlerCookies(value?: RagCrawlerCookie, index?: number): RagCrawlerCookie;

  getCrawlerUserAgent(): string;
  setCrawlerUserAgent(value: string): RagCrawlerBrowserConfig;
  hasCrawlerUserAgent(): boolean;
  clearCrawlerUserAgent(): RagCrawlerBrowserConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerBrowserConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerBrowserConfig): RagCrawlerBrowserConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerBrowserConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerBrowserConfig;
  static deserializeBinaryFromReader(message: RagCrawlerBrowserConfig, reader: jspb.BinaryReader): RagCrawlerBrowserConfig;
}

export namespace RagCrawlerBrowserConfig {
  export type AsObject = {
    crawlerHeadersList: Array<google_protobuf_struct_pb.Struct.AsObject>,
    crawlerCookiesList: Array<RagCrawlerCookie.AsObject>,
    crawlerUserAgent?: string,
  }

  export enum CrawlerUserAgentCase { 
    _CRAWLER_USER_AGENT_NOT_SET = 0,
    CRAWLER_USER_AGENT = 3,
  }
}

export class RagCrawlerCookie extends jspb.Message {
  getCookieName(): string;
  setCookieName(value: string): RagCrawlerCookie;

  getCookieValue(): string;
  setCookieValue(value: string): RagCrawlerCookie;

  getCookieDomain(): string;
  setCookieDomain(value: string): RagCrawlerCookie;
  hasCookieDomain(): boolean;
  clearCookieDomain(): RagCrawlerCookie;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerCookie.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerCookie): RagCrawlerCookie.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerCookie, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerCookie;
  static deserializeBinaryFromReader(message: RagCrawlerCookie, reader: jspb.BinaryReader): RagCrawlerCookie;
}

export namespace RagCrawlerCookie {
  export type AsObject = {
    cookieName: string,
    cookieValue: string,
    cookieDomain?: string,
  }

  export enum CookieDomainCase { 
    _COOKIE_DOMAIN_NOT_SET = 0,
    COOKIE_DOMAIN = 3,
  }
}

export class RagCrawlerConcurrencyConfig extends jspb.Message {
  getMaxConcurrentRequests(): number;
  setMaxConcurrentRequests(value: number): RagCrawlerConcurrencyConfig;
  hasMaxConcurrentRequests(): boolean;
  clearMaxConcurrentRequests(): RagCrawlerConcurrencyConfig;

  getSlowCrawl(): boolean;
  setSlowCrawl(value: boolean): RagCrawlerConcurrencyConfig;
  hasSlowCrawl(): boolean;
  clearSlowCrawl(): RagCrawlerConcurrencyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerConcurrencyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerConcurrencyConfig): RagCrawlerConcurrencyConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerConcurrencyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerConcurrencyConfig;
  static deserializeBinaryFromReader(message: RagCrawlerConcurrencyConfig, reader: jspb.BinaryReader): RagCrawlerConcurrencyConfig;
}

export namespace RagCrawlerConcurrencyConfig {
  export type AsObject = {
    maxConcurrentRequests?: number,
    slowCrawl?: boolean,
  }

  export enum MaxConcurrentRequestsCase { 
    _MAX_CONCURRENT_REQUESTS_NOT_SET = 0,
    MAX_CONCURRENT_REQUESTS = 1,
  }

  export enum SlowCrawlCase { 
    _SLOW_CRAWL_NOT_SET = 0,
    SLOW_CRAWL = 2,
  }
}

export class RagCrawlerConfig extends jspb.Message {
  getConcurrencyConfig(): RagCrawlerConcurrencyConfig | undefined;
  setConcurrencyConfig(value?: RagCrawlerConcurrencyConfig): RagCrawlerConfig;
  hasConcurrencyConfig(): boolean;
  clearConcurrencyConfig(): RagCrawlerConfig;

  getDeepCrawlerConfig(): RagCrawlerDeepCrawlerConfig | undefined;
  setDeepCrawlerConfig(value?: RagCrawlerDeepCrawlerConfig): RagCrawlerConfig;
  hasDeepCrawlerConfig(): boolean;
  clearDeepCrawlerConfig(): RagCrawlerConfig;

  getOutputConfig(): RagCrawlerResultsConfig | undefined;
  setOutputConfig(value?: RagCrawlerResultsConfig): RagCrawlerConfig;
  hasOutputConfig(): boolean;
  clearOutputConfig(): RagCrawlerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerConfig): RagCrawlerConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerConfig;
  static deserializeBinaryFromReader(message: RagCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerConfig;
}

export namespace RagCrawlerConfig {
  export type AsObject = {
    concurrencyConfig?: RagCrawlerConcurrencyConfig.AsObject,
    deepCrawlerConfig?: RagCrawlerDeepCrawlerConfig.AsObject,
    outputConfig?: RagCrawlerResultsConfig.AsObject,
  }

  export enum ConcurrencyConfigCase { 
    _CONCURRENCY_CONFIG_NOT_SET = 0,
    CONCURRENCY_CONFIG = 1,
  }

  export enum DeepCrawlerConfigCase { 
    _DEEP_CRAWLER_CONFIG_NOT_SET = 0,
    DEEP_CRAWLER_CONFIG = 2,
  }

  export enum OutputConfigCase { 
    _OUTPUT_CONFIG_NOT_SET = 0,
    OUTPUT_CONFIG = 3,
  }
}

export class RagCrawlerDeepCrawlerConfig extends jspb.Message {
  getIsActive(): boolean;
  setIsActive(value: boolean): RagCrawlerDeepCrawlerConfig;
  hasIsActive(): boolean;
  clearIsActive(): RagCrawlerDeepCrawlerConfig;

  getCrawlStrategy(): RagCrawlerCrawlStrategy;
  setCrawlStrategy(value: RagCrawlerCrawlStrategy): RagCrawlerDeepCrawlerConfig;
  hasCrawlStrategy(): boolean;
  clearCrawlStrategy(): RagCrawlerDeepCrawlerConfig;

  getMaxDepth(): number;
  setMaxDepth(value: number): RagCrawlerDeepCrawlerConfig;
  hasMaxDepth(): boolean;
  clearMaxDepth(): RagCrawlerDeepCrawlerConfig;

  getMaxPages(): number;
  setMaxPages(value: number): RagCrawlerDeepCrawlerConfig;
  hasMaxPages(): boolean;
  clearMaxPages(): RagCrawlerDeepCrawlerConfig;

  getDeepCrawlerFilters(): RagCrawlerFilters | undefined;
  setDeepCrawlerFilters(value?: RagCrawlerFilters): RagCrawlerDeepCrawlerConfig;
  hasDeepCrawlerFilters(): boolean;
  clearDeepCrawlerFilters(): RagCrawlerDeepCrawlerConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerDeepCrawlerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerDeepCrawlerConfig): RagCrawlerDeepCrawlerConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerDeepCrawlerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerDeepCrawlerConfig;
  static deserializeBinaryFromReader(message: RagCrawlerDeepCrawlerConfig, reader: jspb.BinaryReader): RagCrawlerDeepCrawlerConfig;
}

export namespace RagCrawlerDeepCrawlerConfig {
  export type AsObject = {
    isActive?: boolean,
    crawlStrategy?: RagCrawlerCrawlStrategy,
    maxDepth?: number,
    maxPages?: number,
    deepCrawlerFilters?: RagCrawlerFilters.AsObject,
  }

  export enum IsActiveCase { 
    _IS_ACTIVE_NOT_SET = 0,
    IS_ACTIVE = 1,
  }

  export enum CrawlStrategyCase { 
    _CRAWL_STRATEGY_NOT_SET = 0,
    CRAWL_STRATEGY = 2,
  }

  export enum MaxDepthCase { 
    _MAX_DEPTH_NOT_SET = 0,
    MAX_DEPTH = 3,
  }

  export enum MaxPagesCase { 
    _MAX_PAGES_NOT_SET = 0,
    MAX_PAGES = 4,
  }

  export enum DeepCrawlerFiltersCase { 
    _DEEP_CRAWLER_FILTERS_NOT_SET = 0,
    DEEP_CRAWLER_FILTERS = 5,
  }
}

export class RagCrawlerResultsConfig extends jspb.Message {
  getInjectFrontmatter(): boolean;
  setInjectFrontmatter(value: boolean): RagCrawlerResultsConfig;
  hasInjectFrontmatter(): boolean;
  clearInjectFrontmatter(): RagCrawlerResultsConfig;

  getMetaDataExtractorsList(): Array<RagCrawlerMetaDataExtractor>;
  setMetaDataExtractorsList(value: Array<RagCrawlerMetaDataExtractor>): RagCrawlerResultsConfig;
  clearMetaDataExtractorsList(): RagCrawlerResultsConfig;
  addMetaDataExtractors(value?: RagCrawlerMetaDataExtractor, index?: number): RagCrawlerMetaDataExtractor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerResultsConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerResultsConfig): RagCrawlerResultsConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerResultsConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerResultsConfig;
  static deserializeBinaryFromReader(message: RagCrawlerResultsConfig, reader: jspb.BinaryReader): RagCrawlerResultsConfig;
}

export namespace RagCrawlerResultsConfig {
  export type AsObject = {
    injectFrontmatter?: boolean,
    metaDataExtractorsList: Array<RagCrawlerMetaDataExtractor.AsObject>,
  }

  export enum InjectFrontmatterCase { 
    _INJECT_FRONTMATTER_NOT_SET = 0,
    INJECT_FRONTMATTER = 1,
  }
}

export class RagCrawlerMetaDataExtractor extends jspb.Message {
  getType(): RagCrawlerMetaDataExtractorType;
  setType(value: RagCrawlerMetaDataExtractorType): RagCrawlerMetaDataExtractor;
  hasType(): boolean;
  clearType(): RagCrawlerMetaDataExtractor;

  getValue(): string;
  setValue(value: string): RagCrawlerMetaDataExtractor;
  hasValue(): boolean;
  clearValue(): RagCrawlerMetaDataExtractor;

  getKey(): string;
  setKey(value: string): RagCrawlerMetaDataExtractor;
  hasKey(): boolean;
  clearKey(): RagCrawlerMetaDataExtractor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerMetaDataExtractor.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerMetaDataExtractor): RagCrawlerMetaDataExtractor.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerMetaDataExtractor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerMetaDataExtractor;
  static deserializeBinaryFromReader(message: RagCrawlerMetaDataExtractor, reader: jspb.BinaryReader): RagCrawlerMetaDataExtractor;
}

export namespace RagCrawlerMetaDataExtractor {
  export type AsObject = {
    type?: RagCrawlerMetaDataExtractorType,
    value?: string,
    key?: string,
  }

  export enum TypeCase { 
    _TYPE_NOT_SET = 0,
    TYPE = 1,
  }

  export enum ValueCase { 
    _VALUE_NOT_SET = 0,
    VALUE = 2,
  }

  export enum KeyCase { 
    _KEY_NOT_SET = 0,
    KEY = 3,
  }
}

export class RagCrawlerRetryConfig extends jspb.Message {
  getPageLoadTimeoutSeconds(): number;
  setPageLoadTimeoutSeconds(value: number): RagCrawlerRetryConfig;
  hasPageLoadTimeoutSeconds(): boolean;
  clearPageLoadTimeoutSeconds(): RagCrawlerRetryConfig;

  getRetryMaxAttempts(): number;
  setRetryMaxAttempts(value: number): RagCrawlerRetryConfig;
  hasRetryMaxAttempts(): boolean;
  clearRetryMaxAttempts(): RagCrawlerRetryConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerRetryConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerRetryConfig): RagCrawlerRetryConfig.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerRetryConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerRetryConfig;
  static deserializeBinaryFromReader(message: RagCrawlerRetryConfig, reader: jspb.BinaryReader): RagCrawlerRetryConfig;
}

export namespace RagCrawlerRetryConfig {
  export type AsObject = {
    pageLoadTimeoutSeconds?: number,
    retryMaxAttempts?: number,
  }

  export enum PageLoadTimeoutSecondsCase { 
    _PAGE_LOAD_TIMEOUT_SECONDS_NOT_SET = 0,
    PAGE_LOAD_TIMEOUT_SECONDS = 1,
  }

  export enum RetryMaxAttemptsCase { 
    _RETRY_MAX_ATTEMPTS_NOT_SET = 0,
    RETRY_MAX_ATTEMPTS = 2,
  }
}

export class RagCrawlerContentResult extends jspb.Message {
  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): RagCrawlerContentResult;
  hasMetadata(): boolean;
  clearMetadata(): RagCrawlerContentResult;

  getMarkdown(): string;
  setMarkdown(value: string): RagCrawlerContentResult;
  hasMarkdown(): boolean;
  clearMarkdown(): RagCrawlerContentResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerContentResult.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerContentResult): RagCrawlerContentResult.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerContentResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerContentResult;
  static deserializeBinaryFromReader(message: RagCrawlerContentResult, reader: jspb.BinaryReader): RagCrawlerContentResult;
}

export namespace RagCrawlerContentResult {
  export type AsObject = {
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    markdown?: string,
  }

  export enum MetadataCase { 
    _METADATA_NOT_SET = 0,
    METADATA = 1,
  }

  export enum MarkdownCase { 
    _MARKDOWN_NOT_SET = 0,
    MARKDOWN = 2,
  }
}

export class RagCrawlerExecutionInfo extends jspb.Message {
  getSslCertificate(): google_protobuf_struct_pb.Struct | undefined;
  setSslCertificate(value?: google_protobuf_struct_pb.Struct): RagCrawlerExecutionInfo;
  hasSslCertificate(): boolean;
  clearSslCertificate(): RagCrawlerExecutionInfo;

  getSuccess(): boolean;
  setSuccess(value: boolean): RagCrawlerExecutionInfo;
  hasSuccess(): boolean;
  clearSuccess(): RagCrawlerExecutionInfo;

  getErrorMessage(): string;
  setErrorMessage(value: string): RagCrawlerExecutionInfo;
  hasErrorMessage(): boolean;
  clearErrorMessage(): RagCrawlerExecutionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerExecutionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerExecutionInfo): RagCrawlerExecutionInfo.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerExecutionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerExecutionInfo;
  static deserializeBinaryFromReader(message: RagCrawlerExecutionInfo, reader: jspb.BinaryReader): RagCrawlerExecutionInfo;
}

export namespace RagCrawlerExecutionInfo {
  export type AsObject = {
    sslCertificate?: google_protobuf_struct_pb.Struct.AsObject,
    success?: boolean,
    errorMessage?: string,
  }

  export enum SslCertificateCase { 
    _SSL_CERTIFICATE_NOT_SET = 0,
    SSL_CERTIFICATE = 1,
  }

  export enum SuccessCase { 
    _SUCCESS_NOT_SET = 0,
    SUCCESS = 2,
  }

  export enum ErrorMessageCase { 
    _ERROR_MESSAGE_NOT_SET = 0,
    ERROR_MESSAGE = 3,
  }
}

export class RagCrawlerResult extends jspb.Message {
  getName(): string;
  setName(value: string): RagCrawlerResult;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagCrawlerResult;

  getOperationName(): string;
  setOperationName(value: string): RagCrawlerResult;

  getSourceUrl(): string;
  setSourceUrl(value: string): RagCrawlerResult;

  getFileResource(): ondewo_nlu_session_pb.FileResource | undefined;
  setFileResource(value?: ondewo_nlu_session_pb.FileResource): RagCrawlerResult;
  hasFileResource(): boolean;
  clearFileResource(): RagCrawlerResult;

  getLastCrawledDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastCrawledDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;
  hasLastCrawledDate(): boolean;
  clearLastCrawledDate(): RagCrawlerResult;

  getContentResult(): RagCrawlerContentResult | undefined;
  setContentResult(value?: RagCrawlerContentResult): RagCrawlerResult;
  hasContentResult(): boolean;
  clearContentResult(): RagCrawlerResult;

  getPageLastUpdatedDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPageLastUpdatedDate(value?: google_protobuf_timestamp_pb.Timestamp): RagCrawlerResult;
  hasPageLastUpdatedDate(): boolean;
  clearPageLastUpdatedDate(): RagCrawlerResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagCrawlerResult.AsObject;
  static toObject(includeInstance: boolean, msg: RagCrawlerResult): RagCrawlerResult.AsObject;
  static serializeBinaryToWriter(message: RagCrawlerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagCrawlerResult;
  static deserializeBinaryFromReader(message: RagCrawlerResult, reader: jspb.BinaryReader): RagCrawlerResult;
}

export namespace RagCrawlerResult {
  export type AsObject = {
    name: string,
    crawlerName: string,
    operationName: string,
    sourceUrl: string,
    fileResource?: ondewo_nlu_session_pb.FileResource.AsObject,
    lastCrawledDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contentResult?: RagCrawlerContentResult.AsObject,
    pageLastUpdatedDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ContentResultCase { 
    _CONTENT_RESULT_NOT_SET = 0,
    CONTENT_RESULT = 7,
  }

  export enum PageLastUpdatedDateCase { 
    _PAGE_LAST_UPDATED_DATE_NOT_SET = 0,
    PAGE_LAST_UPDATED_DATE = 8,
  }
}

export class RagStartCrawlerRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagStartCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagStartCrawlerRequest;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagStartCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagStartCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagStartCrawlerRequest): RagStartCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagStartCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagStartCrawlerRequest;
  static deserializeBinaryFromReader(message: RagStartCrawlerRequest, reader: jspb.BinaryReader): RagStartCrawlerRequest;
}

export namespace RagStartCrawlerRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerName: string,
  }
}

export class RagGetCrawlerRunRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetCrawlerRunRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerRunRequest;

  getCrawlerRunName(): string;
  setCrawlerRunName(value: string): RagGetCrawlerRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerRunRequest): RagGetCrawlerRunRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerRunRequest, reader: jspb.BinaryReader): RagGetCrawlerRunRequest;
}

export namespace RagGetCrawlerRunRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerRunName: string,
  }
}

export class RagListCrawlerRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagListCrawlerRunsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagListCrawlerRunsRequest;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagListCrawlerRunsRequest;
  hasCrawlerName(): boolean;
  clearCrawlerName(): RagListCrawlerRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagListCrawlerRunsRequest;
  hasPageToken(): boolean;
  clearPageToken(): RagListCrawlerRunsRequest;

  getStatus(): ondewo_nlu_operation_metadata_pb.OperationMetadata.Status;
  setStatus(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status): RagListCrawlerRunsRequest;
  hasStatus(): boolean;
  clearStatus(): RagListCrawlerRunsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagListCrawlerRunsRequest;
  hasOrderby(): boolean;
  clearOrderby(): RagListCrawlerRunsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagListCrawlerRunsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagListCrawlerRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListCrawlerRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagListCrawlerRunsRequest): RagListCrawlerRunsRequest.AsObject;
  static serializeBinaryToWriter(message: RagListCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsRequest;
  static deserializeBinaryFromReader(message: RagListCrawlerRunsRequest, reader: jspb.BinaryReader): RagListCrawlerRunsRequest;
}

export namespace RagListCrawlerRunsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerName?: string,
    pageToken?: string,
    status?: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status,
    orderby?: string,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
  }

  export enum CrawlerNameCase { 
    _CRAWLER_NAME_NOT_SET = 0,
    CRAWLER_NAME = 3,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 4,
  }

  export enum StatusCase { 
    _STATUS_NOT_SET = 0,
    STATUS = 5,
  }

  export enum OrderbyCase { 
    _ORDERBY_NOT_SET = 0,
    ORDERBY = 6,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 7,
  }
}

export class RagListCrawlerRunsResponse extends jspb.Message {
  getCrawlerRunsList(): Array<ondewo_nlu_operations_pb.Operation>;
  setCrawlerRunsList(value: Array<ondewo_nlu_operations_pb.Operation>): RagListCrawlerRunsResponse;
  clearCrawlerRunsList(): RagListCrawlerRunsResponse;
  addCrawlerRuns(value?: ondewo_nlu_operations_pb.Operation, index?: number): ondewo_nlu_operations_pb.Operation;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagListCrawlerRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagListCrawlerRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagListCrawlerRunsResponse): RagListCrawlerRunsResponse.AsObject;
  static serializeBinaryToWriter(message: RagListCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagListCrawlerRunsResponse;
  static deserializeBinaryFromReader(message: RagListCrawlerRunsResponse, reader: jspb.BinaryReader): RagListCrawlerRunsResponse;
}

export namespace RagListCrawlerRunsResponse {
  export type AsObject = {
    crawlerRunsList: Array<ondewo_nlu_operations_pb.Operation.AsObject>,
    nextPageToken: string,
  }
}

export class RagDeleteCrawlerRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagDeleteCrawlerRunsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagDeleteCrawlerRunsRequest;

  getCrawlerRunNamesList(): Array<string>;
  setCrawlerRunNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
  clearCrawlerRunNamesList(): RagDeleteCrawlerRunsRequest;
  addCrawlerRunNames(value: string, index?: number): RagDeleteCrawlerRunsRequest;

  getCrawlerNamesList(): Array<string>;
  setCrawlerNamesList(value: Array<string>): RagDeleteCrawlerRunsRequest;
  clearCrawlerNamesList(): RagDeleteCrawlerRunsRequest;
  addCrawlerNames(value: string, index?: number): RagDeleteCrawlerRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlerRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsRequest): RagDeleteCrawlerRunsRequest.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlerRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsRequest;
  static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsRequest, reader: jspb.BinaryReader): RagDeleteCrawlerRunsRequest;
}

export namespace RagDeleteCrawlerRunsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerRunNamesList: Array<string>,
    crawlerNamesList: Array<string>,
  }
}

export class RagDeleteCrawlerRunsResponse extends jspb.Message {
  getDeletedCount(): number;
  setDeletedCount(value: number): RagDeleteCrawlerRunsResponse;

  getDeletedRunNamesList(): Array<string>;
  setDeletedRunNamesList(value: Array<string>): RagDeleteCrawlerRunsResponse;
  clearDeletedRunNamesList(): RagDeleteCrawlerRunsResponse;
  addDeletedRunNames(value: string, index?: number): RagDeleteCrawlerRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagDeleteCrawlerRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagDeleteCrawlerRunsResponse): RagDeleteCrawlerRunsResponse.AsObject;
  static serializeBinaryToWriter(message: RagDeleteCrawlerRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagDeleteCrawlerRunsResponse;
  static deserializeBinaryFromReader(message: RagDeleteCrawlerRunsResponse, reader: jspb.BinaryReader): RagDeleteCrawlerRunsResponse;
}

export namespace RagDeleteCrawlerRunsResponse {
  export type AsObject = {
    deletedCount: number,
    deletedRunNamesList: Array<string>,
  }
}

export class RagStopCrawlerRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagStopCrawlerRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagStopCrawlerRequest;

  getName(): string;
  setName(value: string): RagStopCrawlerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagStopCrawlerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagStopCrawlerRequest): RagStopCrawlerRequest.AsObject;
  static serializeBinaryToWriter(message: RagStopCrawlerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagStopCrawlerRequest;
  static deserializeBinaryFromReader(message: RagStopCrawlerRequest, reader: jspb.BinaryReader): RagStopCrawlerRequest;
}

export namespace RagStopCrawlerRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    name: string,
  }
}

export class RagStopCrawlerResponse extends jspb.Message {
  getName(): string;
  setName(value: string): RagStopCrawlerResponse;

  getErrorMessage(): string;
  setErrorMessage(value: string): RagStopCrawlerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagStopCrawlerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagStopCrawlerResponse): RagStopCrawlerResponse.AsObject;
  static serializeBinaryToWriter(message: RagStopCrawlerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagStopCrawlerResponse;
  static deserializeBinaryFromReader(message: RagStopCrawlerResponse, reader: jspb.BinaryReader): RagStopCrawlerResponse;
}

export namespace RagStopCrawlerResponse {
  export type AsObject = {
    name: string,
    errorMessage: string,
  }
}

export class RagGetCrawlerResultsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetCrawlerResultsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerResultsRequest;

  getOperationName(): string;
  setOperationName(value: string): RagGetCrawlerResultsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagGetCrawlerResultsRequest;
  hasPageToken(): boolean;
  clearPageToken(): RagGetCrawlerResultsRequest;

  getUrlQuery(): string;
  setUrlQuery(value: string): RagGetCrawlerResultsRequest;
  hasUrlQuery(): boolean;
  clearUrlQuery(): RagGetCrawlerResultsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerResultsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagGetCrawlerResultsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagGetCrawlerResultsRequest;
  hasOrderby(): boolean;
  clearOrderby(): RagGetCrawlerResultsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerResultsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagGetCrawlerResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsRequest): RagGetCrawlerResultsRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerResultsRequest, reader: jspb.BinaryReader): RagGetCrawlerResultsRequest;
}

export namespace RagGetCrawlerResultsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    operationName: string,
    pageToken?: string,
    urlQuery?: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orderby?: string,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 4,
  }

  export enum UrlQueryCase { 
    _URL_QUERY_NOT_SET = 0,
    URL_QUERY = 5,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 6,
  }

  export enum OrderbyCase { 
    _ORDERBY_NOT_SET = 0,
    ORDERBY = 7,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 8,
  }
}

export class RagGetCrawlerResultsResponse extends jspb.Message {
  getCrawlerResultsList(): Array<RagCrawlerResult>;
  setCrawlerResultsList(value: Array<RagCrawlerResult>): RagGetCrawlerResultsResponse;
  clearCrawlerResultsList(): RagGetCrawlerResultsResponse;
  addCrawlerResults(value?: RagCrawlerResult, index?: number): RagCrawlerResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagGetCrawlerResultsResponse;

  getTotalSize(): number;
  setTotalSize(value: number): RagGetCrawlerResultsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerResultsResponse): RagGetCrawlerResultsResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultsResponse;
  static deserializeBinaryFromReader(message: RagGetCrawlerResultsResponse, reader: jspb.BinaryReader): RagGetCrawlerResultsResponse;
}

export namespace RagGetCrawlerResultsResponse {
  export type AsObject = {
    crawlerResultsList: Array<RagCrawlerResult.AsObject>,
    nextPageToken: string,
    totalSize: number,
  }
}

export class RagGetCrawlerResultRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetCrawlerResultRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerResultRequest;

  getOperationName(): string;
  setOperationName(value: string): RagGetCrawlerResultRequest;

  getUrl(): string;
  setUrl(value: string): RagGetCrawlerResultRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerResultRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagGetCrawlerResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerResultRequest): RagGetCrawlerResultRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerResultRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerResultRequest, reader: jspb.BinaryReader): RagGetCrawlerResultRequest;
}

export namespace RagGetCrawlerResultRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    operationName: string,
    url: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 5,
  }
}

export class RagAddCrawlerResultsToDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagAddCrawlerResultsToDatasetsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagAddCrawlerResultsToDatasetsRequest;

  getCrawlerNamesList(): Array<string>;
  setCrawlerNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
  clearCrawlerNamesList(): RagAddCrawlerResultsToDatasetsRequest;
  addCrawlerNames(value: string, index?: number): RagAddCrawlerResultsToDatasetsRequest;

  getCrawlerResultNamesList(): Array<string>;
  setCrawlerResultNamesList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
  clearCrawlerResultNamesList(): RagAddCrawlerResultsToDatasetsRequest;
  addCrawlerResultNames(value: string, index?: number): RagAddCrawlerResultsToDatasetsRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagAddCrawlerResultsToDatasetsRequest;
  clearDatasetIdsList(): RagAddCrawlerResultsToDatasetsRequest;
  addDatasetIds(value: string, index?: number): RagAddCrawlerResultsToDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagAddCrawlerResultsToDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagAddCrawlerResultsToDatasetsRequest): RagAddCrawlerResultsToDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagAddCrawlerResultsToDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagAddCrawlerResultsToDatasetsRequest;
  static deserializeBinaryFromReader(message: RagAddCrawlerResultsToDatasetsRequest, reader: jspb.BinaryReader): RagAddCrawlerResultsToDatasetsRequest;
}

export namespace RagAddCrawlerResultsToDatasetsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerNamesList: Array<string>,
    crawlerResultNamesList: Array<string>,
    datasetIdsList: Array<string>,
  }
}

export class RagRemoveCrawlerResultsFromDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagRemoveCrawlerResultsFromDatasetsRequest;

  getCrawlerResultNamesList(): Array<string>;
  setCrawlerResultNamesList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
  clearCrawlerResultNamesList(): RagRemoveCrawlerResultsFromDatasetsRequest;
  addCrawlerResultNames(value: string, index?: number): RagRemoveCrawlerResultsFromDatasetsRequest;

  getDatasetIdsList(): Array<string>;
  setDatasetIdsList(value: Array<string>): RagRemoveCrawlerResultsFromDatasetsRequest;
  clearDatasetIdsList(): RagRemoveCrawlerResultsFromDatasetsRequest;
  addDatasetIds(value: string, index?: number): RagRemoveCrawlerResultsFromDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagRemoveCrawlerResultsFromDatasetsRequest): RagRemoveCrawlerResultsFromDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagRemoveCrawlerResultsFromDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagRemoveCrawlerResultsFromDatasetsRequest;
  static deserializeBinaryFromReader(message: RagRemoveCrawlerResultsFromDatasetsRequest, reader: jspb.BinaryReader): RagRemoveCrawlerResultsFromDatasetsRequest;
}

export namespace RagRemoveCrawlerResultsFromDatasetsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerName: string,
    crawlerResultNamesList: Array<string>,
    datasetIdsList: Array<string>,
  }
}

export class RagGetCrawlerAttachedDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetCrawlerAttachedDatasetsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerAttachedDatasetsRequest;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagGetCrawlerAttachedDatasetsRequest;

  getPageSize(): number;
  setPageSize(value: number): RagGetCrawlerAttachedDatasetsRequest;
  hasPageSize(): boolean;
  clearPageSize(): RagGetCrawlerAttachedDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagGetCrawlerAttachedDatasetsRequest;
  hasPageToken(): boolean;
  clearPageToken(): RagGetCrawlerAttachedDatasetsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerAttachedDatasetsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagGetCrawlerAttachedDatasetsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagGetCrawlerAttachedDatasetsRequest;
  hasOrderby(): boolean;
  clearOrderby(): RagGetCrawlerAttachedDatasetsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerAttachedDatasetsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagGetCrawlerAttachedDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsRequest): RagGetCrawlerAttachedDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsRequest, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsRequest;
}

export namespace RagGetCrawlerAttachedDatasetsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    crawlerName: string,
    pageSize?: number,
    pageToken?: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    orderby?: string,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 4,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 5,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 6,
  }

  export enum OrderbyCase { 
    _ORDERBY_NOT_SET = 0,
    ORDERBY = 7,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 8,
  }
}

export class RagGetCrawlerAttachedDatasetsResponse extends jspb.Message {
  getDatasetsList(): Array<RagDataset>;
  setDatasetsList(value: Array<RagDataset>): RagGetCrawlerAttachedDatasetsResponse;
  clearDatasetsList(): RagGetCrawlerAttachedDatasetsResponse;
  addDatasets(value?: RagDataset, index?: number): RagDataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagGetCrawlerAttachedDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerAttachedDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerAttachedDatasetsResponse): RagGetCrawlerAttachedDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerAttachedDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerAttachedDatasetsResponse;
  static deserializeBinaryFromReader(message: RagGetCrawlerAttachedDatasetsResponse, reader: jspb.BinaryReader): RagGetCrawlerAttachedDatasetsResponse;
}

export namespace RagGetCrawlerAttachedDatasetsResponse {
  export type AsObject = {
    datasetsList: Array<RagDataset.AsObject>,
    nextPageToken: string,
  }
}

export class RagGetCrawlerRunLogsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RagGetCrawlerRunLogsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RagGetCrawlerRunLogsRequest;

  getOperationName(): string;
  setOperationName(value: string): RagGetCrawlerRunLogsRequest;

  getPageToken(): string;
  setPageToken(value: string): RagGetCrawlerRunLogsRequest;
  hasPageToken(): boolean;
  clearPageToken(): RagGetCrawlerRunLogsRequest;

  getPageSize(): number;
  setPageSize(value: number): RagGetCrawlerRunLogsRequest;
  hasPageSize(): boolean;
  clearPageSize(): RagGetCrawlerRunLogsRequest;

  getLevelFiltersList(): Array<ondewo_nlu_common_pb.LogSeverity>;
  setLevelFiltersList(value: Array<ondewo_nlu_common_pb.LogSeverity>): RagGetCrawlerRunLogsRequest;
  clearLevelFiltersList(): RagGetCrawlerRunLogsRequest;
  addLevelFilters(value: ondewo_nlu_common_pb.LogSeverity, index?: number): RagGetCrawlerRunLogsRequest;

  getPhaseFilter(): string;
  setPhaseFilter(value: string): RagGetCrawlerRunLogsRequest;
  hasPhaseFilter(): boolean;
  clearPhaseFilter(): RagGetCrawlerRunLogsRequest;

  getSearchQuery(): string;
  setSearchQuery(value: string): RagGetCrawlerRunLogsRequest;
  hasSearchQuery(): boolean;
  clearSearchQuery(): RagGetCrawlerRunLogsRequest;

  getStartTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTime(value?: google_protobuf_timestamp_pb.Timestamp): RagGetCrawlerRunLogsRequest;
  hasStartTime(): boolean;
  clearStartTime(): RagGetCrawlerRunLogsRequest;

  getEndTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTime(value?: google_protobuf_timestamp_pb.Timestamp): RagGetCrawlerRunLogsRequest;
  hasEndTime(): boolean;
  clearEndTime(): RagGetCrawlerRunLogsRequest;

  getSourceUrlFilter(): string;
  setSourceUrlFilter(value: string): RagGetCrawlerRunLogsRequest;
  hasSourceUrlFilter(): boolean;
  clearSourceUrlFilter(): RagGetCrawlerRunLogsRequest;

  getOrderby(): string;
  setOrderby(value: string): RagGetCrawlerRunLogsRequest;
  hasOrderby(): boolean;
  clearOrderby(): RagGetCrawlerRunLogsRequest;

  getSortingMode(): ondewo_nlu_common_pb.SortingMode;
  setSortingMode(value: ondewo_nlu_common_pb.SortingMode): RagGetCrawlerRunLogsRequest;
  hasSortingMode(): boolean;
  clearSortingMode(): RagGetCrawlerRunLogsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): RagGetCrawlerRunLogsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): RagGetCrawlerRunLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerRunLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerRunLogsRequest): RagGetCrawlerRunLogsRequest.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerRunLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunLogsRequest;
  static deserializeBinaryFromReader(message: RagGetCrawlerRunLogsRequest, reader: jspb.BinaryReader): RagGetCrawlerRunLogsRequest;
}

export namespace RagGetCrawlerRunLogsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    operationName: string,
    pageToken?: string,
    pageSize?: number,
    levelFiltersList: Array<ondewo_nlu_common_pb.LogSeverity>,
    phaseFilter?: string,
    searchQuery?: string,
    startTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sourceUrlFilter?: string,
    orderby?: string,
    sortingMode?: ondewo_nlu_common_pb.SortingMode,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }

  export enum PageTokenCase { 
    _PAGE_TOKEN_NOT_SET = 0,
    PAGE_TOKEN = 4,
  }

  export enum PageSizeCase { 
    _PAGE_SIZE_NOT_SET = 0,
    PAGE_SIZE = 5,
  }

  export enum PhaseFilterCase { 
    _PHASE_FILTER_NOT_SET = 0,
    PHASE_FILTER = 7,
  }

  export enum SearchQueryCase { 
    _SEARCH_QUERY_NOT_SET = 0,
    SEARCH_QUERY = 8,
  }

  export enum StartTimeCase { 
    _START_TIME_NOT_SET = 0,
    START_TIME = 9,
  }

  export enum EndTimeCase { 
    _END_TIME_NOT_SET = 0,
    END_TIME = 10,
  }

  export enum SourceUrlFilterCase { 
    _SOURCE_URL_FILTER_NOT_SET = 0,
    SOURCE_URL_FILTER = 11,
  }

  export enum OrderbyCase { 
    _ORDERBY_NOT_SET = 0,
    ORDERBY = 12,
  }

  export enum SortingModeCase { 
    _SORTING_MODE_NOT_SET = 0,
    SORTING_MODE = 13,
  }

  export enum FieldMaskCase { 
    _FIELD_MASK_NOT_SET = 0,
    FIELD_MASK = 14,
  }
}

export class RagGetCrawlerRunLogsResponse extends jspb.Message {
  getOperationName(): string;
  setOperationName(value: string): RagGetCrawlerRunLogsResponse;

  getCrawlerName(): string;
  setCrawlerName(value: string): RagGetCrawlerRunLogsResponse;

  getStatus(): ondewo_nlu_operation_metadata_pb.OperationMetadata.Status;
  setStatus(value: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status): RagGetCrawlerRunLogsResponse;

  getEntriesList(): Array<ondewo_nlu_common_pb.LogEntry>;
  setEntriesList(value: Array<ondewo_nlu_common_pb.LogEntry>): RagGetCrawlerRunLogsResponse;
  clearEntriesList(): RagGetCrawlerRunLogsResponse;
  addEntries(value?: ondewo_nlu_common_pb.LogEntry, index?: number): ondewo_nlu_common_pb.LogEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): RagGetCrawlerRunLogsResponse;

  getTotalLogEntries(): number;
  setTotalLogEntries(value: number): RagGetCrawlerRunLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagGetCrawlerRunLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RagGetCrawlerRunLogsResponse): RagGetCrawlerRunLogsResponse.AsObject;
  static serializeBinaryToWriter(message: RagGetCrawlerRunLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagGetCrawlerRunLogsResponse;
  static deserializeBinaryFromReader(message: RagGetCrawlerRunLogsResponse, reader: jspb.BinaryReader): RagGetCrawlerRunLogsResponse;
}

export namespace RagGetCrawlerRunLogsResponse {
  export type AsObject = {
    operationName: string,
    crawlerName: string,
    status: ondewo_nlu_operation_metadata_pb.OperationMetadata.Status,
    entriesList: Array<ondewo_nlu_common_pb.LogEntry.AsObject>,
    nextPageToken: string,
    totalLogEntries: number,
  }
}

export enum RagChunkMethod { 
  RAG_CHUNK_METHOD_UNSPECIFIED = 0,
  RAG_CHUNK_METHOD_NAIVE = 1,
  RAG_CHUNK_METHOD_BOOK = 2,
  RAG_CHUNK_METHOD_EMAIL = 3,
  RAG_CHUNK_METHOD_LAWS = 4,
  RAG_CHUNK_METHOD_MANUAL = 5,
  RAG_CHUNK_METHOD_ONE = 6,
  RAG_CHUNK_METHOD_PAPER = 7,
  RAG_CHUNK_METHOD_PICTURE = 8,
  RAG_CHUNK_METHOD_PRESENTATION = 9,
  RAG_CHUNK_METHOD_QA = 10,
  RAG_CHUNK_METHOD_TABLE = 11,
  RAG_CHUNK_METHOD_TAG = 12,
}
export enum RagGraphRagMethod { 
  RAG_GRAPH_RAG_METHOD_UNSPECIFIED = 0,
  RAG_GRAPH_RAG_METHOD_LIGHT = 1,
  RAG_GRAPH_RAG_METHOD_GENERAL = 2,
}
export enum RagDocumentType { 
  RAG_DOCUMENT_TYPE_UNSPECIFIED = 0,
  RAG_DOCUMENT_TYPE_PDF = 1,
  RAG_DOCUMENT_TYPE_DOC = 2,
  RAG_DOCUMENT_TYPE_VISUAL = 3,
  RAG_DOCUMENT_TYPE_AURAL = 4,
  RAG_DOCUMENT_TYPE_VIRTUAL = 5,
  RAG_DOCUMENT_TYPE_FOLDER = 6,
  RAG_DOCUMENT_TYPE_OTHER = 7,
}
export enum RagDocumentStatus { 
  RAG_DOCUMENT_STATUS_UNSPECIFIED = 0,
  RAG_DOCUMENT_STATUS_UNSTART = 1,
  RAG_DOCUMENT_STATUS_RUNNING = 2,
  RAG_DOCUMENT_STATUS_CANCEL = 3,
  RAG_DOCUMENT_STATUS_DONE = 4,
  RAG_DOCUMENT_STATUS_FAIL = 5,
}
export enum RagLogic { 
  RAG_LOGIC_UNSPECIFIED = 0,
  RAG_LOGIC_AND = 1,
  RAG_LOGIC_OR = 2,
}
export enum RagComparisonOperator { 
  RAG_COMPARISON_OPERATOR_UNSPECIFIED = 0,
  RAG_COMPARISON_OPERATOR_CONTAINS = 1,
  RAG_COMPARISON_OPERATOR_NOT_CONTAINS = 2,
  RAG_COMPARISON_OPERATOR_IN = 3,
  RAG_COMPARISON_OPERATOR_NOT_IN = 4,
  RAG_COMPARISON_OPERATOR_START_WITH = 5,
  RAG_COMPARISON_OPERATOR_END_WITH = 6,
  RAG_COMPARISON_OPERATOR_EMPTY = 7,
  RAG_COMPARISON_OPERATOR_NOT_EMPTY = 8,
  RAG_COMPARISON_OPERATOR_EQ = 9,
  RAG_COMPARISON_OPERATOR_NEQ = 10,
  RAG_COMPARISON_OPERATOR_GT = 11,
  RAG_COMPARISON_OPERATOR_LT = 12,
  RAG_COMPARISON_OPERATOR_GEQ = 13,
  RAG_COMPARISON_OPERATOR_LEQ = 14,
}
export enum RagCrawlerSelectorType { 
  RAG_CRAWLER_SELECTOR_TYPE_UNSPECIFIED = 0,
  RAG_CRAWLER_SELECTOR_TYPE_ID = 1,
  RAG_CRAWLER_SELECTOR_TYPE_CSS_CLASS = 2,
  RAG_CRAWLER_SELECTOR_TYPE_XPATH = 3,
}
export enum RagCrawlerAuthenticationExecutionType { 
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_UNSPECIFIED = 0,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_SERVER_SIDE = 1,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_CLIENT_SIDE = 2,
}
export enum RagCrawlerMetaDataExtractorType { 
  RAG_CRAWLER_META_DATA_EXTRACTOR_TPYE_UNSPECIFIED = 0,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_REGEX = 1,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_FIXED_VALUE = 2,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_CSS_SELECTOR = 3,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_XPATH_SELECTOR = 4,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_ID_SELECTOR = 5,
}
export enum RagCrawlerCrawlStrategy { 
  RAG_CRAWLER_CRAWL_STRATEGY_UNSPECIFIED = 0,
  RAG_CRAWLER_CRAWL_STRATEGY_BFS = 1,
  RAG_CRAWLER_CRAWL_STRATEGY_DFS = 2,
  RAG_CRAWLER_CRAWL_STRATEGY_BEST_FIRST = 3,
}
