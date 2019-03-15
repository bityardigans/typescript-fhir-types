
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';

import {RTTI_ContactDetail, IContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext, IUsageContext} from './RTTI_UsageContext';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Coding, ICoding} from './RTTI_Coding';
import {RTTI_MessageDefinition_Focus, IMessageDefinition_Focus} from './RTTI_MessageDefinition_Focus';
import {RTTI_MessageDefinition_AllowedResponse, IMessageDefinition_AllowedResponse} from './RTTI_MessageDefinition_AllowedResponse';

export enum MessageDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum MessageDefinitionCategoryKind {
                consequence = 'consequence',
currency = 'currency',
notification = 'notification'
            }
export enum MessageDefinitionResponseRequiredKind {
                always = 'always',
onError = 'onError',
never = 'never',
onSuccess = 'onSuccess'
            }
const MessageDefinitionStatusKindKeys = t.keyof({
                [MessageDefinitionStatusKind.draft]: null,
[MessageDefinitionStatusKind.active]: null,
[MessageDefinitionStatusKind.retired]: null,
[MessageDefinitionStatusKind.unknown]: null
            });
const MessageDefinitionCategoryKindKeys = t.keyof({
                [MessageDefinitionCategoryKind.consequence]: null,
[MessageDefinitionCategoryKind.currency]: null,
[MessageDefinitionCategoryKind.notification]: null
            });
const MessageDefinitionResponseRequiredKindKeys = t.keyof({
                [MessageDefinitionResponseRequiredKind.always]: null,
[MessageDefinitionResponseRequiredKind.onError]: null,
[MessageDefinitionResponseRequiredKind.never]: null,
[MessageDefinitionResponseRequiredKind.onSuccess]: null
            });


            export interface IMessageDefinition {
                
                    /**
                     * This is a MessageDefinition resource
                     */
                    resourceType: 'MessageDefinition';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The business identifier that is used to reference the MessageDefinition and *is* expected to be consistent from server to server.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A short, descriptive, user-friendly title for the message definition.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * A MessageDefinition that is superseded by this definition.
                     */
                    replaces? : string[];
                    

                    /**
                     * The status of this message definition. Enables tracking the life-cycle of the content.
                     */
                    status? : MessageDefinitionStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the message definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the message definition.
                     */
                    publisher? : string;
                    

                    /**
                     * Extensions for publisher
                     */
                    _publisher? : IElement;
                    

                    /**
                     * Contact details to assist a user in finding and communicating with the publisher.
                     */
                    contact? : IContactDetail[];
                    

                    /**
                     * A free text natural language description of the message definition from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate message definition instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the message definition is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * Explanation of why this message definition is needed and why it has been designed as it has.
                     */
                    purpose? : string;
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement;
                    

                    /**
                     * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    

                    /**
                     * The MessageDefinition that is the basis for the contents of this resource.
                     */
                    base? : string;
                    

                    /**
                     * Identifies a protocol or workflow that this MessageDefinition represents a step in.
                     */
                    parent? : string[];
                    

                    /**
                     * Event code or link to the EventDefinition.
                     */
                    eventCoding? : ICoding;
                    

                    /**
                     * Event code or link to the EventDefinition.
                     */
                    eventUri? : string;
                    

                    /**
                     * Extensions for eventUri
                     */
                    _eventUri? : IElement;
                    

                    /**
                     * The impact of the content of the message.
                     */
                    category? : MessageDefinitionCategoryKind;
                    

                    /**
                     * Extensions for category
                     */
                    _category? : IElement;
                    

                    /**
                     * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
                     */
                    focus? : IMessageDefinition_Focus[];
                    

                    /**
                     * Declare at a message definition level whether a response is required or only upon error or success, or never.
                     */
                    responseRequired? : MessageDefinitionResponseRequiredKind;
                    

                    /**
                     * Extensions for responseRequired
                     */
                    _responseRequired? : IElement;
                    

                    /**
                     * Indicates what types of messages may be sent as an application-level response to this message.
                     */
                    allowedResponse? : IMessageDefinition_AllowedResponse[];
                    

                    /**
                     * Canonical URL for a GraphDefinition. If a URL is provided, it is the canonical URL for a [[[GraphDefinition]]] that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
                     */
                    graph? : string[];
                    
            }
        


        export const RTTI_MessageDefinition: t.Type<IMessageDefinition> = t.recursion( 'IMessageDefinition', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('MessageDefinition')
        })
        ,
                
        t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
// contained: t.array(RTTI_ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
url: t.string,
_url: RTTI_Element,
identifier: t.array(RTTI_Identifier),
version: t.string,
_version: RTTI_Element,
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
replaces: t.array(t.string),
status: MessageDefinitionStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
date: t.string,
_date: RTTI_Element,
publisher: t.string,
_publisher: RTTI_Element,
contact: t.array(RTTI_ContactDetail),
description: t.string,
_description: RTTI_Element,
useContext: t.array(RTTI_UsageContext),
jurisdiction: t.array(RTTI_CodeableConcept),
purpose: t.string,
_purpose: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
base: t.string,
parent: t.array(t.string),
eventCoding: RTTI_Coding,
eventUri: t.string,
_eventUri: RTTI_Element,
category: MessageDefinitionCategoryKindKeys,
_category: RTTI_Element,
focus: t.array(RTTI_MessageDefinition_Focus),
responseRequired: MessageDefinitionResponseRequiredKindKeys,
_responseRequired: RTTI_Element,
allowedResponse: t.array(RTTI_MessageDefinition_AllowedResponse),
graph: t.array(t.string)
        })
        
            ])
        );
        

        