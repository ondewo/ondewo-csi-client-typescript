import * as jspb from 'google-protobuf';

import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';

export class CcaiProject extends jspb.Message {
	getName(): string;
	setName(value: string): CcaiProject;

	getDisplayName(): string;
	setDisplayName(value: string): CcaiProject;

	getOwnerName(): string;
	setOwnerName(value: string): CcaiProject;

	getCcaiServicesMapMap(): jspb.Map<string, CcaiServiceList>;
	clearCcaiServicesMapMap(): CcaiProject;

	getCcaiProjectStatus(): CcaiProjectStatus;
	setCcaiProjectStatus(value: CcaiProjectStatus): CcaiProject;

	getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CcaiProject;
	hasCreatedAt(): boolean;
	clearCreatedAt(): CcaiProject;

	getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): CcaiProject;
	hasModifiedAt(): boolean;
	clearModifiedAt(): CcaiProject;

	getCreatedBy(): string;
	setCreatedBy(value: string): CcaiProject;

	getModifiedBy(): string;
	setModifiedBy(value: string): CcaiProject;

	getNluProjectName(): string;
	setNluProjectName(value: string): CcaiProject;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CcaiProject.AsObject;
	static toObject(includeInstance: boolean, msg: CcaiProject): CcaiProject.AsObject;
	static serializeBinaryToWriter(message: CcaiProject, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CcaiProject;
	static deserializeBinaryFromReader(message: CcaiProject, reader: jspb.BinaryReader): CcaiProject;
}

export namespace CcaiProject {
	export type AsObject = {
		name: string;
		displayName: string;
		ownerName: string;
		ccaiServicesMapMap: Array<[string, CcaiServiceList.AsObject]>;
		ccaiProjectStatus: CcaiProjectStatus;
		createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
		nluProjectName: string;
	};
}

export class CcaiServiceList extends jspb.Message {
	getCcaiServicesList(): Array<CcaiService>;
	setCcaiServicesList(value: Array<CcaiService>): CcaiServiceList;
	clearCcaiServicesList(): CcaiServiceList;
	addCcaiServices(value?: CcaiService, index?: number): CcaiService;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CcaiServiceList.AsObject;
	static toObject(includeInstance: boolean, msg: CcaiServiceList): CcaiServiceList.AsObject;
	static serializeBinaryToWriter(message: CcaiServiceList, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CcaiServiceList;
	static deserializeBinaryFromReader(message: CcaiServiceList, reader: jspb.BinaryReader): CcaiServiceList;
}

export namespace CcaiServiceList {
	export type AsObject = {
		ccaiServicesList: Array<CcaiService.AsObject>;
	};
}

export class CcaiService extends jspb.Message {
	getName(): string;
	setName(value: string): CcaiService;

	getDisplayName(): string;
	setDisplayName(value: string): CcaiService;

	getLanguageCode(): string;
	setLanguageCode(value: string): CcaiService;

	getGrpcHost(): string;
	setGrpcHost(value: string): CcaiService;

	getGrpcPort(): number;
	setGrpcPort(value: number): CcaiService;

	getWebgrpcHost(): string;
	setWebgrpcHost(value: string): CcaiService;

	getWebgrpcPort(): number;
	setWebgrpcPort(value: number): CcaiService;

	getGrpcCert(): string;
	setGrpcCert(value: string): CcaiService;

	getHost(): string;
	setHost(value: string): CcaiService;

	getPort(): number;
	setPort(value: number): CcaiService;

	getPort2(): number;
	setPort2(value: number): CcaiService;

	getHttpBasicAuthToken(): string;
	setHttpBasicAuthToken(value: string): CcaiService;

	getAccountName(): string;
	setAccountName(value: string): CcaiService;

	getAccountPassword(): string;
	setAccountPassword(value: string): CcaiService;

	getApiKey(): string;
	setApiKey(value: string): CcaiService;

	getCcaiServiceType(): CcaiServiceType;
	setCcaiServiceType(value: CcaiServiceType): CcaiService;

	getCcaiProjectName(): string;
	setCcaiProjectName(value: string): CcaiService;

	getCcaiServiceConfig(): google_protobuf_struct_pb.Struct | undefined;
	setCcaiServiceConfig(value?: google_protobuf_struct_pb.Struct): CcaiService;
	hasCcaiServiceConfig(): boolean;
	clearCcaiServiceConfig(): CcaiService;

	getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CcaiService;
	hasCreatedAt(): boolean;
	clearCreatedAt(): CcaiService;

	getModifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setModifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): CcaiService;
	hasModifiedAt(): boolean;
	clearModifiedAt(): CcaiService;

	getCreatedBy(): string;
	setCreatedBy(value: string): CcaiService;

	getModifiedBy(): string;
	setModifiedBy(value: string): CcaiService;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CcaiService.AsObject;
	static toObject(includeInstance: boolean, msg: CcaiService): CcaiService.AsObject;
	static serializeBinaryToWriter(message: CcaiService, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CcaiService;
	static deserializeBinaryFromReader(message: CcaiService, reader: jspb.BinaryReader): CcaiService;
}

export namespace CcaiService {
	export type AsObject = {
		name: string;
		displayName: string;
		languageCode: string;
		grpcHost: string;
		grpcPort: number;
		webgrpcHost: string;
		webgrpcPort: number;
		grpcCert: string;
		host: string;
		port: number;
		port2: number;
		httpBasicAuthToken: string;
		accountName: string;
		accountPassword: string;
		apiKey: string;
		ccaiServiceType: CcaiServiceType;
		ccaiProjectName: string;
		ccaiServiceConfig?: google_protobuf_struct_pb.Struct.AsObject;
		createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		modifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		createdBy: string;
		modifiedBy: string;
	};
}

export class CreateCcaiProjectRequest extends jspb.Message {
	getCcaiProject(): CcaiProject | undefined;
	setCcaiProject(value?: CcaiProject): CreateCcaiProjectRequest;
	hasCcaiProject(): boolean;
	clearCcaiProject(): CreateCcaiProjectRequest;

	getNluProjectName(): string;
	setNluProjectName(value: string): CreateCcaiProjectRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateCcaiProjectRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CreateCcaiProjectRequest): CreateCcaiProjectRequest.AsObject;
	static serializeBinaryToWriter(message: CreateCcaiProjectRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateCcaiProjectRequest;
	static deserializeBinaryFromReader(
		message: CreateCcaiProjectRequest,
		reader: jspb.BinaryReader
	): CreateCcaiProjectRequest;
}

export namespace CreateCcaiProjectRequest {
	export type AsObject = {
		ccaiProject?: CcaiProject.AsObject;
		nluProjectName: string;
	};
}

export class CreateCcaiProjectResponse extends jspb.Message {
	getCcaiProject(): CcaiProject | undefined;
	setCcaiProject(value?: CcaiProject): CreateCcaiProjectResponse;
	hasCcaiProject(): boolean;
	clearCcaiProject(): CreateCcaiProjectResponse;

	getErrorMessage(): string;
	setErrorMessage(value: string): CreateCcaiProjectResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateCcaiProjectResponse.AsObject;
	static toObject(includeInstance: boolean, msg: CreateCcaiProjectResponse): CreateCcaiProjectResponse.AsObject;
	static serializeBinaryToWriter(message: CreateCcaiProjectResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateCcaiProjectResponse;
	static deserializeBinaryFromReader(
		message: CreateCcaiProjectResponse,
		reader: jspb.BinaryReader
	): CreateCcaiProjectResponse;
}

export namespace CreateCcaiProjectResponse {
	export type AsObject = {
		ccaiProject?: CcaiProject.AsObject;
		errorMessage: string;
	};
}

export class GetCcaiProjectRequest extends jspb.Message {
	getName(): string;
	setName(value: string): GetCcaiProjectRequest;

	getCcaiProjectView(): CcaiProjectView;
	setCcaiProjectView(value: CcaiProjectView): GetCcaiProjectRequest;
	hasCcaiProjectView(): boolean;
	clearCcaiProjectView(): GetCcaiProjectRequest;

	getCcaiServiceFilter(): CcaiServiceFilter | undefined;
	setCcaiServiceFilter(value?: CcaiServiceFilter): GetCcaiProjectRequest;
	hasCcaiServiceFilter(): boolean;
	clearCcaiServiceFilter(): GetCcaiProjectRequest;

	getNluProjectName(): string;
	setNluProjectName(value: string): GetCcaiProjectRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetCcaiProjectRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetCcaiProjectRequest): GetCcaiProjectRequest.AsObject;
	static serializeBinaryToWriter(message: GetCcaiProjectRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetCcaiProjectRequest;
	static deserializeBinaryFromReader(message: GetCcaiProjectRequest, reader: jspb.BinaryReader): GetCcaiProjectRequest;
}

export namespace GetCcaiProjectRequest {
	export type AsObject = {
		name: string;
		ccaiProjectView?: CcaiProjectView;
		ccaiServiceFilter?: CcaiServiceFilter.AsObject;
		nluProjectName: string;
	};

	export enum CcaiProjectViewCase {
		_CCAI_PROJECT_VIEW_NOT_SET = 0,
		CCAI_PROJECT_VIEW = 2
	}

	export enum CcaiServiceFilterCase {
		_CCAI_SERVICE_FILTER_NOT_SET = 0,
		CCAI_SERVICE_FILTER = 3
	}
}

export class ListCcaiProjectsRequest extends jspb.Message {
	getCcaiProjectView(): CcaiProjectView;
	setCcaiProjectView(value: CcaiProjectView): ListCcaiProjectsRequest;

	getCcaiServiceFilter(): CcaiServiceFilter | undefined;
	setCcaiServiceFilter(value?: CcaiServiceFilter): ListCcaiProjectsRequest;
	hasCcaiServiceFilter(): boolean;
	clearCcaiServiceFilter(): ListCcaiProjectsRequest;

	getCcaiProjectSorting(): CcaiProjectSorting | undefined;
	setCcaiProjectSorting(value?: CcaiProjectSorting): ListCcaiProjectsRequest;
	hasCcaiProjectSorting(): boolean;
	clearCcaiProjectSorting(): ListCcaiProjectsRequest;

	getPageToken(): string;
	setPageToken(value: string): ListCcaiProjectsRequest;
	hasPageToken(): boolean;
	clearPageToken(): ListCcaiProjectsRequest;

	getNluProjectName(): string;
	setNluProjectName(value: string): ListCcaiProjectsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCcaiProjectsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListCcaiProjectsRequest): ListCcaiProjectsRequest.AsObject;
	static serializeBinaryToWriter(message: ListCcaiProjectsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCcaiProjectsRequest;
	static deserializeBinaryFromReader(
		message: ListCcaiProjectsRequest,
		reader: jspb.BinaryReader
	): ListCcaiProjectsRequest;
}

export namespace ListCcaiProjectsRequest {
	export type AsObject = {
		ccaiProjectView: CcaiProjectView;
		ccaiServiceFilter?: CcaiServiceFilter.AsObject;
		ccaiProjectSorting?: CcaiProjectSorting.AsObject;
		pageToken?: string;
		nluProjectName: string;
	};

	export enum CcaiServiceFilterCase {
		_CCAI_SERVICE_FILTER_NOT_SET = 0,
		CCAI_SERVICE_FILTER = 2
	}

	export enum CcaiProjectSortingCase {
		_CCAI_PROJECT_SORTING_NOT_SET = 0,
		CCAI_PROJECT_SORTING = 3
	}

	export enum PageTokenCase {
		_PAGE_TOKEN_NOT_SET = 0,
		PAGE_TOKEN = 4
	}
}

export class ListCcaiProjectsResponse extends jspb.Message {
	getCcaiProjectsList(): Array<CcaiProject>;
	setCcaiProjectsList(value: Array<CcaiProject>): ListCcaiProjectsResponse;
	clearCcaiProjectsList(): ListCcaiProjectsResponse;
	addCcaiProjects(value?: CcaiProject, index?: number): CcaiProject;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListCcaiProjectsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListCcaiProjectsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListCcaiProjectsResponse): ListCcaiProjectsResponse.AsObject;
	static serializeBinaryToWriter(message: ListCcaiProjectsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListCcaiProjectsResponse;
	static deserializeBinaryFromReader(
		message: ListCcaiProjectsResponse,
		reader: jspb.BinaryReader
	): ListCcaiProjectsResponse;
}

export namespace ListCcaiProjectsResponse {
	export type AsObject = {
		ccaiProjectsList: Array<CcaiProject.AsObject>;
		nextPageToken: string;
	};
}

export class CcaiProjectSorting extends jspb.Message {
	getSortingField(): CcaiProjectSorting.CcaiProjectSortingField;
	setSortingField(value: CcaiProjectSorting.CcaiProjectSortingField): CcaiProjectSorting;
	hasSortingField(): boolean;
	clearSortingField(): CcaiProjectSorting;

	getSortingMode(): ondewo_nlu_common_pb.SortingMode;
	setSortingMode(value: ondewo_nlu_common_pb.SortingMode): CcaiProjectSorting;
	hasSortingMode(): boolean;
	clearSortingMode(): CcaiProjectSorting;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CcaiProjectSorting.AsObject;
	static toObject(includeInstance: boolean, msg: CcaiProjectSorting): CcaiProjectSorting.AsObject;
	static serializeBinaryToWriter(message: CcaiProjectSorting, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CcaiProjectSorting;
	static deserializeBinaryFromReader(message: CcaiProjectSorting, reader: jspb.BinaryReader): CcaiProjectSorting;
}

export namespace CcaiProjectSorting {
	export type AsObject = {
		sortingField?: CcaiProjectSorting.CcaiProjectSortingField;
		sortingMode?: ondewo_nlu_common_pb.SortingMode;
	};

	export enum CcaiProjectSortingField {
		NO_CCAI_PROJECT_SORTING = 0,
		SORT_CCAI_PROJECT_BY_NAME = 1,
		SORT_CCAI_PROJECT_BY_DISPLAY_NAME = 2,
		SORT_CCAI_PROJECT_BY_CREATION_DATE = 3,
		SORT_CCAI_PROJECT_BY_LAST_MODIFIED = 4
	}

	export enum SortingFieldCase {
		_SORTING_FIELD_NOT_SET = 0,
		SORTING_FIELD = 1
	}

	export enum SortingModeCase {
		_SORTING_MODE_NOT_SET = 0,
		SORTING_MODE = 2
	}
}

export class CcaiServiceFilter extends jspb.Message {
	getLanguageCodesList(): Array<string>;
	setLanguageCodesList(value: Array<string>): CcaiServiceFilter;
	clearLanguageCodesList(): CcaiServiceFilter;
	addLanguageCodes(value: string, index?: number): CcaiServiceFilter;

	getCcaiServiceTypesList(): Array<CcaiServiceType>;
	setCcaiServiceTypesList(value: Array<CcaiServiceType>): CcaiServiceFilter;
	clearCcaiServiceTypesList(): CcaiServiceFilter;
	addCcaiServiceTypes(value: CcaiServiceType, index?: number): CcaiServiceFilter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CcaiServiceFilter.AsObject;
	static toObject(includeInstance: boolean, msg: CcaiServiceFilter): CcaiServiceFilter.AsObject;
	static serializeBinaryToWriter(message: CcaiServiceFilter, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CcaiServiceFilter;
	static deserializeBinaryFromReader(message: CcaiServiceFilter, reader: jspb.BinaryReader): CcaiServiceFilter;
}

export namespace CcaiServiceFilter {
	export type AsObject = {
		languageCodesList: Array<string>;
		ccaiServiceTypesList: Array<CcaiServiceType>;
	};
}

export class UpdateCcaiProjectRequest extends jspb.Message {
	getCcaiProject(): CcaiProject | undefined;
	setCcaiProject(value?: CcaiProject): UpdateCcaiProjectRequest;
	hasCcaiProject(): boolean;
	clearCcaiProject(): UpdateCcaiProjectRequest;

	getCcaiServiceFilter(): CcaiServiceFilter | undefined;
	setCcaiServiceFilter(value?: CcaiServiceFilter): UpdateCcaiProjectRequest;
	hasCcaiServiceFilter(): boolean;
	clearCcaiServiceFilter(): UpdateCcaiProjectRequest;

	getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateCcaiProjectRequest;
	hasUpdateMask(): boolean;
	clearUpdateMask(): UpdateCcaiProjectRequest;

	getNluProjectName(): string;
	setNluProjectName(value: string): UpdateCcaiProjectRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateCcaiProjectRequest.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateCcaiProjectRequest): UpdateCcaiProjectRequest.AsObject;
	static serializeBinaryToWriter(message: UpdateCcaiProjectRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateCcaiProjectRequest;
	static deserializeBinaryFromReader(
		message: UpdateCcaiProjectRequest,
		reader: jspb.BinaryReader
	): UpdateCcaiProjectRequest;
}

export namespace UpdateCcaiProjectRequest {
	export type AsObject = {
		ccaiProject?: CcaiProject.AsObject;
		ccaiServiceFilter?: CcaiServiceFilter.AsObject;
		updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
		nluProjectName: string;
	};

	export enum CcaiServiceFilterCase {
		_CCAI_SERVICE_FILTER_NOT_SET = 0,
		CCAI_SERVICE_FILTER = 2
	}

	export enum UpdateMaskCase {
		_UPDATE_MASK_NOT_SET = 0,
		UPDATE_MASK = 3
	}
}

export class UpdateCcaiProjectResponse extends jspb.Message {
	getName(): string;
	setName(value: string): UpdateCcaiProjectResponse;

	getErrorMessage(): string;
	setErrorMessage(value: string): UpdateCcaiProjectResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateCcaiProjectResponse.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateCcaiProjectResponse): UpdateCcaiProjectResponse.AsObject;
	static serializeBinaryToWriter(message: UpdateCcaiProjectResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateCcaiProjectResponse;
	static deserializeBinaryFromReader(
		message: UpdateCcaiProjectResponse,
		reader: jspb.BinaryReader
	): UpdateCcaiProjectResponse;
}

export namespace UpdateCcaiProjectResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
	};
}

export class DeleteCcaiProjectRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteCcaiProjectRequest;

	getNluProjectName(): string;
	setNluProjectName(value: string): DeleteCcaiProjectRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCcaiProjectRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCcaiProjectRequest): DeleteCcaiProjectRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteCcaiProjectRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCcaiProjectRequest;
	static deserializeBinaryFromReader(
		message: DeleteCcaiProjectRequest,
		reader: jspb.BinaryReader
	): DeleteCcaiProjectRequest;
}

export namespace DeleteCcaiProjectRequest {
	export type AsObject = {
		name: string;
		nluProjectName: string;
	};
}

export class DeleteCcaiProjectResponse extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteCcaiProjectResponse;

	getErrorMessage(): string;
	setErrorMessage(value: string): DeleteCcaiProjectResponse;

	getNluProjectName(): string;
	setNluProjectName(value: string): DeleteCcaiProjectResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteCcaiProjectResponse.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteCcaiProjectResponse): DeleteCcaiProjectResponse.AsObject;
	static serializeBinaryToWriter(message: DeleteCcaiProjectResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteCcaiProjectResponse;
	static deserializeBinaryFromReader(
		message: DeleteCcaiProjectResponse,
		reader: jspb.BinaryReader
	): DeleteCcaiProjectResponse;
}

export namespace DeleteCcaiProjectResponse {
	export type AsObject = {
		name: string;
		errorMessage: string;
		nluProjectName: string;
	};
}

export enum CcaiProjectStatus {
	CCAI_PROJECT_STATUS_UNSPECIFIED = 0,
	CCAI_PROJECT_STATUS_UNDEPLOYED = 1,
	CCAI_PROJECT_STATUS_UPDATING = 2,
	CCAI_PROJECT_STATUS_DEPLOYING = 3,
	CCAI_PROJECT_STATUS_DEPLOYED = 4,
	CCAI_PROJECT_STATUS_UNDEPLOYING = 5,
	CCAI_PROJECT_STATUS_DELETING = 6,
	CCAI_PROJECT_STATUS_DELETED = 7
}
export enum CcaiServiceType {
	CCAI_SERVICE_TYPE_UNSPECIFIED = 0,
	CCAI_SERVICE_TYPE_ONDEWO_AIM = 1,
	CCAI_SERVICE_TYPE_ONDEWO_BPI = 2,
	CCAI_SERVICE_TYPE_ONDEWO_CSI = 3,
	CCAI_SERVICE_TYPE_ONDEWO_NLU = 4,
	CCAI_SERVICE_TYPE_ONDEWO_S2T = 5,
	CCAI_SERVICE_TYPE_ONDEWO_SIP = 6,
	CCAI_SERVICE_TYPE_ONDEWO_T2S = 7,
	CCAI_SERVICE_TYPE_ONDEWO_VTSI = 8,
	CCAI_SERVICE_TYPE_VTSI_RABBITMQ = 9,
	CCAI_SERVICE_TYPE_ONDEWO_NLU_QA = 10,
	CCAI_SERVICE_TYPE_ONDEWO_NLU_WEBHOOK = 11,
	CCAI_SERVICE_TYPE_ONDEWO_SURVEY = 12
}
export enum CcaiProjectView {
	CCAI_PROJECT_VIEW_UNSPECIFIED = 0,
	CCAI_PROJECT_VIEW_FULL = 1,
	CCAI_PROJECT_VIEW_SHALLOW = 2,
	CCAI_PROJECT_VIEW_MINIMUM = 3
}
