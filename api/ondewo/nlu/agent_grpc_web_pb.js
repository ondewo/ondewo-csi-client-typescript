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

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');

var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');

var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js');

var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');

var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');

var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.nlu = require('./agent_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.nlu.AgentsClient = function (hostname, credentials, options) {
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
proto.ondewo.nlu.AgentsPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.nlu.CreateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_CreateAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/CreateAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.CreateAgentRequest,
	proto.ondewo.nlu.Agent,
	/**
	 * @param {!proto.ondewo.nlu.CreateAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Agent.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.CreateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.createAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/CreateAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_CreateAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.CreateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.createAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/CreateAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_CreateAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.UpdateAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_UpdateAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/UpdateAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.UpdateAgentRequest,
	proto.ondewo.nlu.Agent,
	/**
	 * @param {!proto.ondewo.nlu.UpdateAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Agent.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.updateAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/UpdateAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_UpdateAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.updateAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/UpdateAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_UpdateAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAgentRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_GetAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetAgentRequest,
	proto.ondewo.nlu.Agent,
	/**
	 * @param {!proto.ondewo.nlu.GetAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Agent.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_GetAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_GetAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteAgentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/DeleteAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteAgentRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteAllAgents = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/DeleteAllAgents',
	grpc.web.MethodType.UNARY,
	google_protobuf_empty_pb.Empty,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.google.protobuf.Empty} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteAllAgents = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteAllAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteAllAgents,
		callback
	);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteAllAgents = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteAllAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteAllAgents
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodDescriptor_Agents_ListAgents = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ListAgents',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListAgentsRequest,
	proto.ondewo.nlu.ListAgentsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListAgentsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListAgentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAgents = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAgents,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAgents = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAgents
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsOfUserResponse>}
 */
const methodDescriptor_Agents_ListAgentsOfUser = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ListAgentsOfUser',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListAgentsRequest,
	proto.ondewo.nlu.ListAgentsOfUserResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListAgentsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListAgentsOfUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsOfUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAgentsOfUser = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAgentsOfUser',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAgentsOfUser,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsOfUserResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAgentsOfUser = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAgentsOfUser',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAgentsOfUser
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListAgentsRequest,
 *   !proto.ondewo.nlu.ListAgentsResponse>}
 */
const methodDescriptor_Agents_ListAllAgents = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ListAllAgents',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListAgentsRequest,
	proto.ondewo.nlu.ListAgentsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListAgentsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListAgentsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListAgentsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListAgentsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listAllAgents = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAllAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAllAgents,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListAgentsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListAgentsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listAllAgents = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListAllAgents',
		request,
		metadata || {},
		methodDescriptor_Agents_ListAllAgents
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.AddUserToProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_AddUserToProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/AddUserToProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.AddUserToProjectRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.addUserToProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/AddUserToProject',
		request,
		metadata || {},
		methodDescriptor_Agents_AddUserToProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.addUserToProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/AddUserToProject',
		request,
		metadata || {},
		methodDescriptor_Agents_AddUserToProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.RemoveUserFromProjectRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_RemoveUserFromProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/RemoveUserFromProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.RemoveUserFromProjectRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.removeUserFromProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/RemoveUserFromProject',
		request,
		metadata || {},
		methodDescriptor_Agents_RemoveUserFromProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.removeUserFromProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/RemoveUserFromProject',
		request,
		metadata || {},
		methodDescriptor_Agents_RemoveUserFromProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListUsersInProjectRequest,
 *   !proto.ondewo.nlu.ListUsersInProjectResponse>}
 */
const methodDescriptor_Agents_ListUsersInProject = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ListUsersInProject',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListUsersInProjectRequest,
	proto.ondewo.nlu.ListUsersInProjectResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListUsersInProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListUsersInProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listUsersInProject = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListUsersInProject',
		request,
		metadata || {},
		methodDescriptor_Agents_ListUsersInProject,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListUsersInProjectResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listUsersInProject = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListUsersInProject',
		request,
		metadata || {},
		methodDescriptor_Agents_ListUsersInProject
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.nlu.GetPlatformInfoResponse>}
 */
const methodDescriptor_Agents_GetPlatformInfo = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetPlatformInfo',
	grpc.web.MethodType.UNARY,
	google_protobuf_empty_pb.Empty,
	proto.ondewo.nlu.GetPlatformInfoResponse,
	/**
	 * @param {!proto.google.protobuf.Empty} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinary
);

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetPlatformInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetPlatformInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getPlatformInfo = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetPlatformInfo',
		request,
		metadata || {},
		methodDescriptor_Agents_GetPlatformInfo,
		callback
	);
};

/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetPlatformInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getPlatformInfo = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetPlatformInfo',
		request,
		metadata || {},
		methodDescriptor_Agents_GetPlatformInfo
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ListProjectPermissionsRequest,
 *   !proto.ondewo.nlu.ListProjectPermissionsResponse>}
 */
const methodDescriptor_Agents_ListProjectPermissions = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ListProjectPermissions',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ListProjectPermissionsRequest,
	proto.ondewo.nlu.ListProjectPermissionsResponse,
	/**
	 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ListProjectPermissionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ListProjectPermissionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.listProjectPermissions = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListProjectPermissions',
		request,
		metadata || {},
		methodDescriptor_Agents_ListProjectPermissions,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ListProjectPermissionsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.listProjectPermissions = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ListProjectPermissions',
		request,
		metadata || {},
		methodDescriptor_Agents_ListProjectPermissions
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.TrainAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_TrainAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/TrainAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.TrainAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.TrainAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.trainAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/TrainAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_TrainAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.TrainAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.trainAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/TrainAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_TrainAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.BuildCacheRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_BuildCache = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/BuildCache',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.BuildCacheRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.BuildCacheRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.BuildCacheRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.buildCache = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/BuildCache',
		request,
		metadata || {},
		methodDescriptor_Agents_BuildCache,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.BuildCacheRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.buildCache = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/BuildCache',
		request,
		metadata || {},
		methodDescriptor_Agents_BuildCache
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExportAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_ExportAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ExportAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ExportAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.ExportAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.exportAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ExportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.exportAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExportBenchmarkAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_ExportBenchmarkAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ExportBenchmarkAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ExportBenchmarkAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.exportBenchmarkAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportBenchmarkAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportBenchmarkAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.exportBenchmarkAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportBenchmarkAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportBenchmarkAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ImportAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_ImportAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ImportAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ImportAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.ImportAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.importAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ImportAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ImportAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ImportAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.importAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ImportAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ImportAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.OptimizeRankingMatchRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_OptimizeRankingMatch = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/OptimizeRankingMatch',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.OptimizeRankingMatchRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.optimizeRankingMatch = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/OptimizeRankingMatch',
		request,
		metadata || {},
		methodDescriptor_Agents_OptimizeRankingMatch,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.optimizeRankingMatch = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/OptimizeRankingMatch',
		request,
		metadata || {},
		methodDescriptor_Agents_OptimizeRankingMatch
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.RestoreAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_RestoreAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/RestoreAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.RestoreAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.RestoreAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.restoreAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/RestoreAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_RestoreAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.restoreAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/RestoreAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_RestoreAgent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetAgentStatisticsRequest,
 *   !proto.ondewo.nlu.GetAgentStatisticsResponse>}
 */
const methodDescriptor_Agents_GetAgentStatistics = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetAgentStatistics',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetAgentStatisticsRequest,
	proto.ondewo.nlu.GetAgentStatisticsResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetAgentStatisticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetAgentStatisticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getAgentStatistics = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetAgentStatistics',
		request,
		metadata || {},
		methodDescriptor_Agents_GetAgentStatistics,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetAgentStatisticsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getAgentStatistics = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetAgentStatistics',
		request,
		metadata || {},
		methodDescriptor_Agents_GetAgentStatistics
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetSessionsStatisticsRequest,
 *   !proto.ondewo.nlu.GetSessionsStatisticsResponse>}
 */
const methodDescriptor_Agents_GetSessionsStatistics = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetSessionsStatistics',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetSessionsStatisticsRequest,
	proto.ondewo.nlu.GetSessionsStatisticsResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.GetSessionsStatisticsResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetSessionsStatisticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetSessionsStatisticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getSessionsStatistics = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetSessionsStatistics',
		request,
		metadata || {},
		methodDescriptor_Agents_GetSessionsStatistics,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetSessionsStatisticsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getSessionsStatistics = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetSessionsStatistics',
		request,
		metadata || {},
		methodDescriptor_Agents_GetSessionsStatistics
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.SetAgentStatusRequest,
 *   !proto.ondewo.nlu.Agent>}
 */
const methodDescriptor_Agents_SetAgentStatus = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/SetAgentStatus',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.SetAgentStatusRequest,
	proto.ondewo.nlu.Agent,
	/**
	 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.Agent.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Agent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Agent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.setAgentStatus = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetAgentStatus',
		request,
		metadata || {},
		methodDescriptor_Agents_SetAgentStatus,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Agent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.setAgentStatus = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetAgentStatus',
		request,
		metadata || {},
		methodDescriptor_Agents_SetAgentStatus
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.SetResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_SetResources = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/SetResources',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.SetResourcesRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.SetResourcesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.SetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.setResources = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetResources',
		request,
		metadata || {},
		methodDescriptor_Agents_SetResources,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.SetResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.setResources = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetResources',
		request,
		metadata || {},
		methodDescriptor_Agents_SetResources
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.DeleteResourcesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Agents_DeleteResources = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/DeleteResources',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.DeleteResourcesRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.deleteResources = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteResources',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteResources,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.deleteResources = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/DeleteResources',
		request,
		metadata || {},
		methodDescriptor_Agents_DeleteResources
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ExportResourcesRequest,
 *   !proto.ondewo.nlu.ExportResourcesResponse>}
 */
const methodDescriptor_Agents_ExportResources = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ExportResources',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ExportResourcesRequest,
	proto.ondewo.nlu.ExportResourcesResponse,
	/**
	 * @param {!proto.ondewo.nlu.ExportResourcesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.ExportResourcesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.ExportResourcesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.ExportResourcesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.exportResources = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportResources',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportResources,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.ExportResourcesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.exportResources = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ExportResources',
		request,
		metadata || {},
		methodDescriptor_Agents_ExportResources
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetModelStatusesRequest,
 *   !proto.ondewo.nlu.GetModelStatusesResponse>}
 */
const methodDescriptor_Agents_GetModelStatuses = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetModelStatuses',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetModelStatusesRequest,
	proto.ondewo.nlu.GetModelStatusesResponse,
	/**
	 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.GetModelStatusesResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.GetModelStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.GetModelStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getModelStatuses = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetModelStatuses',
		request,
		metadata || {},
		methodDescriptor_Agents_GetModelStatuses,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.GetModelStatusesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getModelStatuses = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetModelStatuses',
		request,
		metadata || {},
		methodDescriptor_Agents_GetModelStatuses
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.GetPlatformMappingRequest,
 *   !proto.ondewo.nlu.PlatformMapping>}
 */
const methodDescriptor_Agents_GetPlatformMapping = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetPlatformMapping',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.GetPlatformMappingRequest,
	proto.ondewo.nlu.PlatformMapping,
	/**
	 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.PlatformMapping.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.PlatformMapping)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.PlatformMapping>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getPlatformMapping = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetPlatformMapping',
		request,
		metadata || {},
		methodDescriptor_Agents_GetPlatformMapping,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.PlatformMapping>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getPlatformMapping = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetPlatformMapping',
		request,
		metadata || {},
		methodDescriptor_Agents_GetPlatformMapping
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.PlatformMapping,
 *   !proto.ondewo.nlu.PlatformMapping>}
 */
const methodDescriptor_Agents_SetPlatformMapping = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/SetPlatformMapping',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.PlatformMapping,
	proto.ondewo.nlu.PlatformMapping,
	/**
	 * @param {!proto.ondewo.nlu.PlatformMapping} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.PlatformMapping.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.PlatformMapping} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.PlatformMapping)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.PlatformMapping>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.setPlatformMapping = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetPlatformMapping',
		request,
		metadata || {},
		methodDescriptor_Agents_SetPlatformMapping,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.PlatformMapping} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.PlatformMapping>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.setPlatformMapping = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/SetPlatformMapping',
		request,
		metadata || {},
		methodDescriptor_Agents_SetPlatformMapping
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseEntityType>}
 */
const methodDescriptor_Agents_GetFullTextSearchEntityType = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchEntityType',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseEntityType,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseEntityType.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseEntityType)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseEntityType>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchEntityType = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntityType',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntityType,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseEntityType>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchEntityType = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntityType',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntityType
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseEntity>}
 */
const methodDescriptor_Agents_GetFullTextSearchEntity = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchEntity',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseEntity,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseEntity.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseEntity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseEntity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchEntity = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntity',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntity,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseEntity>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchEntity = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntity',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntity
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseEntitySynonym>}
 */
const methodDescriptor_Agents_GetFullTextSearchEntitySynonym = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseEntitySynonym,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseEntitySynonym)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchEntitySynonym = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntitySynonym,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchEntitySynonym = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchEntitySynonym',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchEntitySynonym
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntent>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntent,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntent.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntent)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntent>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntent',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntent>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntent',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntent
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentContextIn>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentContextIn = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentContextIn,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentContextIn)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentContextIn = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentContextIn,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentContextIn = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentContextIn',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentContextIn
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentContextOut>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentContextOut = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentContextOut,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentContextOut)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentContextOut = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentContextOut,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentContextOut = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentContextOut',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentContextOut
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentUsersays>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentUsersays = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentUsersays,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentUsersays)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentUsersays = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentUsersays,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentUsersays = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentUsersays',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentUsersays
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentTags>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentTags = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentTags',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentTags,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentTags.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentTags)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentTags>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentTags = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentTags',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentTags,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentTags>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentTags = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentTags',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentTags
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentResponse>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentResponse = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentResponse',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentResponse,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentResponse = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentResponse',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentResponse,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentResponse = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentResponse',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentResponse
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.FullTextSearchRequest,
 *   !proto.ondewo.nlu.FullTextSearchResponseIntentParameters>}
 */
const methodDescriptor_Agents_GetFullTextSearchIntentParameters = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/GetFullTextSearchIntentParameters',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.FullTextSearchRequest,
	proto.ondewo.nlu.FullTextSearchResponseIntentParameters,
	/**
	 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.nlu.FullTextSearchResponseIntentParameters.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.FullTextSearchResponseIntentParameters)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.FullTextSearchResponseIntentParameters>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.getFullTextSearchIntentParameters = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentParameters',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentParameters,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.FullTextSearchResponseIntentParameters>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.getFullTextSearchIntentParameters = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/GetFullTextSearchIntentParameters',
		request,
		metadata || {},
		methodDescriptor_Agents_GetFullTextSearchIntentParameters
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.nlu.ReindexAgentRequest,
 *   !proto.ondewo.nlu.Operation>}
 */
const methodDescriptor_Agents_ReindexAgent = new grpc.web.MethodDescriptor(
	'/ondewo.nlu.Agents/ReindexAgent',
	grpc.web.MethodType.UNARY,
	proto.ondewo.nlu.ReindexAgentRequest,
	ondewo_nlu_operations_pb.Operation,
	/**
	 * @param {!proto.ondewo.nlu.ReindexAgentRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	ondewo_nlu_operations_pb.Operation.deserializeBinary
);

/**
 * @param {!proto.ondewo.nlu.ReindexAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.nlu.Operation)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.nlu.Operation>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.nlu.AgentsClient.prototype.reindexAgent = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.nlu.Agents/ReindexAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ReindexAgent,
		callback
	);
};

/**
 * @param {!proto.ondewo.nlu.ReindexAgentRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.nlu.Operation>}
 *     Promise that resolves to the response
 */
proto.ondewo.nlu.AgentsPromiseClient.prototype.reindexAgent = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.nlu.Agents/ReindexAgent',
		request,
		metadata || {},
		methodDescriptor_Agents_ReindexAgent
	);
};

module.exports = proto.ondewo.nlu;
