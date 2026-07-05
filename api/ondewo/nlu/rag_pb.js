// source: ondewo/nlu/rag.proto
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

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var ondewo_nlu_common_pb = require('../../ondewo/nlu/common_pb.js');
goog.object.extend(proto, ondewo_nlu_common_pb);
var ondewo_nlu_operation_metadata_pb = require('../../ondewo/nlu/operation_metadata_pb.js');
goog.object.extend(proto, ondewo_nlu_operation_metadata_pb);
var ondewo_nlu_operations_pb = require('../../ondewo/nlu/operations_pb.js');
goog.object.extend(proto, ondewo_nlu_operations_pb);
var ondewo_nlu_session_pb = require('../../ondewo/nlu/session_pb.js');
goog.object.extend(proto, ondewo_nlu_session_pb);
goog.exportSymbol('proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagChunk', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagChunkMethod', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagComparisonOperator', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawler', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerAuth', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerBrowserConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerConcurrencyConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerContentResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerCookie', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerCrawlStrategy', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerExecutionInfo', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerFilters', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerHtmlAuth', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerHttpAuth', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerMetaDataExtractor', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerMetaDataExtractorType', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerResult', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerResultsConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerRetryConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerSeedUrlFilters', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerSelectorType', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCrawlerSources', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCreateCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagCreateDatasetRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDataset', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDatasetList', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDatasetParsingStatus', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlerResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlerRunsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlerRunsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlersRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteCrawlersResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteDocumentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDeleteRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocAgg', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocument', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocumentIdsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocumentList', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocumentStatus', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDocumentType', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagDownloadDocumentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagFileChunk', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagFileMetadata', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerResultRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerResultsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerResultsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerRunLogsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerRunLogsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGetCrawlerRunRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGraphRagConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagGraphRagMethod', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListCrawlerRunsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListCrawlerRunsResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListCrawlersRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListCrawlersResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListDatasetsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagListDocumentsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagLogic', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagMetadataCondition', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagMetadataConditions', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagParserConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagPartialSuccess', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagRaptorConfig', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagRetrievalRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagRetrievalResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagStartCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagStopCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagStopCrawlerResponse', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagUpdateCrawlerRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagUpdateDatasetRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagUpdateDocumentRequest', null, global);
goog.exportSymbol('proto.ondewo.nlu.RagUploadDocumentRequest', null, global);
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
proto.ondewo.nlu.RagFileMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagFileMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagFileMetadata.displayName = 'proto.ondewo.nlu.RagFileMetadata';
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
proto.ondewo.nlu.RagPartialSuccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagPartialSuccess.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagPartialSuccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagPartialSuccess.displayName = 'proto.ondewo.nlu.RagPartialSuccess';
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
proto.ondewo.nlu.RagCreateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCreateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCreateDatasetRequest.displayName = 'proto.ondewo.nlu.RagCreateDatasetRequest';
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
proto.ondewo.nlu.RagParserConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagParserConfig.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagParserConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagParserConfig.displayName = 'proto.ondewo.nlu.RagParserConfig';
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
proto.ondewo.nlu.RagRaptorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagRaptorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagRaptorConfig.displayName = 'proto.ondewo.nlu.RagRaptorConfig';
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
proto.ondewo.nlu.RagGraphRagConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagGraphRagConfig.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagGraphRagConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGraphRagConfig.displayName = 'proto.ondewo.nlu.RagGraphRagConfig';
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
proto.ondewo.nlu.RagDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDataset.displayName = 'proto.ondewo.nlu.RagDataset';
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
proto.ondewo.nlu.RagDatasetParsingStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDatasetParsingStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDatasetParsingStatus.displayName = 'proto.ondewo.nlu.RagDatasetParsingStatus';
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
proto.ondewo.nlu.RagUpdateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagUpdateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagUpdateDatasetRequest.displayName = 'proto.ondewo.nlu.RagUpdateDatasetRequest';
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
proto.ondewo.nlu.RagDeleteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteRequest.displayName = 'proto.ondewo.nlu.RagDeleteRequest';
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
proto.ondewo.nlu.RagListDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagListDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListDatasetsRequest.displayName = 'proto.ondewo.nlu.RagListDatasetsRequest';
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
proto.ondewo.nlu.RagDatasetList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDatasetList.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDatasetList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDatasetList.displayName = 'proto.ondewo.nlu.RagDatasetList';
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
proto.ondewo.nlu.RagUploadDocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagUploadDocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagUploadDocumentRequest.displayName = 'proto.ondewo.nlu.RagUploadDocumentRequest';
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
proto.ondewo.nlu.RagDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDocument.displayName = 'proto.ondewo.nlu.RagDocument';
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
proto.ondewo.nlu.RagUpdateDocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagUpdateDocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagUpdateDocumentRequest.displayName = 'proto.ondewo.nlu.RagUpdateDocumentRequest';
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
proto.ondewo.nlu.RagDownloadDocumentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDownloadDocumentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDownloadDocumentRequest.displayName = 'proto.ondewo.nlu.RagDownloadDocumentRequest';
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
proto.ondewo.nlu.RagFileChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagFileChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagFileChunk.displayName = 'proto.ondewo.nlu.RagFileChunk';
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
proto.ondewo.nlu.RagListDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagListDocumentsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagListDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListDocumentsRequest.displayName = 'proto.ondewo.nlu.RagListDocumentsRequest';
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
proto.ondewo.nlu.RagMetadataConditions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagMetadataConditions.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagMetadataConditions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagMetadataConditions.displayName = 'proto.ondewo.nlu.RagMetadataConditions';
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
proto.ondewo.nlu.RagMetadataCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagMetadataCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagMetadataCondition.displayName = 'proto.ondewo.nlu.RagMetadataCondition';
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
proto.ondewo.nlu.RagDocumentList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDocumentList.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDocumentList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDocumentList.displayName = 'proto.ondewo.nlu.RagDocumentList';
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
proto.ondewo.nlu.RagDeleteDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteDocumentsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteDocumentsRequest.displayName = 'proto.ondewo.nlu.RagDeleteDocumentsRequest';
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
proto.ondewo.nlu.RagDocumentIdsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDocumentIdsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDocumentIdsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDocumentIdsRequest.displayName = 'proto.ondewo.nlu.RagDocumentIdsRequest';
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
proto.ondewo.nlu.RagRetrievalRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagRetrievalRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagRetrievalRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagRetrievalRequest.displayName = 'proto.ondewo.nlu.RagRetrievalRequest';
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
proto.ondewo.nlu.RagRetrievalResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagRetrievalResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagRetrievalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagRetrievalResponse.displayName = 'proto.ondewo.nlu.RagRetrievalResponse';
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
proto.ondewo.nlu.RagChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagChunk.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagChunk.displayName = 'proto.ondewo.nlu.RagChunk';
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
proto.ondewo.nlu.RagDocAgg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDocAgg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDocAgg.displayName = 'proto.ondewo.nlu.RagDocAgg';
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
proto.ondewo.nlu.RagCreateCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCreateCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCreateCrawlerRequest.displayName = 'proto.ondewo.nlu.RagCreateCrawlerRequest';
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
proto.ondewo.nlu.RagDeleteCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlerRequest.displayName = 'proto.ondewo.nlu.RagDeleteCrawlerRequest';
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
proto.ondewo.nlu.RagDeleteCrawlerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlerResponse.displayName = 'proto.ondewo.nlu.RagDeleteCrawlerResponse';
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
proto.ondewo.nlu.RagDeleteCrawlersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteCrawlersRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlersRequest.displayName = 'proto.ondewo.nlu.RagDeleteCrawlersRequest';
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
proto.ondewo.nlu.RagDeleteCrawlersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteCrawlersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlersResponse.displayName = 'proto.ondewo.nlu.RagDeleteCrawlersResponse';
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
proto.ondewo.nlu.RagListCrawlersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagListCrawlersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListCrawlersRequest.displayName = 'proto.ondewo.nlu.RagListCrawlersRequest';
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
proto.ondewo.nlu.RagListCrawlersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagListCrawlersResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagListCrawlersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListCrawlersResponse.displayName = 'proto.ondewo.nlu.RagListCrawlersResponse';
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
proto.ondewo.nlu.RagGetCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerRequest';
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
proto.ondewo.nlu.RagUpdateCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagUpdateCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagUpdateCrawlerRequest.displayName = 'proto.ondewo.nlu.RagUpdateCrawlerRequest';
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
proto.ondewo.nlu.RagCrawler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawler.displayName = 'proto.ondewo.nlu.RagCrawler';
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
proto.ondewo.nlu.RagCrawlerSources = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagCrawlerSources.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerSources, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerSources.displayName = 'proto.ondewo.nlu.RagCrawlerSources';
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
proto.ondewo.nlu.RagCrawlerFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagCrawlerFilters.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerFilters.displayName = 'proto.ondewo.nlu.RagCrawlerFilters';
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
proto.ondewo.nlu.RagCrawlerSeedUrlFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagCrawlerSeedUrlFilters.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerSeedUrlFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerSeedUrlFilters.displayName = 'proto.ondewo.nlu.RagCrawlerSeedUrlFilters';
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
proto.ondewo.nlu.RagCrawlerAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerAuth.displayName = 'proto.ondewo.nlu.RagCrawlerAuth';
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
proto.ondewo.nlu.RagCrawlerHtmlAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerHtmlAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerHtmlAuth.displayName = 'proto.ondewo.nlu.RagCrawlerHtmlAuth';
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
proto.ondewo.nlu.RagCrawlerHttpAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerHttpAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerHttpAuth.displayName = 'proto.ondewo.nlu.RagCrawlerHttpAuth';
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
proto.ondewo.nlu.RagCrawlerBrowserConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagCrawlerBrowserConfig.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerBrowserConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerBrowserConfig.displayName = 'proto.ondewo.nlu.RagCrawlerBrowserConfig';
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
proto.ondewo.nlu.RagCrawlerCookie = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerCookie, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerCookie.displayName = 'proto.ondewo.nlu.RagCrawlerCookie';
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
proto.ondewo.nlu.RagCrawlerConcurrencyConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerConcurrencyConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerConcurrencyConfig.displayName = 'proto.ondewo.nlu.RagCrawlerConcurrencyConfig';
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
proto.ondewo.nlu.RagCrawlerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerConfig.displayName = 'proto.ondewo.nlu.RagCrawlerConfig';
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
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.displayName = 'proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig';
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
proto.ondewo.nlu.RagCrawlerResultsConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagCrawlerResultsConfig.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerResultsConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerResultsConfig.displayName = 'proto.ondewo.nlu.RagCrawlerResultsConfig';
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
proto.ondewo.nlu.RagCrawlerMetaDataExtractor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerMetaDataExtractor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerMetaDataExtractor.displayName = 'proto.ondewo.nlu.RagCrawlerMetaDataExtractor';
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
proto.ondewo.nlu.RagCrawlerRetryConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerRetryConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerRetryConfig.displayName = 'proto.ondewo.nlu.RagCrawlerRetryConfig';
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
proto.ondewo.nlu.RagCrawlerContentResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerContentResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerContentResult.displayName = 'proto.ondewo.nlu.RagCrawlerContentResult';
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
proto.ondewo.nlu.RagCrawlerExecutionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerExecutionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerExecutionInfo.displayName = 'proto.ondewo.nlu.RagCrawlerExecutionInfo';
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
proto.ondewo.nlu.RagCrawlerResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagCrawlerResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagCrawlerResult.displayName = 'proto.ondewo.nlu.RagCrawlerResult';
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
proto.ondewo.nlu.RagStartCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagStartCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagStartCrawlerRequest.displayName = 'proto.ondewo.nlu.RagStartCrawlerRequest';
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
proto.ondewo.nlu.RagGetCrawlerRunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerRunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerRunRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerRunRequest';
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
proto.ondewo.nlu.RagListCrawlerRunsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagListCrawlerRunsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListCrawlerRunsRequest.displayName = 'proto.ondewo.nlu.RagListCrawlerRunsRequest';
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
proto.ondewo.nlu.RagListCrawlerRunsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagListCrawlerRunsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagListCrawlerRunsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagListCrawlerRunsResponse.displayName = 'proto.ondewo.nlu.RagListCrawlerRunsResponse';
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
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlerRunsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.displayName = 'proto.ondewo.nlu.RagDeleteCrawlerRunsRequest';
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
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagDeleteCrawlerRunsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.displayName = 'proto.ondewo.nlu.RagDeleteCrawlerRunsResponse';
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
proto.ondewo.nlu.RagStopCrawlerRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagStopCrawlerRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagStopCrawlerRequest.displayName = 'proto.ondewo.nlu.RagStopCrawlerRequest';
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
proto.ondewo.nlu.RagStopCrawlerResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagStopCrawlerResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagStopCrawlerResponse.displayName = 'proto.ondewo.nlu.RagStopCrawlerResponse';
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
proto.ondewo.nlu.RagGetCrawlerResultsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerResultsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerResultsRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerResultsRequest';
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
proto.ondewo.nlu.RagGetCrawlerResultsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagGetCrawlerResultsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerResultsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerResultsResponse.displayName = 'proto.ondewo.nlu.RagGetCrawlerResultsResponse';
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
proto.ondewo.nlu.RagGetCrawlerResultRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerResultRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerResultRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerResultRequest';
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
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.displayName = 'proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest';
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
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.displayName = 'proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest';
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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest';
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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.displayName = 'proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse';
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
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerRunLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.displayName = 'proto.ondewo.nlu.RagGetCrawlerRunLogsRequest';
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
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.ondewo.nlu.RagGetCrawlerRunLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.displayName = 'proto.ondewo.nlu.RagGetCrawlerRunLogsResponse';
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
proto.ondewo.nlu.RagFileMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagFileMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagFileMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagFileMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
fileName: jspb.Message.getFieldWithDefault(msg, 1, ""),
contentType: jspb.Message.getFieldWithDefault(msg, 2, ""),
size: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.nlu.RagFileMetadata}
 */
proto.ondewo.nlu.RagFileMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagFileMetadata;
  return proto.ondewo.nlu.RagFileMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagFileMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagFileMetadata}
 */
proto.ondewo.nlu.RagFileMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContentType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
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
proto.ondewo.nlu.RagFileMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagFileMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagFileMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagFileMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContentType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string file_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagFileMetadata.prototype.getFileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagFileMetadata} returns this
 */
proto.ondewo.nlu.RagFileMetadata.prototype.setFileName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content_type = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagFileMetadata.prototype.getContentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagFileMetadata} returns this
 */
proto.ondewo.nlu.RagFileMetadata.prototype.setContentType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 size = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagFileMetadata.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagFileMetadata} returns this
 */
proto.ondewo.nlu.RagFileMetadata.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagPartialSuccess.repeatedFields_ = [2];



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
proto.ondewo.nlu.RagPartialSuccess.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagPartialSuccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagPartialSuccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagPartialSuccess.toObject = function(includeInstance, msg) {
  var f, obj = {
successCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
errorsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagPartialSuccess}
 */
proto.ondewo.nlu.RagPartialSuccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagPartialSuccess;
  return proto.ondewo.nlu.RagPartialSuccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagPartialSuccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagPartialSuccess}
 */
proto.ondewo.nlu.RagPartialSuccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSuccessCount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
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
proto.ondewo.nlu.RagPartialSuccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagPartialSuccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagPartialSuccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagPartialSuccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int32 success_count = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.getSuccessCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagPartialSuccess} returns this
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.setSuccessCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string errors = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagPartialSuccess} returns this
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.setErrorsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagPartialSuccess} returns this
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.addErrors = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagPartialSuccess} returns this
 */
proto.ondewo.nlu.RagPartialSuccess.prototype.clearErrorsList = function() {
  return this.setErrorsList([]);
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
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCreateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCreateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCreateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
avatar: jspb.Message.getFieldWithDefault(msg, 5, ""),
chunkMethod: jspb.Message.getFieldWithDefault(msg, 6, 0),
parserConfig: (f = msg.getParserConfig()) && proto.ondewo.nlu.RagParserConfig.toObject(includeInstance, f),
embeddingModelCcaiServiceName: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCreateDatasetRequest;
  return proto.ondewo.nlu.RagCreateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCreateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (reader.readEnum());
      msg.setChunkMethod(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.RagParserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader);
      msg.setParserConfig(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbeddingModelCcaiServiceName(value);
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
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCreateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCreateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCreateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChunkMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getParserConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingModelCcaiServiceName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string avatar = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional RagChunkMethod chunk_method = 6;
 * @return {!proto.ondewo.nlu.RagChunkMethod}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getChunkMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagChunkMethod} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setChunkMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional RagParserConfig parser_config = 7;
 * @return {?proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getParserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagParserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagParserConfig, 7));
};


/**
 * @param {?proto.ondewo.nlu.RagParserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
*/
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setParserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.clearParserConfig = function() {
  return this.setParserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.hasParserConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string embedding_model_ccai_service_name = 8;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.getEmbeddingModelCcaiServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagCreateDatasetRequest.prototype.setEmbeddingModelCcaiServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagParserConfig.repeatedFields_ = [7];



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
proto.ondewo.nlu.RagParserConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagParserConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagParserConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagParserConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
autoKeywords: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
autoQuestions: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
chunkTokenNum: jspb.Message.getFieldWithDefault(msg, 3, 0),
delimiter: jspb.Message.getFieldWithDefault(msg, 4, ""),
html4excel: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
layoutRecognize: jspb.Message.getFieldWithDefault(msg, 6, ""),
tagKbIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
topnTags: jspb.Message.getFieldWithDefault(msg, 8, 0),
filenameEmbdWeight: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
taskPageSize: jspb.Message.getFieldWithDefault(msg, 10, 0),
raptor: (f = msg.getRaptor()) && proto.ondewo.nlu.RagRaptorConfig.toObject(includeInstance, f),
graphrag: (f = msg.getGraphrag()) && proto.ondewo.nlu.RagGraphRagConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagParserConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagParserConfig;
  return proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagParserConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAutoKeywords(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAutoQuestions(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkTokenNum(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDelimiter(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHtml4excel(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLayoutRecognize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addTagKbIds(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTopnTags(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFilenameEmbdWeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTaskPageSize(value);
      break;
    case 11:
      var value = new proto.ondewo.nlu.RagRaptorConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagRaptorConfig.deserializeBinaryFromReader);
      msg.setRaptor(value);
      break;
    case 12:
      var value = new proto.ondewo.nlu.RagGraphRagConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagGraphRagConfig.deserializeBinaryFromReader);
      msg.setGraphrag(value);
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
proto.ondewo.nlu.RagParserConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagParserConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getChunkTokenNum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDelimiter();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getLayoutRecognize();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTagKbIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getTopnTags();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getTaskPageSize();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getRaptor();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ondewo.nlu.RagRaptorConfig.serializeBinaryToWriter
    );
  }
  f = message.getGraphrag();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ondewo.nlu.RagGraphRagConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 auto_keywords = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getAutoKeywords = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setAutoKeywords = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearAutoKeywords = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasAutoKeywords = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 auto_questions = 2;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getAutoQuestions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setAutoQuestions = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearAutoQuestions = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasAutoQuestions = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 chunk_token_num = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getChunkTokenNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setChunkTokenNum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string delimiter = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getDelimiter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setDelimiter = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool html4excel = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getHtml4excel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setHtml4excel = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearHtml4excel = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasHtml4excel = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string layout_recognize = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getLayoutRecognize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setLayoutRecognize = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string tag_kb_ids = 7;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getTagKbIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setTagKbIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.addTagKbIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearTagKbIdsList = function() {
  return this.setTagKbIdsList([]);
};


/**
 * optional int32 topn_tags = 8;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getTopnTags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setTopnTags = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional float filename_embd_weight = 9;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getFilenameEmbdWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setFilenameEmbdWeight = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearFilenameEmbdWeight = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasFilenameEmbdWeight = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 task_page_size = 10;
 * @return {number}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getTaskPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.setTaskPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional RagRaptorConfig raptor = 11;
 * @return {?proto.ondewo.nlu.RagRaptorConfig}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getRaptor = function() {
  return /** @type{?proto.ondewo.nlu.RagRaptorConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagRaptorConfig, 11));
};


/**
 * @param {?proto.ondewo.nlu.RagRaptorConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
*/
proto.ondewo.nlu.RagParserConfig.prototype.setRaptor = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearRaptor = function() {
  return this.setRaptor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasRaptor = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RagGraphRagConfig graphrag = 12;
 * @return {?proto.ondewo.nlu.RagGraphRagConfig}
 */
proto.ondewo.nlu.RagParserConfig.prototype.getGraphrag = function() {
  return /** @type{?proto.ondewo.nlu.RagGraphRagConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagGraphRagConfig, 12));
};


/**
 * @param {?proto.ondewo.nlu.RagGraphRagConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
*/
proto.ondewo.nlu.RagParserConfig.prototype.setGraphrag = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagParserConfig} returns this
 */
proto.ondewo.nlu.RagParserConfig.prototype.clearGraphrag = function() {
  return this.setGraphrag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagParserConfig.prototype.hasGraphrag = function() {
  return jspb.Message.getField(this, 12) != null;
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
proto.ondewo.nlu.RagRaptorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagRaptorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagRaptorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRaptorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
useRaptor: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
prompt: jspb.Message.getFieldWithDefault(msg, 2, ""),
maxToken: jspb.Message.getFieldWithDefault(msg, 3, 0),
threshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
maxCluster: jspb.Message.getFieldWithDefault(msg, 5, 0),
randomSeed: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagRaptorConfig}
 */
proto.ondewo.nlu.RagRaptorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagRaptorConfig;
  return proto.ondewo.nlu.RagRaptorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagRaptorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagRaptorConfig}
 */
proto.ondewo.nlu.RagRaptorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseRaptor(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrompt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setThreshold(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxCluster(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRandomSeed(value);
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
proto.ondewo.nlu.RagRaptorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagRaptorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagRaptorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRaptorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getPrompt();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMaxToken();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMaxCluster();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional bool use_raptor = 1;
 * @return {boolean}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getUseRaptor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setUseRaptor = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.clearUseRaptor = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.hasUseRaptor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string prompt = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getPrompt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setPrompt = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 max_token = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getMaxToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setMaxToken = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float threshold = 4;
 * @return {number}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setThreshold = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.clearThreshold = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.hasThreshold = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 max_cluster = 5;
 * @return {number}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getMaxCluster = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setMaxCluster = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 random_seed = 6;
 * @return {number}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.getRandomSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.setRandomSeed = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRaptorConfig} returns this
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.clearRandomSeed = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRaptorConfig.prototype.hasRandomSeed = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagGraphRagConfig.repeatedFields_ = [2];



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
proto.ondewo.nlu.RagGraphRagConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGraphRagConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGraphRagConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGraphRagConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
useGraphrag: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
entityTypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
method: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
community: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
resolution: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagGraphRagConfig}
 */
proto.ondewo.nlu.RagGraphRagConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGraphRagConfig;
  return proto.ondewo.nlu.RagGraphRagConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGraphRagConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig}
 */
proto.ondewo.nlu.RagGraphRagConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGraphrag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEntityTypes(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.RagGraphRagMethod} */ (reader.readEnum());
      msg.setMethod(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunity(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResolution(value);
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
proto.ondewo.nlu.RagGraphRagConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGraphRagConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGraphRagConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGraphRagConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getEntityTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.RagGraphRagMethod} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool use_graphrag = 1;
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.getUseGraphrag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.setUseGraphrag = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.clearUseGraphrag = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.hasUseGraphrag = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string entity_types = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.getEntityTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.setEntityTypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.addEntityTypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.clearEntityTypesList = function() {
  return this.setEntityTypesList([]);
};


/**
 * optional RagGraphRagMethod method = 3;
 * @return {!proto.ondewo.nlu.RagGraphRagMethod}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.getMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagGraphRagMethod} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagGraphRagMethod} value
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.setMethod = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.clearMethod = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.hasMethod = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool community = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.getCommunity = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.setCommunity = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.clearCommunity = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.hasCommunity = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool resolution = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.getResolution = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.setResolution = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGraphRagConfig} returns this
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.clearResolution = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGraphRagConfig.prototype.hasResolution = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ondewo.nlu.RagDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
avatar: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
documentCount: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
tokenNum: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
chunkCount: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
chunkMethod: jspb.Message.getFieldWithDefault(msg, 8, 0),
parserConfig: (f = msg.getParserConfig()) && proto.ondewo.nlu.RagParserConfig.toObject(includeInstance, f),
pagerank: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
parsingStatus: (f = msg.getParsingStatus()) && proto.ondewo.nlu.RagDatasetParsingStatus.toObject(includeInstance, f),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
embeddingModelCcaiServiceName: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.ondewo.nlu.RagDataset}
 */
proto.ondewo.nlu.RagDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDataset;
  return proto.ondewo.nlu.RagDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDataset}
 */
proto.ondewo.nlu.RagDataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDocumentCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTokenNum(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkCount(value);
      break;
    case 8:
      var value = /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (reader.readEnum());
      msg.setChunkMethod(value);
      break;
    case 9:
      var value = new proto.ondewo.nlu.RagParserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader);
      msg.setParserConfig(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagerank(value);
      break;
    case 11:
      var value = new proto.ondewo.nlu.RagDatasetParsingStatus;
      reader.readMessage(value,proto.ondewo.nlu.RagDatasetParsingStatus.deserializeBinaryFromReader);
      msg.setParsingStatus(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbeddingModelCcaiServiceName(value);
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
proto.ondewo.nlu.RagDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDataset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getChunkMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getParserConfig();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getParsingStatus();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ondewo.nlu.RagDatasetParsingStatus.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingModelCcaiServiceName();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDataset.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDataset.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDataset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagDataset.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 document_count = 5;
 * @return {number}
 */
proto.ondewo.nlu.RagDataset.prototype.getDocumentCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setDocumentCount = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearDocumentCount = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasDocumentCount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 token_num = 6;
 * @return {number}
 */
proto.ondewo.nlu.RagDataset.prototype.getTokenNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setTokenNum = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearTokenNum = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasTokenNum = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 chunk_count = 7;
 * @return {number}
 */
proto.ondewo.nlu.RagDataset.prototype.getChunkCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setChunkCount = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearChunkCount = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasChunkCount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RagChunkMethod chunk_method = 8;
 * @return {!proto.ondewo.nlu.RagChunkMethod}
 */
proto.ondewo.nlu.RagDataset.prototype.getChunkMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagChunkMethod} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setChunkMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional RagParserConfig parser_config = 9;
 * @return {?proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagDataset.prototype.getParserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagParserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagParserConfig, 9));
};


/**
 * @param {?proto.ondewo.nlu.RagParserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
*/
proto.ondewo.nlu.RagDataset.prototype.setParserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearParserConfig = function() {
  return this.setParserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasParserConfig = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 pagerank = 10;
 * @return {number}
 */
proto.ondewo.nlu.RagDataset.prototype.getPagerank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setPagerank = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearPagerank = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasPagerank = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RagDatasetParsingStatus parsing_status = 11;
 * @return {?proto.ondewo.nlu.RagDatasetParsingStatus}
 */
proto.ondewo.nlu.RagDataset.prototype.getParsingStatus = function() {
  return /** @type{?proto.ondewo.nlu.RagDatasetParsingStatus} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagDatasetParsingStatus, 11));
};


/**
 * @param {?proto.ondewo.nlu.RagDatasetParsingStatus|undefined} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
*/
proto.ondewo.nlu.RagDataset.prototype.setParsingStatus = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearParsingStatus = function() {
  return this.setParsingStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasParsingStatus = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp create_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagDataset.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
*/
proto.ondewo.nlu.RagDataset.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagDataset.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
*/
proto.ondewo.nlu.RagDataset.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDataset.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string embedding_model_ccai_service_name = 14;
 * @return {string}
 */
proto.ondewo.nlu.RagDataset.prototype.getEmbeddingModelCcaiServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDataset} returns this
 */
proto.ondewo.nlu.RagDataset.prototype.setEmbeddingModelCcaiServiceName = function(value) {
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
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDatasetParsingStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDatasetParsingStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDatasetParsingStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
unstart: jspb.Message.getFieldWithDefault(msg, 1, 0),
running: jspb.Message.getFieldWithDefault(msg, 2, 0),
cancel: jspb.Message.getFieldWithDefault(msg, 3, 0),
done: jspb.Message.getFieldWithDefault(msg, 4, 0),
fail: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDatasetParsingStatus;
  return proto.ondewo.nlu.RagDatasetParsingStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDatasetParsingStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnstart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRunning(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCancel(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDone(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFail(value);
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
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDatasetParsingStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDatasetParsingStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDatasetParsingStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnstart();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRunning();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCancel();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDone();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFail();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int32 unstart = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.getUnstart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus} returns this
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.setUnstart = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 running = 2;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.getRunning = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus} returns this
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.setRunning = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 cancel = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.getCancel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus} returns this
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.setCancel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 done = 4;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.getDone = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus} returns this
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.setDone = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 fail = 5;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.getFail = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetParsingStatus} returns this
 */
proto.ondewo.nlu.RagDatasetParsingStatus.prototype.setFail = function(value) {
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
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagUpdateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagUpdateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
name: jspb.Message.getFieldWithDefault(msg, 4, ""),
description: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
avatar: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
chunkMethod: jspb.Message.getFieldWithDefault(msg, 7, 0),
parserConfig: (f = msg.getParserConfig()) && proto.ondewo.nlu.RagParserConfig.toObject(includeInstance, f),
pagerank: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
embeddingModelCcaiServiceName: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagUpdateDatasetRequest;
  return proto.ondewo.nlu.RagUpdateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagUpdateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 7:
      var value = /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (reader.readEnum());
      msg.setChunkMethod(value);
      break;
    case 8:
      var value = new proto.ondewo.nlu.RagParserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader);
      msg.setParserConfig(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagerank(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 11:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbeddingModelCcaiServiceName(value);
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
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagUpdateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagUpdateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChunkMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getParserConfig();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingModelCcaiServiceName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string avatar = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setAvatar = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearAvatar = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasAvatar = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RagChunkMethod chunk_method = 7;
 * @return {!proto.ondewo.nlu.RagChunkMethod}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getChunkMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagChunkMethod} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setChunkMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional RagParserConfig parser_config = 8;
 * @return {?proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getParserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagParserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagParserConfig, 8));
};


/**
 * @param {?proto.ondewo.nlu.RagParserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setParserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearParserConfig = function() {
  return this.setParserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasParserConfig = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 pagerank = 9;
 * @return {number}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getPagerank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setPagerank = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearPagerank = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasPagerank = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 11;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 11));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string embedding_model_ccai_service_name = 12;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.getEmbeddingModelCcaiServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDatasetRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDatasetRequest.prototype.setEmbeddingModelCcaiServiceName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteRequest.repeatedFields_ = [3];



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
proto.ondewo.nlu.RagDeleteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
idsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
deleteAll: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.ondewo.nlu.RagDeleteRequest}
 */
proto.ondewo.nlu.RagDeleteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteRequest;
  return proto.ondewo.nlu.RagDeleteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteRequest}
 */
proto.ondewo.nlu.RagDeleteRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addIds(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteAll(value);
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
proto.ondewo.nlu.RagDeleteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDeleteAll();
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
proto.ondewo.nlu.RagDeleteRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string ids = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional bool delete_all = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.getDeleteAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagDeleteRequest} returns this
 */
proto.ondewo.nlu.RagDeleteRequest.prototype.setDeleteAll = function(value) {
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
proto.ondewo.nlu.RagListDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
id: jspb.Message.getFieldWithDefault(msg, 4, ""),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
orderby: jspb.Message.getFieldWithDefault(msg, 6, ""),
desc: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
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
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest}
 */
proto.ondewo.nlu.RagListDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListDatasetsRequest;
  return proto.ondewo.nlu.RagListDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest}
 */
proto.ondewo.nlu.RagListDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    case 8:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
      break;
    case 9:
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
proto.ondewo.nlu.RagListDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderby();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string orderby = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool desc = 7;
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setDesc = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.clearDesc = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.hasDesc = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SortingMode sorting_mode = 8;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 9;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 9));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
*/
proto.ondewo.nlu.RagListDatasetsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDatasetsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDatasetList.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagDatasetList.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDatasetList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDatasetList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDatasetList.toObject = function(includeInstance, msg) {
  var f, obj = {
datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    proto.ondewo.nlu.RagDataset.toObject, includeInstance),
total: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.ondewo.nlu.RagDatasetList}
 */
proto.ondewo.nlu.RagDatasetList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDatasetList;
  return proto.ondewo.nlu.RagDatasetList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDatasetList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDatasetList}
 */
proto.ondewo.nlu.RagDatasetList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagDataset;
      reader.readMessage(value,proto.ondewo.nlu.RagDataset.deserializeBinaryFromReader);
      msg.addDatasets(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
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
proto.ondewo.nlu.RagDatasetList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDatasetList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDatasetList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDatasetList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagDataset.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
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
 * repeated RagDataset datasets = 1;
 * @return {!Array<!proto.ondewo.nlu.RagDataset>}
 */
proto.ondewo.nlu.RagDatasetList.prototype.getDatasetsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagDataset, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDataset>} value
 * @return {!proto.ondewo.nlu.RagDatasetList} returns this
*/
proto.ondewo.nlu.RagDatasetList.prototype.setDatasetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDataset}
 */
proto.ondewo.nlu.RagDatasetList.prototype.addDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDatasetList} returns this
 */
proto.ondewo.nlu.RagDatasetList.prototype.clearDatasetsList = function() {
  return this.setDatasetsList([]);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ondewo.nlu.RagDatasetList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDatasetList} returns this
 */
proto.ondewo.nlu.RagDatasetList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDatasetList.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDatasetList} returns this
 */
proto.ondewo.nlu.RagDatasetList.prototype.setNextPageToken = function(value) {
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
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagUploadDocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagUploadDocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUploadDocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
metadata: (f = msg.getMetadata()) && proto.ondewo.nlu.RagFileMetadata.toObject(includeInstance, f),
data: msg.getData_asB64()
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
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagUploadDocumentRequest;
  return proto.ondewo.nlu.RagUploadDocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagUploadDocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = new proto.ondewo.nlu.RagFileMetadata;
      reader.readMessage(value,proto.ondewo.nlu.RagFileMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagUploadDocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagUploadDocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUploadDocumentRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ondewo.nlu.RagFileMetadata.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
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
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RagFileMetadata metadata = 4;
 * @return {?proto.ondewo.nlu.RagFileMetadata}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getMetadata = function() {
  return /** @type{?proto.ondewo.nlu.RagFileMetadata} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagFileMetadata, 4));
};


/**
 * @param {?proto.ondewo.nlu.RagFileMetadata|undefined} value
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
*/
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes data = 5;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.RagUploadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUploadDocumentRequest.prototype.setData = function(value) {
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
proto.ondewo.nlu.RagDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
thumbnail: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
chunkMethod: jspb.Message.getFieldWithDefault(msg, 4, 0),
parserConfig: (f = msg.getParserConfig()) && proto.ondewo.nlu.RagParserConfig.toObject(includeInstance, f),
type: jspb.Message.getFieldWithDefault(msg, 6, 0),
name: jspb.Message.getFieldWithDefault(msg, 7, ""),
size: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
chunkCount: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
tokenCount: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
progress: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
progressMsg: jspb.Message.getFieldWithDefault(msg, 12, ""),
processBeginAt: (f = msg.getProcessBeginAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
processDuration: (f = jspb.Message.getOptionalFloatingPointField(msg, 14)) == null ? undefined : f,
metaFields: (f = msg.getMetaFields()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
run: jspb.Message.getFieldWithDefault(msg, 16, 0),
status: jspb.Message.getFieldWithDefault(msg, 17, ""),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagDocument}
 */
proto.ondewo.nlu.RagDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDocument;
  return proto.ondewo.nlu.RagDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDocument}
 */
proto.ondewo.nlu.RagDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (reader.readEnum());
      msg.setChunkMethod(value);
      break;
    case 5:
      var value = new proto.ondewo.nlu.RagParserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader);
      msg.setParserConfig(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.RagDocumentType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChunkCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTokenCount(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProgress(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgressMsg(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setProcessBeginAt(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProcessDuration(value);
      break;
    case 15:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetaFields(value);
      break;
    case 16:
      var value = /** @type {!proto.ondewo.nlu.RagDocumentStatus} */ (reader.readEnum());
      msg.setRun(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
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
proto.ondewo.nlu.RagDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getChunkMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getParserConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getProgressMsg();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getProcessBeginAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getMetaFields();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getRun();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnail = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getThumbnail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setThumbnail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RagChunkMethod chunk_method = 4;
 * @return {!proto.ondewo.nlu.RagChunkMethod}
 */
proto.ondewo.nlu.RagDocument.prototype.getChunkMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagChunkMethod} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setChunkMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional RagParserConfig parser_config = 5;
 * @return {?proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagDocument.prototype.getParserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagParserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagParserConfig, 5));
};


/**
 * @param {?proto.ondewo.nlu.RagParserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
*/
proto.ondewo.nlu.RagDocument.prototype.setParserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearParserConfig = function() {
  return this.setParserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasParserConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional RagDocumentType type = 6;
 * @return {!proto.ondewo.nlu.RagDocumentType}
 */
proto.ondewo.nlu.RagDocument.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.RagDocumentType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagDocumentType} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string name = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 size = 8;
 * @return {number}
 */
proto.ondewo.nlu.RagDocument.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setSize = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearSize = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasSize = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 chunk_count = 9;
 * @return {number}
 */
proto.ondewo.nlu.RagDocument.prototype.getChunkCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setChunkCount = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearChunkCount = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasChunkCount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 token_count = 10;
 * @return {number}
 */
proto.ondewo.nlu.RagDocument.prototype.getTokenCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setTokenCount = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearTokenCount = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasTokenCount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional float progress = 11;
 * @return {number}
 */
proto.ondewo.nlu.RagDocument.prototype.getProgress = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setProgress = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearProgress = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasProgress = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string progress_msg = 12;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getProgressMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setProgressMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Timestamp process_begin_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagDocument.prototype.getProcessBeginAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
*/
proto.ondewo.nlu.RagDocument.prototype.setProcessBeginAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearProcessBeginAt = function() {
  return this.setProcessBeginAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasProcessBeginAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional float process_duration = 14;
 * @return {number}
 */
proto.ondewo.nlu.RagDocument.prototype.getProcessDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setProcessDuration = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearProcessDuration = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasProcessDuration = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Struct meta_fields = 15;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RagDocument.prototype.getMetaFields = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 15));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
*/
proto.ondewo.nlu.RagDocument.prototype.setMetaFields = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearMetaFields = function() {
  return this.setMetaFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasMetaFields = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional RagDocumentStatus run = 16;
 * @return {!proto.ondewo.nlu.RagDocumentStatus}
 */
proto.ondewo.nlu.RagDocument.prototype.getRun = function() {
  return /** @type {!proto.ondewo.nlu.RagDocumentStatus} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagDocumentStatus} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setRun = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional string status = 17;
 * @return {string}
 */
proto.ondewo.nlu.RagDocument.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagDocument.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
*/
proto.ondewo.nlu.RagDocument.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagDocument.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagDocument} returns this
*/
proto.ondewo.nlu.RagDocument.prototype.setUpdateTime = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagDocument} returns this
 */
proto.ondewo.nlu.RagDocument.prototype.clearUpdateTime = function() {
  return this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagDocument.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 19) != null;
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
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagUpdateDocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagUpdateDocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
documentId: jspb.Message.getFieldWithDefault(msg, 4, ""),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
chunkMethod: jspb.Message.getFieldWithDefault(msg, 6, 0),
parserConfig: (f = msg.getParserConfig()) && proto.ondewo.nlu.RagParserConfig.toObject(includeInstance, f),
enabled: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
metaFields: (f = msg.getMetaFields()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
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
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagUpdateDocumentRequest;
  return proto.ondewo.nlu.RagUpdateDocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagUpdateDocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (reader.readEnum());
      msg.setChunkMethod(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.RagParserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagParserConfig.deserializeBinaryFromReader);
      msg.setParserConfig(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 9:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetaFields(value);
      break;
    case 10:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 11:
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
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagUpdateDocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagUpdateDocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getChunkMethod();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getParserConfig();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.RagParserConfig.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getMetaFields();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string document_id = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional RagChunkMethod chunk_method = 6;
 * @return {!proto.ondewo.nlu.RagChunkMethod}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getChunkMethod = function() {
  return /** @type {!proto.ondewo.nlu.RagChunkMethod} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagChunkMethod} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setChunkMethod = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional RagParserConfig parser_config = 7;
 * @return {?proto.ondewo.nlu.RagParserConfig}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getParserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagParserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagParserConfig, 7));
};


/**
 * @param {?proto.ondewo.nlu.RagParserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setParserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.clearParserConfig = function() {
  return this.setParserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.hasParserConfig = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool enabled = 8;
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setEnabled = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.clearEnabled = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.hasEnabled = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Struct meta_fields = 9;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getMetaFields = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 9));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setMetaFields = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.clearMetaFields = function() {
  return this.setMetaFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.hasMetaFields = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 10;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 10));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 11;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 11));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
*/
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateDocumentRequest} returns this
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateDocumentRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDownloadDocumentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDownloadDocumentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
documentId: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest}
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDownloadDocumentRequest;
  return proto.ondewo.nlu.RagDownloadDocumentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDownloadDocumentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest}
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
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
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDownloadDocumentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDownloadDocumentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentId();
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
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string document_id = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDownloadDocumentRequest} returns this
 */
proto.ondewo.nlu.RagDownloadDocumentRequest.prototype.setDocumentId = function(value) {
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
proto.ondewo.nlu.RagFileChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagFileChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagFileChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagFileChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
metadata: (f = msg.getMetadata()) && proto.ondewo.nlu.RagFileMetadata.toObject(includeInstance, f),
data: msg.getData_asB64()
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
 * @return {!proto.ondewo.nlu.RagFileChunk}
 */
proto.ondewo.nlu.RagFileChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagFileChunk;
  return proto.ondewo.nlu.RagFileChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagFileChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagFileChunk}
 */
proto.ondewo.nlu.RagFileChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagFileMetadata;
      reader.readMessage(value,proto.ondewo.nlu.RagFileMetadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
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
proto.ondewo.nlu.RagFileChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagFileChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagFileChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagFileChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.RagFileMetadata.serializeBinaryToWriter
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional RagFileMetadata metadata = 1;
 * @return {?proto.ondewo.nlu.RagFileMetadata}
 */
proto.ondewo.nlu.RagFileChunk.prototype.getMetadata = function() {
  return /** @type{?proto.ondewo.nlu.RagFileMetadata} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagFileMetadata, 1));
};


/**
 * @param {?proto.ondewo.nlu.RagFileMetadata|undefined} value
 * @return {!proto.ondewo.nlu.RagFileChunk} returns this
*/
proto.ondewo.nlu.RagFileChunk.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagFileChunk} returns this
 */
proto.ondewo.nlu.RagFileChunk.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagFileChunk.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ondewo.nlu.RagFileChunk.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.ondewo.nlu.RagFileChunk.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.ondewo.nlu.RagFileChunk.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ondewo.nlu.RagFileChunk} returns this
 */
proto.ondewo.nlu.RagFileChunk.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagListDocumentsRequest.repeatedFields_ = [10,11];



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
proto.ondewo.nlu.RagListDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
id: jspb.Message.getFieldWithDefault(msg, 4, ""),
name: jspb.Message.getFieldWithDefault(msg, 5, ""),
pageToken: jspb.Message.getFieldWithDefault(msg, 6, ""),
orderby: jspb.Message.getFieldWithDefault(msg, 7, ""),
desc: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
keywords: jspb.Message.getFieldWithDefault(msg, 9, ""),
suffixList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
runStatusList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
createTimeFrom: (f = msg.getCreateTimeFrom()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createTimeTo: (f = msg.getCreateTimeTo()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
metadataCondition: (f = msg.getMetadataCondition()) && proto.ondewo.nlu.RagMetadataConditions.toObject(includeInstance, f),
sortingMode: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
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
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest}
 */
proto.ondewo.nlu.RagListDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListDocumentsRequest;
  return proto.ondewo.nlu.RagListDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest}
 */
proto.ondewo.nlu.RagListDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDesc(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setKeywords(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addSuffix(value);
      break;
    case 11:
      var values = /** @type {!Array<!proto.ondewo.nlu.RagDocumentStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRunStatus(values[i]);
      }
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTimeFrom(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTimeTo(value);
      break;
    case 14:
      var value = new proto.ondewo.nlu.RagMetadataConditions;
      reader.readMessage(value,proto.ondewo.nlu.RagMetadataConditions.deserializeBinaryFromReader);
      msg.setMetadataCondition(value);
      break;
    case 15:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
      break;
    case 16:
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
proto.ondewo.nlu.RagListDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOrderby();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getKeywords();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSuffixList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getRunStatusList();
  if (f.length > 0) {
    writer.writePackedEnum(
      11,
      f
    );
  }
  f = message.getCreateTimeFrom();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreateTimeTo();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadataCondition();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.ondewo.nlu.RagMetadataConditions.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string id = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string orderby = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool desc = 8;
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getDesc = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setDesc = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearDesc = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasDesc = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string keywords = 9;
 * @return {string}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getKeywords = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setKeywords = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated string suffix = 10;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getSuffixList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setSuffixList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.addSuffix = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearSuffixList = function() {
  return this.setSuffixList([]);
};


/**
 * repeated RagDocumentStatus run_status = 11;
 * @return {!Array<!proto.ondewo.nlu.RagDocumentStatus>}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getRunStatusList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.RagDocumentStatus>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDocumentStatus>} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setRunStatusList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!proto.ondewo.nlu.RagDocumentStatus} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.addRunStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearRunStatusList = function() {
  return this.setRunStatusList([]);
};


/**
 * optional google.protobuf.Timestamp create_time_from = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getCreateTimeFrom = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
*/
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setCreateTimeFrom = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearCreateTimeFrom = function() {
  return this.setCreateTimeFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasCreateTimeFrom = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp create_time_to = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getCreateTimeTo = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
*/
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setCreateTimeTo = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearCreateTimeTo = function() {
  return this.setCreateTimeTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasCreateTimeTo = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional RagMetadataConditions metadata_condition = 14;
 * @return {?proto.ondewo.nlu.RagMetadataConditions}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getMetadataCondition = function() {
  return /** @type{?proto.ondewo.nlu.RagMetadataConditions} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagMetadataConditions, 14));
};


/**
 * @param {?proto.ondewo.nlu.RagMetadataConditions|undefined} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
*/
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setMetadataCondition = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearMetadataCondition = function() {
  return this.setMetadataCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasMetadataCondition = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional SortingMode sorting_mode = 15;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 16;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 16));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
*/
proto.ondewo.nlu.RagListDocumentsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListDocumentsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagMetadataConditions.repeatedFields_ = [2];



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
proto.ondewo.nlu.RagMetadataConditions.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagMetadataConditions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagMetadataConditions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagMetadataConditions.toObject = function(includeInstance, msg) {
  var f, obj = {
logic: jspb.Message.getFieldWithDefault(msg, 1, 0),
conditionsList: jspb.Message.toObjectList(msg.getConditionsList(),
    proto.ondewo.nlu.RagMetadataCondition.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.RagMetadataConditions}
 */
proto.ondewo.nlu.RagMetadataConditions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagMetadataConditions;
  return proto.ondewo.nlu.RagMetadataConditions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagMetadataConditions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagMetadataConditions}
 */
proto.ondewo.nlu.RagMetadataConditions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.RagLogic} */ (reader.readEnum());
      msg.setLogic(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagMetadataCondition;
      reader.readMessage(value,proto.ondewo.nlu.RagMetadataCondition.deserializeBinaryFromReader);
      msg.addConditions(value);
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
proto.ondewo.nlu.RagMetadataConditions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagMetadataConditions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagMetadataConditions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagMetadataConditions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogic();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.RagMetadataCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional RagLogic logic = 1;
 * @return {!proto.ondewo.nlu.RagLogic}
 */
proto.ondewo.nlu.RagMetadataConditions.prototype.getLogic = function() {
  return /** @type {!proto.ondewo.nlu.RagLogic} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagLogic} value
 * @return {!proto.ondewo.nlu.RagMetadataConditions} returns this
 */
proto.ondewo.nlu.RagMetadataConditions.prototype.setLogic = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated RagMetadataCondition conditions = 2;
 * @return {!Array<!proto.ondewo.nlu.RagMetadataCondition>}
 */
proto.ondewo.nlu.RagMetadataConditions.prototype.getConditionsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagMetadataCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagMetadataCondition, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagMetadataCondition>} value
 * @return {!proto.ondewo.nlu.RagMetadataConditions} returns this
*/
proto.ondewo.nlu.RagMetadataConditions.prototype.setConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.RagMetadataCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagMetadataCondition}
 */
proto.ondewo.nlu.RagMetadataConditions.prototype.addConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.RagMetadataCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagMetadataConditions} returns this
 */
proto.ondewo.nlu.RagMetadataConditions.prototype.clearConditionsList = function() {
  return this.setConditionsList([]);
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
proto.ondewo.nlu.RagMetadataCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagMetadataCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagMetadataCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagMetadataCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
comparisonOperator: jspb.Message.getFieldWithDefault(msg, 2, 0),
value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.RagMetadataCondition}
 */
proto.ondewo.nlu.RagMetadataCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagMetadataCondition;
  return proto.ondewo.nlu.RagMetadataCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagMetadataCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagMetadataCondition}
 */
proto.ondewo.nlu.RagMetadataCondition.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {!proto.ondewo.nlu.RagComparisonOperator} */ (reader.readEnum());
      msg.setComparisonOperator(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
proto.ondewo.nlu.RagMetadataCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagMetadataCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagMetadataCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagMetadataCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getComparisonOperator();
  if (f !== 0.0) {
    writer.writeEnum(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagMetadataCondition} returns this
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RagComparisonOperator comparison_operator = 2;
 * @return {!proto.ondewo.nlu.RagComparisonOperator}
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.getComparisonOperator = function() {
  return /** @type {!proto.ondewo.nlu.RagComparisonOperator} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagComparisonOperator} value
 * @return {!proto.ondewo.nlu.RagMetadataCondition} returns this
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.setComparisonOperator = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagMetadataCondition} returns this
 */
proto.ondewo.nlu.RagMetadataCondition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDocumentList.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagDocumentList.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDocumentList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDocumentList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocumentList.toObject = function(includeInstance, msg) {
  var f, obj = {
documentsList: jspb.Message.toObjectList(msg.getDocumentsList(),
    proto.ondewo.nlu.RagDocument.toObject, includeInstance),
total: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.ondewo.nlu.RagDocumentList}
 */
proto.ondewo.nlu.RagDocumentList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDocumentList;
  return proto.ondewo.nlu.RagDocumentList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDocumentList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDocumentList}
 */
proto.ondewo.nlu.RagDocumentList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagDocument;
      reader.readMessage(value,proto.ondewo.nlu.RagDocument.deserializeBinaryFromReader);
      msg.addDocuments(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
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
proto.ondewo.nlu.RagDocumentList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDocumentList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDocumentList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocumentList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagDocument.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
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
 * repeated RagDocument documents = 1;
 * @return {!Array<!proto.ondewo.nlu.RagDocument>}
 */
proto.ondewo.nlu.RagDocumentList.prototype.getDocumentsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagDocument, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDocument>} value
 * @return {!proto.ondewo.nlu.RagDocumentList} returns this
*/
proto.ondewo.nlu.RagDocumentList.prototype.setDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDocument}
 */
proto.ondewo.nlu.RagDocumentList.prototype.addDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDocumentList} returns this
 */
proto.ondewo.nlu.RagDocumentList.prototype.clearDocumentsList = function() {
  return this.setDocumentsList([]);
};


/**
 * optional int32 total = 2;
 * @return {number}
 */
proto.ondewo.nlu.RagDocumentList.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocumentList} returns this
 */
proto.ondewo.nlu.RagDocumentList.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDocumentList.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocumentList} returns this
 */
proto.ondewo.nlu.RagDocumentList.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.repeatedFields_ = [4];



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
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
idsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
deleteAll: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteDocumentsRequest;
  return proto.ondewo.nlu.RagDeleteDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteAll(value);
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
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDeleteAll();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string ids = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};


/**
 * optional bool delete_all = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.getDeleteAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagDeleteDocumentsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteDocumentsRequest.prototype.setDeleteAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDocumentIdsRequest.repeatedFields_ = [4];



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
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDocumentIdsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDocumentIdsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocumentIdsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 3, ""),
documentIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDocumentIdsRequest;
  return proto.ondewo.nlu.RagDocumentIdsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDocumentIdsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setDatasetId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDocumentIds(value);
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
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDocumentIdsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDocumentIdsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocumentIdsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dataset_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string document_ids = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.getDocumentIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.setDocumentIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.addDocumentIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDocumentIdsRequest} returns this
 */
proto.ondewo.nlu.RagDocumentIdsRequest.prototype.clearDocumentIdsList = function() {
  return this.setDocumentIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagRetrievalRequest.repeatedFields_ = [3,6,8];



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
proto.ondewo.nlu.RagRetrievalRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagRetrievalRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagRetrievalRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRetrievalRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
datasetIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
pageToken: jspb.Message.getFieldWithDefault(msg, 4, ""),
question: jspb.Message.getFieldWithDefault(msg, 5, ""),
documentIdsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
useKg: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
crossLanguagesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
metadataCondition: (f = msg.getMetadataCondition()) && proto.ondewo.nlu.RagMetadataConditions.toObject(includeInstance, f),
similarityThreshold: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
vectorSimilarityWeight: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
topK: jspb.Message.getFieldWithDefault(msg, 12, 0),
highlight: (f = jspb.Message.getBooleanField(msg, 13)) == null ? undefined : f,
keyword: (f = jspb.Message.getBooleanField(msg, 14)) == null ? undefined : f,
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
rerankModelCcaiServiceName: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagRetrievalRequest}
 */
proto.ondewo.nlu.RagRetrievalRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagRetrievalRequest;
  return proto.ondewo.nlu.RagRetrievalRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagRetrievalRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest}
 */
proto.ondewo.nlu.RagRetrievalRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addDatasetIds(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuestion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addDocumentIds(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseKg(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addCrossLanguages(value);
      break;
    case 9:
      var value = new proto.ondewo.nlu.RagMetadataConditions;
      reader.readMessage(value,proto.ondewo.nlu.RagMetadataConditions.deserializeBinaryFromReader);
      msg.setMetadataCondition(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilarityThreshold(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVectorSimilarityWeight(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTopK(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHighlight(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyword(value);
      break;
    case 15:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRerankModelCcaiServiceName(value);
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
proto.ondewo.nlu.RagRetrievalRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagRetrievalRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagRetrievalRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRetrievalRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDatasetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
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
  f = message.getQuestion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDocumentIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCrossLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getMetadataCondition();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ondewo.nlu.RagMetadataConditions.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getTopK();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeBool(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string dataset_ids = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getDatasetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setDatasetIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.addDatasetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearDatasetIdsList = function() {
  return this.setDatasetIdsList([]);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string question = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getQuestion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setQuestion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string document_ids = 6;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getDocumentIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setDocumentIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.addDocumentIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearDocumentIdsList = function() {
  return this.setDocumentIdsList([]);
};


/**
 * optional bool use_kg = 7;
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getUseKg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setUseKg = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearUseKg = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasUseKg = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string cross_languages = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getCrossLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setCrossLanguagesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.addCrossLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearCrossLanguagesList = function() {
  return this.setCrossLanguagesList([]);
};


/**
 * optional RagMetadataConditions metadata_condition = 9;
 * @return {?proto.ondewo.nlu.RagMetadataConditions}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getMetadataCondition = function() {
  return /** @type{?proto.ondewo.nlu.RagMetadataConditions} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagMetadataConditions, 9));
};


/**
 * @param {?proto.ondewo.nlu.RagMetadataConditions|undefined} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
*/
proto.ondewo.nlu.RagRetrievalRequest.prototype.setMetadataCondition = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearMetadataCondition = function() {
  return this.setMetadataCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasMetadataCondition = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional float similarity_threshold = 10;
 * @return {number}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getSimilarityThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setSimilarityThreshold = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearSimilarityThreshold = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasSimilarityThreshold = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional float vector_similarity_weight = 11;
 * @return {number}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getVectorSimilarityWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setVectorSimilarityWeight = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearVectorSimilarityWeight = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasVectorSimilarityWeight = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 top_k = 12;
 * @return {number}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getTopK = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setTopK = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bool highlight = 13;
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getHighlight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setHighlight = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearHighlight = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasHighlight = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool keyword = 14;
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getKeyword = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setKeyword = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearKeyword = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasKeyword = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 15;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 15));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
*/
proto.ondewo.nlu.RagRetrievalRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string rerank_model_ccai_service_name = 16;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.getRerankModelCcaiServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.setRerankModelCcaiServiceName = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagRetrievalRequest} returns this
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.clearRerankModelCcaiServiceName = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagRetrievalRequest.prototype.hasRerankModelCcaiServiceName = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagRetrievalResponse.repeatedFields_ = [1,2];



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
proto.ondewo.nlu.RagRetrievalResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagRetrievalResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagRetrievalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRetrievalResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
chunksList: jspb.Message.toObjectList(msg.getChunksList(),
    proto.ondewo.nlu.RagChunk.toObject, includeInstance),
docAggsList: jspb.Message.toObjectList(msg.getDocAggsList(),
    proto.ondewo.nlu.RagDocAgg.toObject, includeInstance),
total: jspb.Message.getFieldWithDefault(msg, 3, 0),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ondewo.nlu.RagRetrievalResponse}
 */
proto.ondewo.nlu.RagRetrievalResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagRetrievalResponse;
  return proto.ondewo.nlu.RagRetrievalResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagRetrievalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagRetrievalResponse}
 */
proto.ondewo.nlu.RagRetrievalResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagChunk;
      reader.readMessage(value,proto.ondewo.nlu.RagChunk.deserializeBinaryFromReader);
      msg.addChunks(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagDocAgg;
      reader.readMessage(value,proto.ondewo.nlu.RagDocAgg.deserializeBinaryFromReader);
      msg.addDocAggs(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotal(value);
      break;
    case 4:
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
proto.ondewo.nlu.RagRetrievalResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagRetrievalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagRetrievalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRetrievalResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChunksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagChunk.serializeBinaryToWriter
    );
  }
  f = message.getDocAggsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.RagDocAgg.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * repeated RagChunk chunks = 1;
 * @return {!Array<!proto.ondewo.nlu.RagChunk>}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.getChunksList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagChunk>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagChunk, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagChunk>} value
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
*/
proto.ondewo.nlu.RagRetrievalResponse.prototype.setChunksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagChunk=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagChunk}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.addChunks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagChunk, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.clearChunksList = function() {
  return this.setChunksList([]);
};


/**
 * repeated RagDocAgg doc_aggs = 2;
 * @return {!Array<!proto.ondewo.nlu.RagDocAgg>}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.getDocAggsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagDocAgg>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagDocAgg, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDocAgg>} value
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
*/
proto.ondewo.nlu.RagRetrievalResponse.prototype.setDocAggsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.RagDocAgg=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDocAgg}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.addDocAggs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.RagDocAgg, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.clearDocAggsList = function() {
  return this.setDocAggsList([]);
};


/**
 * optional int32 total = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string next_page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRetrievalResponse} returns this
 */
proto.ondewo.nlu.RagRetrievalResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagChunk.repeatedFields_ = [5,6,8];



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
proto.ondewo.nlu.RagChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
datasetId: jspb.Message.getFieldWithDefault(msg, 2, ""),
documentId: jspb.Message.getFieldWithDefault(msg, 3, ""),
content: jspb.Message.getFieldWithDefault(msg, 4, ""),
importantKeywordsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
questionsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
imageId: jspb.Message.getFieldWithDefault(msg, 7, ""),
positionsList: jspb.Message.toObjectList(msg.getPositionsList(),
    google_protobuf_struct_pb.ListValue.toObject, includeInstance),
createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
documentKeyword: jspb.Message.getFieldWithDefault(msg, 10, ""),
similarity: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagChunk}
 */
proto.ondewo.nlu.RagChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagChunk;
  return proto.ondewo.nlu.RagChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagChunk}
 */
proto.ondewo.nlu.RagChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addImportantKeywords(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addQuestions(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageId(value);
      break;
    case 8:
      var value = new google_protobuf_struct_pb.ListValue;
      reader.readMessage(value,google_protobuf_struct_pb.ListValue.deserializeBinaryFromReader);
      msg.addPositions(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentKeyword(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSimilarity(value);
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
proto.ondewo.nlu.RagChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getImportantKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getQuestionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getImageId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPositionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_protobuf_struct_pb.ListValue.serializeBinaryToWriter
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDocumentKeyword();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFloat(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string dataset_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string document_id = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getDocumentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setDocumentId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string important_keywords = 5;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagChunk.prototype.getImportantKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setImportantKeywordsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.addImportantKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.clearImportantKeywordsList = function() {
  return this.setImportantKeywordsList([]);
};


/**
 * repeated string questions = 6;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagChunk.prototype.getQuestionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setQuestionsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.addQuestions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.clearQuestionsList = function() {
  return this.setQuestionsList([]);
};


/**
 * optional string image_id = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getImageId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setImageId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated google.protobuf.ListValue positions = 8;
 * @return {!Array<!proto.google.protobuf.ListValue>}
 */
proto.ondewo.nlu.RagChunk.prototype.getPositionsList = function() {
  return /** @type{!Array<!proto.google.protobuf.ListValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.ListValue, 8));
};


/**
 * @param {!Array<!proto.google.protobuf.ListValue>} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
*/
proto.ondewo.nlu.RagChunk.prototype.setPositionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.ListValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.ListValue}
 */
proto.ondewo.nlu.RagChunk.prototype.addPositions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.ListValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.clearPositionsList = function() {
  return this.setPositionsList([]);
};


/**
 * optional google.protobuf.Timestamp create_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagChunk.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
*/
proto.ondewo.nlu.RagChunk.prototype.setCreateTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.clearCreateTime = function() {
  return this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagChunk.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string document_keyword = 10;
 * @return {string}
 */
proto.ondewo.nlu.RagChunk.prototype.getDocumentKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setDocumentKeyword = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional float similarity = 11;
 * @return {number}
 */
proto.ondewo.nlu.RagChunk.prototype.getSimilarity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.setSimilarity = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagChunk} returns this
 */
proto.ondewo.nlu.RagChunk.prototype.clearSimilarity = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagChunk.prototype.hasSimilarity = function() {
  return jspb.Message.getField(this, 11) != null;
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
proto.ondewo.nlu.RagDocAgg.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDocAgg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDocAgg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocAgg.toObject = function(includeInstance, msg) {
  var f, obj = {
docName: jspb.Message.getFieldWithDefault(msg, 1, ""),
docId: jspb.Message.getFieldWithDefault(msg, 2, ""),
count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.nlu.RagDocAgg}
 */
proto.ondewo.nlu.RagDocAgg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDocAgg;
  return proto.ondewo.nlu.RagDocAgg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDocAgg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDocAgg}
 */
proto.ondewo.nlu.RagDocAgg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.ondewo.nlu.RagDocAgg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDocAgg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDocAgg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDocAgg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDocId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string doc_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDocAgg.prototype.getDocName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocAgg} returns this
 */
proto.ondewo.nlu.RagDocAgg.prototype.setDocName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string doc_id = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDocAgg.prototype.getDocId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDocAgg} returns this
 */
proto.ondewo.nlu.RagDocAgg.prototype.setDocId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 count = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagDocAgg.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDocAgg} returns this
 */
proto.ondewo.nlu.RagDocAgg.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCreateCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCreateCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawler: (f = msg.getCrawler()) && proto.ondewo.nlu.RagCrawler.toObject(includeInstance, f),
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
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCreateCrawlerRequest;
  return proto.ondewo.nlu.RagCreateCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCreateCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.ondewo.nlu.RagCrawler;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawler.deserializeBinaryFromReader);
      msg.setCrawler(value);
      break;
    case 4:
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
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCreateCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCreateCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawler();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.RagCrawler.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RagCrawler crawler = 3;
 * @return {?proto.ondewo.nlu.RagCrawler}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.getCrawler = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawler} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawler, 3));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawler|undefined} value
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.setCrawler = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.clearCrawler = function() {
  return this.setCrawler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.hasCrawler = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCreateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCreateCrawlerRequest.prototype.hasFieldMask = function() {
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
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlerRequest;
  return proto.ondewo.nlu.RagDeleteCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setParent(value);
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
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
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
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRequest.prototype.setLanguageCode = function(value) {
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
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlerResponse;
  return proto.ondewo.nlu.RagDeleteCrawlerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerResponse.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.repeatedFields_ = [3];



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
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
namesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlersRequest;
  return proto.ondewo.nlu.RagDeleteCrawlersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deleteCrawlerResponsesList: jspb.Message.toObjectList(msg.getDeleteCrawlerResponsesList(),
    proto.ondewo.nlu.RagDeleteCrawlerResponse.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlersResponse;
  return proto.ondewo.nlu.RagDeleteCrawlersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagDeleteCrawlerResponse;
      reader.readMessage(value,proto.ondewo.nlu.RagDeleteCrawlerResponse.deserializeBinaryFromReader);
      msg.addDeleteCrawlerResponses(value);
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
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeleteCrawlerResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagDeleteCrawlerResponse.serializeBinaryToWriter
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
 * repeated RagDeleteCrawlerResponse delete_crawler_responses = 1;
 * @return {!Array<!proto.ondewo.nlu.RagDeleteCrawlerResponse>}
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.getDeleteCrawlerResponsesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagDeleteCrawlerResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagDeleteCrawlerResponse, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDeleteCrawlerResponse>} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersResponse} returns this
*/
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.setDeleteCrawlerResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.addDeleteCrawlerResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagDeleteCrawlerResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.clearDeleteCrawlerResponsesList = function() {
  return this.setDeleteCrawlerResponsesList([]);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlersResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlersResponse.prototype.setErrorMessage = function(value) {
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
proto.ondewo.nlu.RagListCrawlersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListCrawlersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListCrawlersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
pageToken: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
datasetName: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
crawlerName: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
orderby: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
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
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest}
 */
proto.ondewo.nlu.RagListCrawlersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListCrawlersRequest;
  return proto.ondewo.nlu.RagListCrawlersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListCrawlersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest}
 */
proto.ondewo.nlu.RagListCrawlersRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPageToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrawlerName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 7:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
      break;
    case 8:
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
proto.ondewo.nlu.RagListCrawlersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListCrawlersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListCrawlersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlersRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string dataset_name = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getDatasetName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setDatasetName = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearDatasetName = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasDatasetName = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string crawler_name = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setCrawlerName = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearCrawlerName = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasCrawlerName = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string orderby = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearOrderby = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasOrderby = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SortingMode sorting_mode = 7;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 8;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 8));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
*/
proto.ondewo.nlu.RagListCrawlersRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlersRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlersRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagListCrawlersResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagListCrawlersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListCrawlersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListCrawlersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
crawlersList: jspb.Message.toObjectList(msg.getCrawlersList(),
    proto.ondewo.nlu.RagCrawler.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.RagListCrawlersResponse}
 */
proto.ondewo.nlu.RagListCrawlersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListCrawlersResponse;
  return proto.ondewo.nlu.RagListCrawlersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListCrawlersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListCrawlersResponse}
 */
proto.ondewo.nlu.RagListCrawlersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagCrawler;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawler.deserializeBinaryFromReader);
      msg.addCrawlers(value);
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
proto.ondewo.nlu.RagListCrawlersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListCrawlersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListCrawlersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCrawlersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagCrawler.serializeBinaryToWriter
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
 * repeated RagCrawler crawlers = 1;
 * @return {!Array<!proto.ondewo.nlu.RagCrawler>}
 */
proto.ondewo.nlu.RagListCrawlersResponse.prototype.getCrawlersList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagCrawler>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagCrawler, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagCrawler>} value
 * @return {!proto.ondewo.nlu.RagListCrawlersResponse} returns this
*/
proto.ondewo.nlu.RagListCrawlersResponse.prototype.setCrawlersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagCrawler=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawler}
 */
proto.ondewo.nlu.RagListCrawlersResponse.prototype.addCrawlers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagCrawler, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagListCrawlersResponse} returns this
 */
proto.ondewo.nlu.RagListCrawlersResponse.prototype.clearCrawlersList = function() {
  return this.setCrawlersList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlersResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlersResponse} returns this
 */
proto.ondewo.nlu.RagListCrawlersResponse.prototype.setNextPageToken = function(value) {
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
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerRequest;
  return proto.ondewo.nlu.RagGetCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
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
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRequest.prototype.hasFieldMask = function() {
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
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagUpdateCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagUpdateCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
crawler: (f = msg.getCrawler()) && proto.ondewo.nlu.RagCrawler.toObject(includeInstance, f),
parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
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
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagUpdateCrawlerRequest;
  return proto.ondewo.nlu.RagUpdateCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagUpdateCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagCrawler;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawler.deserializeBinaryFromReader);
      msg.setCrawler(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    case 5:
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
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagUpdateCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagUpdateCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCrawler();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.RagCrawler.serializeBinaryToWriter
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional RagCrawler crawler = 1;
 * @return {?proto.ondewo.nlu.RagCrawler}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.getCrawler = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawler} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawler, 1));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawler|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.setCrawler = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.clearCrawler = function() {
  return this.setCrawler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.hasCrawler = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.FieldMask update_mask = 4;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 4));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.setUpdateMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.clearUpdateMask = function() {
  return this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
*/
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagUpdateCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagUpdateCrawlerRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ondewo.nlu.RagCrawler.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawler.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
displayName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
createdBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
modifiedBy: jspb.Message.getFieldWithDefault(msg, 6, ""),
crawlerSources: (f = msg.getCrawlerSources()) && proto.ondewo.nlu.RagCrawlerSources.toObject(includeInstance, f),
crawlerSeedUrlFilters: (f = msg.getCrawlerSeedUrlFilters()) && proto.ondewo.nlu.RagCrawlerSeedUrlFilters.toObject(includeInstance, f),
crawlerAuth: (f = msg.getCrawlerAuth()) && proto.ondewo.nlu.RagCrawlerAuth.toObject(includeInstance, f),
crawlerBrowserConfig: (f = msg.getCrawlerBrowserConfig()) && proto.ondewo.nlu.RagCrawlerBrowserConfig.toObject(includeInstance, f),
crawlerConfig: (f = msg.getCrawlerConfig()) && proto.ondewo.nlu.RagCrawlerConfig.toObject(includeInstance, f),
retryConfig: (f = msg.getRetryConfig()) && proto.ondewo.nlu.RagCrawlerRetryConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagCrawler}
 */
proto.ondewo.nlu.RagCrawler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawler;
  return proto.ondewo.nlu.RagCrawler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawler}
 */
proto.ondewo.nlu.RagCrawler.deserializeBinaryFromReader = function(msg, reader) {
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
    case 7:
      var value = new proto.ondewo.nlu.RagCrawlerSources;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerSources.deserializeBinaryFromReader);
      msg.setCrawlerSources(value);
      break;
    case 8:
      var value = new proto.ondewo.nlu.RagCrawlerSeedUrlFilters;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerSeedUrlFilters.deserializeBinaryFromReader);
      msg.setCrawlerSeedUrlFilters(value);
      break;
    case 9:
      var value = new proto.ondewo.nlu.RagCrawlerAuth;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerAuth.deserializeBinaryFromReader);
      msg.setCrawlerAuth(value);
      break;
    case 10:
      var value = new proto.ondewo.nlu.RagCrawlerBrowserConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerBrowserConfig.deserializeBinaryFromReader);
      msg.setCrawlerBrowserConfig(value);
      break;
    case 11:
      var value = new proto.ondewo.nlu.RagCrawlerConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerConfig.deserializeBinaryFromReader);
      msg.setCrawlerConfig(value);
      break;
    case 12:
      var value = new proto.ondewo.nlu.RagCrawlerRetryConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerRetryConfig.deserializeBinaryFromReader);
      msg.setRetryConfig(value);
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
proto.ondewo.nlu.RagCrawler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
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
  f = message.getCrawlerSources();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.RagCrawlerSources.serializeBinaryToWriter
    );
  }
  f = message.getCrawlerSeedUrlFilters();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.ondewo.nlu.RagCrawlerSeedUrlFilters.serializeBinaryToWriter
    );
  }
  f = message.getCrawlerAuth();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ondewo.nlu.RagCrawlerAuth.serializeBinaryToWriter
    );
  }
  f = message.getCrawlerBrowserConfig();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ondewo.nlu.RagCrawlerBrowserConfig.serializeBinaryToWriter
    );
  }
  f = message.getCrawlerConfig();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ondewo.nlu.RagCrawlerConfig.serializeBinaryToWriter
    );
  }
  f = message.getRetryConfig();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.ondewo.nlu.RagCrawlerRetryConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawler.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawler.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.setDisplayName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearDisplayName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasDisplayName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagCrawler.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string created_by = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCreatedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.setCreatedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string modified_by = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawler.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional RagCrawlerSources crawler_sources = 7;
 * @return {?proto.ondewo.nlu.RagCrawlerSources}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCrawlerSources = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerSources} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerSources, 7));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerSources|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCrawlerSources = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCrawlerSources = function() {
  return this.setCrawlerSources(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCrawlerSources = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RagCrawlerSeedUrlFilters crawler_seed_url_filters = 8;
 * @return {?proto.ondewo.nlu.RagCrawlerSeedUrlFilters}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCrawlerSeedUrlFilters = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerSeedUrlFilters} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerSeedUrlFilters, 8));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerSeedUrlFilters|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCrawlerSeedUrlFilters = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCrawlerSeedUrlFilters = function() {
  return this.setCrawlerSeedUrlFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCrawlerSeedUrlFilters = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RagCrawlerAuth crawler_auth = 9;
 * @return {?proto.ondewo.nlu.RagCrawlerAuth}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCrawlerAuth = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerAuth} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerAuth, 9));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerAuth|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCrawlerAuth = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCrawlerAuth = function() {
  return this.setCrawlerAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCrawlerAuth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RagCrawlerBrowserConfig crawler_browser_config = 10;
 * @return {?proto.ondewo.nlu.RagCrawlerBrowserConfig}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCrawlerBrowserConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerBrowserConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerBrowserConfig, 10));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerBrowserConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCrawlerBrowserConfig = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCrawlerBrowserConfig = function() {
  return this.setCrawlerBrowserConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCrawlerBrowserConfig = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional RagCrawlerConfig crawler_config = 11;
 * @return {?proto.ondewo.nlu.RagCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawler.prototype.getCrawlerConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerConfig, 11));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setCrawlerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearCrawlerConfig = function() {
  return this.setCrawlerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasCrawlerConfig = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional RagCrawlerRetryConfig retry_config = 12;
 * @return {?proto.ondewo.nlu.RagCrawlerRetryConfig}
 */
proto.ondewo.nlu.RagCrawler.prototype.getRetryConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerRetryConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerRetryConfig, 12));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerRetryConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
*/
proto.ondewo.nlu.RagCrawler.prototype.setRetryConfig = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawler} returns this
 */
proto.ondewo.nlu.RagCrawler.prototype.clearRetryConfig = function() {
  return this.setRetryConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawler.prototype.hasRetryConfig = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagCrawlerSources.repeatedFields_ = [1,2];



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
proto.ondewo.nlu.RagCrawlerSources.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerSources.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerSources} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerSources.toObject = function(includeInstance, msg) {
  var f, obj = {
urlsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
sitemapsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerSources}
 */
proto.ondewo.nlu.RagCrawlerSources.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerSources;
  return proto.ondewo.nlu.RagCrawlerSources.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerSources} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerSources}
 */
proto.ondewo.nlu.RagCrawlerSources.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrls(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addSitemaps(value);
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
proto.ondewo.nlu.RagCrawlerSources.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerSources.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerSources} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerSources.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getSitemapsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated string urls = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.getUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.setUrlsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.addUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.clearUrlsList = function() {
  return this.setUrlsList([]);
};


/**
 * repeated string sitemaps = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.getSitemapsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.setSitemapsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.addSitemaps = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSources} returns this
 */
proto.ondewo.nlu.RagCrawlerSources.prototype.clearSitemapsList = function() {
  return this.setSitemapsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagCrawlerFilters.repeatedFields_ = [1,2,6,7,8,9];



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
proto.ondewo.nlu.RagCrawlerFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
allowedDomainsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
disallowedDomainsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
allowInternalLinks: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
allowExternalLinks: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
allowSocialMediaLinks: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f,
allowedRegexList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
disallowedRegexList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
allowedPathsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
disallowedPathsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerFilters}
 */
proto.ondewo.nlu.RagCrawlerFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerFilters;
  return proto.ondewo.nlu.RagCrawlerFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters}
 */
proto.ondewo.nlu.RagCrawlerFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedDomains(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisallowedDomains(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowInternalLinks(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowExternalLinks(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowSocialMediaLinks(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedRegex(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisallowedRegex(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedPaths(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisallowedPaths(value);
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
proto.ondewo.nlu.RagCrawlerFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDisallowedDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAllowedRegexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getDisallowedRegexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getAllowedPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDisallowedPathsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * repeated string allowed_domains = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowedDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowedDomainsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addAllowedDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowedDomainsList = function() {
  return this.setAllowedDomainsList([]);
};


/**
 * repeated string disallowed_domains = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getDisallowedDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setDisallowedDomainsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addDisallowedDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearDisallowedDomainsList = function() {
  return this.setDisallowedDomainsList([]);
};


/**
 * optional bool allow_internal_links = 3;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowInternalLinks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowInternalLinks = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowInternalLinks = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.hasAllowInternalLinks = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool allow_external_links = 4;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowExternalLinks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowExternalLinks = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowExternalLinks = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.hasAllowExternalLinks = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool allow_social_media_links = 5;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowSocialMediaLinks = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowSocialMediaLinks = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowSocialMediaLinks = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.hasAllowSocialMediaLinks = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string allowed_regex = 6;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowedRegexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowedRegexList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addAllowedRegex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowedRegexList = function() {
  return this.setAllowedRegexList([]);
};


/**
 * repeated string disallowed_regex = 7;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getDisallowedRegexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setDisallowedRegexList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addDisallowedRegex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearDisallowedRegexList = function() {
  return this.setDisallowedRegexList([]);
};


/**
 * repeated string allowed_paths = 8;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getAllowedPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setAllowedPathsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addAllowedPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearAllowedPathsList = function() {
  return this.setAllowedPathsList([]);
};


/**
 * repeated string disallowed_paths = 9;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.getDisallowedPathsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.setDisallowedPathsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.addDisallowedPaths = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerFilters.prototype.clearDisallowedPathsList = function() {
  return this.setDisallowedPathsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.repeatedFields_ = [1,2,3,4];



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
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerSeedUrlFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
allowedRegexList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
disallowedRegexList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
allowedDomainsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
disallowedDomainsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerSeedUrlFilters;
  return proto.ondewo.nlu.RagCrawlerSeedUrlFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedRegex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisallowedRegex(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addAllowedDomains(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisallowedDomains(value);
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
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerSeedUrlFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowedRegexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getDisallowedRegexList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getAllowedDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getDisallowedDomainsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * repeated string allowed_regex = 1;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.getAllowedRegexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.setAllowedRegexList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.addAllowedRegex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.clearAllowedRegexList = function() {
  return this.setAllowedRegexList([]);
};


/**
 * repeated string disallowed_regex = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.getDisallowedRegexList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.setDisallowedRegexList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.addDisallowedRegex = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.clearDisallowedRegexList = function() {
  return this.setDisallowedRegexList([]);
};


/**
 * repeated string allowed_domains = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.getAllowedDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.setAllowedDomainsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.addAllowedDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.clearAllowedDomainsList = function() {
  return this.setAllowedDomainsList([]);
};


/**
 * repeated string disallowed_domains = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.getDisallowedDomainsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.setDisallowedDomainsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.addDisallowedDomains = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerSeedUrlFilters} returns this
 */
proto.ondewo.nlu.RagCrawlerSeedUrlFilters.prototype.clearDisallowedDomainsList = function() {
  return this.setDisallowedDomainsList([]);
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
proto.ondewo.nlu.RagCrawlerAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
httpAuth: (f = msg.getHttpAuth()) && proto.ondewo.nlu.RagCrawlerHttpAuth.toObject(includeInstance, f),
htmlAuth: (f = msg.getHtmlAuth()) && proto.ondewo.nlu.RagCrawlerHtmlAuth.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagCrawlerAuth}
 */
proto.ondewo.nlu.RagCrawlerAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerAuth;
  return proto.ondewo.nlu.RagCrawlerAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerAuth}
 */
proto.ondewo.nlu.RagCrawlerAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagCrawlerHttpAuth;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerHttpAuth.deserializeBinaryFromReader);
      msg.setHttpAuth(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagCrawlerHtmlAuth;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerHtmlAuth.deserializeBinaryFromReader);
      msg.setHtmlAuth(value);
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
proto.ondewo.nlu.RagCrawlerAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.RagCrawlerHttpAuth.serializeBinaryToWriter
    );
  }
  f = message.getHtmlAuth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.RagCrawlerHtmlAuth.serializeBinaryToWriter
    );
  }
};


/**
 * optional RagCrawlerHttpAuth http_auth = 1;
 * @return {?proto.ondewo.nlu.RagCrawlerHttpAuth}
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.getHttpAuth = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerHttpAuth} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerHttpAuth, 1));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerHttpAuth|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerAuth} returns this
*/
proto.ondewo.nlu.RagCrawlerAuth.prototype.setHttpAuth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.clearHttpAuth = function() {
  return this.setHttpAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.hasHttpAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RagCrawlerHtmlAuth html_auth = 2;
 * @return {?proto.ondewo.nlu.RagCrawlerHtmlAuth}
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.getHtmlAuth = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerHtmlAuth} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerHtmlAuth, 2));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerHtmlAuth|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerAuth} returns this
*/
proto.ondewo.nlu.RagCrawlerAuth.prototype.setHtmlAuth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.clearHtmlAuth = function() {
  return this.setHtmlAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerAuth.prototype.hasHtmlAuth = function() {
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
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerHtmlAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerHtmlAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
htmlAuthBaseUrl: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
htmlAuthUsernameSelectorType: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
htmlAuthUsernameSelector: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
htmlAuthUsername: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
htmlAuthPasswordSelectorType: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
htmlAuthPasswordSelector: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
htmlAuthPassword: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
authenticationExecutionType: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerHtmlAuth;
  return proto.ondewo.nlu.RagCrawlerHtmlAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerHtmlAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlAuthBaseUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (reader.readEnum());
      msg.setHtmlAuthUsernameSelectorType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlAuthUsernameSelector(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlAuthUsername(value);
      break;
    case 5:
      var value = /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (reader.readEnum());
      msg.setHtmlAuthPasswordSelectorType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlAuthPasswordSelector(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setHtmlAuthPassword(value);
      break;
    case 8:
      var value = /** @type {!proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType} */ (reader.readEnum());
      msg.setAuthenticationExecutionType(value);
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
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerHtmlAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerHtmlAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string html_auth_base_url = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthBaseUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthBaseUrl = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthBaseUrl = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthBaseUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RagCrawlerSelectorType html_auth_username_selector_type = 2;
 * @return {!proto.ondewo.nlu.RagCrawlerSelectorType}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthUsernameSelectorType = function() {
  return /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerSelectorType} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthUsernameSelectorType = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthUsernameSelectorType = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthUsernameSelectorType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string html_auth_username_selector = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthUsernameSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthUsernameSelector = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthUsernameSelector = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthUsernameSelector = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string html_auth_username = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthUsername = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthUsername = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthUsername = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RagCrawlerSelectorType html_auth_password_selector_type = 5;
 * @return {!proto.ondewo.nlu.RagCrawlerSelectorType}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthPasswordSelectorType = function() {
  return /** @type {!proto.ondewo.nlu.RagCrawlerSelectorType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerSelectorType} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthPasswordSelectorType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthPasswordSelectorType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthPasswordSelectorType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string html_auth_password_selector = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthPasswordSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthPasswordSelector = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthPasswordSelector = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthPasswordSelector = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string html_auth_password = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getHtmlAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setHtmlAuthPassword = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearHtmlAuthPassword = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasHtmlAuthPassword = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional RagCrawlerAuthenticationExecutionType authentication_execution_type = 8;
 * @return {!proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.getAuthenticationExecutionType = function() {
  return /** @type {!proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType} value
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.setAuthenticationExecutionType = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerHtmlAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.clearAuthenticationExecutionType = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerHtmlAuth.prototype.hasAuthenticationExecutionType = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerHttpAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerHttpAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
httpAuthUsername: jspb.Message.getFieldWithDefault(msg, 1, ""),
httpAuthPassword: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.ondewo.nlu.RagCrawlerHttpAuth}
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerHttpAuth;
  return proto.ondewo.nlu.RagCrawlerHttpAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerHttpAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerHttpAuth}
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpAuthUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setHttpAuthPassword(value);
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
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerHttpAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerHttpAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHttpAuthUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getHttpAuthPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string http_auth_username = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.getHttpAuthUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHttpAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.setHttpAuthUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string http_auth_password = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.getHttpAuthPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerHttpAuth} returns this
 */
proto.ondewo.nlu.RagCrawlerHttpAuth.prototype.setHttpAuthPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.repeatedFields_ = [1,2];



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
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerBrowserConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerBrowserConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
crawlerHeadersList: jspb.Message.toObjectList(msg.getCrawlerHeadersList(),
    google_protobuf_struct_pb.Struct.toObject, includeInstance),
crawlerCookiesList: jspb.Message.toObjectList(msg.getCrawlerCookiesList(),
    proto.ondewo.nlu.RagCrawlerCookie.toObject, includeInstance),
crawlerUserAgent: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerBrowserConfig;
  return proto.ondewo.nlu.RagCrawlerBrowserConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerBrowserConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.addCrawlerHeaders(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagCrawlerCookie;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerCookie.deserializeBinaryFromReader);
      msg.addCrawlerCookies(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrawlerUserAgent(value);
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
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerBrowserConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerBrowserConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCrawlerHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getCrawlerCookiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.RagCrawlerCookie.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated google.protobuf.Struct crawler_headers = 1;
 * @return {!Array<!proto.google.protobuf.Struct>}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.getCrawlerHeadersList = function() {
  return /** @type{!Array<!proto.google.protobuf.Struct>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Struct>} value
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.setCrawlerHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Struct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.addCrawlerHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Struct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.clearCrawlerHeadersList = function() {
  return this.setCrawlerHeadersList([]);
};


/**
 * repeated RagCrawlerCookie crawler_cookies = 2;
 * @return {!Array<!proto.ondewo.nlu.RagCrawlerCookie>}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.getCrawlerCookiesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagCrawlerCookie>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagCrawlerCookie, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagCrawlerCookie>} value
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.setCrawlerCookiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerCookie=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerCookie}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.addCrawlerCookies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.RagCrawlerCookie, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.clearCrawlerCookiesList = function() {
  return this.setCrawlerCookiesList([]);
};


/**
 * optional string crawler_user_agent = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.getCrawlerUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.setCrawlerUserAgent = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerBrowserConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.clearCrawlerUserAgent = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerBrowserConfig.prototype.hasCrawlerUserAgent = function() {
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
proto.ondewo.nlu.RagCrawlerCookie.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerCookie.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerCookie} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerCookie.toObject = function(includeInstance, msg) {
  var f, obj = {
cookieName: jspb.Message.getFieldWithDefault(msg, 1, ""),
cookieValue: jspb.Message.getFieldWithDefault(msg, 2, ""),
cookieDomain: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerCookie}
 */
proto.ondewo.nlu.RagCrawlerCookie.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerCookie;
  return proto.ondewo.nlu.RagCrawlerCookie.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerCookie} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerCookie}
 */
proto.ondewo.nlu.RagCrawlerCookie.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCookieName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCookieValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCookieDomain(value);
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
proto.ondewo.nlu.RagCrawlerCookie.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerCookie.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerCookie} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerCookie.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCookieName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCookieValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string cookie_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.getCookieName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerCookie} returns this
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.setCookieName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cookie_value = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.getCookieValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerCookie} returns this
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.setCookieValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string cookie_domain = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.getCookieDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerCookie} returns this
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.setCookieDomain = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerCookie} returns this
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.clearCookieDomain = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerCookie.prototype.hasCookieDomain = function() {
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
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerConcurrencyConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
maxConcurrentRequests: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
slowCrawl: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerConcurrencyConfig;
  return proto.ondewo.nlu.RagCrawlerConcurrencyConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxConcurrentRequests(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSlowCrawl(value);
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
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerConcurrencyConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int32 max_concurrent_requests = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.getMaxConcurrentRequests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.setMaxConcurrentRequests = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.clearMaxConcurrentRequests = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.hasMaxConcurrentRequests = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool slow_crawl = 2;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.getSlowCrawl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.setSlowCrawl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerConcurrencyConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.clearSlowCrawl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConcurrencyConfig.prototype.hasSlowCrawl = function() {
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
proto.ondewo.nlu.RagCrawlerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
concurrencyConfig: (f = msg.getConcurrencyConfig()) && proto.ondewo.nlu.RagCrawlerConcurrencyConfig.toObject(includeInstance, f),
deepCrawlerConfig: (f = msg.getDeepCrawlerConfig()) && proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.toObject(includeInstance, f),
outputConfig: (f = msg.getOutputConfig()) && proto.ondewo.nlu.RagCrawlerResultsConfig.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawlerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerConfig;
  return proto.ondewo.nlu.RagCrawlerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawlerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagCrawlerConcurrencyConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerConcurrencyConfig.deserializeBinaryFromReader);
      msg.setConcurrencyConfig(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.deserializeBinaryFromReader);
      msg.setDeepCrawlerConfig(value);
      break;
    case 3:
      var value = new proto.ondewo.nlu.RagCrawlerResultsConfig;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerResultsConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
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
proto.ondewo.nlu.RagCrawlerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConcurrencyConfig();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ondewo.nlu.RagCrawlerConcurrencyConfig.serializeBinaryToWriter
    );
  }
  f = message.getDeepCrawlerConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.serializeBinaryToWriter
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ondewo.nlu.RagCrawlerResultsConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional RagCrawlerConcurrencyConfig concurrency_config = 1;
 * @return {?proto.ondewo.nlu.RagCrawlerConcurrencyConfig}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.getConcurrencyConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerConcurrencyConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerConcurrencyConfig, 1));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerConcurrencyConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerConfig.prototype.setConcurrencyConfig = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.clearConcurrencyConfig = function() {
  return this.setConcurrencyConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.hasConcurrencyConfig = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RagCrawlerDeepCrawlerConfig deep_crawler_config = 2;
 * @return {?proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.getDeepCrawlerConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig, 2));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerConfig.prototype.setDeepCrawlerConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.clearDeepCrawlerConfig = function() {
  return this.setDeepCrawlerConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.hasDeepCrawlerConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RagCrawlerResultsConfig output_config = 3;
 * @return {?proto.ondewo.nlu.RagCrawlerResultsConfig}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.getOutputConfig = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerResultsConfig} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerResultsConfig, 3));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerResultsConfig|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerConfig.prototype.setOutputConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.clearOutputConfig = function() {
  return this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerConfig.prototype.hasOutputConfig = function() {
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
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
isActive: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
crawlStrategy: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
maxDepth: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
maxPages: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
deepCrawlerFilters: (f = msg.getDeepCrawlerFilters()) && proto.ondewo.nlu.RagCrawlerFilters.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig;
  return proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 2:
      var value = /** @type {!proto.ondewo.nlu.RagCrawlerCrawlStrategy} */ (reader.readEnum());
      msg.setCrawlStrategy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxDepth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxPages(value);
      break;
    case 5:
      var value = new proto.ondewo.nlu.RagCrawlerFilters;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerFilters.deserializeBinaryFromReader);
      msg.setDeepCrawlerFilters(value);
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
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.RagCrawlerCrawlStrategy} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getDeepCrawlerFilters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ondewo.nlu.RagCrawlerFilters.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool is_active = 1;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.setIsActive = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.clearIsActive = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.hasIsActive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional RagCrawlerCrawlStrategy crawl_strategy = 2;
 * @return {!proto.ondewo.nlu.RagCrawlerCrawlStrategy}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.getCrawlStrategy = function() {
  return /** @type {!proto.ondewo.nlu.RagCrawlerCrawlStrategy} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerCrawlStrategy} value
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.setCrawlStrategy = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.clearCrawlStrategy = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.hasCrawlStrategy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 max_depth = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.getMaxDepth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.setMaxDepth = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.clearMaxDepth = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.hasMaxDepth = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 max_pages = 4;
 * @return {number}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.getMaxPages = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.setMaxPages = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.clearMaxPages = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.hasMaxPages = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RagCrawlerFilters deep_crawler_filters = 5;
 * @return {?proto.ondewo.nlu.RagCrawlerFilters}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.getDeepCrawlerFilters = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerFilters} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerFilters, 5));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerFilters|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.setDeepCrawlerFilters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.clearDeepCrawlerFilters = function() {
  return this.setDeepCrawlerFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerDeepCrawlerConfig.prototype.hasDeepCrawlerFilters = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.repeatedFields_ = [2];



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
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerResultsConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerResultsConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
injectFrontmatter: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
metaDataExtractorsList: jspb.Message.toObjectList(msg.getMetaDataExtractorsList(),
    proto.ondewo.nlu.RagCrawlerMetaDataExtractor.toObject, includeInstance)
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
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerResultsConfig;
  return proto.ondewo.nlu.RagCrawlerResultsConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerResultsConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInjectFrontmatter(value);
      break;
    case 2:
      var value = new proto.ondewo.nlu.RagCrawlerMetaDataExtractor;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerMetaDataExtractor.deserializeBinaryFromReader);
      msg.addMetaDataExtractors(value);
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
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerResultsConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerResultsConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMetaDataExtractorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.ondewo.nlu.RagCrawlerMetaDataExtractor.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool inject_frontmatter = 1;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.getInjectFrontmatter = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.setInjectFrontmatter = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.clearInjectFrontmatter = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.hasInjectFrontmatter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RagCrawlerMetaDataExtractor meta_data_extractors = 2;
 * @return {!Array<!proto.ondewo.nlu.RagCrawlerMetaDataExtractor>}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.getMetaDataExtractorsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagCrawlerMetaDataExtractor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagCrawlerMetaDataExtractor, 2));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagCrawlerMetaDataExtractor>} value
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig} returns this
*/
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.setMetaDataExtractorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor}
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.addMetaDataExtractors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ondewo.nlu.RagCrawlerMetaDataExtractor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagCrawlerResultsConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerResultsConfig.prototype.clearMetaDataExtractorsList = function() {
  return this.setMetaDataExtractorsList([]);
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
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerMetaDataExtractor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.toObject = function(includeInstance, msg) {
  var f, obj = {
type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
value: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
key: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerMetaDataExtractor;
  return proto.ondewo.nlu.RagCrawlerMetaDataExtractor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ondewo.nlu.RagCrawlerMetaDataExtractorType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
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
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerMetaDataExtractor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ondewo.nlu.RagCrawlerMetaDataExtractorType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional RagCrawlerMetaDataExtractorType type = 1;
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractorType}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.getType = function() {
  return /** @type {!proto.ondewo.nlu.RagCrawlerMetaDataExtractorType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerMetaDataExtractorType} value
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.setValue = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.clearValue = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string key = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.setKey = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerMetaDataExtractor} returns this
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.clearKey = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractor.prototype.hasKey = function() {
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
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerRetryConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerRetryConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
pageLoadTimeoutSeconds: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
retryMaxAttempts: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerRetryConfig;
  return proto.ondewo.nlu.RagCrawlerRetryConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerRetryConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageLoadTimeoutSeconds(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRetryMaxAttempts(value);
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
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerRetryConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerRetryConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 page_load_timeout_seconds = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.getPageLoadTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.setPageLoadTimeoutSeconds = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.clearPageLoadTimeoutSeconds = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.hasPageLoadTimeoutSeconds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 retry_max_attempts = 2;
 * @return {number}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.getRetryMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.setRetryMaxAttempts = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerRetryConfig} returns this
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.clearRetryMaxAttempts = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerRetryConfig.prototype.hasRetryMaxAttempts = function() {
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
proto.ondewo.nlu.RagCrawlerContentResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerContentResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerContentResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerContentResult.toObject = function(includeInstance, msg) {
  var f, obj = {
metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
markdown: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult}
 */
proto.ondewo.nlu.RagCrawlerContentResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerContentResult;
  return proto.ondewo.nlu.RagCrawlerContentResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerContentResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult}
 */
proto.ondewo.nlu.RagCrawlerContentResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarkdown(value);
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
proto.ondewo.nlu.RagCrawlerContentResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerContentResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerContentResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerContentResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Struct metadata = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult} returns this
*/
proto.ondewo.nlu.RagCrawlerContentResult.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult} returns this
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string markdown = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.getMarkdown = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult} returns this
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.setMarkdown = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerContentResult} returns this
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.clearMarkdown = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerContentResult.prototype.hasMarkdown = function() {
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
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerExecutionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerExecutionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
sslCertificate: (f = msg.getSslCertificate()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
success: (f = jspb.Message.getBooleanField(msg, 2)) == null ? undefined : f,
errorMessage: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerExecutionInfo;
  return proto.ondewo.nlu.RagCrawlerExecutionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerExecutionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setSslCertificate(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerExecutionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerExecutionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSslCertificate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Struct ssl_certificate = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.getSslCertificate = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
*/
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.setSslCertificate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.clearSslCertificate = function() {
  return this.setSslCertificate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.hasSslCertificate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool success = 2;
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.setSuccess = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.clearSuccess = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.setErrorMessage = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerExecutionInfo} returns this
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.clearErrorMessage = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerExecutionInfo.prototype.hasErrorMessage = function() {
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
proto.ondewo.nlu.RagCrawlerResult.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagCrawlerResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagCrawlerResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerResult.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
crawlerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
operationName: jspb.Message.getFieldWithDefault(msg, 3, ""),
sourceUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
fileResource: (f = msg.getFileResource()) && ondewo_nlu_session_pb.FileResource.toObject(includeInstance, f),
lastCrawledDate: (f = msg.getLastCrawledDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
contentResult: (f = msg.getContentResult()) && proto.ondewo.nlu.RagCrawlerContentResult.toObject(includeInstance, f),
pageLastUpdatedDate: (f = msg.getPageLastUpdatedDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ondewo.nlu.RagCrawlerResult}
 */
proto.ondewo.nlu.RagCrawlerResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagCrawlerResult;
  return proto.ondewo.nlu.RagCrawlerResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagCrawlerResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagCrawlerResult}
 */
proto.ondewo.nlu.RagCrawlerResult.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceUrl(value);
      break;
    case 5:
      var value = new ondewo_nlu_session_pb.FileResource;
      reader.readMessage(value,ondewo_nlu_session_pb.FileResource.deserializeBinaryFromReader);
      msg.setFileResource(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastCrawledDate(value);
      break;
    case 7:
      var value = new proto.ondewo.nlu.RagCrawlerContentResult;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerContentResult.deserializeBinaryFromReader);
      msg.setContentResult(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPageLastUpdatedDate(value);
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
proto.ondewo.nlu.RagCrawlerResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagCrawlerResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagCrawlerResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagCrawlerResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCrawlerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSourceUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFileResource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      ondewo_nlu_session_pb.FileResource.serializeBinaryToWriter
    );
  }
  f = message.getLastCrawledDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getContentResult();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.ondewo.nlu.RagCrawlerContentResult.serializeBinaryToWriter
    );
  }
  f = message.getPageLastUpdatedDate();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string crawler_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.setCrawlerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string source_url = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getSourceUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.setSourceUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional FileResource file_resource = 5;
 * @return {?proto.ondewo.nlu.FileResource}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getFileResource = function() {
  return /** @type{?proto.ondewo.nlu.FileResource} */ (
    jspb.Message.getWrapperField(this, ondewo_nlu_session_pb.FileResource, 5));
};


/**
 * @param {?proto.ondewo.nlu.FileResource|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
*/
proto.ondewo.nlu.RagCrawlerResult.prototype.setFileResource = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.clearFileResource = function() {
  return this.setFileResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.hasFileResource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_crawled_date = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getLastCrawledDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
*/
proto.ondewo.nlu.RagCrawlerResult.prototype.setLastCrawledDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.clearLastCrawledDate = function() {
  return this.setLastCrawledDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.hasLastCrawledDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional RagCrawlerContentResult content_result = 7;
 * @return {?proto.ondewo.nlu.RagCrawlerContentResult}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getContentResult = function() {
  return /** @type{?proto.ondewo.nlu.RagCrawlerContentResult} */ (
    jspb.Message.getWrapperField(this, proto.ondewo.nlu.RagCrawlerContentResult, 7));
};


/**
 * @param {?proto.ondewo.nlu.RagCrawlerContentResult|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
*/
proto.ondewo.nlu.RagCrawlerResult.prototype.setContentResult = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.clearContentResult = function() {
  return this.setContentResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.hasContentResult = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp page_last_updated_date = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.getPageLastUpdatedDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
*/
proto.ondewo.nlu.RagCrawlerResult.prototype.setPageLastUpdatedDate = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagCrawlerResult} returns this
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.clearPageLastUpdatedDate = function() {
  return this.setPageLastUpdatedDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagCrawlerResult.prototype.hasPageLastUpdatedDate = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagStartCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagStartCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStartCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.RagStartCrawlerRequest}
 */
proto.ondewo.nlu.RagStartCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagStartCrawlerRequest;
  return proto.ondewo.nlu.RagStartCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagStartCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagStartCrawlerRequest}
 */
proto.ondewo.nlu.RagStartCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerName(value);
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
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagStartCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagStartCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStartCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStartCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStartCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crawler_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStartCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStartCrawlerRequest.prototype.setCrawlerName = function(value) {
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
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerRunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerRunName: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerRunRequest;
  return proto.ondewo.nlu.RagGetCrawlerRunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerRunName(value);
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
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerRunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerRunName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crawler_run_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.getCrawlerRunName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunRequest.prototype.setCrawlerRunName = function(value) {
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
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListCrawlerRunsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerName: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
pageToken: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
orderby: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListCrawlerRunsRequest;
  return proto.ondewo.nlu.RagListCrawlerRunsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {!proto.ondewo.nlu.OperationMetadata.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 7:
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
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListCrawlerRunsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.OperationMetadata.Status} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crawler_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setCrawlerName = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.clearCrawlerName = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.hasCrawlerName = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OperationMetadata.Status status = 5;
 * @return {!proto.ondewo.nlu.OperationMetadata.Status}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.OperationMetadata.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.ondewo.nlu.OperationMetadata.Status} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string orderby = 6;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.clearOrderby = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.hasOrderby = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SortingMode sorting_mode = 7;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagListCrawlerRunsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagListCrawlerRunsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
crawlerRunsList: jspb.Message.toObjectList(msg.getCrawlerRunsList(),
    ondewo_nlu_operations_pb.Operation.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsResponse}
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagListCrawlerRunsResponse;
  return proto.ondewo.nlu.RagListCrawlerRunsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsResponse}
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ondewo_nlu_operations_pb.Operation;
      reader.readMessage(value,ondewo_nlu_operations_pb.Operation.deserializeBinaryFromReader);
      msg.addCrawlerRuns(value);
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
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagListCrawlerRunsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagListCrawlerRunsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCrawlerRunsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      ondewo_nlu_operations_pb.Operation.serializeBinaryToWriter
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
 * repeated Operation crawler_runs = 1;
 * @return {!Array<!proto.ondewo.nlu.Operation>}
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.getCrawlerRunsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.Operation>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_operations_pb.Operation, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.Operation>} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsResponse} returns this
*/
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.setCrawlerRunsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.Operation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.Operation}
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.addCrawlerRuns = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.Operation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.clearCrawlerRunsList = function() {
  return this.setCrawlerRunsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagListCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagListCrawlerRunsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.repeatedFields_ = [3,4];



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
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerRunNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
crawlerNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlerRunsRequest;
  return proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addCrawlerRunNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCrawlerNames(value);
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
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerRunNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCrawlerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string crawler_run_names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.getCrawlerRunNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.setCrawlerRunNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.addCrawlerRunNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.clearCrawlerRunNamesList = function() {
  return this.setCrawlerRunNamesList([]);
};


/**
 * repeated string crawler_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.getCrawlerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.setCrawlerNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.addCrawlerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsRequest} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsRequest.prototype.clearCrawlerNamesList = function() {
  return this.setCrawlerNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.repeatedFields_ = [2];



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
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
deletedCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
deletedRunNamesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagDeleteCrawlerRunsResponse;
  return proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeletedCount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDeletedRunNames(value);
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
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeletedCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDeletedRunNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional int32 deleted_count = 1;
 * @return {number}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.getDeletedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.setDeletedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string deleted_run_names = 2;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.getDeletedRunNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.setDeletedRunNamesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.addDeletedRunNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagDeleteCrawlerRunsResponse} returns this
 */
proto.ondewo.nlu.RagDeleteCrawlerRunsResponse.prototype.clearDeletedRunNamesList = function() {
  return this.setDeletedRunNamesList([]);
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
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagStopCrawlerRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagStopCrawlerRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStopCrawlerRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
name: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.ondewo.nlu.RagStopCrawlerRequest}
 */
proto.ondewo.nlu.RagStopCrawlerRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagStopCrawlerRequest;
  return proto.ondewo.nlu.RagStopCrawlerRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagStopCrawlerRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagStopCrawlerRequest}
 */
proto.ondewo.nlu.RagStopCrawlerRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagStopCrawlerRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagStopCrawlerRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStopCrawlerRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStopCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStopCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStopCrawlerRequest} returns this
 */
proto.ondewo.nlu.RagStopCrawlerRequest.prototype.setName = function(value) {
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
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagStopCrawlerResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagStopCrawlerResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStopCrawlerResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
name: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.ondewo.nlu.RagStopCrawlerResponse}
 */
proto.ondewo.nlu.RagStopCrawlerResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagStopCrawlerResponse;
  return proto.ondewo.nlu.RagStopCrawlerResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagStopCrawlerResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagStopCrawlerResponse}
 */
proto.ondewo.nlu.RagStopCrawlerResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagStopCrawlerResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagStopCrawlerResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagStopCrawlerResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
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
 * optional string name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStopCrawlerResponse} returns this
 */
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error_message = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagStopCrawlerResponse} returns this
 */
proto.ondewo.nlu.RagStopCrawlerResponse.prototype.setErrorMessage = function(value) {
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
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerResultsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
operationName: jspb.Message.getFieldWithDefault(msg, 3, ""),
pageToken: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
urlQuery: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
orderby: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerResultsRequest;
  return proto.ondewo.nlu.RagGetCrawlerResultsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOperationName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrlQuery(value);
      break;
    case 6:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 8:
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
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerResultsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string url_query = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getUrlQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setUrlQuery = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.clearUrlQuery = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.hasUrlQuery = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 6;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 6));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string orderby = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.clearOrderby = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.hasOrderby = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SortingMode sorting_mode = 8;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerResultsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
crawlerResultsList: jspb.Message.toObjectList(msg.getCrawlerResultsList(),
    proto.ondewo.nlu.RagCrawlerResult.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
totalSize: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerResultsResponse;
  return proto.ondewo.nlu.RagGetCrawlerResultsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagCrawlerResult;
      reader.readMessage(value,proto.ondewo.nlu.RagCrawlerResult.deserializeBinaryFromReader);
      msg.addCrawlerResults(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSize(value);
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
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerResultsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCrawlerResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagCrawlerResult.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTotalSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated RagCrawlerResult crawler_results = 1;
 * @return {!Array<!proto.ondewo.nlu.RagCrawlerResult>}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.getCrawlerResultsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagCrawlerResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagCrawlerResult, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagCrawlerResult>} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} returns this
*/
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.setCrawlerResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagCrawlerResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagCrawlerResult}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.addCrawlerResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagCrawlerResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.clearCrawlerResultsList = function() {
  return this.setCrawlerResultsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 total_size = 3;
 * @return {number}
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.getTotalSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultsResponse.prototype.setTotalSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerResultRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
operationName: jspb.Message.getFieldWithDefault(msg, 3, ""),
url: jspb.Message.getFieldWithDefault(msg, 4, ""),
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerResultRequest;
  return proto.ondewo.nlu.RagGetCrawlerResultRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOperationName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 5:
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
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerResultRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerResultRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string url = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.FieldMask field_mask = 5;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 5));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerResultRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerResultRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.repeatedFields_ = [3,4,5];



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
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerNamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
crawlerResultNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
datasetIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest;
  return proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.addCrawlerNames(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCrawlerResultNames(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatasetIds(value);
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
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCrawlerResultNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDatasetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string crawler_names = 3;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.getCrawlerNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.setCrawlerNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.addCrawlerNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.clearCrawlerNamesList = function() {
  return this.setCrawlerNamesList([]);
};


/**
 * repeated string crawler_result_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.getCrawlerResultNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.setCrawlerResultNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.addCrawlerResultNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.clearCrawlerResultNamesList = function() {
  return this.setCrawlerResultNamesList([]);
};


/**
 * repeated string dataset_ids = 5;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.getDatasetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.setDatasetIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.addDatasetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagAddCrawlerResultsToDatasetsRequest.prototype.clearDatasetIdsList = function() {
  return this.setDatasetIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.repeatedFields_ = [4,5];



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
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerName: jspb.Message.getFieldWithDefault(msg, 3, ""),
crawlerResultNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
datasetIdsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest;
  return proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCrawlerResultNames(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addDatasetIds(value);
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
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCrawlerResultNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDatasetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crawler_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.setCrawlerName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string crawler_result_names = 4;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.getCrawlerResultNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.setCrawlerResultNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.addCrawlerResultNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.clearCrawlerResultNamesList = function() {
  return this.setCrawlerResultNamesList([]);
};


/**
 * repeated string dataset_ids = 5;
 * @return {!Array<string>}
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.getDatasetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.setDatasetIdsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.addDatasetIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagRemoveCrawlerResultsFromDatasetsRequest.prototype.clearDatasetIdsList = function() {
  return this.setDatasetIdsList([]);
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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
crawlerName: jspb.Message.getFieldWithDefault(msg, 3, ""),
pageSize: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
pageToken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
fieldMask: (f = msg.getFieldMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f),
orderby: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest;
  return proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCrawlerName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 6:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setFieldMask(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 8:
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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCrawlerName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string crawler_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setCrawlerName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.clearPageSize = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.hasPageSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 6;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 6));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string orderby = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.clearOrderby = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.hasOrderby = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SortingMode sorting_mode = 8;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.repeatedFields_ = [1];



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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
datasetsList: jspb.Message.toObjectList(msg.getDatasetsList(),
    proto.ondewo.nlu.RagDataset.toObject, includeInstance),
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse;
  return proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ondewo.nlu.RagDataset;
      reader.readMessage(value,proto.ondewo.nlu.RagDataset.deserializeBinaryFromReader);
      msg.addDatasets(value);
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
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ondewo.nlu.RagDataset.serializeBinaryToWriter
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
 * repeated RagDataset datasets = 1;
 * @return {!Array<!proto.ondewo.nlu.RagDataset>}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.getDatasetsList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.RagDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ondewo.nlu.RagDataset, 1));
};


/**
 * @param {!Array<!proto.ondewo.nlu.RagDataset>} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} returns this
*/
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.setDatasetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ondewo.nlu.RagDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagDataset}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.addDatasets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.nlu.RagDataset, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.clearDatasetsList = function() {
  return this.setDatasetsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerAttachedDatasetsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.repeatedFields_ = [6];



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
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
operationName: jspb.Message.getFieldWithDefault(msg, 3, ""),
pageToken: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
pageSize: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
levelFiltersList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
phaseFilter: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
searchQuery: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
sourceUrlFilter: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
orderby: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
sortingMode: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerRunLogsRequest;
  return proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOperationName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var values = /** @type {!Array<!proto.ondewo.nlu.LogSeverity>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addLevelFilters(values[i]);
      }
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhaseFilter(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchQuery(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceUrlFilter(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderby(value);
      break;
    case 13:
      var value = /** @type {!proto.ondewo.nlu.SortingMode} */ (reader.readEnum());
      msg.setSortingMode(value);
      break;
    case 14:
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
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLevelFiltersList();
  if (f.length > 0) {
    writer.writePackedEnum(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getFieldMask();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string operation_name = 3;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearPageSize = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasPageSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated LogSeverity level_filters = 6;
 * @return {!Array<!proto.ondewo.nlu.LogSeverity>}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getLevelFiltersList = function() {
  return /** @type {!Array<!proto.ondewo.nlu.LogSeverity>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<!proto.ondewo.nlu.LogSeverity>} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setLevelFiltersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!proto.ondewo.nlu.LogSeverity} value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.addLevelFilters = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearLevelFiltersList = function() {
  return this.setLevelFiltersList([]);
};


/**
 * optional string phase_filter = 7;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getPhaseFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setPhaseFilter = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearPhaseFilter = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasPhaseFilter = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string search_query = 8;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getSearchQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setSearchQuery = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearSearchQuery = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasSearchQuery = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp start_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string source_url_filter = 11;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getSourceUrlFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setSourceUrlFilter = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearSourceUrlFilter = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasSourceUrlFilter = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string orderby = 12;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getOrderby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setOrderby = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearOrderby = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasOrderby = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SortingMode sorting_mode = 13;
 * @return {!proto.ondewo.nlu.SortingMode}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getSortingMode = function() {
  return /** @type {!proto.ondewo.nlu.SortingMode} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.ondewo.nlu.SortingMode} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setSortingMode = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearSortingMode = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasSortingMode = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.FieldMask field_mask = 14;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.getFieldMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 14));
};


/**
 * @param {?proto.google.protobuf.FieldMask|undefined} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
*/
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.setFieldMask = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsRequest} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.clearFieldMask = function() {
  return this.setFieldMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsRequest.prototype.hasFieldMask = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.repeatedFields_ = [4];



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
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
operationName: jspb.Message.getFieldWithDefault(msg, 1, ""),
crawlerName: jspb.Message.getFieldWithDefault(msg, 2, ""),
status: jspb.Message.getFieldWithDefault(msg, 3, 0),
entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    ondewo_nlu_common_pb.LogEntry.toObject, includeInstance),
nextPageToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
totalLogEntries: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ondewo.nlu.RagGetCrawlerRunLogsResponse;
  return proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrawlerName(value);
      break;
    case 3:
      var value = /** @type {!proto.ondewo.nlu.OperationMetadata.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 4:
      var value = new ondewo_nlu_common_pb.LogEntry;
      reader.readMessage(value,ondewo_nlu_common_pb.LogEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalLogEntries(value);
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
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCrawlerName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      ondewo_nlu_common_pb.LogEntry.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTotalLogEntries();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string operation_name = 1;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getOperationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setOperationName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string crawler_name = 2;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getCrawlerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setCrawlerName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OperationMetadata.Status status = 3;
 * @return {!proto.ondewo.nlu.OperationMetadata.Status}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getStatus = function() {
  return /** @type {!proto.ondewo.nlu.OperationMetadata.Status} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ondewo.nlu.OperationMetadata.Status} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated LogEntry entries = 4;
 * @return {!Array<!proto.ondewo.nlu.LogEntry>}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.ondewo.nlu.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, ondewo_nlu_common_pb.LogEntry, 4));
};


/**
 * @param {!Array<!proto.ondewo.nlu.LogEntry>} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
*/
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ondewo.nlu.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ondewo.nlu.LogEntry}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ondewo.nlu.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};


/**
 * optional string next_page_token = 5;
 * @return {string}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 total_log_entries = 6;
 * @return {number}
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.getTotalLogEntries = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ondewo.nlu.RagGetCrawlerRunLogsResponse} returns this
 */
proto.ondewo.nlu.RagGetCrawlerRunLogsResponse.prototype.setTotalLogEntries = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.ondewo.nlu.RagChunkMethod = {
  RAG_CHUNK_METHOD_UNSPECIFIED: 0,
  RAG_CHUNK_METHOD_NAIVE: 1,
  RAG_CHUNK_METHOD_BOOK: 2,
  RAG_CHUNK_METHOD_EMAIL: 3,
  RAG_CHUNK_METHOD_LAWS: 4,
  RAG_CHUNK_METHOD_MANUAL: 5,
  RAG_CHUNK_METHOD_ONE: 6,
  RAG_CHUNK_METHOD_PAPER: 7,
  RAG_CHUNK_METHOD_PICTURE: 8,
  RAG_CHUNK_METHOD_PRESENTATION: 9,
  RAG_CHUNK_METHOD_QA: 10,
  RAG_CHUNK_METHOD_TABLE: 11,
  RAG_CHUNK_METHOD_TAG: 12
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagGraphRagMethod = {
  RAG_GRAPH_RAG_METHOD_UNSPECIFIED: 0,
  RAG_GRAPH_RAG_METHOD_LIGHT: 1,
  RAG_GRAPH_RAG_METHOD_GENERAL: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagDocumentType = {
  RAG_DOCUMENT_TYPE_UNSPECIFIED: 0,
  RAG_DOCUMENT_TYPE_PDF: 1,
  RAG_DOCUMENT_TYPE_DOC: 2,
  RAG_DOCUMENT_TYPE_VISUAL: 3,
  RAG_DOCUMENT_TYPE_AURAL: 4,
  RAG_DOCUMENT_TYPE_VIRTUAL: 5,
  RAG_DOCUMENT_TYPE_FOLDER: 6,
  RAG_DOCUMENT_TYPE_OTHER: 7
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagDocumentStatus = {
  RAG_DOCUMENT_STATUS_UNSPECIFIED: 0,
  RAG_DOCUMENT_STATUS_UNSTART: 1,
  RAG_DOCUMENT_STATUS_RUNNING: 2,
  RAG_DOCUMENT_STATUS_CANCEL: 3,
  RAG_DOCUMENT_STATUS_DONE: 4,
  RAG_DOCUMENT_STATUS_FAIL: 5
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagLogic = {
  RAG_LOGIC_UNSPECIFIED: 0,
  RAG_LOGIC_AND: 1,
  RAG_LOGIC_OR: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagComparisonOperator = {
  RAG_COMPARISON_OPERATOR_UNSPECIFIED: 0,
  RAG_COMPARISON_OPERATOR_CONTAINS: 1,
  RAG_COMPARISON_OPERATOR_NOT_CONTAINS: 2,
  RAG_COMPARISON_OPERATOR_IN: 3,
  RAG_COMPARISON_OPERATOR_NOT_IN: 4,
  RAG_COMPARISON_OPERATOR_START_WITH: 5,
  RAG_COMPARISON_OPERATOR_END_WITH: 6,
  RAG_COMPARISON_OPERATOR_EMPTY: 7,
  RAG_COMPARISON_OPERATOR_NOT_EMPTY: 8,
  RAG_COMPARISON_OPERATOR_EQ: 9,
  RAG_COMPARISON_OPERATOR_NEQ: 10,
  RAG_COMPARISON_OPERATOR_GT: 11,
  RAG_COMPARISON_OPERATOR_LT: 12,
  RAG_COMPARISON_OPERATOR_GEQ: 13,
  RAG_COMPARISON_OPERATOR_LEQ: 14
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagCrawlerSelectorType = {
  RAG_CRAWLER_SELECTOR_TYPE_UNSPECIFIED: 0,
  RAG_CRAWLER_SELECTOR_TYPE_ID: 1,
  RAG_CRAWLER_SELECTOR_TYPE_CSS_CLASS: 2,
  RAG_CRAWLER_SELECTOR_TYPE_XPATH: 3
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagCrawlerAuthenticationExecutionType = {
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_UNSPECIFIED: 0,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_SERVER_SIDE: 1,
  RAG_CRAWLER_AUTHENTICATION_EXECUTION_TYPE_CLIENT_SIDE: 2
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagCrawlerMetaDataExtractorType = {
  RAG_CRAWLER_META_DATA_EXTRACTOR_TPYE_UNSPECIFIED: 0,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_REGEX: 1,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_FIXED_VALUE: 2,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_CSS_SELECTOR: 3,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_XPATH_SELECTOR: 4,
  RAG_CRAWLER_META_DATA_EXTRACTOR_TYPE_ID_SELECTOR: 5
};

/**
 * @enum {number}
 */
proto.ondewo.nlu.RagCrawlerCrawlStrategy = {
  RAG_CRAWLER_CRAWL_STRATEGY_UNSPECIFIED: 0,
  RAG_CRAWLER_CRAWL_STRATEGY_BFS: 1,
  RAG_CRAWLER_CRAWL_STRATEGY_DFS: 2,
  RAG_CRAWLER_CRAWL_STRATEGY_BEST_FIRST: 3
};

goog.object.extend(exports, proto.ondewo.nlu);
