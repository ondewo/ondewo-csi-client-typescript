import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_logs_pb from '../../ondewo/nlu/logs_pb'; // proto import: "ondewo/nlu/logs.proto"


export class LogsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamLogs(
    request: ondewo_nlu_logs_pb.StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;

  listLogs(
    request: ondewo_nlu_logs_pb.ListLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_logs_pb.ListLogsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.ListLogsResponse>;

  getLogStream(
    request: ondewo_nlu_logs_pb.GetLogStreamRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_logs_pb.CaiLogStream) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.CaiLogStream>;

  listLogStreams(
    request: ondewo_nlu_logs_pb.ListLogStreamsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_logs_pb.ListLogStreamsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.ListLogStreamsResponse>;

  exportLogs(
    request: ondewo_nlu_logs_pb.ExportLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;

  deleteLogs(
    request: ondewo_nlu_logs_pb.DeleteLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_logs_pb.DeleteLogsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.DeleteLogsResponse>;

}

export class LogsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  streamLogs(
    request: ondewo_nlu_logs_pb.StreamLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.StreamLogsResponse>;

  listLogs(
    request: ondewo_nlu_logs_pb.ListLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_logs_pb.ListLogsResponse>;

  getLogStream(
    request: ondewo_nlu_logs_pb.GetLogStreamRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_logs_pb.CaiLogStream>;

  listLogStreams(
    request: ondewo_nlu_logs_pb.ListLogStreamsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_logs_pb.ListLogStreamsResponse>;

  exportLogs(
    request: ondewo_nlu_logs_pb.ExportLogsRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_logs_pb.ExportLogsResponse>;

  deleteLogs(
    request: ondewo_nlu_logs_pb.DeleteLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_logs_pb.DeleteLogsResponse>;

}

