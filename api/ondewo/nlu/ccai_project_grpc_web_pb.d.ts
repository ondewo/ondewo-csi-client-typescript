import * as grpcWeb from 'grpc-web';

import * as ondewo_nlu_ccai_project_pb from '../../ondewo/nlu/ccai_project_pb'; // proto import: "ondewo/nlu/ccai_project.proto"


export class CcaiProjectsClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCcaiProject(
    request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.CcaiProject) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.CcaiProject>;

  createCcaiProject(
    request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse>;

  deleteCcaiProject(
    request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse>;

  listCcaiProjects(
    request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse>;

  updateCcaiProject(
    request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse>;

  getCcaiService(
    request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: ondewo_nlu_ccai_project_pb.CcaiService) => void
  ): grpcWeb.ClientReadableStream<ondewo_nlu_ccai_project_pb.CcaiService>;

}

export class CcaiProjectsPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getCcaiProject(
    request: ondewo_nlu_ccai_project_pb.GetCcaiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.CcaiProject>;

  createCcaiProject(
    request: ondewo_nlu_ccai_project_pb.CreateCcaiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.CreateCcaiProjectResponse>;

  deleteCcaiProject(
    request: ondewo_nlu_ccai_project_pb.DeleteCcaiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.DeleteCcaiProjectResponse>;

  listCcaiProjects(
    request: ondewo_nlu_ccai_project_pb.ListCcaiProjectsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.ListCcaiProjectsResponse>;

  updateCcaiProject(
    request: ondewo_nlu_ccai_project_pb.UpdateCcaiProjectRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.UpdateCcaiProjectResponse>;

  getCcaiService(
    request: ondewo_nlu_ccai_project_pb.GetCcaiServiceRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<ondewo_nlu_ccai_project_pb.CcaiService>;

}

