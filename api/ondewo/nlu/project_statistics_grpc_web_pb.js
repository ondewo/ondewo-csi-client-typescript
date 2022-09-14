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

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./project_statistics_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.ProjectStatisticsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.ProjectStatisticsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.GetIntentCountRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetIntentCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetIntentCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetIntentCountRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetIntentCountRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetIntentCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getIntentCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetIntentCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetIntentCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetIntentCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getIntentCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetIntentCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetIntentCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetEntityTypeCountRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetEntityTypeCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetEntityTypeCountRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetEntityTypeCountRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetEntityTypeCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getEntityTypeCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntityTypeCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetEntityTypeCountRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getEntityTypeCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntityTypeCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntityTypeCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetUserCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetUserCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getUserCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetUserCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetUserCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getUserCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetUserCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetUserCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetSessionCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetSessionCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getSessionCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetSessionCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetSessionCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getSessionCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetSessionCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetSessionCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectElementStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetTrainingPhraseCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectElementStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getTrainingPhraseCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetTrainingPhraseCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getTrainingPhraseCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetTrainingPhraseCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetTrainingPhraseCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectElementStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetResponseCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetResponseCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectElementStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getResponseCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetResponseCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetResponseCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getResponseCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetResponseCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetResponseCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectElementStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetEntityValueCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectElementStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getEntityValueCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntityValueCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getEntityValueCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntityValueCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntityValueCount
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetProjectElementStatRequest,
 *   !proto.ondewo.nlu.StatResponse>}
 */
const methodDescriptor_ProjectStatistics_GetEntitySynonymCount = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetProjectElementStatRequest,
	ondewo_nlu_common_pb.StatResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_common_pb.StatResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.ProjectStatisticsClient.prototype.getEntitySynonymCount = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntitySynonymCount,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetProjectElementStatRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.StatResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.ProjectStatisticsPromiseClient.prototype.getEntitySynonymCount = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.ProjectStatistics/GetEntitySynonymCount',
		request,
		metadata || {},
		methodDescriptor_ProjectStatistics_GetEntitySynonymCount
	);
};

module.exports = proto.ondewo.nlu;
