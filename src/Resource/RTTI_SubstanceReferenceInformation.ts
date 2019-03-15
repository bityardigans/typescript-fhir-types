
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_SubstanceReferenceInformation_Gene, ISubstanceReferenceInformation_Gene} from './RTTI_SubstanceReferenceInformation_Gene';
import {RTTI_SubstanceReferenceInformation_GeneElement, ISubstanceReferenceInformation_GeneElement} from './RTTI_SubstanceReferenceInformation_GeneElement';
import {RTTI_SubstanceReferenceInformation_Classification, ISubstanceReferenceInformation_Classification} from './RTTI_SubstanceReferenceInformation_Classification';
import {RTTI_SubstanceReferenceInformation_Relationship, ISubstanceReferenceInformation_Relationship} from './RTTI_SubstanceReferenceInformation_Relationship';
import {RTTI_SubstanceReferenceInformation_Target, ISubstanceReferenceInformation_Target} from './RTTI_SubstanceReferenceInformation_Target';




            export interface ISubstanceReferenceInformation {
                
                    /**
                     * This is a SubstanceReferenceInformation resource
                     */
                    resourceType: 'SubstanceReferenceInformation';
                    
                
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
                     * Todo.
                     */
                    comment? : string;
                    

                    /**
                     * Extensions for comment
                     */
                    _comment? : IElement;
                    

                    /**
                     * Todo.
                     */
                    gene? : ISubstanceReferenceInformation_Gene[];
                    

                    /**
                     * Todo.
                     */
                    geneElement? : ISubstanceReferenceInformation_GeneElement[];
                    

                    /**
                     * Todo.
                     */
                    classification? : ISubstanceReferenceInformation_Classification[];
                    

                    /**
                     * Todo.
                     */
                    relationship? : ISubstanceReferenceInformation_Relationship[];
                    

                    /**
                     * Todo.
                     */
                    target? : ISubstanceReferenceInformation_Target[];
                    
            }
        


        export const RTTI_SubstanceReferenceInformation: t.Type<ISubstanceReferenceInformation> = t.recursion( 'ISubstanceReferenceInformation', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('SubstanceReferenceInformation')
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
comment: t.string,
_comment: RTTI_Element,
gene: t.array(RTTI_SubstanceReferenceInformation_Gene),
geneElement: t.array(RTTI_SubstanceReferenceInformation_GeneElement),
classification: t.array(RTTI_SubstanceReferenceInformation_Classification),
relationship: t.array(RTTI_SubstanceReferenceInformation_Relationship),
target: t.array(RTTI_SubstanceReferenceInformation_Target)
        })
        
            ])
        );
        

        