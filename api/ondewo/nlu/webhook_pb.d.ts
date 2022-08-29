import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as ondewo_nlu_intent_pb from '../../ondewo/nlu/intent_pb';
import * as ondewo_nlu_session_pb from '../../ondewo/nlu/session_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class PingRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    session: string,
  }
}

export class WebhookRequest extends jspb.Message {
  getSession(): string;
  setSession(value: string): WebhookRequest;

  getResponseId(): string;
  setResponseId(value: string): WebhookRequest;

  getQueryResult(): ondewo_nlu_session_pb.QueryResult | undefined;
  setQueryResult(value?: ondewo_nlu_session_pb.QueryResult): WebhookRequest;
  hasQueryResult(): boolean;
  clearQueryResult(): WebhookRequest;

  getOriginalDetectIntentRequest(): OriginalDetectIntentRequest | undefined;
  setOriginalDetectIntentRequest(value?: OriginalDetectIntentRequest): WebhookRequest;
  hasOriginalDetectIntentRequest(): boolean;
  clearOriginalDetectIntentRequest(): WebhookRequest;

  getHeaders(): google_protobuf_struct_pb.Struct | undefined;
  setHeaders(value?: google_protobuf_struct_pb.Struct): WebhookRequest;
  hasHeaders(): boolean;
  clearHeaders(): WebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookRequest): WebhookRequest.AsObject;
  static serializeBinaryToWriter(message: WebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookRequest;
  static deserializeBinaryFromReader(message: WebhookRequest, reader: jspb.BinaryReader): WebhookRequest;
}

export namespace WebhookRequest {
  export type AsObject = {
    session: string,
    responseId: string,
    queryResult?: ondewo_nlu_session_pb.QueryResult.AsObject,
    originalDetectIntentRequest?: OriginalDetectIntentRequest.AsObject,
    headers?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class WebhookResponse extends jspb.Message {
  getFulfillmentText(): string;
  setFulfillmentText(value: string): WebhookResponse;

  getFulfillmentMessagesList(): Array<ondewo_nlu_intent_pb.Intent.Message>;
  setFulfillmentMessagesList(value: Array<ondewo_nlu_intent_pb.Intent.Message>): WebhookResponse;
  clearFulfillmentMessagesList(): WebhookResponse;
  addFulfillmentMessages(value?: ondewo_nlu_intent_pb.Intent.Message, index?: number): ondewo_nlu_intent_pb.Intent.Message;

  getSource(): string;
  setSource(value: string): WebhookResponse;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): WebhookResponse;
  hasPayload(): boolean;
  clearPayload(): WebhookResponse;

  getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
  setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): WebhookResponse;
  clearOutputContextsList(): WebhookResponse;
  addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

  getFollowupEventInput(): ondewo_nlu_session_pb.EventInput | undefined;
  setFollowupEventInput(value?: ondewo_nlu_session_pb.EventInput): WebhookResponse;
  hasFollowupEventInput(): boolean;
  clearFollowupEventInput(): WebhookResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebhookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WebhookResponse): WebhookResponse.AsObject;
  static serializeBinaryToWriter(message: WebhookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebhookResponse;
  static deserializeBinaryFromReader(message: WebhookResponse, reader: jspb.BinaryReader): WebhookResponse;
}

export namespace WebhookResponse {
  export type AsObject = {
    fulfillmentText: string,
    fulfillmentMessagesList: Array<ondewo_nlu_intent_pb.Intent.Message.AsObject>,
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
    outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>,
    followupEventInput?: ondewo_nlu_session_pb.EventInput.AsObject,
  }
}

export class OriginalDetectIntentRequest extends jspb.Message {
  getSource(): string;
  setSource(value: string): OriginalDetectIntentRequest;

  getPayload(): google_protobuf_struct_pb.Struct | undefined;
  setPayload(value?: google_protobuf_struct_pb.Struct): OriginalDetectIntentRequest;
  hasPayload(): boolean;
  clearPayload(): OriginalDetectIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalDetectIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalDetectIntentRequest): OriginalDetectIntentRequest.AsObject;
  static serializeBinaryToWriter(message: OriginalDetectIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalDetectIntentRequest;
  static deserializeBinaryFromReader(message: OriginalDetectIntentRequest, reader: jspb.BinaryReader): OriginalDetectIntentRequest;
}

export namespace OriginalDetectIntentRequest {
  export type AsObject = {
    source: string,
    payload?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class PingResponse extends jspb.Message {
  getIsReachable(): boolean;
  setIsReachable(value: boolean): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    isReachable: boolean,
  }
}

