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

  getLlmEvaluationDatasetType(): LlmEvaluationDatasetType;
  setLlmEvaluationDatasetType(value: LlmEvaluationDatasetType): LlmEvaluationDataset;

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
    llmEvaluationDatasetType: LlmEvaluationDatasetType,
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

  getRepetitions(): number;
  setRepetitions(value: number): LlmEvaluationExperiment;

  getLlmEvaluationScheduleName(): string;
  setLlmEvaluationScheduleName(value: string): LlmEvaluationExperiment;

  getLlmEvaluationExperimentKind(): LlmEvaluationExperimentKind;
  setLlmEvaluationExperimentKind(value: LlmEvaluationExperimentKind): LlmEvaluationExperiment;

  getLlmEvaluationReleaseGateRunName(): string;
  setLlmEvaluationReleaseGateRunName(value: string): LlmEvaluationExperiment;

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
    repetitions: number,
    llmEvaluationScheduleName: string,
    llmEvaluationExperimentKind: LlmEvaluationExperimentKind,
    llmEvaluationReleaseGateRunName: string,
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

  getLlmEvaluationTurnResultsList(): Array<LlmEvaluationTurnResult>;
  setLlmEvaluationTurnResultsList(value: Array<LlmEvaluationTurnResult>): LlmEvaluationEvaluatorRun;
  clearLlmEvaluationTurnResultsList(): LlmEvaluationEvaluatorRun;
  addLlmEvaluationTurnResults(value?: LlmEvaluationTurnResult, index?: number): LlmEvaluationTurnResult;

  getRepetitionIndex(): number;
  setRepetitionIndex(value: number): LlmEvaluationEvaluatorRun;

  getActualOutput(): google_protobuf_struct_pb.Struct | undefined;
  setActualOutput(value?: google_protobuf_struct_pb.Struct): LlmEvaluationEvaluatorRun;
  hasActualOutput(): boolean;
  clearActualOutput(): LlmEvaluationEvaluatorRun;

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
    llmEvaluationTurnResultsList: Array<LlmEvaluationTurnResult.AsObject>,
    repetitionIndex: number,
    actualOutput?: google_protobuf_struct_pb.Struct.AsObject,
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
  hasScore(): boolean;
  clearScore(): LlmEvaluationFeedback;

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
    score?: number,
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

  export enum ScoreCase { 
    _SCORE_NOT_SET = 0,
    SCORE = 4,
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

  getLlmEvaluationDatasetType(): LlmEvaluationDatasetType;
  setLlmEvaluationDatasetType(value: LlmEvaluationDatasetType): LlmEvaluationDatasetFilter;

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
    llmEvaluationDatasetType: LlmEvaluationDatasetType,
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

  getRepetitions(): number;
  setRepetitions(value: number): RunLlmEvaluationExperimentRequest;

  getLlmEvaluationExperimentKind(): LlmEvaluationExperimentKind;
  setLlmEvaluationExperimentKind(value: LlmEvaluationExperimentKind): RunLlmEvaluationExperimentRequest;

  getEvaluatorConfigs(): google_protobuf_struct_pb.Struct | undefined;
  setEvaluatorConfigs(value?: google_protobuf_struct_pb.Struct): RunLlmEvaluationExperimentRequest;
  hasEvaluatorConfigs(): boolean;
  clearEvaluatorConfigs(): RunLlmEvaluationExperimentRequest;

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
    repetitions: number,
    llmEvaluationExperimentKind: LlmEvaluationExperimentKind,
    evaluatorConfigs?: google_protobuf_struct_pb.Struct.AsObject,
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

  getLlmEvaluationScheduleName(): string;
  setLlmEvaluationScheduleName(value: string): LlmEvaluationExperimentFilter;

  getLlmEvaluationExperimentKind(): LlmEvaluationExperimentKind;
  setLlmEvaluationExperimentKind(value: LlmEvaluationExperimentKind): LlmEvaluationExperimentFilter;

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
    llmEvaluationScheduleName: string,
    llmEvaluationExperimentKind: LlmEvaluationExperimentKind,
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

export class UpdateLlmEvaluationFeedbackRequest extends jspb.Message {
  getLlmEvaluationFeedback(): LlmEvaluationFeedback | undefined;
  setLlmEvaluationFeedback(value?: LlmEvaluationFeedback): UpdateLlmEvaluationFeedbackRequest;
  hasLlmEvaluationFeedback(): boolean;
  clearLlmEvaluationFeedback(): UpdateLlmEvaluationFeedbackRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationFeedbackRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationFeedbackRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationFeedbackRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationFeedbackRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationFeedbackRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationFeedbackRequest): UpdateLlmEvaluationFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationFeedbackRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationFeedbackRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationFeedbackRequest;
}

export namespace UpdateLlmEvaluationFeedbackRequest {
  export type AsObject = {
    llmEvaluationFeedback?: LlmEvaluationFeedback.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationTurnResult extends jspb.Message {
  getTurnIndex(): number;
  setTurnIndex(value: number): LlmEvaluationTurnResult;

  getUserInput(): google_protobuf_struct_pb.Struct | undefined;
  setUserInput(value?: google_protobuf_struct_pb.Struct): LlmEvaluationTurnResult;
  hasUserInput(): boolean;
  clearUserInput(): LlmEvaluationTurnResult;

  getExpectedOutput(): google_protobuf_struct_pb.Struct | undefined;
  setExpectedOutput(value?: google_protobuf_struct_pb.Struct): LlmEvaluationTurnResult;
  hasExpectedOutput(): boolean;
  clearExpectedOutput(): LlmEvaluationTurnResult;

  getActualOutput(): google_protobuf_struct_pb.Struct | undefined;
  setActualOutput(value?: google_protobuf_struct_pb.Struct): LlmEvaluationTurnResult;
  hasActualOutput(): boolean;
  clearActualOutput(): LlmEvaluationTurnResult;

  getLlmTelemetryRunId(): string;
  setLlmTelemetryRunId(value: string): LlmEvaluationTurnResult;

  getSessionStepName(): string;
  setSessionStepName(value: string): LlmEvaluationTurnResult;

  getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
  setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): LlmEvaluationTurnResult;
  clearLlmEvaluationFeedbacksList(): LlmEvaluationTurnResult;
  addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;

  getDurationInS(): number;
  setDurationInS(value: number): LlmEvaluationTurnResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationTurnResult.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationTurnResult): LlmEvaluationTurnResult.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationTurnResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationTurnResult;
  static deserializeBinaryFromReader(message: LlmEvaluationTurnResult, reader: jspb.BinaryReader): LlmEvaluationTurnResult;
}

export namespace LlmEvaluationTurnResult {
  export type AsObject = {
    turnIndex: number,
    userInput?: google_protobuf_struct_pb.Struct.AsObject,
    expectedOutput?: google_protobuf_struct_pb.Struct.AsObject,
    actualOutput?: google_protobuf_struct_pb.Struct.AsObject,
    llmTelemetryRunId: string,
    sessionStepName: string,
    llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
    durationInS: number,
  }
}

export class LlmEvaluationReleaseGateThresholds extends jspb.Message {
  getMinPassRate(): number;
  setMinPassRate(value: number): LlmEvaluationReleaseGateThresholds;

  getMaxRegressionPerCriterion(): number;
  setMaxRegressionPerCriterion(value: number): LlmEvaluationReleaseGateThresholds;
  hasMaxRegressionPerCriterion(): boolean;
  clearMaxRegressionPerCriterion(): LlmEvaluationReleaseGateThresholds;

  getMaxP95LatencySeconds(): number;
  setMaxP95LatencySeconds(value: number): LlmEvaluationReleaseGateThresholds;

  getAcceptanceMustPass(): boolean;
  setAcceptanceMustPass(value: boolean): LlmEvaluationReleaseGateThresholds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateThresholds.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateThresholds): LlmEvaluationReleaseGateThresholds.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateThresholds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateThresholds;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateThresholds, reader: jspb.BinaryReader): LlmEvaluationReleaseGateThresholds;
}

export namespace LlmEvaluationReleaseGateThresholds {
  export type AsObject = {
    minPassRate: number,
    maxRegressionPerCriterion?: number,
    maxP95LatencySeconds: number,
    acceptanceMustPass: boolean,
  }

  export enum MaxRegressionPerCriterionCase { 
    _MAX_REGRESSION_PER_CRITERION_NOT_SET = 0,
    MAX_REGRESSION_PER_CRITERION = 2,
  }
}

export class LlmEvaluationReleaseGateSafetyConfig extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): LlmEvaluationReleaseGateSafetyConfig;

  getAdversarialDatasetName(): string;
  setAdversarialDatasetName(value: string): LlmEvaluationReleaseGateSafetyConfig;

  getEvaluatorNamesList(): Array<string>;
  setEvaluatorNamesList(value: Array<string>): LlmEvaluationReleaseGateSafetyConfig;
  clearEvaluatorNamesList(): LlmEvaluationReleaseGateSafetyConfig;
  addEvaluatorNames(value: string, index?: number): LlmEvaluationReleaseGateSafetyConfig;

  getMaxToxicity(): number;
  setMaxToxicity(value: number): LlmEvaluationReleaseGateSafetyConfig;
  hasMaxToxicity(): boolean;
  clearMaxToxicity(): LlmEvaluationReleaseGateSafetyConfig;

  getMaxBias(): number;
  setMaxBias(value: number): LlmEvaluationReleaseGateSafetyConfig;
  hasMaxBias(): boolean;
  clearMaxBias(): LlmEvaluationReleaseGateSafetyConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateSafetyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateSafetyConfig): LlmEvaluationReleaseGateSafetyConfig.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateSafetyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateSafetyConfig;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateSafetyConfig, reader: jspb.BinaryReader): LlmEvaluationReleaseGateSafetyConfig;
}

export namespace LlmEvaluationReleaseGateSafetyConfig {
  export type AsObject = {
    enabled: boolean,
    adversarialDatasetName: string,
    evaluatorNamesList: Array<string>,
    maxToxicity?: number,
    maxBias?: number,
  }

  export enum MaxToxicityCase { 
    _MAX_TOXICITY_NOT_SET = 0,
    MAX_TOXICITY = 4,
  }

  export enum MaxBiasCase { 
    _MAX_BIAS_NOT_SET = 0,
    MAX_BIAS = 5,
  }
}

export class LlmEvaluationReleaseGate extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationReleaseGate;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationReleaseGate;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationReleaseGate;

  getRevision(): number;
  setRevision(value: number): LlmEvaluationReleaseGate;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationReleaseGate;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationReleaseGate;

  getLlmEvaluationEvaluatorNamesList(): Array<string>;
  setLlmEvaluationEvaluatorNamesList(value: Array<string>): LlmEvaluationReleaseGate;
  clearLlmEvaluationEvaluatorNamesList(): LlmEvaluationReleaseGate;
  addLlmEvaluationEvaluatorNames(value: string, index?: number): LlmEvaluationReleaseGate;

  getThresholds(): LlmEvaluationReleaseGateThresholds | undefined;
  setThresholds(value?: LlmEvaluationReleaseGateThresholds): LlmEvaluationReleaseGate;
  hasThresholds(): boolean;
  clearThresholds(): LlmEvaluationReleaseGate;

  getSafety(): LlmEvaluationReleaseGateSafetyConfig | undefined;
  setSafety(value?: LlmEvaluationReleaseGateSafetyConfig): LlmEvaluationReleaseGate;
  hasSafety(): boolean;
  clearSafety(): LlmEvaluationReleaseGate;

  getWeights(): google_protobuf_struct_pb.Struct | undefined;
  setWeights(value?: google_protobuf_struct_pb.Struct): LlmEvaluationReleaseGate;
  hasWeights(): boolean;
  clearWeights(): LlmEvaluationReleaseGate;

  getPassCutoffScore(): number;
  setPassCutoffScore(value: number): LlmEvaluationReleaseGate;

  getStalenessWindowDays(): number;
  setStalenessWindowDays(value: number): LlmEvaluationReleaseGate;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): LlmEvaluationReleaseGate;
  clearCcaiServiceNamesList(): LlmEvaluationReleaseGate;
  addCcaiServiceNames(value: string, index?: number): LlmEvaluationReleaseGate;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGate;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationReleaseGate;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationReleaseGate;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGate;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationReleaseGate;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationReleaseGate;

  getParent(): string;
  setParent(value: string): LlmEvaluationReleaseGate;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationReleaseGate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGate.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGate): LlmEvaluationReleaseGate.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGate;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGate, reader: jspb.BinaryReader): LlmEvaluationReleaseGate;
}

export namespace LlmEvaluationReleaseGate {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    revision: number,
    llmEvaluationDatasetName: string,
    llmEvaluationBaselineExperimentName: string,
    llmEvaluationEvaluatorNamesList: Array<string>,
    thresholds?: LlmEvaluationReleaseGateThresholds.AsObject,
    safety?: LlmEvaluationReleaseGateSafetyConfig.AsObject,
    weights?: google_protobuf_struct_pb.Struct.AsObject,
    passCutoffScore: number,
    stalenessWindowDays: number,
    ccaiServiceNamesList: Array<string>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationReleaseGateCheck extends jspb.Message {
  getId(): string;
  setId(value: string): LlmEvaluationReleaseGateCheck;

  getThreshold(): number;
  setThreshold(value: number): LlmEvaluationReleaseGateCheck;

  getActual(): number;
  setActual(value: number): LlmEvaluationReleaseGateCheck;

  getActualAvailable(): boolean;
  setActualAvailable(value: boolean): LlmEvaluationReleaseGateCheck;

  getPassed(): boolean;
  setPassed(value: boolean): LlmEvaluationReleaseGateCheck;

  getPartial(): boolean;
  setPartial(value: boolean): LlmEvaluationReleaseGateCheck;

  getProvenance(): string;
  setProvenance(value: string): LlmEvaluationReleaseGateCheck;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateCheck.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateCheck): LlmEvaluationReleaseGateCheck.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateCheck, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateCheck;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateCheck, reader: jspb.BinaryReader): LlmEvaluationReleaseGateCheck;
}

export namespace LlmEvaluationReleaseGateCheck {
  export type AsObject = {
    id: string,
    threshold: number,
    actual: number,
    actualAvailable: boolean,
    passed: boolean,
    partial: boolean,
    provenance: string,
  }
}

export class LlmEvaluationReleaseGateRun extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationReleaseGateRun;

  getLlmEvaluationReleaseGateName(): string;
  setLlmEvaluationReleaseGateName(value: string): LlmEvaluationReleaseGateRun;

  getGateRevision(): number;
  setGateRevision(value: number): LlmEvaluationReleaseGateRun;

  getGateSnapshot(): google_protobuf_struct_pb.Struct | undefined;
  setGateSnapshot(value?: google_protobuf_struct_pb.Struct): LlmEvaluationReleaseGateRun;
  hasGateSnapshot(): boolean;
  clearGateSnapshot(): LlmEvaluationReleaseGateRun;

  getLlmEvaluationExperimentName(): string;
  setLlmEvaluationExperimentName(value: string): LlmEvaluationReleaseGateRun;

  getLlmEvaluationSafetyExperimentName(): string;
  setLlmEvaluationSafetyExperimentName(value: string): LlmEvaluationReleaseGateRun;

  getLlmEvaluationBaselineExperimentName(): string;
  setLlmEvaluationBaselineExperimentName(value: string): LlmEvaluationReleaseGateRun;

  getLlmEvaluationReleaseGateVerdict(): LlmEvaluationReleaseGateVerdict;
  setLlmEvaluationReleaseGateVerdict(value: LlmEvaluationReleaseGateVerdict): LlmEvaluationReleaseGateRun;

  getChecksList(): Array<LlmEvaluationReleaseGateCheck>;
  setChecksList(value: Array<LlmEvaluationReleaseGateCheck>): LlmEvaluationReleaseGateRun;
  clearChecksList(): LlmEvaluationReleaseGateRun;
  addChecks(value?: LlmEvaluationReleaseGateCheck, index?: number): LlmEvaluationReleaseGateCheck;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGateRun;
  hasStartedAt(): boolean;
  clearStartedAt(): LlmEvaluationReleaseGateRun;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGateRun;
  hasFinishedAt(): boolean;
  clearFinishedAt(): LlmEvaluationReleaseGateRun;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGateRun;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationReleaseGateRun;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationReleaseGateRun;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReleaseGateRun;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationReleaseGateRun;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationReleaseGateRun;

  getParent(): string;
  setParent(value: string): LlmEvaluationReleaseGateRun;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationReleaseGateRun;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateRun.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateRun): LlmEvaluationReleaseGateRun.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateRun, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateRun;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateRun, reader: jspb.BinaryReader): LlmEvaluationReleaseGateRun;
}

export namespace LlmEvaluationReleaseGateRun {
  export type AsObject = {
    name: string,
    llmEvaluationReleaseGateName: string,
    gateRevision: number,
    gateSnapshot?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationExperimentName: string,
    llmEvaluationSafetyExperimentName: string,
    llmEvaluationBaselineExperimentName: string,
    llmEvaluationReleaseGateVerdict: LlmEvaluationReleaseGateVerdict,
    checksList: Array<LlmEvaluationReleaseGateCheck.AsObject>,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class CreateLlmEvaluationReleaseGateRequest extends jspb.Message {
  getLlmEvaluationReleaseGate(): LlmEvaluationReleaseGate | undefined;
  setLlmEvaluationReleaseGate(value?: LlmEvaluationReleaseGate): CreateLlmEvaluationReleaseGateRequest;
  hasLlmEvaluationReleaseGate(): boolean;
  clearLlmEvaluationReleaseGate(): CreateLlmEvaluationReleaseGateRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationReleaseGateRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationReleaseGateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationReleaseGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationReleaseGateRequest): CreateLlmEvaluationReleaseGateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationReleaseGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationReleaseGateRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationReleaseGateRequest, reader: jspb.BinaryReader): CreateLlmEvaluationReleaseGateRequest;
}

export namespace CreateLlmEvaluationReleaseGateRequest {
  export type AsObject = {
    llmEvaluationReleaseGate?: LlmEvaluationReleaseGate.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationReleaseGateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationReleaseGateRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationReleaseGateRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationReleaseGateRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationReleaseGateRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationReleaseGateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationReleaseGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationReleaseGateRequest): GetLlmEvaluationReleaseGateRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationReleaseGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationReleaseGateRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationReleaseGateRequest, reader: jspb.BinaryReader): GetLlmEvaluationReleaseGateRequest;
}

export namespace GetLlmEvaluationReleaseGateRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationReleaseGateFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationReleaseGateFilter;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationReleaseGateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateFilter): LlmEvaluationReleaseGateFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateFilter, reader: jspb.BinaryReader): LlmEvaluationReleaseGateFilter;
}

export namespace LlmEvaluationReleaseGateFilter {
  export type AsObject = {
    displayName: string,
    llmEvaluationDatasetName: string,
  }
}

export class ListLlmEvaluationReleaseGatesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationReleaseGatesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationReleaseGatesRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationReleaseGatesRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationReleaseGatesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationReleaseGatesRequest;

  getLlmEvaluationReleaseGateFilter(): LlmEvaluationReleaseGateFilter | undefined;
  setLlmEvaluationReleaseGateFilter(value?: LlmEvaluationReleaseGateFilter): ListLlmEvaluationReleaseGatesRequest;
  hasLlmEvaluationReleaseGateFilter(): boolean;
  clearLlmEvaluationReleaseGateFilter(): ListLlmEvaluationReleaseGatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReleaseGatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReleaseGatesRequest): ListLlmEvaluationReleaseGatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReleaseGatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReleaseGatesRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReleaseGatesRequest, reader: jspb.BinaryReader): ListLlmEvaluationReleaseGatesRequest;
}

export namespace ListLlmEvaluationReleaseGatesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationReleaseGateFilter?: LlmEvaluationReleaseGateFilter.AsObject,
  }
}

export class ListLlmEvaluationReleaseGatesResponse extends jspb.Message {
  getLlmEvaluationReleaseGatesList(): Array<LlmEvaluationReleaseGate>;
  setLlmEvaluationReleaseGatesList(value: Array<LlmEvaluationReleaseGate>): ListLlmEvaluationReleaseGatesResponse;
  clearLlmEvaluationReleaseGatesList(): ListLlmEvaluationReleaseGatesResponse;
  addLlmEvaluationReleaseGates(value?: LlmEvaluationReleaseGate, index?: number): LlmEvaluationReleaseGate;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationReleaseGatesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReleaseGatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReleaseGatesResponse): ListLlmEvaluationReleaseGatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReleaseGatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReleaseGatesResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReleaseGatesResponse, reader: jspb.BinaryReader): ListLlmEvaluationReleaseGatesResponse;
}

export namespace ListLlmEvaluationReleaseGatesResponse {
  export type AsObject = {
    llmEvaluationReleaseGatesList: Array<LlmEvaluationReleaseGate.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationReleaseGateRequest extends jspb.Message {
  getLlmEvaluationReleaseGate(): LlmEvaluationReleaseGate | undefined;
  setLlmEvaluationReleaseGate(value?: LlmEvaluationReleaseGate): UpdateLlmEvaluationReleaseGateRequest;
  hasLlmEvaluationReleaseGate(): boolean;
  clearLlmEvaluationReleaseGate(): UpdateLlmEvaluationReleaseGateRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationReleaseGateRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationReleaseGateRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationReleaseGateRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationReleaseGateRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationReleaseGateRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationReleaseGateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationReleaseGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationReleaseGateRequest): UpdateLlmEvaluationReleaseGateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationReleaseGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationReleaseGateRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationReleaseGateRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationReleaseGateRequest;
}

export namespace UpdateLlmEvaluationReleaseGateRequest {
  export type AsObject = {
    llmEvaluationReleaseGate?: LlmEvaluationReleaseGate.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationReleaseGateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationReleaseGateRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationReleaseGateRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationReleaseGateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationReleaseGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationReleaseGateRequest): DeleteLlmEvaluationReleaseGateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationReleaseGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationReleaseGateRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationReleaseGateRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationReleaseGateRequest;
}

export namespace DeleteLlmEvaluationReleaseGateRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class RunLlmEvaluationReleaseGateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): RunLlmEvaluationReleaseGateRequest;

  getParent(): string;
  setParent(value: string): RunLlmEvaluationReleaseGateRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): RunLlmEvaluationReleaseGateRequest;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): RunLlmEvaluationReleaseGateRequest;
  clearCcaiServiceNamesList(): RunLlmEvaluationReleaseGateRequest;
  addCcaiServiceNames(value: string, index?: number): RunLlmEvaluationReleaseGateRequest;

  getGitSha(): string;
  setGitSha(value: string): RunLlmEvaluationReleaseGateRequest;

  getPromptVersion(): string;
  setPromptVersion(value: string): RunLlmEvaluationReleaseGateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunLlmEvaluationReleaseGateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunLlmEvaluationReleaseGateRequest): RunLlmEvaluationReleaseGateRequest.AsObject;
  static serializeBinaryToWriter(message: RunLlmEvaluationReleaseGateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunLlmEvaluationReleaseGateRequest;
  static deserializeBinaryFromReader(message: RunLlmEvaluationReleaseGateRequest, reader: jspb.BinaryReader): RunLlmEvaluationReleaseGateRequest;
}

export namespace RunLlmEvaluationReleaseGateRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
    ccaiServiceNamesList: Array<string>,
    gitSha: string,
    promptVersion: string,
  }
}

export class GetLlmEvaluationReleaseGateRunRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationReleaseGateRunRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationReleaseGateRunRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationReleaseGateRunRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationReleaseGateRunRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationReleaseGateRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationReleaseGateRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationReleaseGateRunRequest): GetLlmEvaluationReleaseGateRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationReleaseGateRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationReleaseGateRunRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationReleaseGateRunRequest, reader: jspb.BinaryReader): GetLlmEvaluationReleaseGateRunRequest;
}

export namespace GetLlmEvaluationReleaseGateRunRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationReleaseGateRunFilter extends jspb.Message {
  getLlmEvaluationReleaseGateName(): string;
  setLlmEvaluationReleaseGateName(value: string): LlmEvaluationReleaseGateRunFilter;

  getLlmEvaluationReleaseGateVerdict(): LlmEvaluationReleaseGateVerdict;
  setLlmEvaluationReleaseGateVerdict(value: LlmEvaluationReleaseGateVerdict): LlmEvaluationReleaseGateRunFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReleaseGateRunFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReleaseGateRunFilter): LlmEvaluationReleaseGateRunFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReleaseGateRunFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReleaseGateRunFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationReleaseGateRunFilter, reader: jspb.BinaryReader): LlmEvaluationReleaseGateRunFilter;
}

export namespace LlmEvaluationReleaseGateRunFilter {
  export type AsObject = {
    llmEvaluationReleaseGateName: string,
    llmEvaluationReleaseGateVerdict: LlmEvaluationReleaseGateVerdict,
  }
}

export class ListLlmEvaluationReleaseGateRunsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationReleaseGateRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationReleaseGateRunsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationReleaseGateRunsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationReleaseGateRunsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationReleaseGateRunsRequest;

  getLlmEvaluationReleaseGateRunFilter(): LlmEvaluationReleaseGateRunFilter | undefined;
  setLlmEvaluationReleaseGateRunFilter(value?: LlmEvaluationReleaseGateRunFilter): ListLlmEvaluationReleaseGateRunsRequest;
  hasLlmEvaluationReleaseGateRunFilter(): boolean;
  clearLlmEvaluationReleaseGateRunFilter(): ListLlmEvaluationReleaseGateRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReleaseGateRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReleaseGateRunsRequest): ListLlmEvaluationReleaseGateRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReleaseGateRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReleaseGateRunsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReleaseGateRunsRequest, reader: jspb.BinaryReader): ListLlmEvaluationReleaseGateRunsRequest;
}

export namespace ListLlmEvaluationReleaseGateRunsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationReleaseGateRunFilter?: LlmEvaluationReleaseGateRunFilter.AsObject,
  }
}

export class ListLlmEvaluationReleaseGateRunsResponse extends jspb.Message {
  getLlmEvaluationReleaseGateRunsList(): Array<LlmEvaluationReleaseGateRun>;
  setLlmEvaluationReleaseGateRunsList(value: Array<LlmEvaluationReleaseGateRun>): ListLlmEvaluationReleaseGateRunsResponse;
  clearLlmEvaluationReleaseGateRunsList(): ListLlmEvaluationReleaseGateRunsResponse;
  addLlmEvaluationReleaseGateRuns(value?: LlmEvaluationReleaseGateRun, index?: number): LlmEvaluationReleaseGateRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationReleaseGateRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReleaseGateRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReleaseGateRunsResponse): ListLlmEvaluationReleaseGateRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReleaseGateRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReleaseGateRunsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReleaseGateRunsResponse, reader: jspb.BinaryReader): ListLlmEvaluationReleaseGateRunsResponse;
}

export namespace ListLlmEvaluationReleaseGateRunsResponse {
  export type AsObject = {
    llmEvaluationReleaseGateRunsList: Array<LlmEvaluationReleaseGateRun.AsObject>,
    nextPageToken: string,
  }
}

export class LlmEvaluationScorecardComponent extends jspb.Message {
  getCriterion(): string;
  setCriterion(value: string): LlmEvaluationScorecardComponent;

  getWeight(): number;
  setWeight(value: number): LlmEvaluationScorecardComponent;

  getTargetScore(): number;
  setTargetScore(value: number): LlmEvaluationScorecardComponent;

  getEvaluatorName(): string;
  setEvaluatorName(value: string): LlmEvaluationScorecardComponent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationScorecardComponent.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationScorecardComponent): LlmEvaluationScorecardComponent.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationScorecardComponent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationScorecardComponent;
  static deserializeBinaryFromReader(message: LlmEvaluationScorecardComponent, reader: jspb.BinaryReader): LlmEvaluationScorecardComponent;
}

export namespace LlmEvaluationScorecardComponent {
  export type AsObject = {
    criterion: string,
    weight: number,
    targetScore: number,
    evaluatorName: string,
  }
}

export class LlmEvaluationScorecard extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationScorecard;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationScorecard;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationScorecard;

  getLlmEvaluationScorecardComponentsList(): Array<LlmEvaluationScorecardComponent>;
  setLlmEvaluationScorecardComponentsList(value: Array<LlmEvaluationScorecardComponent>): LlmEvaluationScorecard;
  clearLlmEvaluationScorecardComponentsList(): LlmEvaluationScorecard;
  addLlmEvaluationScorecardComponents(value?: LlmEvaluationScorecardComponent, index?: number): LlmEvaluationScorecardComponent;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationScorecard;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationScorecard;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationScorecard;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationScorecard;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationScorecard;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationScorecard;

  getParent(): string;
  setParent(value: string): LlmEvaluationScorecard;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationScorecard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationScorecard.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationScorecard): LlmEvaluationScorecard.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationScorecard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationScorecard;
  static deserializeBinaryFromReader(message: LlmEvaluationScorecard, reader: jspb.BinaryReader): LlmEvaluationScorecard;
}

export namespace LlmEvaluationScorecard {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    llmEvaluationScorecardComponentsList: Array<LlmEvaluationScorecardComponent.AsObject>,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class CreateLlmEvaluationScorecardRequest extends jspb.Message {
  getLlmEvaluationScorecard(): LlmEvaluationScorecard | undefined;
  setLlmEvaluationScorecard(value?: LlmEvaluationScorecard): CreateLlmEvaluationScorecardRequest;
  hasLlmEvaluationScorecard(): boolean;
  clearLlmEvaluationScorecard(): CreateLlmEvaluationScorecardRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationScorecardRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationScorecardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationScorecardRequest): CreateLlmEvaluationScorecardRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationScorecardRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationScorecardRequest, reader: jspb.BinaryReader): CreateLlmEvaluationScorecardRequest;
}

export namespace CreateLlmEvaluationScorecardRequest {
  export type AsObject = {
    llmEvaluationScorecard?: LlmEvaluationScorecard.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationScorecardRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationScorecardRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationScorecardRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationScorecardRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationScorecardRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationScorecardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationScorecardRequest): GetLlmEvaluationScorecardRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationScorecardRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationScorecardRequest, reader: jspb.BinaryReader): GetLlmEvaluationScorecardRequest;
}

export namespace GetLlmEvaluationScorecardRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationScorecardFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationScorecardFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationScorecardFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationScorecardFilter): LlmEvaluationScorecardFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationScorecardFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationScorecardFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationScorecardFilter, reader: jspb.BinaryReader): LlmEvaluationScorecardFilter;
}

export namespace LlmEvaluationScorecardFilter {
  export type AsObject = {
    displayName: string,
  }
}

export class ListLlmEvaluationScorecardsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationScorecardsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationScorecardsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationScorecardsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationScorecardsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationScorecardsRequest;

  getLlmEvaluationScorecardFilter(): LlmEvaluationScorecardFilter | undefined;
  setLlmEvaluationScorecardFilter(value?: LlmEvaluationScorecardFilter): ListLlmEvaluationScorecardsRequest;
  hasLlmEvaluationScorecardFilter(): boolean;
  clearLlmEvaluationScorecardFilter(): ListLlmEvaluationScorecardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationScorecardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationScorecardsRequest): ListLlmEvaluationScorecardsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationScorecardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationScorecardsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationScorecardsRequest, reader: jspb.BinaryReader): ListLlmEvaluationScorecardsRequest;
}

export namespace ListLlmEvaluationScorecardsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationScorecardFilter?: LlmEvaluationScorecardFilter.AsObject,
  }
}

export class ListLlmEvaluationScorecardsResponse extends jspb.Message {
  getLlmEvaluationScorecardsList(): Array<LlmEvaluationScorecard>;
  setLlmEvaluationScorecardsList(value: Array<LlmEvaluationScorecard>): ListLlmEvaluationScorecardsResponse;
  clearLlmEvaluationScorecardsList(): ListLlmEvaluationScorecardsResponse;
  addLlmEvaluationScorecards(value?: LlmEvaluationScorecard, index?: number): LlmEvaluationScorecard;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationScorecardsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationScorecardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationScorecardsResponse): ListLlmEvaluationScorecardsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationScorecardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationScorecardsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationScorecardsResponse, reader: jspb.BinaryReader): ListLlmEvaluationScorecardsResponse;
}

export namespace ListLlmEvaluationScorecardsResponse {
  export type AsObject = {
    llmEvaluationScorecardsList: Array<LlmEvaluationScorecard.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationScorecardRequest extends jspb.Message {
  getLlmEvaluationScorecard(): LlmEvaluationScorecard | undefined;
  setLlmEvaluationScorecard(value?: LlmEvaluationScorecard): UpdateLlmEvaluationScorecardRequest;
  hasLlmEvaluationScorecard(): boolean;
  clearLlmEvaluationScorecard(): UpdateLlmEvaluationScorecardRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationScorecardRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationScorecardRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationScorecardRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationScorecardRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationScorecardRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationScorecardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationScorecardRequest): UpdateLlmEvaluationScorecardRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationScorecardRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationScorecardRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationScorecardRequest;
}

export namespace UpdateLlmEvaluationScorecardRequest {
  export type AsObject = {
    llmEvaluationScorecard?: LlmEvaluationScorecard.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationScorecardRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationScorecardRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationScorecardRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationScorecardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationScorecardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationScorecardRequest): DeleteLlmEvaluationScorecardRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationScorecardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationScorecardRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationScorecardRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationScorecardRequest;
}

export namespace DeleteLlmEvaluationScorecardRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationJudgeConfig extends jspb.Message {
  getCcaiServiceName(): string;
  setCcaiServiceName(value: string): LlmEvaluationJudgeConfig;

  getModelName(): string;
  setModelName(value: string): LlmEvaluationJudgeConfig;

  getTemperature(): number;
  setTemperature(value: number): LlmEvaluationJudgeConfig;

  getVerboseReasoning(): boolean;
  setVerboseReasoning(value: boolean): LlmEvaluationJudgeConfig;

  getEvaluatorOverrides(): google_protobuf_struct_pb.Struct | undefined;
  setEvaluatorOverrides(value?: google_protobuf_struct_pb.Struct): LlmEvaluationJudgeConfig;
  hasEvaluatorOverrides(): boolean;
  clearEvaluatorOverrides(): LlmEvaluationJudgeConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationJudgeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationJudgeConfig): LlmEvaluationJudgeConfig.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationJudgeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationJudgeConfig;
  static deserializeBinaryFromReader(message: LlmEvaluationJudgeConfig, reader: jspb.BinaryReader): LlmEvaluationJudgeConfig;
}

export namespace LlmEvaluationJudgeConfig {
  export type AsObject = {
    ccaiServiceName: string,
    modelName: string,
    temperature: number,
    verboseReasoning: boolean,
    evaluatorOverrides?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class LlmEvaluationProjectSettings extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationProjectSettings;

  getLlmEvaluationJudgeConfig(): LlmEvaluationJudgeConfig | undefined;
  setLlmEvaluationJudgeConfig(value?: LlmEvaluationJudgeConfig): LlmEvaluationProjectSettings;
  hasLlmEvaluationJudgeConfig(): boolean;
  clearLlmEvaluationJudgeConfig(): LlmEvaluationProjectSettings;

  getDefaultWeights(): google_protobuf_struct_pb.Struct | undefined;
  setDefaultWeights(value?: google_protobuf_struct_pb.Struct): LlmEvaluationProjectSettings;
  hasDefaultWeights(): boolean;
  clearDefaultWeights(): LlmEvaluationProjectSettings;

  getDefaultPassCutoffScore(): number;
  setDefaultPassCutoffScore(value: number): LlmEvaluationProjectSettings;

  getDefaultScorecardName(): string;
  setDefaultScorecardName(value: string): LlmEvaluationProjectSettings;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationProjectSettings;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationProjectSettings;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationProjectSettings;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationProjectSettings;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationProjectSettings;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationProjectSettings;

  getParent(): string;
  setParent(value: string): LlmEvaluationProjectSettings;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationProjectSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationProjectSettings.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationProjectSettings): LlmEvaluationProjectSettings.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationProjectSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationProjectSettings;
  static deserializeBinaryFromReader(message: LlmEvaluationProjectSettings, reader: jspb.BinaryReader): LlmEvaluationProjectSettings;
}

export namespace LlmEvaluationProjectSettings {
  export type AsObject = {
    name: string,
    llmEvaluationJudgeConfig?: LlmEvaluationJudgeConfig.AsObject,
    defaultWeights?: google_protobuf_struct_pb.Struct.AsObject,
    defaultPassCutoffScore: number,
    defaultScorecardName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationProjectSettingsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetLlmEvaluationProjectSettingsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationProjectSettingsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationProjectSettingsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationProjectSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationProjectSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationProjectSettingsRequest): GetLlmEvaluationProjectSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationProjectSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationProjectSettingsRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationProjectSettingsRequest, reader: jspb.BinaryReader): GetLlmEvaluationProjectSettingsRequest;
}

export namespace GetLlmEvaluationProjectSettingsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UpdateLlmEvaluationProjectSettingsRequest extends jspb.Message {
  getLlmEvaluationProjectSettings(): LlmEvaluationProjectSettings | undefined;
  setLlmEvaluationProjectSettings(value?: LlmEvaluationProjectSettings): UpdateLlmEvaluationProjectSettingsRequest;
  hasLlmEvaluationProjectSettings(): boolean;
  clearLlmEvaluationProjectSettings(): UpdateLlmEvaluationProjectSettingsRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationProjectSettingsRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationProjectSettingsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationProjectSettingsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationProjectSettingsRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationProjectSettingsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationProjectSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationProjectSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationProjectSettingsRequest): UpdateLlmEvaluationProjectSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationProjectSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationProjectSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationProjectSettingsRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationProjectSettingsRequest;
}

export namespace UpdateLlmEvaluationProjectSettingsRequest {
  export type AsObject = {
    llmEvaluationProjectSettings?: LlmEvaluationProjectSettings.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationEvaluatorParameterSpec extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationEvaluatorParameterSpec;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationEvaluatorParameterSpec;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationEvaluatorParameterSpec;

  getValueType(): string;
  setValueType(value: string): LlmEvaluationEvaluatorParameterSpec;

  getDefaultValue(): string;
  setDefaultValue(value: string): LlmEvaluationEvaluatorParameterSpec;

  getRequired(): boolean;
  setRequired(value: boolean): LlmEvaluationEvaluatorParameterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationEvaluatorParameterSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationEvaluatorParameterSpec): LlmEvaluationEvaluatorParameterSpec.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationEvaluatorParameterSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationEvaluatorParameterSpec;
  static deserializeBinaryFromReader(message: LlmEvaluationEvaluatorParameterSpec, reader: jspb.BinaryReader): LlmEvaluationEvaluatorParameterSpec;
}

export namespace LlmEvaluationEvaluatorParameterSpec {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    valueType: string,
    defaultValue: string,
    required: boolean,
  }
}

export class LlmEvaluationEvaluatorSpec extends jspb.Message {
  getEvaluatorName(): string;
  setEvaluatorName(value: string): LlmEvaluationEvaluatorSpec;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationEvaluatorSpec;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationEvaluatorSpec;

  getLlmEvaluationEvaluatorType(): LlmEvaluationEvaluatorType;
  setLlmEvaluationEvaluatorType(value: LlmEvaluationEvaluatorType): LlmEvaluationEvaluatorSpec;

  getLlmEvaluationEvaluatorCategory(): LlmEvaluationEvaluatorCategory;
  setLlmEvaluationEvaluatorCategory(value: LlmEvaluationEvaluatorCategory): LlmEvaluationEvaluatorSpec;

  getRequiredExampleFieldsList(): Array<string>;
  setRequiredExampleFieldsList(value: Array<string>): LlmEvaluationEvaluatorSpec;
  clearRequiredExampleFieldsList(): LlmEvaluationEvaluatorSpec;
  addRequiredExampleFields(value: string, index?: number): LlmEvaluationEvaluatorSpec;

  getMultiTurn(): boolean;
  setMultiTurn(value: boolean): LlmEvaluationEvaluatorSpec;

  getDefaultThreshold(): number;
  setDefaultThreshold(value: number): LlmEvaluationEvaluatorSpec;

  getRequiresJudge(): boolean;
  setRequiresJudge(value: boolean): LlmEvaluationEvaluatorSpec;

  getLlmEvaluationEvaluatorParameterSpecsList(): Array<LlmEvaluationEvaluatorParameterSpec>;
  setLlmEvaluationEvaluatorParameterSpecsList(value: Array<LlmEvaluationEvaluatorParameterSpec>): LlmEvaluationEvaluatorSpec;
  clearLlmEvaluationEvaluatorParameterSpecsList(): LlmEvaluationEvaluatorSpec;
  addLlmEvaluationEvaluatorParameterSpecs(value?: LlmEvaluationEvaluatorParameterSpec, index?: number): LlmEvaluationEvaluatorParameterSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationEvaluatorSpec.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationEvaluatorSpec): LlmEvaluationEvaluatorSpec.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationEvaluatorSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationEvaluatorSpec;
  static deserializeBinaryFromReader(message: LlmEvaluationEvaluatorSpec, reader: jspb.BinaryReader): LlmEvaluationEvaluatorSpec;
}

export namespace LlmEvaluationEvaluatorSpec {
  export type AsObject = {
    evaluatorName: string,
    displayName: string,
    description: string,
    llmEvaluationEvaluatorType: LlmEvaluationEvaluatorType,
    llmEvaluationEvaluatorCategory: LlmEvaluationEvaluatorCategory,
    requiredExampleFieldsList: Array<string>,
    multiTurn: boolean,
    defaultThreshold: number,
    requiresJudge: boolean,
    llmEvaluationEvaluatorParameterSpecsList: Array<LlmEvaluationEvaluatorParameterSpec.AsObject>,
  }
}

export class ListLlmEvaluationEvaluatorsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationEvaluatorsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationEvaluatorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationEvaluatorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationEvaluatorsRequest): ListLlmEvaluationEvaluatorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationEvaluatorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationEvaluatorsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationEvaluatorsRequest, reader: jspb.BinaryReader): ListLlmEvaluationEvaluatorsRequest;
}

export namespace ListLlmEvaluationEvaluatorsRequest {
  export type AsObject = {
    parent: string,
    languageCode: string,
  }
}

export class ListLlmEvaluationEvaluatorsResponse extends jspb.Message {
  getLlmEvaluationEvaluatorSpecsList(): Array<LlmEvaluationEvaluatorSpec>;
  setLlmEvaluationEvaluatorSpecsList(value: Array<LlmEvaluationEvaluatorSpec>): ListLlmEvaluationEvaluatorsResponse;
  clearLlmEvaluationEvaluatorSpecsList(): ListLlmEvaluationEvaluatorsResponse;
  addLlmEvaluationEvaluatorSpecs(value?: LlmEvaluationEvaluatorSpec, index?: number): LlmEvaluationEvaluatorSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationEvaluatorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationEvaluatorsResponse): ListLlmEvaluationEvaluatorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationEvaluatorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationEvaluatorsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationEvaluatorsResponse, reader: jspb.BinaryReader): ListLlmEvaluationEvaluatorsResponse;
}

export namespace ListLlmEvaluationEvaluatorsResponse {
  export type AsObject = {
    llmEvaluationEvaluatorSpecsList: Array<LlmEvaluationEvaluatorSpec.AsObject>,
  }
}

export class CreateLlmEvaluationExamplesFromSessionRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateLlmEvaluationExamplesFromSessionRequest;

  getSessionName(): string;
  setSessionName(value: string): CreateLlmEvaluationExamplesFromSessionRequest;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): CreateLlmEvaluationExamplesFromSessionRequest;

  getSessionStepNamesList(): Array<string>;
  setSessionStepNamesList(value: Array<string>): CreateLlmEvaluationExamplesFromSessionRequest;
  clearSessionStepNamesList(): CreateLlmEvaluationExamplesFromSessionRequest;
  addSessionStepNames(value: string, index?: number): CreateLlmEvaluationExamplesFromSessionRequest;

  getLlmEvaluationExampleExtractionMode(): LlmEvaluationExampleExtractionMode;
  setLlmEvaluationExampleExtractionMode(value: LlmEvaluationExampleExtractionMode): CreateLlmEvaluationExamplesFromSessionRequest;

  getDisplayName(): string;
  setDisplayName(value: string): CreateLlmEvaluationExamplesFromSessionRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationExamplesFromSessionRequest;

  getIncludeToolCalls(): boolean;
  setIncludeToolCalls(value: boolean): CreateLlmEvaluationExamplesFromSessionRequest;

  getIncludeRetrievalContext(): boolean;
  setIncludeRetrievalContext(value: boolean): CreateLlmEvaluationExamplesFromSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationExamplesFromSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationExamplesFromSessionRequest): CreateLlmEvaluationExamplesFromSessionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationExamplesFromSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationExamplesFromSessionRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationExamplesFromSessionRequest, reader: jspb.BinaryReader): CreateLlmEvaluationExamplesFromSessionRequest;
}

export namespace CreateLlmEvaluationExamplesFromSessionRequest {
  export type AsObject = {
    parent: string,
    sessionName: string,
    llmEvaluationDatasetName: string,
    sessionStepNamesList: Array<string>,
    llmEvaluationExampleExtractionMode: LlmEvaluationExampleExtractionMode,
    displayName: string,
    languageCode: string,
    includeToolCalls: boolean,
    includeRetrievalContext: boolean,
  }
}

export class CreateLlmEvaluationExamplesFromSessionResponse extends jspb.Message {
  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): CreateLlmEvaluationExamplesFromSessionResponse;
  clearLlmEvaluationExamplesList(): CreateLlmEvaluationExamplesFromSessionResponse;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationExamplesFromSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationExamplesFromSessionResponse): CreateLlmEvaluationExamplesFromSessionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationExamplesFromSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationExamplesFromSessionResponse;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationExamplesFromSessionResponse, reader: jspb.BinaryReader): CreateLlmEvaluationExamplesFromSessionResponse;
}

export namespace CreateLlmEvaluationExamplesFromSessionResponse {
  export type AsObject = {
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
  }
}

export class LlmEvaluationSimulationPersona extends jspb.Message {
  getPersona(): string;
  setPersona(value: string): LlmEvaluationSimulationPersona;

  getScenario(): string;
  setScenario(value: string): LlmEvaluationSimulationPersona;

  getExpectedOutcome(): string;
  setExpectedOutcome(value: string): LlmEvaluationSimulationPersona;

  getUserDescription(): string;
  setUserDescription(value: string): LlmEvaluationSimulationPersona;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationSimulationPersona.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationSimulationPersona): LlmEvaluationSimulationPersona.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationSimulationPersona, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationSimulationPersona;
  static deserializeBinaryFromReader(message: LlmEvaluationSimulationPersona, reader: jspb.BinaryReader): LlmEvaluationSimulationPersona;
}

export namespace LlmEvaluationSimulationPersona {
  export type AsObject = {
    persona: string,
    scenario: string,
    expectedOutcome: string,
    userDescription: string,
  }
}

export class SimulateLlmEvaluationConversationsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): SimulateLlmEvaluationConversationsRequest;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): SimulateLlmEvaluationConversationsRequest;

  getLlmEvaluationSimulationPersonasList(): Array<LlmEvaluationSimulationPersona>;
  setLlmEvaluationSimulationPersonasList(value: Array<LlmEvaluationSimulationPersona>): SimulateLlmEvaluationConversationsRequest;
  clearLlmEvaluationSimulationPersonasList(): SimulateLlmEvaluationConversationsRequest;
  addLlmEvaluationSimulationPersonas(value?: LlmEvaluationSimulationPersona, index?: number): LlmEvaluationSimulationPersona;

  getNumConversations(): number;
  setNumConversations(value: number): SimulateLlmEvaluationConversationsRequest;

  getMaxTurns(): number;
  setMaxTurns(value: number): SimulateLlmEvaluationConversationsRequest;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): SimulateLlmEvaluationConversationsRequest;
  clearCcaiServiceNamesList(): SimulateLlmEvaluationConversationsRequest;
  addCcaiServiceNames(value: string, index?: number): SimulateLlmEvaluationConversationsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): SimulateLlmEvaluationConversationsRequest;

  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): SimulateLlmEvaluationConversationsRequest;
  hasConfig(): boolean;
  clearConfig(): SimulateLlmEvaluationConversationsRequest;

  getLlmEvaluationSimulationKind(): LlmEvaluationSimulationKind;
  setLlmEvaluationSimulationKind(value: LlmEvaluationSimulationKind): SimulateLlmEvaluationConversationsRequest;

  getAttackTypesList(): Array<string>;
  setAttackTypesList(value: Array<string>): SimulateLlmEvaluationConversationsRequest;
  clearAttackTypesList(): SimulateLlmEvaluationConversationsRequest;
  addAttackTypes(value: string, index?: number): SimulateLlmEvaluationConversationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimulateLlmEvaluationConversationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimulateLlmEvaluationConversationsRequest): SimulateLlmEvaluationConversationsRequest.AsObject;
  static serializeBinaryToWriter(message: SimulateLlmEvaluationConversationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimulateLlmEvaluationConversationsRequest;
  static deserializeBinaryFromReader(message: SimulateLlmEvaluationConversationsRequest, reader: jspb.BinaryReader): SimulateLlmEvaluationConversationsRequest;
}

export namespace SimulateLlmEvaluationConversationsRequest {
  export type AsObject = {
    parent: string,
    llmEvaluationDatasetName: string,
    llmEvaluationSimulationPersonasList: Array<LlmEvaluationSimulationPersona.AsObject>,
    numConversations: number,
    maxTurns: number,
    ccaiServiceNamesList: Array<string>,
    languageCode: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    llmEvaluationSimulationKind: LlmEvaluationSimulationKind,
    attackTypesList: Array<string>,
  }
}

export class LlmEvaluationSchedule extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationSchedule;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationSchedule;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationSchedule;

  getCronExpression(): string;
  setCronExpression(value: string): LlmEvaluationSchedule;

  getIntervalSeconds(): number;
  setIntervalSeconds(value: number): LlmEvaluationSchedule;

  getEnabled(): boolean;
  setEnabled(value: boolean): LlmEvaluationSchedule;

  getLlmEvaluationScheduleAction(): LlmEvaluationScheduleAction;
  setLlmEvaluationScheduleAction(value: LlmEvaluationScheduleAction): LlmEvaluationSchedule;

  getRunLlmEvaluationExperimentRequest(): RunLlmEvaluationExperimentRequest | undefined;
  setRunLlmEvaluationExperimentRequest(value?: RunLlmEvaluationExperimentRequest): LlmEvaluationSchedule;
  hasRunLlmEvaluationExperimentRequest(): boolean;
  clearRunLlmEvaluationExperimentRequest(): LlmEvaluationSchedule;

  getLlmEvaluationReleaseGateName(): string;
  setLlmEvaluationReleaseGateName(value: string): LlmEvaluationSchedule;

  getLastRunAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastRunAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationSchedule;
  hasLastRunAt(): boolean;
  clearLastRunAt(): LlmEvaluationSchedule;

  getNextRunAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextRunAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationSchedule;
  hasNextRunAt(): boolean;
  clearNextRunAt(): LlmEvaluationSchedule;

  getLastRunResourceName(): string;
  setLastRunResourceName(value: string): LlmEvaluationSchedule;

  getLastRunStatus(): LlmEvaluationExperimentStatus;
  setLastRunStatus(value: LlmEvaluationExperimentStatus): LlmEvaluationSchedule;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationSchedule;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationSchedule;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationSchedule;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationSchedule;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationSchedule;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationSchedule;

  getParent(): string;
  setParent(value: string): LlmEvaluationSchedule;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationSchedule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationSchedule): LlmEvaluationSchedule.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationSchedule;
  static deserializeBinaryFromReader(message: LlmEvaluationSchedule, reader: jspb.BinaryReader): LlmEvaluationSchedule;
}

export namespace LlmEvaluationSchedule {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    cronExpression: string,
    intervalSeconds: number,
    enabled: boolean,
    llmEvaluationScheduleAction: LlmEvaluationScheduleAction,
    runLlmEvaluationExperimentRequest?: RunLlmEvaluationExperimentRequest.AsObject,
    llmEvaluationReleaseGateName: string,
    lastRunAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nextRunAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastRunResourceName: string,
    lastRunStatus: LlmEvaluationExperimentStatus,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class CreateLlmEvaluationScheduleRequest extends jspb.Message {
  getLlmEvaluationSchedule(): LlmEvaluationSchedule | undefined;
  setLlmEvaluationSchedule(value?: LlmEvaluationSchedule): CreateLlmEvaluationScheduleRequest;
  hasLlmEvaluationSchedule(): boolean;
  clearLlmEvaluationSchedule(): CreateLlmEvaluationScheduleRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationScheduleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationScheduleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationScheduleRequest): CreateLlmEvaluationScheduleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationScheduleRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationScheduleRequest, reader: jspb.BinaryReader): CreateLlmEvaluationScheduleRequest;
}

export namespace CreateLlmEvaluationScheduleRequest {
  export type AsObject = {
    llmEvaluationSchedule?: LlmEvaluationSchedule.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationScheduleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationScheduleRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationScheduleRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationScheduleRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationScheduleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationScheduleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationScheduleRequest): GetLlmEvaluationScheduleRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationScheduleRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationScheduleRequest, reader: jspb.BinaryReader): GetLlmEvaluationScheduleRequest;
}

export namespace GetLlmEvaluationScheduleRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationScheduleFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationScheduleFilter;

  getEnabledOnly(): boolean;
  setEnabledOnly(value: boolean): LlmEvaluationScheduleFilter;

  getLlmEvaluationScheduleAction(): LlmEvaluationScheduleAction;
  setLlmEvaluationScheduleAction(value: LlmEvaluationScheduleAction): LlmEvaluationScheduleFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationScheduleFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationScheduleFilter): LlmEvaluationScheduleFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationScheduleFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationScheduleFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationScheduleFilter, reader: jspb.BinaryReader): LlmEvaluationScheduleFilter;
}

export namespace LlmEvaluationScheduleFilter {
  export type AsObject = {
    displayName: string,
    enabledOnly: boolean,
    llmEvaluationScheduleAction: LlmEvaluationScheduleAction,
  }
}

export class ListLlmEvaluationSchedulesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationSchedulesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationSchedulesRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationSchedulesRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationSchedulesRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationSchedulesRequest;

  getLlmEvaluationScheduleFilter(): LlmEvaluationScheduleFilter | undefined;
  setLlmEvaluationScheduleFilter(value?: LlmEvaluationScheduleFilter): ListLlmEvaluationSchedulesRequest;
  hasLlmEvaluationScheduleFilter(): boolean;
  clearLlmEvaluationScheduleFilter(): ListLlmEvaluationSchedulesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationSchedulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationSchedulesRequest): ListLlmEvaluationSchedulesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationSchedulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationSchedulesRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationSchedulesRequest, reader: jspb.BinaryReader): ListLlmEvaluationSchedulesRequest;
}

export namespace ListLlmEvaluationSchedulesRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationScheduleFilter?: LlmEvaluationScheduleFilter.AsObject,
  }
}

export class ListLlmEvaluationSchedulesResponse extends jspb.Message {
  getLlmEvaluationSchedulesList(): Array<LlmEvaluationSchedule>;
  setLlmEvaluationSchedulesList(value: Array<LlmEvaluationSchedule>): ListLlmEvaluationSchedulesResponse;
  clearLlmEvaluationSchedulesList(): ListLlmEvaluationSchedulesResponse;
  addLlmEvaluationSchedules(value?: LlmEvaluationSchedule, index?: number): LlmEvaluationSchedule;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationSchedulesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationSchedulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationSchedulesResponse): ListLlmEvaluationSchedulesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationSchedulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationSchedulesResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationSchedulesResponse, reader: jspb.BinaryReader): ListLlmEvaluationSchedulesResponse;
}

export namespace ListLlmEvaluationSchedulesResponse {
  export type AsObject = {
    llmEvaluationSchedulesList: Array<LlmEvaluationSchedule.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationScheduleRequest extends jspb.Message {
  getLlmEvaluationSchedule(): LlmEvaluationSchedule | undefined;
  setLlmEvaluationSchedule(value?: LlmEvaluationSchedule): UpdateLlmEvaluationScheduleRequest;
  hasLlmEvaluationSchedule(): boolean;
  clearLlmEvaluationSchedule(): UpdateLlmEvaluationScheduleRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationScheduleRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationScheduleRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationScheduleRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationScheduleRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationScheduleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationScheduleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationScheduleRequest): UpdateLlmEvaluationScheduleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationScheduleRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationScheduleRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationScheduleRequest;
}

export namespace UpdateLlmEvaluationScheduleRequest {
  export type AsObject = {
    llmEvaluationSchedule?: LlmEvaluationSchedule.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationScheduleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationScheduleRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationScheduleRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationScheduleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationScheduleRequest): DeleteLlmEvaluationScheduleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationScheduleRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationScheduleRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationScheduleRequest;
}

export namespace DeleteLlmEvaluationScheduleRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationReport extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationReport;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationReport;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationReport;

  getReportType(): string;
  setReportType(value: string): LlmEvaluationReport;

  getMimeType(): string;
  setMimeType(value: string): LlmEvaluationReport;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): LlmEvaluationReport;

  getMetadata(): google_protobuf_struct_pb.Struct | undefined;
  setMetadata(value?: google_protobuf_struct_pb.Struct): LlmEvaluationReport;
  hasMetadata(): boolean;
  clearMetadata(): LlmEvaluationReport;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReport;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationReport;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationReport;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationReport;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationReport;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationReport;

  getParent(): string;
  setParent(value: string): LlmEvaluationReport;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationReport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReport.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReport): LlmEvaluationReport.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReport;
  static deserializeBinaryFromReader(message: LlmEvaluationReport, reader: jspb.BinaryReader): LlmEvaluationReport;
}

export namespace LlmEvaluationReport {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    reportType: string,
    mimeType: string,
    payload: Uint8Array | string,
    metadata?: google_protobuf_struct_pb.Struct.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class CreateLlmEvaluationReportRequest extends jspb.Message {
  getLlmEvaluationReport(): LlmEvaluationReport | undefined;
  setLlmEvaluationReport(value?: LlmEvaluationReport): CreateLlmEvaluationReportRequest;
  hasLlmEvaluationReport(): boolean;
  clearLlmEvaluationReport(): CreateLlmEvaluationReportRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationReportRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationReportRequest): CreateLlmEvaluationReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationReportRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationReportRequest, reader: jspb.BinaryReader): CreateLlmEvaluationReportRequest;
}

export namespace CreateLlmEvaluationReportRequest {
  export type AsObject = {
    llmEvaluationReport?: LlmEvaluationReport.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationReportRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationReportRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationReportRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationReportRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationReportRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationReportRequest): GetLlmEvaluationReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationReportRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationReportRequest, reader: jspb.BinaryReader): GetLlmEvaluationReportRequest;
}

export namespace GetLlmEvaluationReportRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationReportFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationReportFilter;

  getReportType(): string;
  setReportType(value: string): LlmEvaluationReportFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationReportFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationReportFilter): LlmEvaluationReportFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationReportFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationReportFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationReportFilter, reader: jspb.BinaryReader): LlmEvaluationReportFilter;
}

export namespace LlmEvaluationReportFilter {
  export type AsObject = {
    displayName: string,
    reportType: string,
  }
}

export class ListLlmEvaluationReportsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationReportsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationReportsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationReportsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationReportsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationReportsRequest;

  getLlmEvaluationReportFilter(): LlmEvaluationReportFilter | undefined;
  setLlmEvaluationReportFilter(value?: LlmEvaluationReportFilter): ListLlmEvaluationReportsRequest;
  hasLlmEvaluationReportFilter(): boolean;
  clearLlmEvaluationReportFilter(): ListLlmEvaluationReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReportsRequest): ListLlmEvaluationReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReportsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReportsRequest, reader: jspb.BinaryReader): ListLlmEvaluationReportsRequest;
}

export namespace ListLlmEvaluationReportsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationReportFilter?: LlmEvaluationReportFilter.AsObject,
  }
}

export class ListLlmEvaluationReportsResponse extends jspb.Message {
  getLlmEvaluationReportsList(): Array<LlmEvaluationReport>;
  setLlmEvaluationReportsList(value: Array<LlmEvaluationReport>): ListLlmEvaluationReportsResponse;
  clearLlmEvaluationReportsList(): ListLlmEvaluationReportsResponse;
  addLlmEvaluationReports(value?: LlmEvaluationReport, index?: number): LlmEvaluationReport;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationReportsResponse): ListLlmEvaluationReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationReportsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationReportsResponse, reader: jspb.BinaryReader): ListLlmEvaluationReportsResponse;
}

export namespace ListLlmEvaluationReportsResponse {
  export type AsObject = {
    llmEvaluationReportsList: Array<LlmEvaluationReport.AsObject>,
    nextPageToken: string,
  }
}

export class DeleteLlmEvaluationReportRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationReportRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationReportRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationReportRequest): DeleteLlmEvaluationReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationReportRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationReportRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationReportRequest;
}

export namespace DeleteLlmEvaluationReportRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationAbTrafficConfig extends jspb.Message {
  getEnrollmentRate(): number;
  setEnrollmentRate(value: number): LlmEvaluationAbTrafficConfig;

  getAssignmentSalt(): string;
  setAssignmentSalt(value: string): LlmEvaluationAbTrafficConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbTrafficConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbTrafficConfig): LlmEvaluationAbTrafficConfig.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbTrafficConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbTrafficConfig;
  static deserializeBinaryFromReader(message: LlmEvaluationAbTrafficConfig, reader: jspb.BinaryReader): LlmEvaluationAbTrafficConfig;
}

export namespace LlmEvaluationAbTrafficConfig {
  export type AsObject = {
    enrollmentRate: number,
    assignmentSalt: string,
  }
}

export class RagVariantConfig extends jspb.Message {
  getChatAssistantLlmCcaiServiceName(): string;
  setChatAssistantLlmCcaiServiceName(value: string): RagVariantConfig;

  getTopK(): number;
  setTopK(value: number): RagVariantConfig;

  getSimilarityThreshold(): number;
  setSimilarityThreshold(value: number): RagVariantConfig;

  getVectorSimilarityWeight(): number;
  setVectorSimilarityWeight(value: number): RagVariantConfig;

  getRerankModelCcaiServiceName(): string;
  setRerankModelCcaiServiceName(value: string): RagVariantConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RagVariantConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RagVariantConfig): RagVariantConfig.AsObject;
  static serializeBinaryToWriter(message: RagVariantConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RagVariantConfig;
  static deserializeBinaryFromReader(message: RagVariantConfig, reader: jspb.BinaryReader): RagVariantConfig;
}

export namespace RagVariantConfig {
  export type AsObject = {
    chatAssistantLlmCcaiServiceName: string,
    topK: number,
    similarityThreshold: number,
    vectorSimilarityWeight: number,
    rerankModelCcaiServiceName: string,
  }
}

export class LlmEvaluationAbVariant extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): LlmEvaluationAbVariant;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationAbVariant;

  getCcaiServiceNamesList(): Array<string>;
  setCcaiServiceNamesList(value: Array<string>): LlmEvaluationAbVariant;
  clearCcaiServiceNamesList(): LlmEvaluationAbVariant;
  addCcaiServiceNames(value: string, index?: number): LlmEvaluationAbVariant;

  getTrafficWeight(): number;
  setTrafficWeight(value: number): LlmEvaluationAbVariant;

  getIsControl(): boolean;
  setIsControl(value: boolean): LlmEvaluationAbVariant;

  getModelName(): string;
  setModelName(value: string): LlmEvaluationAbVariant;

  getPromptVersion(): string;
  setPromptVersion(value: string): LlmEvaluationAbVariant;

  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): LlmEvaluationAbVariant;
  hasConfig(): boolean;
  clearConfig(): LlmEvaluationAbVariant;

  getRagVariantConfig(): RagVariantConfig | undefined;
  setRagVariantConfig(value?: RagVariantConfig): LlmEvaluationAbVariant;
  hasRagVariantConfig(): boolean;
  clearRagVariantConfig(): LlmEvaluationAbVariant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbVariant.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbVariant): LlmEvaluationAbVariant.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbVariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbVariant;
  static deserializeBinaryFromReader(message: LlmEvaluationAbVariant, reader: jspb.BinaryReader): LlmEvaluationAbVariant;
}

export namespace LlmEvaluationAbVariant {
  export type AsObject = {
    variantId: string,
    displayName: string,
    ccaiServiceNamesList: Array<string>,
    trafficWeight: number,
    isControl: boolean,
    modelName: string,
    promptVersion: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    ragVariantConfig?: RagVariantConfig.AsObject,
  }
}

export class LlmEvaluationAbExperiment extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationAbExperiment;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationAbExperiment;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationAbExperiment;

  getStatus(): LlmEvaluationAbExperimentStatus;
  setStatus(value: LlmEvaluationAbExperimentStatus): LlmEvaluationAbExperiment;

  getVariantsList(): Array<LlmEvaluationAbVariant>;
  setVariantsList(value: Array<LlmEvaluationAbVariant>): LlmEvaluationAbExperiment;
  clearVariantsList(): LlmEvaluationAbExperiment;
  addVariants(value?: LlmEvaluationAbVariant, index?: number): LlmEvaluationAbVariant;

  getTrafficConfig(): LlmEvaluationAbTrafficConfig | undefined;
  setTrafficConfig(value?: LlmEvaluationAbTrafficConfig): LlmEvaluationAbExperiment;
  hasTrafficConfig(): boolean;
  clearTrafficConfig(): LlmEvaluationAbExperiment;

  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbExperiment;
  hasStartedAt(): boolean;
  clearStartedAt(): LlmEvaluationAbExperiment;

  getStoppedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStoppedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbExperiment;
  hasStoppedAt(): boolean;
  clearStoppedAt(): LlmEvaluationAbExperiment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbExperiment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationAbExperiment;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationAbExperiment;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbExperiment;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationAbExperiment;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationAbExperiment;

  getParent(): string;
  setParent(value: string): LlmEvaluationAbExperiment;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationAbExperiment;

  getLlmEvaluationAbRolloutDecisionName(): string;
  setLlmEvaluationAbRolloutDecisionName(value: string): LlmEvaluationAbExperiment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbExperiment.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbExperiment): LlmEvaluationAbExperiment.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbExperiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbExperiment;
  static deserializeBinaryFromReader(message: LlmEvaluationAbExperiment, reader: jspb.BinaryReader): LlmEvaluationAbExperiment;
}

export namespace LlmEvaluationAbExperiment {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    status: LlmEvaluationAbExperimentStatus,
    variantsList: Array<LlmEvaluationAbVariant.AsObject>,
    trafficConfig?: LlmEvaluationAbTrafficConfig.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stoppedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
    llmEvaluationAbRolloutDecisionName: string,
  }
}

export class LlmEvaluationAbVariantResult extends jspb.Message {
  getVariantId(): string;
  setVariantId(value: string): LlmEvaluationAbVariantResult;

  getSessionCount(): number;
  setSessionCount(value: number): LlmEvaluationAbVariantResult;

  getTelemetry(): google_protobuf_struct_pb.Struct | undefined;
  setTelemetry(value?: google_protobuf_struct_pb.Struct): LlmEvaluationAbVariantResult;
  hasTelemetry(): boolean;
  clearTelemetry(): LlmEvaluationAbVariantResult;

  getDerivedMetrics(): google_protobuf_struct_pb.Struct | undefined;
  setDerivedMetrics(value?: google_protobuf_struct_pb.Struct): LlmEvaluationAbVariantResult;
  hasDerivedMetrics(): boolean;
  clearDerivedMetrics(): LlmEvaluationAbVariantResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbVariantResult.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbVariantResult): LlmEvaluationAbVariantResult.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbVariantResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbVariantResult;
  static deserializeBinaryFromReader(message: LlmEvaluationAbVariantResult, reader: jspb.BinaryReader): LlmEvaluationAbVariantResult;
}

export namespace LlmEvaluationAbVariantResult {
  export type AsObject = {
    variantId: string,
    sessionCount: number,
    telemetry?: google_protobuf_struct_pb.Struct.AsObject,
    derivedMetrics?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class CreateLlmEvaluationAbExperimentRequest extends jspb.Message {
  getLlmEvaluationAbExperiment(): LlmEvaluationAbExperiment | undefined;
  setLlmEvaluationAbExperiment(value?: LlmEvaluationAbExperiment): CreateLlmEvaluationAbExperimentRequest;
  hasLlmEvaluationAbExperiment(): boolean;
  clearLlmEvaluationAbExperiment(): CreateLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationAbExperimentRequest): CreateLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): CreateLlmEvaluationAbExperimentRequest;
}

export namespace CreateLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    llmEvaluationAbExperiment?: LlmEvaluationAbExperiment.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAbExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationAbExperimentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationAbExperimentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAbExperimentRequest): GetLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): GetLlmEvaluationAbExperimentRequest;
}

export namespace GetLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationAbExperimentFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationAbExperimentFilter;

  getStatus(): LlmEvaluationAbExperimentStatus;
  setStatus(value: LlmEvaluationAbExperimentStatus): LlmEvaluationAbExperimentFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbExperimentFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbExperimentFilter): LlmEvaluationAbExperimentFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbExperimentFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbExperimentFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationAbExperimentFilter, reader: jspb.BinaryReader): LlmEvaluationAbExperimentFilter;
}

export namespace LlmEvaluationAbExperimentFilter {
  export type AsObject = {
    displayName: string,
    status: LlmEvaluationAbExperimentStatus,
  }
}

export class ListLlmEvaluationAbExperimentsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationAbExperimentsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationAbExperimentsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationAbExperimentsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationAbExperimentsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationAbExperimentsRequest;

  getLlmEvaluationAbExperimentFilter(): LlmEvaluationAbExperimentFilter | undefined;
  setLlmEvaluationAbExperimentFilter(value?: LlmEvaluationAbExperimentFilter): ListLlmEvaluationAbExperimentsRequest;
  hasLlmEvaluationAbExperimentFilter(): boolean;
  clearLlmEvaluationAbExperimentFilter(): ListLlmEvaluationAbExperimentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAbExperimentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAbExperimentsRequest): ListLlmEvaluationAbExperimentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAbExperimentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAbExperimentsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAbExperimentsRequest, reader: jspb.BinaryReader): ListLlmEvaluationAbExperimentsRequest;
}

export namespace ListLlmEvaluationAbExperimentsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationAbExperimentFilter?: LlmEvaluationAbExperimentFilter.AsObject,
  }
}

export class ListLlmEvaluationAbExperimentsResponse extends jspb.Message {
  getLlmEvaluationAbExperimentsList(): Array<LlmEvaluationAbExperiment>;
  setLlmEvaluationAbExperimentsList(value: Array<LlmEvaluationAbExperiment>): ListLlmEvaluationAbExperimentsResponse;
  clearLlmEvaluationAbExperimentsList(): ListLlmEvaluationAbExperimentsResponse;
  addLlmEvaluationAbExperiments(value?: LlmEvaluationAbExperiment, index?: number): LlmEvaluationAbExperiment;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationAbExperimentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAbExperimentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAbExperimentsResponse): ListLlmEvaluationAbExperimentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAbExperimentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAbExperimentsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAbExperimentsResponse, reader: jspb.BinaryReader): ListLlmEvaluationAbExperimentsResponse;
}

export namespace ListLlmEvaluationAbExperimentsResponse {
  export type AsObject = {
    llmEvaluationAbExperimentsList: Array<LlmEvaluationAbExperiment.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationAbExperimentRequest extends jspb.Message {
  getLlmEvaluationAbExperiment(): LlmEvaluationAbExperiment | undefined;
  setLlmEvaluationAbExperiment(value?: LlmEvaluationAbExperiment): UpdateLlmEvaluationAbExperimentRequest;
  hasLlmEvaluationAbExperiment(): boolean;
  clearLlmEvaluationAbExperiment(): UpdateLlmEvaluationAbExperimentRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationAbExperimentRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationAbExperimentRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationAbExperimentRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationAbExperimentRequest): UpdateLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationAbExperimentRequest;
}

export namespace UpdateLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    llmEvaluationAbExperiment?: LlmEvaluationAbExperiment.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationAbExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationAbExperimentRequest): DeleteLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationAbExperimentRequest;
}

export namespace DeleteLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class StartLlmEvaluationAbExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StartLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): StartLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): StartLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartLlmEvaluationAbExperimentRequest): StartLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: StartLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: StartLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): StartLlmEvaluationAbExperimentRequest;
}

export namespace StartLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class StopLlmEvaluationAbExperimentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): StopLlmEvaluationAbExperimentRequest;

  getParent(): string;
  setParent(value: string): StopLlmEvaluationAbExperimentRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): StopLlmEvaluationAbExperimentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopLlmEvaluationAbExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopLlmEvaluationAbExperimentRequest): StopLlmEvaluationAbExperimentRequest.AsObject;
  static serializeBinaryToWriter(message: StopLlmEvaluationAbExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopLlmEvaluationAbExperimentRequest;
  static deserializeBinaryFromReader(message: StopLlmEvaluationAbExperimentRequest, reader: jspb.BinaryReader): StopLlmEvaluationAbExperimentRequest;
}

export namespace StopLlmEvaluationAbExperimentRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAbExperimentResultsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationAbExperimentResultsRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationAbExperimentResultsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationAbExperimentResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAbExperimentResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAbExperimentResultsRequest): GetLlmEvaluationAbExperimentResultsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAbExperimentResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAbExperimentResultsRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAbExperimentResultsRequest, reader: jspb.BinaryReader): GetLlmEvaluationAbExperimentResultsRequest;
}

export namespace GetLlmEvaluationAbExperimentResultsRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAbExperimentResultsResponse extends jspb.Message {
  getLlmEvaluationAbExperimentName(): string;
  setLlmEvaluationAbExperimentName(value: string): GetLlmEvaluationAbExperimentResultsResponse;

  getVariantResultsList(): Array<LlmEvaluationAbVariantResult>;
  setVariantResultsList(value: Array<LlmEvaluationAbVariantResult>): GetLlmEvaluationAbExperimentResultsResponse;
  clearVariantResultsList(): GetLlmEvaluationAbExperimentResultsResponse;
  addVariantResults(value?: LlmEvaluationAbVariantResult, index?: number): LlmEvaluationAbVariantResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAbExperimentResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAbExperimentResultsResponse): GetLlmEvaluationAbExperimentResultsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAbExperimentResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAbExperimentResultsResponse;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAbExperimentResultsResponse, reader: jspb.BinaryReader): GetLlmEvaluationAbExperimentResultsResponse;
}

export namespace GetLlmEvaluationAbExperimentResultsResponse {
  export type AsObject = {
    llmEvaluationAbExperimentName: string,
    variantResultsList: Array<LlmEvaluationAbVariantResult.AsObject>,
  }
}

export class LlmEvaluationAbRolloutRecommendation extends jspb.Message {
  getOptimizeMetric(): LlmEvaluationAbOptimizeMetric;
  setOptimizeMetric(value: LlmEvaluationAbOptimizeMetric): LlmEvaluationAbRolloutRecommendation;

  getWinnerVariantId(): string;
  setWinnerVariantId(value: string): LlmEvaluationAbRolloutRecommendation;

  getControlVariantId(): string;
  setControlVariantId(value: string): LlmEvaluationAbRolloutRecommendation;

  getPValue(): number;
  setPValue(value: number): LlmEvaluationAbRolloutRecommendation;

  getEffectSize(): number;
  setEffectSize(value: number): LlmEvaluationAbRolloutRecommendation;

  getIsSignificant(): boolean;
  setIsSignificant(value: boolean): LlmEvaluationAbRolloutRecommendation;

  getSessionsPerVariantMap(): jspb.Map<string, number>;
  clearSessionsPerVariantMap(): LlmEvaluationAbRolloutRecommendation;

  getNeedsMoreData(): boolean;
  setNeedsMoreData(value: boolean): LlmEvaluationAbRolloutRecommendation;

  getReason(): string;
  setReason(value: string): LlmEvaluationAbRolloutRecommendation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbRolloutRecommendation.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbRolloutRecommendation): LlmEvaluationAbRolloutRecommendation.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbRolloutRecommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbRolloutRecommendation;
  static deserializeBinaryFromReader(message: LlmEvaluationAbRolloutRecommendation, reader: jspb.BinaryReader): LlmEvaluationAbRolloutRecommendation;
}

export namespace LlmEvaluationAbRolloutRecommendation {
  export type AsObject = {
    optimizeMetric: LlmEvaluationAbOptimizeMetric,
    winnerVariantId: string,
    controlVariantId: string,
    pValue: number,
    effectSize: number,
    isSignificant: boolean,
    sessionsPerVariantMap: Array<[string, number]>,
    needsMoreData: boolean,
    reason: string,
  }
}

export class LlmEvaluationAbRolloutDecision extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationAbRolloutDecision;

  getLlmEvaluationAbExperimentName(): string;
  setLlmEvaluationAbExperimentName(value: string): LlmEvaluationAbRolloutDecision;

  getAppliedVariantId(): string;
  setAppliedVariantId(value: string): LlmEvaluationAbRolloutDecision;

  getOptimizeMetric(): LlmEvaluationAbOptimizeMetric;
  setOptimizeMetric(value: LlmEvaluationAbOptimizeMetric): LlmEvaluationAbRolloutDecision;

  getPValue(): number;
  setPValue(value: number): LlmEvaluationAbRolloutDecision;

  getEffectSize(): number;
  setEffectSize(value: number): LlmEvaluationAbRolloutDecision;

  getAppliedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAppliedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbRolloutDecision;
  hasAppliedAt(): boolean;
  clearAppliedAt(): LlmEvaluationAbRolloutDecision;

  getAppliedBy(): string;
  setAppliedBy(value: string): LlmEvaluationAbRolloutDecision;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbRolloutDecision;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationAbRolloutDecision;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAbRolloutDecision;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationAbRolloutDecision;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationAbRolloutDecision;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationAbRolloutDecision;

  getParent(): string;
  setParent(value: string): LlmEvaluationAbRolloutDecision;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationAbRolloutDecision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbRolloutDecision.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbRolloutDecision): LlmEvaluationAbRolloutDecision.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbRolloutDecision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbRolloutDecision;
  static deserializeBinaryFromReader(message: LlmEvaluationAbRolloutDecision, reader: jspb.BinaryReader): LlmEvaluationAbRolloutDecision;
}

export namespace LlmEvaluationAbRolloutDecision {
  export type AsObject = {
    name: string,
    llmEvaluationAbExperimentName: string,
    appliedVariantId: string,
    optimizeMetric: LlmEvaluationAbOptimizeMetric,
    pValue: number,
    effectSize: number,
    appliedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    appliedBy: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAbRolloutRecommendationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationAbRolloutRecommendationRequest;

  getOptimizeMetric(): LlmEvaluationAbOptimizeMetric;
  setOptimizeMetric(value: LlmEvaluationAbOptimizeMetric): GetLlmEvaluationAbRolloutRecommendationRequest;

  getConfidenceLevel(): number;
  setConfidenceLevel(value: number): GetLlmEvaluationAbRolloutRecommendationRequest;

  getMinSessionsPerVariant(): number;
  setMinSessionsPerVariant(value: number): GetLlmEvaluationAbRolloutRecommendationRequest;

  getMinEffectSize(): number;
  setMinEffectSize(value: number): GetLlmEvaluationAbRolloutRecommendationRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationAbRolloutRecommendationRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationAbRolloutRecommendationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAbRolloutRecommendationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAbRolloutRecommendationRequest): GetLlmEvaluationAbRolloutRecommendationRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAbRolloutRecommendationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAbRolloutRecommendationRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAbRolloutRecommendationRequest, reader: jspb.BinaryReader): GetLlmEvaluationAbRolloutRecommendationRequest;
}

export namespace GetLlmEvaluationAbRolloutRecommendationRequest {
  export type AsObject = {
    name: string,
    optimizeMetric: LlmEvaluationAbOptimizeMetric,
    confidenceLevel: number,
    minSessionsPerVariant: number,
    minEffectSize: number,
    parent: string,
    languageCode: string,
  }
}

export class ApplyLlmEvaluationAbRolloutRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ApplyLlmEvaluationAbRolloutRequest;

  getVariantId(): string;
  setVariantId(value: string): ApplyLlmEvaluationAbRolloutRequest;

  getOptimizeMetric(): LlmEvaluationAbOptimizeMetric;
  setOptimizeMetric(value: LlmEvaluationAbOptimizeMetric): ApplyLlmEvaluationAbRolloutRequest;

  getParent(): string;
  setParent(value: string): ApplyLlmEvaluationAbRolloutRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ApplyLlmEvaluationAbRolloutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyLlmEvaluationAbRolloutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyLlmEvaluationAbRolloutRequest): ApplyLlmEvaluationAbRolloutRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyLlmEvaluationAbRolloutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyLlmEvaluationAbRolloutRequest;
  static deserializeBinaryFromReader(message: ApplyLlmEvaluationAbRolloutRequest, reader: jspb.BinaryReader): ApplyLlmEvaluationAbRolloutRequest;
}

export namespace ApplyLlmEvaluationAbRolloutRequest {
  export type AsObject = {
    name: string,
    variantId: string,
    optimizeMetric: LlmEvaluationAbOptimizeMetric,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAbRolloutDecisionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationAbRolloutDecisionRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationAbRolloutDecisionRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationAbRolloutDecisionRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationAbRolloutDecisionRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationAbRolloutDecisionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAbRolloutDecisionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAbRolloutDecisionRequest): GetLlmEvaluationAbRolloutDecisionRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAbRolloutDecisionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAbRolloutDecisionRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAbRolloutDecisionRequest, reader: jspb.BinaryReader): GetLlmEvaluationAbRolloutDecisionRequest;
}

export namespace GetLlmEvaluationAbRolloutDecisionRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationAbRolloutDecisionFilter extends jspb.Message {
  getLlmEvaluationAbExperimentName(): string;
  setLlmEvaluationAbExperimentName(value: string): LlmEvaluationAbRolloutDecisionFilter;

  getAppliedBy(): string;
  setAppliedBy(value: string): LlmEvaluationAbRolloutDecisionFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAbRolloutDecisionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAbRolloutDecisionFilter): LlmEvaluationAbRolloutDecisionFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAbRolloutDecisionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAbRolloutDecisionFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationAbRolloutDecisionFilter, reader: jspb.BinaryReader): LlmEvaluationAbRolloutDecisionFilter;
}

export namespace LlmEvaluationAbRolloutDecisionFilter {
  export type AsObject = {
    llmEvaluationAbExperimentName: string,
    appliedBy: string,
  }
}

export class ListLlmEvaluationAbRolloutDecisionsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationAbRolloutDecisionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationAbRolloutDecisionsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationAbRolloutDecisionsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationAbRolloutDecisionsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationAbRolloutDecisionsRequest;

  getLlmEvaluationAbRolloutDecisionFilter(): LlmEvaluationAbRolloutDecisionFilter | undefined;
  setLlmEvaluationAbRolloutDecisionFilter(value?: LlmEvaluationAbRolloutDecisionFilter): ListLlmEvaluationAbRolloutDecisionsRequest;
  hasLlmEvaluationAbRolloutDecisionFilter(): boolean;
  clearLlmEvaluationAbRolloutDecisionFilter(): ListLlmEvaluationAbRolloutDecisionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAbRolloutDecisionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAbRolloutDecisionsRequest): ListLlmEvaluationAbRolloutDecisionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAbRolloutDecisionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAbRolloutDecisionsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAbRolloutDecisionsRequest, reader: jspb.BinaryReader): ListLlmEvaluationAbRolloutDecisionsRequest;
}

export namespace ListLlmEvaluationAbRolloutDecisionsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationAbRolloutDecisionFilter?: LlmEvaluationAbRolloutDecisionFilter.AsObject,
  }
}

export class ListLlmEvaluationAbRolloutDecisionsResponse extends jspb.Message {
  getLlmEvaluationAbRolloutDecisionsList(): Array<LlmEvaluationAbRolloutDecision>;
  setLlmEvaluationAbRolloutDecisionsList(value: Array<LlmEvaluationAbRolloutDecision>): ListLlmEvaluationAbRolloutDecisionsResponse;
  clearLlmEvaluationAbRolloutDecisionsList(): ListLlmEvaluationAbRolloutDecisionsResponse;
  addLlmEvaluationAbRolloutDecisions(value?: LlmEvaluationAbRolloutDecision, index?: number): LlmEvaluationAbRolloutDecision;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationAbRolloutDecisionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAbRolloutDecisionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAbRolloutDecisionsResponse): ListLlmEvaluationAbRolloutDecisionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAbRolloutDecisionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAbRolloutDecisionsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAbRolloutDecisionsResponse, reader: jspb.BinaryReader): ListLlmEvaluationAbRolloutDecisionsResponse;
}

export namespace ListLlmEvaluationAbRolloutDecisionsResponse {
  export type AsObject = {
    llmEvaluationAbRolloutDecisionsList: Array<LlmEvaluationAbRolloutDecision.AsObject>,
    nextPageToken: string,
  }
}

export class LlmEvaluationOnlineSessionFilter extends jspb.Message {
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): LlmEvaluationOnlineSessionFilter;
  clearLabelsList(): LlmEvaluationOnlineSessionFilter;
  addLabels(value: string, index?: number): LlmEvaluationOnlineSessionFilter;

  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): LlmEvaluationOnlineSessionFilter;
  clearLanguageCodesList(): LlmEvaluationOnlineSessionFilter;
  addLanguageCodes(value: string, index?: number): LlmEvaluationOnlineSessionFilter;

  getPlatformsList(): Array<string>;
  setPlatformsList(value: Array<string>): LlmEvaluationOnlineSessionFilter;
  clearPlatformsList(): LlmEvaluationOnlineSessionFilter;
  addPlatforms(value: string, index?: number): LlmEvaluationOnlineSessionFilter;

  getRequireTelemetry(): boolean;
  setRequireTelemetry(value: boolean): LlmEvaluationOnlineSessionFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationOnlineSessionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationOnlineSessionFilter): LlmEvaluationOnlineSessionFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationOnlineSessionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationOnlineSessionFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationOnlineSessionFilter, reader: jspb.BinaryReader): LlmEvaluationOnlineSessionFilter;
}

export namespace LlmEvaluationOnlineSessionFilter {
  export type AsObject = {
    labelsList: Array<string>,
    languageCodesList: Array<string>,
    platformsList: Array<string>,
    requireTelemetry: boolean,
  }
}

export class LlmEvaluationOnlineConfig extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationOnlineConfig;

  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationOnlineConfig;

  getDescription(): string;
  setDescription(value: string): LlmEvaluationOnlineConfig;

  getEvaluatorNamesList(): Array<string>;
  setEvaluatorNamesList(value: Array<string>): LlmEvaluationOnlineConfig;
  clearEvaluatorNamesList(): LlmEvaluationOnlineConfig;
  addEvaluatorNames(value: string, index?: number): LlmEvaluationOnlineConfig;

  getSampleRate(): number;
  setSampleRate(value: number): LlmEvaluationOnlineConfig;

  getEnabled(): boolean;
  setEnabled(value: boolean): LlmEvaluationOnlineConfig;

  getTargetDatasetName(): string;
  setTargetDatasetName(value: string): LlmEvaluationOnlineConfig;

  getFailThreshold(): number;
  setFailThreshold(value: number): LlmEvaluationOnlineConfig;
  hasFailThreshold(): boolean;
  clearFailThreshold(): LlmEvaluationOnlineConfig;

  getSettleSeconds(): number;
  setSettleSeconds(value: number): LlmEvaluationOnlineConfig;

  getRequireTelemetry(): boolean;
  setRequireTelemetry(value: boolean): LlmEvaluationOnlineConfig;

  getLlmEvaluationOnlineSessionFilter(): LlmEvaluationOnlineSessionFilter | undefined;
  setLlmEvaluationOnlineSessionFilter(value?: LlmEvaluationOnlineSessionFilter): LlmEvaluationOnlineConfig;
  hasLlmEvaluationOnlineSessionFilter(): boolean;
  clearLlmEvaluationOnlineSessionFilter(): LlmEvaluationOnlineConfig;

  getLastEvaluatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastEvaluatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationOnlineConfig;
  hasLastEvaluatedAt(): boolean;
  clearLastEvaluatedAt(): LlmEvaluationOnlineConfig;

  getNSessionsEvaluated(): number;
  setNSessionsEvaluated(value: number): LlmEvaluationOnlineConfig;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationOnlineConfig;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationOnlineConfig;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationOnlineConfig;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationOnlineConfig;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationOnlineConfig;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationOnlineConfig;

  getParent(): string;
  setParent(value: string): LlmEvaluationOnlineConfig;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationOnlineConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationOnlineConfig.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationOnlineConfig): LlmEvaluationOnlineConfig.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationOnlineConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationOnlineConfig;
  static deserializeBinaryFromReader(message: LlmEvaluationOnlineConfig, reader: jspb.BinaryReader): LlmEvaluationOnlineConfig;
}

export namespace LlmEvaluationOnlineConfig {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    evaluatorNamesList: Array<string>,
    sampleRate: number,
    enabled: boolean,
    targetDatasetName: string,
    failThreshold?: number,
    settleSeconds: number,
    requireTelemetry: boolean,
    llmEvaluationOnlineSessionFilter?: LlmEvaluationOnlineSessionFilter.AsObject,
    lastEvaluatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    nSessionsEvaluated: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }

  export enum FailThresholdCase { 
    _FAIL_THRESHOLD_NOT_SET = 0,
    FAIL_THRESHOLD = 8,
  }
}

export class CreateLlmEvaluationOnlineConfigRequest extends jspb.Message {
  getLlmEvaluationOnlineConfig(): LlmEvaluationOnlineConfig | undefined;
  setLlmEvaluationOnlineConfig(value?: LlmEvaluationOnlineConfig): CreateLlmEvaluationOnlineConfigRequest;
  hasLlmEvaluationOnlineConfig(): boolean;
  clearLlmEvaluationOnlineConfig(): CreateLlmEvaluationOnlineConfigRequest;

  getParent(): string;
  setParent(value: string): CreateLlmEvaluationOnlineConfigRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateLlmEvaluationOnlineConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLlmEvaluationOnlineConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLlmEvaluationOnlineConfigRequest): CreateLlmEvaluationOnlineConfigRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLlmEvaluationOnlineConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLlmEvaluationOnlineConfigRequest;
  static deserializeBinaryFromReader(message: CreateLlmEvaluationOnlineConfigRequest, reader: jspb.BinaryReader): CreateLlmEvaluationOnlineConfigRequest;
}

export namespace CreateLlmEvaluationOnlineConfigRequest {
  export type AsObject = {
    llmEvaluationOnlineConfig?: LlmEvaluationOnlineConfig.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationOnlineConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationOnlineConfigRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationOnlineConfigRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationOnlineConfigRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationOnlineConfigRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationOnlineConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationOnlineConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationOnlineConfigRequest): GetLlmEvaluationOnlineConfigRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationOnlineConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationOnlineConfigRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationOnlineConfigRequest, reader: jspb.BinaryReader): GetLlmEvaluationOnlineConfigRequest;
}

export namespace GetLlmEvaluationOnlineConfigRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationOnlineConfigFilter extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): LlmEvaluationOnlineConfigFilter;

  getEnabledOnly(): boolean;
  setEnabledOnly(value: boolean): LlmEvaluationOnlineConfigFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationOnlineConfigFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationOnlineConfigFilter): LlmEvaluationOnlineConfigFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationOnlineConfigFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationOnlineConfigFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationOnlineConfigFilter, reader: jspb.BinaryReader): LlmEvaluationOnlineConfigFilter;
}

export namespace LlmEvaluationOnlineConfigFilter {
  export type AsObject = {
    displayName: string,
    enabledOnly: boolean,
  }
}

export class ListLlmEvaluationOnlineConfigsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationOnlineConfigsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationOnlineConfigsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationOnlineConfigsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationOnlineConfigsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationOnlineConfigsRequest;

  getLlmEvaluationOnlineConfigFilter(): LlmEvaluationOnlineConfigFilter | undefined;
  setLlmEvaluationOnlineConfigFilter(value?: LlmEvaluationOnlineConfigFilter): ListLlmEvaluationOnlineConfigsRequest;
  hasLlmEvaluationOnlineConfigFilter(): boolean;
  clearLlmEvaluationOnlineConfigFilter(): ListLlmEvaluationOnlineConfigsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationOnlineConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationOnlineConfigsRequest): ListLlmEvaluationOnlineConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationOnlineConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationOnlineConfigsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationOnlineConfigsRequest, reader: jspb.BinaryReader): ListLlmEvaluationOnlineConfigsRequest;
}

export namespace ListLlmEvaluationOnlineConfigsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationOnlineConfigFilter?: LlmEvaluationOnlineConfigFilter.AsObject,
  }
}

export class ListLlmEvaluationOnlineConfigsResponse extends jspb.Message {
  getLlmEvaluationOnlineConfigsList(): Array<LlmEvaluationOnlineConfig>;
  setLlmEvaluationOnlineConfigsList(value: Array<LlmEvaluationOnlineConfig>): ListLlmEvaluationOnlineConfigsResponse;
  clearLlmEvaluationOnlineConfigsList(): ListLlmEvaluationOnlineConfigsResponse;
  addLlmEvaluationOnlineConfigs(value?: LlmEvaluationOnlineConfig, index?: number): LlmEvaluationOnlineConfig;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationOnlineConfigsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationOnlineConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationOnlineConfigsResponse): ListLlmEvaluationOnlineConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationOnlineConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationOnlineConfigsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationOnlineConfigsResponse, reader: jspb.BinaryReader): ListLlmEvaluationOnlineConfigsResponse;
}

export namespace ListLlmEvaluationOnlineConfigsResponse {
  export type AsObject = {
    llmEvaluationOnlineConfigsList: Array<LlmEvaluationOnlineConfig.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationOnlineConfigRequest extends jspb.Message {
  getLlmEvaluationOnlineConfig(): LlmEvaluationOnlineConfig | undefined;
  setLlmEvaluationOnlineConfig(value?: LlmEvaluationOnlineConfig): UpdateLlmEvaluationOnlineConfigRequest;
  hasLlmEvaluationOnlineConfig(): boolean;
  clearLlmEvaluationOnlineConfig(): UpdateLlmEvaluationOnlineConfigRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationOnlineConfigRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationOnlineConfigRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationOnlineConfigRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationOnlineConfigRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationOnlineConfigRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationOnlineConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationOnlineConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationOnlineConfigRequest): UpdateLlmEvaluationOnlineConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationOnlineConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationOnlineConfigRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationOnlineConfigRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationOnlineConfigRequest;
}

export namespace UpdateLlmEvaluationOnlineConfigRequest {
  export type AsObject = {
    llmEvaluationOnlineConfig?: LlmEvaluationOnlineConfig.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class DeleteLlmEvaluationOnlineConfigRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteLlmEvaluationOnlineConfigRequest;

  getParent(): string;
  setParent(value: string): DeleteLlmEvaluationOnlineConfigRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteLlmEvaluationOnlineConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLlmEvaluationOnlineConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLlmEvaluationOnlineConfigRequest): DeleteLlmEvaluationOnlineConfigRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLlmEvaluationOnlineConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLlmEvaluationOnlineConfigRequest;
  static deserializeBinaryFromReader(message: DeleteLlmEvaluationOnlineConfigRequest, reader: jspb.BinaryReader): DeleteLlmEvaluationOnlineConfigRequest;
}

export namespace DeleteLlmEvaluationOnlineConfigRequest {
  export type AsObject = {
    name: string,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationOnlineResult extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationOnlineResult;

  getLlmEvaluationOnlineConfigName(): string;
  setLlmEvaluationOnlineConfigName(value: string): LlmEvaluationOnlineResult;

  getSessionName(): string;
  setSessionName(value: string): LlmEvaluationOnlineResult;

  getSessionStepName(): string;
  setSessionStepName(value: string): LlmEvaluationOnlineResult;

  getLlmEvaluationFeedbacksList(): Array<LlmEvaluationFeedback>;
  setLlmEvaluationFeedbacksList(value: Array<LlmEvaluationFeedback>): LlmEvaluationOnlineResult;
  clearLlmEvaluationFeedbacksList(): LlmEvaluationOnlineResult;
  addLlmEvaluationFeedbacks(value?: LlmEvaluationFeedback, index?: number): LlmEvaluationFeedback;

  getPassed(): boolean;
  setPassed(value: boolean): LlmEvaluationOnlineResult;

  getAggregateScore(): number;
  setAggregateScore(value: number): LlmEvaluationOnlineResult;

  getEvaluatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEvaluatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationOnlineResult;
  hasEvaluatedAt(): boolean;
  clearEvaluatedAt(): LlmEvaluationOnlineResult;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationOnlineResult;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationOnlineResult;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationOnlineResult;

  getParent(): string;
  setParent(value: string): LlmEvaluationOnlineResult;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationOnlineResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationOnlineResult.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationOnlineResult): LlmEvaluationOnlineResult.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationOnlineResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationOnlineResult;
  static deserializeBinaryFromReader(message: LlmEvaluationOnlineResult, reader: jspb.BinaryReader): LlmEvaluationOnlineResult;
}

export namespace LlmEvaluationOnlineResult {
  export type AsObject = {
    name: string,
    llmEvaluationOnlineConfigName: string,
    sessionName: string,
    sessionStepName: string,
    llmEvaluationFeedbacksList: Array<LlmEvaluationFeedback.AsObject>,
    passed: boolean,
    aggregateScore: number,
    evaluatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationOnlineResultRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationOnlineResultRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationOnlineResultRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationOnlineResultRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationOnlineResultRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationOnlineResultRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationOnlineResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationOnlineResultRequest): GetLlmEvaluationOnlineResultRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationOnlineResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationOnlineResultRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationOnlineResultRequest, reader: jspb.BinaryReader): GetLlmEvaluationOnlineResultRequest;
}

export namespace GetLlmEvaluationOnlineResultRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationOnlineResultFilter extends jspb.Message {
  getLlmEvaluationOnlineConfigName(): string;
  setLlmEvaluationOnlineConfigName(value: string): LlmEvaluationOnlineResultFilter;

  getPassed(): boolean;
  setPassed(value: boolean): LlmEvaluationOnlineResultFilter;

  getFilterByPassed(): boolean;
  setFilterByPassed(value: boolean): LlmEvaluationOnlineResultFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationOnlineResultFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationOnlineResultFilter): LlmEvaluationOnlineResultFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationOnlineResultFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationOnlineResultFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationOnlineResultFilter, reader: jspb.BinaryReader): LlmEvaluationOnlineResultFilter;
}

export namespace LlmEvaluationOnlineResultFilter {
  export type AsObject = {
    llmEvaluationOnlineConfigName: string,
    passed: boolean,
    filterByPassed: boolean,
  }
}

export class ListLlmEvaluationOnlineResultsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationOnlineResultsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationOnlineResultsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationOnlineResultsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationOnlineResultsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationOnlineResultsRequest;

  getLlmEvaluationOnlineResultFilter(): LlmEvaluationOnlineResultFilter | undefined;
  setLlmEvaluationOnlineResultFilter(value?: LlmEvaluationOnlineResultFilter): ListLlmEvaluationOnlineResultsRequest;
  hasLlmEvaluationOnlineResultFilter(): boolean;
  clearLlmEvaluationOnlineResultFilter(): ListLlmEvaluationOnlineResultsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationOnlineResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationOnlineResultsRequest): ListLlmEvaluationOnlineResultsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationOnlineResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationOnlineResultsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationOnlineResultsRequest, reader: jspb.BinaryReader): ListLlmEvaluationOnlineResultsRequest;
}

export namespace ListLlmEvaluationOnlineResultsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationOnlineResultFilter?: LlmEvaluationOnlineResultFilter.AsObject,
  }
}

export class ListLlmEvaluationOnlineResultsResponse extends jspb.Message {
  getLlmEvaluationOnlineResultsList(): Array<LlmEvaluationOnlineResult>;
  setLlmEvaluationOnlineResultsList(value: Array<LlmEvaluationOnlineResult>): ListLlmEvaluationOnlineResultsResponse;
  clearLlmEvaluationOnlineResultsList(): ListLlmEvaluationOnlineResultsResponse;
  addLlmEvaluationOnlineResults(value?: LlmEvaluationOnlineResult, index?: number): LlmEvaluationOnlineResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationOnlineResultsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationOnlineResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationOnlineResultsResponse): ListLlmEvaluationOnlineResultsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationOnlineResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationOnlineResultsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationOnlineResultsResponse, reader: jspb.BinaryReader): ListLlmEvaluationOnlineResultsResponse;
}

export namespace ListLlmEvaluationOnlineResultsResponse {
  export type AsObject = {
    llmEvaluationOnlineResultsList: Array<LlmEvaluationOnlineResult.AsObject>,
    nextPageToken: string,
  }
}

export class LlmEvaluationAnnotationQueueItem extends jspb.Message {
  getName(): string;
  setName(value: string): LlmEvaluationAnnotationQueueItem;

  getSessionName(): string;
  setSessionName(value: string): LlmEvaluationAnnotationQueueItem;

  getSessionStepName(): string;
  setSessionStepName(value: string): LlmEvaluationAnnotationQueueItem;

  getLlmEvaluationOnlineResultName(): string;
  setLlmEvaluationOnlineResultName(value: string): LlmEvaluationAnnotationQueueItem;

  getStatus(): LlmEvaluationAnnotationStatus;
  setStatus(value: LlmEvaluationAnnotationStatus): LlmEvaluationAnnotationQueueItem;

  getAssignedTo(): string;
  setAssignedTo(value: string): LlmEvaluationAnnotationQueueItem;

  getReason(): string;
  setReason(value: string): LlmEvaluationAnnotationQueueItem;

  getLlmEvaluationDatasetName(): string;
  setLlmEvaluationDatasetName(value: string): LlmEvaluationAnnotationQueueItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAnnotationQueueItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LlmEvaluationAnnotationQueueItem;

  getCreatedBy(): string;
  setCreatedBy(value: string): LlmEvaluationAnnotationQueueItem;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): LlmEvaluationAnnotationQueueItem;
  hasModifiedAt(): boolean;
  clearModifiedAt(): LlmEvaluationAnnotationQueueItem;

  getModifiedBy(): string;
  setModifiedBy(value: string): LlmEvaluationAnnotationQueueItem;

  getParent(): string;
  setParent(value: string): LlmEvaluationAnnotationQueueItem;

  getLanguageCode(): string;
  setLanguageCode(value: string): LlmEvaluationAnnotationQueueItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAnnotationQueueItem.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAnnotationQueueItem): LlmEvaluationAnnotationQueueItem.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAnnotationQueueItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAnnotationQueueItem;
  static deserializeBinaryFromReader(message: LlmEvaluationAnnotationQueueItem, reader: jspb.BinaryReader): LlmEvaluationAnnotationQueueItem;
}

export namespace LlmEvaluationAnnotationQueueItem {
  export type AsObject = {
    name: string,
    sessionName: string,
    sessionStepName: string,
    llmEvaluationOnlineResultName: string,
    status: LlmEvaluationAnnotationStatus,
    assignedTo: string,
    reason: string,
    llmEvaluationDatasetName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedBy: string,
    parent: string,
    languageCode: string,
  }
}

export class GetLlmEvaluationAnnotationQueueItemRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetLlmEvaluationAnnotationQueueItemRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): GetLlmEvaluationAnnotationQueueItemRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): GetLlmEvaluationAnnotationQueueItemRequest;

  getParent(): string;
  setParent(value: string): GetLlmEvaluationAnnotationQueueItemRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLlmEvaluationAnnotationQueueItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLlmEvaluationAnnotationQueueItemRequest): GetLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static serializeBinaryToWriter(message: GetLlmEvaluationAnnotationQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLlmEvaluationAnnotationQueueItemRequest;
  static deserializeBinaryFromReader(message: GetLlmEvaluationAnnotationQueueItemRequest, reader: jspb.BinaryReader): GetLlmEvaluationAnnotationQueueItemRequest;
}

export namespace GetLlmEvaluationAnnotationQueueItemRequest {
  export type AsObject = {
    name: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class LlmEvaluationAnnotationQueueItemFilter extends jspb.Message {
  getStatus(): LlmEvaluationAnnotationStatus;
  setStatus(value: LlmEvaluationAnnotationStatus): LlmEvaluationAnnotationQueueItemFilter;

  getAssignedTo(): string;
  setAssignedTo(value: string): LlmEvaluationAnnotationQueueItemFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LlmEvaluationAnnotationQueueItemFilter.AsObject;
  static toObject(includeInstance: boolean, msg: LlmEvaluationAnnotationQueueItemFilter): LlmEvaluationAnnotationQueueItemFilter.AsObject;
  static serializeBinaryToWriter(message: LlmEvaluationAnnotationQueueItemFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LlmEvaluationAnnotationQueueItemFilter;
  static deserializeBinaryFromReader(message: LlmEvaluationAnnotationQueueItemFilter, reader: jspb.BinaryReader): LlmEvaluationAnnotationQueueItemFilter;
}

export namespace LlmEvaluationAnnotationQueueItemFilter {
  export type AsObject = {
    status: LlmEvaluationAnnotationStatus,
    assignedTo: string,
  }
}

export class ListLlmEvaluationAnnotationQueueItemsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListLlmEvaluationAnnotationQueueItemsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLlmEvaluationAnnotationQueueItemsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListLlmEvaluationAnnotationQueueItemsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListLlmEvaluationAnnotationQueueItemsRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): ListLlmEvaluationAnnotationQueueItemsRequest;

  getLlmEvaluationAnnotationQueueItemFilter(): LlmEvaluationAnnotationQueueItemFilter | undefined;
  setLlmEvaluationAnnotationQueueItemFilter(value?: LlmEvaluationAnnotationQueueItemFilter): ListLlmEvaluationAnnotationQueueItemsRequest;
  hasLlmEvaluationAnnotationQueueItemFilter(): boolean;
  clearLlmEvaluationAnnotationQueueItemFilter(): ListLlmEvaluationAnnotationQueueItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAnnotationQueueItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAnnotationQueueItemsRequest): ListLlmEvaluationAnnotationQueueItemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAnnotationQueueItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAnnotationQueueItemsRequest;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAnnotationQueueItemsRequest, reader: jspb.BinaryReader): ListLlmEvaluationAnnotationQueueItemsRequest;
}

export namespace ListLlmEvaluationAnnotationQueueItemsRequest {
  export type AsObject = {
    parent: string,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    languageCode: string,
    llmEvaluationAnnotationQueueItemFilter?: LlmEvaluationAnnotationQueueItemFilter.AsObject,
  }
}

export class ListLlmEvaluationAnnotationQueueItemsResponse extends jspb.Message {
  getLlmEvaluationAnnotationQueueItemsList(): Array<LlmEvaluationAnnotationQueueItem>;
  setLlmEvaluationAnnotationQueueItemsList(value: Array<LlmEvaluationAnnotationQueueItem>): ListLlmEvaluationAnnotationQueueItemsResponse;
  clearLlmEvaluationAnnotationQueueItemsList(): ListLlmEvaluationAnnotationQueueItemsResponse;
  addLlmEvaluationAnnotationQueueItems(value?: LlmEvaluationAnnotationQueueItem, index?: number): LlmEvaluationAnnotationQueueItem;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLlmEvaluationAnnotationQueueItemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLlmEvaluationAnnotationQueueItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLlmEvaluationAnnotationQueueItemsResponse): ListLlmEvaluationAnnotationQueueItemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLlmEvaluationAnnotationQueueItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLlmEvaluationAnnotationQueueItemsResponse;
  static deserializeBinaryFromReader(message: ListLlmEvaluationAnnotationQueueItemsResponse, reader: jspb.BinaryReader): ListLlmEvaluationAnnotationQueueItemsResponse;
}

export namespace ListLlmEvaluationAnnotationQueueItemsResponse {
  export type AsObject = {
    llmEvaluationAnnotationQueueItemsList: Array<LlmEvaluationAnnotationQueueItem.AsObject>,
    nextPageToken: string,
  }
}

export class UpdateLlmEvaluationAnnotationQueueItemRequest extends jspb.Message {
  getLlmEvaluationAnnotationQueueItem(): LlmEvaluationAnnotationQueueItem | undefined;
  setLlmEvaluationAnnotationQueueItem(value?: LlmEvaluationAnnotationQueueItem): UpdateLlmEvaluationAnnotationQueueItemRequest;
  hasLlmEvaluationAnnotationQueueItem(): boolean;
  clearLlmEvaluationAnnotationQueueItem(): UpdateLlmEvaluationAnnotationQueueItemRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationAnnotationQueueItemRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateLlmEvaluationAnnotationQueueItemRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateLlmEvaluationAnnotationQueueItemRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): UpdateLlmEvaluationAnnotationQueueItemRequest;

  getParent(): string;
  setParent(value: string): UpdateLlmEvaluationAnnotationQueueItemRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateLlmEvaluationAnnotationQueueItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLlmEvaluationAnnotationQueueItemRequest): UpdateLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLlmEvaluationAnnotationQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLlmEvaluationAnnotationQueueItemRequest;
  static deserializeBinaryFromReader(message: UpdateLlmEvaluationAnnotationQueueItemRequest, reader: jspb.BinaryReader): UpdateLlmEvaluationAnnotationQueueItemRequest;
}

export namespace UpdateLlmEvaluationAnnotationQueueItemRequest {
  export type AsObject = {
    llmEvaluationAnnotationQueueItem?: LlmEvaluationAnnotationQueueItem.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    parent: string,
    languageCode: string,
  }
}

export class PromoteLlmEvaluationAnnotationQueueItemRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getTargetDatasetName(): string;
  setTargetDatasetName(value: string): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getLlmEvaluationExampleExtractionMode(): LlmEvaluationExampleExtractionMode;
  setLlmEvaluationExampleExtractionMode(value: LlmEvaluationExampleExtractionMode): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getIncludeToolCalls(): boolean;
  setIncludeToolCalls(value: boolean): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getIncludeRetrievalContext(): boolean;
  setIncludeRetrievalContext(value: boolean): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getParent(): string;
  setParent(value: string): PromoteLlmEvaluationAnnotationQueueItemRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): PromoteLlmEvaluationAnnotationQueueItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteLlmEvaluationAnnotationQueueItemRequest): PromoteLlmEvaluationAnnotationQueueItemRequest.AsObject;
  static serializeBinaryToWriter(message: PromoteLlmEvaluationAnnotationQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteLlmEvaluationAnnotationQueueItemRequest;
  static deserializeBinaryFromReader(message: PromoteLlmEvaluationAnnotationQueueItemRequest, reader: jspb.BinaryReader): PromoteLlmEvaluationAnnotationQueueItemRequest;
}

export namespace PromoteLlmEvaluationAnnotationQueueItemRequest {
  export type AsObject = {
    name: string,
    targetDatasetName: string,
    llmEvaluationExampleExtractionMode: LlmEvaluationExampleExtractionMode,
    includeToolCalls: boolean,
    includeRetrievalContext: boolean,
    parent: string,
    languageCode: string,
  }
}

export class PromoteLlmEvaluationAnnotationQueueItemResponse extends jspb.Message {
  getLlmEvaluationExamplesList(): Array<LlmEvaluationExample>;
  setLlmEvaluationExamplesList(value: Array<LlmEvaluationExample>): PromoteLlmEvaluationAnnotationQueueItemResponse;
  clearLlmEvaluationExamplesList(): PromoteLlmEvaluationAnnotationQueueItemResponse;
  addLlmEvaluationExamples(value?: LlmEvaluationExample, index?: number): LlmEvaluationExample;

  getLlmEvaluationAnnotationQueueItem(): LlmEvaluationAnnotationQueueItem | undefined;
  setLlmEvaluationAnnotationQueueItem(value?: LlmEvaluationAnnotationQueueItem): PromoteLlmEvaluationAnnotationQueueItemResponse;
  hasLlmEvaluationAnnotationQueueItem(): boolean;
  clearLlmEvaluationAnnotationQueueItem(): PromoteLlmEvaluationAnnotationQueueItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteLlmEvaluationAnnotationQueueItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteLlmEvaluationAnnotationQueueItemResponse): PromoteLlmEvaluationAnnotationQueueItemResponse.AsObject;
  static serializeBinaryToWriter(message: PromoteLlmEvaluationAnnotationQueueItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteLlmEvaluationAnnotationQueueItemResponse;
  static deserializeBinaryFromReader(message: PromoteLlmEvaluationAnnotationQueueItemResponse, reader: jspb.BinaryReader): PromoteLlmEvaluationAnnotationQueueItemResponse;
}

export namespace PromoteLlmEvaluationAnnotationQueueItemResponse {
  export type AsObject = {
    llmEvaluationExamplesList: Array<LlmEvaluationExample.AsObject>,
    llmEvaluationAnnotationQueueItem?: LlmEvaluationAnnotationQueueItem.AsObject,
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
export enum LlmEvaluationDatasetType { 
  LLM_EVALUATION_DATASET_TYPE_UNSPECIFIED = 0,
  LLM_EVALUATION_DATASET_TYPE_SINGLE_TURN = 1,
  LLM_EVALUATION_DATASET_TYPE_FLOW = 2,
  LLM_EVALUATION_DATASET_TYPE_RAG = 3,
  LLM_EVALUATION_DATASET_TYPE_RED_TEAM = 4,
  LLM_EVALUATION_DATASET_TYPE_SIMULATED = 5,
}
export enum LlmEvaluationExperimentKind { 
  LLM_EVALUATION_EXPERIMENT_KIND_UNSPECIFIED = 0,
  LLM_EVALUATION_EXPERIMENT_KIND_STANDARD = 1,
  LLM_EVALUATION_EXPERIMENT_KIND_FLOW = 2,
  LLM_EVALUATION_EXPERIMENT_KIND_RED_TEAM = 3,
  LLM_EVALUATION_EXPERIMENT_KIND_GATE_CANDIDATE = 4,
  LLM_EVALUATION_EXPERIMENT_KIND_GATE_SAFETY = 5,
  LLM_EVALUATION_EXPERIMENT_KIND_SCHEDULED = 6,
}
export enum LlmEvaluationReleaseGateVerdict { 
  LLM_EVALUATION_RELEASE_GATE_VERDICT_UNSPECIFIED = 0,
  LLM_EVALUATION_RELEASE_GATE_VERDICT_PENDING = 1,
  LLM_EVALUATION_RELEASE_GATE_VERDICT_PASS = 2,
  LLM_EVALUATION_RELEASE_GATE_VERDICT_FAIL = 3,
  LLM_EVALUATION_RELEASE_GATE_VERDICT_STALE = 4,
}
export enum LlmEvaluationEvaluatorCategory { 
  LLM_EVALUATION_EVALUATOR_CATEGORY_UNSPECIFIED = 0,
  LLM_EVALUATION_EVALUATOR_CATEGORY_RAG = 1,
  LLM_EVALUATION_EVALUATOR_CATEGORY_AGENTIC = 2,
  LLM_EVALUATION_EVALUATOR_CATEGORY_CONVERSATIONAL = 3,
  LLM_EVALUATION_EVALUATOR_CATEGORY_SAFETY = 4,
  LLM_EVALUATION_EVALUATOR_CATEGORY_HEURISTIC = 5,
  LLM_EVALUATION_EVALUATOR_CATEGORY_CUSTOM = 6,
}
export enum LlmEvaluationExampleExtractionMode { 
  LLM_EVALUATION_EXAMPLE_EXTRACTION_MODE_UNSPECIFIED = 0,
  LLM_EVALUATION_EXAMPLE_EXTRACTION_MODE_SINGLE_TURN = 1,
  LLM_EVALUATION_EXAMPLE_EXTRACTION_MODE_MULTI_TURN_FLOW = 2,
}
export enum LlmEvaluationSimulationKind { 
  LLM_EVALUATION_SIMULATION_KIND_UNSPECIFIED = 0,
  LLM_EVALUATION_SIMULATION_KIND_STANDARD = 1,
  LLM_EVALUATION_SIMULATION_KIND_ADVERSARIAL = 2,
}
export enum LlmEvaluationScheduleAction { 
  LLM_EVALUATION_SCHEDULE_ACTION_UNSPECIFIED = 0,
  LLM_EVALUATION_SCHEDULE_ACTION_RUN_EXPERIMENT = 1,
  LLM_EVALUATION_SCHEDULE_ACTION_RUN_RELEASE_GATE = 2,
}
export enum LlmEvaluationAbExperimentStatus { 
  LLM_EVALUATION_AB_EXPERIMENT_STATUS_UNSPECIFIED = 0,
  LLM_EVALUATION_AB_EXPERIMENT_STATUS_DRAFT = 1,
  LLM_EVALUATION_AB_EXPERIMENT_STATUS_RUNNING = 2,
  LLM_EVALUATION_AB_EXPERIMENT_STATUS_STOPPED = 3,
  LLM_EVALUATION_AB_EXPERIMENT_STATUS_ARCHIVED = 4,
}
export enum LlmEvaluationAbOptimizeMetric { 
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_UNSPECIFIED = 0,
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_PASS_RATE = 1,
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_ERROR_RATE = 2,
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_MEAN_LATENCY = 3,
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_CRITERION_SCORE = 4,
  LLM_EVALUATION_AB_OPTIMIZE_METRIC_SAFETY_SCORE = 5,
}
export enum LlmEvaluationAnnotationStatus { 
  LLM_EVALUATION_ANNOTATION_STATUS_UNSPECIFIED = 0,
  LLM_EVALUATION_ANNOTATION_STATUS_PENDING = 1,
  LLM_EVALUATION_ANNOTATION_STATUS_REVIEWED = 2,
  LLM_EVALUATION_ANNOTATION_STATUS_PROMOTED = 3,
  LLM_EVALUATION_ANNOTATION_STATUS_DISMISSED = 4,
}
