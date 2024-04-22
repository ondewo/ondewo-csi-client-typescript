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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

var google_rpc_status_pb = require('../../google/rpc/status_pb.js');

var google_type_latlng_pb = require('../../google/type/latlng_pb.js');

var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./session_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.SessionsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.SessionsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.DetectIntentRequest,
 *   !proto.ondewo.nlu.DetectIntentResponse>}
 */
const methodDescriptor_Sessions_DetectIntent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/DetectIntent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DetectIntentRequest,
	proto.ondewo.nlu.DetectIntentResponse,
	/**
	 * @param {!proto.ondewo.nlu.DetectIntentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.DetectIntentResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DetectIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.DetectIntentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.DetectIntentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.detectIntent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DetectIntent',
		request,
		metadata || {},
		methodDescriptor_Sessions_DetectIntent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DetectIntentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.DetectIntentResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.detectIntent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DetectIntent',
		request,
		metadata || {},
		methodDescriptor_Sessions_DetectIntent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListSessionsRequest,
 *   !proto.ondewo.nlu.ListSessionsResponse>}
 */
const methodDescriptor_Sessions_ListSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListSessionsRequest,
	proto.ondewo.nlu.ListSessionsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListSessionsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListSessionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListSessionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListSessionsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetSessionRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_GetSession = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/GetSession',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetSessionRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.GetSessionRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.getSession = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetSession,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.getSession = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetSession
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateSessionRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_CreateSession = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/CreateSession',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateSessionRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.CreateSessionRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.createSession = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/CreateSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_CreateSession,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.createSession = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/CreateSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_CreateSession
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.TrackSessionStepRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_TrackSessionStep = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/TrackSessionStep',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.TrackSessionStepRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.TrackSessionStepRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.TrackSessionStepRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.trackSessionStep = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/TrackSessionStep',
		request,
		metadata || {},
		methodDescriptor_Sessions_TrackSessionStep,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.TrackSessionStepRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.trackSessionStep = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/TrackSessionStep',
		request,
		metadata || {},
		methodDescriptor_Sessions_TrackSessionStep
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteSessionRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Sessions_DeleteSession = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/DeleteSession',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteSessionRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteSessionRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.deleteSession = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DeleteSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_DeleteSession,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteSessionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.deleteSession = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DeleteSession',
		request,
		metadata || {},
		methodDescriptor_Sessions_DeleteSession
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListSessionLabelsRequest,
 *   !proto.ondewo.nlu.ListSessionLabelsResponse>}
 */
const methodDescriptor_Sessions_ListSessionLabels = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListSessionLabels',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListSessionLabelsRequest,
	proto.ondewo.nlu.ListSessionLabelsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListSessionLabelsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListSessionLabelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListSessionLabelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listSessionLabels = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionLabels,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListSessionLabelsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listSessionLabels = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionLabels
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListSessionLabelsResponse>}
 */
const methodDescriptor_Sessions_ListSessionLabelsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest,
	proto.ondewo.nlu.ListSessionLabelsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListSessionLabelsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListSessionLabelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListSessionLabelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listSessionLabelsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionLabelsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListSessionLabelsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listSessionLabelsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionLabelsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionLabelsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListLanguageCodesResponse>}
 */
const methodDescriptor_Sessions_ListLanguageCodesOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest,
	proto.ondewo.nlu.ListLanguageCodesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListLanguageCodesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListLanguageCodesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListLanguageCodesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listLanguageCodesOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListLanguageCodesOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListLanguageCodesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listLanguageCodesOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListLanguageCodesOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListLanguageCodesOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListMatchedIntentsResponse>}
 */
const methodDescriptor_Sessions_ListMatchedIntentsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest,
	proto.ondewo.nlu.ListMatchedIntentsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListMatchedIntentsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListMatchedIntentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListMatchedIntentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listMatchedIntentsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListMatchedIntentsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListMatchedIntentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listMatchedIntentsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListMatchedIntentsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListMatchedIntentsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListMatchedEntityTypesResponse>}
 */
const methodDescriptor_Sessions_ListMatchedEntityTypesOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest,
	proto.ondewo.nlu.ListMatchedEntityTypesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListMatchedEntityTypesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListMatchedEntityTypesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListMatchedEntityTypesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listMatchedEntityTypesOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListMatchedEntityTypesOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListMatchedEntityTypesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listMatchedEntityTypesOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListMatchedEntityTypesOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListMatchedEntityTypesOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListUserIdsResponse>}
 */
const methodDescriptor_Sessions_ListUserIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListUserIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListUserIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListUserIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListUserIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listUserIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListUserIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListUserIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listUserIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListUserIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListUserIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListIdentifiedUserIdsResponse>}
 */
const methodDescriptor_Sessions_ListIdentifiedUserIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListIdentifiedUserIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListIdentifiedUserIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListIdentifiedUserIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListIdentifiedUserIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listIdentifiedUserIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListIdentifiedUserIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListIdentifiedUserIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listIdentifiedUserIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListIdentifiedUserIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListIdentifiedUserIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListTagsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListTagsResponse>}
 */
const methodDescriptor_Sessions_ListTagsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListTagsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListTagsOfAllSessionsRequest,
	proto.ondewo.nlu.ListTagsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListTagsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListTagsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListTagsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listTagsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListTagsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListTagsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListTagsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listTagsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListTagsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListTagsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListInputContextsResponse>}
 */
const methodDescriptor_Sessions_ListInputContextsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest,
	proto.ondewo.nlu.ListInputContextsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListInputContextsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListInputContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListInputContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listInputContextsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListInputContextsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListInputContextsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listInputContextsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListInputContextsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListInputContextsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListOutputContextsResponse>}
 */
const methodDescriptor_Sessions_ListOutputContextsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest,
	proto.ondewo.nlu.ListOutputContextsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListOutputContextsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListOutputContextsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListOutputContextsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listOutputContextsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListOutputContextsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListOutputContextsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listOutputContextsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListOutputContextsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListOutputContextsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListPlatformsResponse>}
 */
const methodDescriptor_Sessions_ListPlatformsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest,
	proto.ondewo.nlu.ListPlatformsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListPlatformsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListPlatformsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListPlatformsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listPlatformsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListPlatformsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListPlatformsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listPlatformsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListPlatformsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListPlatformsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListAccountIdsResponse>}
 */
const methodDescriptor_Sessions_ListAccountIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListAccountIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListAccountIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListAccountIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAccountIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listAccountIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListAccountIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAccountIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listAccountIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListAccountIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListAccountIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListPropertyIdsResponse>}
 */
const methodDescriptor_Sessions_ListPropertyIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListPropertyIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListPropertyIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListPropertyIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListPropertyIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listPropertyIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListPropertyIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListPropertyIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listPropertyIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListPropertyIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListPropertyIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListDatastreamIdsResponse>}
 */
const methodDescriptor_Sessions_ListDatastreamIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListDatastreamIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListDatastreamIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListDatastreamIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListDatastreamIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listDatastreamIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListDatastreamIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListDatastreamIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listDatastreamIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListDatastreamIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListDatastreamIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest,
 *   !proto.ondewo.nlu.ListOriginIdsResponse>}
 */
const methodDescriptor_Sessions_ListOriginIdsOfAllSessions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest,
	proto.ondewo.nlu.ListOriginIdsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListOriginIdsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListOriginIdsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListOriginIdsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listOriginIdsOfAllSessions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListOriginIdsOfAllSessions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListOriginIdsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listOriginIdsOfAllSessions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListOriginIdsOfAllSessions',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListOriginIdsOfAllSessions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.AddSessionLabelsRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_AddSessionLabels = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/AddSessionLabels',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.AddSessionLabelsRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.addSessionLabels = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/AddSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_AddSessionLabels,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.addSessionLabels = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/AddSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_AddSessionLabels
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteSessionLabelsRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_DeleteSessionLabels = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/DeleteSessionLabels',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteSessionLabelsRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.deleteSessionLabels = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DeleteSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_DeleteSessionLabels,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.deleteSessionLabels = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/DeleteSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_DeleteSessionLabels
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListSessionReviewsRequest,
 *   !proto.ondewo.nlu.ListSessionReviewsResponse>}
 */
const methodDescriptor_Sessions_ListSessionReviews = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/ListSessionReviews',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListSessionReviewsRequest,
	proto.ondewo.nlu.ListSessionReviewsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListSessionReviewsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListSessionReviewsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListSessionReviewsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.listSessionReviews = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionReviews',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionReviews,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListSessionReviewsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.listSessionReviews = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/ListSessionReviews',
		request,
		metadata || {},
		methodDescriptor_Sessions_ListSessionReviews
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetSessionReviewRequest,
 *   !proto.ondewo.nlu.SessionReview>}
 */
const methodDescriptor_Sessions_GetSessionReview = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/GetSessionReview',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetSessionReviewRequest,
	proto.ondewo.nlu.SessionReview,
	/**
	 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.SessionReview.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.SessionReview)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.SessionReview>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.getSessionReview = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetSessionReview,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.SessionReview>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.getSessionReview = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetSessionReview
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetLatestSessionReviewRequest,
 *   !proto.ondewo.nlu.SessionReview>}
 */
const methodDescriptor_Sessions_GetLatestSessionReview = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/GetLatestSessionReview',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetLatestSessionReviewRequest,
	proto.ondewo.nlu.SessionReview,
	/**
	 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.SessionReview.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.SessionReview)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.SessionReview>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.getLatestSessionReview = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetLatestSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetLatestSessionReview,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.SessionReview>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.getLatestSessionReview = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/GetLatestSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_GetLatestSessionReview
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.CreateSessionReviewRequest,
 *   !proto.ondewo.nlu.SessionReview>}
 */
const methodDescriptor_Sessions_CreateSessionReview = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/CreateSessionReview',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateSessionReviewRequest,
	proto.ondewo.nlu.SessionReview,
	/**
	 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.SessionReview.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.SessionReview)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.SessionReview>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.createSessionReview = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/CreateSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_CreateSessionReview,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.SessionReview>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.createSessionReview = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/CreateSessionReview',
		request,
		metadata || {},
		methodDescriptor_Sessions_CreateSessionReview
	);
};

module.exports = proto.ondewo.nlu;
