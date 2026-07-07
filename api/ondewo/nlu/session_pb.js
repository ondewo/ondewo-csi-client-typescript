// source: ondewo/nlu/session.proto
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
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
goog.object.extend(proto, google_rpc_status_pb);
var google_type_latlng_pb = require('../../google/type/latlng_pb.js');
goog.object.extend(proto, google_type_latlng_pb);
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
goog.object.extend(proto, ondewo_nlu_common_pb);
var ondewo_nlu_context_pb = require('../../ondewo/nlu/context_pb.js');
goog.object.extend(proto, ondewo_nlu_context_pb);
var ondewo_nlu_intent_pb = require('../../ondewo/nlu/intent_pb.js');
goog.object.extend(proto, ondewo_nlu_intent_pb);
var ondewo_nlu_entity_type_pb = require('../../ondewo/nlu/entity_type_pb.js');
goog.object.extend(proto, ondewo_nlu_entity_type_pb);
goog.exportSymbol('proto.ondewo.nlu.AddAudioFilesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.AddAudioFilesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.AddSessionCommentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.AddSessionLabelsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.AudioEncoding', null, global);
goog.exportSymbol('proto.ondewo.nlu.AudioFileResource', null, global);
goog.exportSymbol('proto.ondewo.nlu.AudioFileResourceType', null, global);
goog.exportSymbol('proto.ondewo.nlu.ComparisonOperator', null, global);
goog.exportSymbol('proto.ondewo.nlu.ContextFilter', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateSessionRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateSessionReviewRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.CreateSessionStepRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteAudioFilesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteAudioFilesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteSessionCommentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteSessionLabelsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteSessionRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DeleteSessionStepRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DetectIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.DetectIntentResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.DetectedIntent', null, global);
goog.exportSymbol('proto.ondewo.nlu.DocumentFileResource', null, global);
goog.exportSymbol('proto.ondewo.nlu.EventInput', null, global);
goog.exportSymbol('proto.ondewo.nlu.FileResource', null, global);
goog.exportSymbol('proto.ondewo.nlu.FileResource.FileResourceCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAudioFileOfSessionRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAudioFilesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetAudioFilesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetLatestSessionReviewRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetSessionRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetSessionReviewRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.GetSessionStepRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ImageFileResource', null, global);
goog.exportSymbol('proto.ondewo.nlu.InputAudioConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAccountIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAudioFilesRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListAudioFilesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListDatastreamIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListIdentifiedUserIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListInputContextsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListLanguageCodesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListMatchedEntityTypesResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListMatchedIntentsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListOriginIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListOutputContextsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListPlatformsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListPropertyIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionCommentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionCommentsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionLabelsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionLabelsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionReviewsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionReviewsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListSessionsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListTagsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListTagsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.ListUserIdsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.QueryInput', null, global);
goog.exportSymbol('proto.ondewo.nlu.QueryInput.InputCase', null, global);
goog.exportSymbol('proto.ondewo.nlu.QueryParameters', null, global);
goog.exportSymbol('proto.ondewo.nlu.QueryResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.ResourceView', null, global);
goog.exportSymbol('proto.ondewo.nlu.S2tTranscription', null, global);
goog.exportSymbol('proto.ondewo.nlu.Session', null, global);
goog.exportSymbol('proto.ondewo.nlu.Session.View', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionFilter', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionInfo', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionInfo.ContextSteps', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionReview', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionReview.View', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionReviewStep', null, global);
goog.exportSymbol('proto.ondewo.nlu.SessionStep', null, global);
goog.exportSymbol('proto.ondewo.nlu.StreamingDetectIntentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.StreamingDetectIntentResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.StreamingRecognitionResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.StreamingRecognitionResult.MessageType', null, global);
goog.exportSymbol('proto.ondewo.nlu.TextInput', null, global);
goog.exportSymbol('proto.ondewo.nlu.TranscriptionType', null, global);
goog.exportSymbol('proto.ondewo.nlu.UpdateSessionCommentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.UpdateSessionStepRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.VideoFileResource', null, global);
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
proto.ondewo.nlu.DetectIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DetectIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DetectIntentRequest.displayName = 'proto.ondewo.nlu.DetectIntentRequest';
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
proto.ondewo.nlu.DetectIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DetectIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DetectIntentResponse.displayName = 'proto.ondewo.nlu.DetectIntentResponse';
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
proto.ondewo.nlu.QueryParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.QueryParameters.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.QueryParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.QueryParameters.displayName = 'proto.ondewo.nlu.QueryParameters';
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
proto.ondewo.nlu.S2tTranscription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.S2tTranscription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.S2tTranscription.displayName = 'proto.ondewo.nlu.S2tTranscription';
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
proto.ondewo.nlu.QueryInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.QueryInput.repeatedFields_, proto.ondewo.nlu.QueryInput.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.QueryInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.QueryInput.displayName = 'proto.ondewo.nlu.QueryInput';
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
proto.ondewo.nlu.QueryResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.QueryResult.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.QueryResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.QueryResult.displayName = 'proto.ondewo.nlu.QueryResult';
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
proto.ondewo.nlu.StreamingDetectIntentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.StreamingDetectIntentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.StreamingDetectIntentRequest.displayName = 'proto.ondewo.nlu.StreamingDetectIntentRequest';
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
proto.ondewo.nlu.StreamingDetectIntentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.StreamingDetectIntentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.StreamingDetectIntentResponse.displayName = 'proto.ondewo.nlu.StreamingDetectIntentResponse';
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
proto.ondewo.nlu.StreamingRecognitionResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.StreamingRecognitionResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.StreamingRecognitionResult.displayName = 'proto.ondewo.nlu.StreamingRecognitionResult';
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
proto.ondewo.nlu.InputAudioConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.InputAudioConfig.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.InputAudioConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.InputAudioConfig.displayName = 'proto.ondewo.nlu.InputAudioConfig';
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
proto.ondewo.nlu.TextInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.TextInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.TextInput.displayName = 'proto.ondewo.nlu.TextInput';
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
proto.ondewo.nlu.EventInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.EventInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.EventInput.displayName = 'proto.ondewo.nlu.EventInput';
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
proto.ondewo.nlu.Session = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.Session.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.Session, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.Session.displayName = 'proto.ondewo.nlu.Session';
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
proto.ondewo.nlu.SessionStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionStep.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionStep.displayName = 'proto.ondewo.nlu.SessionStep';
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
proto.ondewo.nlu.GetSessionStepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetSessionStepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetSessionStepRequest.displayName = 'proto.ondewo.nlu.GetSessionStepRequest';
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
proto.ondewo.nlu.UpdateSessionStepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UpdateSessionStepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UpdateSessionStepRequest.displayName = 'proto.ondewo.nlu.UpdateSessionStepRequest';
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
proto.ondewo.nlu.DeleteSessionStepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteSessionStepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteSessionStepRequest.displayName = 'proto.ondewo.nlu.DeleteSessionStepRequest';
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
proto.ondewo.nlu.CreateSessionStepRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CreateSessionStepRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateSessionStepRequest.displayName = 'proto.ondewo.nlu.CreateSessionStepRequest';
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
proto.ondewo.nlu.ListSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionsRequest.displayName = 'proto.ondewo.nlu.ListSessionsRequest';
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
proto.ondewo.nlu.ContextFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ContextFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ContextFilter.displayName = 'proto.ondewo.nlu.ContextFilter';
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
proto.ondewo.nlu.SessionFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionFilter.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionFilter.displayName = 'proto.ondewo.nlu.SessionFilter';
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
proto.ondewo.nlu.SessionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionInfo.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionInfo.displayName = 'proto.ondewo.nlu.SessionInfo';
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
proto.ondewo.nlu.SessionInfo.ContextSteps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionInfo.ContextSteps.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionInfo.ContextSteps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionInfo.ContextSteps.displayName = 'proto.ondewo.nlu.SessionInfo.ContextSteps';
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
proto.ondewo.nlu.ListSessionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListSessionsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionsResponse.displayName = 'proto.ondewo.nlu.ListSessionsResponse';
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
proto.ondewo.nlu.GetSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetSessionRequest.displayName = 'proto.ondewo.nlu.GetSessionRequest';
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
proto.ondewo.nlu.CreateSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.CreateSessionRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.CreateSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateSessionRequest.displayName = 'proto.ondewo.nlu.CreateSessionRequest';
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
proto.ondewo.nlu.DeleteSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DeleteSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteSessionRequest.displayName = 'proto.ondewo.nlu.DeleteSessionRequest';
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
proto.ondewo.nlu.CreateSessionReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.CreateSessionReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.CreateSessionReviewRequest.displayName = 'proto.ondewo.nlu.CreateSessionReviewRequest';
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
proto.ondewo.nlu.SessionReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionReview.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionReview.displayName = 'proto.ondewo.nlu.SessionReview';
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
proto.ondewo.nlu.SessionReviewStep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.SessionReviewStep.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.SessionReviewStep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.SessionReviewStep.displayName = 'proto.ondewo.nlu.SessionReviewStep';
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
proto.ondewo.nlu.DetectedIntent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.DetectedIntent.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.DetectedIntent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DetectedIntent.displayName = 'proto.ondewo.nlu.DetectedIntent';
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
proto.ondewo.nlu.ListSessionLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionLabelsRequest.displayName = 'proto.ondewo.nlu.ListSessionLabelsRequest';
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
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListSessionLabelsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListSessionLabelsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionLabelsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionLabelsResponse.displayName = 'proto.ondewo.nlu.ListSessionLabelsResponse';
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
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest';
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
proto.ondewo.nlu.ListLanguageCodesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListLanguageCodesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListLanguageCodesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListLanguageCodesResponse.displayName = 'proto.ondewo.nlu.ListLanguageCodesResponse';
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
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListMatchedIntentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListMatchedIntentsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListMatchedIntentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListMatchedIntentsResponse.displayName = 'proto.ondewo.nlu.ListMatchedIntentsResponse';
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
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest';
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
proto.ondewo.nlu.ListMatchedEntityTypesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListMatchedEntityTypesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListMatchedEntityTypesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListMatchedEntityTypesResponse.displayName = 'proto.ondewo.nlu.ListMatchedEntityTypesResponse';
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
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListUserIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListUserIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListUserIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListUserIdsResponse.displayName = 'proto.ondewo.nlu.ListUserIdsResponse';
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
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListIdentifiedUserIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListIdentifiedUserIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListIdentifiedUserIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListIdentifiedUserIdsResponse.displayName = 'proto.ondewo.nlu.ListIdentifiedUserIdsResponse';
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
proto.ondewo.nlu.ListTagsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListTagsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListTagsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListTagsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListTagsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListTagsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListTagsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListTagsResponse.displayName = 'proto.ondewo.nlu.ListTagsResponse';
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
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListInputContextsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListInputContextsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListInputContextsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListInputContextsResponse.displayName = 'proto.ondewo.nlu.ListInputContextsResponse';
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
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListOutputContextsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListOutputContextsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListOutputContextsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListOutputContextsResponse.displayName = 'proto.ondewo.nlu.ListOutputContextsResponse';
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
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListPlatformsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListPlatformsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListPlatformsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListPlatformsResponse.displayName = 'proto.ondewo.nlu.ListPlatformsResponse';
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
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListAccountIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListAccountIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListAccountIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAccountIdsResponse.displayName = 'proto.ondewo.nlu.ListAccountIdsResponse';
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
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListPropertyIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListPropertyIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListPropertyIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListPropertyIdsResponse.displayName = 'proto.ondewo.nlu.ListPropertyIdsResponse';
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
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListDatastreamIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListDatastreamIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListDatastreamIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListDatastreamIdsResponse.displayName = 'proto.ondewo.nlu.ListDatastreamIdsResponse';
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
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.displayName = 'proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest';
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
proto.ondewo.nlu.ListOriginIdsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListOriginIdsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListOriginIdsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListOriginIdsResponse.displayName = 'proto.ondewo.nlu.ListOriginIdsResponse';
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
proto.ondewo.nlu.AddSessionLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.AddSessionLabelsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.AddSessionLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AddSessionLabelsRequest.displayName = 'proto.ondewo.nlu.AddSessionLabelsRequest';
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
proto.ondewo.nlu.DeleteSessionLabelsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.DeleteSessionLabelsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.DeleteSessionLabelsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteSessionLabelsRequest.displayName = 'proto.ondewo.nlu.DeleteSessionLabelsRequest';
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
proto.ondewo.nlu.AddSessionCommentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.AddSessionCommentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AddSessionCommentRequest.displayName = 'proto.ondewo.nlu.AddSessionCommentRequest';
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
proto.ondewo.nlu.DeleteSessionCommentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.DeleteSessionCommentsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.DeleteSessionCommentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteSessionCommentsRequest.displayName = 'proto.ondewo.nlu.DeleteSessionCommentsRequest';
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
proto.ondewo.nlu.UpdateSessionCommentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.UpdateSessionCommentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.UpdateSessionCommentsRequest.displayName = 'proto.ondewo.nlu.UpdateSessionCommentsRequest';
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
proto.ondewo.nlu.ListSessionCommentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionCommentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionCommentsRequest.displayName = 'proto.ondewo.nlu.ListSessionCommentsRequest';
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
proto.ondewo.nlu.ListSessionCommentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListSessionCommentsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionCommentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionCommentsResponse.displayName = 'proto.ondewo.nlu.ListSessionCommentsResponse';
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
proto.ondewo.nlu.ListSessionReviewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionReviewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionReviewsRequest.displayName = 'proto.ondewo.nlu.ListSessionReviewsRequest';
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
proto.ondewo.nlu.ListSessionReviewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListSessionReviewsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListSessionReviewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListSessionReviewsResponse.displayName = 'proto.ondewo.nlu.ListSessionReviewsResponse';
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
proto.ondewo.nlu.GetSessionReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetSessionReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetSessionReviewRequest.displayName = 'proto.ondewo.nlu.GetSessionReviewRequest';
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
proto.ondewo.nlu.GetLatestSessionReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetLatestSessionReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetLatestSessionReviewRequest.displayName = 'proto.ondewo.nlu.GetLatestSessionReviewRequest';
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
proto.ondewo.nlu.FileResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ondewo.nlu.FileResource.oneofGroups_);
};
goog.inherits(proto.ondewo.nlu.FileResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.FileResource.displayName = 'proto.ondewo.nlu.FileResource';
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
proto.ondewo.nlu.DocumentFileResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.DocumentFileResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DocumentFileResource.displayName = 'proto.ondewo.nlu.DocumentFileResource';
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
proto.ondewo.nlu.ImageFileResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ImageFileResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ImageFileResource.displayName = 'proto.ondewo.nlu.ImageFileResource';
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
proto.ondewo.nlu.AudioFileResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.AudioFileResource.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.AudioFileResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AudioFileResource.displayName = 'proto.ondewo.nlu.AudioFileResource';
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
proto.ondewo.nlu.VideoFileResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.VideoFileResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.VideoFileResource.displayName = 'proto.ondewo.nlu.VideoFileResource';
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
proto.ondewo.nlu.GetAudioFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.GetAudioFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.GetAudioFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAudioFilesRequest.displayName = 'proto.ondewo.nlu.GetAudioFilesRequest';
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
proto.ondewo.nlu.GetAudioFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.GetAudioFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.GetAudioFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAudioFilesResponse.displayName = 'proto.ondewo.nlu.GetAudioFilesResponse';
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
proto.ondewo.nlu.AddAudioFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.AddAudioFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.AddAudioFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AddAudioFilesRequest.displayName = 'proto.ondewo.nlu.AddAudioFilesRequest';
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
proto.ondewo.nlu.AddAudioFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.AddAudioFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.AddAudioFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.AddAudioFilesResponse.displayName = 'proto.ondewo.nlu.AddAudioFilesResponse';
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
proto.ondewo.nlu.DeleteAudioFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.DeleteAudioFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.DeleteAudioFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteAudioFilesRequest.displayName = 'proto.ondewo.nlu.DeleteAudioFilesRequest';
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
proto.ondewo.nlu.DeleteAudioFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.DeleteAudioFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.DeleteAudioFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.DeleteAudioFilesResponse.displayName = 'proto.ondewo.nlu.DeleteAudioFilesResponse';
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
proto.ondewo.nlu.ListAudioFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.ListAudioFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAudioFilesRequest.displayName = 'proto.ondewo.nlu.ListAudioFilesRequest';
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
proto.ondewo.nlu.ListAudioFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.ListAudioFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.ListAudioFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.ListAudioFilesResponse.displayName = 'proto.ondewo.nlu.ListAudioFilesResponse';
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
proto.ondewo.nlu.GetAudioFileOfSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.GetAudioFileOfSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.GetAudioFileOfSessionRequest.displayName = 'proto.ondewo.nlu.GetAudioFileOfSessionRequest';
}



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
proto.ondewo.nlu.DetectIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DetectIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DetectIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
session: jspb.Message.getFieldWithDefault(msg, 1, ""),
queryParams: (f = msg.getQueryParams()) && proto.ondewo.nlu.QueryParameters.toObject(includeInstance, f),
queryInput: (f = msg.getQueryInput()) && proto.ondewo.nlu.QueryInput.toObject(includeInstance, f),
inputAudio: msg.getInputAudio_asB64()
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
 * @return {!proto.ondewo.nlu.DetectIntentRequest}
 */
proto.ondewo.nlu.DetectIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DetectIntentRequest;
  return proto.ondewo.nlu.DetectIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DetectIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DetectIntentRequest}
 */
proto.ondewo.nlu.DetectIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.QueryParameters;
      reader.readMessage(value,proto.ondewo.nlu.QueryParameters.deserializeBinaryFromReader);
      msg.setQueryParams(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.QueryInput;
      reader.readMessage(value,proto.ondewo.nlu.QueryInput.deserializeBinaryFromReader);
      msg.setQueryInput(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputAudio(value);
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
proto.ondewo.nlu.DetectIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DetectIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DetectIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.QueryParameters.serializeBinaryToWriter
    );
  }
  f = message.getQueryInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.QueryInput.serializeBinaryToWriter
    );
  }
  f = message.getInputAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string session = 1;
 * @return {string}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryParameters query_params = 2;
 * @return {?proto.ondewo.nlu.QueryParameters}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getQueryParams = function() {
  return /** @type{?proto.ondewo.nlu.QueryParameters} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryParameters, 2));
};


/**
 * @param {?proto.ondewo.nlu.QueryParameters|undefined} value
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
*/
proto.ondewo.nlu.DetectIntentRequest.prototype.setQueryParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.clearQueryParams = function() {
  return this.setQueryParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.hasQueryParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QueryInput query_input = 3;
 * @return {?proto.ondewo.nlu.QueryInput}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getQueryInput = function() {
  return /** @type{?proto.ondewo.nlu.QueryInput} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryInput, 3));
};


/**
 * @param {?proto.ondewo.nlu.QueryInput|undefined} value
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
*/
proto.ondewo.nlu.DetectIntentRequest.prototype.setQueryInput = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.clearQueryInput = function() {
  return this.setQueryInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.hasQueryInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes input_audio = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getInputAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes input_audio = 5;
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {string}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getInputAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputAudio()));
};


/**
 * optional bytes input_audio = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.getInputAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.DetectIntentRequest} returns this
 */
proto.ondewo.nlu.DetectIntentRequest.prototype.setInputAudio = function(value) {
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
proto.ondewo.nlu.DetectIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DetectIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DetectIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
responseId: jspb.Message.getFieldWithDefault(msg, 1, ""),
queryResult: (f = msg.getQueryResult()) && proto.ondewo.nlu.QueryResult.toObject(includeInstance, f),
webhookStatus: (f = msg.getWebhookStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.DetectIntentResponse}
 */
proto.ondewo.nlu.DetectIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DetectIntentResponse;
  return proto.ondewo.nlu.DetectIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DetectIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DetectIntentResponse}
 */
proto.ondewo.nlu.DetectIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseId(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.QueryResult;
      reader.readMessage(value,proto.ondewo.nlu.QueryResult.deserializeBinaryFromReader);
      msg.setQueryResult(value);
      break;
    case 3:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setWebhookStatus(value);
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
proto.ondewo.nlu.DetectIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DetectIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DetectIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.QueryResult.serializeBinaryToWriter
    );
  }
  f = message.getWebhookStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string response_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.getResponseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DetectIntentResponse} returns this
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.setResponseId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryResult query_result = 2;
 * @return {?proto.ondewo.nlu.QueryResult}
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.getQueryResult = function() {
  return /** @type{?proto.ondewo.nlu.QueryResult} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryResult, 2));
};


/**
 * @param {?proto.ondewo.nlu.QueryResult|undefined} value
 * @return {!proto.ondewo.nlu.DetectIntentResponse} returns this
*/
proto.ondewo.nlu.DetectIntentResponse.prototype.setQueryResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DetectIntentResponse} returns this
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.clearQueryResult = function() {
  return this.setQueryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.hasQueryResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.rpc.Status webhook_status = 3;
 * @return {?proto.google.rpc.Status}
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.getWebhookStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 3));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.ondewo.nlu.DetectIntentResponse} returns this
*/
proto.ondewo.nlu.DetectIntentResponse.prototype.setWebhookStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DetectIntentResponse} returns this
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.clearWebhookStatus = function() {
  return this.setWebhookStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DetectIntentResponse.prototype.hasWebhookStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.QueryParameters.repeatedFields_ = [3,7,8,14];



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
proto.ondewo.nlu.QueryParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.QueryParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.QueryParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
timeZone: jspb.Message.getFieldWithDefault(msg, 1, ""),
geoLocation: (f = msg.getGeoLocation()) && google_type_latlng_pb.LatLng.toObject(includeInstance, f),
contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
resetContexts: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
payload: (f = msg.getPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
labelsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
platformsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
accountId: jspb.Message.getFieldWithDefault(msg, 9, ""),
propertyId: jspb.Message.getFieldWithDefault(msg, 10, ""),
datastreamId: jspb.Message.getFieldWithDefault(msg, 11, ""),
originId: jspb.Message.getFieldWithDefault(msg, 12, ""),
identifiedUserId: jspb.Message.getFieldWithDefault(msg, 13, ""),
transcriptionsList: jspb.Message.toObjectList(msg.getTranscriptionsList(),
    proto.ondewo.nlu.S2tTranscription.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.QueryParameters}
 */
proto.ondewo.nlu.QueryParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.QueryParameters;
  return proto.ondewo.nlu.QueryParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.QueryParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.QueryParameters}
 */
proto.ondewo.nlu.QueryParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimeZone(value);
      break;
    case 2:
      var value = new google_type_latlng_pb.LatLng;
      reader.readMessage(value,google_type_latlng_pb.LatLng.deserializeBinaryFromReader);
      msg.setGeoLocation(value);
      break;
    case 3:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResetContexts(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setPayload(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 8:
      var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatforms(values[i]);
      }
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPropertyId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatastreamId(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentifiedUserId(value);
      break;
    case 14:
      var value = new proto.ondewo.nlu.S2tTranscription;
      reader.readMessage(value,proto.ondewo.nlu.S2tTranscription.deserializeBinaryFromReader);
      msg.addTranscriptions(value);
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
proto.ondewo.nlu.QueryParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.QueryParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.QueryParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeZone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGeoLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_type_latlng_pb.LatLng.serializeBinaryToWriter
    );
  }
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getResetContexts();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
  f = message.getAccountId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPropertyId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDatastreamId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getOriginId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getIdentifiedUserId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTranscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.ondewo.nlu.S2tTranscription.serializeBinaryToWriter
    );
  }
};


/**
 * optional string time_zone = 1;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getTimeZone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setTimeZone = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.type.LatLng geo_location = 2;
 * @return {?proto.google.type.LatLng}
 */
proto.ondewo.nlu.QueryParameters.prototype.getGeoLocation = function() {
  return /** @type{?proto.google.type.LatLng} */ (
    jspb.Message.getWrapperField(this, google_type_latlng_pb.LatLng, 2));
};


/**
 * @param {?proto.google.type.LatLng|undefined} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
*/
proto.ondewo.nlu.QueryParameters.prototype.setGeoLocation = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearGeoLocation = function() {
  return this.setGeoLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryParameters.prototype.hasGeoLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Context contexts = 3;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.QueryParameters.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
*/
proto.ondewo.nlu.QueryParameters.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.QueryParameters.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearContextsList = function() {
  return this.setContextsList([]);
};


/**
 * optional bool reset_contexts = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.QueryParameters.prototype.getResetContexts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setResetContexts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Struct payload = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.QueryParameters.prototype.getPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
*/
proto.ondewo.nlu.QueryParameters.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryParameters.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string labels = 7;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.QueryParameters.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated Intent.Message.Platform platforms = 8;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.nlu.QueryParameters.prototype.getPlatformsList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
};


/**
 * optional string account_id = 9;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getAccountId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string property_id = 10;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getPropertyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setPropertyId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string datastream_id = 11;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getDatastreamId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setDatastreamId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string origin_id = 12;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getOriginId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setOriginId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string identified_user_id = 13;
 * @return {string}
 */
proto.ondewo.nlu.QueryParameters.prototype.getIdentifiedUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.setIdentifiedUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated S2tTranscription transcriptions = 14;
 * @return {!Array<!proto.ondewo.nlu.S2tTranscription>}
 */
proto.ondewo.nlu.QueryParameters.prototype.getTranscriptionsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.S2tTranscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.S2tTranscription, 14));
};


/**
 * @param {!Array<!proto.ondewo.nlu.S2tTranscription>} value
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
*/
proto.ondewo.nlu.QueryParameters.prototype.setTranscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.ondewo.nlu.S2tTranscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.S2tTranscription}
 */
proto.ondewo.nlu.QueryParameters.prototype.addTranscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.ondewo.nlu.S2tTranscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryParameters} returns this
 */
proto.ondewo.nlu.QueryParameters.prototype.clearTranscriptionsList = function() {
  return this.setTranscriptionsList([]);
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
proto.ondewo.nlu.S2tTranscription.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.S2tTranscription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.S2tTranscription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.S2tTranscription.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
text: jspb.Message.getFieldWithDefault(msg, 2, ""),
score: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
languageCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
audioResourceName: jspb.Message.getFieldWithDefault(msg, 5, ""),
pipelineId: jspb.Message.getFieldWithDefault(msg, 6, ""),
durationInS: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
transcriptionType: jspb.Message.getFieldWithDefault(msg, 8, 0),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 11, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.ondewo.nlu.S2tTranscription}
 */
proto.ondewo.nlu.S2tTranscription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.S2tTranscription;
  return proto.ondewo.nlu.S2tTranscription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.S2tTranscription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.S2tTranscription}
 */
proto.ondewo.nlu.S2tTranscription.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAudioResourceName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPipelineId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInS(value);
      break;
    case 8:
      var value = /** @type {!proto.ondewo.nlu.TranscriptionType} */ (reader.readEnum());
      msg.setTranscriptionType(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 12:
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
proto.ondewo.nlu.S2tTranscription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.S2tTranscription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.S2tTranscription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.S2tTranscription.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
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
  f = message.getAudioResourceName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPipelineId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDurationInS();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getTranscriptionType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float score = 3;
 * @return {number}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string language_code = 4;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string audio_resource_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getAudioResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setAudioResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string pipeline_id = 6;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getPipelineId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setPipelineId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float duration_in_s = 7;
 * @return {number}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getDurationInS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setDurationInS = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional TranscriptionType transcription_type = 8;
 * @return {!proto.ondewo.nlu.TranscriptionType}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getTranscriptionType = function() {
  return /** @type {!proto.ondewo.nlu.TranscriptionType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.TranscriptionType} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setTranscriptionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
*/
proto.ondewo.nlu.S2tTranscription.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.S2tTranscription.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
*/
proto.ondewo.nlu.S2tTranscription.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.S2tTranscription.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string created_by = 11;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string modified_by = 12;
 * @return {string}
 */
proto.ondewo.nlu.S2tTranscription.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.S2tTranscription} returns this
 */
proto.ondewo.nlu.S2tTranscription.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.QueryInput.repeatedFields_ = [4];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.QueryInput.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.QueryInput.InputCase = {
  INPUT_NOT_SET: 0,
  AUDIO_CONFIG: 1,
  TEXT: 2,
  EVENT: 3
};

/**
 * @return {proto.ondewo.nlu.QueryInput.InputCase}
 */
proto.ondewo.nlu.QueryInput.prototype.getInputCase = function() {
  return /** @type {proto.ondewo.nlu.QueryInput.InputCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.QueryInput.oneofGroups_[0]));
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
proto.ondewo.nlu.QueryInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.QueryInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.QueryInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryInput.toObject = function(includeInstance, msg) {
  var f, obj = {
audioConfig: (f = msg.getAudioConfig()) && proto.ondewo.nlu.InputAudioConfig.toObject(includeInstance, f),
text: (f = msg.getText()) && proto.ondewo.nlu.TextInput.toObject(includeInstance, f),
event: (f = msg.getEvent()) && proto.ondewo.nlu.EventInput.toObject(includeInstance, f),
fileResourcesList: jspb.Message.toObjectList(msg.getFileResourcesList(),
    proto.ondewo.nlu.FileResource.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.QueryInput}
 */
proto.ondewo.nlu.QueryInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.QueryInput;
  return proto.ondewo.nlu.QueryInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.QueryInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.QueryInput}
 */
proto.ondewo.nlu.QueryInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.InputAudioConfig;
      reader.readMessage(value,proto.ondewo.nlu.InputAudioConfig.deserializeBinaryFromReader);
      msg.setAudioConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.TextInput;
      reader.readMessage(value,proto.ondewo.nlu.TextInput.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.EventInput;
      reader.readMessage(value,proto.ondewo.nlu.EventInput.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.FileResource;
      reader.readMessage(value,proto.ondewo.nlu.FileResource.deserializeBinaryFromReader);
      msg.addFileResources(value);
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
proto.ondewo.nlu.QueryInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.QueryInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.QueryInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.InputAudioConfig.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.TextInput.serializeBinaryToWriter
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.EventInput.serializeBinaryToWriter
    );
  }
  f = message.getFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ondewo.nlu.FileResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional InputAudioConfig audio_config = 1;
 * @return {?proto.ondewo.nlu.InputAudioConfig}
 */
proto.ondewo.nlu.QueryInput.prototype.getAudioConfig = function() {
  return /** @type{?proto.ondewo.nlu.InputAudioConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.InputAudioConfig, 1));
};


/**
 * @param {?proto.ondewo.nlu.InputAudioConfig|undefined} value
 * @return {!proto.ondewo.nlu.QueryInput} returns this
*/
proto.ondewo.nlu.QueryInput.prototype.setAudioConfig = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ondewo.nlu.QueryInput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryInput} returns this
 */
proto.ondewo.nlu.QueryInput.prototype.clearAudioConfig = function() {
  return this.setAudioConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryInput.prototype.hasAudioConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TextInput text = 2;
 * @return {?proto.ondewo.nlu.TextInput}
 */
proto.ondewo.nlu.QueryInput.prototype.getText = function() {
  return /** @type{?proto.ondewo.nlu.TextInput} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.TextInput, 2));
};


/**
 * @param {?proto.ondewo.nlu.TextInput|undefined} value
 * @return {!proto.ondewo.nlu.QueryInput} returns this
*/
proto.ondewo.nlu.QueryInput.prototype.setText = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.nlu.QueryInput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryInput} returns this
 */
proto.ondewo.nlu.QueryInput.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryInput.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EventInput event = 3;
 * @return {?proto.ondewo.nlu.EventInput}
 */
proto.ondewo.nlu.QueryInput.prototype.getEvent = function() {
  return /** @type{?proto.ondewo.nlu.EventInput} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.EventInput, 3));
};


/**
 * @param {?proto.ondewo.nlu.EventInput|undefined} value
 * @return {!proto.ondewo.nlu.QueryInput} returns this
*/
proto.ondewo.nlu.QueryInput.prototype.setEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.nlu.QueryInput.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryInput} returns this
 */
proto.ondewo.nlu.QueryInput.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryInput.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated FileResource file_resources = 4;
 * @return {!Array<!proto.ondewo.nlu.FileResource>}
 */
proto.ondewo.nlu.QueryInput.prototype.getFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FileResource, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FileResource>} value
 * @return {!proto.ondewo.nlu.QueryInput} returns this
*/
proto.ondewo.nlu.QueryInput.prototype.setFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.FileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FileResource}
 */
proto.ondewo.nlu.QueryInput.prototype.addFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.FileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryInput} returns this
 */
proto.ondewo.nlu.QueryInput.prototype.clearFileResourcesList = function() {
  return this.setFileResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.QueryResult.repeatedFields_ = [7,10,16];



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
proto.ondewo.nlu.QueryResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.QueryResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.QueryResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryResult.toObject = function(includeInstance, msg) {
  var f, obj = {
queryText: jspb.Message.getFieldWithDefault(msg, 1, ""),
speechRecognitionConfidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
action: jspb.Message.getFieldWithDefault(msg, 3, ""),
parameters: (f = msg.getParameters()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
allRequiredParamsPresent: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
fulfillmentText: jspb.Message.getFieldWithDefault(msg, 6, ""),
fulfillmentMessagesList: jspb.Message.toObjectList(msg.getFulfillmentMessagesList(),
    ondewo_nlu_intent_pb.Intent.Message.toObject, includeInstance),
webhookSource: jspb.Message.getFieldWithDefault(msg, 8, ""),
webhookPayload: (f = msg.getWebhookPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
outputContextsList: jspb.Message.toObjectList(msg.getOutputContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
intent: (f = msg.getIntent()) && ondewo_nlu_intent_pb.Intent.toObject(includeInstance, f),
intentDetectionConfidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
queryTextOriginal: jspb.Message.getFieldWithDefault(msg, 13, ""),
diagnosticInfo: (f = msg.getDiagnosticInfo()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
languageCode: jspb.Message.getFieldWithDefault(msg, 15, ""),
fileResourcesList: jspb.Message.toObjectList(msg.getFileResourcesList(),
    proto.ondewo.nlu.FileResource.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.QueryResult}
 */
proto.ondewo.nlu.QueryResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.QueryResult;
  return proto.ondewo.nlu.QueryResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.QueryResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.QueryResult}
 */
proto.ondewo.nlu.QueryResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSpeechRecognitionConfidence(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllRequiredParamsPresent(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFulfillmentText(value);
      break;
    case 7:
      var value = new ondewo_nlu_intent_pb.Intent.Message;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.Message.deserializeBinaryFromReader);
      msg.addFulfillmentMessages(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebhookSource(value);
      break;
    case 9:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setWebhookPayload(value);
      break;
    case 10:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addOutputContexts(value);
      break;
    case 11:
      var value = new ondewo_nlu_intent_pb.Intent;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setIntentDetectionConfidence(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryTextOriginal(value);
      break;
    case 14:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setDiagnosticInfo(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 16:
      var value = new proto.ondewo.nlu.FileResource;
      reader.readMessage(value,proto.ondewo.nlu.FileResource.deserializeBinaryFromReader);
      msg.addFileResources(value);
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
proto.ondewo.nlu.QueryResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.QueryResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.QueryResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.QueryResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueryText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSpeechRecognitionConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getAllRequiredParamsPresent();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFulfillmentText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFulfillmentMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      ondewo_nlu_intent_pb.Intent.Message.serializeBinaryToWriter
    );
  }
  f = message.getWebhookSource();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getWebhookPayload();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      ondewo_nlu_intent_pb.Intent.serializeBinaryToWriter
    );
  }
  f = message.getIntentDetectionConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      12,
      f
    );
  }
  f = message.getQueryTextOriginal();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getDiagnosticInfo();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.ondewo.nlu.FileResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string query_text = 1;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getQueryText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setQueryText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float speech_recognition_confidence = 2;
 * @return {number}
 */
proto.ondewo.nlu.QueryResult.prototype.getSpeechRecognitionConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setSpeechRecognitionConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string action = 3;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Struct parameters = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.QueryResult.prototype.getParameters = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryResult.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool all_required_params_present = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.QueryResult.prototype.getAllRequiredParamsPresent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setAllRequiredParamsPresent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string fulfillment_text = 6;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getFulfillmentText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setFulfillmentText = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Intent.Message fulfillment_messages = 7;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message>}
 */
proto.ondewo.nlu.QueryResult.prototype.getFulfillmentMessagesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_intent_pb.Intent.Message, 7));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message>} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setFulfillmentMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.QueryResult.prototype.addFulfillmentMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ondewo.nlu.Intent.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearFulfillmentMessagesList = function() {
  return this.setFulfillmentMessagesList([]);
};


/**
 * optional string webhook_source = 8;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getWebhookSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setWebhookSource = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional google.protobuf.Struct webhook_payload = 9;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.QueryResult.prototype.getWebhookPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 9));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setWebhookPayload = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearWebhookPayload = function() {
  return this.setWebhookPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryResult.prototype.hasWebhookPayload = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated Context output_contexts = 10;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.QueryResult.prototype.getOutputContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 10));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setOutputContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.QueryResult.prototype.addOutputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearOutputContextsList = function() {
  return this.setOutputContextsList([]);
};


/**
 * optional Intent intent = 11;
 * @return {?proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.QueryResult.prototype.getIntent = function() {
  return /** @type{?proto.ondewo.nlu.Intent} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_intent_pb.Intent, 11));
};


/**
 * @param {?proto.ondewo.nlu.Intent|undefined} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setIntent = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearIntent = function() {
  return this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryResult.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional float intent_detection_confidence = 12;
 * @return {number}
 */
proto.ondewo.nlu.QueryResult.prototype.getIntentDetectionConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setIntentDetectionConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional string query_text_original = 13;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getQueryTextOriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setQueryTextOriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional google.protobuf.Struct diagnostic_info = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.QueryResult.prototype.getDiagnosticInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setDiagnosticInfo = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearDiagnosticInfo = function() {
  return this.setDiagnosticInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.QueryResult.prototype.hasDiagnosticInfo = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string language_code = 15;
 * @return {string}
 */
proto.ondewo.nlu.QueryResult.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated FileResource file_resources = 16;
 * @return {!Array<!proto.ondewo.nlu.FileResource>}
 */
proto.ondewo.nlu.QueryResult.prototype.getFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.FileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.FileResource, 16));
};


/**
 * @param {!Array<!proto.ondewo.nlu.FileResource>} value
 * @return {!proto.ondewo.nlu.QueryResult} returns this
*/
proto.ondewo.nlu.QueryResult.prototype.setFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.ondewo.nlu.FileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.FileResource}
 */
proto.ondewo.nlu.QueryResult.prototype.addFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.ondewo.nlu.FileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.QueryResult} returns this
 */
proto.ondewo.nlu.QueryResult.prototype.clearFileResourcesList = function() {
  return this.setFileResourcesList([]);
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
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.StreamingDetectIntentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.StreamingDetectIntentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
session: jspb.Message.getFieldWithDefault(msg, 1, ""),
queryParams: (f = msg.getQueryParams()) && proto.ondewo.nlu.QueryParameters.toObject(includeInstance, f),
queryInput: (f = msg.getQueryInput()) && proto.ondewo.nlu.QueryInput.toObject(includeInstance, f),
singleUtterance: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
inputAudio: msg.getInputAudio_asB64()
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
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.StreamingDetectIntentRequest;
  return proto.ondewo.nlu.StreamingDetectIntentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.StreamingDetectIntentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.QueryParameters;
      reader.readMessage(value,proto.ondewo.nlu.QueryParameters.deserializeBinaryFromReader);
      msg.setQueryParams(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.QueryInput;
      reader.readMessage(value,proto.ondewo.nlu.QueryInput.deserializeBinaryFromReader);
      msg.setQueryInput(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingleUtterance(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputAudio(value);
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
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.StreamingDetectIntentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.StreamingDetectIntentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getQueryParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.QueryParameters.serializeBinaryToWriter
    );
  }
  f = message.getQueryInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.QueryInput.serializeBinaryToWriter
    );
  }
  f = message.getSingleUtterance();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getInputAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional string session = 1;
 * @return {string}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional QueryParameters query_params = 2;
 * @return {?proto.ondewo.nlu.QueryParameters}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getQueryParams = function() {
  return /** @type{?proto.ondewo.nlu.QueryParameters} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryParameters, 2));
};


/**
 * @param {?proto.ondewo.nlu.QueryParameters|undefined} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
*/
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.setQueryParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.clearQueryParams = function() {
  return this.setQueryParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.hasQueryParams = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QueryInput query_input = 3;
 * @return {?proto.ondewo.nlu.QueryInput}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getQueryInput = function() {
  return /** @type{?proto.ondewo.nlu.QueryInput} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryInput, 3));
};


/**
 * @param {?proto.ondewo.nlu.QueryInput|undefined} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
*/
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.setQueryInput = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.clearQueryInput = function() {
  return this.setQueryInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.hasQueryInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool single_utterance = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getSingleUtterance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.setSingleUtterance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bytes input_audio = 6;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getInputAudio = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes input_audio = 6;
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {string}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getInputAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputAudio()));
};


/**
 * optional bytes input_audio = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.getInputAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentRequest} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentRequest.prototype.setInputAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
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
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.StreamingDetectIntentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.StreamingDetectIntentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
responseId: jspb.Message.getFieldWithDefault(msg, 1, ""),
recognitionResult: (f = msg.getRecognitionResult()) && proto.ondewo.nlu.StreamingRecognitionResult.toObject(includeInstance, f),
queryResult: (f = msg.getQueryResult()) && proto.ondewo.nlu.QueryResult.toObject(includeInstance, f),
webhookStatus: (f = msg.getWebhookStatus()) && google_rpc_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.StreamingDetectIntentResponse;
  return proto.ondewo.nlu.StreamingDetectIntentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.StreamingDetectIntentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseId(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.StreamingRecognitionResult;
      reader.readMessage(value,proto.ondewo.nlu.StreamingRecognitionResult.deserializeBinaryFromReader);
      msg.setRecognitionResult(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.QueryResult;
      reader.readMessage(value,proto.ondewo.nlu.QueryResult.deserializeBinaryFromReader);
      msg.setQueryResult(value);
      break;
    case 4:
      var value = new google_rpc_status_pb.Status;
      reader.readMessage(value,google_rpc_status_pb.Status.deserializeBinaryFromReader);
      msg.setWebhookStatus(value);
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
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.StreamingDetectIntentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.StreamingDetectIntentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponseId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecognitionResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.StreamingRecognitionResult.serializeBinaryToWriter
    );
  }
  f = message.getQueryResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.QueryResult.serializeBinaryToWriter
    );
  }
  f = message.getWebhookStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_rpc_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string response_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.getResponseId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.setResponseId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional StreamingRecognitionResult recognition_result = 2;
 * @return {?proto.ondewo.nlu.StreamingRecognitionResult}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.getRecognitionResult = function() {
  return /** @type{?proto.ondewo.nlu.StreamingRecognitionResult} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.StreamingRecognitionResult, 2));
};


/**
 * @param {?proto.ondewo.nlu.StreamingRecognitionResult|undefined} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
*/
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.setRecognitionResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.clearRecognitionResult = function() {
  return this.setRecognitionResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.hasRecognitionResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional QueryResult query_result = 3;
 * @return {?proto.ondewo.nlu.QueryResult}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.getQueryResult = function() {
  return /** @type{?proto.ondewo.nlu.QueryResult} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.QueryResult, 3));
};


/**
 * @param {?proto.ondewo.nlu.QueryResult|undefined} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
*/
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.setQueryResult = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.clearQueryResult = function() {
  return this.setQueryResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.hasQueryResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.rpc.Status webhook_status = 4;
 * @return {?proto.google.rpc.Status}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.getWebhookStatus = function() {
  return /** @type{?proto.google.rpc.Status} */ (
    jspb.Message.getWrapperField(this, google_rpc_status_pb.Status, 4));
};


/**
 * @param {?proto.google.rpc.Status|undefined} value
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
*/
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.setWebhookStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.StreamingDetectIntentResponse} returns this
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.clearWebhookStatus = function() {
  return this.setWebhookStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingDetectIntentResponse.prototype.hasWebhookStatus = function() {
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
proto.ondewo.nlu.StreamingRecognitionResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.StreamingRecognitionResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.StreamingRecognitionResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingRecognitionResult.toObject = function(includeInstance, msg) {
  var f, obj = {
messageType: jspb.Message.getFieldWithDefault(msg, 1, 0),
transcript: jspb.Message.getFieldWithDefault(msg, 2, ""),
isFinal: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
confidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult}
 */
proto.ondewo.nlu.StreamingRecognitionResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.StreamingRecognitionResult;
  return proto.ondewo.nlu.StreamingRecognitionResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.StreamingRecognitionResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult}
 */
proto.ondewo.nlu.StreamingRecognitionResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.StreamingRecognitionResult.MessageType} */ (reader.readEnum());
      msg.setMessageType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTranscript(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFinal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setConfidence(value);
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
proto.ondewo.nlu.StreamingRecognitionResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.StreamingRecognitionResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.StreamingRecognitionResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.StreamingRecognitionResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getTranscript();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsFinal();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.StreamingRecognitionResult.MessageType = {
  MESSAGE_TYPE_UNSPECIFIED: 0,
  TRANSCRIPT: 1,
  END_OF_SINGLE_UTTERANCE: 2
};

/**
 * optional MessageType message_type = 1;
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult.MessageType}
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.getMessageType = function() {
  return /** @type {!proto.ondewo.nlu.StreamingRecognitionResult.MessageType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.StreamingRecognitionResult.MessageType} value
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult} returns this
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.setMessageType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string transcript = 2;
 * @return {string}
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.getTranscript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult} returns this
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.setTranscript = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_final = 3;
 * @return {boolean}
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.getIsFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult} returns this
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.setIsFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional float confidence = 4;
 * @return {number}
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.getConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.StreamingRecognitionResult} returns this
 */
proto.ondewo.nlu.StreamingRecognitionResult.prototype.setConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.InputAudioConfig.repeatedFields_ = [4];



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
proto.ondewo.nlu.InputAudioConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.InputAudioConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.InputAudioConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.InputAudioConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
audioEncoding: jspb.Message.getFieldWithDefault(msg, 1, 0),
sampleRateHertz: jspb.Message.getFieldWithDefault(msg, 2, 0),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
phraseHintsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.InputAudioConfig}
 */
proto.ondewo.nlu.InputAudioConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.InputAudioConfig;
  return proto.ondewo.nlu.InputAudioConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.InputAudioConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.InputAudioConfig}
 */
proto.ondewo.nlu.InputAudioConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.AudioEncoding} */ (reader.readEnum());
      msg.setAudioEncoding(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleRateHertz(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhraseHints(value);
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
proto.ondewo.nlu.InputAudioConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.InputAudioConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.InputAudioConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.InputAudioConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSampleRateHertz();
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
  f = message.getPhraseHintsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional AudioEncoding audio_encoding = 1;
 * @return {!proto.ondewo.nlu.AudioEncoding}
 */
proto.ondewo.nlu.InputAudioConfig.prototype.getAudioEncoding = function() {
  return /** @type {!proto.ondewo.nlu.AudioEncoding} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.AudioEncoding} value
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.setAudioEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 sample_rate_hertz = 2;
 * @return {number}
 */
proto.ondewo.nlu.InputAudioConfig.prototype.getSampleRateHertz = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.setSampleRateHertz = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.InputAudioConfig.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string phrase_hints = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.InputAudioConfig.prototype.getPhraseHintsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.setPhraseHintsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.addPhraseHints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.InputAudioConfig} returns this
 */
proto.ondewo.nlu.InputAudioConfig.prototype.clearPhraseHintsList = function() {
  return this.setPhraseHintsList([]);
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
proto.ondewo.nlu.TextInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.TextInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.TextInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.TextInput.toObject = function(includeInstance, msg) {
  var f, obj = {
text: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.TextInput}
 */
proto.ondewo.nlu.TextInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.TextInput;
  return proto.ondewo.nlu.TextInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.TextInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.TextInput}
 */
proto.ondewo.nlu.TextInput.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.TextInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.TextInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.TextInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.TextInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
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
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.ondewo.nlu.TextInput.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.TextInput} returns this
 */
proto.ondewo.nlu.TextInput.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.TextInput.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.TextInput} returns this
 */
proto.ondewo.nlu.TextInput.prototype.setLanguageCode = function(value) {
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
proto.ondewo.nlu.EventInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.EventInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.EventInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.EventInput.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
parameters: (f = msg.getParameters()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.EventInput}
 */
proto.ondewo.nlu.EventInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.EventInput;
  return proto.ondewo.nlu.EventInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.EventInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.EventInput}
 */
proto.ondewo.nlu.EventInput.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 3:
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
proto.ondewo.nlu.EventInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.EventInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.EventInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.EventInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.EventInput.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.EventInput} returns this
 */
proto.ondewo.nlu.EventInput.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct parameters = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.EventInput.prototype.getParameters = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.EventInput} returns this
*/
proto.ondewo.nlu.EventInput.prototype.setParameters = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.EventInput} returns this
 */
proto.ondewo.nlu.EventInput.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.EventInput.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.EventInput.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.EventInput} returns this
 */
proto.ondewo.nlu.EventInput.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.Session.repeatedFields_ = [2];



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
proto.ondewo.nlu.Session.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.Session.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.Session} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Session.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionStepsList: jspb.Message.toObjectList(msg.getSessionStepsList(),
    proto.ondewo.nlu.SessionStep.toObject, includeInstance),
sessionInfo: (f = msg.getSessionInfo()) && proto.ondewo.nlu.SessionInfo.toObject(includeInstance, f),
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
 * @return {!proto.ondewo.nlu.Session}
 */
proto.ondewo.nlu.Session.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.Session;
  return proto.ondewo.nlu.Session.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.Session} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.Session}
 */
proto.ondewo.nlu.Session.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionStep;
      reader.readMessage(value,proto.ondewo.nlu.SessionStep.deserializeBinaryFromReader);
      msg.addSessionSteps(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.SessionInfo;
      reader.readMessage(value,proto.ondewo.nlu.SessionInfo.deserializeBinaryFromReader);
      msg.setSessionInfo(value);
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
proto.ondewo.nlu.Session.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.Session.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.Session} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.Session.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.SessionStep.serializeBinaryToWriter
    );
  }
  f = message.getSessionInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.SessionInfo.serializeBinaryToWriter
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
 * @enum {number}
 */
proto.ondewo.nlu.Session.View = {
  VIEW_UNSPECIFIED: 0,
  VIEW_FULL: 1,
  VIEW_SPARSE: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.Session.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SessionStep session_steps = 2;
 * @return {!Array<!proto.ondewo.nlu.SessionStep>}
 */
proto.ondewo.nlu.Session.prototype.getSessionStepsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.SessionStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.SessionStep, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.SessionStep>} value
 * @return {!proto.ondewo.nlu.Session} returns this
*/
proto.ondewo.nlu.Session.prototype.setSessionStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.SessionStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionStep}
 */
proto.ondewo.nlu.Session.prototype.addSessionSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.SessionStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.clearSessionStepsList = function() {
  return this.setSessionStepsList([]);
};


/**
 * optional SessionInfo session_info = 3;
 * @return {?proto.ondewo.nlu.SessionInfo}
 */
proto.ondewo.nlu.Session.prototype.getSessionInfo = function() {
  return /** @type{?proto.ondewo.nlu.SessionInfo} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionInfo, 3));
};


/**
 * @param {?proto.ondewo.nlu.SessionInfo|undefined} value
 * @return {!proto.ondewo.nlu.Session} returns this
*/
proto.ondewo.nlu.Session.prototype.setSessionInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.clearSessionInfo = function() {
  return this.setSessionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Session.prototype.hasSessionInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.Session.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.Session} returns this
*/
proto.ondewo.nlu.Session.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Session.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.Session.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.Session} returns this
*/
proto.ondewo.nlu.Session.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.Session.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.Session.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string modified_by = 7;
 * @return {string}
 */
proto.ondewo.nlu.Session.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.Session} returns this
 */
proto.ondewo.nlu.Session.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionStep.repeatedFields_ = [4,10];



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
proto.ondewo.nlu.SessionStep.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionStep.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
detectIntentRequest: (f = msg.getDetectIntentRequest()) && proto.ondewo.nlu.DetectIntentRequest.toObject(includeInstance, f),
detectIntentResponse: (f = msg.getDetectIntentResponse()) && proto.ondewo.nlu.DetectIntentResponse.toObject(includeInstance, f),
contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 8, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 9, ""),
audioFileResourcesList: jspb.Message.toObjectList(msg.getAudioFileResourcesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.SessionStep}
 */
proto.ondewo.nlu.SessionStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionStep;
  return proto.ondewo.nlu.SessionStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionStep}
 */
proto.ondewo.nlu.SessionStep.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.DetectIntentRequest;
      reader.readMessage(value,proto.ondewo.nlu.DetectIntentRequest.deserializeBinaryFromReader);
      msg.setDetectIntentRequest(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.DetectIntentResponse;
      reader.readMessage(value,proto.ondewo.nlu.DetectIntentResponse.deserializeBinaryFromReader);
      msg.setDetectIntentResponse(value);
      break;
    case 4:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
    case 10:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFileResources(value);
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
proto.ondewo.nlu.SessionStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDetectIntentRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.DetectIntentRequest.serializeBinaryToWriter
    );
  }
  f = message.getDetectIntentResponse();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.DetectIntentResponse.serializeBinaryToWriter
    );
  }
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
  f = message.getAudioFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.SessionStep.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional DetectIntentRequest detect_intent_request = 2;
 * @return {?proto.ondewo.nlu.DetectIntentRequest}
 */
proto.ondewo.nlu.SessionStep.prototype.getDetectIntentRequest = function() {
  return /** @type{?proto.ondewo.nlu.DetectIntentRequest} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.DetectIntentRequest, 2));
};


/**
 * @param {?proto.ondewo.nlu.DetectIntentRequest|undefined} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setDetectIntentRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearDetectIntentRequest = function() {
  return this.setDetectIntentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionStep.prototype.hasDetectIntentRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DetectIntentResponse detect_intent_response = 3;
 * @return {?proto.ondewo.nlu.DetectIntentResponse}
 */
proto.ondewo.nlu.SessionStep.prototype.getDetectIntentResponse = function() {
  return /** @type{?proto.ondewo.nlu.DetectIntentResponse} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.DetectIntentResponse, 3));
};


/**
 * @param {?proto.ondewo.nlu.DetectIntentResponse|undefined} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setDetectIntentResponse = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearDetectIntentResponse = function() {
  return this.setDetectIntentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionStep.prototype.hasDetectIntentResponse = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Context contexts = 4;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionStep.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionStep.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearContextsList = function() {
  return this.setContextsList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionStep.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionStep.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionStep.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionStep.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionStep.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionStep.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string created_by = 8;
 * @return {string}
 */
proto.ondewo.nlu.SessionStep.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string modified_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.SessionStep.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated AudioFileResource audio_file_resources = 10;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.SessionStep.prototype.getAudioFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 10));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.SessionStep} returns this
*/
proto.ondewo.nlu.SessionStep.prototype.setAudioFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.SessionStep.prototype.addAudioFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionStep} returns this
 */
proto.ondewo.nlu.SessionStep.prototype.clearAudioFileResourcesList = function() {
  return this.setAudioFileResourcesList([]);
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
proto.ondewo.nlu.GetSessionStepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetSessionStepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetSessionStepRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionStepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.GetSessionStepRequest}
 */
proto.ondewo.nlu.GetSessionStepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetSessionStepRequest;
  return proto.ondewo.nlu.GetSessionStepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetSessionStepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetSessionStepRequest}
 */
proto.ondewo.nlu.GetSessionStepRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.ondewo.nlu.GetSessionStepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetSessionStepRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetSessionStepRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionStepRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetSessionStepRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetSessionStepRequest} returns this
 */
proto.ondewo.nlu.GetSessionStepRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.GetSessionStepRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.GetSessionStepRequest} returns this
*/
proto.ondewo.nlu.GetSessionStepRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.GetSessionStepRequest} returns this
 */
proto.ondewo.nlu.GetSessionStepRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.GetSessionStepRequest.prototype.hasFieldMask = function() {
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
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UpdateSessionStepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UpdateSessionStepRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateSessionStepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionStep: (f = msg.getSessionStep()) && proto.ondewo.nlu.SessionStep.toObject(includeInstance, f),
updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UpdateSessionStepRequest;
  return proto.ondewo.nlu.UpdateSessionStepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UpdateSessionStepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.SessionStep;
      reader.readMessage(value,proto.ondewo.nlu.SessionStep.deserializeBinaryFromReader);
      msg.setSessionStep(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UpdateSessionStepRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UpdateSessionStepRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateSessionStepRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionStep();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.SessionStep.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional SessionStep session_step = 1;
 * @return {?proto.ondewo.nlu.SessionStep}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.getSessionStep = function() {
  return /** @type{?proto.ondewo.nlu.SessionStep} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionStep, 1));
};


/**
 * @param {?proto.ondewo.nlu.SessionStep|undefined} value
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
*/
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.setSessionStep = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.clearSessionStep = function() {
  return this.setSessionStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.hasSessionStep = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
*/
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
*/
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateSessionStepRequest} returns this
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateSessionStepRequest.prototype.hasFieldMask = function() {
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
proto.ondewo.nlu.DeleteSessionStepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteSessionStepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteSessionStepRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionStepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.DeleteSessionStepRequest}
 */
proto.ondewo.nlu.DeleteSessionStepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteSessionStepRequest;
  return proto.ondewo.nlu.DeleteSessionStepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteSessionStepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteSessionStepRequest}
 */
proto.ondewo.nlu.DeleteSessionStepRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.DeleteSessionStepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteSessionStepRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteSessionStepRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionStepRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteSessionStepRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteSessionStepRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionStepRequest.prototype.setName = function(value) {
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
proto.ondewo.nlu.CreateSessionStepRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateSessionStepRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateSessionStepRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionStepRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionStep: (f = msg.getSessionStep()) && proto.ondewo.nlu.SessionStep.toObject(includeInstance, f),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest}
 */
proto.ondewo.nlu.CreateSessionStepRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateSessionStepRequest;
  return proto.ondewo.nlu.CreateSessionStepRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateSessionStepRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest}
 */
proto.ondewo.nlu.CreateSessionStepRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.SessionStep;
      reader.readMessage(value,proto.ondewo.nlu.SessionStep.deserializeBinaryFromReader);
      msg.setSessionStep(value);
      break;
    case 3:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.ondewo.nlu.CreateSessionStepRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateSessionStepRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateSessionStepRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionStepRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionStep();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionStep.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest} returns this
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionStep session_step = 2;
 * @return {?proto.ondewo.nlu.SessionStep}
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.getSessionStep = function() {
  return /** @type{?proto.ondewo.nlu.SessionStep} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionStep, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionStep|undefined} value
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest} returns this
*/
proto.ondewo.nlu.CreateSessionStepRequest.prototype.setSessionStep = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest} returns this
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.clearSessionStep = function() {
  return this.setSessionStep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.hasSessionStep = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 3;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 3));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest} returns this
*/
proto.ondewo.nlu.CreateSessionStepRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateSessionStepRequest} returns this
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateSessionStepRequest.prototype.hasFieldMask = function() {
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
proto.ondewo.nlu.ListSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionView: jspb.Message.getFieldWithDefault(msg, 2, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListSessionsRequest}
 */
proto.ondewo.nlu.ListSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionsRequest;
  return proto.ondewo.nlu.ListSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionsRequest}
 */
proto.ondewo.nlu.ListSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ondewo.nlu.Session.View} */ (reader.readEnum());
      msg.setSessionView(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
      break;
    case 6:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.ondewo.nlu.ListSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
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
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Session.View session_view = 2;
 * @return {!proto.ondewo.nlu.Session.View}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.getSessionView = function() {
  return /** @type {!proto.ondewo.nlu.Session.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.Session.View} value
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.setSessionView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional SessionFilter session_filter = 5;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 5));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
*/
proto.ondewo.nlu.ListSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 6;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 6));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
*/
proto.ondewo.nlu.ListSessionsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListSessionsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.ondewo.nlu.ContextFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ContextFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ContextFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ContextFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
contextName: jspb.Message.getFieldWithDefault(msg, 1, ""),
key: jspb.Message.getFieldWithDefault(msg, 2, ""),
value: jspb.Message.getFieldWithDefault(msg, 3, ""),
operator: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ondewo.nlu.ContextFilter}
 */
proto.ondewo.nlu.ContextFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ContextFilter;
  return proto.ondewo.nlu.ContextFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ContextFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ContextFilter}
 */
proto.ondewo.nlu.ContextFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContextName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.ComparisonOperator} */ (reader.readEnum());
      msg.setOperator(value);
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
proto.ondewo.nlu.ContextFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ContextFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ContextFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ContextFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOperator();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string context_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.ContextFilter.prototype.getContextName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ContextFilter} returns this
 */
proto.ondewo.nlu.ContextFilter.prototype.setContextName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string key = 2;
 * @return {string}
 */
proto.ondewo.nlu.ContextFilter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ContextFilter} returns this
 */
proto.ondewo.nlu.ContextFilter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.ondewo.nlu.ContextFilter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ContextFilter} returns this
 */
proto.ondewo.nlu.ContextFilter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ComparisonOperator operator = 4;
 * @return {!proto.ondewo.nlu.ComparisonOperator}
 */
proto.ondewo.nlu.ContextFilter.prototype.getOperator = function() {
  return /** @type {!proto.ondewo.nlu.ComparisonOperator} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.ComparisonOperator} value
 * @return {!proto.ondewo.nlu.ContextFilter} returns this
 */
proto.ondewo.nlu.ContextFilter.prototype.setOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionFilter.repeatedFields_ = [1,2,3,12,13,14,15,16,17,42,43,44,45,46,47];



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
proto.ondewo.nlu.SessionFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
languageCodesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
matchedIntentsList: jspb.Message.toObjectList(msg.getMatchedIntentsList(),
    ondewo_nlu_intent_pb.Intent.toObject, includeInstance),
matchedEntityTypesList: jspb.Message.toObjectList(msg.getMatchedEntityTypesList(),
    ondewo_nlu_entity_type_pb.EntityType.toObject, includeInstance),
minIntentsConfidenceMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
minIntentsConfidenceMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
minEntityTypesConfidenceMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
minEntityTypesConfidenceMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
earliest: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
latest: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
minNumberTurns: jspb.Message.getFieldWithDefault(msg, 10, 0),
maxNumberTurns: jspb.Message.getFieldWithDefault(msg, 11, 0),
labelsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
userIdsList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
intentTagsList: (f = jspb.Message.getRepeatedField(msg, 14)) == null ? undefined : f,
sessionIdsList: (f = jspb.Message.getRepeatedField(msg, 15)) == null ? undefined : f,
inputContextsList: jspb.Message.toObjectList(msg.getInputContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
outputContextsList: jspb.Message.toObjectList(msg.getOutputContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
durationInSMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
durationInSMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
durationInMMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 20, 0.0),
durationInMMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 21, 0.0),
durationInMRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
durationInMRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
durationInterval15sRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
durationInterval15sRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
durationInterval30sRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 26, 0.0),
durationInterval30sRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 27, 0.0),
durationInterval45sRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 28, 0.0),
durationInterval45sRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 29, 0.0),
startedTimeSlotPerHourMin: jspb.Message.getFieldWithDefault(msg, 30, ""),
startedTimeSlotPerHourMax: jspb.Message.getFieldWithDefault(msg, 31, ""),
startedTimeSlotPerQuarterHourMin: jspb.Message.getFieldWithDefault(msg, 32, ""),
startedTimeSlotPerQuarterHourMax: jspb.Message.getFieldWithDefault(msg, 33, ""),
startedTimeSlotPerHalfHourMin: jspb.Message.getFieldWithDefault(msg, 34, ""),
startedTimeSlotPerHalfHourMax: jspb.Message.getFieldWithDefault(msg, 35, ""),
startedTimeSlotPerDayPhaseMin: jspb.Message.getFieldWithDefault(msg, 36, ""),
startedTimeSlotPerDayPhaseMax: jspb.Message.getFieldWithDefault(msg, 37, ""),
startedTimeSlotPerMinuteMin: jspb.Message.getFieldWithDefault(msg, 38, ""),
startedTimeSlotPerMinuteMax: jspb.Message.getFieldWithDefault(msg, 39, ""),
durationInSRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 40, 0.0),
durationInSRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 41, 0.0),
platformsList: (f = jspb.Message.getRepeatedField(msg, 42)) == null ? undefined : f,
accountIdsList: (f = jspb.Message.getRepeatedField(msg, 43)) == null ? undefined : f,
propertyIdsList: (f = jspb.Message.getRepeatedField(msg, 44)) == null ? undefined : f,
datastreamIdsList: (f = jspb.Message.getRepeatedField(msg, 45)) == null ? undefined : f,
originIdsList: (f = jspb.Message.getRepeatedField(msg, 46)) == null ? undefined : f,
identifiedUserIdsList: (f = jspb.Message.getRepeatedField(msg, 47)) == null ? undefined : f,
durationInterval60sRoundedMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 48, 0.0),
durationInterval60sRoundedMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 49, 0.0)
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
 * @return {!proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.SessionFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionFilter;
  return proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageCodes(value);
      break;
    case 2:
      var value = new ondewo_nlu_intent_pb.Intent;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.deserializeBinaryFromReader);
      msg.addMatchedIntents(value);
      break;
    case 3:
      var value = new ondewo_nlu_entity_type_pb.EntityType;
      reader.readMessage(value,ondewo_nlu_entity_type_pb.EntityType.deserializeBinaryFromReader);
      msg.addMatchedEntityTypes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinIntentsConfidenceMin(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinIntentsConfidenceMax(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinEntityTypesConfidenceMin(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinEntityTypesConfidenceMax(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEarliest(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatest(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinNumberTurns(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxNumberTurns(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.addIntentTags(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.addSessionIds(value);
      break;
    case 16:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addInputContexts(value);
      break;
    case 17:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addOutputContexts(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInSMin(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInSMax(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInMMin(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInMMax(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInMRoundedMin(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInMRoundedMax(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval15sRoundedMin(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval15sRoundedMax(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval30sRoundedMin(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval30sRoundedMax(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval45sRoundedMin(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval45sRoundedMax(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHourMin(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHourMax(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerQuarterHourMin(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerQuarterHourMax(value);
      break;
    case 34:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHalfHourMin(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHalfHourMax(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerDayPhaseMin(value);
      break;
    case 37:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerDayPhaseMax(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerMinuteMin(value);
      break;
    case 39:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerMinuteMax(value);
      break;
    case 40:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInSRoundedMin(value);
      break;
    case 41:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInSRoundedMax(value);
      break;
    case 42:
      var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatforms(values[i]);
      }
      break;
    case 43:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountIds(value);
      break;
    case 44:
      var value = /** @type {string} */ (reader.readString());
      msg.addPropertyIds(value);
      break;
    case 45:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatastreamIds(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readString());
      msg.addOriginIds(value);
      break;
    case 47:
      var value = /** @type {string} */ (reader.readString());
      msg.addIdentifiedUserIds(value);
      break;
    case 48:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval60sRoundedMin(value);
      break;
    case 49:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval60sRoundedMax(value);
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
proto.ondewo.nlu.SessionFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMatchedIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ondewo_nlu_intent_pb.Intent.serializeBinaryToWriter
    );
  }
  f = message.getMatchedEntityTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      ondewo_nlu_entity_type_pb.EntityType.serializeBinaryToWriter
    );
  }
  f = message.getMinIntentsConfidenceMin();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMinIntentsConfidenceMax();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMinEntityTypesConfidenceMin();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMinEntityTypesConfidenceMax();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getEarliest();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getLatest();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getMinNumberTurns();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getMaxNumberTurns();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      13,
      f
    );
  }
  f = message.getIntentTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      14,
      f
    );
  }
  f = message.getSessionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      15,
      f
    );
  }
  f = message.getInputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getDurationInSMin();
  if (f !== 0.0) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = message.getDurationInSMax();
  if (f !== 0.0) {
    writer.writeFloat(
      19,
      f
    );
  }
  f = message.getDurationInMMin();
  if (f !== 0.0) {
    writer.writeFloat(
      20,
      f
    );
  }
  f = message.getDurationInMMax();
  if (f !== 0.0) {
    writer.writeFloat(
      21,
      f
    );
  }
  f = message.getDurationInMRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      22,
      f
    );
  }
  f = message.getDurationInMRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      23,
      f
    );
  }
  f = message.getDurationInterval15sRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = message.getDurationInterval15sRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      25,
      f
    );
  }
  f = message.getDurationInterval30sRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      26,
      f
    );
  }
  f = message.getDurationInterval30sRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      27,
      f
    );
  }
  f = message.getDurationInterval45sRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      28,
      f
    );
  }
  f = message.getDurationInterval45sRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      29,
      f
    );
  }
  f = message.getStartedTimeSlotPerHourMin();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getStartedTimeSlotPerHourMax();
  if (f.length > 0) {
    writer.writeString(
      31,
      f
    );
  }
  f = message.getStartedTimeSlotPerQuarterHourMin();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getStartedTimeSlotPerQuarterHourMax();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getStartedTimeSlotPerHalfHourMin();
  if (f.length > 0) {
    writer.writeString(
      34,
      f
    );
  }
  f = message.getStartedTimeSlotPerHalfHourMax();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getStartedTimeSlotPerDayPhaseMin();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getStartedTimeSlotPerDayPhaseMax();
  if (f.length > 0) {
    writer.writeString(
      37,
      f
    );
  }
  f = message.getStartedTimeSlotPerMinuteMin();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getStartedTimeSlotPerMinuteMax();
  if (f.length > 0) {
    writer.writeString(
      39,
      f
    );
  }
  f = message.getDurationInSRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      40,
      f
    );
  }
  f = message.getDurationInSRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      41,
      f
    );
  }
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      42,
      f
    );
  }
  f = message.getAccountIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      43,
      f
    );
  }
  f = message.getPropertyIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      44,
      f
    );
  }
  f = message.getDatastreamIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      45,
      f
    );
  }
  f = message.getOriginIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      46,
      f
    );
  }
  f = message.getIdentifiedUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      47,
      f
    );
  }
  f = message.getDurationInterval60sRoundedMin();
  if (f !== 0.0) {
    writer.writeFloat(
      48,
      f
    );
  }
  f = message.getDurationInterval60sRoundedMax();
  if (f !== 0.0) {
    writer.writeFloat(
      49,
      f
    );
  }
};


/**
 * repeated string language_codes = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getLanguageCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setLanguageCodesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addLanguageCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearLanguageCodesList = function() {
  return this.setLanguageCodesList([]);
};


/**
 * repeated Intent matched_intents = 2;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMatchedIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_intent_pb.Intent, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
*/
proto.ondewo.nlu.SessionFilter.prototype.setMatchedIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.SessionFilter.prototype.addMatchedIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearMatchedIntentsList = function() {
  return this.setMatchedIntentsList([]);
};


/**
 * repeated EntityType matched_entity_types = 3;
 * @return {!Array<!proto.ondewo.nlu.EntityType>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMatchedEntityTypesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.EntityType>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_entity_type_pb.EntityType, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.EntityType>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
*/
proto.ondewo.nlu.SessionFilter.prototype.setMatchedEntityTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.EntityType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.EntityType}
 */
proto.ondewo.nlu.SessionFilter.prototype.addMatchedEntityTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.EntityType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearMatchedEntityTypesList = function() {
  return this.setMatchedEntityTypesList([]);
};


/**
 * optional float min_intents_confidence_min = 4;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMinIntentsConfidenceMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMinIntentsConfidenceMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float min_intents_confidence_max = 5;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMinIntentsConfidenceMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMinIntentsConfidenceMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float min_entity_types_confidence_min = 6;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMinEntityTypesConfidenceMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMinEntityTypesConfidenceMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float min_entity_types_confidence_max = 7;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMinEntityTypesConfidenceMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMinEntityTypesConfidenceMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double earliest = 8;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getEarliest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setEarliest = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double latest = 9;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getLatest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setLatest = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional int32 min_number_turns = 10;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMinNumberTurns = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMinNumberTurns = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 max_number_turns = 11;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getMaxNumberTurns = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setMaxNumberTurns = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * repeated string labels = 12;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated string user_ids = 13;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string intent_tags = 14;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getIntentTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 14));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setIntentTagsList = function(value) {
  return jspb.Message.setField(this, 14, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addIntentTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 14, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearIntentTagsList = function() {
  return this.setIntentTagsList([]);
};


/**
 * repeated string session_ids = 15;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getSessionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 15));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setSessionIdsList = function(value) {
  return jspb.Message.setField(this, 15, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addSessionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 15, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearSessionIdsList = function() {
  return this.setSessionIdsList([]);
};


/**
 * repeated Context input_contexts = 16;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getInputContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 16));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
*/
proto.ondewo.nlu.SessionFilter.prototype.setInputContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionFilter.prototype.addInputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearInputContextsList = function() {
  return this.setInputContextsList([]);
};


/**
 * repeated Context output_contexts = 17;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getOutputContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 17));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
*/
proto.ondewo.nlu.SessionFilter.prototype.setOutputContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionFilter.prototype.addOutputContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearOutputContextsList = function() {
  return this.setOutputContextsList([]);
};


/**
 * optional float duration_in_s_min = 18;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInSMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInSMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional float duration_in_s_max = 19;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInSMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInSMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional float duration_in_m_min = 20;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInMMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 20, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInMMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 20, value);
};


/**
 * optional float duration_in_m_max = 21;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInMMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 21, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInMMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 21, value);
};


/**
 * optional float duration_in_m_rounded_min = 22;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInMRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInMRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional float duration_in_m_rounded_max = 23;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInMRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInMRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional float duration_interval_15s_rounded_min = 24;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval15sRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval15sRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 24, value);
};


/**
 * optional float duration_interval_15s_rounded_max = 25;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval15sRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval15sRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 25, value);
};


/**
 * optional float duration_interval_30s_rounded_min = 26;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval30sRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 26, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval30sRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 26, value);
};


/**
 * optional float duration_interval_30s_rounded_max = 27;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval30sRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 27, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval30sRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 27, value);
};


/**
 * optional float duration_interval_45s_rounded_min = 28;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval45sRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 28, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval45sRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 28, value);
};


/**
 * optional float duration_interval_45s_rounded_max = 29;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval45sRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 29, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval45sRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 29, value);
};


/**
 * optional string started_time_slot_per_hour_min = 30;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerHourMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerHourMin = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string started_time_slot_per_hour_max = 31;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerHourMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerHourMax = function(value) {
  return jspb.Message.setProto3StringField(this, 31, value);
};


/**
 * optional string started_time_slot_per_quarter_hour_min = 32;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerQuarterHourMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerQuarterHourMin = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string started_time_slot_per_quarter_hour_max = 33;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerQuarterHourMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerQuarterHourMax = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional string started_time_slot_per_half_hour_min = 34;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerHalfHourMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 34, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerHalfHourMin = function(value) {
  return jspb.Message.setProto3StringField(this, 34, value);
};


/**
 * optional string started_time_slot_per_half_hour_max = 35;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerHalfHourMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerHalfHourMax = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string started_time_slot_per_day_phase_min = 36;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerDayPhaseMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerDayPhaseMin = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string started_time_slot_per_day_phase_max = 37;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerDayPhaseMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 37, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerDayPhaseMax = function(value) {
  return jspb.Message.setProto3StringField(this, 37, value);
};


/**
 * optional string started_time_slot_per_minute_min = 38;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerMinuteMin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerMinuteMin = function(value) {
  return jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional string started_time_slot_per_minute_max = 39;
 * @return {string}
 */
proto.ondewo.nlu.SessionFilter.prototype.getStartedTimeSlotPerMinuteMax = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 39, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setStartedTimeSlotPerMinuteMax = function(value) {
  return jspb.Message.setProto3StringField(this, 39, value);
};


/**
 * optional float duration_in_s_rounded_min = 40;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInSRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 40, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInSRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 40, value);
};


/**
 * optional float duration_in_s_rounded_max = 41;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInSRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 41, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInSRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 41, value);
};


/**
 * repeated Intent.Message.Platform platforms = 42;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getPlatformsList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 42));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 42, value || []);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 42, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
};


/**
 * repeated string account_ids = 43;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getAccountIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 43));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setAccountIdsList = function(value) {
  return jspb.Message.setField(this, 43, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addAccountIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 43, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearAccountIdsList = function() {
  return this.setAccountIdsList([]);
};


/**
 * repeated string property_ids = 44;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getPropertyIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 44));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setPropertyIdsList = function(value) {
  return jspb.Message.setField(this, 44, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addPropertyIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 44, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearPropertyIdsList = function() {
  return this.setPropertyIdsList([]);
};


/**
 * repeated string datastream_ids = 45;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDatastreamIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 45));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDatastreamIdsList = function(value) {
  return jspb.Message.setField(this, 45, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addDatastreamIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 45, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearDatastreamIdsList = function() {
  return this.setDatastreamIdsList([]);
};


/**
 * repeated string origin_ids = 46;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getOriginIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 46));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setOriginIdsList = function(value) {
  return jspb.Message.setField(this, 46, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addOriginIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 46, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearOriginIdsList = function() {
  return this.setOriginIdsList([]);
};


/**
 * repeated string identified_user_ids = 47;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionFilter.prototype.getIdentifiedUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 47));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setIdentifiedUserIdsList = function(value) {
  return jspb.Message.setField(this, 47, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.addIdentifiedUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 47, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.clearIdentifiedUserIdsList = function() {
  return this.setIdentifiedUserIdsList([]);
};


/**
 * optional float duration_interval_60s_rounded_min = 48;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval60sRoundedMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 48, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval60sRoundedMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 48, value);
};


/**
 * optional float duration_interval_60s_rounded_max = 49;
 * @return {number}
 */
proto.ondewo.nlu.SessionFilter.prototype.getDurationInterval60sRoundedMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 49, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionFilter} returns this
 */
proto.ondewo.nlu.SessionFilter.prototype.setDurationInterval60sRoundedMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 49, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionInfo.repeatedFields_ = [1,2,3,9,10,11,12,13,26,27,28,29,30,31,33];



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
proto.ondewo.nlu.SessionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
languageCodesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
matchedIntentsList: jspb.Message.toObjectList(msg.getMatchedIntentsList(),
    ondewo_nlu_intent_pb.Intent.toObject, includeInstance),
matchedEntityTypesList: jspb.Message.toObjectList(msg.getMatchedEntityTypesList(),
    ondewo_nlu_entity_type_pb.EntityType.toObject, includeInstance),
minIntentsConfidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
minEntityTypesConfidence: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
earliest: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
latest: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
numberTurns: jspb.Message.getFieldWithDefault(msg, 8, 0),
labelsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
userIdsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
intentTagsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
inputContextStepsList: jspb.Message.toObjectList(msg.getInputContextStepsList(),
    proto.ondewo.nlu.SessionInfo.ContextSteps.toObject, includeInstance),
outputContextStepsList: jspb.Message.toObjectList(msg.getOutputContextStepsList(),
    proto.ondewo.nlu.SessionInfo.ContextSteps.toObject, includeInstance),
durationInS: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
durationInM: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
durationInMRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0),
durationInterval15sRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 17, 0.0),
durationInterval30sRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 18, 0.0),
durationInterval45sRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 19, 0.0),
startedTimeSlotPerHour: jspb.Message.getFieldWithDefault(msg, 20, ""),
startedTimeSlotPerQuarterHour: jspb.Message.getFieldWithDefault(msg, 21, ""),
startedTimeSlotPerHalfHour: jspb.Message.getFieldWithDefault(msg, 22, ""),
startedTimeSlotPerDayPhase: jspb.Message.getFieldWithDefault(msg, 23, ""),
startedTimeSlotPerMinute: jspb.Message.getFieldWithDefault(msg, 24, ""),
durationInSRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 25, 0.0),
platformsList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
accountIdsList: (f = jspb.Message.getRepeatedField(msg, 27)) == null ? undefined : f,
propertyIdsList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
datastreamIdsList: (f = jspb.Message.getRepeatedField(msg, 29)) == null ? undefined : f,
originIdsList: (f = jspb.Message.getRepeatedField(msg, 30)) == null ? undefined : f,
identifiedUserIdsList: (f = jspb.Message.getRepeatedField(msg, 31)) == null ? undefined : f,
durationInterval60sRounded: jspb.Message.getFloatingPointFieldWithDefault(msg, 32, 0.0),
parentCommentList: jspb.Message.toObjectList(msg.getParentCommentList(),
    ondewo_nlu_common_pb.Comment.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.SessionInfo}
 */
proto.ondewo.nlu.SessionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionInfo;
  return proto.ondewo.nlu.SessionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionInfo}
 */
proto.ondewo.nlu.SessionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageCodes(value);
      break;
    case 2:
      var value = new ondewo_nlu_intent_pb.Intent;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.deserializeBinaryFromReader);
      msg.addMatchedIntents(value);
      break;
    case 3:
      var value = new ondewo_nlu_entity_type_pb.EntityType;
      reader.readMessage(value,ondewo_nlu_entity_type_pb.EntityType.deserializeBinaryFromReader);
      msg.addMatchedEntityTypes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinIntentsConfidence(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinEntityTypesConfidence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setEarliest(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatest(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberTurns(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addIntentTags(value);
      break;
    case 12:
      var value = new proto.ondewo.nlu.SessionInfo.ContextSteps;
      reader.readMessage(value,proto.ondewo.nlu.SessionInfo.ContextSteps.deserializeBinaryFromReader);
      msg.addInputContextSteps(value);
      break;
    case 13:
      var value = new proto.ondewo.nlu.SessionInfo.ContextSteps;
      reader.readMessage(value,proto.ondewo.nlu.SessionInfo.ContextSteps.deserializeBinaryFromReader);
      msg.addOutputContextSteps(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInS(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInM(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInMRounded(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval15sRounded(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval30sRounded(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval45sRounded(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHour(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerQuarterHour(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerHalfHour(value);
      break;
    case 23:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerDayPhase(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readString());
      msg.setStartedTimeSlotPerMinute(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInSRounded(value);
      break;
    case 26:
      var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatforms(values[i]);
      }
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountIds(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.addPropertyIds(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatastreamIds(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.addOriginIds(value);
      break;
    case 31:
      var value = /** @type {string} */ (reader.readString());
      msg.addIdentifiedUserIds(value);
      break;
    case 32:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInterval60sRounded(value);
      break;
    case 33:
      var value = new ondewo_nlu_common_pb.Comment;
      reader.readMessage(value,ondewo_nlu_common_pb.Comment.deserializeBinaryFromReader);
      msg.addParentComment(value);
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
proto.ondewo.nlu.SessionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getMatchedIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ondewo_nlu_intent_pb.Intent.serializeBinaryToWriter
    );
  }
  f = message.getMatchedEntityTypesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      ondewo_nlu_entity_type_pb.EntityType.serializeBinaryToWriter
    );
  }
  f = message.getMinIntentsConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMinEntityTypesConfidence();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getEarliest();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getLatest();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getNumberTurns();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getIntentTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getInputContextStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.ondewo.nlu.SessionInfo.ContextSteps.serializeBinaryToWriter
    );
  }
  f = message.getOutputContextStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.ondewo.nlu.SessionInfo.ContextSteps.serializeBinaryToWriter
    );
  }
  f = message.getDurationInS();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getDurationInM();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getDurationInMRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      16,
      f
    );
  }
  f = message.getDurationInterval15sRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      17,
      f
    );
  }
  f = message.getDurationInterval30sRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      18,
      f
    );
  }
  f = message.getDurationInterval45sRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      19,
      f
    );
  }
  f = message.getStartedTimeSlotPerHour();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getStartedTimeSlotPerQuarterHour();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getStartedTimeSlotPerHalfHour();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getStartedTimeSlotPerDayPhase();
  if (f.length > 0) {
    writer.writeString(
      23,
      f
    );
  }
  f = message.getStartedTimeSlotPerMinute();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = message.getDurationInSRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      25,
      f
    );
  }
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      26,
      f
    );
  }
  f = message.getAccountIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      27,
      f
    );
  }
  f = message.getPropertyIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      28,
      f
    );
  }
  f = message.getDatastreamIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      29,
      f
    );
  }
  f = message.getOriginIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      30,
      f
    );
  }
  f = message.getIdentifiedUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      31,
      f
    );
  }
  f = message.getDurationInterval60sRounded();
  if (f !== 0.0) {
    writer.writeFloat(
      32,
      f
    );
  }
  f = message.getParentCommentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      33,
      f,
      ondewo_nlu_common_pb.Comment.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.repeatedFields_ = [1];



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
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionInfo.ContextSteps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionInfo.ContextSteps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.toObject = function(includeInstance, msg) {
  var f, obj = {
contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps}
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionInfo.ContextSteps;
  return proto.ondewo.nlu.SessionInfo.ContextSteps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionInfo.ContextSteps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps}
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
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
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionInfo.ContextSteps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionInfo.ContextSteps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Context contexts = 1;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps} returns this
*/
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps} returns this
 */
proto.ondewo.nlu.SessionInfo.ContextSteps.prototype.clearContextsList = function() {
  return this.setContextsList([]);
};


/**
 * repeated string language_codes = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getLanguageCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setLanguageCodesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addLanguageCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearLanguageCodesList = function() {
  return this.setLanguageCodesList([]);
};


/**
 * repeated Intent matched_intents = 2;
 * @return {!Array<!proto.ondewo.nlu.Intent>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getMatchedIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_intent_pb.Intent, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
*/
proto.ondewo.nlu.SessionInfo.prototype.setMatchedIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.SessionInfo.prototype.addMatchedIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.Intent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearMatchedIntentsList = function() {
  return this.setMatchedIntentsList([]);
};


/**
 * repeated EntityType matched_entity_types = 3;
 * @return {!Array<!proto.ondewo.nlu.EntityType>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getMatchedEntityTypesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.EntityType>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_entity_type_pb.EntityType, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.EntityType>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
*/
proto.ondewo.nlu.SessionInfo.prototype.setMatchedEntityTypesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.EntityType=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.EntityType}
 */
proto.ondewo.nlu.SessionInfo.prototype.addMatchedEntityTypes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.EntityType, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearMatchedEntityTypesList = function() {
  return this.setMatchedEntityTypesList([]);
};


/**
 * optional float min_intents_confidence = 4;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getMinIntentsConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setMinIntentsConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float min_entity_types_confidence = 5;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getMinEntityTypesConfidence = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setMinEntityTypesConfidence = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double earliest = 6;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getEarliest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setEarliest = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double latest = 7;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getLatest = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setLatest = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional int32 number_turns = 8;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getNumberTurns = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setNumberTurns = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated string labels = 9;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated string user_ids = 10;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * repeated string intent_tags = 11;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getIntentTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setIntentTagsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addIntentTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearIntentTagsList = function() {
  return this.setIntentTagsList([]);
};


/**
 * repeated ContextSteps input_context_steps = 12;
 * @return {!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getInputContextStepsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.SessionInfo.ContextSteps, 12));
};


/**
 * @param {!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
*/
proto.ondewo.nlu.SessionInfo.prototype.setInputContextStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.ondewo.nlu.SessionInfo.ContextSteps=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps}
 */
proto.ondewo.nlu.SessionInfo.prototype.addInputContextSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.ondewo.nlu.SessionInfo.ContextSteps, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearInputContextStepsList = function() {
  return this.setInputContextStepsList([]);
};


/**
 * repeated ContextSteps output_context_steps = 13;
 * @return {!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getOutputContextStepsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.SessionInfo.ContextSteps, 13));
};


/**
 * @param {!Array<!proto.ondewo.nlu.SessionInfo.ContextSteps>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
*/
proto.ondewo.nlu.SessionInfo.prototype.setOutputContextStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.ondewo.nlu.SessionInfo.ContextSteps=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo.ContextSteps}
 */
proto.ondewo.nlu.SessionInfo.prototype.addOutputContextSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.ondewo.nlu.SessionInfo.ContextSteps, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearOutputContextStepsList = function() {
  return this.setOutputContextStepsList([]);
};


/**
 * optional float duration_in_s = 14;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInS = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional float duration_in_m = 15;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInM = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInM = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional float duration_in_m_rounded = 16;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInMRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInMRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


/**
 * optional float duration_interval_15s_rounded = 17;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInterval15sRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 17, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInterval15sRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 17, value);
};


/**
 * optional float duration_interval_30s_rounded = 18;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInterval30sRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 18, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInterval30sRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 18, value);
};


/**
 * optional float duration_interval_45s_rounded = 19;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInterval45sRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 19, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInterval45sRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 19, value);
};


/**
 * optional string started_time_slot_per_hour = 20;
 * @return {string}
 */
proto.ondewo.nlu.SessionInfo.prototype.getStartedTimeSlotPerHour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setStartedTimeSlotPerHour = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string started_time_slot_per_quarter_hour = 21;
 * @return {string}
 */
proto.ondewo.nlu.SessionInfo.prototype.getStartedTimeSlotPerQuarterHour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setStartedTimeSlotPerQuarterHour = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string started_time_slot_per_half_hour = 22;
 * @return {string}
 */
proto.ondewo.nlu.SessionInfo.prototype.getStartedTimeSlotPerHalfHour = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setStartedTimeSlotPerHalfHour = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional string started_time_slot_per_day_phase = 23;
 * @return {string}
 */
proto.ondewo.nlu.SessionInfo.prototype.getStartedTimeSlotPerDayPhase = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 23, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setStartedTimeSlotPerDayPhase = function(value) {
  return jspb.Message.setProto3StringField(this, 23, value);
};


/**
 * optional string started_time_slot_per_minute = 24;
 * @return {string}
 */
proto.ondewo.nlu.SessionInfo.prototype.getStartedTimeSlotPerMinute = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setStartedTimeSlotPerMinute = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional float duration_in_s_rounded = 25;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInSRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 25, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInSRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 25, value);
};


/**
 * repeated Intent.Message.Platform platforms = 26;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getPlatformsList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
};


/**
 * repeated string account_ids = 27;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getAccountIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 27));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setAccountIdsList = function(value) {
  return jspb.Message.setField(this, 27, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addAccountIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 27, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearAccountIdsList = function() {
  return this.setAccountIdsList([]);
};


/**
 * repeated string property_ids = 28;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getPropertyIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setPropertyIdsList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addPropertyIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearPropertyIdsList = function() {
  return this.setPropertyIdsList([]);
};


/**
 * repeated string datastream_ids = 29;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDatastreamIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 29));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDatastreamIdsList = function(value) {
  return jspb.Message.setField(this, 29, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addDatastreamIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 29, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearDatastreamIdsList = function() {
  return this.setDatastreamIdsList([]);
};


/**
 * repeated string origin_ids = 30;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getOriginIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 30));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setOriginIdsList = function(value) {
  return jspb.Message.setField(this, 30, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addOriginIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 30, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearOriginIdsList = function() {
  return this.setOriginIdsList([]);
};


/**
 * repeated string identified_user_ids = 31;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getIdentifiedUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 31));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setIdentifiedUserIdsList = function(value) {
  return jspb.Message.setField(this, 31, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.addIdentifiedUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 31, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearIdentifiedUserIdsList = function() {
  return this.setIdentifiedUserIdsList([]);
};


/**
 * optional float duration_interval_60s_rounded = 32;
 * @return {number}
 */
proto.ondewo.nlu.SessionInfo.prototype.getDurationInterval60sRounded = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 32, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.setDurationInterval60sRounded = function(value) {
  return jspb.Message.setProto3FloatField(this, 32, value);
};


/**
 * repeated Comment parent_comment = 33;
 * @return {!Array<!proto.ondewo.nlu.Comment>}
 */
proto.ondewo.nlu.SessionInfo.prototype.getParentCommentList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_common_pb.Comment, 33));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Comment>} value
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
*/
proto.ondewo.nlu.SessionInfo.prototype.setParentCommentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 33, value);
};


/**
 * @param {!proto.ondewo.nlu.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Comment}
 */
proto.ondewo.nlu.SessionInfo.prototype.addParentComment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 33, opt_value, proto.ondewo.nlu.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionInfo} returns this
 */
proto.ondewo.nlu.SessionInfo.prototype.clearParentCommentList = function() {
  return this.setParentCommentList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListSessionsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListSessionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionsList: jspb.Message.toObjectList(msg.getSessionsList(),
    proto.ondewo.nlu.Session.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.ListSessionsResponse}
 */
proto.ondewo.nlu.ListSessionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionsResponse;
  return proto.ondewo.nlu.ListSessionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionsResponse}
 */
proto.ondewo.nlu.ListSessionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.Session;
      reader.readMessage(value,proto.ondewo.nlu.Session.deserializeBinaryFromReader);
      msg.addSessions(value);
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
proto.ondewo.nlu.ListSessionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.Session.serializeBinaryToWriter
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
 * repeated Session sessions = 1;
 * @return {!Array<!proto.ondewo.nlu.Session>}
 */
proto.ondewo.nlu.ListSessionsResponse.prototype.getSessionsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Session>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.Session, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Session>} value
 * @return {!proto.ondewo.nlu.ListSessionsResponse} returns this
*/
proto.ondewo.nlu.ListSessionsResponse.prototype.setSessionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Session=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Session}
 */
proto.ondewo.nlu.ListSessionsResponse.prototype.addSessions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Session, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListSessionsResponse} returns this
 */
proto.ondewo.nlu.ListSessionsResponse.prototype.clearSessionsList = function() {
  return this.setSessionsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionsResponse} returns this
 */
proto.ondewo.nlu.ListSessionsResponse.prototype.setNextPageToken = function(value) {
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
proto.ondewo.nlu.GetSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionView: jspb.Message.getFieldWithDefault(msg, 2, 0),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.GetSessionRequest}
 */
proto.ondewo.nlu.GetSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetSessionRequest;
  return proto.ondewo.nlu.GetSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetSessionRequest}
 */
proto.ondewo.nlu.GetSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.Session.View} */ (reader.readEnum());
      msg.setSessionView(value);
      break;
    case 6:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
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
proto.ondewo.nlu.GetSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetSessionRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetSessionRequest} returns this
 */
proto.ondewo.nlu.GetSessionRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Session.View session_view = 2;
 * @return {!proto.ondewo.nlu.Session.View}
 */
proto.ondewo.nlu.GetSessionRequest.prototype.getSessionView = function() {
  return /** @type {!proto.ondewo.nlu.Session.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.Session.View} value
 * @return {!proto.ondewo.nlu.GetSessionRequest} returns this
 */
proto.ondewo.nlu.GetSessionRequest.prototype.setSessionView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 6;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.GetSessionRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 6));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.GetSessionRequest} returns this
*/
proto.ondewo.nlu.GetSessionRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.GetSessionRequest} returns this
 */
proto.ondewo.nlu.GetSessionRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.GetSessionRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.CreateSessionRequest.repeatedFields_ = [3,4];



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
proto.ondewo.nlu.CreateSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
labelsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.CreateSessionRequest}
 */
proto.ondewo.nlu.CreateSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateSessionRequest;
  return proto.ondewo.nlu.CreateSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateSessionRequest}
 */
proto.ondewo.nlu.CreateSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 4:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
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
proto.ondewo.nlu.CreateSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_uuid = 2;
 * @return {string}
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.getSessionUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.setSessionUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string labels = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * repeated Context contexts = 4;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
*/
proto.ondewo.nlu.CreateSessionRequest.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.CreateSessionRequest} returns this
 */
proto.ondewo.nlu.CreateSessionRequest.prototype.clearContextsList = function() {
  return this.setContextsList([]);
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
proto.ondewo.nlu.DeleteSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.DeleteSessionRequest}
 */
proto.ondewo.nlu.DeleteSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteSessionRequest;
  return proto.ondewo.nlu.DeleteSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteSessionRequest}
 */
proto.ondewo.nlu.DeleteSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.ondewo.nlu.DeleteSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteSessionRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteSessionRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionRequest.prototype.setSessionId = function(value) {
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
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.CreateSessionReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
parentReviewId: jspb.Message.getFieldWithDefault(msg, 2, ""),
sessionReview: (f = msg.getSessionReview()) && proto.ondewo.nlu.SessionReview.toObject(includeInstance, f),
sessionReviewView: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.CreateSessionReviewRequest;
  return proto.ondewo.nlu.CreateSessionReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentReviewId(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.SessionReview;
      reader.readMessage(value,proto.ondewo.nlu.SessionReview.deserializeBinaryFromReader);
      msg.setSessionReview(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.SessionReview.View} */ (reader.readEnum());
      msg.setSessionReviewView(value);
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
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.CreateSessionReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.CreateSessionReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.CreateSessionReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentReviewId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSessionReview();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.SessionReview.serializeBinaryToWriter
    );
  }
  f = message.getSessionReviewView();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest} returns this
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent_review_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.getParentReviewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest} returns this
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.setParentReviewId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SessionReview session_review = 3;
 * @return {?proto.ondewo.nlu.SessionReview}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.getSessionReview = function() {
  return /** @type{?proto.ondewo.nlu.SessionReview} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionReview, 3));
};


/**
 * @param {?proto.ondewo.nlu.SessionReview|undefined} value
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest} returns this
*/
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.setSessionReview = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest} returns this
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.clearSessionReview = function() {
  return this.setSessionReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.hasSessionReview = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional SessionReview.View session_review_view = 4;
 * @return {!proto.ondewo.nlu.SessionReview.View}
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.getSessionReviewView = function() {
  return /** @type {!proto.ondewo.nlu.SessionReview.View} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionReview.View} value
 * @return {!proto.ondewo.nlu.CreateSessionReviewRequest} returns this
 */
proto.ondewo.nlu.CreateSessionReviewRequest.prototype.setSessionReviewView = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionReview.repeatedFields_ = [2];



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
proto.ondewo.nlu.SessionReview.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionReview.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionReviewStepsList: jspb.Message.toObjectList(msg.getSessionReviewStepsList(),
    proto.ondewo.nlu.SessionReviewStep.toObject, includeInstance),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.ondewo.nlu.SessionReview}
 */
proto.ondewo.nlu.SessionReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionReview;
  return proto.ondewo.nlu.SessionReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionReview}
 */
proto.ondewo.nlu.SessionReview.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionReviewStep;
      reader.readMessage(value,proto.ondewo.nlu.SessionReviewStep.deserializeBinaryFromReader);
      msg.addSessionReviewSteps(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedBy(value);
      break;
    case 6:
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
proto.ondewo.nlu.SessionReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionReviewStepsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.SessionReviewStep.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.SessionReview.View = {
  VIEW_UNSPECIFIED: 0,
  VIEW_FULL: 1,
  VIEW_SPARSE: 2
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.SessionReview.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SessionReviewStep session_review_steps = 2;
 * @return {!Array<!proto.ondewo.nlu.SessionReviewStep>}
 */
proto.ondewo.nlu.SessionReview.prototype.getSessionReviewStepsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.SessionReviewStep>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.SessionReviewStep, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.SessionReviewStep>} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
*/
proto.ondewo.nlu.SessionReview.prototype.setSessionReviewStepsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.SessionReviewStep=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionReviewStep}
 */
proto.ondewo.nlu.SessionReview.prototype.addSessionReviewSteps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.SessionReviewStep, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.clearSessionReviewStepsList = function() {
  return this.setSessionReviewStepsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionReview.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
*/
proto.ondewo.nlu.SessionReview.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReview.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionReview.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
*/
proto.ondewo.nlu.SessionReview.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReview.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string created_by = 5;
 * @return {string}
 */
proto.ondewo.nlu.SessionReview.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string modified_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.SessionReview.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReview} returns this
 */
proto.ondewo.nlu.SessionReview.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.SessionReviewStep.repeatedFields_ = [4,5,6,8,14];



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
proto.ondewo.nlu.SessionReviewStep.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.SessionReviewStep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.SessionReviewStep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionReviewStep.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
annotatedUsersays: (f = msg.getAnnotatedUsersays()) && ondewo_nlu_intent_pb.Intent.TrainingPhrase.toObject(includeInstance, f),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
detectedIntentsList: jspb.Message.toObjectList(msg.getDetectedIntentsList(),
    proto.ondewo.nlu.DetectedIntent.toObject, includeInstance),
contextsList: jspb.Message.toObjectList(msg.getContextsList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
contextsOutList: jspb.Message.toObjectList(msg.getContextsOutList(),
    ondewo_nlu_context_pb.Context.toObject, includeInstance),
queryTextOriginal: jspb.Message.getFieldWithDefault(msg, 7, ""),
platformsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 12, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 13, ""),
audioFileResourcesList: jspb.Message.toObjectList(msg.getAudioFileResourcesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.SessionReviewStep}
 */
proto.ondewo.nlu.SessionReviewStep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.SessionReviewStep;
  return proto.ondewo.nlu.SessionReviewStep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.SessionReviewStep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.SessionReviewStep}
 */
proto.ondewo.nlu.SessionReviewStep.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new ondewo_nlu_intent_pb.Intent.TrainingPhrase;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.TrainingPhrase.deserializeBinaryFromReader);
      msg.setAnnotatedUsersays(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.DetectedIntent;
      reader.readMessage(value,proto.ondewo.nlu.DetectedIntent.deserializeBinaryFromReader);
      msg.addDetectedIntents(value);
      break;
    case 5:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContexts(value);
      break;
    case 6:
      var value = new ondewo_nlu_context_pb.Context;
      reader.readMessage(value,ondewo_nlu_context_pb.Context.deserializeBinaryFromReader);
      msg.addContextsOut(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueryTextOriginal(value);
      break;
    case 8:
      var values = /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPlatforms(values[i]);
      }
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
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
    case 14:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFileResources(value);
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
proto.ondewo.nlu.SessionReviewStep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.SessionReviewStep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.SessionReviewStep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.SessionReviewStep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAnnotatedUsersays();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_intent_pb.Intent.TrainingPhrase.serializeBinaryToWriter
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDetectedIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ondewo.nlu.DetectedIntent.serializeBinaryToWriter
    );
  }
  f = message.getContextsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getContextsOutList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      ondewo_nlu_context_pb.Context.serializeBinaryToWriter
    );
  }
  f = message.getQueryTextOriginal();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
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
  f = message.getAudioFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Intent.TrainingPhrase annotated_usersays = 2;
 * @return {?proto.ondewo.nlu.Intent.TrainingPhrase}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getAnnotatedUsersays = function() {
  return /** @type{?proto.ondewo.nlu.Intent.TrainingPhrase} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_intent_pb.Intent.TrainingPhrase, 2));
};


/**
 * @param {?proto.ondewo.nlu.Intent.TrainingPhrase|undefined} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setAnnotatedUsersays = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearAnnotatedUsersays = function() {
  return this.setAnnotatedUsersays(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.hasAnnotatedUsersays = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated DetectedIntent detected_intents = 4;
 * @return {!Array<!proto.ondewo.nlu.DetectedIntent>}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getDetectedIntentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.DetectedIntent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.DetectedIntent, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.DetectedIntent>} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setDetectedIntentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.DetectedIntent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.DetectedIntent}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.addDetectedIntents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.DetectedIntent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearDetectedIntentsList = function() {
  return this.setDetectedIntentsList([]);
};


/**
 * repeated Context contexts = 5;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getContextsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 5));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setContextsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.addContexts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearContextsList = function() {
  return this.setContextsList([]);
};


/**
 * repeated Context contexts_out = 6;
 * @return {!Array<!proto.ondewo.nlu.Context>}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getContextsOutList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Context>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_context_pb.Context, 6));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Context>} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setContextsOutList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.ondewo.nlu.Context=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Context}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.addContextsOut = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.ondewo.nlu.Context, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearContextsOutList = function() {
  return this.setContextsOutList([]);
};


/**
 * optional string query_text_original = 7;
 * @return {string}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getQueryTextOriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setQueryTextOriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Intent.Message.Platform platforms = 8;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message.Platform>}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getPlatformsList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message.Platform>} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message.Platform} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
};


/**
 * optional google.protobuf.Timestamp timestamp = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string created_by = 12;
 * @return {string}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string modified_by = 13;
 * @return {string}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated AudioFileResource audio_file_resources = 14;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.getAudioFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 14));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
*/
proto.ondewo.nlu.SessionReviewStep.prototype.setAudioFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.SessionReviewStep.prototype.addAudioFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.SessionReviewStep} returns this
 */
proto.ondewo.nlu.SessionReviewStep.prototype.clearAudioFileResourcesList = function() {
  return this.setAudioFileResourcesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.DetectedIntent.repeatedFields_ = [4];



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
proto.ondewo.nlu.DetectedIntent.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DetectedIntent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DetectedIntent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectedIntent.toObject = function(includeInstance, msg) {
  var f, obj = {
intent: (f = msg.getIntent()) && ondewo_nlu_intent_pb.Intent.toObject(includeInstance, f),
score: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
algorithm: jspb.Message.getFieldWithDefault(msg, 3, ""),
fulfillmentMessagesList: jspb.Message.toObjectList(msg.getFulfillmentMessagesList(),
    ondewo_nlu_intent_pb.Intent.Message.toObject, includeInstance),
requiredParamMissing: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.ondewo.nlu.DetectedIntent}
 */
proto.ondewo.nlu.DetectedIntent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DetectedIntent;
  return proto.ondewo.nlu.DetectedIntent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DetectedIntent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DetectedIntent}
 */
proto.ondewo.nlu.DetectedIntent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ondewo_nlu_intent_pb.Intent;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.deserializeBinaryFromReader);
      msg.setIntent(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithm(value);
      break;
    case 4:
      var value = new ondewo_nlu_intent_pb.Intent.Message;
      reader.readMessage(value,ondewo_nlu_intent_pb.Intent.Message.deserializeBinaryFromReader);
      msg.addFulfillmentMessages(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequiredParamMissing(value);
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
proto.ondewo.nlu.DetectedIntent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DetectedIntent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DetectedIntent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DetectedIntent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIntent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ondewo_nlu_intent_pb.Intent.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFulfillmentMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      ondewo_nlu_intent_pb.Intent.Message.serializeBinaryToWriter
    );
  }
  f = message.getRequiredParamMissing();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Intent intent = 1;
 * @return {?proto.ondewo.nlu.Intent}
 */
proto.ondewo.nlu.DetectedIntent.prototype.getIntent = function() {
  return /** @type{?proto.ondewo.nlu.Intent} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_intent_pb.Intent, 1));
};


/**
 * @param {?proto.ondewo.nlu.Intent|undefined} value
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
*/
proto.ondewo.nlu.DetectedIntent.prototype.setIntent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
 */
proto.ondewo.nlu.DetectedIntent.prototype.clearIntent = function() {
  return this.setIntent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DetectedIntent.prototype.hasIntent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float score = 2;
 * @return {number}
 */
proto.ondewo.nlu.DetectedIntent.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
 */
proto.ondewo.nlu.DetectedIntent.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string algorithm = 3;
 * @return {string}
 */
proto.ondewo.nlu.DetectedIntent.prototype.getAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
 */
proto.ondewo.nlu.DetectedIntent.prototype.setAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Intent.Message fulfillment_messages = 4;
 * @return {!Array<!proto.ondewo.nlu.Intent.Message>}
 */
proto.ondewo.nlu.DetectedIntent.prototype.getFulfillmentMessagesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Intent.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_intent_pb.Intent.Message, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Intent.Message>} value
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
*/
proto.ondewo.nlu.DetectedIntent.prototype.setFulfillmentMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.Intent.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Intent.Message}
 */
proto.ondewo.nlu.DetectedIntent.prototype.addFulfillmentMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.Intent.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
 */
proto.ondewo.nlu.DetectedIntent.prototype.clearFulfillmentMessagesList = function() {
  return this.setFulfillmentMessagesList([]);
};


/**
 * optional bool required_param_missing = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.DetectedIntent.prototype.getRequiredParamMissing = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.DetectedIntent} returns this
 */
proto.ondewo.nlu.DetectedIntent.prototype.setRequiredParamMissing = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.ondewo.nlu.ListSessionLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.ondewo.nlu.ListSessionLabelsRequest}
 */
proto.ondewo.nlu.ListSessionLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionLabelsRequest;
  return proto.ondewo.nlu.ListSessionLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionLabelsRequest}
 */
proto.ondewo.nlu.ListSessionLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.ondewo.nlu.ListSessionLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionLabelsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.ListSessionLabelsRequest.prototype.setSessionId = function(value) {
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
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListSessionLabelsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListSessionLabelsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionLabelsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionLabelsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
labelsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListSessionLabelsResponse}
 */
proto.ondewo.nlu.ListSessionLabelsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionLabelsResponse;
  return proto.ondewo.nlu.ListSessionLabelsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionLabelsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionLabelsResponse}
 */
proto.ondewo.nlu.ListSessionLabelsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
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
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionLabelsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionLabelsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionLabelsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string labels = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListSessionLabelsResponse} returns this
 */
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListSessionLabelsResponse} returns this
 */
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListSessionLabelsResponse} returns this
 */
proto.ondewo.nlu.ListSessionLabelsResponse.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
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
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest;
  return proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListLanguageCodesOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListLanguageCodesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListLanguageCodesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListLanguageCodesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListLanguageCodesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
languageCodesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListLanguageCodesResponse}
 */
proto.ondewo.nlu.ListLanguageCodesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListLanguageCodesResponse;
  return proto.ondewo.nlu.ListLanguageCodesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListLanguageCodesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListLanguageCodesResponse}
 */
proto.ondewo.nlu.ListLanguageCodesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLanguageCodes(value);
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
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListLanguageCodesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListLanguageCodesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListLanguageCodesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLanguageCodesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string language_codes = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.getLanguageCodesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListLanguageCodesResponse} returns this
 */
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.setLanguageCodesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListLanguageCodesResponse} returns this
 */
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.addLanguageCodes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListLanguageCodesResponse} returns this
 */
proto.ondewo.nlu.ListLanguageCodesResponse.prototype.clearLanguageCodesList = function() {
  return this.setLanguageCodesList([]);
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
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListMatchedIntentsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListMatchedIntentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListMatchedIntentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
matchedIntentsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListMatchedIntentsResponse}
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListMatchedIntentsResponse;
  return proto.ondewo.nlu.ListMatchedIntentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListMatchedIntentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListMatchedIntentsResponse}
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMatchedIntents(value);
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
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListMatchedIntentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListMatchedIntentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchedIntentsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string matched_intents = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.getMatchedIntentsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListMatchedIntentsResponse} returns this
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.setMatchedIntentsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListMatchedIntentsResponse} returns this
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.addMatchedIntents = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListMatchedIntentsResponse} returns this
 */
proto.ondewo.nlu.ListMatchedIntentsResponse.prototype.clearMatchedIntentsList = function() {
  return this.setMatchedIntentsList([]);
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
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest;
  return proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListMatchedEntityTypesOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListMatchedEntityTypesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
matchedEntityTypesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesResponse}
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListMatchedEntityTypesResponse;
  return proto.ondewo.nlu.ListMatchedEntityTypesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesResponse}
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addMatchedEntityTypes(value);
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
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListMatchedEntityTypesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatchedEntityTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string matched_entity_types = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.getMatchedEntityTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} returns this
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.setMatchedEntityTypesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} returns this
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.addMatchedEntityTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListMatchedEntityTypesResponse} returns this
 */
proto.ondewo.nlu.ListMatchedEntityTypesResponse.prototype.clearMatchedEntityTypesList = function() {
  return this.setMatchedEntityTypesList([]);
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
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListUserIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListUserIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListUserIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListUserIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListUserIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUserIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
userIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListUserIdsResponse}
 */
proto.ondewo.nlu.ListUserIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListUserIdsResponse;
  return proto.ondewo.nlu.ListUserIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListUserIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListUserIdsResponse}
 */
proto.ondewo.nlu.ListUserIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
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
proto.ondewo.nlu.ListUserIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListUserIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListUserIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListUserIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string user_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListUserIdsResponse.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListUserIdsResponse.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListUserIdsResponse.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListUserIdsResponse.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
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
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListIdentifiedUserIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
identifiedUserIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListIdentifiedUserIdsResponse;
  return proto.ondewo.nlu.ListIdentifiedUserIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIdentifiedUserIds(value);
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
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListIdentifiedUserIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentifiedUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string identified_user_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.getIdentifiedUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.setIdentifiedUserIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.addIdentifiedUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListIdentifiedUserIdsResponse} returns this
 */
proto.ondewo.nlu.ListIdentifiedUserIdsResponse.prototype.clearIdentifiedUserIdsList = function() {
  return this.setIdentifiedUserIdsList([]);
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
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListTagsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListTagsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListTagsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListTagsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListTagsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListTagsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListTagsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListTagsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListTagsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListTagsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListTagsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
tagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListTagsResponse}
 */
proto.ondewo.nlu.ListTagsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListTagsResponse;
  return proto.ondewo.nlu.ListTagsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListTagsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListTagsResponse}
 */
proto.ondewo.nlu.ListTagsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.ondewo.nlu.ListTagsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListTagsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListTagsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListTagsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListTagsResponse.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListTagsResponse} returns this
 */
proto.ondewo.nlu.ListTagsResponse.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListTagsResponse} returns this
 */
proto.ondewo.nlu.ListTagsResponse.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListTagsResponse} returns this
 */
proto.ondewo.nlu.ListTagsResponse.prototype.clearTagsList = function() {
  return this.setTagsList([]);
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
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListInputContextsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListInputContextsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListInputContextsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListInputContextsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListInputContextsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListInputContextsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
inputContextsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListInputContextsResponse}
 */
proto.ondewo.nlu.ListInputContextsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListInputContextsResponse;
  return proto.ondewo.nlu.ListInputContextsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListInputContextsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListInputContextsResponse}
 */
proto.ondewo.nlu.ListInputContextsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputContexts(value);
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
proto.ondewo.nlu.ListInputContextsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListInputContextsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListInputContextsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListInputContextsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string input_contexts = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListInputContextsResponse.prototype.getInputContextsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListInputContextsResponse} returns this
 */
proto.ondewo.nlu.ListInputContextsResponse.prototype.setInputContextsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListInputContextsResponse} returns this
 */
proto.ondewo.nlu.ListInputContextsResponse.prototype.addInputContexts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListInputContextsResponse} returns this
 */
proto.ondewo.nlu.ListInputContextsResponse.prototype.clearInputContextsList = function() {
  return this.setInputContextsList([]);
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
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListOutputContextsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListOutputContextsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListOutputContextsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListOutputContextsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListOutputContextsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOutputContextsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
outputContextsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListOutputContextsResponse}
 */
proto.ondewo.nlu.ListOutputContextsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListOutputContextsResponse;
  return proto.ondewo.nlu.ListOutputContextsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListOutputContextsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListOutputContextsResponse}
 */
proto.ondewo.nlu.ListOutputContextsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputContexts(value);
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
proto.ondewo.nlu.ListOutputContextsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListOutputContextsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListOutputContextsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOutputContextsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutputContextsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string output_contexts = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListOutputContextsResponse.prototype.getOutputContextsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListOutputContextsResponse} returns this
 */
proto.ondewo.nlu.ListOutputContextsResponse.prototype.setOutputContextsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListOutputContextsResponse} returns this
 */
proto.ondewo.nlu.ListOutputContextsResponse.prototype.addOutputContexts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListOutputContextsResponse} returns this
 */
proto.ondewo.nlu.ListOutputContextsResponse.prototype.clearOutputContextsList = function() {
  return this.setOutputContextsList([]);
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
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListPlatformsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListPlatformsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListPlatformsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListPlatformsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListPlatformsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPlatformsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
platformsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListPlatformsResponse}
 */
proto.ondewo.nlu.ListPlatformsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListPlatformsResponse;
  return proto.ondewo.nlu.ListPlatformsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListPlatformsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListPlatformsResponse}
 */
proto.ondewo.nlu.ListPlatformsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPlatforms(value);
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
proto.ondewo.nlu.ListPlatformsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListPlatformsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListPlatformsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPlatformsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatformsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string platforms = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListPlatformsResponse.prototype.getPlatformsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListPlatformsResponse} returns this
 */
proto.ondewo.nlu.ListPlatformsResponse.prototype.setPlatformsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListPlatformsResponse} returns this
 */
proto.ondewo.nlu.ListPlatformsResponse.prototype.addPlatforms = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListPlatformsResponse} returns this
 */
proto.ondewo.nlu.ListPlatformsResponse.prototype.clearPlatformsList = function() {
  return this.setPlatformsList([]);
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
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListAccountIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListAccountIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListAccountIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAccountIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAccountIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAccountIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
accountIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListAccountIdsResponse}
 */
proto.ondewo.nlu.ListAccountIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAccountIdsResponse;
  return proto.ondewo.nlu.ListAccountIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAccountIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAccountIdsResponse}
 */
proto.ondewo.nlu.ListAccountIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountIds(value);
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
proto.ondewo.nlu.ListAccountIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAccountIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAccountIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAccountIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string account_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListAccountIdsResponse.prototype.getAccountIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListAccountIdsResponse} returns this
 */
proto.ondewo.nlu.ListAccountIdsResponse.prototype.setAccountIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListAccountIdsResponse} returns this
 */
proto.ondewo.nlu.ListAccountIdsResponse.prototype.addAccountIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListAccountIdsResponse} returns this
 */
proto.ondewo.nlu.ListAccountIdsResponse.prototype.clearAccountIdsList = function() {
  return this.setAccountIdsList([]);
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
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListPropertyIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListPropertyIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListPropertyIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListPropertyIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPropertyIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
propertyIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListPropertyIdsResponse}
 */
proto.ondewo.nlu.ListPropertyIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListPropertyIdsResponse;
  return proto.ondewo.nlu.ListPropertyIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListPropertyIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListPropertyIdsResponse}
 */
proto.ondewo.nlu.ListPropertyIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addPropertyIds(value);
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
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListPropertyIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListPropertyIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListPropertyIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPropertyIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string property_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.getPropertyIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListPropertyIdsResponse} returns this
 */
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.setPropertyIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListPropertyIdsResponse} returns this
 */
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.addPropertyIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListPropertyIdsResponse} returns this
 */
proto.ondewo.nlu.ListPropertyIdsResponse.prototype.clearPropertyIdsList = function() {
  return this.setPropertyIdsList([]);
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
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListDatastreamIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListDatastreamIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListDatastreamIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
datastreamIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListDatastreamIdsResponse}
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListDatastreamIdsResponse;
  return proto.ondewo.nlu.ListDatastreamIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListDatastreamIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListDatastreamIdsResponse}
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatastreamIds(value);
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
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListDatastreamIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListDatastreamIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatastreamIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string datastream_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.getDatastreamIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListDatastreamIdsResponse} returns this
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.setDatastreamIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListDatastreamIdsResponse} returns this
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.addDatastreamIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListDatastreamIdsResponse} returns this
 */
proto.ondewo.nlu.ListDatastreamIdsResponse.prototype.clearDatastreamIdsList = function() {
  return this.setDatastreamIdsList([]);
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
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionFilter: (f = msg.getSessionFilter()) && proto.ondewo.nlu.SessionFilter.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest;
  return proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest}
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.SessionFilter;
      reader.readMessage(value,proto.ondewo.nlu.SessionFilter.deserializeBinaryFromReader);
      msg.setSessionFilter(value);
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
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionFilter();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.SessionFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionFilter session_filter = 2;
 * @return {?proto.ondewo.nlu.SessionFilter}
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.getSessionFilter = function() {
  return /** @type{?proto.ondewo.nlu.SessionFilter} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.SessionFilter, 2));
};


/**
 * @param {?proto.ondewo.nlu.SessionFilter|undefined} value
 * @return {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} returns this
*/
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.setSessionFilter = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest} returns this
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.clearSessionFilter = function() {
  return this.setSessionFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ListOriginIdsOfAllSessionsRequest.prototype.hasSessionFilter = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListOriginIdsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListOriginIdsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListOriginIdsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListOriginIdsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOriginIdsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
originIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.ListOriginIdsResponse}
 */
proto.ondewo.nlu.ListOriginIdsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListOriginIdsResponse;
  return proto.ondewo.nlu.ListOriginIdsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListOriginIdsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListOriginIdsResponse}
 */
proto.ondewo.nlu.ListOriginIdsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOriginIds(value);
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
proto.ondewo.nlu.ListOriginIdsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListOriginIdsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListOriginIdsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListOriginIdsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOriginIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string origin_ids = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.ListOriginIdsResponse.prototype.getOriginIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.ListOriginIdsResponse} returns this
 */
proto.ondewo.nlu.ListOriginIdsResponse.prototype.setOriginIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.ListOriginIdsResponse} returns this
 */
proto.ondewo.nlu.ListOriginIdsResponse.prototype.addOriginIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListOriginIdsResponse} returns this
 */
proto.ondewo.nlu.ListOriginIdsResponse.prototype.clearOriginIdsList = function() {
  return this.setOriginIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.AddSessionLabelsRequest.repeatedFields_ = [2];



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
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AddSessionLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddSessionLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest}
 */
proto.ondewo.nlu.AddSessionLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AddSessionLabelsRequest;
  return proto.ondewo.nlu.AddSessionLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest}
 */
proto.ondewo.nlu.AddSessionLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
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
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AddSessionLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AddSessionLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddSessionLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string labels = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.AddSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.AddSessionLabelsRequest.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.repeatedFields_ = [2];



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
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteSessionLabelsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest}
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteSessionLabelsRequest;
  return proto.ondewo.nlu.DeleteSessionLabelsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest}
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
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
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteSessionLabelsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteSessionLabelsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string labels = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.DeleteSessionLabelsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionLabelsRequest.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
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
proto.ondewo.nlu.AddSessionCommentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AddSessionCommentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AddSessionCommentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddSessionCommentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
comment: (f = msg.getComment()) && ondewo_nlu_common_pb.Comment.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.AddSessionCommentRequest}
 */
proto.ondewo.nlu.AddSessionCommentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AddSessionCommentRequest;
  return proto.ondewo.nlu.AddSessionCommentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AddSessionCommentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AddSessionCommentRequest}
 */
proto.ondewo.nlu.AddSessionCommentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = new ondewo_nlu_common_pb.Comment;
      reader.readMessage(value,ondewo_nlu_common_pb.Comment.deserializeBinaryFromReader);
      msg.setComment(value);
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
proto.ondewo.nlu.AddSessionCommentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AddSessionCommentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AddSessionCommentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddSessionCommentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_common_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.AddSessionCommentRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddSessionCommentRequest} returns this
 */
proto.ondewo.nlu.AddSessionCommentRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Comment comment = 2;
 * @return {?proto.ondewo.nlu.Comment}
 */
proto.ondewo.nlu.AddSessionCommentRequest.prototype.getComment = function() {
  return /** @type{?proto.ondewo.nlu.Comment} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_common_pb.Comment, 2));
};


/**
 * @param {?proto.ondewo.nlu.Comment|undefined} value
 * @return {!proto.ondewo.nlu.AddSessionCommentRequest} returns this
*/
proto.ondewo.nlu.AddSessionCommentRequest.prototype.setComment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AddSessionCommentRequest} returns this
 */
proto.ondewo.nlu.AddSessionCommentRequest.prototype.clearComment = function() {
  return this.setComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AddSessionCommentRequest.prototype.hasComment = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.repeatedFields_ = [2];



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
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteSessionCommentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteSessionCommentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
commentNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest}
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteSessionCommentsRequest;
  return proto.ondewo.nlu.DeleteSessionCommentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteSessionCommentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest}
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommentNames(value);
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
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteSessionCommentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteSessionCommentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommentNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string comment_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.getCommentNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.setCommentNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.addCommentNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.DeleteSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.DeleteSessionCommentsRequest.prototype.clearCommentNamesList = function() {
  return this.setCommentNamesList([]);
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
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.UpdateSessionCommentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.UpdateSessionCommentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
comment: (f = msg.getComment()) && ondewo_nlu_common_pb.Comment.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.UpdateSessionCommentsRequest}
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.UpdateSessionCommentsRequest;
  return proto.ondewo.nlu.UpdateSessionCommentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.UpdateSessionCommentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.UpdateSessionCommentsRequest}
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = new ondewo_nlu_common_pb.Comment;
      reader.readMessage(value,ondewo_nlu_common_pb.Comment.deserializeBinaryFromReader);
      msg.setComment(value);
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
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.UpdateSessionCommentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.UpdateSessionCommentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ondewo_nlu_common_pb.Comment.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.UpdateSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Comment comment = 2;
 * @return {?proto.ondewo.nlu.Comment}
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.getComment = function() {
  return /** @type{?proto.ondewo.nlu.Comment} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_common_pb.Comment, 2));
};


/**
 * @param {?proto.ondewo.nlu.Comment|undefined} value
 * @return {!proto.ondewo.nlu.UpdateSessionCommentsRequest} returns this
*/
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.setComment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.UpdateSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.clearComment = function() {
  return this.setComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.UpdateSessionCommentsRequest.prototype.hasComment = function() {
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
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionCommentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionCommentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionCommentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.ondewo.nlu.ListSessionCommentsRequest}
 */
proto.ondewo.nlu.ListSessionCommentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionCommentsRequest;
  return proto.ondewo.nlu.ListSessionCommentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionCommentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionCommentsRequest}
 */
proto.ondewo.nlu.ListSessionCommentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
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
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionCommentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionCommentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionCommentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
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
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionCommentsRequest} returns this
 */
proto.ondewo.nlu.ListSessionCommentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListSessionCommentsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionCommentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionCommentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionCommentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
commentList: jspb.Message.toObjectList(msg.getCommentList(),
    ondewo_nlu_common_pb.Comment.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.ListSessionCommentsResponse}
 */
proto.ondewo.nlu.ListSessionCommentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionCommentsResponse;
  return proto.ondewo.nlu.ListSessionCommentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionCommentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionCommentsResponse}
 */
proto.ondewo.nlu.ListSessionCommentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ondewo_nlu_common_pb.Comment;
      reader.readMessage(value,ondewo_nlu_common_pb.Comment.deserializeBinaryFromReader);
      msg.addComment(value);
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
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionCommentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionCommentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionCommentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommentList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ondewo_nlu_common_pb.Comment.serializeBinaryToWriter
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
 * repeated Comment comment = 1;
 * @return {!Array<!proto.ondewo.nlu.Comment>}
 */
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.getCommentList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Comment>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_common_pb.Comment, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Comment>} value
 * @return {!proto.ondewo.nlu.ListSessionCommentsResponse} returns this
*/
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.setCommentList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Comment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Comment}
 */
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.addComment = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Comment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListSessionCommentsResponse} returns this
 */
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.clearCommentList = function() {
  return this.setCommentList([]);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionCommentsResponse} returns this
 */
proto.ondewo.nlu.ListSessionCommentsResponse.prototype.setPageToken = function(value) {
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
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionReviewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionReviewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionReviewView: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.ondewo.nlu.ListSessionReviewsRequest}
 */
proto.ondewo.nlu.ListSessionReviewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionReviewsRequest;
  return proto.ondewo.nlu.ListSessionReviewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionReviewsRequest}
 */
proto.ondewo.nlu.ListSessionReviewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.SessionReview.View} */ (reader.readEnum());
      msg.setSessionReviewView(value);
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
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionReviewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionReviewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionReviewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionReviewView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
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
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionReviewsRequest} returns this
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionReview.View session_review_view = 2;
 * @return {!proto.ondewo.nlu.SessionReview.View}
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.getSessionReviewView = function() {
  return /** @type {!proto.ondewo.nlu.SessionReview.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionReview.View} value
 * @return {!proto.ondewo.nlu.ListSessionReviewsRequest} returns this
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.setSessionReviewView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionReviewsRequest} returns this
 */
proto.ondewo.nlu.ListSessionReviewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListSessionReviewsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListSessionReviewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListSessionReviewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionReviewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionReviewsList: jspb.Message.toObjectList(msg.getSessionReviewsList(),
    proto.ondewo.nlu.SessionReview.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.ListSessionReviewsResponse}
 */
proto.ondewo.nlu.ListSessionReviewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListSessionReviewsResponse;
  return proto.ondewo.nlu.ListSessionReviewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListSessionReviewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListSessionReviewsResponse}
 */
proto.ondewo.nlu.ListSessionReviewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.SessionReview;
      reader.readMessage(value,proto.ondewo.nlu.SessionReview.deserializeBinaryFromReader);
      msg.addSessionReviews(value);
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
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListSessionReviewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListSessionReviewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListSessionReviewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionReviewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.SessionReview.serializeBinaryToWriter
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
 * repeated SessionReview session_reviews = 1;
 * @return {!Array<!proto.ondewo.nlu.SessionReview>}
 */
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.getSessionReviewsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.SessionReview>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.SessionReview, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.SessionReview>} value
 * @return {!proto.ondewo.nlu.ListSessionReviewsResponse} returns this
*/
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.setSessionReviewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.SessionReview=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.SessionReview}
 */
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.addSessionReviews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.SessionReview, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListSessionReviewsResponse} returns this
 */
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.clearSessionReviewsList = function() {
  return this.setSessionReviewsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListSessionReviewsResponse} returns this
 */
proto.ondewo.nlu.ListSessionReviewsResponse.prototype.setNextPageToken = function(value) {
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
proto.ondewo.nlu.GetSessionReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetSessionReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionReviewId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionReviewView: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ondewo.nlu.GetSessionReviewRequest}
 */
proto.ondewo.nlu.GetSessionReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetSessionReviewRequest;
  return proto.ondewo.nlu.GetSessionReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetSessionReviewRequest}
 */
proto.ondewo.nlu.GetSessionReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionReviewId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.SessionReview.View} */ (reader.readEnum());
      msg.setSessionReviewView(value);
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
proto.ondewo.nlu.GetSessionReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetSessionReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetSessionReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetSessionReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionReviewId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionReviewView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string session_review_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetSessionReviewRequest.prototype.getSessionReviewId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetSessionReviewRequest} returns this
 */
proto.ondewo.nlu.GetSessionReviewRequest.prototype.setSessionReviewId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionReview.View session_review_view = 2;
 * @return {!proto.ondewo.nlu.SessionReview.View}
 */
proto.ondewo.nlu.GetSessionReviewRequest.prototype.getSessionReviewView = function() {
  return /** @type {!proto.ondewo.nlu.SessionReview.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionReview.View} value
 * @return {!proto.ondewo.nlu.GetSessionReviewRequest} returns this
 */
proto.ondewo.nlu.GetSessionReviewRequest.prototype.setSessionReviewView = function(value) {
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
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetLatestSessionReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionReviewView: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ondewo.nlu.GetLatestSessionReviewRequest}
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetLatestSessionReviewRequest;
  return proto.ondewo.nlu.GetLatestSessionReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetLatestSessionReviewRequest}
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionId(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.SessionReview.View} */ (reader.readEnum());
      msg.setSessionReviewView(value);
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
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetLatestSessionReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetLatestSessionReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionReviewView();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetLatestSessionReviewRequest} returns this
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional SessionReview.View session_review_view = 2;
 * @return {!proto.ondewo.nlu.SessionReview.View}
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.getSessionReviewView = function() {
  return /** @type {!proto.ondewo.nlu.SessionReview.View} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.SessionReview.View} value
 * @return {!proto.ondewo.nlu.GetLatestSessionReviewRequest} returns this
 */
proto.ondewo.nlu.GetLatestSessionReviewRequest.prototype.setSessionReviewView = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ondewo.nlu.FileResource.oneofGroups_ = [[1,2,3,4]];

/**
 * @enum {number}
 */
proto.ondewo.nlu.FileResource.FileResourceCase = {
  FILE_RESOURCE_NOT_SET: 0,
  DOCUMENT_FILE_RESOURCE: 1,
  AUDIO_FILE_RESOURCE: 2,
  IMAGE_FILE_RESOURCE: 3,
  VIDEO_FILE_RESOURCE: 4
};

/**
 * @return {proto.ondewo.nlu.FileResource.FileResourceCase}
 */
proto.ondewo.nlu.FileResource.prototype.getFileResourceCase = function() {
  return /** @type {proto.ondewo.nlu.FileResource.FileResourceCase} */(jspb.Message.computeOneofCase(this, proto.ondewo.nlu.FileResource.oneofGroups_[0]));
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
proto.ondewo.nlu.FileResource.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.FileResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.FileResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FileResource.toObject = function(includeInstance, msg) {
  var f, obj = {
documentFileResource: (f = msg.getDocumentFileResource()) && proto.ondewo.nlu.DocumentFileResource.toObject(includeInstance, f),
audioFileResource: (f = msg.getAudioFileResource()) && proto.ondewo.nlu.AudioFileResource.toObject(includeInstance, f),
imageFileResource: (f = msg.getImageFileResource()) && proto.ondewo.nlu.ImageFileResource.toObject(includeInstance, f),
videoFileResource: (f = msg.getVideoFileResource()) && proto.ondewo.nlu.VideoFileResource.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.FileResource}
 */
proto.ondewo.nlu.FileResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.FileResource;
  return proto.ondewo.nlu.FileResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.FileResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.FileResource}
 */
proto.ondewo.nlu.FileResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.DocumentFileResource;
      reader.readMessage(value,proto.ondewo.nlu.DocumentFileResource.deserializeBinaryFromReader);
      msg.setDocumentFileResource(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.setAudioFileResource(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.ImageFileResource;
      reader.readMessage(value,proto.ondewo.nlu.ImageFileResource.deserializeBinaryFromReader);
      msg.setImageFileResource(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.VideoFileResource;
      reader.readMessage(value,proto.ondewo.nlu.VideoFileResource.deserializeBinaryFromReader);
      msg.setVideoFileResource(value);
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
proto.ondewo.nlu.FileResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.FileResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.FileResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.FileResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentFileResource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.DocumentFileResource.serializeBinaryToWriter
    );
  }
  f = message.getAudioFileResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
  f = message.getImageFileResource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.ImageFileResource.serializeBinaryToWriter
    );
  }
  f = message.getVideoFileResource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.VideoFileResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional DocumentFileResource document_file_resource = 1;
 * @return {?proto.ondewo.nlu.DocumentFileResource}
 */
proto.ondewo.nlu.FileResource.prototype.getDocumentFileResource = function() {
  return /** @type{?proto.ondewo.nlu.DocumentFileResource} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.DocumentFileResource, 1));
};


/**
 * @param {?proto.ondewo.nlu.DocumentFileResource|undefined} value
 * @return {!proto.ondewo.nlu.FileResource} returns this
*/
proto.ondewo.nlu.FileResource.prototype.setDocumentFileResource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ondewo.nlu.FileResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FileResource} returns this
 */
proto.ondewo.nlu.FileResource.prototype.clearDocumentFileResource = function() {
  return this.setDocumentFileResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FileResource.prototype.hasDocumentFileResource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AudioFileResource audio_file_resource = 2;
 * @return {?proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.FileResource.prototype.getAudioFileResource = function() {
  return /** @type{?proto.ondewo.nlu.AudioFileResource} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.AudioFileResource, 2));
};


/**
 * @param {?proto.ondewo.nlu.AudioFileResource|undefined} value
 * @return {!proto.ondewo.nlu.FileResource} returns this
*/
proto.ondewo.nlu.FileResource.prototype.setAudioFileResource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ondewo.nlu.FileResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FileResource} returns this
 */
proto.ondewo.nlu.FileResource.prototype.clearAudioFileResource = function() {
  return this.setAudioFileResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FileResource.prototype.hasAudioFileResource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ImageFileResource image_file_resource = 3;
 * @return {?proto.ondewo.nlu.ImageFileResource}
 */
proto.ondewo.nlu.FileResource.prototype.getImageFileResource = function() {
  return /** @type{?proto.ondewo.nlu.ImageFileResource} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.ImageFileResource, 3));
};


/**
 * @param {?proto.ondewo.nlu.ImageFileResource|undefined} value
 * @return {!proto.ondewo.nlu.FileResource} returns this
*/
proto.ondewo.nlu.FileResource.prototype.setImageFileResource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ondewo.nlu.FileResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FileResource} returns this
 */
proto.ondewo.nlu.FileResource.prototype.clearImageFileResource = function() {
  return this.setImageFileResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FileResource.prototype.hasImageFileResource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoFileResource video_file_resource = 4;
 * @return {?proto.ondewo.nlu.VideoFileResource}
 */
proto.ondewo.nlu.FileResource.prototype.getVideoFileResource = function() {
  return /** @type{?proto.ondewo.nlu.VideoFileResource} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.VideoFileResource, 4));
};


/**
 * @param {?proto.ondewo.nlu.VideoFileResource|undefined} value
 * @return {!proto.ondewo.nlu.FileResource} returns this
*/
proto.ondewo.nlu.FileResource.prototype.setVideoFileResource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ondewo.nlu.FileResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.FileResource} returns this
 */
proto.ondewo.nlu.FileResource.prototype.clearVideoFileResource = function() {
  return this.setVideoFileResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.FileResource.prototype.hasVideoFileResource = function() {
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
proto.ondewo.nlu.DocumentFileResource.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DocumentFileResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DocumentFileResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DocumentFileResource.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
bytes: msg.getBytes_asB64(),
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
 * @return {!proto.ondewo.nlu.DocumentFileResource}
 */
proto.ondewo.nlu.DocumentFileResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DocumentFileResource;
  return proto.ondewo.nlu.DocumentFileResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DocumentFileResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DocumentFileResource}
 */
proto.ondewo.nlu.DocumentFileResource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
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
proto.ondewo.nlu.DocumentFileResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DocumentFileResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DocumentFileResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DocumentFileResource.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
proto.ondewo.nlu.DocumentFileResource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes bytes = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes bytes = 3;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
*/
proto.ondewo.nlu.DocumentFileResource.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
*/
proto.ondewo.nlu.DocumentFileResource.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string modified_by = 7;
 * @return {string}
 */
proto.ondewo.nlu.DocumentFileResource.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DocumentFileResource} returns this
 */
proto.ondewo.nlu.DocumentFileResource.prototype.setModifiedBy = function(value) {
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
proto.ondewo.nlu.ImageFileResource.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ImageFileResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ImageFileResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ImageFileResource.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
bytes: msg.getBytes_asB64(),
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
 * @return {!proto.ondewo.nlu.ImageFileResource}
 */
proto.ondewo.nlu.ImageFileResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ImageFileResource;
  return proto.ondewo.nlu.ImageFileResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ImageFileResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ImageFileResource}
 */
proto.ondewo.nlu.ImageFileResource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
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
proto.ondewo.nlu.ImageFileResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ImageFileResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ImageFileResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ImageFileResource.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
proto.ondewo.nlu.ImageFileResource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes bytes = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes bytes = 3;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
*/
proto.ondewo.nlu.ImageFileResource.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ImageFileResource.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
*/
proto.ondewo.nlu.ImageFileResource.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.ImageFileResource.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string created_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string modified_by = 7;
 * @return {string}
 */
proto.ondewo.nlu.ImageFileResource.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ImageFileResource} returns this
 */
proto.ondewo.nlu.ImageFileResource.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.AudioFileResource.repeatedFields_ = [7];



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
proto.ondewo.nlu.AudioFileResource.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AudioFileResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AudioFileResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AudioFileResource.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
bytes: msg.getBytes_asB64(),
language: jspb.Message.getFieldWithDefault(msg, 3, ""),
durationInS: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
sampleRate: jspb.Message.getFieldWithDefault(msg, 5, 0),
audioFileResourceType: jspb.Message.getFieldWithDefault(msg, 6, 0),
transcriptionsList: jspb.Message.toObjectList(msg.getTranscriptionsList(),
    proto.ondewo.nlu.S2tTranscription.toObject, includeInstance),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 10, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 11, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.AudioFileResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AudioFileResource;
  return proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AudioFileResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInS(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSampleRate(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.AudioFileResourceType} */ (reader.readEnum());
      msg.setAudioFileResourceType(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.S2tTranscription;
      reader.readMessage(value,proto.ondewo.nlu.S2tTranscription.deserializeBinaryFromReader);
      msg.addTranscriptions(value);
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
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
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
proto.ondewo.nlu.AudioFileResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AudioFileResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
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
  f = message.getDurationInS();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getSampleRate();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getAudioFileResourceType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTranscriptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.ondewo.nlu.S2tTranscription.serializeBinaryToWriter
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
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes bytes = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes bytes = 2;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string language = 3;
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional float duration_in_s = 4;
 * @return {number}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getDurationInS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setDurationInS = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 sample_rate = 5;
 * @return {number}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getSampleRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setSampleRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional AudioFileResourceType audio_file_resource_type = 6;
 * @return {!proto.ondewo.nlu.AudioFileResourceType}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getAudioFileResourceType = function() {
  return /** @type {!proto.ondewo.nlu.AudioFileResourceType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResourceType} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setAudioFileResourceType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * repeated S2tTranscription transcriptions = 7;
 * @return {!Array<!proto.ondewo.nlu.S2tTranscription>}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getTranscriptionsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.S2tTranscription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.S2tTranscription, 7));
};


/**
 * @param {!Array<!proto.ondewo.nlu.S2tTranscription>} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
*/
proto.ondewo.nlu.AudioFileResource.prototype.setTranscriptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.ondewo.nlu.S2tTranscription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.S2tTranscription}
 */
proto.ondewo.nlu.AudioFileResource.prototype.addTranscriptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.ondewo.nlu.S2tTranscription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.clearTranscriptionsList = function() {
  return this.setTranscriptionsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
*/
proto.ondewo.nlu.AudioFileResource.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AudioFileResource.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
*/
proto.ondewo.nlu.AudioFileResource.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.AudioFileResource.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string created_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string modified_by = 11;
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string display_name = 12;
 * @return {string}
 */
proto.ondewo.nlu.AudioFileResource.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AudioFileResource} returns this
 */
proto.ondewo.nlu.AudioFileResource.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.ondewo.nlu.VideoFileResource.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.VideoFileResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.VideoFileResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.VideoFileResource.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
bytes: msg.getBytes_asB64(),
durationInS: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
resolution: jspb.Message.getFieldWithDefault(msg, 5, ""),
frameRate: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
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
 * @return {!proto.ondewo.nlu.VideoFileResource}
 */
proto.ondewo.nlu.VideoFileResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.VideoFileResource;
  return proto.ondewo.nlu.VideoFileResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.VideoFileResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.VideoFileResource}
 */
proto.ondewo.nlu.VideoFileResource.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDurationInS(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolution(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFrameRate(value);
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
proto.ondewo.nlu.VideoFileResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.VideoFileResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.VideoFileResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.VideoFileResource.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getBytes_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getDurationInS();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getResolution();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFrameRate();
  if (f !== 0.0) {
    writer.writeFloat(
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
proto.ondewo.nlu.VideoFileResource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes bytes = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getBytes = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes bytes = 3;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setBytes = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional float duration_in_s = 4;
 * @return {number}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getDurationInS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setDurationInS = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string resolution = 5;
 * @return {string}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float frame_rate = 6;
 * @return {number}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getFrameRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setFrameRate = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
*/
proto.ondewo.nlu.VideoFileResource.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.VideoFileResource.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
*/
proto.ondewo.nlu.VideoFileResource.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.VideoFileResource.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string created_by = 9;
 * @return {string}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string modified_by = 10;
 * @return {string}
 */
proto.ondewo.nlu.VideoFileResource.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.VideoFileResource} returns this
 */
proto.ondewo.nlu.VideoFileResource.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.GetAudioFilesRequest.repeatedFields_ = [2];



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
proto.ondewo.nlu.GetAudioFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAudioFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAudioFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
resourceView: jspb.Message.getFieldWithDefault(msg, 3, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
sortingMode: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest}
 */
proto.ondewo.nlu.GetAudioFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAudioFilesRequest;
  return proto.ondewo.nlu.GetAudioFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAudioFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest}
 */
proto.ondewo.nlu.GetAudioFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.ResourceView} */ (reader.readEnum());
      msg.setResourceView(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
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
proto.ondewo.nlu.GetAudioFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAudioFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAudioFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getResourceView();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getSortingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional ResourceView resource_view = 3;
 * @return {!proto.ondewo.nlu.ResourceView}
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.getResourceView = function() {
  return /** @type {!proto.ondewo.nlu.ResourceView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.ResourceView} value
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.setResourceView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional SortingMode sorting_mode = 5;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.GetAudioFilesRequest} returns this
 */
proto.ondewo.nlu.GetAudioFilesRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.GetAudioFilesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.GetAudioFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAudioFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAudioFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
audioFilesList: jspb.Message.toObjectList(msg.getAudioFilesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance),
errorMessage: jspb.Message.getFieldWithDefault(msg, 2, ""),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse}
 */
proto.ondewo.nlu.GetAudioFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAudioFilesResponse;
  return proto.ondewo.nlu.GetAudioFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAudioFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse}
 */
proto.ondewo.nlu.GetAudioFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFiles(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
      break;
    case 3:
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
proto.ondewo.nlu.GetAudioFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAudioFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAudioFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated AudioFileResource audio_files = 1;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.getAudioFilesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse} returns this
*/
proto.ondewo.nlu.GetAudioFilesResponse.prototype.setAudioFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.addAudioFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse} returns this
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.clearAudioFilesList = function() {
  return this.setAudioFilesList([]);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse} returns this
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFilesResponse} returns this
 */
proto.ondewo.nlu.GetAudioFilesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.AddAudioFilesRequest.repeatedFields_ = [3];



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
proto.ondewo.nlu.AddAudioFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AddAudioFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AddAudioFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddAudioFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
audioFileResourcesList: jspb.Message.toObjectList(msg.getAudioFileResourcesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance),
sessionStepId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest}
 */
proto.ondewo.nlu.AddAudioFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AddAudioFilesRequest;
  return proto.ondewo.nlu.AddAudioFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AddAudioFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest}
 */
proto.ondewo.nlu.AddAudioFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFileResources(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionStepId(value);
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
proto.ondewo.nlu.AddAudioFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AddAudioFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AddAudioFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddAudioFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAudioFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
  f = message.getSessionStepId();
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
proto.ondewo.nlu.AddAudioFilesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest} returns this
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest} returns this
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AudioFileResource audio_file_resources = 3;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.getAudioFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 3));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest} returns this
*/
proto.ondewo.nlu.AddAudioFilesRequest.prototype.setAudioFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.addAudioFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest} returns this
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.clearAudioFileResourcesList = function() {
  return this.setAudioFileResourcesList([]);
};


/**
 * optional string session_step_id = 4;
 * @return {string}
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.getSessionStepId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddAudioFilesRequest} returns this
 */
proto.ondewo.nlu.AddAudioFilesRequest.prototype.setSessionStepId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.AddAudioFilesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.AddAudioFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.AddAudioFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.AddAudioFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddAudioFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
audioFileResourcesList: jspb.Message.toObjectList(msg.getAudioFileResourcesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance),
errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.AddAudioFilesResponse}
 */
proto.ondewo.nlu.AddAudioFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.AddAudioFilesResponse;
  return proto.ondewo.nlu.AddAudioFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.AddAudioFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.AddAudioFilesResponse}
 */
proto.ondewo.nlu.AddAudioFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFileResources(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
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
proto.ondewo.nlu.AddAudioFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.AddAudioFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.AddAudioFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.AddAudioFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioFileResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated AudioFileResource audio_file_resources = 1;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.AddAudioFilesResponse.prototype.getAudioFileResourcesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.AddAudioFilesResponse} returns this
*/
proto.ondewo.nlu.AddAudioFilesResponse.prototype.setAudioFileResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.AddAudioFilesResponse.prototype.addAudioFileResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.AddAudioFilesResponse} returns this
 */
proto.ondewo.nlu.AddAudioFilesResponse.prototype.clearAudioFileResourcesList = function() {
  return this.setAudioFileResourcesList([]);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.AddAudioFilesResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.AddAudioFilesResponse} returns this
 */
proto.ondewo.nlu.AddAudioFilesResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.repeatedFields_ = [2];



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
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteAudioFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteAudioFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
namesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest}
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteAudioFilesRequest;
  return proto.ondewo.nlu.DeleteAudioFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteAudioFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest}
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addNames(value);
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
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteAudioFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteAudioFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.DeleteAudioFilesRequest} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.DeleteAudioFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.DeleteAudioFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
errorMessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse}
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.DeleteAudioFilesResponse;
  return proto.ondewo.nlu.DeleteAudioFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.DeleteAudioFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse}
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
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
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.DeleteAudioFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.DeleteAudioFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.DeleteAudioFilesResponse} returns this
 */
proto.ondewo.nlu.DeleteAudioFilesResponse.prototype.setErrorMessage = function(value) {
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
proto.ondewo.nlu.ListAudioFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAudioFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAudioFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAudioFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
resourceView: jspb.Message.getFieldWithDefault(msg, 3, 0),
pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
sortingMode: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest}
 */
proto.ondewo.nlu.ListAudioFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAudioFilesRequest;
  return proto.ondewo.nlu.ListAudioFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAudioFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest}
 */
proto.ondewo.nlu.ListAudioFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.ResourceView} */ (reader.readEnum());
      msg.setResourceView(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
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
proto.ondewo.nlu.ListAudioFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAudioFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAudioFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAudioFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceView();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getSortingMode();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest} returns this
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest} returns this
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ResourceView resource_view = 3;
 * @return {!proto.ondewo.nlu.ResourceView}
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.getResourceView = function() {
  return /** @type {!proto.ondewo.nlu.ResourceView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.ResourceView} value
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest} returns this
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.setResourceView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest} returns this
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional SortingMode sorting_mode = 5;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.ListAudioFilesRequest} returns this
 */
proto.ondewo.nlu.ListAudioFilesRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.ListAudioFilesResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.ListAudioFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.ListAudioFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.ListAudioFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAudioFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
audioFilesList: jspb.Message.toObjectList(msg.getAudioFilesList(),
    proto.ondewo.nlu.AudioFileResource.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
errorMessage: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse}
 */
proto.ondewo.nlu.ListAudioFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.ListAudioFilesResponse;
  return proto.ondewo.nlu.ListAudioFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.ListAudioFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse}
 */
proto.ondewo.nlu.ListAudioFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.AudioFileResource;
      reader.readMessage(value,proto.ondewo.nlu.AudioFileResource.deserializeBinaryFromReader);
      msg.addAudioFiles(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorMessage(value);
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
proto.ondewo.nlu.ListAudioFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.ListAudioFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.ListAudioFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.ListAudioFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudioFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.AudioFileResource.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated AudioFileResource audio_files = 1;
 * @return {!Array<!proto.ondewo.nlu.AudioFileResource>}
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.getAudioFilesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.AudioFileResource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.AudioFileResource, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.AudioFileResource>} value
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse} returns this
*/
proto.ondewo.nlu.ListAudioFilesResponse.prototype.setAudioFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.AudioFileResource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.AudioFileResource}
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.addAudioFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.AudioFileResource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse} returns this
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.clearAudioFilesList = function() {
  return this.setAudioFilesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse} returns this
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.ListAudioFilesResponse} returns this
 */
proto.ondewo.nlu.ListAudioFilesResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.GetAudioFileOfSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
sessionId: jspb.Message.getFieldWithDefault(msg, 2, ""),
resourceView: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.nlu.GetAudioFileOfSessionRequest}
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.GetAudioFileOfSessionRequest;
  return proto.ondewo.nlu.GetAudioFileOfSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.GetAudioFileOfSessionRequest}
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSessionId(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.ResourceView} */ (reader.readEnum());
      msg.setResourceView(value);
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
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.GetAudioFileOfSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceView();
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
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} returns this
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string session_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} returns this
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.setSessionId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ResourceView resource_view = 3;
 * @return {!proto.ondewo.nlu.ResourceView}
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.getResourceView = function() {
  return /** @type {!proto.ondewo.nlu.ResourceView} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.ResourceView} value
 * @return {!proto.ondewo.nlu.GetAudioFileOfSessionRequest} returns this
 */
proto.ondewo.nlu.GetAudioFileOfSessionRequest.prototype.setResourceView = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.TranscriptionType = {
  TRANSCRIPTION_TYPE_UNSPECIFIED: 0,
  TRANSCRIPTION_TYPE_S2T: 1,
  TRANSCRIPTION_TYPE_HUMAN: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.AudioEncoding = {
  AUDIO_ENCODING_UNSPECIFIED: 0,
  AUDIO_ENCODING_LINEAR_16: 1,
  AUDIO_ENCODING_FLAC: 2,
  AUDIO_ENCODING_MULAW: 3,
  AUDIO_ENCODING_AMR: 4,
  AUDIO_ENCODING_AMR_WB: 5,
  AUDIO_ENCODING_OGG_OPUS: 6,
  AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE: 7
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.ComparisonOperator = {
  EQUAL: 0,
  GREATER: 1,
  GREATER_OR_EQUAL: 2,
  LESS_OR_EQUAL: 3,
  CONTAINS: 4,
  STARTS_WITH: 5,
  ENDS_WITH: 6
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.ResourceView = {
  RESOURCE_VIEW_UNSPECIFIED: 0,
  RESOURCE_VIEW_FULL: 1,
  RESOURCE_VIEW_PARTIAL: 2,
  RESOURCE_VIEW_MINIMUM: 3
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.AudioFileResourceType = {
  AUDIO_FILE_RESOURCE_TYPE_UNSPECIFIED: 0,
  AUDIO_FILE_RESOURCE_TYPE_T2S: 1,
  AUDIO_FILE_RESOURCE_TYPE_S2T: 2,
  AUDIO_FILE_RESOURCE_TYPE_S2T_AND_T2S: 3
};

goog.object.extend(exports, proto.ondewo.nlu);
