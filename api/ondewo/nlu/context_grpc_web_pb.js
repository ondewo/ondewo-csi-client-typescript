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
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./context_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.ContextsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.ContextsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.ListContextsRequest,
 *   !proto.ondewo.nlu.ListContextsResponse>}
 */
const methodDescriptor_Contexts_ListContexts = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/ListContexts',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListContextsRequest,
	proto.ondewo.nlu.ListContextsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListContextsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListContextsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.listContexts = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/ListContexts',
		request,
		metadata || {},
		methodDescriptor_Contexts_ListContexts,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListContextsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.listContexts = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/ListContexts',
		request,
		metadata || {},
		methodDescriptor_Contexts_ListContexts
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetContextRequest,
 *   !proto.ondewo.nlu.Context>}
 */
const methodDescriptor_Contexts_GetContext = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/GetContext',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetContextRequest,
	proto.ondewo.nlu.Context,
	/**
	 * @param {!proto.ondewo.nlu.GetContextRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Context.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.getContext = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/GetContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_GetContext,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetContextRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Context>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.getContext = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/GetContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_GetContext
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateContextRequest,
 *   !proto.ondewo.nlu.Context>}
 */
const methodDescriptor_Contexts_CreateContext = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/CreateContext',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateContextRequest,
	proto.ondewo.nlu.Context,
	/**
	 * @param {!proto.ondewo.nlu.CreateContextRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Context.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.createContext = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/CreateContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_CreateContext,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Context>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.createContext = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/CreateContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_CreateContext
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateContextRequest,
 *   !proto.ondewo.nlu.Context>}
 */
const methodDescriptor_Contexts_UpdateContext = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/UpdateContext',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.UpdateContextRequest,
	proto.ondewo.nlu.Context,
	/**
	 * @param {!proto.ondewo.nlu.UpdateContextRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Context.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.UpdateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Context)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Context>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.updateContext = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/UpdateContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_UpdateContext,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.UpdateContextRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Context>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.updateContext = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/UpdateContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_UpdateContext
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteContextRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Contexts_DeleteContext = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/DeleteContext',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteContextRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteContextRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteContextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.deleteContext = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/DeleteContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_DeleteContext,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteContextRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.deleteContext = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/DeleteContext',
		request,
		metadata || {},
		methodDescriptor_Contexts_DeleteContext
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteAllContextsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Contexts_DeleteAllContexts = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Contexts/DeleteAllContexts',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteAllContextsRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteAllContextsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteAllContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ContextsClient.prototype.deleteAllContexts = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Contexts/DeleteAllContexts',
		request,
		metadata || {},
		methodDescriptor_Contexts_DeleteAllContexts,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteAllContextsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ContextsPromiseClient.prototype.deleteAllContexts = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Contexts/DeleteAllContexts',
		request,
		metadata || {},
		methodDescriptor_Contexts_DeleteAllContexts
	);
};

module.exports = proto.ondewo.nlu;
