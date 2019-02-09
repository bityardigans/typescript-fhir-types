
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Extension } from '../Resource/Extension';
import { Reference } from '../Resource/Reference';

        

        /**
         * The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. 
         */
        export class MedicinalProductContraindication_OtherTherapy  {

            constructor() {
                this.therapyRelationshipType = new CodeableConcept();
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The type of relationship between the medicinal product indication or contraindication and another therapy.
                 */
                therapyRelationshipType : CodeableConcept;
                

                /**
                 * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
                 */
                medicationCodeableConcept? : CodeableConcept;
                

                /**
                 * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication.
                 */
                medicationReference? : Reference;
                
        }
        