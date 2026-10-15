// Copyright 2021-2026 ONDEWO GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// THE ONDEWO CSI API SURFACE IS REACHABLE THROUGH THE GENERATED CLIENTS.
//
// The expectations are DERIVED from the protos the client was generated from
// (`src/ondewo-csi-api/ondewo/csi/*.proto`, the api submodule at CSI_API_GIT_BRANCH), so an API release
// that adds an RPC is checked without editing this file. What is pinned by hand is only what must NOT go
// away:
//   * every `service` has a callback and a promise client carrying one method per RPC gRPC-web can express
//     (unary and server-streaming); a client- or bidirectional-streaming RPC (`S2sStream`) has no method;
//   * the entry point re-exports every generated csi module and the hand-written auth providers;
//   * the 5.6.0 media-control messages survive a binary round trip.
//
// Loading the generated client at all is part of the check: `conversation_grpc_web_pb` requires
// `nlu/session_pb` -> `google/api/annotations_pb` -> `google/api/http_pb`. Up to proto-compiler 5.15.5
// only DIRECT google/ imports were collected, so `http_pb` was never generated and this file failed with
// MODULE_NOT_FOUND; since 5.15.6 the compiler follows google/ imports transitively.
//
// Message TYPES are imported through the package entry point `../public-api`, never from the module that
// happens to define them today (a message moving between .proto files is not an API change). The entry
// point is ESM for bundlers and cannot be required by node, so the runtime VALUES are looked up by name
// across the generated csi modules.
//
//   node --test .test-build/surface/tests/csiApiSurface.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'module';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';

import type { CallMediaControlLevel, ControlStreamResponse, SetCallMediaControlResponse } from '../public-api';

/**
 * @param start - The directory to start from.
 * @returns The closest ancestor directory holding the Makefile (the repository root).
 */
function findRepoRoot(start: string): string {
	let dir: string = start;
	while (!existsSync(join(dir, 'Makefile'))) {
		dir = dirname(dir);
	}
	return dir;
}

/** The repository root (the compiled spec runs from a build directory below it). */
const REPO_ROOT: string = findRepoRoot(__dirname);
/** The csi protos the committed `api/` was generated from. */
const PROTO_DIR: string = join(REPO_ROOT, 'src', 'ondewo-csi-api', 'ondewo', 'csi');
/** The generated csi modules. */
const API_DIR: string = join(REPO_ROOT, 'api', 'ondewo', 'csi');
/** Host the clients are constructed against; construction opens no connection. */
const HOST: string = 'http://localhost:8080';
/** Loads a generated CommonJS module by path. */
const loadModule: NodeJS.Require = createRequire(__filename);

/** One `rpc` line of a `service`. */
interface ProtoRpc {
	/** The RPC name as written in the proto. */
	name: string;
	/** True for a client- or bidirectional-streaming RPC, which gRPC-web cannot express. */
	clientStreaming: boolean;
}

/** One `service` block. */
interface ProtoService {
	/** The proto file name without `.proto`. */
	file: string;
	/** The service name. */
	name: string;
	/** Its RPCs. */
	rpcs: ProtoRpc[];
}

/** A generated client constructor, as both the callback and the promise flavour declare it. */
type ClientConstructor = new (hostname: string) => object;

/**
 * @param text - Proto source.
 * @returns The source with `//` and `/* *\/` comments blanked, string literals left intact.
 */
function stripComments(text: string): string {
	let out: string = '';
	let index: number = 0;
	while (index < text.length) {
		let stop: number = index + 1;
		if (text[index] === '"') {
			stop = text.indexOf('"', index + 1) + 1;
			out += text.slice(index, stop);
		} else if (text.startsWith('//', index)) {
			stop = text.indexOf('\n', index);
		} else if (text.startsWith('/*', index)) {
			stop = text.indexOf('*/', index + 2) + 2;
		} else {
			out += text[index];
		}
		if (stop <= index) {
			break;
		}
		index = stop;
	}
	return out;
}

/**
 * @param text - Comment-free proto source.
 * @param open - Index of a `{`.
 * @returns The text between that brace and its matching `}`.
 */
function blockBody(text: string, open: number): string {
	let depth: number = 0;
	for (let index: number = open; index < text.length; index += 1) {
		if (text[index] === '{') {
			depth += 1;
		} else if (text[index] === '}') {
			depth -= 1;
			if (depth === 0) {
				return text.slice(open + 1, index);
			}
		}
	}
	throw new Error('unbalanced braces in a proto service');
}

/** @returns Every service of every csi proto, with its RPCs. */
function protoServices(): ProtoService[] {
	return readdirSync(PROTO_DIR)
		.filter((file: string): boolean => file.endsWith('.proto'))
		.sort()
		.flatMap((file: string): ProtoService[] => {
			const text: string = stripComments(readFileSync(join(PROTO_DIR, file), 'utf8'));
			return [...text.matchAll(/\bservice\s+(\w+)\s*\{/g)].map((service: RegExpExecArray): ProtoService => {
				const body: string = blockBody(text, service.index + service[0].length - 1);
				const rpcs: ProtoRpc[] = [
					...body.matchAll(/\brpc\s+(\w+)\s*\(\s*(stream\s+)?[\w.]+\s*\)\s*returns\s*\(\s*(?:stream\s+)?[\w.]+\s*\)/g)
				].map((rpc: RegExpExecArray): ProtoRpc => ({ name: rpc[1], clientStreaming: rpc[2] !== undefined }));
				return { file: file.replace(/\.proto$/, ''), name: service[1], rpcs };
			});
		});
}

/**
 * @param name - An RPC name.
 * @returns The method name protoc-gen-grpc-web generates for it (first letter lower-cased).
 */
function methodName(name: string): string {
	return name.charAt(0).toLowerCase() + name.slice(1);
}

/** Reads a member off an object without widening the generated type. */
function memberOf(owner: object, name: string): unknown {
	return (owner as Record<string, unknown>)[name];
}

/**
 * @param file - A generated module path relative to `api/ondewo/csi`, without `.js`.
 * @returns The module's exports.
 */
function generatedModule(file: string): Record<string, unknown> {
	return loadModule(join(API_DIR, file)) as Record<string, unknown>;
}

/**
 * @param name - An exported message or enum name.
 * @returns The one generated csi message module export of that name.
 */
function generatedExport<T>(name: string): T {
	// goog's generated modules share one `proto.ondewo.csi` namespace and each re-exports all of it, so the
	// same constructor shows up under several modules: what must be unique is the VALUE.
	const values: Set<unknown> = new Set(
		readdirSync(API_DIR)
			.filter((file: string): boolean => file.endsWith('_pb.js') && !file.endsWith('_grpc_web_pb.js'))
			.map((file: string): unknown => generatedModule(file.replace(/\.js$/, ''))[name])
			.filter((value: unknown): boolean => value !== undefined)
	);
	assert.equal(values.size, 1, `the generated csi modules export exactly one ${name}`);
	return [...values][0] as T;
}

/** The services of the protos, parsed once. */
const SERVICES: ProtoService[] = protoServices();

nodeTest('the csi protos declare the service this client must keep', (): void => {
	const names: string[] = SERVICES.map((service: ProtoService): string => service.name);
	assert.ok(names.includes('Conversations'), `service Conversations is missing from ${PROTO_DIR}`);
	for (const service of SERVICES) {
		assert.ok(service.rpcs.length > 0, `no rpc parsed from service ${service.name}`);
	}
});

nodeTest('the parser sees the RPCs this client must keep, and S2sStream as bidirectional', (): void => {
	const rpcs: Map<string, ProtoRpc> = new Map(
		SERVICES.flatMap((service: ProtoService): [string, ProtoRpc][] =>
			service.rpcs.map((rpc: ProtoRpc): [string, ProtoRpc] => [`${service.name}.${rpc.name}`, rpc])
		)
	);
	for (const required of [
		'Conversations.CreateS2sPipeline',
		'Conversations.GetS2sPipeline',
		'Conversations.ListS2sPipelines',
		'Conversations.CheckUpstreamHealth',
		'Conversations.GetControlStream',
		'Conversations.SetControlStatus',
		'Conversations.SetCallMediaControl'
	]) {
		assert.equal(rpcs.get(required)?.clientStreaming, false, `${required} is missing or not gRPC-web capable`);
	}
	assert.equal(rpcs.get('Conversations.S2sStream')?.clientStreaming, true);
});

nodeTest('every RPC gRPC-web can express is on both generated clients of its service', (): void => {
	const missing: string[] = [];
	for (const service of SERVICES) {
		const exports: Record<string, unknown> = generatedModule(`${service.file}_grpc_web_pb`);
		for (const flavour of ['Client', 'PromiseClient']) {
			const Client: ClientConstructor = exports[`${service.name}${flavour}`] as ClientConstructor;
			assert.equal(typeof Client, 'function', `${service.name}${flavour} is not generated`);
			const client: object = new Client(HOST);
			for (const rpc of service.rpcs.filter((candidate: ProtoRpc): boolean => !candidate.clientStreaming)) {
				if (typeof memberOf(client, methodName(rpc.name)) !== 'function') {
					missing.push(`${service.name}${flavour}.${methodName(rpc.name)}`);
				}
			}
		}
	}
	assert.deepEqual(missing, []);
});

nodeTest('a client- or bidirectional-streaming RPC has no gRPC-web method', (): void => {
	const present: string[] = [];
	for (const service of SERVICES) {
		const exports: Record<string, unknown> = generatedModule(`${service.file}_grpc_web_pb`);
		for (const flavour of ['Client', 'PromiseClient']) {
			const client: object = new (exports[`${service.name}${flavour}`] as ClientConstructor)(HOST);
			for (const rpc of service.rpcs.filter((candidate: ProtoRpc): boolean => candidate.clientStreaming)) {
				if (memberOf(client, methodName(rpc.name)) !== undefined) {
					present.push(`${service.name}${flavour}.${methodName(rpc.name)}`);
				}
			}
		}
	}
	assert.deepEqual(present, []);
});

nodeTest('the entry point re-exports every generated csi module', (): void => {
	const protoFiles: string[] = readdirSync(PROTO_DIR)
		.filter((file: string): boolean => file.endsWith('.proto'))
		.map((file: string): string => file.replace(/\.proto$/, ''));
	const expected: string[] = [
		...protoFiles.map((file: string): string => `${file}_pb`),
		...SERVICES.map((service: ProtoService): string => `${service.file}_grpc_web_pb`)
	];
	const missing: string[] = [];
	for (const [entryPoint, suffix] of [
		['public-api.js', ''],
		['public-api.d.ts', '.d']
	]) {
		const text: string = readFileSync(join(REPO_ROOT, entryPoint), 'utf8');
		for (const module of expected) {
			if (!text.includes(`export * from './api/ondewo/csi/${module}${suffix}';`)) {
				missing.push(`${entryPoint}: ${module}`);
			}
		}
	}
	assert.deepEqual(missing, []);
});

nodeTest('the entry point re-exports the hand-written auth providers', (): void => {
	const modules: string[] = readdirSync(join(REPO_ROOT, 'auth'))
		.filter((file: string): boolean => file.endsWith('.ts') && !file.endsWith('.spec.ts'))
		.map((file: string): string => file.replace(/\.ts$/, ''));
	assert.ok(modules.length > 0);
	const missing: string[] = [];
	for (const entryPoint of ['public-api.js', 'public-api.d.ts']) {
		const text: string = readFileSync(join(REPO_ROOT, entryPoint), 'utf8');
		for (const module of modules) {
			if (!text.includes(`export * from './auth/${module}';`)) {
				missing.push(`${entryPoint}: ${module}`);
			}
		}
	}
	assert.deepEqual(missing, []);
});

/**
 * @returns A full effective level, as a media-control push carries it.
 */
function makeLevel(): CallMediaControlLevel {
	const Level: typeof CallMediaControlLevel = generatedExport<typeof CallMediaControlLevel>('CallMediaControlLevel');
	const level: CallMediaControlLevel = new Level();
	level.setBotMuted(true);
	level.setListeningPaused(true);
	level.setGeneration(7);
	level.setReason('operator-äöü');
	return level;
}

nodeTest('a 5.6.0 SetCallMediaControlResponse survives a binary round trip', (): void => {
	const Response: typeof SetCallMediaControlResponse =
		generatedExport<typeof SetCallMediaControlResponse>('SetCallMediaControlResponse');
	const response: SetCallMediaControlResponse = new Response();
	response.setApplied(makeLevel());
	response.setChanged(true);
	response.setStale(false);
	response.setBotPlaybackInFlight(true);
	response.setRefusalReason('amd-in-progress');

	const decoded: SetCallMediaControlResponse = Response.deserializeBinary(response.serializeBinary());
	assert.equal(decoded.getApplied()?.getBotMuted(), true);
	assert.equal(decoded.getApplied()?.getListeningPaused(), true);
	assert.equal(decoded.getApplied()?.getGeneration(), 7);
	assert.equal(decoded.getApplied()?.getReason(), 'operator-äöü');
	assert.equal(decoded.getChanged(), true);
	assert.equal(decoded.getStale(), false);
	assert.equal(decoded.getBotPlaybackInFlight(), true);
	assert.equal(decoded.getRefusalReason(), 'amd-in-progress');
});

nodeTest('ControlStreamResponse.mediaControl is set only on media-control messages', (): void => {
	const Message: typeof ControlStreamResponse = generatedExport<typeof ControlStreamResponse>('ControlStreamResponse');
	const plain: ControlStreamResponse = Message.deserializeBinary(new Message().serializeBinary());
	assert.equal(plain.hasMediaControl(), false);

	const message: ControlStreamResponse = new Message();
	message.setMediaControl(makeLevel());
	const decoded: ControlStreamResponse = Message.deserializeBinary(message.serializeBinary());
	assert.equal(decoded.hasMediaControl(), true);
	assert.equal(decoded.getMediaControl()?.getGeneration(), 7);
});
