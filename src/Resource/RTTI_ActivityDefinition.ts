
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ContactDetail} from './RTTI_ContactDetail';
import {RTTI_UsageContext} from './RTTI_UsageContext';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_RelatedArtifact} from './RTTI_RelatedArtifact';
import {RTTI_Timing} from './RTTI_Timing';
import {RTTI_Age} from './RTTI_Age';
import {RTTI_Range} from './RTTI_Range';
import {RTTI_Duration} from './RTTI_Duration';
import {RTTI_ActivityDefinition_Participant} from './RTTI_ActivityDefinition_Participant';
import {RTTI_Quantity} from './RTTI_Quantity';
import {RTTI_Dosage} from './RTTI_Dosage';
import {RTTI_ActivityDefinition_DynamicValue} from './RTTI_ActivityDefinition_DynamicValue';

export enum ActivityDefinitionStatusKind {
                draft = 'draft',
active = 'active',
retired = 'retired',
unknown = 'unknown'
            }
const ActivityDefinitionStatusKindKeys = t.keyof({
                [ActivityDefinitionStatusKind.draft]: null,
[ActivityDefinitionStatusKind.active]: null,
[ActivityDefinitionStatusKind.retired]: null,
[ActivityDefinitionStatusKind.unknown]: null
            });


        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
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
subtitle: t.string,
_subtitle: RTTI_Element,
status: ActivityDefinitionStatusKindKeys,
_status: RTTI_Element,
experimental: t.boolean,
_experimental: RTTI_Element,
subjectCodeableConcept: RTTI_CodeableConcept,
subjectReference: RTTI_Reference,
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
usage: t.string,
_usage: RTTI_Element,
copyright: t.string,
_copyright: RTTI_Element,
approvalDate: t.string,
_approvalDate: RTTI_Element,
lastReviewDate: t.string,
_lastReviewDate: RTTI_Element,
effectivePeriod: RTTI_Period,
topic: t.array(RTTI_CodeableConcept),
author: t.array(RTTI_ContactDetail),
editor: t.array(RTTI_ContactDetail),
reviewer: t.array(RTTI_ContactDetail),
endorser: t.array(RTTI_ContactDetail),
relatedArtifact: t.array(RTTI_RelatedArtifact),
library: t.array(t.string),
kind: t.string,
_kind: RTTI_Element,
profile: t.string,
code: RTTI_CodeableConcept,
intent: t.string,
_intent: RTTI_Element,
priority: t.string,
_priority: RTTI_Element,
doNotPerform: t.boolean,
_doNotPerform: RTTI_Element,
timingTiming: RTTI_Timing,
timingDateTime: t.string,
_timingDateTime: RTTI_Element,
timingAge: RTTI_Age,
timingPeriod: RTTI_Period,
timingRange: RTTI_Range,
timingDuration: RTTI_Duration,
location: RTTI_Reference,
participant: t.array(RTTI_ActivityDefinition_Participant),
productReference: RTTI_Reference,
productCodeableConcept: RTTI_CodeableConcept,
quantity: RTTI_Quantity,
dosage: t.array(RTTI_Dosage),
bodySite: t.array(RTTI_CodeableConcept),
specimenRequirement: t.array(RTTI_Reference),
observationRequirement: t.array(RTTI_Reference),
observationResultRequirement: t.array(RTTI_Reference),
transform: t.string,
dynamicValue: t.array(RTTI_ActivityDefinition_DynamicValue)
        });
        

        export var RTTI_ActivityDefinition:any = t.intersection([mandatory, partial]);
        

export type IActivityDefinition = t.TypeOf<typeof RTTI_ActivityDefinition>;
        
        