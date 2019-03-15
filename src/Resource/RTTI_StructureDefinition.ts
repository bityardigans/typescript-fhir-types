
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
import {RTTI_StructureDefinition_Mapping, IStructureDefinition_Mapping} from './RTTI_StructureDefinition_Mapping';
import {RTTI_StructureDefinition_Context, IStructureDefinition_Context} from './RTTI_StructureDefinition_Context';

import {RTTI_StructureDefinition_Snapshot, IStructureDefinition_Snapshot} from './RTTI_StructureDefinition_Snapshot';
import {RTTI_StructureDefinition_Differential, IStructureDefinition_Differential} from './RTTI_StructureDefinition_Differential';

export enum StructureDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
export enum StructureDefinitionKindKind {
                primitiveType = 'primitiveType',
complexType = 'complexType',
resource = 'resource',
logical = 'logical'
            }
export enum StructureDefinitionDerivationKind {
                specialization = 'specialization',
constraint = 'constraint'
            }
const StructureDefinitionStatusKindKeys = t.keyof({
                [StructureDefinitionStatusKind.draft]: null,
[StructureDefinitionStatusKind.active]: null,
[StructureDefinitionStatusKind.retired]: null,
[StructureDefinitionStatusKind.unknown]: null
            });
const StructureDefinitionKindKindKeys = t.keyof({
                [StructureDefinitionKindKind.primitiveType]: null,
[StructureDefinitionKindKind.complexType]: null,
[StructureDefinitionKindKind.resource]: null,
[StructureDefinitionKindKind.logical]: null
            });
const StructureDefinitionDerivationKindKeys = t.keyof({
                [StructureDefinitionDerivationKind.specialization]: null,
[StructureDefinitionDerivationKind.constraint]: null
            });


            export interface IStructureDefinition {
                
                    /**
                     * This is a StructureDefinition resource
                     */
                    resourceType: 'StructureDefinition';
                    
                
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
                     * An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers.
                     */
                    url? : string;
                    

                    /**
                     * Extensions for url
                     */
                    _url? : IElement;
                    

                    /**
                     * A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
                     */
                    version? : string;
                    

                    /**
                     * Extensions for version
                     */
                    _version? : IElement;
                    

                    /**
                     * A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
                     */
                    name? : string;
                    

                    /**
                     * Extensions for name
                     */
                    _name? : IElement;
                    

                    /**
                     * A short, descriptive, user-friendly title for the structure definition.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * The status of this structure definition. Enables tracking the life-cycle of the content.
                     */
                    status? : StructureDefinitionStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage.
                     */
                    experimental? : boolean;
                    

                    /**
                     * Extensions for experimental
                     */
                    _experimental? : IElement;
                    

                    /**
                     * The date  (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The name of the organization or individual that published the structure definition.
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
                     * A free text natural language description of the structure definition from a consumer's perspective.
                     */
                    description? : string;
                    

                    /**
                     * Extensions for description
                     */
                    _description? : IElement;
                    

                    /**
                     * The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure definition instances.
                     */
                    useContext? : IUsageContext[];
                    

                    /**
                     * A legal or geographic region in which the structure definition is intended to be used.
                     */
                    jurisdiction? : ICodeableConcept[];
                    

                    /**
                     * Explanation of why this structure definition is needed and why it has been designed as it has.
                     */
                    purpose? : string;
                    

                    /**
                     * Extensions for purpose
                     */
                    _purpose? : IElement;
                    

                    /**
                     * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
                     */
                    copyright? : string;
                    

                    /**
                     * Extensions for copyright
                     */
                    _copyright? : IElement;
                    

                    /**
                     * A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes.
                     */
                    keyword? : ICoding[];
                    

                    /**
                     * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.5.0. for this version.
                     */
                    fhirVersion? : string;
                    

                    /**
                     * Extensions for fhirVersion
                     */
                    _fhirVersion? : IElement;
                    

                    /**
                     * An external specification that the content is mapped to.
                     */
                    mapping? : IStructureDefinition_Mapping[];
                    

                    /**
                     * Defines the kind of structure that this definition is describing.
                     */
                    kind? : StructureDefinitionKindKind;
                    

                    /**
                     * Extensions for kind
                     */
                    _kind? : IElement;
                    

                    /**
                     * Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.
                     */
                    abstract? : boolean;
                    

                    /**
                     * Extensions for abstract
                     */
                    _abstract? : IElement;
                    

                    /**
                     * Identifies the types of resource or data type elements to which the extension can be applied.
                     */
                    context? : IStructureDefinition_Context[];
                    

                    /**
                     * A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true.
                     */
                    contextInvariant? : string[];
                    

                    /**
                     * Extensions for contextInvariant
                     */
                    _contextInvariant? : IElement[];
                    

                    /**
                     * The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models.
                     */
                    type? : string;
                    

                    /**
                     * Extensions for type
                     */
                    _type? : IElement;
                    

                    /**
                     * An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.
                     */
                    baseDefinition? : string;
                    

                    /**
                     * How the type relates to the baseDefinition.
                     */
                    derivation? : StructureDefinitionDerivationKind;
                    

                    /**
                     * Extensions for derivation
                     */
                    _derivation? : IElement;
                    

                    /**
                     * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
                     */
                    snapshot? : IStructureDefinition_Snapshot;
                    

                    /**
                     * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
                     */
                    differential? : IStructureDefinition_Differential;
                    
            }
        


        export const RTTI_StructureDefinition: t.Type<IStructureDefinition> = t.recursion( 'IStructureDefinition', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('StructureDefinition')
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
status: StructureDefinitionStatusKindKeys,
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
keyword: t.array(RTTI_Coding),
fhirVersion: t.string,
_fhirVersion: RTTI_Element,
mapping: t.array(RTTI_StructureDefinition_Mapping),
kind: StructureDefinitionKindKindKeys,
_kind: RTTI_Element,
abstract: t.boolean,
_abstract: RTTI_Element,
context: t.array(RTTI_StructureDefinition_Context),
contextInvariant: t.array(t.string),
_contextInvariant: t.array(RTTI_Element),
type: t.string,
_type: RTTI_Element,
baseDefinition: t.string,
derivation: StructureDefinitionDerivationKindKeys,
_derivation: RTTI_Element,
snapshot: RTTI_StructureDefinition_Snapshot,
differential: RTTI_StructureDefinition_Differential
        })
        
            ])
        );
        

        