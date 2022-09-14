import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';

export class GetUserProjectCountRequest extends jspb.Message {
	getUserId(): string;
	setUserId(value: string): GetUserProjectCountRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetUserProjectCountRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetUserProjectCountRequest): GetUserProjectCountRequest.AsObject;
	static serializeBinaryToWriter(message: GetUserProjectCountRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetUserProjectCountRequest;
	static deserializeBinaryFromReader(
		message: GetUserProjectCountRequest,
		reader: jspb.BinaryReader
	): GetUserProjectCountRequest;
}

export namespace GetUserProjectCountRequest {
	export type AsObject = {
		userId: string;
	};
}
