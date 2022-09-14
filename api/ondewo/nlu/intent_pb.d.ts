import * as jspb from 'google-protobuf';

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as ondewo_nlu_context_pb from '../../ondewo/nlu/context_pb';
import * as ondewo_nlu_common_pb from '../../ondewo/nlu/common_pb';
import * as ondewo_nlu_operations_pb from '../../ondewo/nlu/operations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';

export class Intent extends jspb.Message {
	getName(): string;
	setName(value: string): Intent;

	getDisplayName(): string;
	setDisplayName(value: string): Intent;

	getWebhookState(): Intent.WebhookState;
	setWebhookState(value: Intent.WebhookState): Intent;

	getPriority(): number;
	setPriority(value: number): Intent;

	getIsFallback(): boolean;
	setIsFallback(value: boolean): Intent;

	getMlDisabled(): boolean;
	setMlDisabled(value: boolean): Intent;

	getInputContextNamesList(): Array<string>;
	setInputContextNamesList(value: Array<string>): Intent;
	clearInputContextNamesList(): Intent;
	addInputContextNames(value: string, index?: number): Intent;

	getEventsList(): Array<string>;
	setEventsList(value: Array<string>): Intent;
	clearEventsList(): Intent;
	addEvents(value: string, index?: number): Intent;

	getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
	setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): Intent;
	clearTrainingPhrasesList(): Intent;
	addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;

	getAction(): string;
	setAction(value: string): Intent;

	getOutputContextsList(): Array<ondewo_nlu_context_pb.Context>;
	setOutputContextsList(value: Array<ondewo_nlu_context_pb.Context>): Intent;
	clearOutputContextsList(): Intent;
	addOutputContexts(value?: ondewo_nlu_context_pb.Context, index?: number): ondewo_nlu_context_pb.Context;

	getResetContexts(): boolean;
	setResetContexts(value: boolean): Intent;

	getParametersList(): Array<Intent.Parameter>;
	setParametersList(value: Array<Intent.Parameter>): Intent;
	clearParametersList(): Intent;
	addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;

	getMessagesList(): Array<Intent.Message>;
	setMessagesList(value: Array<Intent.Message>): Intent;
	clearMessagesList(): Intent;
	addMessages(value?: Intent.Message, index?: number): Intent.Message;

	getDefaultResponsePlatformsList(): Array<Intent.Message.Platform>;
	setDefaultResponsePlatformsList(value: Array<Intent.Message.Platform>): Intent;
	clearDefaultResponsePlatformsList(): Intent;
	addDefaultResponsePlatforms(value: Intent.Message.Platform, index?: number): Intent;

	getRootFollowupIntentName(): string;
	setRootFollowupIntentName(value: string): Intent;

	getParentFollowupIntentName(): string;
	setParentFollowupIntentName(value: string): Intent;

	getFollowupIntentInfoList(): Array<Intent.FollowupIntentInfo>;
	setFollowupIntentInfoList(value: Array<Intent.FollowupIntentInfo>): Intent;
	clearFollowupIntentInfoList(): Intent;
	addFollowupIntentInfo(value?: Intent.FollowupIntentInfo, index?: number): Intent.FollowupIntentInfo;

	getNextPageToken(): string;
	setNextPageToken(value: string): Intent;

	getDomainName(): string;
	setDomainName(value: string): Intent;

	getIsStartOfDeviation(): boolean;
	setIsStartOfDeviation(value: boolean): Intent;

	getIsEndOfDeviation(): boolean;
	setIsEndOfDeviation(value: boolean): Intent;

	getTrainingPhraseCount(): number;
	setTrainingPhraseCount(value: number): Intent;

	getStatus(): Intent.IntentStatus;
	setStatus(value: Intent.IntentStatus): Intent;

	getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): Intent;
	hasStartDate(): boolean;
	clearStartDate(): Intent;

	getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
	setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): Intent;
	hasEndDate(): boolean;
	clearEndDate(): Intent;

	getTagsList(): Array<string>;
	setTagsList(value: Array<string>): Intent;
	clearTagsList(): Intent;
	addTags(value: string, index?: number): Intent;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): Intent.AsObject;
	static toObject(includeInstance: boolean, msg: Intent): Intent.AsObject;
	static serializeBinaryToWriter(message: Intent, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): Intent;
	static deserializeBinaryFromReader(message: Intent, reader: jspb.BinaryReader): Intent;
}

export namespace Intent {
	export type AsObject = {
		name: string;
		displayName: string;
		webhookState: Intent.WebhookState;
		priority: number;
		isFallback: boolean;
		mlDisabled: boolean;
		inputContextNamesList: Array<string>;
		eventsList: Array<string>;
		trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>;
		action: string;
		outputContextsList: Array<ondewo_nlu_context_pb.Context.AsObject>;
		resetContexts: boolean;
		parametersList: Array<Intent.Parameter.AsObject>;
		messagesList: Array<Intent.Message.AsObject>;
		defaultResponsePlatformsList: Array<Intent.Message.Platform>;
		rootFollowupIntentName: string;
		parentFollowupIntentName: string;
		followupIntentInfoList: Array<Intent.FollowupIntentInfo.AsObject>;
		nextPageToken: string;
		domainName: string;
		isStartOfDeviation: boolean;
		isEndOfDeviation: boolean;
		trainingPhraseCount: number;
		status: Intent.IntentStatus;
		startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
		tagsList: Array<string>;
	};

	export class TrainingPhrase extends jspb.Message {
		getName(): string;
		setName(value: string): TrainingPhrase;

		getType(): Intent.TrainingPhrase.Type;
		setType(value: Intent.TrainingPhrase.Type): TrainingPhrase;

		getText(): string;
		setText(value: string): TrainingPhrase;

		getEntitiesList(): Array<Intent.TrainingPhrase.Entity>;
		setEntitiesList(value: Array<Intent.TrainingPhrase.Entity>): TrainingPhrase;
		clearEntitiesList(): TrainingPhrase;
		addEntities(value?: Intent.TrainingPhrase.Entity, index?: number): Intent.TrainingPhrase.Entity;

		getTimesAddedCount(): number;
		setTimesAddedCount(value: number): TrainingPhrase;

		getLanguageCode(): string;
		setLanguageCode(value: string): TrainingPhrase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): TrainingPhrase.AsObject;
		static toObject(includeInstance: boolean, msg: TrainingPhrase): TrainingPhrase.AsObject;
		static serializeBinaryToWriter(message: TrainingPhrase, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): TrainingPhrase;
		static deserializeBinaryFromReader(message: TrainingPhrase, reader: jspb.BinaryReader): TrainingPhrase;
	}

	export namespace TrainingPhrase {
		export type AsObject = {
			name: string;
			type: Intent.TrainingPhrase.Type;
			text: string;
			entitiesList: Array<Intent.TrainingPhrase.Entity.AsObject>;
			timesAddedCount: number;
			languageCode: string;
		};

		export class Entity extends jspb.Message {
			getEntityTypeName(): string;
			setEntityTypeName(value: string): Entity;

			getEntityTypeDisplayName(): string;
			setEntityTypeDisplayName(value: string): Entity;

			getEntityValueName(): string;
			setEntityValueName(value: string): Entity;

			getEntityValueDisplayName(): string;
			setEntityValueDisplayName(value: string): Entity;

			getStart(): number;
			setStart(value: number): Entity;

			getEnd(): number;
			setEnd(value: number): Entity;

			getParameterName(): string;
			setParameterName(value: string): Entity;

			getParameterDisplayName(): string;
			setParameterDisplayName(value: string): Entity;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Entity.AsObject;
			static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
			static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Entity;
			static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
		}

		export namespace Entity {
			export type AsObject = {
				entityTypeName: string;
				entityTypeDisplayName: string;
				entityValueName: string;
				entityValueDisplayName: string;
				start: number;
				end: number;
				parameterName: string;
				parameterDisplayName: string;
			};
		}

		export enum Type {
			TYPE_UNSPECIFIED = 0,
			EXAMPLE = 1,
			TEMPLATE = 2
		}
	}

	export class Parameter extends jspb.Message {
		getName(): string;
		setName(value: string): Parameter;

		getDisplayName(): string;
		setDisplayName(value: string): Parameter;

		getValue(): string;
		setValue(value: string): Parameter;

		getDefaultValue(): string;
		setDefaultValue(value: string): Parameter;

		getEntityTypeName(): string;
		setEntityTypeName(value: string): Parameter;

		getEntityTypeDisplayName(): string;
		setEntityTypeDisplayName(value: string): Parameter;

		getMandatory(): boolean;
		setMandatory(value: boolean): Parameter;

		getPromptsList(): Array<Intent.Parameter.Prompt>;
		setPromptsList(value: Array<Intent.Parameter.Prompt>): Parameter;
		clearPromptsList(): Parameter;
		addPrompts(value?: Intent.Parameter.Prompt, index?: number): Intent.Parameter.Prompt;

		getIsList(): boolean;
		setIsList(value: boolean): Parameter;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Parameter.AsObject;
		static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
		static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): Parameter;
		static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
	}

	export namespace Parameter {
		export type AsObject = {
			name: string;
			displayName: string;
			value: string;
			defaultValue: string;
			entityTypeName: string;
			entityTypeDisplayName: string;
			mandatory: boolean;
			promptsList: Array<Intent.Parameter.Prompt.AsObject>;
			isList: boolean;
		};

		export class Prompt extends jspb.Message {
			getName(): string;
			setName(value: string): Prompt;

			getText(): string;
			setText(value: string): Prompt;

			getLanguageCode(): string;
			setLanguageCode(value: string): Prompt;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Prompt.AsObject;
			static toObject(includeInstance: boolean, msg: Prompt): Prompt.AsObject;
			static serializeBinaryToWriter(message: Prompt, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Prompt;
			static deserializeBinaryFromReader(message: Prompt, reader: jspb.BinaryReader): Prompt;
		}

		export namespace Prompt {
			export type AsObject = {
				name: string;
				text: string;
				languageCode: string;
			};
		}
	}

	export class Message extends jspb.Message {
		getName(): string;
		setName(value: string): Message;

		getLanguageCode(): string;
		setLanguageCode(value: string): Message;

		getText(): Intent.Message.Text | undefined;
		setText(value?: Intent.Message.Text): Message;
		hasText(): boolean;
		clearText(): Message;

		getImage(): Intent.Message.Image | undefined;
		setImage(value?: Intent.Message.Image): Message;
		hasImage(): boolean;
		clearImage(): Message;

		getQuickReplies(): Intent.Message.QuickReplies | undefined;
		setQuickReplies(value?: Intent.Message.QuickReplies): Message;
		hasQuickReplies(): boolean;
		clearQuickReplies(): Message;

		getCard(): Intent.Message.Card | undefined;
		setCard(value?: Intent.Message.Card): Message;
		hasCard(): boolean;
		clearCard(): Message;

		getPayload(): google_protobuf_struct_pb.Struct | undefined;
		setPayload(value?: google_protobuf_struct_pb.Struct): Message;
		hasPayload(): boolean;
		clearPayload(): Message;

		getSimpleResponses(): Intent.Message.SimpleResponses | undefined;
		setSimpleResponses(value?: Intent.Message.SimpleResponses): Message;
		hasSimpleResponses(): boolean;
		clearSimpleResponses(): Message;

		getBasicCard(): Intent.Message.BasicCard | undefined;
		setBasicCard(value?: Intent.Message.BasicCard): Message;
		hasBasicCard(): boolean;
		clearBasicCard(): Message;

		getSuggestions(): Intent.Message.Suggestions | undefined;
		setSuggestions(value?: Intent.Message.Suggestions): Message;
		hasSuggestions(): boolean;
		clearSuggestions(): Message;

		getLinkOutSuggestion(): Intent.Message.LinkOutSuggestion | undefined;
		setLinkOutSuggestion(value?: Intent.Message.LinkOutSuggestion): Message;
		hasLinkOutSuggestion(): boolean;
		clearLinkOutSuggestion(): Message;

		getListSelect(): Intent.Message.ListSelect | undefined;
		setListSelect(value?: Intent.Message.ListSelect): Message;
		hasListSelect(): boolean;
		clearListSelect(): Message;

		getCarouselSelect(): Intent.Message.CarouselSelect | undefined;
		setCarouselSelect(value?: Intent.Message.CarouselSelect): Message;
		hasCarouselSelect(): boolean;
		clearCarouselSelect(): Message;

		getHtmlText(): Intent.Message.HTMLText | undefined;
		setHtmlText(value?: Intent.Message.HTMLText): Message;
		hasHtmlText(): boolean;
		clearHtmlText(): Message;

		getVideo(): Intent.Message.Video | undefined;
		setVideo(value?: Intent.Message.Video): Message;
		hasVideo(): boolean;
		clearVideo(): Message;

		getAudio(): Intent.Message.Audio | undefined;
		setAudio(value?: Intent.Message.Audio): Message;
		hasAudio(): boolean;
		clearAudio(): Message;

		getPlatform(): Intent.Message.Platform;
		setPlatform(value: Intent.Message.Platform): Message;

		getIsPrompt(): boolean;
		setIsPrompt(value: boolean): Message;

		getMessageCase(): Message.MessageCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): Message.AsObject;
		static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
		static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): Message;
		static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
	}

	export namespace Message {
		export type AsObject = {
			name: string;
			languageCode: string;
			text?: Intent.Message.Text.AsObject;
			image?: Intent.Message.Image.AsObject;
			quickReplies?: Intent.Message.QuickReplies.AsObject;
			card?: Intent.Message.Card.AsObject;
			payload?: google_protobuf_struct_pb.Struct.AsObject;
			simpleResponses?: Intent.Message.SimpleResponses.AsObject;
			basicCard?: Intent.Message.BasicCard.AsObject;
			suggestions?: Intent.Message.Suggestions.AsObject;
			linkOutSuggestion?: Intent.Message.LinkOutSuggestion.AsObject;
			listSelect?: Intent.Message.ListSelect.AsObject;
			carouselSelect?: Intent.Message.CarouselSelect.AsObject;
			htmlText?: Intent.Message.HTMLText.AsObject;
			video?: Intent.Message.Video.AsObject;
			audio?: Intent.Message.Audio.AsObject;
			platform: Intent.Message.Platform;
			isPrompt: boolean;
		};

		export class Text extends jspb.Message {
			getTextList(): Array<string>;
			setTextList(value: Array<string>): Text;
			clearTextList(): Text;
			addText(value: string, index?: number): Text;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Text.AsObject;
			static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
			static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Text;
			static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
		}

		export namespace Text {
			export type AsObject = {
				textList: Array<string>;
			};
		}

		export class Image extends jspb.Message {
			getImageUri(): string;
			setImageUri(value: string): Image;

			getAccessibilityText(): string;
			setAccessibilityText(value: string): Image;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Image.AsObject;
			static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
			static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Image;
			static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
		}

		export namespace Image {
			export type AsObject = {
				imageUri: string;
				accessibilityText: string;
			};
		}

		export class QuickReplies extends jspb.Message {
			getTitle(): string;
			setTitle(value: string): QuickReplies;

			getQuickRepliesList(): Array<string>;
			setQuickRepliesList(value: Array<string>): QuickReplies;
			clearQuickRepliesList(): QuickReplies;
			addQuickReplies(value: string, index?: number): QuickReplies;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): QuickReplies.AsObject;
			static toObject(includeInstance: boolean, msg: QuickReplies): QuickReplies.AsObject;
			static serializeBinaryToWriter(message: QuickReplies, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): QuickReplies;
			static deserializeBinaryFromReader(message: QuickReplies, reader: jspb.BinaryReader): QuickReplies;
		}

		export namespace QuickReplies {
			export type AsObject = {
				title: string;
				quickRepliesList: Array<string>;
			};
		}

		export class Card extends jspb.Message {
			getTitle(): string;
			setTitle(value: string): Card;

			getSubtitle(): string;
			setSubtitle(value: string): Card;

			getImageUri(): string;
			setImageUri(value: string): Card;

			getButtonsList(): Array<Intent.Message.Card.Button>;
			setButtonsList(value: Array<Intent.Message.Card.Button>): Card;
			clearButtonsList(): Card;
			addButtons(value?: Intent.Message.Card.Button, index?: number): Intent.Message.Card.Button;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Card.AsObject;
			static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
			static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Card;
			static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
		}

		export namespace Card {
			export type AsObject = {
				title: string;
				subtitle: string;
				imageUri: string;
				buttonsList: Array<Intent.Message.Card.Button.AsObject>;
			};

			export class Button extends jspb.Message {
				getText(): string;
				setText(value: string): Button;

				getPostback(): string;
				setPostback(value: string): Button;

				serializeBinary(): Uint8Array;
				toObject(includeInstance?: boolean): Button.AsObject;
				static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
				static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
				static deserializeBinary(bytes: Uint8Array): Button;
				static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
			}

			export namespace Button {
				export type AsObject = {
					text: string;
					postback: string;
				};
			}
		}

		export class SimpleResponse extends jspb.Message {
			getTextToSpeech(): string;
			setTextToSpeech(value: string): SimpleResponse;

			getSsml(): string;
			setSsml(value: string): SimpleResponse;

			getDisplayText(): string;
			setDisplayText(value: string): SimpleResponse;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): SimpleResponse.AsObject;
			static toObject(includeInstance: boolean, msg: SimpleResponse): SimpleResponse.AsObject;
			static serializeBinaryToWriter(message: SimpleResponse, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): SimpleResponse;
			static deserializeBinaryFromReader(message: SimpleResponse, reader: jspb.BinaryReader): SimpleResponse;
		}

		export namespace SimpleResponse {
			export type AsObject = {
				textToSpeech: string;
				ssml: string;
				displayText: string;
			};
		}

		export class SimpleResponses extends jspb.Message {
			getSimpleResponsesList(): Array<Intent.Message.SimpleResponse>;
			setSimpleResponsesList(value: Array<Intent.Message.SimpleResponse>): SimpleResponses;
			clearSimpleResponsesList(): SimpleResponses;
			addSimpleResponses(value?: Intent.Message.SimpleResponse, index?: number): Intent.Message.SimpleResponse;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): SimpleResponses.AsObject;
			static toObject(includeInstance: boolean, msg: SimpleResponses): SimpleResponses.AsObject;
			static serializeBinaryToWriter(message: SimpleResponses, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): SimpleResponses;
			static deserializeBinaryFromReader(message: SimpleResponses, reader: jspb.BinaryReader): SimpleResponses;
		}

		export namespace SimpleResponses {
			export type AsObject = {
				simpleResponsesList: Array<Intent.Message.SimpleResponse.AsObject>;
			};
		}

		export class BasicCard extends jspb.Message {
			getTitle(): string;
			setTitle(value: string): BasicCard;

			getSubtitle(): string;
			setSubtitle(value: string): BasicCard;

			getFormattedText(): string;
			setFormattedText(value: string): BasicCard;

			getImage(): Intent.Message.Image | undefined;
			setImage(value?: Intent.Message.Image): BasicCard;
			hasImage(): boolean;
			clearImage(): BasicCard;

			getButtonsList(): Array<Intent.Message.BasicCard.Button>;
			setButtonsList(value: Array<Intent.Message.BasicCard.Button>): BasicCard;
			clearButtonsList(): BasicCard;
			addButtons(value?: Intent.Message.BasicCard.Button, index?: number): Intent.Message.BasicCard.Button;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): BasicCard.AsObject;
			static toObject(includeInstance: boolean, msg: BasicCard): BasicCard.AsObject;
			static serializeBinaryToWriter(message: BasicCard, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): BasicCard;
			static deserializeBinaryFromReader(message: BasicCard, reader: jspb.BinaryReader): BasicCard;
		}

		export namespace BasicCard {
			export type AsObject = {
				title: string;
				subtitle: string;
				formattedText: string;
				image?: Intent.Message.Image.AsObject;
				buttonsList: Array<Intent.Message.BasicCard.Button.AsObject>;
			};

			export class Button extends jspb.Message {
				getTitle(): string;
				setTitle(value: string): Button;

				getOpenUriAction(): Intent.Message.BasicCard.Button.OpenUriAction | undefined;
				setOpenUriAction(value?: Intent.Message.BasicCard.Button.OpenUriAction): Button;
				hasOpenUriAction(): boolean;
				clearOpenUriAction(): Button;

				serializeBinary(): Uint8Array;
				toObject(includeInstance?: boolean): Button.AsObject;
				static toObject(includeInstance: boolean, msg: Button): Button.AsObject;
				static serializeBinaryToWriter(message: Button, writer: jspb.BinaryWriter): void;
				static deserializeBinary(bytes: Uint8Array): Button;
				static deserializeBinaryFromReader(message: Button, reader: jspb.BinaryReader): Button;
			}

			export namespace Button {
				export type AsObject = {
					title: string;
					openUriAction?: Intent.Message.BasicCard.Button.OpenUriAction.AsObject;
				};

				export class OpenUriAction extends jspb.Message {
					getUri(): string;
					setUri(value: string): OpenUriAction;

					serializeBinary(): Uint8Array;
					toObject(includeInstance?: boolean): OpenUriAction.AsObject;
					static toObject(includeInstance: boolean, msg: OpenUriAction): OpenUriAction.AsObject;
					static serializeBinaryToWriter(message: OpenUriAction, writer: jspb.BinaryWriter): void;
					static deserializeBinary(bytes: Uint8Array): OpenUriAction;
					static deserializeBinaryFromReader(message: OpenUriAction, reader: jspb.BinaryReader): OpenUriAction;
				}

				export namespace OpenUriAction {
					export type AsObject = {
						uri: string;
					};
				}
			}
		}

		export class Suggestion extends jspb.Message {
			getTitle(): string;
			setTitle(value: string): Suggestion;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Suggestion.AsObject;
			static toObject(includeInstance: boolean, msg: Suggestion): Suggestion.AsObject;
			static serializeBinaryToWriter(message: Suggestion, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Suggestion;
			static deserializeBinaryFromReader(message: Suggestion, reader: jspb.BinaryReader): Suggestion;
		}

		export namespace Suggestion {
			export type AsObject = {
				title: string;
			};
		}

		export class Suggestions extends jspb.Message {
			getSuggestionsList(): Array<Intent.Message.Suggestion>;
			setSuggestionsList(value: Array<Intent.Message.Suggestion>): Suggestions;
			clearSuggestionsList(): Suggestions;
			addSuggestions(value?: Intent.Message.Suggestion, index?: number): Intent.Message.Suggestion;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Suggestions.AsObject;
			static toObject(includeInstance: boolean, msg: Suggestions): Suggestions.AsObject;
			static serializeBinaryToWriter(message: Suggestions, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Suggestions;
			static deserializeBinaryFromReader(message: Suggestions, reader: jspb.BinaryReader): Suggestions;
		}

		export namespace Suggestions {
			export type AsObject = {
				suggestionsList: Array<Intent.Message.Suggestion.AsObject>;
			};
		}

		export class LinkOutSuggestion extends jspb.Message {
			getDestinationName(): string;
			setDestinationName(value: string): LinkOutSuggestion;

			getUri(): string;
			setUri(value: string): LinkOutSuggestion;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): LinkOutSuggestion.AsObject;
			static toObject(includeInstance: boolean, msg: LinkOutSuggestion): LinkOutSuggestion.AsObject;
			static serializeBinaryToWriter(message: LinkOutSuggestion, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): LinkOutSuggestion;
			static deserializeBinaryFromReader(message: LinkOutSuggestion, reader: jspb.BinaryReader): LinkOutSuggestion;
		}

		export namespace LinkOutSuggestion {
			export type AsObject = {
				destinationName: string;
				uri: string;
			};
		}

		export class ListSelect extends jspb.Message {
			getTitle(): string;
			setTitle(value: string): ListSelect;

			getItemsList(): Array<Intent.Message.ListSelect.Item>;
			setItemsList(value: Array<Intent.Message.ListSelect.Item>): ListSelect;
			clearItemsList(): ListSelect;
			addItems(value?: Intent.Message.ListSelect.Item, index?: number): Intent.Message.ListSelect.Item;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): ListSelect.AsObject;
			static toObject(includeInstance: boolean, msg: ListSelect): ListSelect.AsObject;
			static serializeBinaryToWriter(message: ListSelect, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): ListSelect;
			static deserializeBinaryFromReader(message: ListSelect, reader: jspb.BinaryReader): ListSelect;
		}

		export namespace ListSelect {
			export type AsObject = {
				title: string;
				itemsList: Array<Intent.Message.ListSelect.Item.AsObject>;
			};

			export class Item extends jspb.Message {
				getInfo(): Intent.Message.SelectItemInfo | undefined;
				setInfo(value?: Intent.Message.SelectItemInfo): Item;
				hasInfo(): boolean;
				clearInfo(): Item;

				getTitle(): string;
				setTitle(value: string): Item;

				getDescription(): string;
				setDescription(value: string): Item;

				getImage(): Intent.Message.Image | undefined;
				setImage(value?: Intent.Message.Image): Item;
				hasImage(): boolean;
				clearImage(): Item;

				serializeBinary(): Uint8Array;
				toObject(includeInstance?: boolean): Item.AsObject;
				static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
				static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
				static deserializeBinary(bytes: Uint8Array): Item;
				static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
			}

			export namespace Item {
				export type AsObject = {
					info?: Intent.Message.SelectItemInfo.AsObject;
					title: string;
					description: string;
					image?: Intent.Message.Image.AsObject;
				};
			}
		}

		export class CarouselSelect extends jspb.Message {
			getItemsList(): Array<Intent.Message.CarouselSelect.Item>;
			setItemsList(value: Array<Intent.Message.CarouselSelect.Item>): CarouselSelect;
			clearItemsList(): CarouselSelect;
			addItems(value?: Intent.Message.CarouselSelect.Item, index?: number): Intent.Message.CarouselSelect.Item;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): CarouselSelect.AsObject;
			static toObject(includeInstance: boolean, msg: CarouselSelect): CarouselSelect.AsObject;
			static serializeBinaryToWriter(message: CarouselSelect, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): CarouselSelect;
			static deserializeBinaryFromReader(message: CarouselSelect, reader: jspb.BinaryReader): CarouselSelect;
		}

		export namespace CarouselSelect {
			export type AsObject = {
				itemsList: Array<Intent.Message.CarouselSelect.Item.AsObject>;
			};

			export class Item extends jspb.Message {
				getInfo(): Intent.Message.SelectItemInfo | undefined;
				setInfo(value?: Intent.Message.SelectItemInfo): Item;
				hasInfo(): boolean;
				clearInfo(): Item;

				getTitle(): string;
				setTitle(value: string): Item;

				getDescription(): string;
				setDescription(value: string): Item;

				getImage(): Intent.Message.Image | undefined;
				setImage(value?: Intent.Message.Image): Item;
				hasImage(): boolean;
				clearImage(): Item;

				serializeBinary(): Uint8Array;
				toObject(includeInstance?: boolean): Item.AsObject;
				static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
				static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
				static deserializeBinary(bytes: Uint8Array): Item;
				static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
			}

			export namespace Item {
				export type AsObject = {
					info?: Intent.Message.SelectItemInfo.AsObject;
					title: string;
					description: string;
					image?: Intent.Message.Image.AsObject;
				};
			}
		}

		export class HTMLText extends jspb.Message {
			getTextList(): Array<string>;
			setTextList(value: Array<string>): HTMLText;
			clearTextList(): HTMLText;
			addText(value: string, index?: number): HTMLText;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): HTMLText.AsObject;
			static toObject(includeInstance: boolean, msg: HTMLText): HTMLText.AsObject;
			static serializeBinaryToWriter(message: HTMLText, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): HTMLText;
			static deserializeBinaryFromReader(message: HTMLText, reader: jspb.BinaryReader): HTMLText;
		}

		export namespace HTMLText {
			export type AsObject = {
				textList: Array<string>;
			};
		}

		export class Video extends jspb.Message {
			getUri(): string;
			setUri(value: string): Video;

			getAccessibilityText(): string;
			setAccessibilityText(value: string): Video;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Video.AsObject;
			static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
			static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Video;
			static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
		}

		export namespace Video {
			export type AsObject = {
				uri: string;
				accessibilityText: string;
			};
		}

		export class Audio extends jspb.Message {
			getUri(): string;
			setUri(value: string): Audio;

			getAccessibilityText(): string;
			setAccessibilityText(value: string): Audio;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): Audio.AsObject;
			static toObject(includeInstance: boolean, msg: Audio): Audio.AsObject;
			static serializeBinaryToWriter(message: Audio, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): Audio;
			static deserializeBinaryFromReader(message: Audio, reader: jspb.BinaryReader): Audio;
		}

		export namespace Audio {
			export type AsObject = {
				uri: string;
				accessibilityText: string;
			};
		}

		export class SelectItemInfo extends jspb.Message {
			getKey(): string;
			setKey(value: string): SelectItemInfo;

			getSynonymsList(): Array<string>;
			setSynonymsList(value: Array<string>): SelectItemInfo;
			clearSynonymsList(): SelectItemInfo;
			addSynonyms(value: string, index?: number): SelectItemInfo;

			serializeBinary(): Uint8Array;
			toObject(includeInstance?: boolean): SelectItemInfo.AsObject;
			static toObject(includeInstance: boolean, msg: SelectItemInfo): SelectItemInfo.AsObject;
			static serializeBinaryToWriter(message: SelectItemInfo, writer: jspb.BinaryWriter): void;
			static deserializeBinary(bytes: Uint8Array): SelectItemInfo;
			static deserializeBinaryFromReader(message: SelectItemInfo, reader: jspb.BinaryReader): SelectItemInfo;
		}

		export namespace SelectItemInfo {
			export type AsObject = {
				key: string;
				synonymsList: Array<string>;
			};
		}

		export enum Platform {
			PLATFORM_UNSPECIFIED = 0,
			FACEBOOK = 1,
			SLACK = 2,
			TELEGRAM = 3,
			KIK = 4,
			SKYPE = 5,
			LINE = 6,
			VIBER = 7,
			ACTIONS_ON_GOOGLE = 8,
			PLACEHOLDER_1 = 9,
			PLACEHOLDER_2 = 10,
			PLACEHOLDER_3 = 11,
			PLACEHOLDER_4 = 12,
			PLACEHOLDER_5 = 13,
			PLACEHOLDER_6 = 14,
			PLACEHOLDER_7 = 15,
			PLACEHOLDER_8 = 16,
			PLACEHOLDER_9 = 17,
			PLACEHOLDER_10 = 18,
			PLACEHOLDER_11 = 19,
			PLACEHOLDER_12 = 20,
			PLACEHOLDER_13 = 21,
			PLACEHOLDER_14 = 22,
			PLACEHOLDER_15 = 23,
			PLACEHOLDER_16 = 24,
			PLACEHOLDER_17 = 25,
			PLACEHOLDER_18 = 26,
			PLACEHOLDER_19 = 27,
			PLACEHOLDER_20 = 28
		}

		export enum MessageCase {
			MESSAGE_NOT_SET = 0,
			TEXT = 1,
			IMAGE = 2,
			QUICK_REPLIES = 3,
			CARD = 4,
			PAYLOAD = 5,
			SIMPLE_RESPONSES = 7,
			BASIC_CARD = 8,
			SUGGESTIONS = 9,
			LINK_OUT_SUGGESTION = 10,
			LIST_SELECT = 11,
			CAROUSEL_SELECT = 12,
			HTML_TEXT = 13,
			VIDEO = 14,
			AUDIO = 15
		}
	}

	export class FollowupIntentInfo extends jspb.Message {
		getFollowupIntentName(): string;
		setFollowupIntentName(value: string): FollowupIntentInfo;

		getParentFollowupIntentName(): string;
		setParentFollowupIntentName(value: string): FollowupIntentInfo;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): FollowupIntentInfo.AsObject;
		static toObject(includeInstance: boolean, msg: FollowupIntentInfo): FollowupIntentInfo.AsObject;
		static serializeBinaryToWriter(message: FollowupIntentInfo, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): FollowupIntentInfo;
		static deserializeBinaryFromReader(message: FollowupIntentInfo, reader: jspb.BinaryReader): FollowupIntentInfo;
	}

	export namespace FollowupIntentInfo {
		export type AsObject = {
			followupIntentName: string;
			parentFollowupIntentName: string;
		};
	}

	export enum IntentStatus {
		ACTIVE = 0,
		INACTIVE = 1
	}

	export enum WebhookState {
		WEBHOOK_STATE_UNSPECIFIED = 0,
		WEBHOOK_STATE_ENABLED = 1,
		WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING = 2
	}
}

export class ListIntentsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListIntentsRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): ListIntentsRequest;

	getIntentView(): IntentView;
	setIntentView(value: IntentView): ListIntentsRequest;

	getPageToken(): string;
	setPageToken(value: string): ListIntentsRequest;

	getFilterByCategory(): IntentCategory;
	setFilterByCategory(value: IntentCategory): ListIntentsRequest;

	getSortByField(): IntentSorting | undefined;
	setSortByField(value?: IntentSorting): ListIntentsRequest;
	hasSortByField(): boolean;
	clearSortByField(): ListIntentsRequest;

	getFilterByTagsList(): Array<string>;
	setFilterByTagsList(value: Array<string>): ListIntentsRequest;
	clearFilterByTagsList(): ListIntentsRequest;
	addFilterByTags(value: string, index?: number): ListIntentsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListIntentsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListIntentsRequest): ListIntentsRequest.AsObject;
	static serializeBinaryToWriter(message: ListIntentsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListIntentsRequest;
	static deserializeBinaryFromReader(message: ListIntentsRequest, reader: jspb.BinaryReader): ListIntentsRequest;
}

export namespace ListIntentsRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		intentView: IntentView;
		pageToken: string;
		filterByCategory: IntentCategory;
		sortByField?: IntentSorting.AsObject;
		filterByTagsList: Array<string>;
	};
}

export class ListIntentsResponse extends jspb.Message {
	getIntentsList(): Array<Intent>;
	setIntentsList(value: Array<Intent>): ListIntentsResponse;
	clearIntentsList(): ListIntentsResponse;
	addIntents(value?: Intent, index?: number): Intent;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListIntentsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListIntentsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListIntentsResponse): ListIntentsResponse.AsObject;
	static serializeBinaryToWriter(message: ListIntentsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListIntentsResponse;
	static deserializeBinaryFromReader(message: ListIntentsResponse, reader: jspb.BinaryReader): ListIntentsResponse;
}

export namespace ListIntentsResponse {
	export type AsObject = {
		intentsList: Array<Intent.AsObject>;
		nextPageToken: string;
	};
}

export class GetIntentRequest extends jspb.Message {
	getName(): string;
	setName(value: string): GetIntentRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): GetIntentRequest;

	getIntentView(): IntentView;
	setIntentView(value: IntentView): GetIntentRequest;

	getPageToken(): string;
	setPageToken(value: string): GetIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetIntentRequest): GetIntentRequest.AsObject;
	static serializeBinaryToWriter(message: GetIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetIntentRequest;
	static deserializeBinaryFromReader(message: GetIntentRequest, reader: jspb.BinaryReader): GetIntentRequest;
}

export namespace GetIntentRequest {
	export type AsObject = {
		name: string;
		languageCode: string;
		intentView: IntentView;
		pageToken: string;
	};
}

export class CreateIntentRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): CreateIntentRequest;

	getIntent(): Intent | undefined;
	setIntent(value?: Intent): CreateIntentRequest;
	hasIntent(): boolean;
	clearIntent(): CreateIntentRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): CreateIntentRequest;

	getIntentView(): IntentView;
	setIntentView(value: IntentView): CreateIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): CreateIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: CreateIntentRequest): CreateIntentRequest.AsObject;
	static serializeBinaryToWriter(message: CreateIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): CreateIntentRequest;
	static deserializeBinaryFromReader(message: CreateIntentRequest, reader: jspb.BinaryReader): CreateIntentRequest;
}

export namespace CreateIntentRequest {
	export type AsObject = {
		parent: string;
		intent?: Intent.AsObject;
		languageCode: string;
		intentView: IntentView;
	};
}

export class UpdateIntentRequest extends jspb.Message {
	getIntent(): Intent | undefined;
	setIntent(value?: Intent): UpdateIntentRequest;
	hasIntent(): boolean;
	clearIntent(): UpdateIntentRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): UpdateIntentRequest;

	getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateIntentRequest;
	hasUpdateMask(): boolean;
	clearUpdateMask(): UpdateIntentRequest;

	getIntentView(): IntentView;
	setIntentView(value: IntentView): UpdateIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): UpdateIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: UpdateIntentRequest): UpdateIntentRequest.AsObject;
	static serializeBinaryToWriter(message: UpdateIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): UpdateIntentRequest;
	static deserializeBinaryFromReader(message: UpdateIntentRequest, reader: jspb.BinaryReader): UpdateIntentRequest;
}

export namespace UpdateIntentRequest {
	export type AsObject = {
		intent?: Intent.AsObject;
		languageCode: string;
		updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
		intentView: IntentView;
	};
}

export class DeleteIntentRequest extends jspb.Message {
	getName(): string;
	setName(value: string): DeleteIntentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): DeleteIntentRequest.AsObject;
	static toObject(includeInstance: boolean, msg: DeleteIntentRequest): DeleteIntentRequest.AsObject;
	static serializeBinaryToWriter(message: DeleteIntentRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): DeleteIntentRequest;
	static deserializeBinaryFromReader(message: DeleteIntentRequest, reader: jspb.BinaryReader): DeleteIntentRequest;
}

export namespace DeleteIntentRequest {
	export type AsObject = {
		name: string;
	};
}

export class BatchUpdateIntentsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): BatchUpdateIntentsRequest;

	getIntentBatchUri(): string;
	setIntentBatchUri(value: string): BatchUpdateIntentsRequest;

	getIntentBatchInline(): IntentBatch | undefined;
	setIntentBatchInline(value?: IntentBatch): BatchUpdateIntentsRequest;
	hasIntentBatchInline(): boolean;
	clearIntentBatchInline(): BatchUpdateIntentsRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): BatchUpdateIntentsRequest;

	getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
	setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): BatchUpdateIntentsRequest;
	hasUpdateMask(): boolean;
	clearUpdateMask(): BatchUpdateIntentsRequest;

	getIntentView(): IntentView;
	setIntentView(value: IntentView): BatchUpdateIntentsRequest;

	getIntentBatchCase(): BatchUpdateIntentsRequest.IntentBatchCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchUpdateIntentsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchUpdateIntentsRequest): BatchUpdateIntentsRequest.AsObject;
	static serializeBinaryToWriter(message: BatchUpdateIntentsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsRequest;
	static deserializeBinaryFromReader(
		message: BatchUpdateIntentsRequest,
		reader: jspb.BinaryReader
	): BatchUpdateIntentsRequest;
}

export namespace BatchUpdateIntentsRequest {
	export type AsObject = {
		parent: string;
		intentBatchUri: string;
		intentBatchInline?: IntentBatch.AsObject;
		languageCode: string;
		updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject;
		intentView: IntentView;
	};

	export enum IntentBatchCase {
		INTENT_BATCH_NOT_SET = 0,
		INTENT_BATCH_URI = 2,
		INTENT_BATCH_INLINE = 3
	}
}

export class BatchUpdateIntentsResponse extends jspb.Message {
	getIntentsList(): Array<Intent>;
	setIntentsList(value: Array<Intent>): BatchUpdateIntentsResponse;
	clearIntentsList(): BatchUpdateIntentsResponse;
	addIntents(value?: Intent, index?: number): Intent;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchUpdateIntentsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: BatchUpdateIntentsResponse): BatchUpdateIntentsResponse.AsObject;
	static serializeBinaryToWriter(message: BatchUpdateIntentsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchUpdateIntentsResponse;
	static deserializeBinaryFromReader(
		message: BatchUpdateIntentsResponse,
		reader: jspb.BinaryReader
	): BatchUpdateIntentsResponse;
}

export namespace BatchUpdateIntentsResponse {
	export type AsObject = {
		intentsList: Array<Intent.AsObject>;
	};
}

export class BatchDeleteIntentsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): BatchDeleteIntentsRequest;

	getIntentsList(): Array<Intent>;
	setIntentsList(value: Array<Intent>): BatchDeleteIntentsRequest;
	clearIntentsList(): BatchDeleteIntentsRequest;
	addIntents(value?: Intent, index?: number): Intent;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteIntentsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchDeleteIntentsRequest): BatchDeleteIntentsRequest.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteIntentsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteIntentsRequest;
	static deserializeBinaryFromReader(
		message: BatchDeleteIntentsRequest,
		reader: jspb.BinaryReader
	): BatchDeleteIntentsRequest;
}

export namespace BatchDeleteIntentsRequest {
	export type AsObject = {
		parent: string;
		intentsList: Array<Intent.AsObject>;
	};
}

export class IntentBatch extends jspb.Message {
	getIntentsList(): Array<Intent>;
	setIntentsList(value: Array<Intent>): IntentBatch;
	clearIntentsList(): IntentBatch;
	addIntents(value?: Intent, index?: number): Intent;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): IntentBatch.AsObject;
	static toObject(includeInstance: boolean, msg: IntentBatch): IntentBatch.AsObject;
	static serializeBinaryToWriter(message: IntentBatch, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): IntentBatch;
	static deserializeBinaryFromReader(message: IntentBatch, reader: jspb.BinaryReader): IntentBatch;
}

export namespace IntentBatch {
	export type AsObject = {
		intentsList: Array<Intent.AsObject>;
	};
}

export class IntentSorting extends jspb.Message {
	getSortingField(): IntentSorting.IntentSortingField;
	setSortingField(value: IntentSorting.IntentSortingField): IntentSorting;

	getSortingMode(): ondewo_nlu_common_pb.SortingMode;
	setSortingMode(value: ondewo_nlu_common_pb.SortingMode): IntentSorting;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): IntentSorting.AsObject;
	static toObject(includeInstance: boolean, msg: IntentSorting): IntentSorting.AsObject;
	static serializeBinaryToWriter(message: IntentSorting, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): IntentSorting;
	static deserializeBinaryFromReader(message: IntentSorting, reader: jspb.BinaryReader): IntentSorting;
}

export namespace IntentSorting {
	export type AsObject = {
		sortingField: IntentSorting.IntentSortingField;
		sortingMode: ondewo_nlu_common_pb.SortingMode;
	};

	export enum IntentSortingField {
		NO_INTENT_SORTING = 0,
		SORT_INTENT_BY_NAME = 1,
		SORT_INTENT_BY_CREATION_DATE = 2,
		SORT_INTENT_BY_LAST_UPDATED = 3,
		SORT_INTENT_BY_USERSAYS_COUNT = 4,
		SORT_INTENT_BY_START_DATE = 5,
		SORT_INTENT_BY_END_DATE = 6
	}
}

export class IntentTagRequest extends jspb.Message {
	getIntentName(): string;
	setIntentName(value: string): IntentTagRequest;

	getTagsList(): Array<string>;
	setTagsList(value: Array<string>): IntentTagRequest;
	clearTagsList(): IntentTagRequest;
	addTags(value: string, index?: number): IntentTagRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): IntentTagRequest.AsObject;
	static toObject(includeInstance: boolean, msg: IntentTagRequest): IntentTagRequest.AsObject;
	static serializeBinaryToWriter(message: IntentTagRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): IntentTagRequest;
	static deserializeBinaryFromReader(message: IntentTagRequest, reader: jspb.BinaryReader): IntentTagRequest;
}

export namespace IntentTagRequest {
	export type AsObject = {
		intentName: string;
		tagsList: Array<string>;
	};
}

export class GetIntentTagsRequest extends jspb.Message {
	getIntentName(): string;
	setIntentName(value: string): GetIntentTagsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetIntentTagsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetIntentTagsRequest): GetIntentTagsRequest.AsObject;
	static serializeBinaryToWriter(message: GetIntentTagsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetIntentTagsRequest;
	static deserializeBinaryFromReader(message: GetIntentTagsRequest, reader: jspb.BinaryReader): GetIntentTagsRequest;
}

export namespace GetIntentTagsRequest {
	export type AsObject = {
		intentName: string;
	};
}

export class GetIntentTagsResponse extends jspb.Message {
	getIntentTagsList(): Array<string>;
	setIntentTagsList(value: Array<string>): GetIntentTagsResponse;
	clearIntentTagsList(): GetIntentTagsResponse;
	addIntentTags(value: string, index?: number): GetIntentTagsResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetIntentTagsResponse.AsObject;
	static toObject(includeInstance: boolean, msg: GetIntentTagsResponse): GetIntentTagsResponse.AsObject;
	static serializeBinaryToWriter(message: GetIntentTagsResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetIntentTagsResponse;
	static deserializeBinaryFromReader(message: GetIntentTagsResponse, reader: jspb.BinaryReader): GetIntentTagsResponse;
}

export namespace GetIntentTagsResponse {
	export type AsObject = {
		intentTagsList: Array<string>;
	};
}

export class GetAllIntentTagsRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): GetAllIntentTagsRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): GetAllIntentTagsRequest.AsObject;
	static toObject(includeInstance: boolean, msg: GetAllIntentTagsRequest): GetAllIntentTagsRequest.AsObject;
	static serializeBinaryToWriter(message: GetAllIntentTagsRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): GetAllIntentTagsRequest;
	static deserializeBinaryFromReader(
		message: GetAllIntentTagsRequest,
		reader: jspb.BinaryReader
	): GetAllIntentTagsRequest;
}

export namespace GetAllIntentTagsRequest {
	export type AsObject = {
		parent: string;
	};
}

export class BatchUpdateTrainingPhrasesRequest extends jspb.Message {
	getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
	setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): BatchUpdateTrainingPhrasesRequest;
	clearTrainingPhrasesList(): BatchUpdateTrainingPhrasesRequest;
	addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchUpdateTrainingPhrasesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchUpdateTrainingPhrasesRequest
	): BatchUpdateTrainingPhrasesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchUpdateTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchUpdateTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: BatchUpdateTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): BatchUpdateTrainingPhrasesRequest;
}

export namespace BatchUpdateTrainingPhrasesRequest {
	export type AsObject = {
		trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>;
	};
}

export class TrainingPhraseStatus extends jspb.Message {
	getTrainingPhrase(): Intent.TrainingPhrase | undefined;
	setTrainingPhrase(value?: Intent.TrainingPhrase): TrainingPhraseStatus;
	hasTrainingPhrase(): boolean;
	clearTrainingPhrase(): TrainingPhraseStatus;

	getErrorMessage(): string;
	setErrorMessage(value: string): TrainingPhraseStatus;

	getPhraseOrStatusCase(): TrainingPhraseStatus.PhraseOrStatusCase;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): TrainingPhraseStatus.AsObject;
	static toObject(includeInstance: boolean, msg: TrainingPhraseStatus): TrainingPhraseStatus.AsObject;
	static serializeBinaryToWriter(message: TrainingPhraseStatus, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): TrainingPhraseStatus;
	static deserializeBinaryFromReader(message: TrainingPhraseStatus, reader: jspb.BinaryReader): TrainingPhraseStatus;
}

export namespace TrainingPhraseStatus {
	export type AsObject = {
		trainingPhrase?: Intent.TrainingPhrase.AsObject;
		errorMessage: string;
	};

	export enum PhraseOrStatusCase {
		PHRASE_OR_STATUS_NOT_SET = 0,
		TRAINING_PHRASE = 1,
		ERROR_MESSAGE = 2
	}
}

export class BatchTrainingPhrasesStatusResponse extends jspb.Message {
	getTrainingPhraseStatusesList(): Array<TrainingPhraseStatus>;
	setTrainingPhraseStatusesList(value: Array<TrainingPhraseStatus>): BatchTrainingPhrasesStatusResponse;
	clearTrainingPhraseStatusesList(): BatchTrainingPhrasesStatusResponse;
	addTrainingPhraseStatuses(value?: TrainingPhraseStatus, index?: number): TrainingPhraseStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchTrainingPhrasesStatusResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchTrainingPhrasesStatusResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchTrainingPhrasesStatusResponse
	): BatchTrainingPhrasesStatusResponse.AsObject;
	static serializeBinaryToWriter(message: BatchTrainingPhrasesStatusResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchTrainingPhrasesStatusResponse;
	static deserializeBinaryFromReader(
		message: BatchTrainingPhrasesStatusResponse,
		reader: jspb.BinaryReader
	): BatchTrainingPhrasesStatusResponse;
}

export namespace BatchTrainingPhrasesStatusResponse {
	export type AsObject = {
		trainingPhraseStatusesList: Array<TrainingPhraseStatus.AsObject>;
		hasErrors: boolean;
	};
}

export class BatchCreateTrainingPhrasesRequest extends jspb.Message {
	getTrainingPhraseRequestsList(): Array<BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest>;
	setTrainingPhraseRequestsList(
		value: Array<BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest>
	): BatchCreateTrainingPhrasesRequest;
	clearTrainingPhraseRequestsList(): BatchCreateTrainingPhrasesRequest;
	addTrainingPhraseRequests(
		value?: BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest,
		index?: number
	): BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchCreateTrainingPhrasesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchCreateTrainingPhrasesRequest
	): BatchCreateTrainingPhrasesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchCreateTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchCreateTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: BatchCreateTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): BatchCreateTrainingPhrasesRequest;
}

export namespace BatchCreateTrainingPhrasesRequest {
	export type AsObject = {
		trainingPhraseRequestsList: Array<BatchCreateTrainingPhrasesRequest.CreateTrainingPhraseRequest.AsObject>;
	};

	export class CreateTrainingPhraseRequest extends jspb.Message {
		getIntentName(): string;
		setIntentName(value: string): CreateTrainingPhraseRequest;

		getTrainingPhrase(): Intent.TrainingPhrase | undefined;
		setTrainingPhrase(value?: Intent.TrainingPhrase): CreateTrainingPhraseRequest;
		hasTrainingPhrase(): boolean;
		clearTrainingPhrase(): CreateTrainingPhraseRequest;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): CreateTrainingPhraseRequest.AsObject;
		static toObject(includeInstance: boolean, msg: CreateTrainingPhraseRequest): CreateTrainingPhraseRequest.AsObject;
		static serializeBinaryToWriter(message: CreateTrainingPhraseRequest, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): CreateTrainingPhraseRequest;
		static deserializeBinaryFromReader(
			message: CreateTrainingPhraseRequest,
			reader: jspb.BinaryReader
		): CreateTrainingPhraseRequest;
	}

	export namespace CreateTrainingPhraseRequest {
		export type AsObject = {
			intentName: string;
			trainingPhrase?: Intent.TrainingPhrase.AsObject;
		};
	}
}

export class BatchGetTrainingPhrasesRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchGetTrainingPhrasesRequest;
	clearNamesList(): BatchGetTrainingPhrasesRequest;
	addNames(value: string, index?: number): BatchGetTrainingPhrasesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchGetTrainingPhrasesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchGetTrainingPhrasesRequest
	): BatchGetTrainingPhrasesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchGetTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchGetTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: BatchGetTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): BatchGetTrainingPhrasesRequest;
}

export namespace BatchGetTrainingPhrasesRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteTrainingPhrasesRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchDeleteTrainingPhrasesRequest;
	clearNamesList(): BatchDeleteTrainingPhrasesRequest;
	addNames(value: string, index?: number): BatchDeleteTrainingPhrasesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteTrainingPhrasesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchDeleteTrainingPhrasesRequest
	): BatchDeleteTrainingPhrasesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: BatchDeleteTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): BatchDeleteTrainingPhrasesRequest;
}

export namespace BatchDeleteTrainingPhrasesRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteTrainingPhrasesResponse extends jspb.Message {
	getDeleteStatusesList(): Array<BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus>;
	setDeleteStatusesList(
		value: Array<BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus>
	): BatchDeleteTrainingPhrasesResponse;
	clearDeleteStatusesList(): BatchDeleteTrainingPhrasesResponse;
	addDeleteStatuses(
		value?: BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus,
		index?: number
	): BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchDeleteTrainingPhrasesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteTrainingPhrasesResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchDeleteTrainingPhrasesResponse
	): BatchDeleteTrainingPhrasesResponse.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteTrainingPhrasesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteTrainingPhrasesResponse;
	static deserializeBinaryFromReader(
		message: BatchDeleteTrainingPhrasesResponse,
		reader: jspb.BinaryReader
	): BatchDeleteTrainingPhrasesResponse;
}

export namespace BatchDeleteTrainingPhrasesResponse {
	export type AsObject = {
		deleteStatusesList: Array<BatchDeleteTrainingPhrasesResponse.DeleteTrainingPhraseStatus.AsObject>;
		hasErrors: boolean;
	};

	export class DeleteTrainingPhraseStatus extends jspb.Message {
		getSuccessfullyDeleted(): google_protobuf_empty_pb.Empty | undefined;
		setSuccessfullyDeleted(value?: google_protobuf_empty_pb.Empty): DeleteTrainingPhraseStatus;
		hasSuccessfullyDeleted(): boolean;
		clearSuccessfullyDeleted(): DeleteTrainingPhraseStatus;

		getErrorMessage(): string;
		setErrorMessage(value: string): DeleteTrainingPhraseStatus;

		getDeleteStatusCase(): DeleteTrainingPhraseStatus.DeleteStatusCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): DeleteTrainingPhraseStatus.AsObject;
		static toObject(includeInstance: boolean, msg: DeleteTrainingPhraseStatus): DeleteTrainingPhraseStatus.AsObject;
		static serializeBinaryToWriter(message: DeleteTrainingPhraseStatus, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): DeleteTrainingPhraseStatus;
		static deserializeBinaryFromReader(
			message: DeleteTrainingPhraseStatus,
			reader: jspb.BinaryReader
		): DeleteTrainingPhraseStatus;
	}

	export namespace DeleteTrainingPhraseStatus {
		export type AsObject = {
			successfullyDeleted?: google_protobuf_empty_pb.Empty.AsObject;
			errorMessage: string;
		};

		export enum DeleteStatusCase {
			DELETE_STATUS_NOT_SET = 0,
			SUCCESSFULLY_DELETED = 1,
			ERROR_MESSAGE = 2
		}
	}
}

export class ListTrainingPhrasesRequest extends jspb.Message {
	getIntentName(): string;
	setIntentName(value: string): ListTrainingPhrasesRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): ListTrainingPhrasesRequest;

	getPageToken(): string;
	setPageToken(value: string): ListTrainingPhrasesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTrainingPhrasesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListTrainingPhrasesRequest): ListTrainingPhrasesRequest.AsObject;
	static serializeBinaryToWriter(message: ListTrainingPhrasesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListTrainingPhrasesRequest;
	static deserializeBinaryFromReader(
		message: ListTrainingPhrasesRequest,
		reader: jspb.BinaryReader
	): ListTrainingPhrasesRequest;
}

export namespace ListTrainingPhrasesRequest {
	export type AsObject = {
		intentName: string;
		languageCode: string;
		pageToken: string;
	};
}

export class ListTrainingPhrasesResponse extends jspb.Message {
	getTrainingPhrasesList(): Array<Intent.TrainingPhrase>;
	setTrainingPhrasesList(value: Array<Intent.TrainingPhrase>): ListTrainingPhrasesResponse;
	clearTrainingPhrasesList(): ListTrainingPhrasesResponse;
	addTrainingPhrases(value?: Intent.TrainingPhrase, index?: number): Intent.TrainingPhrase;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListTrainingPhrasesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTrainingPhrasesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListTrainingPhrasesResponse): ListTrainingPhrasesResponse.AsObject;
	static serializeBinaryToWriter(message: ListTrainingPhrasesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListTrainingPhrasesResponse;
	static deserializeBinaryFromReader(
		message: ListTrainingPhrasesResponse,
		reader: jspb.BinaryReader
	): ListTrainingPhrasesResponse;
}

export namespace ListTrainingPhrasesResponse {
	export type AsObject = {
		trainingPhrasesList: Array<Intent.TrainingPhrase.AsObject>;
		nextPageToken: string;
	};
}

export class BatchResponseMessagesStatusResponse extends jspb.Message {
	getResponseMessageStatusesList(): Array<BatchResponseMessagesStatusResponse.ResponseMessageStatus>;
	setResponseMessageStatusesList(
		value: Array<BatchResponseMessagesStatusResponse.ResponseMessageStatus>
	): BatchResponseMessagesStatusResponse;
	clearResponseMessageStatusesList(): BatchResponseMessagesStatusResponse;
	addResponseMessageStatuses(
		value?: BatchResponseMessagesStatusResponse.ResponseMessageStatus,
		index?: number
	): BatchResponseMessagesStatusResponse.ResponseMessageStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchResponseMessagesStatusResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchResponseMessagesStatusResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchResponseMessagesStatusResponse
	): BatchResponseMessagesStatusResponse.AsObject;
	static serializeBinaryToWriter(message: BatchResponseMessagesStatusResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchResponseMessagesStatusResponse;
	static deserializeBinaryFromReader(
		message: BatchResponseMessagesStatusResponse,
		reader: jspb.BinaryReader
	): BatchResponseMessagesStatusResponse;
}

export namespace BatchResponseMessagesStatusResponse {
	export type AsObject = {
		responseMessageStatusesList: Array<BatchResponseMessagesStatusResponse.ResponseMessageStatus.AsObject>;
		hasErrors: boolean;
	};

	export class ResponseMessageStatus extends jspb.Message {
		getResponseMessage(): Intent.Message | undefined;
		setResponseMessage(value?: Intent.Message): ResponseMessageStatus;
		hasResponseMessage(): boolean;
		clearResponseMessage(): ResponseMessageStatus;

		getErrorMessage(): string;
		setErrorMessage(value: string): ResponseMessageStatus;

		getPhraseOrStatusCase(): ResponseMessageStatus.PhraseOrStatusCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): ResponseMessageStatus.AsObject;
		static toObject(includeInstance: boolean, msg: ResponseMessageStatus): ResponseMessageStatus.AsObject;
		static serializeBinaryToWriter(message: ResponseMessageStatus, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): ResponseMessageStatus;
		static deserializeBinaryFromReader(
			message: ResponseMessageStatus,
			reader: jspb.BinaryReader
		): ResponseMessageStatus;
	}

	export namespace ResponseMessageStatus {
		export type AsObject = {
			responseMessage?: Intent.Message.AsObject;
			errorMessage: string;
		};

		export enum PhraseOrStatusCase {
			PHRASE_OR_STATUS_NOT_SET = 0,
			RESPONSE_MESSAGE = 1,
			ERROR_MESSAGE = 2
		}
	}
}

export class BatchCreateResponseMessagesRequest extends jspb.Message {
	getResponseMessageRequestsList(): Array<BatchCreateResponseMessagesRequest.CreateResponseMessageRequest>;
	setResponseMessageRequestsList(
		value: Array<BatchCreateResponseMessagesRequest.CreateResponseMessageRequest>
	): BatchCreateResponseMessagesRequest;
	clearResponseMessageRequestsList(): BatchCreateResponseMessagesRequest;
	addResponseMessageRequests(
		value?: BatchCreateResponseMessagesRequest.CreateResponseMessageRequest,
		index?: number
	): BatchCreateResponseMessagesRequest.CreateResponseMessageRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchCreateResponseMessagesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchCreateResponseMessagesRequest
	): BatchCreateResponseMessagesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchCreateResponseMessagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchCreateResponseMessagesRequest;
	static deserializeBinaryFromReader(
		message: BatchCreateResponseMessagesRequest,
		reader: jspb.BinaryReader
	): BatchCreateResponseMessagesRequest;
}

export namespace BatchCreateResponseMessagesRequest {
	export type AsObject = {
		responseMessageRequestsList: Array<BatchCreateResponseMessagesRequest.CreateResponseMessageRequest.AsObject>;
	};

	export class CreateResponseMessageRequest extends jspb.Message {
		getIntentName(): string;
		setIntentName(value: string): CreateResponseMessageRequest;

		getResponseMessage(): Intent.Message | undefined;
		setResponseMessage(value?: Intent.Message): CreateResponseMessageRequest;
		hasResponseMessage(): boolean;
		clearResponseMessage(): CreateResponseMessageRequest;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): CreateResponseMessageRequest.AsObject;
		static toObject(includeInstance: boolean, msg: CreateResponseMessageRequest): CreateResponseMessageRequest.AsObject;
		static serializeBinaryToWriter(message: CreateResponseMessageRequest, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): CreateResponseMessageRequest;
		static deserializeBinaryFromReader(
			message: CreateResponseMessageRequest,
			reader: jspb.BinaryReader
		): CreateResponseMessageRequest;
	}

	export namespace CreateResponseMessageRequest {
		export type AsObject = {
			intentName: string;
			responseMessage?: Intent.Message.AsObject;
		};
	}
}

export class BatchUpdateResponseMessagesRequest extends jspb.Message {
	getResponseMessagesList(): Array<Intent.Message>;
	setResponseMessagesList(value: Array<Intent.Message>): BatchUpdateResponseMessagesRequest;
	clearResponseMessagesList(): BatchUpdateResponseMessagesRequest;
	addResponseMessages(value?: Intent.Message, index?: number): Intent.Message;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchUpdateResponseMessagesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchUpdateResponseMessagesRequest
	): BatchUpdateResponseMessagesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchUpdateResponseMessagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchUpdateResponseMessagesRequest;
	static deserializeBinaryFromReader(
		message: BatchUpdateResponseMessagesRequest,
		reader: jspb.BinaryReader
	): BatchUpdateResponseMessagesRequest;
}

export namespace BatchUpdateResponseMessagesRequest {
	export type AsObject = {
		responseMessagesList: Array<Intent.Message.AsObject>;
	};
}

export class BatchGetResponseMessagesRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchGetResponseMessagesRequest;
	clearNamesList(): BatchGetResponseMessagesRequest;
	addNames(value: string, index?: number): BatchGetResponseMessagesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchGetResponseMessagesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchGetResponseMessagesRequest
	): BatchGetResponseMessagesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchGetResponseMessagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchGetResponseMessagesRequest;
	static deserializeBinaryFromReader(
		message: BatchGetResponseMessagesRequest,
		reader: jspb.BinaryReader
	): BatchGetResponseMessagesRequest;
}

export namespace BatchGetResponseMessagesRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteResponseMessagesRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchDeleteResponseMessagesRequest;
	clearNamesList(): BatchDeleteResponseMessagesRequest;
	addNames(value: string, index?: number): BatchDeleteResponseMessagesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteResponseMessagesRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchDeleteResponseMessagesRequest
	): BatchDeleteResponseMessagesRequest.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteResponseMessagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteResponseMessagesRequest;
	static deserializeBinaryFromReader(
		message: BatchDeleteResponseMessagesRequest,
		reader: jspb.BinaryReader
	): BatchDeleteResponseMessagesRequest;
}

export namespace BatchDeleteResponseMessagesRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteResponseMessagesResponse extends jspb.Message {
	getDeleteStatusesList(): Array<BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus>;
	setDeleteStatusesList(
		value: Array<BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus>
	): BatchDeleteResponseMessagesResponse;
	clearDeleteStatusesList(): BatchDeleteResponseMessagesResponse;
	addDeleteStatuses(
		value?: BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus,
		index?: number
	): BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchDeleteResponseMessagesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteResponseMessagesResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: BatchDeleteResponseMessagesResponse
	): BatchDeleteResponseMessagesResponse.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteResponseMessagesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteResponseMessagesResponse;
	static deserializeBinaryFromReader(
		message: BatchDeleteResponseMessagesResponse,
		reader: jspb.BinaryReader
	): BatchDeleteResponseMessagesResponse;
}

export namespace BatchDeleteResponseMessagesResponse {
	export type AsObject = {
		deleteStatusesList: Array<BatchDeleteResponseMessagesResponse.DeleteResponseMessageStatus.AsObject>;
		hasErrors: boolean;
	};

	export class DeleteResponseMessageStatus extends jspb.Message {
		getSuccessfullyDeleted(): google_protobuf_empty_pb.Empty | undefined;
		setSuccessfullyDeleted(value?: google_protobuf_empty_pb.Empty): DeleteResponseMessageStatus;
		hasSuccessfullyDeleted(): boolean;
		clearSuccessfullyDeleted(): DeleteResponseMessageStatus;

		getErrorMessage(): string;
		setErrorMessage(value: string): DeleteResponseMessageStatus;

		getDeleteStatusCase(): DeleteResponseMessageStatus.DeleteStatusCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): DeleteResponseMessageStatus.AsObject;
		static toObject(includeInstance: boolean, msg: DeleteResponseMessageStatus): DeleteResponseMessageStatus.AsObject;
		static serializeBinaryToWriter(message: DeleteResponseMessageStatus, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): DeleteResponseMessageStatus;
		static deserializeBinaryFromReader(
			message: DeleteResponseMessageStatus,
			reader: jspb.BinaryReader
		): DeleteResponseMessageStatus;
	}

	export namespace DeleteResponseMessageStatus {
		export type AsObject = {
			successfullyDeleted?: google_protobuf_empty_pb.Empty.AsObject;
			errorMessage: string;
		};

		export enum DeleteStatusCase {
			DELETE_STATUS_NOT_SET = 0,
			SUCCESSFULLY_DELETED = 1,
			ERROR_MESSAGE = 2
		}
	}
}

export class ListResponseMessagesRequest extends jspb.Message {
	getIntentName(): string;
	setIntentName(value: string): ListResponseMessagesRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): ListResponseMessagesRequest;

	getPageToken(): string;
	setPageToken(value: string): ListResponseMessagesRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListResponseMessagesRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListResponseMessagesRequest): ListResponseMessagesRequest.AsObject;
	static serializeBinaryToWriter(message: ListResponseMessagesRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListResponseMessagesRequest;
	static deserializeBinaryFromReader(
		message: ListResponseMessagesRequest,
		reader: jspb.BinaryReader
	): ListResponseMessagesRequest;
}

export namespace ListResponseMessagesRequest {
	export type AsObject = {
		intentName: string;
		languageCode: string;
		pageToken: string;
	};
}

export class ListResponseMessagesResponse extends jspb.Message {
	getResponseMessagesList(): Array<Intent.Message>;
	setResponseMessagesList(value: Array<Intent.Message>): ListResponseMessagesResponse;
	clearResponseMessagesList(): ListResponseMessagesResponse;
	addResponseMessages(value?: Intent.Message, index?: number): Intent.Message;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListResponseMessagesResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListResponseMessagesResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListResponseMessagesResponse): ListResponseMessagesResponse.AsObject;
	static serializeBinaryToWriter(message: ListResponseMessagesResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListResponseMessagesResponse;
	static deserializeBinaryFromReader(
		message: ListResponseMessagesResponse,
		reader: jspb.BinaryReader
	): ListResponseMessagesResponse;
}

export namespace ListResponseMessagesResponse {
	export type AsObject = {
		responseMessagesList: Array<Intent.Message.AsObject>;
		nextPageToken: string;
	};
}

export class BatchParametersStatusResponse extends jspb.Message {
	getParameterStatusesList(): Array<BatchParametersStatusResponse.ParameterStatus>;
	setParameterStatusesList(value: Array<BatchParametersStatusResponse.ParameterStatus>): BatchParametersStatusResponse;
	clearParameterStatusesList(): BatchParametersStatusResponse;
	addParameterStatuses(
		value?: BatchParametersStatusResponse.ParameterStatus,
		index?: number
	): BatchParametersStatusResponse.ParameterStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchParametersStatusResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchParametersStatusResponse.AsObject;
	static toObject(includeInstance: boolean, msg: BatchParametersStatusResponse): BatchParametersStatusResponse.AsObject;
	static serializeBinaryToWriter(message: BatchParametersStatusResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchParametersStatusResponse;
	static deserializeBinaryFromReader(
		message: BatchParametersStatusResponse,
		reader: jspb.BinaryReader
	): BatchParametersStatusResponse;
}

export namespace BatchParametersStatusResponse {
	export type AsObject = {
		parameterStatusesList: Array<BatchParametersStatusResponse.ParameterStatus.AsObject>;
		hasErrors: boolean;
	};

	export class ParameterStatus extends jspb.Message {
		getParameter(): Intent.Parameter | undefined;
		setParameter(value?: Intent.Parameter): ParameterStatus;
		hasParameter(): boolean;
		clearParameter(): ParameterStatus;

		getErrorMessage(): string;
		setErrorMessage(value: string): ParameterStatus;

		getPhraseOrStatusCase(): ParameterStatus.PhraseOrStatusCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): ParameterStatus.AsObject;
		static toObject(includeInstance: boolean, msg: ParameterStatus): ParameterStatus.AsObject;
		static serializeBinaryToWriter(message: ParameterStatus, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): ParameterStatus;
		static deserializeBinaryFromReader(message: ParameterStatus, reader: jspb.BinaryReader): ParameterStatus;
	}

	export namespace ParameterStatus {
		export type AsObject = {
			parameter?: Intent.Parameter.AsObject;
			errorMessage: string;
		};

		export enum PhraseOrStatusCase {
			PHRASE_OR_STATUS_NOT_SET = 0,
			PARAMETER = 1,
			ERROR_MESSAGE = 2
		}
	}
}

export class BatchCreateParametersRequest extends jspb.Message {
	getParameterRequestsList(): Array<BatchCreateParametersRequest.CreateParameterRequest>;
	setParameterRequestsList(
		value: Array<BatchCreateParametersRequest.CreateParameterRequest>
	): BatchCreateParametersRequest;
	clearParameterRequestsList(): BatchCreateParametersRequest;
	addParameterRequests(
		value?: BatchCreateParametersRequest.CreateParameterRequest,
		index?: number
	): BatchCreateParametersRequest.CreateParameterRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchCreateParametersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchCreateParametersRequest): BatchCreateParametersRequest.AsObject;
	static serializeBinaryToWriter(message: BatchCreateParametersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchCreateParametersRequest;
	static deserializeBinaryFromReader(
		message: BatchCreateParametersRequest,
		reader: jspb.BinaryReader
	): BatchCreateParametersRequest;
}

export namespace BatchCreateParametersRequest {
	export type AsObject = {
		parameterRequestsList: Array<BatchCreateParametersRequest.CreateParameterRequest.AsObject>;
	};

	export class CreateParameterRequest extends jspb.Message {
		getIntentName(): string;
		setIntentName(value: string): CreateParameterRequest;

		getParameter(): Intent.Parameter | undefined;
		setParameter(value?: Intent.Parameter): CreateParameterRequest;
		hasParameter(): boolean;
		clearParameter(): CreateParameterRequest;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): CreateParameterRequest.AsObject;
		static toObject(includeInstance: boolean, msg: CreateParameterRequest): CreateParameterRequest.AsObject;
		static serializeBinaryToWriter(message: CreateParameterRequest, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): CreateParameterRequest;
		static deserializeBinaryFromReader(
			message: CreateParameterRequest,
			reader: jspb.BinaryReader
		): CreateParameterRequest;
	}

	export namespace CreateParameterRequest {
		export type AsObject = {
			intentName: string;
			parameter?: Intent.Parameter.AsObject;
		};
	}
}

export class BatchUpdateParametersRequest extends jspb.Message {
	getParametersList(): Array<Intent.Parameter>;
	setParametersList(value: Array<Intent.Parameter>): BatchUpdateParametersRequest;
	clearParametersList(): BatchUpdateParametersRequest;
	addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchUpdateParametersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchUpdateParametersRequest): BatchUpdateParametersRequest.AsObject;
	static serializeBinaryToWriter(message: BatchUpdateParametersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchUpdateParametersRequest;
	static deserializeBinaryFromReader(
		message: BatchUpdateParametersRequest,
		reader: jspb.BinaryReader
	): BatchUpdateParametersRequest;
}

export namespace BatchUpdateParametersRequest {
	export type AsObject = {
		parametersList: Array<Intent.Parameter.AsObject>;
	};
}

export class BatchGetParametersRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchGetParametersRequest;
	clearNamesList(): BatchGetParametersRequest;
	addNames(value: string, index?: number): BatchGetParametersRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchGetParametersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchGetParametersRequest): BatchGetParametersRequest.AsObject;
	static serializeBinaryToWriter(message: BatchGetParametersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchGetParametersRequest;
	static deserializeBinaryFromReader(
		message: BatchGetParametersRequest,
		reader: jspb.BinaryReader
	): BatchGetParametersRequest;
}

export namespace BatchGetParametersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteParametersRequest extends jspb.Message {
	getNamesList(): Array<string>;
	setNamesList(value: Array<string>): BatchDeleteParametersRequest;
	clearNamesList(): BatchDeleteParametersRequest;
	addNames(value: string, index?: number): BatchDeleteParametersRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteParametersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: BatchDeleteParametersRequest): BatchDeleteParametersRequest.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteParametersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteParametersRequest;
	static deserializeBinaryFromReader(
		message: BatchDeleteParametersRequest,
		reader: jspb.BinaryReader
	): BatchDeleteParametersRequest;
}

export namespace BatchDeleteParametersRequest {
	export type AsObject = {
		namesList: Array<string>;
	};
}

export class BatchDeleteParametersResponse extends jspb.Message {
	getDeleteStatusesList(): Array<BatchDeleteParametersResponse.DeleteParameterStatus>;
	setDeleteStatusesList(
		value: Array<BatchDeleteParametersResponse.DeleteParameterStatus>
	): BatchDeleteParametersResponse;
	clearDeleteStatusesList(): BatchDeleteParametersResponse;
	addDeleteStatuses(
		value?: BatchDeleteParametersResponse.DeleteParameterStatus,
		index?: number
	): BatchDeleteParametersResponse.DeleteParameterStatus;

	getHasErrors(): boolean;
	setHasErrors(value: boolean): BatchDeleteParametersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): BatchDeleteParametersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: BatchDeleteParametersResponse): BatchDeleteParametersResponse.AsObject;
	static serializeBinaryToWriter(message: BatchDeleteParametersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): BatchDeleteParametersResponse;
	static deserializeBinaryFromReader(
		message: BatchDeleteParametersResponse,
		reader: jspb.BinaryReader
	): BatchDeleteParametersResponse;
}

export namespace BatchDeleteParametersResponse {
	export type AsObject = {
		deleteStatusesList: Array<BatchDeleteParametersResponse.DeleteParameterStatus.AsObject>;
		hasErrors: boolean;
	};

	export class DeleteParameterStatus extends jspb.Message {
		getSuccessfullyDeleted(): google_protobuf_empty_pb.Empty | undefined;
		setSuccessfullyDeleted(value?: google_protobuf_empty_pb.Empty): DeleteParameterStatus;
		hasSuccessfullyDeleted(): boolean;
		clearSuccessfullyDeleted(): DeleteParameterStatus;

		getErrorMessage(): string;
		setErrorMessage(value: string): DeleteParameterStatus;

		getDeleteStatusCase(): DeleteParameterStatus.DeleteStatusCase;

		serializeBinary(): Uint8Array;
		toObject(includeInstance?: boolean): DeleteParameterStatus.AsObject;
		static toObject(includeInstance: boolean, msg: DeleteParameterStatus): DeleteParameterStatus.AsObject;
		static serializeBinaryToWriter(message: DeleteParameterStatus, writer: jspb.BinaryWriter): void;
		static deserializeBinary(bytes: Uint8Array): DeleteParameterStatus;
		static deserializeBinaryFromReader(
			message: DeleteParameterStatus,
			reader: jspb.BinaryReader
		): DeleteParameterStatus;
	}

	export namespace DeleteParameterStatus {
		export type AsObject = {
			successfullyDeleted?: google_protobuf_empty_pb.Empty.AsObject;
			errorMessage: string;
		};

		export enum DeleteStatusCase {
			DELETE_STATUS_NOT_SET = 0,
			SUCCESSFULLY_DELETED = 1,
			ERROR_MESSAGE = 2
		}
	}
}

export class ListParametersRequest extends jspb.Message {
	getIntentName(): string;
	setIntentName(value: string): ListParametersRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): ListParametersRequest;

	getPageToken(): string;
	setPageToken(value: string): ListParametersRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListParametersRequest.AsObject;
	static toObject(includeInstance: boolean, msg: ListParametersRequest): ListParametersRequest.AsObject;
	static serializeBinaryToWriter(message: ListParametersRequest, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListParametersRequest;
	static deserializeBinaryFromReader(message: ListParametersRequest, reader: jspb.BinaryReader): ListParametersRequest;
}

export namespace ListParametersRequest {
	export type AsObject = {
		intentName: string;
		languageCode: string;
		pageToken: string;
	};
}

export class ListParametersResponse extends jspb.Message {
	getParametersList(): Array<Intent.Parameter>;
	setParametersList(value: Array<Intent.Parameter>): ListParametersResponse;
	clearParametersList(): ListParametersResponse;
	addParameters(value?: Intent.Parameter, index?: number): Intent.Parameter;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListParametersResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListParametersResponse.AsObject;
	static toObject(includeInstance: boolean, msg: ListParametersResponse): ListParametersResponse.AsObject;
	static serializeBinaryToWriter(message: ListParametersResponse, writer: jspb.BinaryWriter): void;
	static deserializeBinary(bytes: Uint8Array): ListParametersResponse;
	static deserializeBinaryFromReader(
		message: ListParametersResponse,
		reader: jspb.BinaryReader
	): ListParametersResponse;
}

export namespace ListParametersResponse {
	export type AsObject = {
		parametersList: Array<Intent.Parameter.AsObject>;
		nextPageToken: string;
	};
}

export class ListTrainingPhrasesofIntentsWithEnrichmentRequest extends jspb.Message {
	getParent(): string;
	setParent(value: string): ListTrainingPhrasesofIntentsWithEnrichmentRequest;

	getLanguageCode(): string;
	setLanguageCode(value: string): ListTrainingPhrasesofIntentsWithEnrichmentRequest;

	getIntentIdsList(): Array<string>;
	setIntentIdsList(value: Array<string>): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
	clearIntentIdsList(): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
	addIntentIds(value: string, index?: number): ListTrainingPhrasesofIntentsWithEnrichmentRequest;

	getPageToken(): string;
	setPageToken(value: string): ListTrainingPhrasesofIntentsWithEnrichmentRequest;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListTrainingPhrasesofIntentsWithEnrichmentRequest
	): ListTrainingPhrasesofIntentsWithEnrichmentRequest.AsObject;
	static serializeBinaryToWriter(
		message: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		writer: jspb.BinaryWriter
	): void;
	static deserializeBinary(bytes: Uint8Array): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
	static deserializeBinaryFromReader(
		message: ListTrainingPhrasesofIntentsWithEnrichmentRequest,
		reader: jspb.BinaryReader
	): ListTrainingPhrasesofIntentsWithEnrichmentRequest;
}

export namespace ListTrainingPhrasesofIntentsWithEnrichmentRequest {
	export type AsObject = {
		parent: string;
		languageCode: string;
		intentIdsList: Array<string>;
		pageToken: string;
	};
}

export class ListTrainingPhrasesofIntentsWithEnrichmentResponse extends jspb.Message {
	getTrainingPhrasesList(): Array<string>;
	setTrainingPhrasesList(value: Array<string>): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
	clearTrainingPhrasesList(): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
	addTrainingPhrases(value: string, index?: number): ListTrainingPhrasesofIntentsWithEnrichmentResponse;

	getNextPageToken(): string;
	setNextPageToken(value: string): ListTrainingPhrasesofIntentsWithEnrichmentResponse;

	serializeBinary(): Uint8Array;
	toObject(includeInstance?: boolean): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject;
	static toObject(
		includeInstance: boolean,
		msg: ListTrainingPhrasesofIntentsWithEnrichmentResponse
	): ListTrainingPhrasesofIntentsWithEnrichmentResponse.AsObject;
	static serializeBinaryToWriter(
		message: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		writer: jspb.BinaryWriter
	): void;
	static deserializeBinary(bytes: Uint8Array): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
	static deserializeBinaryFromReader(
		message: ListTrainingPhrasesofIntentsWithEnrichmentResponse,
		reader: jspb.BinaryReader
	): ListTrainingPhrasesofIntentsWithEnrichmentResponse;
}

export namespace ListTrainingPhrasesofIntentsWithEnrichmentResponse {
	export type AsObject = {
		trainingPhrasesList: Array<string>;
		nextPageToken: string;
	};
}

export enum IntentView {
	INTENT_VIEW_UNSPECIFIED = 0,
	INTENT_VIEW_FULL = 1,
	INTENT_VIEW_PARTIAL = 2,
	INTENT_VIEW_SHALLOW = 3
}
export enum IntentCategory {
	ALL_INTENTS = 0,
	DEFAULT_INTENTS = 1,
	USER_DEFINED_INTENTS = 2,
	DATE_EXPIRED_INTENTS = 3,
	DATE_ACTIVE_INTENTS = 4,
	DATE_UPCOMING_INTENTS = 5
}
