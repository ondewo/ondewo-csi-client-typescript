import * as jspb from 'google-protobuf';

export class Any extends jspb.Message {
	getTypeUrl(): string;
	setTypeUrl(value: string): Any;

	getValue(): Uint8Array | string;
	getValue_asU8(): Uint8Array;
	getValue_asB64(): string;
	setValue(value: Uint8Array | string): Any;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Any.AsObject;
	static toObject(includeInstance: boolean, msg: Any): Any.AsObject;
	static serializeBinaryToWriter(message: Any, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Any;
	static deserializeBinaryFromReader(message: Any, reader: jspb.BinaryReader): Any;
}

export namespace Any {
	export type AsObject = {
		typeUrl: string;
		value: Uint8Array | string;
	};
}
