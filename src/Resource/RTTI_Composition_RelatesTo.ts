
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
code: t.string,
_code: RTTI_Element,
targetIdentifier: RTTI_Identifier,
targetReference: RTTI_Reference
        });
        

        export var RTTI_Composition_RelatesTo:any = t.intersection([mandatory, partial]);
        

export type IComposition_RelatesTo = t.TypeOf<typeof RTTI_Composition_RelatesTo>;
        
        