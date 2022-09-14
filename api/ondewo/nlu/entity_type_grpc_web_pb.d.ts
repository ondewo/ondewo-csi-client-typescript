import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_entity_type_pb from '../../ondewo/nlu/entity_type_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';

export class EntityTypesClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.ListEntityTypesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.ListEntityTypesResponse>;

	getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.EntityType>;

	createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.EntityType>;

	updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.EntityType) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.EntityType>;

	deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_operations_pb.Operation) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

	batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.BatchEntitiesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse>;

	listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_nlu_entity_type_pb.ListEntitiesResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_nlu_entity_type_pb.ListEntitiesResponse>;
}

export class EntityTypesPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	listEntityTypes(
		request: ondewo_nlu_entity_type_pb.ListEntityTypesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.ListEntityTypesResponse>;

	getEntityType(
		request: ondewo_nlu_entity_type_pb.GetEntityTypeRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.EntityType>;

	createEntityType(
		request: ondewo_nlu_entity_type_pb.CreateEntityTypeRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.EntityType>;

	updateEntityType(
		request: ondewo_nlu_entity_type_pb.UpdateEntityTypeRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.EntityType>;

	deleteEntityType(
		request: ondewo_nlu_entity_type_pb.DeleteEntityTypeRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	batchUpdateEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntityTypesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	batchDeleteEntityTypes(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntityTypesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_operations_pb.Operation>;

	batchCreateEntities(
		request: ondewo_nlu_entity_type_pb.BatchCreateEntitiesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchUpdateEntities(
		request: ondewo_nlu_entity_type_pb.BatchUpdateEntitiesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchGetEntities(
		request: ondewo_nlu_entity_type_pb.BatchGetEntitiesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.BatchEntitiesResponse>;

	batchDeleteEntities(
		request: ondewo_nlu_entity_type_pb.BatchDeleteEntitiesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.BatchDeleteEntitiesResponse>;

	listEntities(
		request: ondewo_nlu_entity_type_pb.ListEntitiesRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_nlu_entity_type_pb.ListEntitiesResponse>;
}
