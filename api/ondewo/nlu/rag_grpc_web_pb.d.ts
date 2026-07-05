import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb'; // proto import: "ondewo/nlu/operations.proto"
import * as ondewo_nlu_rag_pb from '../../ondewo/nlu/rag_pb'; // proto import: "ondewo/nlu/rag.proto"


export class RagsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ragCreateDataset(
    request: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDataset>;

  ragUpdateDataset(
    request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDataset>;

  ragDeleteDatasets(
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListDatasets(
    request: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDatasetList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDatasetList>;

  ragUpdateDocument(
    request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDocument) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDocument>;

  ragDownloadDocument(
    request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragListDocuments(
    request: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDocumentList) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDocumentList>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagRetrievalResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragParseDocuments(
    request: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragStopParsing(
    request: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagPartialSuccess) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragCreateCrawler(
    request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragGetCrawler(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragListCrawlers(
    request: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListCrawlersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListCrawlersResponse>;

  ragUpdateCrawler(
    request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawler) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawler>;

  ragDeleteCrawler(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;

  ragStartCrawler(
    request: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragStopCrawler(
    request: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagStopCrawlerResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;

  ragGetCrawlerRun(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragListCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagListCrawlerRunsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;

  ragDeleteCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;

  ragGetCrawlerResult(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagCrawlerResult) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagCrawlerResult>;

  ragGetCrawlerResults(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;

  ragAddCrawlerResultsToDatasets(
    request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragRemoveCrawlerResultsFromDatasets(
    request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  ragGetCrawlerAttachedDatasets(
    request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;

  ragDeleteCrawlers(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagDeleteCrawlersResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;

  ragGetCrawlerRunLogs(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse>;

}

export class RagsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  ragCreateDataset(
    request: ondewo_nlu_rag_pb.RagCreateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDataset>;

  ragUpdateDataset(
    request: ondewo_nlu_rag_pb.RagUpdateDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDataset>;

  ragDeleteDatasets(
    request: ondewo_nlu_rag_pb.RagDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragListDatasets(
    request: ondewo_nlu_rag_pb.RagListDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDatasetList>;

  ragUpdateDocument(
    request: ondewo_nlu_rag_pb.RagUpdateDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDocument>;

  ragDownloadDocument(
    request: ondewo_nlu_rag_pb.RagDownloadDocumentRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<ondewo_nlu_rag_pb.RagFileChunk>;

  ragListDocuments(
    request: ondewo_nlu_rag_pb.RagListDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDocumentList>;

  ragDeleteDocuments(
    request: ondewo_nlu_rag_pb.RagDeleteDocumentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragRetrieval(
    request: ondewo_nlu_rag_pb.RagRetrievalRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagRetrievalResponse>;

  ragParseDocuments(
    request: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragStopParsing(
    request: ondewo_nlu_rag_pb.RagDocumentIdsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagPartialSuccess>;

  ragCreateCrawler(
    request: ondewo_nlu_rag_pb.RagCreateCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragGetCrawler(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragListCrawlers(
    request: ondewo_nlu_rag_pb.RagListCrawlersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListCrawlersResponse>;

  ragUpdateCrawler(
    request: ondewo_nlu_rag_pb.RagUpdateCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawler>;

  ragDeleteCrawler(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlerResponse>;

  ragStartCrawler(
    request: ondewo_nlu_rag_pb.RagStartCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragStopCrawler(
    request: ondewo_nlu_rag_pb.RagStopCrawlerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagStopCrawlerResponse>;

  ragGetCrawlerRun(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragListCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagListCrawlerRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagListCrawlerRunsResponse>;

  ragDeleteCrawlerRuns(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlerRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlerRunsResponse>;

  ragGetCrawlerResult(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagCrawlerResult>;

  ragGetCrawlerResults(
    request: ondewo_nlu_rag_pb.RagGetCrawlerResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetCrawlerResultsResponse>;

  ragAddCrawlerResultsToDatasets(
    request: ondewo_nlu_rag_pb.RagAddCrawlerResultsToDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragRemoveCrawlerResultsFromDatasets(
    request: ondewo_nlu_rag_pb.RagRemoveCrawlerResultsFromDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  ragGetCrawlerAttachedDatasets(
    request: ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetCrawlerAttachedDatasetsResponse>;

  ragDeleteCrawlers(
    request: ondewo_nlu_rag_pb.RagDeleteCrawlersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagDeleteCrawlersResponse>;

  ragGetCrawlerRunLogs(
    request: ondewo_nlu_rag_pb.RagGetCrawlerRunLogsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_rag_pb.RagGetCrawlerRunLogsResponse>;

}

