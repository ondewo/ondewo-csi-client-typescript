/**
 * @fileoverview gRPC-Web generated client stub for ondewo.csi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!

/* eslint-disable */
// @ts-nocheck

const grpc = {};
grpc.web = require('grpc-web');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var google_rpc_status_pb = require('../../google/rpc/status_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

var ondewo_t2s_text$to$speech_pb = require('../../ondewo/t2s/text-to-speech_pb.js');

var ondewo_s2t_speech$to$text_pb = require('../../ondewo/s2t/speech-to-text_pb.js');

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.csi = require('./conversation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.csi.ConversationsClient = function (hostname, credentials, options) {
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
proto.ondewo.csi.ConversationsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.csi.S2sPipeline,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Conversations_CreateS2sPipeline = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/CreateS2sPipeline',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.S2sPipeline,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.csi.S2sPipeline} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.S2sPipeline} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.createS2sPipeline = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/CreateS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_CreateS2sPipeline,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.S2sPipeline} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.createS2sPipeline = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/CreateS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_CreateS2sPipeline
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.S2sPipelineId,
 *   !proto.ondewo.csi.S2sPipeline>}
 */
const methodDescriptor_Conversations_GetS2sPipeline = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/GetS2sPipeline',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.S2sPipelineId,
	proto.ondewo.csi.S2sPipeline,
	/**
	 * @param {!proto.ondewo.csi.S2sPipelineId} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.csi.S2sPipeline.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.S2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.csi.S2sPipeline)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.S2sPipeline>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.getS2sPipeline = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/GetS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_GetS2sPipeline,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.S2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.csi.S2sPipeline>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.getS2sPipeline = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/GetS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_GetS2sPipeline
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.S2sPipeline,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Conversations_UpdateS2sPipeline = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/UpdateS2sPipeline',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.S2sPipeline,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.csi.S2sPipeline} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.S2sPipeline} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.updateS2sPipeline = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/UpdateS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_UpdateS2sPipeline,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.S2sPipeline} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.updateS2sPipeline = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/UpdateS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_UpdateS2sPipeline
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.S2sPipelineId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Conversations_DeleteS2sPipeline = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/DeleteS2sPipeline',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.S2sPipelineId,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.csi.S2sPipelineId} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.S2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.deleteS2sPipeline = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/DeleteS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_DeleteS2sPipeline,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.S2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.deleteS2sPipeline = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/DeleteS2sPipeline',
		request,
		metadata || {},
		methodDescriptor_Conversations_DeleteS2sPipeline
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.ListS2sPipelinesRequest,
 *   !proto.ondewo.csi.ListS2sPipelinesResponse>}
 */
const methodDescriptor_Conversations_ListS2sPipelines = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/ListS2sPipelines',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.ListS2sPipelinesRequest,
	proto.ondewo.csi.ListS2sPipelinesResponse,
	/**
	 * @param {!proto.ondewo.csi.ListS2sPipelinesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.csi.ListS2sPipelinesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.ListS2sPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.csi.ListS2sPipelinesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.ListS2sPipelinesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.listS2sPipelines = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/ListS2sPipelines',
		request,
		metadata || {},
		methodDescriptor_Conversations_ListS2sPipelines,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.ListS2sPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.csi.ListS2sPipelinesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.listS2sPipelines = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/ListS2sPipelines',
		request,
		metadata || {},
		methodDescriptor_Conversations_ListS2sPipelines
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.csi.CheckUpstreamHealthResponse>}
 */
const methodDescriptor_Conversations_CheckUpstreamHealth = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/CheckUpstreamHealth',
	grpc.web.MethodType.UNARY,
	google_protobuf_empty_pb.Empty,
	proto.ondewo.csi.CheckUpstreamHealthResponse,
	/**
	 * @param {!proto.google.protobuf.Empty} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.csi.CheckUpstreamHealthResponse.deserializeBinary
);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.csi.CheckUpstreamHealthResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.CheckUpstreamHealthResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.checkUpstreamHealth = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/CheckUpstreamHealth',
		request,
		metadata || {},
		methodDescriptor_Conversations_CheckUpstreamHealth,
		callback
	);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.csi.CheckUpstreamHealthResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.checkUpstreamHealth = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/CheckUpstreamHealth',
		request,
		metadata || {},
		methodDescriptor_Conversations_CheckUpstreamHealth
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.ControlStreamRequest,
 *   !proto.ondewo.csi.ControlStreamResponse>}
 */
const methodDescriptor_Conversations_GetControlStream = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/GetControlStream',
	grpc.web.MethodType.SERVER_STREAMING,
	proto.ondewo.csi.ControlStreamRequest,
	proto.ondewo.csi.ControlStreamResponse,
	/**
	 * @param {!proto.ondewo.csi.ControlStreamRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.csi.ControlStreamResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.ControlStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.ControlStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.getControlStream = function (request, metadata) {
	return this.client_.serverStreaming(
		this.hostname_ + '/ondewo.csi.Conversations/GetControlStream',
		request,
		metadata || {},
		methodDescriptor_Conversations_GetControlStream
	);
};

/**
 * @param {!proto.ondewo.csi.ControlStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.ControlStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.getControlStream = function (request, metadata) {
	return this.client_.serverStreaming(
		this.hostname_ + '/ondewo.csi.Conversations/GetControlStream',
		request,
		metadata || {},
		methodDescriptor_Conversations_GetControlStream
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.csi.SetControlStatusRequest,
 *   !proto.ondewo.csi.SetControlStatusResponse>}
 */
const methodDescriptor_Conversations_SetControlStatus = new grpc.web.MethodDescriptor(
	'/ondewo.csi.Conversations/SetControlStatus',
	grpc.web.MethodType.UNARY,
	proto.ondewo.csi.SetControlStatusRequest,
	proto.ondewo.csi.SetControlStatusResponse,
	/**
	 * @param {!proto.ondewo.csi.SetControlStatusRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.csi.SetControlStatusResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.csi.SetControlStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.csi.SetControlStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.csi.SetControlStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.csi.ConversationsClient.prototype.setControlStatus = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.csi.Conversations/SetControlStatus',
		request,
		metadata || {},
		methodDescriptor_Conversations_SetControlStatus,
		callback
	);
};

/**
 * @param {!proto.ondewo.csi.SetControlStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.csi.SetControlStatusResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.csi.ConversationsPromiseClient.prototype.setControlStatus = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.csi.Conversations/SetControlStatus',
		request,
		metadata || {},
		methodDescriptor_Conversations_SetControlStatus
	);
};

module.exports = proto.ondewo.csi;
