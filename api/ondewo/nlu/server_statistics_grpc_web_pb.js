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

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./server_statistics_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.ServerStatisticsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.ServerStatisticsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ServerStatistics_GetProjectCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ServerStatistics/GetProjectCount',
	grpc.web.MethodType.UNARY,
	google_protobuf_empty_pb.Empty,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.google.protobuf.Empty} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ServerStatisticsClient.prototype.getProjectCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetProjectCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetProjectCount,
		callback
	);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ServerStatisticsPromiseClient.prototype.getProjectCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetProjectCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetProjectCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetUserProjectCountRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ServerStatistics_GetUserProjectCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ServerStatistics/GetUserProjectCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetUserProjectCountRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetUserProjectCountRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetUserProjectCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ServerStatisticsClient.prototype.getUserProjectCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetUserProjectCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetUserProjectCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ServerStatisticsPromiseClient.prototype.getUserProjectCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetUserProjectCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetUserProjectCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ServerStatistics_GetUserCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ServerStatistics/GetUserCount',
	grpc.web.MethodType.UNARY,
	google_protobuf_empty_pb.Empty,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.google.protobuf.Empty} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ServerStatisticsClient.prototype.getUserCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetUserCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetUserCount,
		callback
	);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ServerStatisticsPromiseClient.prototype.getUserCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ServerStatistics/GetUserCount',
		request,
		metadata || {},
		methodDescriptor_ServerStatistics_GetUserCount
	);
};

module.exports = proto.ondewo.nlu;
