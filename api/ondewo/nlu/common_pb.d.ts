import * as jspb from 'google-protobuf'

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb'; // proto import: "google/protobuf/field_mask.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class StatResponse extends jspb.Message {
  getValue(): number;
  setValue(value: number): StatResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatResponse): StatResponse.AsObject;
  static serializeBinaryToWriter(message: StatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatResponse;
  static deserializeBinaryFromReader(message: StatResponse, reader: jspb.BinaryReader): StatResponse;
}

export namespace StatResponse {
  export type AsObject = {
    value: number,
  }
}

export class Comment extends jspb.Message {
  getName(): string;
  setName(value: string): Comment;

  getText(): string;
  setText(value: string): Comment;

  getUserId(): string;
  setUserId(value: string): Comment;

  getCommentAboutName(): string;
  setCommentAboutName(value: string): Comment;

  getParentCommentName(): string;
  setParentCommentName(value: string): Comment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Comment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Comment;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Comment;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Comment;

  getCreatedBy(): string;
  setCreatedBy(value: string): Comment;

  getModifiedBy(): string;
  setModifiedBy(value: string): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    name: string,
    text: string,
    userId: string,
    commentAboutName: string,
    parentCommentName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class Notification extends jspb.Message {
  getName(): string;
  setName(value: string): Notification;

  getUserName(): string;
  setUserName(value: string): Notification;

  getTitle(): string;
  setTitle(value: string): Notification;

  getDescriptionShort(): string;
  setDescriptionShort(value: string): Notification;

  getDescriptionLong(): string;
  setDescriptionLong(value: string): Notification;

  getNotificationFlaggedStatus(): NotificationFlaggedStatus;
  setNotificationFlaggedStatus(value: NotificationFlaggedStatus): Notification;

  getNotificationFlaggedTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotificationFlaggedTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
  hasNotificationFlaggedTimestamp(): boolean;
  clearNotificationFlaggedTimestamp(): Notification;

  getNotificationReadStatus(): NotificationReadStatus;
  setNotificationReadStatus(value: NotificationReadStatus): Notification;

  getNotificationReadTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNotificationReadTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
  hasNotificationReadTimestamp(): boolean;
  clearNotificationReadTimestamp(): Notification;

  getNotificationOrigin(): NotificationOrigin;
  setNotificationOrigin(value: NotificationOrigin): Notification;

  getOriginName(): string;
  setOriginName(value: string): Notification;

  getOriginLanguage(): string;
  setOriginLanguage(value: string): Notification;

  getNotificationType(): NotificationType;
  setNotificationType(value: NotificationType): Notification;

  getNotificationVisibility(): NotificationVisibility;
  setNotificationVisibility(value: NotificationVisibility): Notification;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Notification;

  getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): Notification;
  hasModifiedAt(): boolean;
  clearModifiedAt(): Notification;

  getCreatedBy(): string;
  setCreatedBy(value: string): Notification;

  getModifiedBy(): string;
  setModifiedBy(value: string): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notification.AsObject;
  static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
  static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notification;
  static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
  export type AsObject = {
    name: string,
    userName: string,
    title: string,
    descriptionShort: string,
    descriptionLong: string,
    notificationFlaggedStatus: NotificationFlaggedStatus,
    notificationFlaggedTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notificationReadStatus: NotificationReadStatus,
    notificationReadTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    notificationOrigin: NotificationOrigin,
    originName: string,
    originLanguage: string,
    notificationType: NotificationType,
    notificationVisibility: NotificationVisibility,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdBy: string,
    modifiedBy: string,
  }
}

export class AddNotificationsRequest extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): AddNotificationsRequest;
  clearNotificationsList(): AddNotificationsRequest;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddNotificationsRequest): AddNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: AddNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNotificationsRequest;
  static deserializeBinaryFromReader(message: AddNotificationsRequest, reader: jspb.BinaryReader): AddNotificationsRequest;
}

export namespace AddNotificationsRequest {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class AddNotificationsResponse extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): AddNotificationsResponse;
  clearNotificationsList(): AddNotificationsResponse;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddNotificationsResponse): AddNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: AddNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddNotificationsResponse;
  static deserializeBinaryFromReader(message: AddNotificationsResponse, reader: jspb.BinaryReader): AddNotificationsResponse;
}

export namespace AddNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class NotificationFilter extends jspb.Message {
  getLanguageCodesList(): Array<string>;
  setLanguageCodesList(value: Array<string>): NotificationFilter;
  clearLanguageCodesList(): NotificationFilter;
  addLanguageCodes(value: string, index?: number): NotificationFilter;

  getNotificationOriginsList(): Array<NotificationOrigin>;
  setNotificationOriginsList(value: Array<NotificationOrigin>): NotificationFilter;
  clearNotificationOriginsList(): NotificationFilter;
  addNotificationOrigins(value: NotificationOrigin, index?: number): NotificationFilter;

  getNotificationVisibilitiesList(): Array<NotificationVisibility>;
  setNotificationVisibilitiesList(value: Array<NotificationVisibility>): NotificationFilter;
  clearNotificationVisibilitiesList(): NotificationFilter;
  addNotificationVisibilities(value: NotificationVisibility, index?: number): NotificationFilter;

  getNotificationFlaggedStatusList(): Array<NotificationFlaggedStatus>;
  setNotificationFlaggedStatusList(value: Array<NotificationFlaggedStatus>): NotificationFilter;
  clearNotificationFlaggedStatusList(): NotificationFilter;
  addNotificationFlaggedStatus(value: NotificationFlaggedStatus, index?: number): NotificationFilter;

  getNotificationReadStatusList(): Array<NotificationReadStatus>;
  setNotificationReadStatusList(value: Array<NotificationReadStatus>): NotificationFilter;
  clearNotificationReadStatusList(): NotificationFilter;
  addNotificationReadStatus(value: NotificationReadStatus, index?: number): NotificationFilter;

  getEarliest(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEarliest(value?: google_protobuf_timestamp_pb.Timestamp): NotificationFilter;
  hasEarliest(): boolean;
  clearEarliest(): NotificationFilter;

  getLatest(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLatest(value?: google_protobuf_timestamp_pb.Timestamp): NotificationFilter;
  hasLatest(): boolean;
  clearLatest(): NotificationFilter;

  getUserNamesList(): Array<string>;
  setUserNamesList(value: Array<string>): NotificationFilter;
  clearUserNamesList(): NotificationFilter;
  addUserNames(value: string, index?: number): NotificationFilter;

  getOriginNamesList(): Array<string>;
  setOriginNamesList(value: Array<string>): NotificationFilter;
  clearOriginNamesList(): NotificationFilter;
  addOriginNames(value: string, index?: number): NotificationFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationFilter.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationFilter): NotificationFilter.AsObject;
  static serializeBinaryToWriter(message: NotificationFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationFilter;
  static deserializeBinaryFromReader(message: NotificationFilter, reader: jspb.BinaryReader): NotificationFilter;
}

export namespace NotificationFilter {
  export type AsObject = {
    languageCodesList: Array<string>,
    notificationOriginsList: Array<NotificationOrigin>,
    notificationVisibilitiesList: Array<NotificationVisibility>,
    notificationFlaggedStatusList: Array<NotificationFlaggedStatus>,
    notificationReadStatusList: Array<NotificationReadStatus>,
    earliest?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    latest?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userNamesList: Array<string>,
    originNamesList: Array<string>,
  }
}

export class ListNotificationsRequest extends jspb.Message {
  getNotificationFilter(): NotificationFilter | undefined;
  setNotificationFilter(value?: NotificationFilter): ListNotificationsRequest;
  hasNotificationFilter(): boolean;
  clearNotificationFilter(): ListNotificationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotificationsRequest;

  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): ListNotificationsRequest;
  hasFieldMask(): boolean;
  clearFieldMask(): ListNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationsRequest): ListNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationsRequest;
  static deserializeBinaryFromReader(message: ListNotificationsRequest, reader: jspb.BinaryReader): ListNotificationsRequest;
}

export namespace ListNotificationsRequest {
  export type AsObject = {
    notificationFilter?: NotificationFilter.AsObject,
    pageToken: string,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class ListNotificationsResponse extends jspb.Message {
  getNotificationsList(): Array<Notification>;
  setNotificationsList(value: Array<Notification>): ListNotificationsResponse;
  clearNotificationsList(): ListNotificationsResponse;
  addNotifications(value?: Notification, index?: number): Notification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotificationsResponse): ListNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotificationsResponse;
  static deserializeBinaryFromReader(message: ListNotificationsResponse, reader: jspb.BinaryReader): ListNotificationsResponse;
}

export namespace ListNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<Notification.AsObject>,
  }
}

export class SetNotificationsFlaggedStatusRequest extends jspb.Message {
  getNotificationNamesList(): Array<string>;
  setNotificationNamesList(value: Array<string>): SetNotificationsFlaggedStatusRequest;
  clearNotificationNamesList(): SetNotificationsFlaggedStatusRequest;
  addNotificationNames(value: string, index?: number): SetNotificationsFlaggedStatusRequest;

  getFlaggedList(): Array<boolean>;
  setFlaggedList(value: Array<boolean>): SetNotificationsFlaggedStatusRequest;
  clearFlaggedList(): SetNotificationsFlaggedStatusRequest;
  addFlagged(value: boolean, index?: number): SetNotificationsFlaggedStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNotificationsFlaggedStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNotificationsFlaggedStatusRequest): SetNotificationsFlaggedStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SetNotificationsFlaggedStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNotificationsFlaggedStatusRequest;
  static deserializeBinaryFromReader(message: SetNotificationsFlaggedStatusRequest, reader: jspb.BinaryReader): SetNotificationsFlaggedStatusRequest;
}

export namespace SetNotificationsFlaggedStatusRequest {
  export type AsObject = {
    notificationNamesList: Array<string>,
    flaggedList: Array<boolean>,
  }
}

export class SetNotificationsReadStatusRequest extends jspb.Message {
  getNotificationNamesList(): Array<string>;
  setNotificationNamesList(value: Array<string>): SetNotificationsReadStatusRequest;
  clearNotificationNamesList(): SetNotificationsReadStatusRequest;
  addNotificationNames(value: string, index?: number): SetNotificationsReadStatusRequest;

  getFlaggedList(): Array<boolean>;
  setFlaggedList(value: Array<boolean>): SetNotificationsReadStatusRequest;
  clearFlaggedList(): SetNotificationsReadStatusRequest;
  addFlagged(value: boolean, index?: number): SetNotificationsReadStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetNotificationsReadStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetNotificationsReadStatusRequest): SetNotificationsReadStatusRequest.AsObject;
  static serializeBinaryToWriter(message: SetNotificationsReadStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetNotificationsReadStatusRequest;
  static deserializeBinaryFromReader(message: SetNotificationsReadStatusRequest, reader: jspb.BinaryReader): SetNotificationsReadStatusRequest;
}

export namespace SetNotificationsReadStatusRequest {
  export type AsObject = {
    notificationNamesList: Array<string>,
    flaggedList: Array<boolean>,
  }
}

export class KeyValuePair extends jspb.Message {
  getKey(): string;
  setKey(value: string): KeyValuePair;

  getIntValue(): number;
  setIntValue(value: number): KeyValuePair;

  getFloatValue(): number;
  setFloatValue(value: number): KeyValuePair;

  getDoubleValue(): number;
  setDoubleValue(value: number): KeyValuePair;

  getStringValue(): string;
  setStringValue(value: string): KeyValuePair;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): KeyValuePair;
  hasCreatedAt(): boolean;
  clearCreatedAt(): KeyValuePair;

  getValueCase(): KeyValuePair.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValuePair.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValuePair): KeyValuePair.AsObject;
  static serializeBinaryToWriter(message: KeyValuePair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValuePair;
  static deserializeBinaryFromReader(message: KeyValuePair, reader: jspb.BinaryReader): KeyValuePair;
}

export namespace KeyValuePair {
  export type AsObject = {
    key: string,
    intValue: number,
    floatValue: number,
    doubleValue: number,
    stringValue: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    INT_VALUE = 2,
    FLOAT_VALUE = 3,
    DOUBLE_VALUE = 4,
    STRING_VALUE = 5,
    CREATED_AT = 6,
  }
}

export enum SortingMode { 
  ASCENDING = 0,
  DESCENDING = 1,
}
export enum NotificationFlaggedStatus { 
  NOTIFICATION_FLAGGED_STATUS_UNSPECIFIED = 0,
  NOTIFICATION_FLAGGED_STATUS_FLAGGED = 1,
  NOTIFICATION_FLAGGED_STATUS_UNFLAGGED = 2,
}
export enum NotificationReadStatus { 
  NOTIFICATION_READ_STATUS_UNSPECIFIED = 0,
  NOTIFICATION_READ_STATUS_READ = 1,
  NOTIFICATION_READ_STATUS_UNREAD = 2,
}
export enum NotificationVisibility { 
  NOTIFICATION_VISIBILITY_UNSPECIFIED = 0,
  NOTIFICATION_VISIBILITY_USER = 1,
  NOTIFICATION_VISIBILITY_PROJECT = 2,
  NOTIFICATION_VISIBILITY_PROJECT_OWNER = 3,
  NOTIFICATION_VISIBILITY_PROJECT_ADMIN = 4,
  NOTIFICATION_VISIBILITY_PROJECT_DEVELOPER = 5,
  NOTIFICATION_VISIBILITY_PROJECT_USER = 6,
  NOTIFICATION_VISIBILITY_PROJECT_EXECUTOR = 7,
  NOTIFICATION_VISIBILITY_PROJECT_INACTIVE = 8,
  NOTIFICATION_VISIBILITY_SERVER_ADMIN = 9,
  NOTIFICATION_VISIBILITY_SERVER_MANAGER = 10,
  NOTIFICATION_VISIBILITY_SERVER_USER = 11,
  NOTIFICATION_VISIBILITY_SERVER_INACTIVE = 12,
}
export enum NotificationType { 
  NOTIFICATION_TYPE_UNSPECIFIED = 0,
  NOTIFICATION_TYPE_DEBUG = 1,
  NOTIFICATION_TYPE_WARNING = 2,
  NOTIFICATION_TYPE_INFO = 3,
  NOTIFICATION_TYPE_ERROR = 4,
  NOTIFICATION_TYPE_NEWS = 5,
}
export enum NotificationOrigin { 
  NOTIFICATION_ORIGIN_UNSPECIFIED = 0,
  NOTIFICATION_ORIGIN_ONDEWO_AIM = 1,
  NOTIFICATION_ORIGIN_ONDEWO_BPI = 2,
  NOTIFICATION_ORIGIN_ONDEWO_CSI = 3,
  NOTIFICATION_ORIGIN_ONDEWO_NLU = 4,
  NOTIFICATION_ORIGIN_ONDEWO_S2T = 5,
  NOTIFICATION_ORIGIN_ONDEWO_SIP = 6,
  NOTIFICATION_ORIGIN_ONDEWO_T2S = 7,
  NOTIFICATION_ORIGIN_ONDEWO_VTSI = 8,
  NOTIFICATION_ORIGIN_ONDEWO_VTSI_RABBITMQ = 9,
}
