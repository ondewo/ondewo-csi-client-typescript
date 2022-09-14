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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

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
 *   !proto.ondewo.nlu.RemoveSessionLabelsRequest,
 *   !proto.ondewo.nlu.Session>}
 */
const methodDescriptor_Sessions_RemoveSessionLabels = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Sessions/RemoveSessionLabels',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.RemoveSessionLabelsRequest,
	proto.ondewo.nlu.Session,
	/**
	 * @param {!proto.ondewo.nlu.RemoveSessionLabelsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Session.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.RemoveSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.SessionsClient.prototype.removeSessionLabels = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Sessions/RemoveSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_RemoveSessionLabels,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.RemoveSessionLabelsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Session>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.SessionsPromiseClient.prototype.removeSessionLabels = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Sessions/RemoveSessionLabels',
		request,
		metadata || {},
		methodDescriptor_Sessions_RemoveSessionLabels
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
