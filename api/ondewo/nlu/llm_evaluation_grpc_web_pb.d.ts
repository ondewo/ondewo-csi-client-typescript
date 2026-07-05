import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as ondewo_nlu_llm_evaluation_pb from '../../ondewo/nlu/llm_evaluation_pb'; // proto import: "ondewo/nlu/llm_evaluation.proto"
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb'; // proto import: "ondewo/nlu/operations.proto"


export class LlmEvaluationsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  llmEvaluationCreateDataset(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationGetDataset(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationListDatasets(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;

  llmEvaluationUpdateDataset(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationDeleteDataset(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationAddExample(
    request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationAddExamples(
    request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;

  llmEvaluationGetExample(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationListExamples(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;

  llmEvaluationUpdateExample(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationDeleteExample(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationRunExperiment(
    request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationGetExperiment(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationListExperiments(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;

  llmEvaluationUpdateExperiment(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationDeleteExperiment(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationCancelExperiment(
    request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationCompareExperiments(
    request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;

  llmEvaluationSubmitFeedback(
    request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;

  llmEvaluationListFeedback(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;

  llmEvaluationDeleteFeedback(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class LlmEvaluationsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  llmEvaluationCreateDataset(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationGetDataset(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationListDatasets(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationDatasetsResponse>;

  llmEvaluationUpdateDataset(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationDataset>;

  llmEvaluationDeleteDataset(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationDatasetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationAddExample(
    request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationAddExamples(
    request: ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.AddLlmEvaluationExamplesResponse>;

  llmEvaluationGetExample(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationListExamples(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExamplesResponse>;

  llmEvaluationUpdateExample(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExample>;

  llmEvaluationDeleteExample(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExampleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationRunExperiment(
    request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationGetExperiment(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationListExperiments(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationExperimentsResponse>;

  llmEvaluationUpdateExperiment(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationDeleteExperiment(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationCancelExperiment(
    request: ondewo_nlu_llm_evaluation_pb.CancelLlmEvaluationExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationExperiment>;

  llmEvaluationCompareExperiments(
    request: ondewo_nlu_llm_evaluation_pb.CompareLlmEvaluationExperimentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationComparison>;

  llmEvaluationSubmitFeedback(
    request: ondewo_nlu_llm_evaluation_pb.SubmitLlmEvaluationFeedbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;

  llmEvaluationListFeedback(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationFeedbackResponse>;

  llmEvaluationDeleteFeedback(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationFeedbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

