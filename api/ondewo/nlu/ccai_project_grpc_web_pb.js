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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./ccai_project_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.CcaiProjectsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.CcaiProjectsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.GetCcaiProjectRequest,
 *   !proto.ondewo.nlu.CcaiProject>}
 */
const methodDescriptor_CcaiProjects_GetCcaiProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.CcaiProjects/GetCcaiProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetCcaiProjectRequest,
	proto.ondewo.nlu.CcaiProject,
	/**
	 * @param {!proto.ondewo.nlu.GetCcaiProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CcaiProject.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CcaiProject)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CcaiProject>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.CcaiProjectsClient.prototype.getCcaiProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/GetCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_GetCcaiProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CcaiProject>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.CcaiProjectsPromiseClient.prototype.getCcaiProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/GetCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_GetCcaiProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateCcaiProjectRequest,
 *   !proto.ondewo.nlu.CreateCcaiProjectResponse>}
 */
const methodDescriptor_CcaiProjects_CreateCcaiProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.CcaiProjects/CreateCcaiProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateCcaiProjectRequest,
	proto.ondewo.nlu.CreateCcaiProjectResponse,
	/**
	 * @param {!proto.ondewo.nlu.CreateCcaiProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.CreateCcaiProjectResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.CreateCcaiProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.CreateCcaiProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.CcaiProjectsClient.prototype.createCcaiProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/CreateCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_CreateCcaiProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.CreateCcaiProjectResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.CcaiProjectsPromiseClient.prototype.createCcaiProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/CreateCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_CreateCcaiProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteCcaiProjectRequest,
 *   !proto.ondewo.nlu.DeleteCcaiProjectResponse>}
 */
const methodDescriptor_CcaiProjects_DeleteCcaiProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.CcaiProjects/DeleteCcaiProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteCcaiProjectRequest,
	proto.ondewo.nlu.DeleteCcaiProjectResponse,
	/**
	 * @param {!proto.ondewo.nlu.DeleteCcaiProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.DeleteCcaiProjectResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.DeleteCcaiProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.DeleteCcaiProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.CcaiProjectsClient.prototype.deleteCcaiProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/DeleteCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_DeleteCcaiProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.DeleteCcaiProjectResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.CcaiProjectsPromiseClient.prototype.deleteCcaiProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/DeleteCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_DeleteCcaiProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListCcaiProjectsRequest,
 *   !proto.ondewo.nlu.ListCcaiProjectsResponse>}
 */
const methodDescriptor_CcaiProjects_ListCcaiProjects = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.CcaiProjects/ListCcaiProjects',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListCcaiProjectsRequest,
	proto.ondewo.nlu.ListCcaiProjectsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListCcaiProjectsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListCcaiProjectsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListCcaiProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListCcaiProjectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListCcaiProjectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.CcaiProjectsClient.prototype.listCcaiProjects = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/ListCcaiProjects',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_ListCcaiProjects,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListCcaiProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListCcaiProjectsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.CcaiProjectsPromiseClient.prototype.listCcaiProjects = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/ListCcaiProjects',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_ListCcaiProjects
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateCcaiProjectRequest,
 *   !proto.ondewo.nlu.UpdateCcaiProjectResponse>}
 */
const methodDescriptor_CcaiProjects_UpdateCcaiProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.CcaiProjects/UpdateCcaiProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.UpdateCcaiProjectRequest,
	proto.ondewo.nlu.UpdateCcaiProjectResponse,
	/**
	 * @param {!proto.ondewo.nlu.UpdateCcaiProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.UpdateCcaiProjectResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.UpdateCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.UpdateCcaiProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.UpdateCcaiProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.CcaiProjectsClient.prototype.updateCcaiProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/UpdateCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_UpdateCcaiProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.UpdateCcaiProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.UpdateCcaiProjectResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.CcaiProjectsPromiseClient.prototype.updateCcaiProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.CcaiProjects/UpdateCcaiProject',
		request,
		metadata || {},
		methodDescriptor_CcaiProjects_UpdateCcaiProject
	);
};

module.exports = proto.ondewo.nlu;
