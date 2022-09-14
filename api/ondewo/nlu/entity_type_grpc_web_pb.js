/**
 * @fileoverview gRPC-Web generated client stub for ondewo.nlu
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./entity_type_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.EntityTypesClient = function (hostname, credentials, options) {
	if (!options) options = {};
	options.format = 'binary';

	/**
	 * @private @const {!grpc.web.GrpcWebClientBase} The client
	 */
	this.client_ = new grpc.web.GrpcWebClientBase(options);

	/**
	 * @private @const {string} The hostname
	 */
	this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.EntityTypesPromiseClient = function (hostname, credentials, options) {
	if (!options) options = {};
	options.format = 'binary';

	/**
	 * @private @const {!grpc.web.GrpcWebClientBase} The client
	 */
	this.client_ = new grpc.web.GrpcWebClientBase(options);

	/**
	 * @private @const {string} The hostname
	 */
	this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListEntityTypesRequest,
 *   !proto.ondewo.nlu.ListEntityTypesResponse>}
 */
const methodDescriptor_EntityTypes_ListEntityTypes = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/ListEntityTypes',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListEntityTypesRequest,
	proto.ondewo.nlu.ListEntityTypesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListEntityTypesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListEntityTypesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListEntityTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListEntityTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.listEntityTypes = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/ListEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_ListEntityTypes,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListEntityTypesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.listEntityTypes = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/ListEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_ListEntityTypes
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetEntityTypeRequest,
 *   !proto.ondewo.nlu.EntityType>}
 */
const methodDescriptor_EntityTypes_GetEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/GetEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetEntityTypeRequest,
	proto.ondewo.nlu.EntityType,
	/**
	 * @param {!proto.ondewo.nlu.GetEntityTypeRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.EntityType.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.getEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/GetEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_GetEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.EntityType>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.getEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/GetEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_GetEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateEntityTypeRequest,
 *   !proto.ondewo.nlu.EntityType>}
 */
const methodDescriptor_EntityTypes_CreateEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/CreateEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateEntityTypeRequest,
	proto.ondewo.nlu.EntityType,
	/**
	 * @param {!proto.ondewo.nlu.CreateEntityTypeRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.EntityType.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.createEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/CreateEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_CreateEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.EntityType>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.createEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/CreateEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_CreateEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateEntityTypeRequest,
 *   !proto.ondewo.nlu.EntityType>}
 */
const methodDescriptor_EntityTypes_UpdateEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/UpdateEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.UpdateEntityTypeRequest,
	proto.ondewo.nlu.EntityType,
	/**
	 * @param {!proto.ondewo.nlu.UpdateEntityTypeRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.EntityType.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.UpdateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.EntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.EntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.updateEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/UpdateEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_UpdateEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.UpdateEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.EntityType>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.updateEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/UpdateEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_UpdateEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteEntityTypeRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EntityTypes_DeleteEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/DeleteEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteEntityTypeRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteEntityTypeRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.deleteEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/DeleteEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_DeleteEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteEntityTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.deleteEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/DeleteEntityType',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_DeleteEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateEntityTypesRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_EntityTypes_BatchUpdateEntityTypes = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchUpdateEntityTypesRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.BatchUpdateEntityTypesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchUpdateEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchUpdateEntityTypes = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchUpdateEntityTypes,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchUpdateEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchUpdateEntityTypes = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchUpdateEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchUpdateEntityTypes
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteEntityTypesRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_EntityTypes_BatchDeleteEntityTypes = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchDeleteEntityTypesRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.BatchDeleteEntityTypesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchDeleteEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchDeleteEntityTypes = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchDeleteEntityTypes,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchDeleteEntityTypesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchDeleteEntityTypes = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchDeleteEntityTypes',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchDeleteEntityTypes
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchCreateEntitiesRequest,
 *   !proto.ondewo.nlu.BatchEntitiesResponse>}
 */
const methodDescriptor_EntityTypes_BatchCreateEntities = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchCreateEntities',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchCreateEntitiesRequest,
	proto.ondewo.nlu.BatchEntitiesResponse,
	/**
	 * @param {!proto.ondewo.nlu.BatchCreateEntitiesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.BatchEntitiesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchCreateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchCreateEntities = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchCreateEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchCreateEntities,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchCreateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchCreateEntities = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchCreateEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchCreateEntities
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchUpdateEntitiesRequest,
 *   !proto.ondewo.nlu.BatchEntitiesResponse>}
 */
const methodDescriptor_EntityTypes_BatchUpdateEntities = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchUpdateEntities',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchUpdateEntitiesRequest,
	proto.ondewo.nlu.BatchEntitiesResponse,
	/**
	 * @param {!proto.ondewo.nlu.BatchUpdateEntitiesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.BatchEntitiesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchUpdateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchUpdateEntities = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchUpdateEntities,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchUpdateEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchUpdateEntities = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchUpdateEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchUpdateEntities
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchGetEntitiesRequest,
 *   !proto.ondewo.nlu.BatchEntitiesResponse>}
 */
const methodDescriptor_EntityTypes_BatchGetEntities = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchGetEntities',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchGetEntitiesRequest,
	proto.ondewo.nlu.BatchEntitiesResponse,
	/**
	 * @param {!proto.ondewo.nlu.BatchGetEntitiesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.BatchEntitiesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchGetEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchGetEntities = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchGetEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchGetEntities,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchGetEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchGetEntities = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchGetEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchGetEntities
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BatchDeleteEntitiesRequest,
 *   !proto.ondewo.nlu.BatchDeleteEntitiesResponse>}
 */
const methodDescriptor_EntityTypes_BatchDeleteEntities = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/BatchDeleteEntities',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BatchDeleteEntitiesRequest,
	proto.ondewo.nlu.BatchDeleteEntitiesResponse,
	/**
	 * @param {!proto.ondewo.nlu.BatchDeleteEntitiesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.BatchDeleteEntitiesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BatchDeleteEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.BatchDeleteEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.BatchDeleteEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.batchDeleteEntities = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchDeleteEntities,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BatchDeleteEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.BatchDeleteEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.batchDeleteEntities = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/BatchDeleteEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_BatchDeleteEntities
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListEntitiesRequest,
 *   !proto.ondewo.nlu.ListEntitiesResponse>}
 */
const methodDescriptor_EntityTypes_ListEntities = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.EntityTypes/ListEntities',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListEntitiesRequest,
	proto.ondewo.nlu.ListEntitiesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListEntitiesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListEntitiesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListEntitiesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListEntitiesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.EntityTypesClient.prototype.listEntities = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/ListEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_ListEntities,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListEntitiesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListEntitiesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.EntityTypesPromiseClient.prototype.listEntities = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.EntityTypes/ListEntities',
		request,
		metadata || {},
		methodDescriptor_EntityTypes_ListEntities
	);
};

module.exports = proto.ondewo.nlu;
