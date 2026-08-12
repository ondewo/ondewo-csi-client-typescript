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

  llmEvaluationUpdateFeedback(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;

  llmEvaluationCreateReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationGetReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationListReleaseGates(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse>;

  llmEvaluationUpdateReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationDeleteReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationRunReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationGetReleaseGateRun(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun>;

  llmEvaluationListReleaseGateRuns(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse>;

  llmEvaluationCreateScorecard(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationGetScorecard(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationListScorecards(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse>;

  llmEvaluationUpdateScorecard(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationDeleteScorecard(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationGetProjectSettings(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;

  llmEvaluationUpdateProjectSettings(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;

  llmEvaluationListEvaluators(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse>;

  llmEvaluationCreateExamplesFromSession(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse>;

  llmEvaluationSimulateConversations(
    request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_operations_pb.Operation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationCreateSchedule(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationGetSchedule(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationListSchedules(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse>;

  llmEvaluationUpdateSchedule(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationDeleteSchedule(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationCreateReport(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;

  llmEvaluationGetReport(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;

  llmEvaluationListReports(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse>;

  llmEvaluationDeleteReport(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationCreateAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationGetAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationListAbExperiments(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse>;

  llmEvaluationUpdateAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationDeleteAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationStartAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationStopAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationGetAbExperimentResults(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse>;

  llmEvaluationGetAbRolloutRecommendation(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation>;

  llmEvaluationApplyAbRollout(
    request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;

  llmEvaluationGetAbRolloutDecision(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;

  llmEvaluationListAbRolloutDecisions(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse>;

  llmEvaluationCreateOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationGetOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationListOnlineConfigs(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse>;

  llmEvaluationUpdateOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationDeleteOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  llmEvaluationGetOnlineResult(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult>;

  llmEvaluationListOnlineResults(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse>;

  llmEvaluationGetAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;

  llmEvaluationListAnnotationQueueItems(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse>;

  llmEvaluationUpdateAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;

  llmEvaluationPromoteAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse>;

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

  llmEvaluationUpdateFeedback(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationFeedbackRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationFeedback>;

  llmEvaluationCreateReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReleaseGateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationGetReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationListReleaseGates(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGatesResponse>;

  llmEvaluationUpdateReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationReleaseGateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGate>;

  llmEvaluationDeleteReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReleaseGateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationRunReleaseGate(
    request: ondewo_nlu_llm_evaluation_pb.RunLlmEvaluationReleaseGateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationGetReleaseGateRun(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReleaseGateRunRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReleaseGateRun>;

  llmEvaluationListReleaseGateRuns(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReleaseGateRunsResponse>;

  llmEvaluationCreateScorecard(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScorecardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationGetScorecard(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScorecardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationListScorecards(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationScorecardsResponse>;

  llmEvaluationUpdateScorecard(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScorecardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationScorecard>;

  llmEvaluationDeleteScorecard(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScorecardRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationGetProjectSettings(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationProjectSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;

  llmEvaluationUpdateProjectSettings(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationProjectSettingsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationProjectSettings>;

  llmEvaluationListEvaluators(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationEvaluatorsResponse>;

  llmEvaluationCreateExamplesFromSession(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationExamplesFromSessionResponse>;

  llmEvaluationSimulateConversations(
    request: ondewo_nlu_llm_evaluation_pb.SimulateLlmEvaluationConversationsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_operations_pb.Operation>;

  llmEvaluationCreateSchedule(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationScheduleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationGetSchedule(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationScheduleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationListSchedules(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationSchedulesResponse>;

  llmEvaluationUpdateSchedule(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationScheduleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationSchedule>;

  llmEvaluationDeleteSchedule(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationScheduleRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationCreateReport(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationReportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;

  llmEvaluationGetReport(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationReportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationReport>;

  llmEvaluationListReports(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationReportsResponse>;

  llmEvaluationDeleteReport(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationReportRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationCreateAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationGetAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationListAbExperiments(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbExperimentsResponse>;

  llmEvaluationUpdateAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationDeleteAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationStartAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.StartLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationStopAbExperiment(
    request: ondewo_nlu_llm_evaluation_pb.StopLlmEvaluationAbExperimentRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbExperiment>;

  llmEvaluationGetAbExperimentResults(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbExperimentResultsResponse>;

  llmEvaluationGetAbRolloutRecommendation(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutRecommendationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutRecommendation>;

  llmEvaluationApplyAbRollout(
    request: ondewo_nlu_llm_evaluation_pb.ApplyLlmEvaluationAbRolloutRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;

  llmEvaluationGetAbRolloutDecision(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAbRolloutDecisionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAbRolloutDecision>;

  llmEvaluationListAbRolloutDecisions(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAbRolloutDecisionsResponse>;

  llmEvaluationCreateOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.CreateLlmEvaluationOnlineConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationGetOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationListOnlineConfigs(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineConfigsResponse>;

  llmEvaluationUpdateOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationOnlineConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineConfig>;

  llmEvaluationDeleteOnlineConfig(
    request: ondewo_nlu_llm_evaluation_pb.DeleteLlmEvaluationOnlineConfigRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  llmEvaluationGetOnlineResult(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationOnlineResultRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationOnlineResult>;

  llmEvaluationListOnlineResults(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationOnlineResultsResponse>;

  llmEvaluationGetAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.GetLlmEvaluationAnnotationQueueItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;

  llmEvaluationListAnnotationQueueItems(
    request: ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.ListLlmEvaluationAnnotationQueueItemsResponse>;

  llmEvaluationUpdateAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.UpdateLlmEvaluationAnnotationQueueItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.LlmEvaluationAnnotationQueueItem>;

  llmEvaluationPromoteAnnotationQueueItem(
    request: ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_llm_evaluation_pb.PromoteLlmEvaluationAnnotationQueueItemResponse>;

}

