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

// THE ONDEWO CSI API 5.6.0 SURFACE IS REACHABLE THROUGH THE GENERATED CLIENT.
//
// Pins that the committed `api/` was regenerated from ondewo-csi-api 5.6.0: `setCallMediaControl` is on
// both generated clients, and the new media-control messages survive a binary round trip.
//
// Loading the generated client at all is part of the check: `conversation_grpc_web_pb` requires
// `nlu/session_pb` -> `google/api/annotations_pb` -> `google/api/http_pb`. Up to proto-compiler 5.15.5
// only DIRECT google/ imports were collected, so `http_pb` was never generated and this file failed with
// MODULE_NOT_FOUND; since 5.15.6 the compiler follows google/ imports transitively.
//
//   node --test .test-build/csiApiSurface.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import { ConversationsClient, ConversationsPromiseClient } from '../api/ondewo/csi/conversation_grpc_web_pb';
import {
	CallMediaControlLevel,
	ControlStreamResponse,
	SetCallMediaControlResponse
} from '../api/ondewo/csi/conversation_pb';

/** Host the clients are constructed against; construction opens no connection. */
const HOST: string = 'http://localhost:8080';

/** Builds the full effective level a media-control push carries. */
function makeLevel(): CallMediaControlLevel {
	const level: CallMediaControlLevel = new CallMediaControlLevel();
	level.setBotMuted(true);
	level.setListeningPaused(true);
	level.setGeneration(7);
	level.setReason('operator-äöü');
	return level;
}

nodeTest('both generated clients expose the setCallMediaControl RPC added in ondewo-csi-api 5.6.0', (): void => {
	const clients: Record<string, unknown>[] = [
		new ConversationsPromiseClient(HOST) as unknown as Record<string, unknown>,
		new ConversationsClient(HOST) as unknown as Record<string, unknown>
	];
	for (const client of clients) {
		assert.equal(typeof client['setCallMediaControl'], 'function');
	}
});

nodeTest('a SetCallMediaControlResponse survives a binary round trip', (): void => {
	const response: SetCallMediaControlResponse = new SetCallMediaControlResponse();
	response.setApplied(makeLevel());
	response.setChanged(true);
	response.setStale(false);
	response.setBotPlaybackInFlight(true);
	response.setRefusalReason('amd-in-progress');

	const decoded: SetCallMediaControlResponse = SetCallMediaControlResponse.deserializeBinary(
		response.serializeBinary()
	);
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
	const plain: ControlStreamResponse = ControlStreamResponse.deserializeBinary(
		new ControlStreamResponse().serializeBinary()
	);
	assert.equal(plain.hasMediaControl(), false);

	const message: ControlStreamResponse = new ControlStreamResponse();
	message.setMediaControl(makeLevel());
	const decoded: ControlStreamResponse = ControlStreamResponse.deserializeBinary(message.serializeBinary());
	assert.equal(decoded.hasMediaControl(), true);
	assert.equal(decoded.getMediaControl()?.getGeneration(), 7);
});
