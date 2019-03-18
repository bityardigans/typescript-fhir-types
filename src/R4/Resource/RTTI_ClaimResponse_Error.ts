
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';




            export interface IClaimResponse_Error {
                
                    /**
                     * An error code, from a specified code system, which details why the claim could not be adjudicated.
                     */
                    code : ICodeableConcept;
                    
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The sequence number of the line item submitted which contains the error. This value is omitted when the error is elsewhere.
                     */
                    itemSequence? : number;
                    

                    /**
                     * Extensions for itemSequence
                     */
                    _itemSequence? : IElement;
                    

                    /**
                     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                     */
                    detailSequence? : number;
                    

                    /**
                     * Extensions for detailSequence
                     */
                    _detailSequence? : IElement;
                    

                    /**
                     * The sequence number of the addition within the line item submitted which contains the error. This value is omitted when the error is not related to an Addition.
                     */
                    subDetailSequence? : number;
                    

                    /**
                     * Extensions for subDetailSequence
                     */
                    _subDetailSequence? : IElement;
                    
            }
        


        export const RTTI_ClaimResponse_Error: t.Type<IClaimResponse_Error> = t.recursion( 'IClaimResponse_Error', () =>
            t.intersection([
                
        t.type({
           code: RTTI_CodeableConcept
        })
        ,
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemSequence: t.number,
_itemSequence: RTTI_Element,
detailSequence: t.number,
_detailSequence: RTTI_Element,
subDetailSequence: t.number,
_subDetailSequence: RTTI_Element
        })
        
            ])
        );
        

        