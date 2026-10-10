# Release History

*****************

## Release ONDEWO CSI Typescript Client 5.6.0

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) Regenerated from
  [ondewo-csi-api 5.6.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.6.0) (was 5.5.0). The new API
  surface in this package:
  * The RPC `setCallMediaControl` on `ConversationsClient` / `ConversationsPromiseClient`: per-call operator media
    control pushed by ondewo-sip (in-container token only). The request `CallMediaControlLevel` carries the full
    effective level (`botMuted`, `listeningPaused`), a monotonic `generation` and a bounded `reason`; the response
    `SetCallMediaControlResponse` reports the `applied` level, `changed`, `stale`, `botPlaybackInFlight` and a
    `refusalReason`.
  * `ControlStreamResponse.mediaControl`, set only on media-control messages of `getControlStream`. A client must
    handle such a message as media control and must not apply its echoed `controlStatus`.
* The API change is purely additive: no field, enum value or RPC was renumbered or removed, so code written against
  5.5.x compiles and stays wire-compatible.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) The package now ships `api/google/api/http_pb.js`
  (and its `.d.ts`, re-exported from the entry point). `google/api/annotations_pb.js` requires it, and
  `ondewo/csi/conversation_pb.js` / `conversation_grpc_web_pb.js` reach `annotations_pb` through `ondewo/nlu/session_pb`,
  but the proto compiler generates only the DIRECT `google/` imports of the API protos, so up to 5.5.4 loading the
  conversation module failed with `Cannot find module '../../google/api/http_pb.js'`. `src/proto-deps.txt` now
  pre-seeds `google/api/http.proto` into the compiler's dependency list.

### Improvements

* Regenerated with [ondewo-proto-compiler 5.15.5](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.5)
  (was 5.15.2); `google-protobuf` stays pinned to `4.0.2`, and `tests/bundleStringRoundTrip.spec.ts` stays green.
* Tests: `tests/csiApiSurface.spec.ts` loads the generated conversation client (which failed with the missing
  `http_pb` before), checks that both generated clients expose `setCallMediaControl` and round-trips
  `SetCallMediaControlResponse` and `ControlStreamResponse.mediaControl`.
* Tracking API Version [5.6.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.6.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 5.5.4

### New Features

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `createGrpcWebEndpoint({ host, port, useSecureChannel, withCredentials })`
  (`auth/grpcWebEndpoint`, re-exported from `auth/offlineTokenProvider` and the package entry point) builds the
  `hostname` URL and the client options a generated `*Client` / `*PromiseClient` takes. `https://` is the default;
  `useSecureChannel: false` builds `http://` and logs a warning naming `host:port`; a bare IPv6 host is bracketed;
  `host`, `port` and both flags are validated (`'false'` is refused, not read as `true`).
* TLS in a browser is the browser's TLS: the server certificate is checked against the browser / OS trust store and a
  client certificate (mutual TLS) comes from the browser's certificate store. A config carrying a non-empty
  `grpcCert` / `grpcClientCert` / `grpcClientKey` (or `grpc_cert` / `grpc_client_cert` / `grpc_client_key`) is
  therefore refused with an error naming the field, never the value; empty values are ignored. `withCredentials: true`
  lets a cross-origin call present the browser's client certificate. No error message renders a refused value.
* README section "TLS, mutual TLS and certificates": modes, the Envoy side of mutual TLS, a test PKI with openssl,
  security notes and troubleshooting. Documented gap: the generated clients need `XMLHttpRequest`, so gRPC calls run
  in browsers only; in Node.js only the Keycloak `login` helper is usable and there is no Node.js path for a custom CA
  or client certificate.

### Bug Fixes

* [[OND211-2443]](https://ondewo.atlassian.net/browse/OND211-2443) `OfflineTokenProvider` no longer leaks its tokens
  when logged: `JSON.stringify`, `console.log` and `util.inspect` of a provider (also nested in another object) render
  the access and refresh tokens as `***REDACTED***`. `getAuthorizationHeader()` is unchanged.
* The npm package now ships the hand-written `auth/` module: the Keycloak `login` helper / `OfflineTokenProvider`
  (`auth/offlineTokenProvider`) and `auth/grpcWebEndpoint`. Up to 5.5.3 `create_npm_package` never copied `auth/`
  into the package, so the Keycloak helper was not published.

### Improvements

* Tests: the endpoint helper's edge cases, including calls through the real grpc-web runtime with a recording
  `XMLHttpRequest`, and the token redaction. `tests/releaseNotes.spec.ts` pins the RELEASE.md heading spelling the
  Makefile slices, a `*****` separator ending every section, and non-empty notes for the version being released.
* RELEASE.md: every section now ends at its separator (the last one ran to the end of the file).
* Regenerated with [ondewo-proto-compiler 5.15.2](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.15.2)
  (5.5.3: 5.11.0); `google-protobuf` stays at 4.0.2.
* Tracking API Version [5.5.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.5.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 5.5.3

### Bug Fixes

* **5.5.0, 5.5.1 and 5.5.2 could not deserialize a single string field.** The generated `_pb.js` modules call
  `reader.readStringRequireUtf8()`, a method that does not exist in `google-protobuf` 3.21.4 -- which
  this package pinned EXACTLY. Every `deserializeBinary` on a message carrying a string threw
  `TypeError: reader.readStringRequireUtf8 is not a function`. The pin is `4.0.2` now; no generated
  code and no proto content changed.
* **A guard was added, because nothing here could see it.** The `.proto` sources, the generated code,
  the auth suite and its 100% coverage gate were all correct -- the generated code and the RUNTIME
  DEPENDENCY simply disagreed, and only decoding a real message exercises that seam.
  `tests/bundleStringRoundTrip.spec.ts` round-trips a string with multi-byte characters and is
  verified falsifiable: against google-protobuf 3.21.4 it reports 0 passed, 2 failed with that exact
  TypeError.

*****************

## Release ONDEWO CSI Typescript Client 5.5.2

### Bug Fixes

* **Release integrity: 5.5.1 published the Keycloak refresh fix to npm but its git tag did not
  contain it.** `make build` copies `auth/` into the published package, so the artifact carried the
  fix, while the release target's `git add` list named `api`, `Makefile`, `src`, `RELEASE.md`, the
  two package manifests and the submodules -- and not `auth/`. Building 5.5.1 from its tag therefore
  produced different code than installing 5.5.1 from npm. `auth/` is in that list now.
* The code is otherwise identical to 5.5.1: the same bounded, jittered backoff on the background
  token refresh. Nothing to change when upgrading; 5.5.2 exists so the tag and the artifact agree.

*****************

## Release ONDEWO CSI Typescript Client 5.5.1

### Bug Fixes

* A failed background token refresh no longer ends token renewal for the life of the process.
  `scheduleRefresh` ran only on the success path, so a single transient Keycloak failure left no timer
  armed: the access token then lapsed and every later call failed `UNAUTHENTICATED` until the
  application logged in again. The stale token keeps working until it expires, which is what made the
  defect silent.
* The failure path now re-arms with bounded exponential backoff and full jitter -- 5 s doubling to a
  300 s ceiling, with the actual wait drawn uniformly from `[base, ceiling]` -- rather than at the 1 s
  scheduling floor. The jitter is load-bearing at ondewo's fan-out: one client per call container means
  N clients whose refreshes fail in the same instant would otherwise retry in lockstep against a realm
  they all share.
* A successful refresh resets the backoff ladder, and the bounded-deadline and `stop()` guards still
  apply to every re-arm.
* An `onRefreshError` handler that throws no longer kills the refresh loop, and its error no longer
  escapes the timer callback as a process-fatal `unhandledRejection`.

*****************

## Release ONDEWO CSI Typescript Client 5.5.0

### Improvements

* Built against [ondewo-csi-api 5.5.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.5.0), which tracks ondewo-nlu-api 7.1.0 (was 7.0.0) and ondewo-s2t-api 7.5.0 (was 7.4.0).
* `ondewo/csi/conversation.proto` is unchanged in that API release, so the CSI service surface is identical and this client stays wire-compatible with its predecessor. What grows is the vendored surface it re-exports: `speech-to-text.proto` gains the `VadMethod` and `TsdMethod` enums and the `Silero` and `WespeakerTsd` messages (voice-activity and turn-shift detection configuration), and `rag.proto` gains `RagCrawlerIncrementalConfig`.

*****************

## Release ONDEWO CSI Typescript Client 5.4.1

### Bug Fixes

* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Regenerated with [ondewo-proto-compiler 5.13.0](https://github.com/ondewo/ondewo-proto-compiler/releases/tag/5.13.0).
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) The hand-written `auth/` surface is now re-exported from the generated public-api barrel. It was compiled and shipped inside the package but nothing re-exported it, so importing a symbol from the package root did not resolve and consumers could only deep-import the module. The re-export is emitted by the compiler, so it survives the regeneration that rewrites the barrel on every build.
* [[OND221-2830]](https://ondewo.atlassian.net/browse/OND221-2830) Tooling: `conventional-pre-commit` now runs before `giticket` at the commit-msg stage - with giticket first, its `[OND221-2830] fix: ...` rewrite was no longer valid Conventional Commits and every commit on a ticket branch failed. `README.md` is prettier-ignored where `.prettierrc` sets `useTabs` and markdownlint's MD010 de-tabs the same blocks, and the codegen `docker run` invocations no longer pass `-it`, which fails outside a TTY.

*****************

## Release ONDEWO CSI Typescript Client 5.4.0

### Improvements

* Tracking API Version [5.4.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.4.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 5.2.0

### Improvements

* Tracking API Version [5.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 5.1.0

### Improvements

* Tracking API Version [5.1.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.1.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 5.0.0

### Improvements

* Tracking API Version [5.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/5.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 4.0.0

### Improvements

* Tracking API Version [4.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/4.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 3.2.0

### Improvements

* Tracking API Version [3.2.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.2.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 3.0.0

### Improvements

* Tracking API Version [3.0.0](https://github.com/ondewo/ondewo-csi-api/releases/tag/3.0.0) ( [Documentation](https://ondewo.github.io/ondewo-csi-api/) )

*****************

## Release ONDEWO CSI Typescript Client 2.3.1

### Improvements

* Update to CSI client version tag 2.3.1
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Implemented automated release for GitHub and NPM
* [[OND211-2039]](https://ondewo.atlassian.net/browse/OND211-2039) - Added pre-commit hooks and adjusted files to them

*****************
