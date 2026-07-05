import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb'; // proto import: "ondewo/nlu/operations.proto"


export class LlmEvaluationDataset extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationDataset;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationDataset;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationDataset;

  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): LlmEvaluationDataset;
  clearLlmEvaluationExamplesList(): LlmEvaluationDataset;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationDataset;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationDataset;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationDataset;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): LlmEvaluationDataset;
  clearTagsList(): LlmEvaluationDataset;
  addTags(value: string, index?: number): LlmEvaluationDataset;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationDataset;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationDataset;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationDataset;

  getParent(): string;
  setParent(value: string): LlmEvaluationDataset;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationDataset.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationDataset): LlmEvaluationDataset.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationDataset;
  static deserializeBinaryFromReader(message: LlmEvaluationDataset, reader: jspb.BinaryReader): LlmEvaluationDataset;
}

export namespace LlmEvaluationDataset {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    tagsList: Array<string>,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationExample extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationExample;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationExample;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationExample;

  getInputs(): google_protobuf_struct_pb.Struct | undefined;
  setInputs(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;
  hasInputs(): boolean;
  clearInputs(): LlmEvaluationExample;

  getExpectedOutputs(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedOutputs(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;
  hasExpectedOutputs(): boolean;
  clearExpectedOutputs(): LlmEvaluationExample;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExample;
  hasMetadata(): boolean;
  clearMetadata(): LlmEvaluationExample;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationExample;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExample;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationExample;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationExample;

  getParent(): string;
  setParent(value: string): LlmEvaluationExample;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationExample;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExample;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationExample;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationExample.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationExample): LlmEvaluationExample.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationExample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationExample;
  static deserializeBinaryFromReader(message: LlmEvaluationExample, reader: jspb.BinaryReader): LlmEvaluationExample;
}

export namespace LlmEvaluationExample {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    inputs?: google_protobuf_struct_pb.Struct.AsObject,
    expectedOutputs?: google_protobuf_struct_pb.Struct.AsObject,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationDatasetName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    parent: string,
    languageCode: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
  }
}

export class LlmEvaluationExperiment extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationExperiment;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationExperiment;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationExperiment;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationExperiment;

  getGitSha(): string;
  setGitSha(value: string): LlmEvaluationExperiment;

  getPromptVersion(): string;
  setPromptVersion(value: string): LlmEvaluationExperiment;

  getModelName(): string;
  setModelName(value: string): LlmEvaluationExperiment;

  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): LlmEvaluationExperiment;
  hasConfig(): boolean;
  clearConfig(): LlmEvaluationExperiment;

  getLlmEvaluationEvaluatorRunsList(): Array<LlmEvaluationEvaluatorRun>;
  setLlmEvaluationEvaluatorRunsList(value: Array<LlmEvaluationEvaluatorRun>): LlmEvaluationExperiment;
  clearLlmEvaluationEvaluatorRunsList(): LlmEvaluationExperiment;
  addLlmEvaluationEvaluatorRuns(value?: LlmEvaluationEvaluatorRun, index?: number): LlmEvaluationEvaluatorRun;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
  hasStartedAt(): boolean;
  clearStartedAt(): LlmEvaluationExperiment;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
  hasFinishedAt(): boolean;
  clearFinishedAt(): LlmEvaluationExperiment;

  getDurationInS(): number;
  setDurationInS(value: number): LlmEvaluationExperiment;

  getNExamples(): number;
  setNExamples(value: number): LlmEvaluationExperiment;

  getNPassed(): number;
  setNPassed(value: number): LlmEvaluationExperiment;

  getNFailed(): number;
  setNFailed(value: number): LlmEvaluationExperiment;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationExperiment;

  getParent(): string;
  setParent(value: string): LlmEvaluationExperiment;

  getLlmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus;
  setLlmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus): LlmEvaluationExperiment;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationExperiment;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationExperiment;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): LlmEvaluationExperiment;
  clearCcaiServiceNamesList(): LlmEvaluationExperiment;
  addCcaiServiceNames(value: string, index?: number): LlmEvaluationExperiment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationExperiment;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationExperiment;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationExperiment;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationExperiment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationExperiment.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationExperiment): LlmEvaluationExperiment.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationExperiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationExperiment;
  static deserializeBinaryFromReader(message: LlmEvaluationExperiment, reader: jspb.BinaryReader): LlmEvaluationExperiment;
}

export namespace LlmEvaluationExperiment {
  export type AsObject = {
    name: string,
    llmEvaluationDatasetName: string,
    displayName: string,
    description: string,
    gitSha: string,
    promptVersion: string,
    modelName: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationEvaluatorRunsList: Array<LlmEvaluationEvaluatorRun.AsObject>,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    durationInS: number,
    nExamples: number,
    nPassed: number,
    nFailed: number,
    llmEvaluationBaselineExperimentName: string,
    parent: string,
    llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus,
    createdBy: string,
    languageCode: string,
    ccaiServiceNamesList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
  }
}

export class LlmEvaluationEvaluatorRun extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationEvaluatorRun;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationEvaluatorRun;

  getLlmEvaluationExampleName(): string;
  setLlmEvaluationExampleName(value: string): LlmEvaluationEvaluatorRun;

  getLlmTelemetryRunId(): string;
  setLlmTelemetryRunId(value: string): LlmEvaluationEvaluatorRun;

  getLlmEvaluationEvaluatorType(): LlmEvaluationEvaluatorType;
  setLlmEvaluationEvaluatorType(value: LlmEvaluationEvaluatorType): LlmEvaluationEvaluatorRun;

  getEvaluatorName(): string;
  setEvaluatorName(value: string): LlmEvaluationEvaluatorRun;

  getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
  setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): LlmEvaluationEvaluatorRun;
  clearLlmEvaluationFeedbacksList(): LlmEvaluationEvaluatorRun;
  addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;

  getLlmEvaluationExperimentName(): string;
  setLlmEvaluationExperimentName(value: string): LlmEvaluationEvaluatorRun;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;
  hasStartedAt(): boolean;
  clearStartedAt(): LlmEvaluationEvaluatorRun;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;
  hasFinishedAt(): boolean;
  clearFinishedAt(): LlmEvaluationEvaluatorRun;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationEvaluatorRun;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationEvaluatorRun;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationEvaluatorRun;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationEvaluatorRun;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationEvaluatorRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationEvaluatorRun.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationEvaluatorRun): LlmEvaluationEvaluatorRun.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationEvaluatorRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationEvaluatorRun;
  static deserializeBinaryFromReader(message: LlmEvaluationEvaluatorRun, reader: jspb.BinaryReader): LlmEvaluationEvaluatorRun;
}

export namespace LlmEvaluationEvaluatorRun {
  export type AsObject = {
    name: string,
    displayName: string,
    llmEvaluationExampleName: string,
    llmTelemetryRunId: string,
    llmEvaluationEvaluatorType: LlmEvaluationEvaluatorType,
    evaluatorName: string,
    llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
    llmEvaluationExperimentName: string,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class LlmEvaluationFeedback extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationFeedback;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationFeedback;

  getCriterion(): string;
  setCriterion(value: string): LlmEvaluationFeedback;

  getScore(): number;
  setScore(value: number): LlmEvaluationFeedback;

  getCategoricalValue(): string;
  setCategoricalValue(value: string): LlmEvaluationFeedback;

  getComment(): string;
  setComment(value: string): LlmEvaluationFeedback;

  getAnnotatorUserId(): string;
  setAnnotatorUserId(value: string): LlmEvaluationFeedback;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationFeedback;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationFeedback;

  getRaw(): google_protobuf_struct_pb.Struct | undefined;
  setRaw(value?: google_protobuf_struct_pb.Struct): LlmEvaluationFeedback;
  hasRaw(): boolean;
  clearRaw(): LlmEvaluationFeedback;

  getLlmEvaluationEvaluatorRunName(): string;
  setLlmEvaluationEvaluatorRunName(value: string): LlmEvaluationFeedback;

  getLlmEvaluationExperimentName(): string;
  setLlmEvaluationExperimentName(value: string): LlmEvaluationFeedback;

  getLlmEvaluationExampleName(): string;
  setLlmEvaluationExampleName(value: string): LlmEvaluationFeedback;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationFeedback;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationFeedback;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationFeedback;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationFeedback;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationFeedback.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationFeedback): LlmEvaluationFeedback.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationFeedback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationFeedback;
  static deserializeBinaryFromReader(message: LlmEvaluationFeedback, reader: jspb.BinaryReader): LlmEvaluationFeedback;
}

export namespace LlmEvaluationFeedback {
  export type AsObject = {
    name: string,
    displayName: string,
    criterion: string,
    score: number,
    categoricalValue: string,
    comment: string,
    annotatorUserId: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    raw?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationEvaluatorRunName: string,
    llmEvaluationExperimentName: string,
    llmEvaluationExampleName: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class LlmEvaluationComparison extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationComparison;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationComparison;

  getLlmEvaluationExperimentNamesList(): Array<string>;
  setLlmEvaluationExperimentNamesList(value: Array<string>): LlmEvaluationComparison;
  clearLlmEvaluationExperimentNamesList(): LlmEvaluationComparison;
  addLlmEvaluationExperimentNames(value: string, index?: number): LlmEvaluationComparison;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationComparison;

  getLlmEvaluationPairwiseResultsList(): Array<LlmEvaluationPairwiseResult>;
  setLlmEvaluationPairwiseResultsList(value: Array<LlmEvaluationPairwiseResult>): LlmEvaluationComparison;
  clearLlmEvaluationPairwiseResultsList(): LlmEvaluationComparison;
  addLlmEvaluationPairwiseResults(value?: LlmEvaluationPairwiseResult, index?: number): LlmEvaluationPairwiseResult;

  getAggregate(): google_protobuf_struct_pb.Struct | undefined;
  setAggregate(value?: google_protobuf_struct_pb.Struct): LlmEvaluationComparison;
  hasAggregate(): boolean;
  clearAggregate(): LlmEvaluationComparison;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationComparison;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationComparison;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationComparison;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationComparison;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationComparison;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationComparison;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationComparison.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationComparison): LlmEvaluationComparison.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationComparison, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationComparison;
  static deserializeBinaryFromReader(message: LlmEvaluationComparison, reader: jspb.BinaryReader): LlmEvaluationComparison;
}

export namespace LlmEvaluationComparison {
  export type AsObject = {
    name: string,
    displayName: string,
    llmEvaluationExperimentNamesList: Array<string>,
    llmEvaluationBaselineExperimentName: string,
    llmEvaluationPairwiseResultsList: Array<LlmEvaluationPairwiseResult.AsObject>,
    aggregate?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class LlmEvaluationPairwiseResult extends jspb.Message {
  getLlmEvaluationExampleName(): string;
  setLlmEvaluationExampleName(value: string): LlmEvaluationPairwiseResult;

  getLlmEvaluationWinnerExperimentName(): string;
  setLlmEvaluationWinnerExperimentName(value: string): LlmEvaluationPairwiseResult;

  getScoreDelta(): number;
  setScoreDelta(value: number): LlmEvaluationPairwiseResult;

  getReason(): string;
  setReason(value: string): LlmEvaluationPairwiseResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationPairwiseResult.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationPairwiseResult): LlmEvaluationPairwiseResult.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationPairwiseResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationPairwiseResult;
  static deserializeBinaryFromReader(message: LlmEvaluationPairwiseResult, reader: jspb.BinaryReader): LlmEvaluationPairwiseResult;
}

export namespace LlmEvaluationPairwiseResult {
  export type AsObject = {
    llmEvaluationExampleName: string,
    llmEvaluationWinnerExperimentName: string,
    scoreDelta: number,
    reason: string,
  }
}

export class CreateLlmEvaluationDatasetRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateLlmEvaluationDatasetRequest;

  getDisplayName(): string;
  setDisplayName(value: string): CreateLlmEvaluationDatasetRequest;

  getDescription(): string;
  setDescription(value: string): CreateLlmEvaluationDatasetRequest;

  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): CreateLlmEvaluationDatasetRequest;
  clearLlmEvaluationExamplesList(): CreateLlmEvaluationDatasetRequest;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateLlmEvaluationDatasetRequest;
  clearTagsList(): CreateLlmEvaluationDatasetRequest;
  addTags(value: string, index?: number): CreateLlmEvaluationDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationDatasetRequest): CreateLlmEvaluationDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationDatasetRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): CreateLlmEvaluationDatasetRequest;
}

export namespace CreateLlmEvaluationDatasetRequest {
  export type AsObject = {
    parent: string,
    displayName: string,
    description: string,
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    tagsList: Array<string>,
    languageCode: string,
  }
}

export class GetLlmEvaluationDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationDatasetRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationDatasetRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationDatasetRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationDatasetRequest): GetLlmEvaluationDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationDatasetRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): GetLlmEvaluationDatasetRequest;
}

export namespace GetLlmEvaluationDatasetRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationDatasetFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationDatasetFilter;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): LlmEvaluationDatasetFilter;
  clearTagsList(): LlmEvaluationDatasetFilter;
  addTags(value: string, index?: number): LlmEvaluationDatasetFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationDatasetFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationDatasetFilter): LlmEvaluationDatasetFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationDatasetFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationDatasetFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationDatasetFilter, reader: jspb.BinaryReader): LlmEvaluationDatasetFilter;
}

export namespace LlmEvaluationDatasetFilter {
  export type AsObject = {
    displayName: string,
    tagsList: Array<string>,
  }
}

export class ListLlmEvaluationDatasetsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationDatasetsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationDatasetsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationDatasetsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationDatasetsRequest;

  getLlmEvaluationDatasetFilter(): LlmEvaluationDatasetFilter | undefined;
  setLlmEvaluationDatasetFilter(value?: LlmEvaluationDatasetFilter): ListLlmEvaluationDatasetsRequest;
  hasLlmEvaluationDatasetFilter(): boolean;
  clearLlmEvaluationDatasetFilter(): ListLlmEvaluationDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationDatasetsRequest): ListLlmEvaluationDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationDatasetsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationDatasetsRequest, reader: jspb.BinaryReader): ListLlmEvaluationDatasetsRequest;
}

export namespace ListLlmEvaluationDatasetsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationDatasetFilter?: LlmEvaluationDatasetFilter.AsObject,
  }
}

export class ListLlmEvaluationDatasetsResponse extends jspb.Message {
  getLlmEvaluationDatasetsList(): Array<LlmEvaluationDataset>;
  setLlmEvaluationDatasetsList(value: Array<LlmEvaluationDataset>): ListLlmEvaluationDatasetsResponse;
  clearLlmEvaluationDatasetsList(): ListLlmEvaluationDatasetsResponse;
  addLlmEvaluationDatasets(value?: LlmEvaluationDataset, index?: number): LlmEvaluationDataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationDatasetsResponse): ListLlmEvaluationDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationDatasetsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationDatasetsResponse, reader: jspb.BinaryReader): ListLlmEvaluationDatasetsResponse;
}

export namespace ListLlmEvaluationDatasetsResponse {
  export type AsObject = {
    llmEvaluationDatasetsList: Array<LlmEvaluationDataset.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationDatasetRequest extends jspb.Message {
  getLlmEvaluationDataset(): LlmEvaluationDataset | undefined;
  setLlmEvaluationDataset(value?: LlmEvaluationDataset): UpdateLlmEvaluationDatasetRequest;
  hasLlmEvaluationDataset(): boolean;
  clearLlmEvaluationDataset(): UpdateLlmEvaluationDatasetRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationDatasetRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationDatasetRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationDatasetRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationDatasetRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationDatasetRequest): UpdateLlmEvaluationDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationDatasetRequest;
}

export namespace UpdateLlmEvaluationDatasetRequest {
  export type AsObject = {
    llmEvaluationDataset?: LlmEvaluationDataset.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationDatasetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationDatasetRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationDatasetRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationDatasetRequest): DeleteLlmEvaluationDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationDatasetRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationDatasetRequest;
}

export namespace DeleteLlmEvaluationDatasetRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class AddLlmEvaluationExampleRequest extends jspb.Message {
  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): AddLlmEvaluationExampleRequest;

  getLlmEvaluationExample(): LlmEvaluationExample | undefined;
  setLlmEvaluationExample(value?: LlmEvaluationExample): AddLlmEvaluationExampleRequest;
  hasLlmEvaluationExample(): boolean;
  clearLlmEvaluationExample(): AddLlmEvaluationExampleRequest;

  getParent(): string;
  setParent(value: string): AddLlmEvaluationExampleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): AddLlmEvaluationExampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmEvaluationExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmEvaluationExampleRequest): AddLlmEvaluationExampleRequest.AsObject;
  static serializeBinaryToWriter(message: AddLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExampleRequest;
  static deserializeBinaryFromReader(message: AddLlmEvaluationExampleRequest, reader: jspb.BinaryReader): AddLlmEvaluationExampleRequest;
}

export namespace AddLlmEvaluationExampleRequest {
  export type AsObject = {
    llmEvaluationDatasetName: string,
    llmEvaluationExample?: LlmEvaluationExample.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class AddLlmEvaluationExamplesRequest extends jspb.Message {
  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): AddLlmEvaluationExamplesRequest;

  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): AddLlmEvaluationExamplesRequest;
  clearLlmEvaluationExamplesList(): AddLlmEvaluationExamplesRequest;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  getParent(): string;
  setParent(value: string): AddLlmEvaluationExamplesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): AddLlmEvaluationExamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmEvaluationExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmEvaluationExamplesRequest): AddLlmEvaluationExamplesRequest.AsObject;
  static serializeBinaryToWriter(message: AddLlmEvaluationExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExamplesRequest;
  static deserializeBinaryFromReader(message: AddLlmEvaluationExamplesRequest, reader: jspb.BinaryReader): AddLlmEvaluationExamplesRequest;
}

export namespace AddLlmEvaluationExamplesRequest {
  export type AsObject = {
    llmEvaluationDatasetName: string,
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    parent: string,
    languageCode: string,
  }
}

export class AddLlmEvaluationExamplesResponse extends jspb.Message {
  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): AddLlmEvaluationExamplesResponse;
  clearLlmEvaluationExamplesList(): AddLlmEvaluationExamplesResponse;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddLlmEvaluationExamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddLlmEvaluationExamplesResponse): AddLlmEvaluationExamplesResponse.AsObject;
  static serializeBinaryToWriter(message: AddLlmEvaluationExamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddLlmEvaluationExamplesResponse;
  static deserializeBinaryFromReader(message: AddLlmEvaluationExamplesResponse, reader: jspb.BinaryReader): AddLlmEvaluationExamplesResponse;
}

export namespace AddLlmEvaluationExamplesResponse {
  export type AsObject = {
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
  }
}

export class GetLlmEvaluationExampleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationExampleRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationExampleRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationExampleRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationExampleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationExampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationExampleRequest): GetLlmEvaluationExampleRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationExampleRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationExampleRequest, reader: jspb.BinaryReader): GetLlmEvaluationExampleRequest;
}

export namespace GetLlmEvaluationExampleRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationExampleFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationExampleFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationExampleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationExampleFilter): LlmEvaluationExampleFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationExampleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationExampleFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationExampleFilter, reader: jspb.BinaryReader): LlmEvaluationExampleFilter;
}

export namespace LlmEvaluationExampleFilter {
  export type AsObject = {
    displayName: string,
  }
}

export class ListLlmEvaluationExamplesRequest extends jspb.Message {
  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): ListLlmEvaluationExamplesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationExamplesRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationExamplesRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationExamplesRequest;

  getParent(): string;
  setParent(value: string): ListLlmEvaluationExamplesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationExamplesRequest;

  getLlmEvaluationExampleFilter(): LlmEvaluationExampleFilter | undefined;
  setLlmEvaluationExampleFilter(value?: LlmEvaluationExampleFilter): ListLlmEvaluationExamplesRequest;
  hasLlmEvaluationExampleFilter(): boolean;
  clearLlmEvaluationExampleFilter(): ListLlmEvaluationExamplesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationExamplesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationExamplesRequest): ListLlmEvaluationExamplesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationExamplesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExamplesRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationExamplesRequest, reader: jspb.BinaryReader): ListLlmEvaluationExamplesRequest;
}

export namespace ListLlmEvaluationExamplesRequest {
  export type AsObject = {
    llmEvaluationDatasetName: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
    llmEvaluationExampleFilter?: LlmEvaluationExampleFilter.AsObject,
  }
}

export class ListLlmEvaluationExamplesResponse extends jspb.Message {
  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): ListLlmEvaluationExamplesResponse;
  clearLlmEvaluationExamplesList(): ListLlmEvaluationExamplesResponse;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationExamplesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationExamplesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationExamplesResponse): ListLlmEvaluationExamplesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationExamplesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExamplesResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationExamplesResponse, reader: jspb.BinaryReader): ListLlmEvaluationExamplesResponse;
}

export namespace ListLlmEvaluationExamplesResponse {
  export type AsObject = {
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationExampleRequest extends jspb.Message {
  getLlmEvaluationExample(): LlmEvaluationExample | undefined;
  setLlmEvaluationExample(value?: LlmEvaluationExample): UpdateLlmEvaluationExampleRequest;
  hasLlmEvaluationExample(): boolean;
  clearLlmEvaluationExample(): UpdateLlmEvaluationExampleRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExampleRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationExampleRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExampleRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationExampleRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationExampleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationExampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationExampleRequest): UpdateLlmEvaluationExampleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationExampleRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationExampleRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationExampleRequest;
}

export namespace UpdateLlmEvaluationExampleRequest {
  export type AsObject = {
    llmEvaluationExample?: LlmEvaluationExample.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationExampleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationExampleRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationExampleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationExampleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationExampleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationExampleRequest): DeleteLlmEvaluationExampleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationExampleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationExampleRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationExampleRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationExampleRequest;
}

export namespace DeleteLlmEvaluationExampleRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class RunLlmEvaluationExperimentRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): RunLlmEvaluationExperimentRequest;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): RunLlmEvaluationExperimentRequest;

  getDisplayName(): string;
  setDisplayName(value: string): RunLlmEvaluationExperimentRequest;

  getGitSha(): string;
  setGitSha(value: string): RunLlmEvaluationExperimentRequest;

  getPromptVersion(): string;
  setPromptVersion(value: string): RunLlmEvaluationExperimentRequest;

  getModelName(): string;
  setModelName(value: string): RunLlmEvaluationExperimentRequest;

  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): RunLlmEvaluationExperimentRequest;
  hasConfig(): boolean;
  clearConfig(): RunLlmEvaluationExperimentRequest;

  getLlmEvaluationEvaluatorNamesList(): Array<string>;
  setLlmEvaluationEvaluatorNamesList(value: Array<string>): RunLlmEvaluationExperimentRequest;
  clearLlmEvaluationEvaluatorNamesList(): RunLlmEvaluationExperimentRequest;
  addLlmEvaluationEvaluatorNames(value: string, index?: number): RunLlmEvaluationExperimentRequest;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): RunLlmEvaluationExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RunLlmEvaluationExperimentRequest;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): RunLlmEvaluationExperimentRequest;
  clearCcaiServiceNamesList(): RunLlmEvaluationExperimentRequest;
  addCcaiServiceNames(value: string, index?: number): RunLlmEvaluationExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunLlmEvaluationExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunLlmEvaluationExperimentRequest): RunLlmEvaluationExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: RunLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunLlmEvaluationExperimentRequest;
  static deserializeBinaryFromReader(message: RunLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): RunLlmEvaluationExperimentRequest;
}

export namespace RunLlmEvaluationExperimentRequest {
  export type AsObject = {
    parent: string,
    llmEvaluationDatasetName: string,
    displayName: string,
    gitSha: string,
    promptVersion: string,
    modelName: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationEvaluatorNamesList: Array<string>,
    llmEvaluationBaselineExperimentName: string,
    languageCode: string,
    ccaiServiceNamesList: Array<string>,
  }
}

export class GetLlmEvaluationExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationExperimentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationExperimentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationExperimentRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationExperimentRequest): GetLlmEvaluationExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationExperimentRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): GetLlmEvaluationExperimentRequest;
}

export namespace GetLlmEvaluationExperimentRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationExperimentFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationExperimentFilter;

  getLlmEvaluationExperimentStatus(): LlmEvaluationExperimentStatus;
  setLlmEvaluationExperimentStatus(value: LlmEvaluationExperimentStatus): LlmEvaluationExperimentFilter;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationExperimentFilter;

  getModelName(): string;
  setModelName(value: string): LlmEvaluationExperimentFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationExperimentFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationExperimentFilter): LlmEvaluationExperimentFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationExperimentFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationExperimentFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationExperimentFilter, reader: jspb.BinaryReader): LlmEvaluationExperimentFilter;
}

export namespace LlmEvaluationExperimentFilter {
  export type AsObject = {
    displayName: string,
    llmEvaluationExperimentStatus: LlmEvaluationExperimentStatus,
    llmEvaluationDatasetName: string,
    modelName: string,
  }
}

export class ListLlmEvaluationExperimentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationExperimentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationExperimentsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationExperimentsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationExperimentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationExperimentsRequest;

  getLlmEvaluationExperimentFilter(): LlmEvaluationExperimentFilter | undefined;
  setLlmEvaluationExperimentFilter(value?: LlmEvaluationExperimentFilter): ListLlmEvaluationExperimentsRequest;
  hasLlmEvaluationExperimentFilter(): boolean;
  clearLlmEvaluationExperimentFilter(): ListLlmEvaluationExperimentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationExperimentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationExperimentsRequest): ListLlmEvaluationExperimentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationExperimentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExperimentsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationExperimentsRequest, reader: jspb.BinaryReader): ListLlmEvaluationExperimentsRequest;
}

export namespace ListLlmEvaluationExperimentsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationExperimentFilter?: LlmEvaluationExperimentFilter.AsObject,
  }
}

export class ListLlmEvaluationExperimentsResponse extends jspb.Message {
  getLlmEvaluationExperimentsList(): Array<LlmEvaluationExperiment>;
  setLlmEvaluationExperimentsList(value: Array<LlmEvaluationExperiment>): ListLlmEvaluationExperimentsResponse;
  clearLlmEvaluationExperimentsList(): ListLlmEvaluationExperimentsResponse;
  addLlmEvaluationExperiments(value?: LlmEvaluationExperiment, index?: number): LlmEvaluationExperiment;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationExperimentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationExperimentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationExperimentsResponse): ListLlmEvaluationExperimentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationExperimentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationExperimentsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationExperimentsResponse, reader: jspb.BinaryReader): ListLlmEvaluationExperimentsResponse;
}

export namespace ListLlmEvaluationExperimentsResponse {
  export type AsObject = {
    llmEvaluationExperimentsList: Array<LlmEvaluationExperiment.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationExperimentRequest extends jspb.Message {
  getLlmEvaluationExperiment(): LlmEvaluationExperiment | undefined;
  setLlmEvaluationExperiment(value?: LlmEvaluationExperiment): UpdateLlmEvaluationExperimentRequest;
  hasLlmEvaluationExperiment(): boolean;
  clearLlmEvaluationExperiment(): UpdateLlmEvaluationExperimentRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExperimentRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationExperimentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationExperimentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationExperimentRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationExperimentRequest): UpdateLlmEvaluationExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationExperimentRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationExperimentRequest;
}

export namespace UpdateLlmEvaluationExperimentRequest {
  export type AsObject = {
    llmEvaluationExperiment?: LlmEvaluationExperiment.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationExperimentRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationExperimentRequest): DeleteLlmEvaluationExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationExperimentRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationExperimentRequest;
}

export namespace DeleteLlmEvaluationExperimentRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class CancelLlmEvaluationExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CancelLlmEvaluationExperimentRequest;

  getParent(): string;
  setParent(value: string): CancelLlmEvaluationExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CancelLlmEvaluationExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelLlmEvaluationExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelLlmEvaluationExperimentRequest): CancelLlmEvaluationExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: CancelLlmEvaluationExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelLlmEvaluationExperimentRequest;
  static deserializeBinaryFromReader(message: CancelLlmEvaluationExperimentRequest, reader: jspb.BinaryReader): CancelLlmEvaluationExperimentRequest;
}

export namespace CancelLlmEvaluationExperimentRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class CompareLlmEvaluationExperimentsRequest extends jspb.Message {
  getLlmEvaluationExperimentNamesList(): Array<string>;
  setLlmEvaluationExperimentNamesList(value: Array<string>): CompareLlmEvaluationExperimentsRequest;
  clearLlmEvaluationExperimentNamesList(): CompareLlmEvaluationExperimentsRequest;
  addLlmEvaluationExperimentNames(value: string, index?: number): CompareLlmEvaluationExperimentsRequest;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): CompareLlmEvaluationExperimentsRequest;

  getParent(): string;
  setParent(value: string): CompareLlmEvaluationExperimentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CompareLlmEvaluationExperimentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompareLlmEvaluationExperimentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompareLlmEvaluationExperimentsRequest): CompareLlmEvaluationExperimentsRequest.AsObject;
  static serializeBinaryToWriter(message: CompareLlmEvaluationExperimentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompareLlmEvaluationExperimentsRequest;
  static deserializeBinaryFromReader(message: CompareLlmEvaluationExperimentsRequest, reader: jspb.BinaryReader): CompareLlmEvaluationExperimentsRequest;
}

export namespace CompareLlmEvaluationExperimentsRequest {
  export type AsObject = {
    llmEvaluationExperimentNamesList: Array<string>,
    llmEvaluationBaselineExperimentName: string,
    parent: string,
    languageCode: string,
  }
}

export class SubmitLlmEvaluationFeedbackRequest extends jspb.Message {
  getLlmEvaluationExperimentName(): string;
  setLlmEvaluationExperimentName(value: string): SubmitLlmEvaluationFeedbackRequest;

  getLlmEvaluationEvaluatorRunName(): string;
  setLlmEvaluationEvaluatorRunName(value: string): SubmitLlmEvaluationFeedbackRequest;

  getLlmEvaluationFeedback(): LlmEvaluationFeedback | undefined;
  setLlmEvaluationFeedback(value?: LlmEvaluationFeedback): SubmitLlmEvaluationFeedbackRequest;
  hasLlmEvaluationFeedback(): boolean;
  clearLlmEvaluationFeedback(): SubmitLlmEvaluationFeedbackRequest;

  getParent(): string;
  setParent(value: string): SubmitLlmEvaluationFeedbackRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): SubmitLlmEvaluationFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitLlmEvaluationFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitLlmEvaluationFeedbackRequest): SubmitLlmEvaluationFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitLlmEvaluationFeedbackRequest;
  static deserializeBinaryFromReader(message: SubmitLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): SubmitLlmEvaluationFeedbackRequest;
}

export namespace SubmitLlmEvaluationFeedbackRequest {
  export type AsObject = {
    llmEvaluationExperimentName: string,
    llmEvaluationEvaluatorRunName: string,
    llmEvaluationFeedback?: LlmEvaluationFeedback.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationFeedbackFilter extends jspb.Message {
  getLlmEvaluationExperimentName(): string;
  setLlmEvaluationExperimentName(value: string): LlmEvaluationFeedbackFilter;

  getLlmEvaluationExampleName(): string;
  setLlmEvaluationExampleName(value: string): LlmEvaluationFeedbackFilter;

  getLlmEvaluationEvaluatorRunName(): string;
  setLlmEvaluationEvaluatorRunName(value: string): LlmEvaluationFeedbackFilter;

  getCriterion(): string;
  setCriterion(value: string): LlmEvaluationFeedbackFilter;

  getCategoricalValue(): string;
  setCategoricalValue(value: string): LlmEvaluationFeedbackFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationFeedbackFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationFeedbackFilter): LlmEvaluationFeedbackFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationFeedbackFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationFeedbackFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationFeedbackFilter, reader: jspb.BinaryReader): LlmEvaluationFeedbackFilter;
}

export namespace LlmEvaluationFeedbackFilter {
  export type AsObject = {
    llmEvaluationExperimentName: string,
    llmEvaluationExampleName: string,
    llmEvaluationEvaluatorRunName: string,
    criterion: string,
    categoricalValue: string,
  }
}

export class ListLlmEvaluationFeedbackRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationFeedbackRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationFeedbackRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationFeedbackRequest;

  getParent(): string;
  setParent(value: string): ListLlmEvaluationFeedbackRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationFeedbackRequest;

  getLlmEvaluationFeedbackFilter(): LlmEvaluationFeedbackFilter | undefined;
  setLlmEvaluationFeedbackFilter(value?: LlmEvaluationFeedbackFilter): ListLlmEvaluationFeedbackRequest;
  hasLlmEvaluationFeedbackFilter(): boolean;
  clearLlmEvaluationFeedbackFilter(): ListLlmEvaluationFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationFeedbackRequest): ListLlmEvaluationFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationFeedbackRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): ListLlmEvaluationFeedbackRequest;
}

export namespace ListLlmEvaluationFeedbackRequest {
  export type AsObject = {
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
    llmEvaluationFeedbackFilter?: LlmEvaluationFeedbackFilter.AsObject,
  }
}

export class ListLlmEvaluationFeedbackResponse extends jspb.Message {
  getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
  setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): ListLlmEvaluationFeedbackResponse;
  clearLlmEvaluationFeedbacksList(): ListLlmEvaluationFeedbackResponse;
  addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationFeedbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationFeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationFeedbackResponse): ListLlmEvaluationFeedbackResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationFeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationFeedbackResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationFeedbackResponse, reader: jspb.BinaryReader): ListLlmEvaluationFeedbackResponse;
}

export namespace ListLlmEvaluationFeedbackResponse {
  export type AsObject = {
    llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteLlmEvaluationFeedbackRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationFeedbackRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationFeedbackRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationFeedbackRequest): DeleteLlmEvaluationFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationFeedbackRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationFeedbackRequest;
}

export namespace DeleteLlmEvaluationFeedbackRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export enum LlmEvaluationExperimentStatus { 
  LLM_EVALUATION_EXPERIMENT_STATUS_UNSPECIFIED = 0,
  LLM_EVALUATION_EXPERIMENT_STATUS_PENDING = 1,
  LLM_EVALUATION_EXPERIMENT_STATUS_RUNNING = 2,
  LLM_EVALUATION_EXPERIMENT_STATUS_SUCCEEDED = 3,
  LLM_EVALUATION_EXPERIMENT_STATUS_FAILED = 4,
  LLM_EVALUATION_EXPERIMENT_STATUS_CANCELLED = 5,
}
export enum LlmEvaluationEvaluatorType { 
  LLM_EVALUATION_EVALUATOR_TYPE_UNSPECIFIED = 0,
  LLM_EVALUATION_EVALUATOR_TYPE_LLM_AS_JUDGE = 1,
  LLM_EVALUATION_EVALUATOR_TYPE_HUMAN = 2,
  LLM_EVALUATION_EVALUATOR_TYPE_HEURISTIC = 3,
  LLM_EVALUATION_EVALUATOR_TYPE_CUSTOM_CODE = 4,
  LLM_EVALUATION_EVALUATOR_TYPE_PAIRWISE = 5,
}
