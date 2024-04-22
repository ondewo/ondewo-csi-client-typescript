import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';


export class GetIntentCountRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetIntentCountRequest;

  getFilterByCategory(): ondewo_nlu_intent_pb.IntentCategory;
  setFilterByCategory(value: ondewo_nlu_intent_pb.IntentCategory): GetIntentCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIntentCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIntentCountRequest): GetIntentCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetIntentCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIntentCountRequest;
  static deserializeBinaryFromReader(message: GetIntentCountRequest, reader: jspb.BinaryReader): GetIntentCountRequest;
}

export namespace GetIntentCountRequest {
  export type AsObject = {
    parent: string,
    filterByCategory: ondewo_nlu_intent_pb.IntentCategory,
  }
}

export class GetEntityTypeCountRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetEntityTypeCountRequest;

  getFilterByCategory(): ondewo_nlu_entity_type_pb.EntityTypeCategory;
  setFilterByCategory(value: ondewo_nlu_entity_type_pb.EntityTypeCategory): GetEntityTypeCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityTypeCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityTypeCountRequest): GetEntityTypeCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetEntityTypeCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityTypeCountRequest;
  static deserializeBinaryFromReader(message: GetEntityTypeCountRequest, reader: jspb.BinaryReader): GetEntityTypeCountRequest;
}

export namespace GetEntityTypeCountRequest {
  export type AsObject = {
    parent: string,
    filterByCategory: ondewo_nlu_entity_type_pb.EntityTypeCategory,
  }
}

export class GetProjectStatRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): GetProjectStatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectStatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectStatRequest): GetProjectStatRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectStatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectStatRequest;
  static deserializeBinaryFromReader(message: GetProjectStatRequest, reader: jspb.BinaryReader): GetProjectStatRequest;
}

export namespace GetProjectStatRequest {
  export type AsObject = {
    parent: string,
  }
}

export class GetProjectElementStatRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetProjectElementStatRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetProjectElementStatRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetProjectElementStatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetProjectElementStatRequest): GetProjectElementStatRequest.AsObject;
  static serializeBinaryToWriter(message: GetProjectElementStatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetProjectElementStatRequest;
  static deserializeBinaryFromReader(message: GetProjectElementStatRequest, reader: jspb.BinaryReader): GetProjectElementStatRequest;
}

export namespace GetProjectElementStatRequest {
  export type AsObject = {
    name: string,
    languageCode: string,
  }
}

