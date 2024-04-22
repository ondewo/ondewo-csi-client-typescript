/**
 * @fileoverview gRPC-Web generated client stub for ondewo.t2s
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.t2s = require('./text-to-speech_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.t2s.Text2SpeechClient =
    function(hostname, credentials, options) {
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
proto.ondewo.t2s.Text2SpeechPromiseClient =
    function(hostname, credentials, options) {
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
 *   !proto.ondewo.t2s.SynthesizeRequest,
 *   !proto.ondewo.t2s.SynthesizeResponse>}
 */
const methodDescriptor_Text2Speech_Synthesize = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/Synthesize',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.SynthesizeRequest,
  proto.ondewo.t2s.SynthesizeResponse,
  /**
   * @param {!proto.ondewo.t2s.SynthesizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.SynthesizeResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.SynthesizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.SynthesizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.SynthesizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.synthesize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/Synthesize',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_Synthesize,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.SynthesizeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.SynthesizeResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.synthesize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/Synthesize',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_Synthesize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.BatchSynthesizeRequest,
 *   !proto.ondewo.t2s.BatchSynthesizeResponse>}
 */
const methodDescriptor_Text2Speech_BatchSynthesize = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/BatchSynthesize',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.BatchSynthesizeRequest,
  proto.ondewo.t2s.BatchSynthesizeResponse,
  /**
   * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.BatchSynthesizeResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.BatchSynthesizeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.BatchSynthesizeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.batchSynthesize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/BatchSynthesize',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_BatchSynthesize,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.BatchSynthesizeRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.BatchSynthesizeResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.batchSynthesize =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/BatchSynthesize',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_BatchSynthesize);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.NormalizeTextRequest,
 *   !proto.ondewo.t2s.NormalizeTextResponse>}
 */
const methodDescriptor_Text2Speech_NormalizeText = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/NormalizeText',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.NormalizeTextRequest,
  proto.ondewo.t2s.NormalizeTextResponse,
  /**
   * @param {!proto.ondewo.t2s.NormalizeTextRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.NormalizeTextResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.NormalizeTextRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.NormalizeTextResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.NormalizeTextResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.normalizeText =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/NormalizeText',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_NormalizeText,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.NormalizeTextRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.NormalizeTextResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.normalizeText =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/NormalizeText',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_NormalizeText);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.T2sPipelineId,
 *   !proto.ondewo.t2s.Text2SpeechConfig>}
 */
const methodDescriptor_Text2Speech_GetT2sPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/GetT2sPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.T2sPipelineId,
  proto.ondewo.t2s.Text2SpeechConfig,
  /**
   * @param {!proto.ondewo.t2s.T2sPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.Text2SpeechConfig.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.T2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.Text2SpeechConfig)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.Text2SpeechConfig>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.getT2sPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/GetT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_GetT2sPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.T2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.Text2SpeechConfig>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.getT2sPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/GetT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_GetT2sPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.Text2SpeechConfig,
 *   !proto.ondewo.t2s.T2sPipelineId>}
 */
const methodDescriptor_Text2Speech_CreateT2sPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.Text2SpeechConfig,
  proto.ondewo.t2s.T2sPipelineId,
  /**
   * @param {!proto.ondewo.t2s.Text2SpeechConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.T2sPipelineId.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.T2sPipelineId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.T2sPipelineId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.createT2sPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_CreateT2sPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.T2sPipelineId>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.createT2sPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/CreateT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_CreateT2sPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.T2sPipelineId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Text2Speech_DeleteT2sPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.T2sPipelineId,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.t2s.T2sPipelineId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.T2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.deleteT2sPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_DeleteT2sPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.T2sPipelineId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.deleteT2sPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/DeleteT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_DeleteT2sPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.Text2SpeechConfig,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Text2Speech_UpdateT2sPipeline = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.Text2SpeechConfig,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.t2s.Text2SpeechConfig} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.updateT2sPipeline =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_UpdateT2sPipeline,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.Text2SpeechConfig} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.updateT2sPipeline =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/UpdateT2sPipeline',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_UpdateT2sPipeline);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.ListT2sPipelinesRequest,
 *   !proto.ondewo.t2s.ListT2sPipelinesResponse>}
 */
const methodDescriptor_Text2Speech_ListT2sPipelines = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/ListT2sPipelines',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.ListT2sPipelinesRequest,
  proto.ondewo.t2s.ListT2sPipelinesResponse,
  /**
   * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.ListT2sPipelinesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.ListT2sPipelinesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.ListT2sPipelinesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.listT2sPipelines =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sPipelines',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sPipelines,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.ListT2sPipelinesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.ListT2sPipelinesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.listT2sPipelines =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sPipelines',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sPipelines);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.ListT2sLanguagesRequest,
 *   !proto.ondewo.t2s.ListT2sLanguagesResponse>}
 */
const methodDescriptor_Text2Speech_ListT2sLanguages = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/ListT2sLanguages',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.ListT2sLanguagesRequest,
  proto.ondewo.t2s.ListT2sLanguagesResponse,
  /**
   * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.ListT2sLanguagesResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.ListT2sLanguagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.ListT2sLanguagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.listT2sLanguages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sLanguages',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sLanguages,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.ListT2sLanguagesRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.ListT2sLanguagesResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.listT2sLanguages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sLanguages',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sLanguages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.ListT2sDomainsRequest,
 *   !proto.ondewo.t2s.ListT2sDomainsResponse>}
 */
const methodDescriptor_Text2Speech_ListT2sDomains = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/ListT2sDomains',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.ListT2sDomainsRequest,
  proto.ondewo.t2s.ListT2sDomainsResponse,
  /**
   * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.ListT2sDomainsResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.ListT2sDomainsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.ListT2sDomainsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.listT2sDomains =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sDomains',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sDomains,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.ListT2sDomainsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.ListT2sDomainsResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.listT2sDomains =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/ListT2sDomains',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_ListT2sDomains);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.ondewo.t2s.T2SGetServiceInfoResponse>}
 */
const methodDescriptor_Text2Speech_GetServiceInfo = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.Text2Speech/GetServiceInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.ondewo.t2s.T2SGetServiceInfoResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.T2SGetServiceInfoResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.T2SGetServiceInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.T2SGetServiceInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.Text2SpeechClient.prototype.getServiceInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/GetServiceInfo',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_GetServiceInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.T2SGetServiceInfoResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.Text2SpeechPromiseClient.prototype.getServiceInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.Text2Speech/GetServiceInfo',
      request,
      metadata || {},
      methodDescriptor_Text2Speech_GetServiceInfo);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.t2s.CustomPhonemizersClient =
    function(hostname, credentials, options) {
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
proto.ondewo.t2s.CustomPhonemizersPromiseClient =
    function(hostname, credentials, options) {
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
 *   !proto.ondewo.t2s.PhonemizerId,
 *   !proto.ondewo.t2s.CustomPhonemizerProto>}
 */
const methodDescriptor_CustomPhonemizers_GetCustomPhonemizer = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.PhonemizerId,
  proto.ondewo.t2s.CustomPhonemizerProto,
  /**
   * @param {!proto.ondewo.t2s.PhonemizerId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.PhonemizerId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.CustomPhonemizerProto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.CustomPhonemizerProto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.CustomPhonemizersClient.prototype.getCustomPhonemizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_GetCustomPhonemizer,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.PhonemizerId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.CustomPhonemizerProto>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.CustomPhonemizersPromiseClient.prototype.getCustomPhonemizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/GetCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_GetCustomPhonemizer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.CreateCustomPhonemizerRequest,
 *   !proto.ondewo.t2s.PhonemizerId>}
 */
const methodDescriptor_CustomPhonemizers_CreateCustomPhonemizer = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.CreateCustomPhonemizerRequest,
  proto.ondewo.t2s.PhonemizerId,
  /**
   * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.PhonemizerId.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.PhonemizerId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.PhonemizerId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.CustomPhonemizersClient.prototype.createCustomPhonemizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_CreateCustomPhonemizer,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.CreateCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.PhonemizerId>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.CustomPhonemizersPromiseClient.prototype.createCustomPhonemizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/CreateCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_CreateCustomPhonemizer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.PhonemizerId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_CustomPhonemizers_DeleteCustomPhonemizer = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.PhonemizerId,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ondewo.t2s.PhonemizerId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.PhonemizerId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.CustomPhonemizersClient.prototype.deleteCustomPhonemizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_DeleteCustomPhonemizer,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.PhonemizerId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.CustomPhonemizersPromiseClient.prototype.deleteCustomPhonemizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/DeleteCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_DeleteCustomPhonemizer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.UpdateCustomPhonemizerRequest,
 *   !proto.ondewo.t2s.CustomPhonemizerProto>}
 */
const methodDescriptor_CustomPhonemizers_UpdateCustomPhonemizer = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.UpdateCustomPhonemizerRequest,
  proto.ondewo.t2s.CustomPhonemizerProto,
  /**
   * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.CustomPhonemizerProto.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.CustomPhonemizerProto)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.CustomPhonemizerProto>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.CustomPhonemizersClient.prototype.updateCustomPhonemizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_UpdateCustomPhonemizer,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.UpdateCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.CustomPhonemizerProto>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.CustomPhonemizersPromiseClient.prototype.updateCustomPhonemizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/UpdateCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_UpdateCustomPhonemizer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.t2s.ListCustomPhonemizerRequest,
 *   !proto.ondewo.t2s.ListCustomPhonemizerResponse>}
 */
const methodDescriptor_CustomPhonemizers_ListCustomPhonemizer = new grpc.web.MethodDescriptor(
  '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
  grpc.web.MethodType.UNARY,
  proto.ondewo.t2s.ListCustomPhonemizerRequest,
  proto.ondewo.t2s.ListCustomPhonemizerResponse,
  /**
   * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.t2s.ListCustomPhonemizerResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.t2s.ListCustomPhonemizerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.t2s.ListCustomPhonemizerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.t2s.CustomPhonemizersClient.prototype.listCustomPhonemizer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_ListCustomPhonemizer,
      callback);
};


/**
 * @param {!proto.ondewo.t2s.ListCustomPhonemizerRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.t2s.ListCustomPhonemizerResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.t2s.CustomPhonemizersPromiseClient.prototype.listCustomPhonemizer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.t2s.CustomPhonemizers/ListCustomPhonemizer',
      request,
      metadata || {},
      methodDescriptor_CustomPhonemizers_ListCustomPhonemizer);
};


module.exports = proto.ondewo.t2s;

