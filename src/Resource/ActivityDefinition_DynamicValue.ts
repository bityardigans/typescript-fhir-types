
        import { Element } from '../Resource/Element';
import { Expression } from '../Resource/Expression';
import { Extension } from '../Resource/Extension';

        

        /**
         * This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. 
         */
        export class ActivityDefinition_DynamicValue  {

            constructor() {
                this.expression = new Expression();
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
                 * The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression.
                 */
                path? : string;
                

                /**
                 * Extensions for path
                 */
                _path? : Element;
                

                /**
                 * An expression specifying the value of the customized element.
                 */
                expression : Expression;
                
        }
        