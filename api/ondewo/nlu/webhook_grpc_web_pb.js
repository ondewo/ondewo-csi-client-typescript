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

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./webhook_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.WebhookClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.WebhookPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.WebhookRequest,
 *   !proto.ondewo.nlu.WebhookResponse>}
 */
const methodDescriptor_Webhook_ResponseRefinement = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Webhook/ResponseRefinement',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.WebhookRequest,
	proto.ondewo.nlu.WebhookResponse,
	/**
	 * @param {!proto.ondewo.nlu.WebhookRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.WebhookResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.WebhookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.WebhookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.WebhookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.WebhookClient.prototype.responseRefinement = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Webhook/ResponseRefinement',
		request,
		metadata || {},
		methodDescriptor_Webhook_ResponseRefinement,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.WebhookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.WebhookResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.WebhookPromiseClient.prototype.responseRefinement = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Webhook/ResponseRefinement',
		request,
		metadata || {},
		methodDescriptor_Webhook_ResponseRefinement
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.WebhookRequest,
 *   !proto.ondewo.nlu.WebhookResponse>}
 */
const methodDescriptor_Webhook_SlotFilling = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Webhook/SlotFilling',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.WebhookRequest,
	proto.ondewo.nlu.WebhookResponse,
	/**
	 * @param {!proto.ondewo.nlu.WebhookRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.WebhookResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.WebhookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.WebhookResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.WebhookResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.WebhookClient.prototype.slotFilling = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Webhook/SlotFilling',
		request,
		metadata || {},
		methodDescriptor_Webhook_SlotFilling,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.WebhookRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.WebhookResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.WebhookPromiseClient.prototype.slotFilling = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Webhook/SlotFilling',
		request,
		metadata || {},
		methodDescriptor_Webhook_SlotFilling
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.PingRequest,
 *   !proto.ondewo.nlu.PingResponse>}
 */
const methodDescriptor_Webhook_Ping = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Webhook/Ping',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.PingRequest,
	proto.ondewo.nlu.PingResponse,
	/**
	 * @param {!proto.ondewo.nlu.PingRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.PingResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.PingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.PingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.WebhookClient.prototype.ping = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Webhook/Ping',
		request,
		metadata || {},
		methodDescriptor_Webhook_Ping,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.PingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.PingResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.WebhookPromiseClient.prototype.ping = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Webhook/Ping',
		request,
		metadata || {},
		methodDescriptor_Webhook_Ping
	);
};

module.exports = proto.ondewo.nlu;
