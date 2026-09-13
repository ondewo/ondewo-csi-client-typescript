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

// A STRING FIELD MUST SURVIVE A BINARY ROUND TRIP THROUGH THE GENERATED CODE.
//
// The generated `_pb.js` modules call `reader.readStringRequireUtf8()`, a method that does NOT exist
// in google-protobuf 3.21.4 -- which this package pinned EXACTLY. Every `deserializeBinary` on a
// message carrying a string therefore threw
// `TypeError: reader.readStringRequireUtf8 is not a function`, and that is what 5.5.0, 5.5.1 and 5.5.2 shipped to npm
// as.
//
// Nothing else here could see it. The .proto sources were right, the generated code was right, the
// auth suite was green and its 100% coverage gate was satisfied -- the generated code and the RUNTIME
// DEPENDENCY simply disagreed, and only decoding a real message exercises that seam.
//
//   node --test .test-build/bundleStringRoundTrip.spec.js

import nodeTest from 'node:test';
import assert from 'node:assert/strict';

import { CcaiProject } from '../api/ondewo/nlu/ccai_project_pb';

/** A value with multi-byte characters, because the emitted reader is the UTF-8-validating one. */
const VALUE: string = 'round-trip-probe-\u00e4\u00f6\u00fc';

nodeTest('a string field survives a binary round trip through the generated code', (): void => {
	const original: CcaiProject = new CcaiProject();
	original.setName(VALUE);

	const bytes: Uint8Array = original.serializeBinary();
	assert.ok(bytes.length > 0, 'serialization produced no bytes');

	// This is the line that threw for three published versions.
	const decoded: CcaiProject = CcaiProject.deserializeBinary(bytes);
	assert.equal(decoded.getName(), VALUE, 'the string did not survive the round trip');
});

nodeTest('the installed protobuf runtime can read the strings this package writes', (): void => {
	const message: CcaiProject = new CcaiProject();
	message.setName('probe');

	// Assert the PROPERTY, not the method name: what matters is that decoding works, not which
	// reader the generator happened to emit. A future generator may emit `readString` again.
	assert.doesNotThrow(
		() => CcaiProject.deserializeBinary(message.serializeBinary()),
		'the installed google-protobuf cannot decode a string this package encodes'
	);
});
