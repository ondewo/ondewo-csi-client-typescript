// source: ondewo/nlu/agent.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
goog.object.extend(proto, ondewo_nlu_common_pb);
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
goog.object.extend(proto, ondewo_nlu_intent_pb);
var ondewo_nlu_user_pb = require('../../ondewo/nlu/user_pb.js');
goog.object.extend(proto, ondewo_nlu_user_pb);
var ondewo_nlu_project_role_pb = require('../../ondewo/nlu/project_role_pb.js');
goog.object.extend(proto, ondewo_nlu_project_role_pb);
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
goog.object.extend(proto, ondewo_nlu_operations_pb);
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
goog.object.extend(proto, ondewo_nlu_session_pb);
goog.exportSymbol('proto.ondewo.nlu.AddUserToProjectRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.Agent', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentOfUserWithOwner', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentSorting', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentSorting.AgentSortingField', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentStatus', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentView', null, global);
goog.exportSymbol('proto.ondewo.nlu.AgentWithOwner', null, global);
goog.exportSymbol('proto.ondewo.nlu.BuildCacheRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.CustomPlatformInfo', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteResourcesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportAgentResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportAgentResponse.AgentCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportBenchmarkAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportBenchmarkAgentResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportResourcesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ExportResourcesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchRequest.QueryType', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntity', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntitySynonym', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntityType', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntent', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentContextIn', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentContextOut', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentParameters', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentTags', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentUsersays', null, global);
goog.exportSymbol('proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAgentStatisticsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAgentStatisticsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetModelStatusesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetModelStatusesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetPlatformInfoResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetPlatformMappingRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetSessionsStatisticsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetSessionsStatisticsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ImportAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ImportAgentRequest.AgentCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.InitiationProtocol', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAgentsOfUserResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAgentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAgentsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListProjectPermissionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListProjectPermissionsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListUsersInProjectRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListUsersInProjectResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ModelStatus', null, global);
goog.exportSymbol('proto.ondewo.nlu.ModelStatus.StatusName', null, global);
goog.exportSymbol('proto.ondewo.nlu.OptimizeRankingMatchRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.OptimizeRankingMatchResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.PlatformMapping', null, global);
goog.exportSymbol('proto.ondewo.nlu.RankingMatchOptimizationConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.ReindexAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RemoveUserFromProjectRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ReportFormat', null, global);
goog.exportSymbol('proto.ondewo.nlu.ReportType', null, global);
goog.exportSymbol('proto.ondewo.nlu.RestoreAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RestoreAgentRequest.AgentCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionsReportType', null, global);
goog.exportSymbol('proto.ondewo.nlu.SetAgentStatusRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.SetResourcesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.TrainAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.UpdateAgentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.UserInProject', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.Agent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Agent.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Agent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Agent.displayName = 'proto.ondewo.nlu.Agent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.AgentWithOwner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.AgentWithOwner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AgentWithOwner.displayName = 'proto.ondewo.nlu.AgentWithOwner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.AgentOfUserWithOwner = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.AgentOfUserWithOwner, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AgentOfUserWithOwner.displayName = 'proto.ondewo.nlu.AgentOfUserWithOwner';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.CreateAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CreateAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateAgentRequest.displayName = 'proto.ondewo.nlu.CreateAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.UpdateAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UpdateAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UpdateAgentRequest.displayName = 'proto.ondewo.nlu.UpdateAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.DeleteAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteAgentRequest.displayName = 'proto.ondewo.nlu.DeleteAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAgentRequest.displayName = 'proto.ondewo.nlu.GetAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListAgentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListAgentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAgentsRequest.displayName = 'proto.ondewo.nlu.ListAgentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListAgentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListAgentsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListAgentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAgentsResponse.displayName = 'proto.ondewo.nlu.ListAgentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListAgentsOfUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListAgentsOfUserResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListAgentsOfUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAgentsOfUserResponse.displayName = 'proto.ondewo.nlu.ListAgentsOfUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.TrainAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.TrainAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.TrainAgentRequest.displayName = 'proto.ondewo.nlu.TrainAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.BuildCacheRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.BuildCacheRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.BuildCacheRequest.displayName = 'proto.ondewo.nlu.BuildCacheRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ExportAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportAgentRequest.displayName = 'proto.ondewo.nlu.ExportAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportAgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.ExportAgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportAgentResponse.displayName = 'proto.ondewo.nlu.ExportAgentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ExportBenchmarkAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportBenchmarkAgentRequest.displayName = 'proto.ondewo.nlu.ExportBenchmarkAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ExportBenchmarkAgentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportBenchmarkAgentResponse.displayName = 'proto.ondewo.nlu.ExportBenchmarkAgentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.OptimizeRankingMatchRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.OptimizeRankingMatchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.OptimizeRankingMatchRequest.displayName = 'proto.ondewo.nlu.OptimizeRankingMatchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RankingMatchOptimizationConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RankingMatchOptimizationConfig.displayName = 'proto.ondewo.nlu.RankingMatchOptimizationConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.OptimizeRankingMatchResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.OptimizeRankingMatchResponse.displayName = 'proto.ondewo.nlu.OptimizeRankingMatchResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ImportAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.ImportAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ImportAgentRequest.displayName = 'proto.ondewo.nlu.ImportAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.RestoreAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.RestoreAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RestoreAgentRequest.displayName = 'proto.ondewo.nlu.RestoreAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetAgentStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetAgentStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAgentStatisticsRequest.displayName = 'proto.ondewo.nlu.GetAgentStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetAgentStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetAgentStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAgentStatisticsResponse.displayName = 'proto.ondewo.nlu.GetAgentStatisticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.GetSessionsStatisticsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.GetSessionsStatisticsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetSessionsStatisticsRequest.displayName = 'proto.ondewo.nlu.GetSessionsStatisticsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetSessionsStatisticsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetSessionsStatisticsResponse.displayName = 'proto.ondewo.nlu.GetSessionsStatisticsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.AddUserToProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.AddUserToProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AddUserToProjectRequest.displayName = 'proto.ondewo.nlu.AddUserToProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RemoveUserFromProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RemoveUserFromProjectRequest.displayName = 'proto.ondewo.nlu.RemoveUserFromProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListUsersInProjectRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListUsersInProjectRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListUsersInProjectRequest.displayName = 'proto.ondewo.nlu.ListUsersInProjectRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.UserInProject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UserInProject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UserInProject.displayName = 'proto.ondewo.nlu.UserInProject';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListUsersInProjectResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListUsersInProjectResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListUsersInProjectResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListUsersInProjectResponse.displayName = 'proto.ondewo.nlu.ListUsersInProjectResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetPlatformInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetPlatformInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetPlatformInfoResponse.displayName = 'proto.ondewo.nlu.GetPlatformInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListProjectPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListProjectPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListProjectPermissionsRequest.displayName = 'proto.ondewo.nlu.ListProjectPermissionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ListProjectPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListProjectPermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListProjectPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListProjectPermissionsResponse.displayName = 'proto.ondewo.nlu.ListProjectPermissionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.SetAgentStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.SetAgentStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SetAgentStatusRequest.displayName = 'proto.ondewo.nlu.SetAgentStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.AgentSorting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.AgentSorting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AgentSorting.displayName = 'proto.ondewo.nlu.AgentSorting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.SetResourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.SetResourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SetResourcesRequest.displayName = 'proto.ondewo.nlu.SetResourcesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.DeleteResourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteResourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteResourcesRequest.displayName = 'proto.ondewo.nlu.DeleteResourcesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportResourcesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ExportResourcesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportResourcesRequest.displayName = 'proto.ondewo.nlu.ExportResourcesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ExportResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ExportResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ExportResourcesResponse.displayName = 'proto.ondewo.nlu.ExportResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetModelStatusesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetModelStatusesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetModelStatusesRequest.displayName = 'proto.ondewo.nlu.GetModelStatusesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ModelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ModelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ModelStatus.displayName = 'proto.ondewo.nlu.ModelStatus';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetModelStatusesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.GetModelStatusesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.GetModelStatusesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetModelStatusesResponse.displayName = 'proto.ondewo.nlu.GetModelStatusesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.CustomPlatformInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CustomPlatformInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CustomPlatformInfo.displayName = 'proto.ondewo.nlu.CustomPlatformInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.GetPlatformMappingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetPlatformMappingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetPlatformMappingRequest.displayName = 'proto.ondewo.nlu.GetPlatformMappingRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.PlatformMapping = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.PlatformMapping.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.PlatformMapping, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.PlatformMapping.displayName = 'proto.ondewo.nlu.PlatformMapping';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchRequest.displayName = 'proto.ondewo.nlu.FullTextSearchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseEntityType.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntityType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntityType.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntityType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseEntity.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntity.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntitySynonym, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntitySynonym';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntent.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntent.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentContextIn, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentContextIn';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentContextOut, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentContextOut';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentUsersays, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentUsersays';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentTags.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentTags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentTags.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentTags';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentResponse.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentParameters.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentParameters.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentParameters';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.displayName = 'proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ondewo.nlu.ReindexAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ReindexAgentRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ReindexAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ReindexAgentRequest.displayName = 'proto.ondewo.nlu.ReindexAgentRequest';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Agent.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.Agent.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Agent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Agent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Agent.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultLanguageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    supportedLanguageCodesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    timeZone: jspb.Message.getFieldWithDefault(msg, 5, ""),
    nluPlatform: jspb.Message.getFieldWithDefault(msg, 6, ""),
    configs: (f = msg.getConfigs()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    ownerId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    description: jspb.Message.getFieldWithDefault(msg, 10, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 13, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 14, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.Agent}
 */
proto.ondewo.nlu.Agent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Agent;
  return proto.ondewo.nlu.Agent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Agent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Agent}
 */
proto.ondewo.nlu.Agent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLanguageCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSupportedLanguageCodes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setNluPlatform(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfigs(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerId(value);
      break;
    case 9:
      var value = /** @type {!proto.ondewo.nlu.AgentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.Agent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Agent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Agent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Agent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSupportedLanguageCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getNluPlatform();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConfigs();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOwnerId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string default_language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getDefaultLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setDefaultLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string supported_language_codes = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.Agent.prototype.getSupportedLanguageCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setSupportedLanguageCodesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.addSupportedLanguageCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.clearSupportedLanguageCodesList = function() {
  return this.setSupportedLanguageCodesList([]);
};


/**
 * optional string time_zone = 5;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string nlu_platform = 6;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getNluPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setNluPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Struct configs = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.Agent.prototype.getConfigs = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.Agent} returns this
*/
proto.ondewo.nlu.Agent.prototype.setConfigs = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.clearConfigs = function() {
  return this.setConfigs(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Agent.prototype.hasConfigs = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string owner_id = 8;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getOwnerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setOwnerId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional AgentStatus status = 9;
 * @return {!proto.ondewo.nlu.AgentStatus}
 */
proto.ondewo.nlu.Agent.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentStatus} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string description = 10;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.Agent.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.Agent} returns this
*/
proto.ondewo.nlu.Agent.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Agent.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.Agent.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.Agent} returns this
*/
proto.ondewo.nlu.Agent.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Agent.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string created_by = 13;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string modified_by = 14;
 * @return {string}
 */
proto.ondewo.nlu.Agent.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Agent} returns this
 */
proto.ondewo.nlu.Agent.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AgentWithOwner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AgentWithOwner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentWithOwner.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: (f = msg.getAgent()) && proto.ondewo.nlu.Agent.toObject(includeInstance, f),
    owner: (f = msg.getOwner()) && ondewo_nlu_user_pb.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.AgentWithOwner}
 */
proto.ondewo.nlu.AgentWithOwner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AgentWithOwner;
  return proto.ondewo.nlu.AgentWithOwner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AgentWithOwner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AgentWithOwner}
 */
proto.ondewo.nlu.AgentWithOwner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Agent;
      reader.readMessage(value,proto.ondewo.nlu.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 2:
      var value = new ondewo_nlu_user_pb.User;
      reader.readMessage(value,ondewo_nlu_user_pb.User.deserializeBinaryFromReader);
      msg.setOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AgentWithOwner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AgentWithOwner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentWithOwner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Agent.serializeBinaryToWriter
    );
  }
  f = message.getOwner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_user_pb.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional Agent agent = 1;
 * @return {?proto.ondewo.nlu.Agent}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.getAgent = function() {
  return /** @type{?proto.ondewo.nlu.Agent} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Agent, 1));
};


/**
 * @param {?proto.ondewo.nlu.Agent|undefined} value
 * @return {!proto.ondewo.nlu.AgentWithOwner} returns this
*/
proto.ondewo.nlu.AgentWithOwner.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AgentWithOwner} returns this
 */
proto.ondewo.nlu.AgentWithOwner.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User owner = 2;
 * @return {?proto.ondewo.nlu.User}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.getOwner = function() {
  return /** @type{?proto.ondewo.nlu.User} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_user_pb.User, 2));
};


/**
 * @param {?proto.ondewo.nlu.User|undefined} value
 * @return {!proto.ondewo.nlu.AgentWithOwner} returns this
*/
proto.ondewo.nlu.AgentWithOwner.prototype.setOwner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AgentWithOwner} returns this
 */
proto.ondewo.nlu.AgentWithOwner.prototype.clearOwner = function() {
  return this.setOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AgentWithOwner.prototype.hasOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AgentOfUserWithOwner.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AgentOfUserWithOwner} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentOfUserWithOwner.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentWithOwner: (f = msg.getAgentWithOwner()) && proto.ondewo.nlu.AgentWithOwner.toObject(includeInstance, f),
    projectRole: (f = msg.getProjectRole()) && ondewo_nlu_project_role_pb.ProjectRole.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AgentOfUserWithOwner;
  return proto.ondewo.nlu.AgentOfUserWithOwner.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AgentOfUserWithOwner} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AgentWithOwner;
      reader.readMessage(value,proto.ondewo.nlu.AgentWithOwner.deserializeBinaryFromReader);
      msg.setAgentWithOwner(value);
      break;
    case 2:
      var value = new ondewo_nlu_project_role_pb.ProjectRole;
      reader.readMessage(value,ondewo_nlu_project_role_pb.ProjectRole.deserializeBinaryFromReader);
      msg.setProjectRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AgentOfUserWithOwner.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AgentOfUserWithOwner} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentOfUserWithOwner.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentWithOwner();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.AgentWithOwner.serializeBinaryToWriter
    );
  }
  f = message.getProjectRole();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_project_role_pb.ProjectRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional AgentWithOwner agent_with_owner = 1;
 * @return {?proto.ondewo.nlu.AgentWithOwner}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.getAgentWithOwner = function() {
  return /** @type{?proto.ondewo.nlu.AgentWithOwner} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.AgentWithOwner, 1));
};


/**
 * @param {?proto.ondewo.nlu.AgentWithOwner|undefined} value
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner} returns this
*/
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.setAgentWithOwner = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner} returns this
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.clearAgentWithOwner = function() {
  return this.setAgentWithOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.hasAgentWithOwner = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProjectRole project_role = 2;
 * @return {?proto.ondewo.nlu.ProjectRole}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.getProjectRole = function() {
  return /** @type{?proto.ondewo.nlu.ProjectRole} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_project_role_pb.ProjectRole, 2));
};


/**
 * @param {?proto.ondewo.nlu.ProjectRole|undefined} value
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner} returns this
*/
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.setProjectRole = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner} returns this
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.clearProjectRole = function() {
  return this.setProjectRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AgentOfUserWithOwner.prototype.hasProjectRole = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: (f = msg.getAgent()) && proto.ondewo.nlu.Agent.toObject(includeInstance, f),
    agentView: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.CreateAgentRequest}
 */
proto.ondewo.nlu.CreateAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateAgentRequest;
  return proto.ondewo.nlu.CreateAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateAgentRequest}
 */
proto.ondewo.nlu.CreateAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Agent;
      reader.readMessage(value,proto.ondewo.nlu.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.AgentView} */ (reader.readEnum());
      msg.setAgentView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Agent.serializeBinaryToWriter
    );
  }
  f = message.getAgentView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Agent agent = 1;
 * @return {?proto.ondewo.nlu.Agent}
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.getAgent = function() {
  return /** @type{?proto.ondewo.nlu.Agent} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Agent, 1));
};


/**
 * @param {?proto.ondewo.nlu.Agent|undefined} value
 * @return {!proto.ondewo.nlu.CreateAgentRequest} returns this
*/
proto.ondewo.nlu.CreateAgentRequest.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateAgentRequest} returns this
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AgentView agent_view = 2;
 * @return {!proto.ondewo.nlu.AgentView}
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.getAgentView = function() {
  return /** @type {!proto.ondewo.nlu.AgentView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentView} value
 * @return {!proto.ondewo.nlu.CreateAgentRequest} returns this
 */
proto.ondewo.nlu.CreateAgentRequest.prototype.setAgentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UpdateAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: (f = msg.getAgent()) && proto.ondewo.nlu.Agent.toObject(includeInstance, f),
    agentView: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.UpdateAgentRequest}
 */
proto.ondewo.nlu.UpdateAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UpdateAgentRequest;
  return proto.ondewo.nlu.UpdateAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UpdateAgentRequest}
 */
proto.ondewo.nlu.UpdateAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Agent;
      reader.readMessage(value,proto.ondewo.nlu.Agent.deserializeBinaryFromReader);
      msg.setAgent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.AgentView} */ (reader.readEnum());
      msg.setAgentView(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UpdateAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UpdateAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.Agent.serializeBinaryToWriter
    );
  }
  f = message.getAgentView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional Agent agent = 1;
 * @return {?proto.ondewo.nlu.Agent}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.getAgent = function() {
  return /** @type{?proto.ondewo.nlu.Agent} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.Agent, 1));
};


/**
 * @param {?proto.ondewo.nlu.Agent|undefined} value
 * @return {!proto.ondewo.nlu.UpdateAgentRequest} returns this
*/
proto.ondewo.nlu.UpdateAgentRequest.prototype.setAgent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateAgentRequest} returns this
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.clearAgent = function() {
  return this.setAgent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.hasAgent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AgentView agent_view = 2;
 * @return {!proto.ondewo.nlu.AgentView}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.getAgentView = function() {
  return /** @type {!proto.ondewo.nlu.AgentView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentView} value
 * @return {!proto.ondewo.nlu.UpdateAgentRequest} returns this
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.setAgentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.UpdateAgentRequest} returns this
*/
proto.ondewo.nlu.UpdateAgentRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateAgentRequest} returns this
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateAgentRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.DeleteAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.DeleteAgentRequest}
 */
proto.ondewo.nlu.DeleteAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteAgentRequest;
  return proto.ondewo.nlu.DeleteAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteAgentRequest}
 */
proto.ondewo.nlu.DeleteAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.DeleteAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteAgentRequest} returns this
 */
proto.ondewo.nlu.DeleteAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentView: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetAgentRequest}
 */
proto.ondewo.nlu.GetAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAgentRequest;
  return proto.ondewo.nlu.GetAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAgentRequest}
 */
proto.ondewo.nlu.GetAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.AgentView} */ (reader.readEnum());
      msg.setAgentView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAgentRequest} returns this
 */
proto.ondewo.nlu.GetAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AgentView agent_view = 2;
 * @return {!proto.ondewo.nlu.AgentView}
 */
proto.ondewo.nlu.GetAgentRequest.prototype.getAgentView = function() {
  return /** @type {!proto.ondewo.nlu.AgentView} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentView} value
 * @return {!proto.ondewo.nlu.GetAgentRequest} returns this
 */
proto.ondewo.nlu.GetAgentRequest.prototype.setAgentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAgentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAgentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentView: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sortByField: (f = msg.getSortByField()) && proto.ondewo.nlu.AgentSorting.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListAgentsRequest}
 */
proto.ondewo.nlu.ListAgentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAgentsRequest;
  return proto.ondewo.nlu.ListAgentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAgentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAgentsRequest}
 */
proto.ondewo.nlu.ListAgentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.AgentView} */ (reader.readEnum());
      msg.setAgentView(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.AgentSorting;
      reader.readMessage(value,proto.ondewo.nlu.AgentSorting.deserializeBinaryFromReader);
      msg.setSortByField(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAgentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAgentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentView();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSortByField();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.AgentSorting.serializeBinaryToWriter
    );
  }
};


/**
 * optional AgentView agent_view = 1;
 * @return {!proto.ondewo.nlu.AgentView}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.getAgentView = function() {
  return /** @type {!proto.ondewo.nlu.AgentView} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentView} value
 * @return {!proto.ondewo.nlu.ListAgentsRequest} returns this
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.setAgentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAgentsRequest} returns this
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional AgentSorting sort_by_field = 3;
 * @return {?proto.ondewo.nlu.AgentSorting}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.getSortByField = function() {
  return /** @type{?proto.ondewo.nlu.AgentSorting} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.AgentSorting, 3));
};


/**
 * @param {?proto.ondewo.nlu.AgentSorting|undefined} value
 * @return {!proto.ondewo.nlu.ListAgentsRequest} returns this
*/
proto.ondewo.nlu.ListAgentsRequest.prototype.setSortByField = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListAgentsRequest} returns this
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.clearSortByField = function() {
  return this.setSortByField(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListAgentsRequest.prototype.hasSortByField = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListAgentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAgentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAgentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsWithOwnersList: jspb.Message.toObjectList(msg.getAgentsWithOwnersList(),
    proto.ondewo.nlu.AgentWithOwner.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListAgentsResponse}
 */
proto.ondewo.nlu.ListAgentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAgentsResponse;
  return proto.ondewo.nlu.ListAgentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAgentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAgentsResponse}
 */
proto.ondewo.nlu.ListAgentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AgentWithOwner;
      reader.readMessage(value,proto.ondewo.nlu.AgentWithOwner.deserializeBinaryFromReader);
      msg.addAgentsWithOwners(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAgentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAgentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsWithOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.AgentWithOwner.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AgentWithOwner agents_with_owners = 1;
 * @return {!Array<!proto.ondewo.nlu.AgentWithOwner>}
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.getAgentsWithOwnersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AgentWithOwner>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AgentWithOwner, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AgentWithOwner>} value
 * @return {!proto.ondewo.nlu.ListAgentsResponse} returns this
*/
proto.ondewo.nlu.ListAgentsResponse.prototype.setAgentsWithOwnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.AgentWithOwner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AgentWithOwner}
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.addAgentsWithOwners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.AgentWithOwner, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListAgentsResponse} returns this
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.clearAgentsWithOwnersList = function() {
  return this.setAgentsWithOwnersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAgentsResponse} returns this
 */
proto.ondewo.nlu.ListAgentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAgentsOfUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAgentsOfUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentsOfUserWithOwnersList: jspb.Message.toObjectList(msg.getAgentsOfUserWithOwnersList(),
    proto.ondewo.nlu.AgentOfUserWithOwner.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListAgentsOfUserResponse}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAgentsOfUserResponse;
  return proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAgentsOfUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAgentsOfUserResponse}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AgentOfUserWithOwner;
      reader.readMessage(value,proto.ondewo.nlu.AgentOfUserWithOwner.deserializeBinaryFromReader);
      msg.addAgentsOfUserWithOwners(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAgentsOfUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAgentsOfUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentsOfUserWithOwnersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.AgentOfUserWithOwner.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AgentOfUserWithOwner agents_of_user_with_owners = 1;
 * @return {!Array<!proto.ondewo.nlu.AgentOfUserWithOwner>}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.getAgentsOfUserWithOwnersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AgentOfUserWithOwner>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AgentOfUserWithOwner, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AgentOfUserWithOwner>} value
 * @return {!proto.ondewo.nlu.ListAgentsOfUserResponse} returns this
*/
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.setAgentsOfUserWithOwnersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.AgentOfUserWithOwner=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AgentOfUserWithOwner}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.addAgentsOfUserWithOwners = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.AgentOfUserWithOwner, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListAgentsOfUserResponse} returns this
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.clearAgentsOfUserWithOwnersList = function() {
  return this.setAgentsOfUserWithOwnersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAgentsOfUserResponse} returns this
 */
proto.ondewo.nlu.ListAgentsOfUserResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.TrainAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.TrainAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.TrainAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    initiationProtocol: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.TrainAgentRequest}
 */
proto.ondewo.nlu.TrainAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.TrainAgentRequest;
  return proto.ondewo.nlu.TrainAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.TrainAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.TrainAgentRequest}
 */
proto.ondewo.nlu.TrainAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.InitiationProtocol} */ (reader.readEnum());
      msg.setInitiationProtocol(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.TrainAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.TrainAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.TrainAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInitiationProtocol();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.TrainAgentRequest} returns this
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.TrainAgentRequest} returns this
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InitiationProtocol initiation_protocol = 3;
 * @return {!proto.ondewo.nlu.InitiationProtocol}
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.getInitiationProtocol = function() {
  return /** @type {!proto.ondewo.nlu.InitiationProtocol} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.InitiationProtocol} value
 * @return {!proto.ondewo.nlu.TrainAgentRequest} returns this
 */
proto.ondewo.nlu.TrainAgentRequest.prototype.setInitiationProtocol = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.BuildCacheRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.BuildCacheRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BuildCacheRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branch: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.BuildCacheRequest}
 */
proto.ondewo.nlu.BuildCacheRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.BuildCacheRequest;
  return proto.ondewo.nlu.BuildCacheRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.BuildCacheRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.BuildCacheRequest}
 */
proto.ondewo.nlu.BuildCacheRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.BuildCacheRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.BuildCacheRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.BuildCacheRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BuildCacheRequest} returns this
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.BuildCacheRequest} returns this
 */
proto.ondewo.nlu.BuildCacheRequest.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    compressionLevel: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportAgentRequest}
 */
proto.ondewo.nlu.ExportAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportAgentRequest;
  return proto.ondewo.nlu.ExportAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportAgentRequest}
 */
proto.ondewo.nlu.ExportAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUri(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompressionLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAgentUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompressionLevel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportAgentRequest} returns this
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_uri = 2;
 * @return {string}
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.getAgentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportAgentRequest} returns this
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.setAgentUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 compression_level = 3;
 * @return {number}
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.getCompressionLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ExportAgentRequest} returns this
 */
proto.ondewo.nlu.ExportAgentRequest.prototype.setCompressionLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.ExportAgentResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.ExportAgentResponse.AgentCase = {
  AGENT_NOT_SET: 0,
  AGENT_URI: 1,
  AGENT_CONTENT: 2
};

/**
 * @return {proto.ondewo.nlu.ExportAgentResponse.AgentCase}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.getAgentCase = function() {
  return /** @type {proto.ondewo.nlu.ExportAgentResponse.AgentCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportAgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportAgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportAgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentUri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentContent: msg.getAgentContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportAgentResponse}
 */
proto.ondewo.nlu.ExportAgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportAgentResponse;
  return proto.ondewo.nlu.ExportAgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportAgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportAgentResponse}
 */
proto.ondewo.nlu.ExportAgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUri(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAgentContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportAgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportAgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportAgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string agent_uri = 1;
 * @return {string}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.getAgentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportAgentResponse} returns this
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.setAgentUri = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.ExportAgentResponse} returns this
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.clearAgentUri = function() {
  return jspb.Message.setOneofField(this, 1, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.hasAgentUri = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes agent_content = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.getAgentContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes agent_content = 2;
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {string}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.getAgentContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAgentContent()));
};


/**
 * optional bytes agent_content = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.getAgentContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAgentContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.ExportAgentResponse} returns this
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.setAgentContent = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.ExportAgentResponse} returns this
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.clearAgentContent = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.ExportAgentResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ExportAgentResponse.prototype.hasAgentContent = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportBenchmarkAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    compressionLevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    testSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    trainSize: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    randomState: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportBenchmarkAgentRequest;
  return proto.ondewo.nlu.ExportBenchmarkAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompressionLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTestSize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTrainSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRandomState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportBenchmarkAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCompressionLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTestSize();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getTrainSize();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getRandomState();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 compression_level = 2;
 * @return {number}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.getCompressionLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.setCompressionLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float test_size = 3;
 * @return {number}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.getTestSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.setTestSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float train_size = 4;
 * @return {number}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.getTrainSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.setTrainSize = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 random_state = 5;
 * @return {number}
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.getRandomState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentRequest} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentRequest.prototype.setRandomState = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportBenchmarkAgentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentContent: msg.getAgentContent_asB64(),
    trainingPhrasesMap: (f = msg.getTrainingPhrasesMap()) ? f.toObject(includeInstance, proto.ondewo.nlu.ListTrainingPhrasesResponse.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentResponse}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportBenchmarkAgentResponse;
  return proto.ondewo.nlu.ExportBenchmarkAgentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentResponse}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAgentContent(value);
      break;
    case 2:
      var value = msg.getTrainingPhrasesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.ondewo.nlu.ListTrainingPhrasesResponse.deserializeBinaryFromReader, "", new proto.ondewo.nlu.ListTrainingPhrasesResponse());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportBenchmarkAgentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportBenchmarkAgentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentContent_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTrainingPhrasesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.ondewo.nlu.ListTrainingPhrasesResponse.serializeBinaryToWriter);
  }
};


/**
 * optional bytes agent_content = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.getAgentContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes agent_content = 1;
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {string}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.getAgentContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAgentContent()));
};


/**
 * optional bytes agent_content = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.getAgentContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAgentContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentResponse} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.setAgentContent = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * map<string, ListTrainingPhrasesResponse> training_phrases = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.ondewo.nlu.ListTrainingPhrasesResponse>}
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.getTrainingPhrasesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.ondewo.nlu.ListTrainingPhrasesResponse>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.ondewo.nlu.ListTrainingPhrasesResponse));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ondewo.nlu.ExportBenchmarkAgentResponse} returns this
 */
proto.ondewo.nlu.ExportBenchmarkAgentResponse.prototype.clearTrainingPhrasesMap = function() {
  this.getTrainingPhrasesMap().clear();
  return this;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.OptimizeRankingMatchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCodesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    optimizationConfigsList: jspb.Message.toObjectList(msg.getOptimizationConfigsList(),
    proto.ondewo.nlu.RankingMatchOptimizationConfig.toObject, includeInstance),
    inPlace: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.OptimizeRankingMatchRequest;
  return proto.ondewo.nlu.OptimizeRankingMatchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageCodes(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.RankingMatchOptimizationConfig;
      reader.readMessage(value,proto.ondewo.nlu.RankingMatchOptimizationConfig.deserializeBinaryFromReader);
      msg.addOptimizationConfigs(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInPlace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.OptimizeRankingMatchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getOptimizationConfigsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.RankingMatchOptimizationConfig.serializeBinaryToWriter
    );
  }
  f = message.getInPlace();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string language_codes = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.getLanguageCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.setLanguageCodesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.addLanguageCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.clearLanguageCodesList = function() {
  return this.setLanguageCodesList([]);
};


/**
 * repeated RankingMatchOptimizationConfig optimization_configs = 3;
 * @return {!Array<!proto.ondewo.nlu.RankingMatchOptimizationConfig>}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.getOptimizationConfigsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RankingMatchOptimizationConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RankingMatchOptimizationConfig, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RankingMatchOptimizationConfig>} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
*/
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.setOptimizationConfigsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.RankingMatchOptimizationConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.addOptimizationConfigs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.RankingMatchOptimizationConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.clearOptimizationConfigsList = function() {
  return this.setOptimizationConfigsList([]);
};


/**
 * optional bool in_place = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.getInPlace = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchRequest} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchRequest.prototype.setInPlace = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RankingMatchOptimizationConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RankingMatchOptimizationConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    languageCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nSplits: jspb.Message.getFieldWithDefault(msg, 2, 0),
    randomSeed: jspb.Message.getFieldWithDefault(msg, 3, 0),
    initialThresholds: (f = msg.getInitialThresholds()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RankingMatchOptimizationConfig;
  return proto.ondewo.nlu.RankingMatchOptimizationConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RankingMatchOptimizationConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNSplits(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRandomSeed(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setInitialThresholds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RankingMatchOptimizationConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RankingMatchOptimizationConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNSplits();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRandomSeed();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getInitialThresholds();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string language_code = 1;
 * @return {string}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig} returns this
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 n_splits = 2;
 * @return {number}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.getNSplits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig} returns this
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.setNSplits = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 random_seed = 3;
 * @return {number}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.getRandomSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig} returns this
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.setRandomSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Struct initial_thresholds = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.getInitialThresholds = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig} returns this
*/
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.setInitialThresholds = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RankingMatchOptimizationConfig} returns this
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.clearInitialThresholds = function() {
  return this.setInitialThresholds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RankingMatchOptimizationConfig.prototype.hasInitialThresholds = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.OptimizeRankingMatchResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    optimizationInfo: (f = msg.getOptimizationInfo()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    optimizedOndewoConfig: (f = msg.getOptimizedOndewoConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.OptimizeRankingMatchResponse;
  return proto.ondewo.nlu.OptimizeRankingMatchResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOptimizationInfo(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOptimizedOndewoConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.OptimizeRankingMatchResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.OptimizeRankingMatchResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptimizationInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOptimizedOndewoConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct optimization_info = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.getOptimizationInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse} returns this
*/
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.setOptimizationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.clearOptimizationInfo = function() {
  return this.setOptimizationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.hasOptimizationInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct optimized_ondewo_config = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.getOptimizedOndewoConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse} returns this
*/
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.setOptimizedOndewoConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.OptimizeRankingMatchResponse} returns this
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.clearOptimizedOndewoConfig = function() {
  return this.setOptimizedOndewoConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.OptimizeRankingMatchResponse.prototype.hasOptimizedOndewoConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.ImportAgentRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.ImportAgentRequest.AgentCase = {
  AGENT_NOT_SET: 0,
  AGENT_URI: 2,
  AGENT_CONTENT: 3
};

/**
 * @return {proto.ondewo.nlu.ImportAgentRequest.AgentCase}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getAgentCase = function() {
  return /** @type {proto.ondewo.nlu.ImportAgentRequest.AgentCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ImportAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ImportAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ImportAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    agentContent: msg.getAgentContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ImportAgentRequest}
 */
proto.ondewo.nlu.ImportAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ImportAgentRequest;
  return proto.ondewo.nlu.ImportAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ImportAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ImportAgentRequest}
 */
proto.ondewo.nlu.ImportAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUri(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAgentContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ImportAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ImportAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ImportAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImportAgentRequest} returns this
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_uri = 2;
 * @return {string}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getAgentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImportAgentRequest} returns this
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.setAgentUri = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.ImportAgentRequest} returns this
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.clearAgentUri = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.hasAgentUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes agent_content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getAgentContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes agent_content = 3;
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {string}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getAgentContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAgentContent()));
};


/**
 * optional bytes agent_content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.getAgentContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAgentContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.ImportAgentRequest} returns this
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.setAgentContent = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.ImportAgentRequest} returns this
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.clearAgentContent = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.nlu.ImportAgentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ImportAgentRequest.prototype.hasAgentContent = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.RestoreAgentRequest.AgentCase = {
  AGENT_NOT_SET: 0,
  AGENT_URI: 2,
  AGENT_CONTENT: 3
};

/**
 * @return {proto.ondewo.nlu.RestoreAgentRequest.AgentCase}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getAgentCase = function() {
  return /** @type {proto.ondewo.nlu.RestoreAgentRequest.AgentCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RestoreAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RestoreAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    agentUri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    agentContent: msg.getAgentContent_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.RestoreAgentRequest}
 */
proto.ondewo.nlu.RestoreAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RestoreAgentRequest;
  return proto.ondewo.nlu.RestoreAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RestoreAgentRequest}
 */
proto.ondewo.nlu.RestoreAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgentUri(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAgentContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RestoreAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RestoreAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RestoreAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RestoreAgentRequest} returns this
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent_uri = 2;
 * @return {string}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getAgentUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RestoreAgentRequest} returns this
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.setAgentUri = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RestoreAgentRequest} returns this
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.clearAgentUri = function() {
  return jspb.Message.setOneofField(this, 2, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.hasAgentUri = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes agent_content = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getAgentContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes agent_content = 3;
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {string}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getAgentContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAgentContent()));
};


/**
 * optional bytes agent_content = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAgentContent()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.getAgentContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAgentContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.RestoreAgentRequest} returns this
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.setAgentContent = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RestoreAgentRequest} returns this
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.clearAgentContent = function() {
  return jspb.Message.setOneofField(this, 3, proto.ondewo.nlu.RestoreAgentRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RestoreAgentRequest.prototype.hasAgentContent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAgentStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAgentStatisticsRequest;
  return proto.ondewo.nlu.GetAgentStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.ReportFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.ReportType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAgentStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAgentStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReportFormat format = 2;
 * @return {!proto.ondewo.nlu.ReportFormat}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.getFormat = function() {
  return /** @type {!proto.ondewo.nlu.ReportFormat} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportFormat} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ReportType type = 4;
 * @return {!proto.ondewo.nlu.ReportType}
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.ReportType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportType} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAgentStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAgentStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reports: msg.getReports_asB64(),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetAgentStatisticsResponse}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAgentStatisticsResponse;
  return proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAgentStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAgentStatisticsResponse}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReports(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.ReportFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.ReportType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAgentStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAgentStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReports_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional bytes reports = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.getReports = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes reports = 1;
 * This is a type-conversion wrapper around `getReports()`
 * @return {string}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.getReports_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReports()));
};


/**
 * optional bytes reports = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReports()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.getReports_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReports()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.setReports = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional ReportFormat format = 2;
 * @return {!proto.ondewo.nlu.ReportFormat}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.getFormat = function() {
  return /** @type {!proto.ondewo.nlu.ReportFormat} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportFormat} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional ReportType type = 3;
 * @return {!proto.ondewo.nlu.ReportType}
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.ReportType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportType} value
 * @return {!proto.ondewo.nlu.GetAgentStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetAgentStatisticsResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.repeatedFields_ = [5,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetSessionsStatisticsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    sessionFilter: (f = msg.getSessionFilter()) && ondewo_nlu_session_pb.SessionFilter.toObject(includeInstance, f),
    contextFiltersList: jspb.Message.toObjectList(msg.getContextFiltersList(),
    ondewo_nlu_session_pb.ContextFilter.toObject, includeInstance),
    limit: jspb.Message.getFieldWithDefault(msg, 6, 0),
    groupBysList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    orderBysList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
    sqlQuery: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetSessionsStatisticsRequest;
  return proto.ondewo.nlu.GetSessionsStatisticsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.ReportFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.SessionsReportType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = new ondewo_nlu_session_pb.SessionFilter;
      reader.readMessage(value,ondewo_nlu_session_pb.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
      break;
    case 5:
      var value = new ondewo_nlu_session_pb.ContextFilter;
      reader.readMessage(value,ondewo_nlu_session_pb.ContextFilter.deserializeBinaryFromReader);
      msg.addContextFilters(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLimit(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addGroupBys(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addOrderBys(value);
      break;
    case 9:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSqlQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetSessionsStatisticsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ondewo_nlu_session_pb.SessionFilter.serializeBinaryToWriter
    );
  }
  f = message.getContextFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      ondewo_nlu_session_pb.ContextFilter.serializeBinaryToWriter
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getGroupBysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getOrderBysList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getSqlQuery();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ReportFormat format = 2;
 * @return {!proto.ondewo.nlu.ReportFormat}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getFormat = function() {
  return /** @type {!proto.ondewo.nlu.ReportFormat} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportFormat} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SessionsReportType type = 3;
 * @return {!proto.ondewo.nlu.SessionsReportType}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.SessionsReportType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionsReportType} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional SessionFilter session_filter = 4;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_session_pb.SessionFilter, 4));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
*/
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated ContextFilter context_filters = 5;
 * @return {!Array<!proto.ondewo.nlu.ContextFilter>}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getContextFiltersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.ContextFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_session_pb.ContextFilter, 5));
};


/**
 * @param {!Array<!proto.ondewo.nlu.ContextFilter>} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
*/
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setContextFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ondewo.nlu.ContextFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ContextFilter}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.addContextFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ondewo.nlu.ContextFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.clearContextFiltersList = function() {
  return this.setContextFiltersList([]);
};


/**
 * optional int32 limit = 6;
 * @return {number}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated string group_bys = 7;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getGroupBysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setGroupBysList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.addGroupBys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.clearGroupBysList = function() {
  return this.setGroupBysList([]);
};


/**
 * repeated string order_bys = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getOrderBysList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setOrderBysList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.addOrderBys = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.clearOrderBysList = function() {
  return this.setOrderBysList([]);
};


/**
 * optional google.protobuf.FieldMask field_mask = 9;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 9));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
*/
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string sql_query = 10;
 * @return {string}
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.getSqlQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsRequest} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsRequest.prototype.setSqlQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetSessionsStatisticsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    reports: msg.getReports_asB64(),
    format: jspb.Message.getFieldWithDefault(msg, 2, 0),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsResponse}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetSessionsStatisticsResponse;
  return proto.ondewo.nlu.GetSessionsStatisticsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsResponse}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReports(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.ReportFormat} */ (reader.readEnum());
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.SessionsReportType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetSessionsStatisticsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetSessionsStatisticsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReports_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional bytes reports = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.getReports = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes reports = 1;
 * This is a type-conversion wrapper around `getReports()`
 * @return {string}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.getReports_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReports()));
};


/**
 * optional bytes reports = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReports()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.getReports_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReports()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.setReports = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional ReportFormat format = 2;
 * @return {!proto.ondewo.nlu.ReportFormat}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.getFormat = function() {
  return /** @type {!proto.ondewo.nlu.ReportFormat} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.ReportFormat} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.setFormat = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional SessionsReportType type = 3;
 * @return {!proto.ondewo.nlu.SessionsReportType}
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.SessionsReportType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionsReportType} value
 * @return {!proto.ondewo.nlu.GetSessionsStatisticsResponse} returns this
 */
proto.ondewo.nlu.GetSessionsStatisticsResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AddUserToProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddUserToProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectRoleId: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.AddUserToProjectRequest}
 */
proto.ondewo.nlu.AddUserToProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AddUserToProjectRequest;
  return proto.ondewo.nlu.AddUserToProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AddUserToProjectRequest}
 */
proto.ondewo.nlu.AddUserToProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProjectRoleId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AddUserToProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AddUserToProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddUserToProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectRoleId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddUserToProjectRequest} returns this
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddUserToProjectRequest} returns this
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 project_role_id = 4;
 * @return {number}
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.getProjectRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.AddUserToProjectRequest} returns this
 */
proto.ondewo.nlu.AddUserToProjectRequest.prototype.setProjectRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RemoveUserFromProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.RemoveUserFromProjectRequest}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RemoveUserFromProjectRequest;
  return proto.ondewo.nlu.RemoveUserFromProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RemoveUserFromProjectRequest}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RemoveUserFromProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RemoveUserFromProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RemoveUserFromProjectRequest} returns this
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RemoveUserFromProjectRequest} returns this
 */
proto.ondewo.nlu.RemoveUserFromProjectRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListUsersInProjectRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUsersInProjectRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListUsersInProjectRequest}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListUsersInProjectRequest;
  return proto.ondewo.nlu.ListUsersInProjectRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListUsersInProjectRequest}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListUsersInProjectRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListUsersInProjectRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUsersInProjectRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListUsersInProjectRequest} returns this
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListUsersInProjectRequest} returns this
 */
proto.ondewo.nlu.ListUsersInProjectRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.UserInProject.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UserInProject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UserInProject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UserInProject.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    user: (f = msg.getUser()) && ondewo_nlu_user_pb.User.toObject(includeInstance, f),
    roleId: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.UserInProject}
 */
proto.ondewo.nlu.UserInProject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UserInProject;
  return proto.ondewo.nlu.UserInProject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UserInProject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UserInProject}
 */
proto.ondewo.nlu.UserInProject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new ondewo_nlu_user_pb.User;
      reader.readMessage(value,ondewo_nlu_user_pb.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRoleId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.UserInProject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UserInProject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UserInProject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UserInProject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_user_pb.User.serializeBinaryToWriter
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.UserInProject.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.UserInProject} returns this
 */
proto.ondewo.nlu.UserInProject.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.ondewo.nlu.User}
 */
proto.ondewo.nlu.UserInProject.prototype.getUser = function() {
  return /** @type{?proto.ondewo.nlu.User} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_user_pb.User, 2));
};


/**
 * @param {?proto.ondewo.nlu.User|undefined} value
 * @return {!proto.ondewo.nlu.UserInProject} returns this
*/
proto.ondewo.nlu.UserInProject.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UserInProject} returns this
 */
proto.ondewo.nlu.UserInProject.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UserInProject.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 role_id = 3;
 * @return {number}
 */
proto.ondewo.nlu.UserInProject.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.UserInProject} returns this
 */
proto.ondewo.nlu.UserInProject.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListUsersInProjectResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListUsersInProjectResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListUsersInProjectResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUsersInProjectResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.ondewo.nlu.UserInProject.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListUsersInProjectResponse}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListUsersInProjectResponse;
  return proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListUsersInProjectResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListUsersInProjectResponse}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.UserInProject;
      reader.readMessage(value,proto.ondewo.nlu.UserInProject.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListUsersInProjectResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListUsersInProjectResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUsersInProjectResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.UserInProject.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated UserInProject users = 1;
 * @return {!Array<!proto.ondewo.nlu.UserInProject>}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.UserInProject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.UserInProject, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.UserInProject>} value
 * @return {!proto.ondewo.nlu.ListUsersInProjectResponse} returns this
*/
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.setUsersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.UserInProject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.UserInProject}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.UserInProject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListUsersInProjectResponse} returns this
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.clearUsersList = function() {
  return this.setUsersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListUsersInProjectResponse} returns this
 */
proto.ondewo.nlu.ListUsersInProjectResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetPlatformInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetPlatformInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetPlatformInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitHash: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetPlatformInfoResponse}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetPlatformInfoResponse;
  return proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetPlatformInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetPlatformInfoResponse}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommitHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetPlatformInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetPlatformInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetPlatformInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitHash();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetPlatformInfoResponse} returns this
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string commit_hash = 2;
 * @return {string}
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.getCommitHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetPlatformInfoResponse} returns this
 */
proto.ondewo.nlu.GetPlatformInfoResponse.prototype.setCommitHash = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListProjectPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListProjectPermissionsRequest}
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListProjectPermissionsRequest;
  return proto.ondewo.nlu.ListProjectPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListProjectPermissionsRequest}
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListProjectPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListProjectPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string page_token = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListProjectPermissionsRequest} returns this
 */
proto.ondewo.nlu.ListProjectPermissionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListProjectPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListProjectPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListProjectPermissionsResponse;
  return proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListProjectPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissions(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListProjectPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListProjectPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string permissions = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.getPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse} returns this
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse} returns this
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse} returns this
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListProjectPermissionsResponse} returns this
 */
proto.ondewo.nlu.ListProjectPermissionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SetAgentStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SetAgentStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    agentView: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.SetAgentStatusRequest}
 */
proto.ondewo.nlu.SetAgentStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SetAgentStatusRequest;
  return proto.ondewo.nlu.SetAgentStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SetAgentStatusRequest}
 */
proto.ondewo.nlu.SetAgentStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.AgentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.AgentView} */ (reader.readEnum());
      msg.setAgentView(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SetAgentStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SetAgentStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SetAgentStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getAgentView();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SetAgentStatusRequest} returns this
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AgentStatus status = 2;
 * @return {!proto.ondewo.nlu.AgentStatus}
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.AgentStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentStatus} value
 * @return {!proto.ondewo.nlu.SetAgentStatusRequest} returns this
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional AgentView agent_view = 3;
 * @return {!proto.ondewo.nlu.AgentView}
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.getAgentView = function() {
  return /** @type {!proto.ondewo.nlu.AgentView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentView} value
 * @return {!proto.ondewo.nlu.SetAgentStatusRequest} returns this
 */
proto.ondewo.nlu.SetAgentStatusRequest.prototype.setAgentView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.AgentSorting.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AgentSorting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AgentSorting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentSorting.toObject = function(includeInstance, msg) {
  var f, obj = {
    sortingField: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sortingMode: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.AgentSorting}
 */
proto.ondewo.nlu.AgentSorting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AgentSorting;
  return proto.ondewo.nlu.AgentSorting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AgentSorting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AgentSorting}
 */
proto.ondewo.nlu.AgentSorting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.AgentSorting.AgentSortingField} */ (reader.readEnum());
      msg.setSortingField(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.AgentSorting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AgentSorting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AgentSorting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AgentSorting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSortingField();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSortingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.AgentSorting.AgentSortingField = {
  NO_AGENT_SORTING: 0,
  SORT_AGENT_BY_NAME: 1,
  SORT_AGENT_BY_CREATION_DATE: 2,
  SORT_AGENT_BY_LAST_UPDATED: 3,
  SORT_AGENT_BY_OWNER_NAME: 4
};

/**
 * optional AgentSortingField sorting_field = 1;
 * @return {!proto.ondewo.nlu.AgentSorting.AgentSortingField}
 */
proto.ondewo.nlu.AgentSorting.prototype.getSortingField = function() {
  return /** @type {!proto.ondewo.nlu.AgentSorting.AgentSortingField} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.AgentSorting.AgentSortingField} value
 * @return {!proto.ondewo.nlu.AgentSorting} returns this
 */
proto.ondewo.nlu.AgentSorting.prototype.setSortingField = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional SortingMode sorting_mode = 2;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.AgentSorting.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.AgentSorting} returns this
 */
proto.ondewo.nlu.AgentSorting.prototype.setSortingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SetResourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SetResourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SetResourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourceFile: msg.getResourceFile_asB64(),
    languageCode: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.SetResourcesRequest}
 */
proto.ondewo.nlu.SetResourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SetResourcesRequest;
  return proto.ondewo.nlu.SetResourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SetResourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SetResourcesRequest}
 */
proto.ondewo.nlu.SetResourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResourceFile(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SetResourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SetResourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SetResourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResourceFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SetResourcesRequest} returns this
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SetResourcesRequest} returns this
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SetResourcesRequest} returns this
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes resource_file = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getResourceFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes resource_file = 4;
 * This is a type-conversion wrapper around `getResourceFile()`
 * @return {string}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getResourceFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResourceFile()));
};


/**
 * optional bytes resource_file = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResourceFile()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getResourceFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResourceFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.SetResourcesRequest} returns this
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.setResourceFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string language_code = 5;
 * @return {string}
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SetResourcesRequest} returns this
 */
proto.ondewo.nlu.SetResourcesRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteResourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteResourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest}
 */
proto.ondewo.nlu.DeleteResourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteResourcesRequest;
  return proto.ondewo.nlu.DeleteResourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest}
 */
proto.ondewo.nlu.DeleteResourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteResourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteResourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteResourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest} returns this
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest} returns this
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest} returns this
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteResourcesRequest} returns this
 */
proto.ondewo.nlu.DeleteResourcesRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportResourcesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportResourcesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportResourcesRequest}
 */
proto.ondewo.nlu.ExportResourcesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportResourcesRequest;
  return proto.ondewo.nlu.ExportResourcesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportResourcesRequest}
 */
proto.ondewo.nlu.ExportResourcesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportResourcesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportResourcesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportResourcesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesRequest} returns this
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesRequest} returns this
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesRequest} returns this
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesRequest} returns this
 */
proto.ondewo.nlu.ExportResourcesRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ExportResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ExportResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resourceFile: msg.getResourceFile_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ExportResourcesResponse}
 */
proto.ondewo.nlu.ExportResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ExportResourcesResponse;
  return proto.ondewo.nlu.ExportResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ExportResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ExportResourcesResponse}
 */
proto.ondewo.nlu.ExportResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setResourceFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ExportResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ExportResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ExportResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResourceFile_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesResponse} returns this
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesResponse} returns this
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesResponse} returns this
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ExportResourcesResponse} returns this
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bytes resource_file = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getResourceFile = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes resource_file = 5;
 * This is a type-conversion wrapper around `getResourceFile()`
 * @return {string}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getResourceFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getResourceFile()));
};


/**
 * optional bytes resource_file = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResourceFile()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.getResourceFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getResourceFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.ExportResourcesResponse} returns this
 */
proto.ondewo.nlu.ExportResourcesResponse.prototype.setResourceFile = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetModelStatusesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetModelStatusesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cacheVersion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest}
 */
proto.ondewo.nlu.GetModelStatusesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetModelStatusesRequest;
  return proto.ondewo.nlu.GetModelStatusesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest}
 */
proto.ondewo.nlu.GetModelStatusesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCacheVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetModelStatusesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetModelStatusesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetModelStatusesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCacheVersion();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest} returns this
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 cache_version = 2;
 * @return {number}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.getCacheVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest} returns this
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.setCacheVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest} returns this
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string model_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetModelStatusesRequest} returns this
 */
proto.ondewo.nlu.GetModelStatusesRequest.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ModelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ModelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ModelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ModelStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    cacheVersion: jspb.Message.getFieldWithDefault(msg, 1, 0),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    statusSetTime: (f = msg.getStatusSetTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    config: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ModelStatus}
 */
proto.ondewo.nlu.ModelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ModelStatus;
  return proto.ondewo.nlu.ModelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ModelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ModelStatus}
 */
proto.ondewo.nlu.ModelStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCacheVersion(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelName(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStatusSetTime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfig(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.ModelStatus.StatusName} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ModelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ModelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ModelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ModelStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCacheVersion();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatusSetTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getConfig();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.ModelStatus.StatusName = {
  UNKNOWN: 0,
  INITIALIZING: 1,
  INITIALIZED: 2,
  LOADING_DATA: 3,
  TRAINING: 4,
  TESTING: 5,
  TRAINED: 6
};

/**
 * optional int32 cache_version = 1;
 * @return {number}
 */
proto.ondewo.nlu.ModelStatus.prototype.getCacheVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.setCacheVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.ModelStatus.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.ModelStatus.prototype.getModelName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.setModelName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp status_set_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.ModelStatus.prototype.getStatusSetTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
*/
proto.ondewo.nlu.ModelStatus.prototype.setStatusSetTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.clearStatusSetTime = function() {
  return this.setStatusSetTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ModelStatus.prototype.hasStatusSetTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string config = 5;
 * @return {string}
 */
proto.ondewo.nlu.ModelStatus.prototype.getConfig = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.setConfig = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional StatusName status = 6;
 * @return {!proto.ondewo.nlu.ModelStatus.StatusName}
 */
proto.ondewo.nlu.ModelStatus.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.ModelStatus.StatusName} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.ModelStatus.StatusName} value
 * @return {!proto.ondewo.nlu.ModelStatus} returns this
 */
proto.ondewo.nlu.ModelStatus.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.GetModelStatusesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetModelStatusesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetModelStatusesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetModelStatusesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetModelStatusesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelStatusesList: jspb.Message.toObjectList(msg.getModelStatusesList(),
    proto.ondewo.nlu.ModelStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetModelStatusesResponse}
 */
proto.ondewo.nlu.GetModelStatusesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetModelStatusesResponse;
  return proto.ondewo.nlu.GetModelStatusesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetModelStatusesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetModelStatusesResponse}
 */
proto.ondewo.nlu.GetModelStatusesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.ModelStatus;
      reader.readMessage(value,proto.ondewo.nlu.ModelStatus.deserializeBinaryFromReader);
      msg.addModelStatuses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetModelStatusesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetModelStatusesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetModelStatusesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetModelStatusesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.ModelStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ModelStatus model_statuses = 1;
 * @return {!Array<!proto.ondewo.nlu.ModelStatus>}
 */
proto.ondewo.nlu.GetModelStatusesResponse.prototype.getModelStatusesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.ModelStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.ModelStatus, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.ModelStatus>} value
 * @return {!proto.ondewo.nlu.GetModelStatusesResponse} returns this
*/
proto.ondewo.nlu.GetModelStatusesResponse.prototype.setModelStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.ModelStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ModelStatus}
 */
proto.ondewo.nlu.GetModelStatusesResponse.prototype.addModelStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.ModelStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetModelStatusesResponse} returns this
 */
proto.ondewo.nlu.GetModelStatusesResponse.prototype.clearModelStatusesList = function() {
  return this.setModelStatusesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CustomPlatformInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CustomPlatformInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CustomPlatformInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, 0),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    position: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.CustomPlatformInfo}
 */
proto.ondewo.nlu.CustomPlatformInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CustomPlatformInfo;
  return proto.ondewo.nlu.CustomPlatformInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CustomPlatformInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CustomPlatformInfo}
 */
proto.ondewo.nlu.CustomPlatformInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (reader.readEnum());
      msg.setPlatform(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPosition(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CustomPlatformInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CustomPlatformInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CustomPlatformInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPosition();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional Intent.Message.Platform platform = 1;
 * @return {!proto.ondewo.nlu.Intent.Message.Platform}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getPlatform = function() {
  return /** @type {!proto.ondewo.nlu.Intent.Message.Platform} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 position = 3;
 * @return {number}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getPosition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.setPosition = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
*/
proto.ondewo.nlu.CustomPlatformInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
*/
proto.ondewo.nlu.CustomPlatformInfo.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string modified_by = 7;
 * @return {string}
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CustomPlatformInfo} returns this
 */
proto.ondewo.nlu.CustomPlatformInfo.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.GetPlatformMappingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetPlatformMappingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetPlatformMappingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.GetPlatformMappingRequest}
 */
proto.ondewo.nlu.GetPlatformMappingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetPlatformMappingRequest;
  return proto.ondewo.nlu.GetPlatformMappingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetPlatformMappingRequest}
 */
proto.ondewo.nlu.GetPlatformMappingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.GetPlatformMappingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetPlatformMappingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetPlatformMappingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetPlatformMappingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetPlatformMappingRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetPlatformMappingRequest} returns this
 */
proto.ondewo.nlu.GetPlatformMappingRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.PlatformMapping.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.PlatformMapping.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.PlatformMapping.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.PlatformMapping} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PlatformMapping.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platformInfoList: jspb.Message.toObjectList(msg.getPlatformInfoList(),
    proto.ondewo.nlu.CustomPlatformInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.PlatformMapping}
 */
proto.ondewo.nlu.PlatformMapping.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.PlatformMapping;
  return proto.ondewo.nlu.PlatformMapping.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.PlatformMapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.PlatformMapping}
 */
proto.ondewo.nlu.PlatformMapping.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.CustomPlatformInfo;
      reader.readMessage(value,proto.ondewo.nlu.CustomPlatformInfo.deserializeBinaryFromReader);
      msg.addPlatformInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.PlatformMapping.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.PlatformMapping.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.PlatformMapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.PlatformMapping.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatformInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.CustomPlatformInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.PlatformMapping.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.PlatformMapping} returns this
 */
proto.ondewo.nlu.PlatformMapping.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated CustomPlatformInfo platform_info = 2;
 * @return {!Array<!proto.ondewo.nlu.CustomPlatformInfo>}
 */
proto.ondewo.nlu.PlatformMapping.prototype.getPlatformInfoList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.CustomPlatformInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.CustomPlatformInfo, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.CustomPlatformInfo>} value
 * @return {!proto.ondewo.nlu.PlatformMapping} returns this
*/
proto.ondewo.nlu.PlatformMapping.prototype.setPlatformInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.CustomPlatformInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.CustomPlatformInfo}
 */
proto.ondewo.nlu.PlatformMapping.prototype.addPlatformInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.CustomPlatformInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.PlatformMapping} returns this
 */
proto.ondewo.nlu.PlatformMapping.prototype.clearPlatformInfoList = function() {
  return this.setPlatformInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    term: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchRequest}
 */
proto.ondewo.nlu.FullTextSearchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchRequest;
  return proto.ondewo.nlu.FullTextSearchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchRequest}
 */
proto.ondewo.nlu.FullTextSearchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.FullTextSearchRequest.QueryType = {
  ALL: 0,
  ONDEWOENTITYQUERY: 1,
  ONDEWOENTITYTYPEQUERY: 2,
  ONDEWOENTITYSYNONYMQUERY: 3,
  ONDEWOINTENTQUERY: 4,
  ONDEWOINTENTCONTEXTINQUERY: 5,
  ONDEWOINTENTCONTEXTOUTQUERY: 6,
  ONDEWOINTENTUSERSAYSQUERY: 7,
  ONDEWOINTENTTAGSQUERY: 8,
  ONDEWOINTENTPARAMETERSQUERY: 9,
  ONDEWOINTENTRESPONSEQUERY: 10
};

/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchRequest} returns this
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchRequest} returns this
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string term = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchRequest} returns this
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchRequest} returns this
 */
proto.ondewo.nlu.FullTextSearchRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntityType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityTypeResultsList: jspb.Message.toObjectList(msg.getEntityTypeResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntityType;
  return proto.ondewo.nlu.FullTextSearchResponseEntityType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.deserializeBinaryFromReader);
      msg.addEntityTypeResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntityType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityTypeResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    language: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string modified_by = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntityTypeSearchResult entity_type_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getEntityTypeResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setEntityTypeResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.addEntityTypeResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseEntityType.EntityTypeSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.clearEntityTypeResultsList = function() {
  return this.setEntityTypeResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntityType} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntityType.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityResultsList: jspb.Message.toObjectList(msg.getEntityResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntity;
  return proto.ondewo.nlu.FullTextSearchResponseEntity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.deserializeBinaryFromReader);
      msg.addEntityResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityTypeName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entityTypeDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityTypeName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntityTypeDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string entity_type_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getEntityTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setEntityTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string entity_type_display_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getEntityTypeDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setEntityTypeDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string modified_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntitySearchResult entity_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getEntityResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setEntityResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.addEntityResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseEntity.EntitySearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.clearEntityResultsList = function() {
  return this.setEntityResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntity} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntity.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entitySynonymResultsList: jspb.Message.toObjectList(msg.getEntitySynonymResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntitySynonym;
  return proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.deserializeBinaryFromReader);
      msg.addEntitySynonymResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntitySynonymResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    entityTypeName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    entityTypeDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    entityName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    entityDisplayName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    language: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 10, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityTypeDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntityDisplayName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEntityTypeName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEntityTypeDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEntityName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEntityDisplayName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string entity_type_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getEntityTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setEntityTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string entity_type_display_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getEntityTypeDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setEntityTypeDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string entity_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getEntityName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setEntityName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string entity_display_name = 6;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getEntityDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setEntityDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string language = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string created_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string modified_by = 11;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated EntitySynonymSearchResult entity_synonym_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getEntitySynonymResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setEntitySynonymResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.addEntitySynonymResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.EntitySynonymSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.clearEntitySynonymResultsList = function() {
  return this.setEntitySynonymResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseEntitySynonym} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseEntitySynonym.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentResultsList: jspb.Message.toObjectList(msg.getIntentResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntent;
  return proto.ondewo.nlu.FullTextSearchResponseIntent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.deserializeBinaryFromReader);
      msg.addIntentResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    domainName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomainName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDomainName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string domain_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getDomainName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setDomainName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string modified_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentSearchResult intent_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getIntentResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setIntentResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.addIntentResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntent.IntentSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.clearIntentResultsList = function() {
  return this.setIntentResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntent} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntent.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentContextInResultsList: jspb.Message.toObjectList(msg.getIntentContextInResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentContextIn;
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.deserializeBinaryFromReader);
      msg.addIntentContextInResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentContextInResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string intent_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string intent_display_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string modified_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentContextInSearchResult intent_context_in_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getIntentContextInResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setIntentContextInResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.addIntentContextInResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.IntentContextInSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.clearIntentContextInResultsList = function() {
  return this.setIntentContextInResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextIn} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextIn.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentContextOutResultsList: jspb.Message.toObjectList(msg.getIntentContextOutResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentContextOut;
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.deserializeBinaryFromReader);
      msg.addIntentContextOutResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentContextOutResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string intent_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string intent_display_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string modified_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentContextOutSearchResult intent_context_out_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getIntentContextOutResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setIntentContextOutResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.addIntentContextOutResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.IntentContextOutSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.clearIntentContextOutResultsList = function() {
  return this.setIntentContextOutResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentContextOut} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentContextOut.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentUsersaysResultsList: jspb.Message.toObjectList(msg.getIntentUsersaysResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentUsersays;
  return proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.deserializeBinaryFromReader);
      msg.addIntentUsersaysResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentUsersaysResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    textAsEntityTypes: jspb.Message.getFieldWithDefault(msg, 3, ""),
    textAsEntityValues: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 9, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 12, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextAsEntityTypes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextAsEntityValues(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTextAsEntityTypes();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTextAsEntityValues();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text_as_entity_types = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getTextAsEntityTypes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setTextAsEntityTypes = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text_as_entity_values = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getTextAsEntityValues = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setTextAsEntityValues = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string intent_name = 6;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string intent_display_name = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string tags = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string created_by = 12;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string modified_by = 13;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentUsersaysSearchResult intent_usersays_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getIntentUsersaysResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setIntentUsersaysResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.addIntentUsersaysResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.IntentUsersaysSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.clearIntentUsersaysResultsList = function() {
  return this.setIntentUsersaysResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentUsersays} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentUsersays.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentTags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentTagsResultsList: jspb.Message.toObjectList(msg.getIntentTagsResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentTags;
  return proto.ondewo.nlu.FullTextSearchResponseIntentTags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.deserializeBinaryFromReader);
      msg.addIntentTagsResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentTags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentTagsResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 9, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string intent_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string intent_display_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string created_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string modified_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentTagsSearchResult intent_tags_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getIntentTagsResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setIntentTagsResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.addIntentTagsResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentTags.IntentTagsSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.clearIntentTagsResultsList = function() {
  return this.setIntentTagsResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentTags} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentTags.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentResponseResultsList: jspb.Message.toObjectList(msg.getIntentResponseResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentResponse;
  return proto.ondewo.nlu.FullTextSearchResponseIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.deserializeBinaryFromReader);
      msg.addIntentResponseResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentResponseResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
    responseType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 10, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResponseType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string response_type = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getResponseType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setResponseType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string intent_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string intent_display_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string tags = 6;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string created_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string modified_by = 11;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentResponseSearchResult intent_response_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getIntentResponseResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setIntentResponseResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.addIntentResponseResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentResponse.IntentResponseSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.clearIntentResponseResultsList = function() {
  return this.setIntentResponseResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentResponse} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentParametersResultsList: jspb.Message.toObjectList(msg.getIntentParametersResultsList(),
    proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.toObject, includeInstance),
    term: jspb.Message.getFieldWithDefault(msg, 4, ""),
    elasticQuery: jspb.Message.getFieldWithDefault(msg, 5, ""),
    time: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentParameters;
  return proto.ondewo.nlu.FullTextSearchResponseIntentParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult;
      reader.readMessage(value,proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.deserializeBinaryFromReader);
      msg.addIntentParametersResults(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTerm(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQuery(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTime(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentParametersResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getElasticQuery();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTime();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    parameterName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parameterDisplayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    intentName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    intentDisplayName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    language: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdBy: jspb.Message.getFieldWithDefault(msg, 9, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult;
  return proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterDisplayName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntentDisplayName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParameterName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParameterDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIntentName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIntentDisplayName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string parameter_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getParameterName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setParameterName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parameter_display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getParameterDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setParameterDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string intent_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getIntentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setIntentName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string intent_display_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getIntentDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setIntentDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string tags = 5;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string created_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string modified_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated IntentParametersSearchResult intent_parameters_results = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult>}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getIntentParametersResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult>} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
*/
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setIntentParametersResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.addIntentParametersResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.FullTextSearchResponseIntentParameters.IntentParametersSearchResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.clearIntentParametersResultsList = function() {
  return this.setIntentParametersResultsList([]);
};


/**
 * optional string term = 4;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getTerm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setTerm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string elastic_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getElasticQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setElasticQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float time = 6;
 * @return {number}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setTime = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional string next_page_token = 7;
 * @return {string}
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.FullTextSearchResponseIntentParameters} returns this
 */
proto.ondewo.nlu.FullTextSearchResponseIntentParameters.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ReindexAgentRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ReindexAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ReindexAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ReindexAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branchName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    indexTypesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ondewo.nlu.ReindexAgentRequest}
 */
proto.ondewo.nlu.ReindexAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ReindexAgentRequest;
  return proto.ondewo.nlu.ReindexAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ReindexAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ReindexAgentRequest}
 */
proto.ondewo.nlu.ReindexAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranchName(value);
      break;
    case 3:
      var values = /** @type {!Array<!proto.ondewo.nlu.FullTextSearchRequest.QueryType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIndexTypes(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ReindexAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ReindexAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ReindexAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranchName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIndexTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ReindexAgentRequest} returns this
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string branch_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.getBranchName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ReindexAgentRequest} returns this
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.setBranchName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated FullTextSearchRequest.QueryType index_types = 3;
 * @return {!Array<!proto.ondewo.nlu.FullTextSearchRequest.QueryType>}
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.getIndexTypesList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.FullTextSearchRequest.QueryType>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FullTextSearchRequest.QueryType>} value
 * @return {!proto.ondewo.nlu.ReindexAgentRequest} returns this
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.setIndexTypesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.ondewo.nlu.FullTextSearchRequest.QueryType} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ReindexAgentRequest} returns this
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.addIndexTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ReindexAgentRequest} returns this
 */
proto.ondewo.nlu.ReindexAgentRequest.prototype.clearIndexTypesList = function() {
  return this.setIndexTypesList([]);
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.AgentView = {
  AGENT_VIEW_UNSPECIFIED: 0,
  AGENT_VIEW_FULL: 1,
  AGENT_VIEW_SHALLOW: 2,
  AGENT_VIEW_MINIMUM: 3
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.InitiationProtocol = {
  AS_SOON_AS_POSSIBLE: 0,
  WHEN_TRAINED: 1,
  NEVER: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.ReportType = {
  ALL: 0,
  INTENT_PER_LANGUAGE: 1,
  ENTITY_PER_LANGUAGE: 2,
  ENTITY_COLLISION: 3,
  INTENT_GENERAL: 4
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.SessionsReportType = {
  SESSIONS: 0,
  SESSION_STEPS: 1,
  SESSION_TOP_X_INTENTS: 2,
  SESSION_TOP_X_ENTITY_TYPES: 3,
  SESSION_TOP_X_ENTITY_VALUES: 4,
  SESSION_TOP_X_USERS: 5,
  SESSION_TOP_X_LABELS: 6,
  SESSION_TOP_X_TAGS: 7,
  SESSION_TOP_X_PHONE_NUMBERS: 8,
  SESSION_HUMAN_HANDOVERS: 9,
  SESSION_SQL_QUERY: 10,
  SESSION_LEAST_X_INTENTS: 11,
  SESSION_LEAST_X_ENTITY_TYPES: 12,
  SESSION_LEAST_X_ENTITY_VALUES: 13,
  SESSION_LEAST_X_USERS: 14,
  SESSION_LEAST_X_LABELS: 15,
  SESSION_LEAST_X_TAGS: 16,
  TOTAL_STATISTICS: 17
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.ReportFormat = {
  CSV: 0,
  HTML: 1,
  JSON: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.AgentStatus = {
  ACTIVE: 0,
  INACTIVE: 1
};

goog.object.extend(exports, proto.ondewo.nlu);
