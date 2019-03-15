import { RTTI_Account } from '../Resource/RTTI_Account';
import { RTTI_ActivityDefinition } from '../Resource/RTTI_ActivityDefinition';
import { RTTI_AdverseEvent } from '../Resource/RTTI_AdverseEvent';
import { RTTI_AllergyIntolerance } from '../Resource/RTTI_AllergyIntolerance';
import { RTTI_Appointment } from '../Resource/RTTI_Appointment';
import { RTTI_AppointmentResponse } from '../Resource/RTTI_AppointmentResponse';
import { RTTI_AuditEvent } from '../Resource/RTTI_AuditEvent';
import { RTTI_Basic } from '../Resource/RTTI_Basic';
import { RTTI_Binary } from '../Resource/RTTI_Binary';
import { RTTI_BiologicallyDerivedProduct } from '../Resource/RTTI_BiologicallyDerivedProduct';
import { RTTI_BodyStructure } from '../Resource/RTTI_BodyStructure';
import { RTTI_Bundle } from '../Resource/RTTI_Bundle';
import { RTTI_CapabilityStatement } from '../Resource/RTTI_CapabilityStatement';
import { RTTI_CarePlan } from '../Resource/RTTI_CarePlan';
import { RTTI_CareTeam } from '../Resource/RTTI_CareTeam';
import { RTTI_ChargeItem } from '../Resource/RTTI_ChargeItem';
import { RTTI_ChargeItemDefinition } from '../Resource/RTTI_ChargeItemDefinition';
import { RTTI_Claim } from '../Resource/RTTI_Claim';
import { RTTI_ClaimResponse } from '../Resource/RTTI_ClaimResponse';
import { RTTI_ClinicalImpression } from '../Resource/RTTI_ClinicalImpression';
import { RTTI_CodeSystem } from '../Resource/RTTI_CodeSystem';
import { RTTI_Communication } from '../Resource/RTTI_Communication';
import { RTTI_CommunicationRequest } from '../Resource/RTTI_CommunicationRequest';
import { RTTI_CompartmentDefinition } from '../Resource/RTTI_CompartmentDefinition';
import { RTTI_Composition } from '../Resource/RTTI_Composition';
import { RTTI_ConceptMap } from '../Resource/RTTI_ConceptMap';
import { RTTI_Condition } from '../Resource/RTTI_Condition';
import { RTTI_Consent } from '../Resource/RTTI_Consent';
import { RTTI_Contract } from '../Resource/RTTI_Contract';
import { RTTI_Coverage } from '../Resource/RTTI_Coverage';
import { RTTI_CoverageEligibilityRequest } from '../Resource/RTTI_CoverageEligibilityRequest';
import { RTTI_CoverageEligibilityResponse } from '../Resource/RTTI_CoverageEligibilityResponse';
import { RTTI_DetectedIssue } from '../Resource/RTTI_DetectedIssue';
import { RTTI_Device } from '../Resource/RTTI_Device';
import { RTTI_DeviceDefinition } from '../Resource/RTTI_DeviceDefinition';
import { RTTI_DeviceMetric } from '../Resource/RTTI_DeviceMetric';
import { RTTI_DeviceRequest } from '../Resource/RTTI_DeviceRequest';
import { RTTI_DeviceUseStatement } from '../Resource/RTTI_DeviceUseStatement';
import { RTTI_DiagnosticReport } from '../Resource/RTTI_DiagnosticReport';
import { RTTI_DocumentManifest } from '../Resource/RTTI_DocumentManifest';
import { RTTI_DocumentReference } from '../Resource/RTTI_DocumentReference';
import { RTTI_Encounter } from '../Resource/RTTI_Encounter';
import { RTTI_Endpoint } from '../Resource/RTTI_Endpoint';
import { RTTI_EnrollmentRequest } from '../Resource/RTTI_EnrollmentRequest';
import { RTTI_EnrollmentResponse } from '../Resource/RTTI_EnrollmentResponse';
import { RTTI_EntryDefinition } from '../Resource/RTTI_EntryDefinition';
import { RTTI_EpisodeOfCare } from '../Resource/RTTI_EpisodeOfCare';
import { RTTI_EventDefinition } from '../Resource/RTTI_EventDefinition';
import { RTTI_ExampleScenario } from '../Resource/RTTI_ExampleScenario';
import { RTTI_ExplanationOfBenefit } from '../Resource/RTTI_ExplanationOfBenefit';
import { RTTI_FamilyMemberHistory } from '../Resource/RTTI_FamilyMemberHistory';
import { RTTI_Flag } from '../Resource/RTTI_Flag';
import { RTTI_Goal } from '../Resource/RTTI_Goal';
import { RTTI_GraphDefinition } from '../Resource/RTTI_GraphDefinition';
import { RTTI_Group } from '../Resource/RTTI_Group';
import { RTTI_GuidanceResponse } from '../Resource/RTTI_GuidanceResponse';
import { RTTI_HealthcareService } from '../Resource/RTTI_HealthcareService';
import { RTTI_ImagingStudy } from '../Resource/RTTI_ImagingStudy';
import { RTTI_Immunization } from '../Resource/RTTI_Immunization';
import { RTTI_ImmunizationEvaluation } from '../Resource/RTTI_ImmunizationEvaluation';
import { RTTI_ImmunizationRecommendation } from '../Resource/RTTI_ImmunizationRecommendation';
import { RTTI_ImplementationGuide } from '../Resource/RTTI_ImplementationGuide';
import { RTTI_InsurancePlan } from '../Resource/RTTI_InsurancePlan';
import { RTTI_Invoice } from '../Resource/RTTI_Invoice';
import { RTTI_ItemInstance } from '../Resource/RTTI_ItemInstance';
import { RTTI_Library } from '../Resource/RTTI_Library';
import { RTTI_Linkage } from '../Resource/RTTI_Linkage';
import { RTTI_List } from '../Resource/RTTI_List';
import { RTTI_Location } from '../Resource/RTTI_Location';
import { RTTI_Measure } from '../Resource/RTTI_Measure';
import { RTTI_MeasureReport } from '../Resource/RTTI_MeasureReport';
import { RTTI_Media } from '../Resource/RTTI_Media';
import { RTTI_Medication } from '../Resource/RTTI_Medication';
import { RTTI_MedicationAdministration } from '../Resource/RTTI_MedicationAdministration';
import { RTTI_MedicationDispense } from '../Resource/RTTI_MedicationDispense';
import { RTTI_MedicationKnowledge } from '../Resource/RTTI_MedicationKnowledge';
import { RTTI_MedicationRequest } from '../Resource/RTTI_MedicationRequest';
import { RTTI_MedicationStatement } from '../Resource/RTTI_MedicationStatement';
import { RTTI_MedicinalProduct } from '../Resource/RTTI_MedicinalProduct';
import { RTTI_MedicinalProductAuthorization } from '../Resource/RTTI_MedicinalProductAuthorization';
import { RTTI_MedicinalProductClinicals } from '../Resource/RTTI_MedicinalProductClinicals';
import { RTTI_MedicinalProductContraindication } from '../Resource/RTTI_MedicinalProductContraindication';
import { RTTI_MedicinalProductDeviceSpec } from '../Resource/RTTI_MedicinalProductDeviceSpec';
import { RTTI_MedicinalProductIndication } from '../Resource/RTTI_MedicinalProductIndication';
import { RTTI_MedicinalProductIngredient } from '../Resource/RTTI_MedicinalProductIngredient';
import { RTTI_MedicinalProductInteraction } from '../Resource/RTTI_MedicinalProductInteraction';
import { RTTI_MedicinalProductManufactured } from '../Resource/RTTI_MedicinalProductManufactured';
import { RTTI_MedicinalProductPackaged } from '../Resource/RTTI_MedicinalProductPackaged';
import { RTTI_MedicinalProductPharmaceutical } from '../Resource/RTTI_MedicinalProductPharmaceutical';
import { RTTI_MedicinalProductUndesirableEffect } from '../Resource/RTTI_MedicinalProductUndesirableEffect';
import { RTTI_MessageDefinition } from '../Resource/RTTI_MessageDefinition';
import { RTTI_MessageHeader } from '../Resource/RTTI_MessageHeader';
import { RTTI_NamingSystem } from '../Resource/RTTI_NamingSystem';
import { RTTI_NutritionOrder } from '../Resource/RTTI_NutritionOrder';
import { RTTI_Observation } from '../Resource/RTTI_Observation';
import { RTTI_ObservationDefinition } from '../Resource/RTTI_ObservationDefinition';
import { RTTI_OperationDefinition } from '../Resource/RTTI_OperationDefinition';
import { RTTI_OperationOutcome } from '../Resource/RTTI_OperationOutcome';
import { RTTI_Organization } from '../Resource/RTTI_Organization';
import { RTTI_OrganizationAffiliation } from '../Resource/RTTI_OrganizationAffiliation';
import { RTTI_Parameters } from '../Resource/RTTI_Parameters';
import { RTTI_Patient } from '../Resource/RTTI_Patient';
import { RTTI_PaymentNotice } from '../Resource/RTTI_PaymentNotice';
import { RTTI_PaymentReconciliation } from '../Resource/RTTI_PaymentReconciliation';
import { RTTI_Person } from '../Resource/RTTI_Person';
import { RTTI_PlanDefinition } from '../Resource/RTTI_PlanDefinition';
import { RTTI_Practitioner } from '../Resource/RTTI_Practitioner';
import { RTTI_PractitionerRole } from '../Resource/RTTI_PractitionerRole';
import { RTTI_Procedure } from '../Resource/RTTI_Procedure';
import { RTTI_ProcessRequest } from '../Resource/RTTI_ProcessRequest';
import { RTTI_ProcessResponse } from '../Resource/RTTI_ProcessResponse';
import { RTTI_Provenance } from '../Resource/RTTI_Provenance';
import { RTTI_Questionnaire } from '../Resource/RTTI_Questionnaire';
import { RTTI_QuestionnaireResponse } from '../Resource/RTTI_QuestionnaireResponse';
import { RTTI_RelatedPerson } from '../Resource/RTTI_RelatedPerson';
import { RTTI_RequestGroup } from '../Resource/RTTI_RequestGroup';
import { RTTI_ResearchStudy } from '../Resource/RTTI_ResearchStudy';
import { RTTI_ResearchSubject } from '../Resource/RTTI_ResearchSubject';
import { RTTI_RiskAssessment } from '../Resource/RTTI_RiskAssessment';
import { RTTI_Schedule } from '../Resource/RTTI_Schedule';
import { RTTI_SearchParameter } from '../Resource/RTTI_SearchParameter';
import { RTTI_Sequence } from '../Resource/RTTI_Sequence';
import { RTTI_ServiceRequest } from '../Resource/RTTI_ServiceRequest';
import { RTTI_Slot } from '../Resource/RTTI_Slot';
import { RTTI_Specimen } from '../Resource/RTTI_Specimen';
import { RTTI_SpecimenDefinition } from '../Resource/RTTI_SpecimenDefinition';
import { RTTI_StructureDefinition } from '../Resource/RTTI_StructureDefinition';
import { RTTI_StructureMap } from '../Resource/RTTI_StructureMap';
import { RTTI_Subscription } from '../Resource/RTTI_Subscription';
import { RTTI_Substance } from '../Resource/RTTI_Substance';
import { RTTI_SubstancePolymer } from '../Resource/RTTI_SubstancePolymer';
import { RTTI_SubstanceReferenceInformation } from '../Resource/RTTI_SubstanceReferenceInformation';
import { RTTI_SubstanceSpecification } from '../Resource/RTTI_SubstanceSpecification';
import { RTTI_SupplyDelivery } from '../Resource/RTTI_SupplyDelivery';
import { RTTI_SupplyRequest } from '../Resource/RTTI_SupplyRequest';
import { RTTI_Task } from '../Resource/RTTI_Task';
import { RTTI_TerminologyCapabilities } from '../Resource/RTTI_TerminologyCapabilities';
import { RTTI_TestReport } from '../Resource/RTTI_TestReport';
import { RTTI_TestScript } from '../Resource/RTTI_TestScript';
import { RTTI_UserSession } from '../Resource/RTTI_UserSession';
import { RTTI_ValueSet } from '../Resource/RTTI_ValueSet';
import { RTTI_VerificationResult } from '../Resource/RTTI_VerificationResult';
import { RTTI_VisionPrescription } from '../Resource/RTTI_VisionPrescription';


import * as t from 'io-ts';

export const RTTI_ResourceList = t.union([
    RTTI_Account,
    RTTI_ActivityDefinition,
    RTTI_AdverseEvent,
    RTTI_AllergyIntolerance,
    RTTI_Appointment,
    RTTI_AppointmentResponse,
    RTTI_AuditEvent,
    RTTI_Basic,
    RTTI_Binary, 
    RTTI_BiologicallyDerivedProduct,
    RTTI_BodyStructure,
    RTTI_Bundle,
    RTTI_CapabilityStatement,
    RTTI_CarePlan,
    RTTI_CareTeam,
    RTTI_ChargeItem,
    RTTI_ChargeItemDefinition,
    RTTI_Claim,
    RTTI_ClaimResponse,
    RTTI_ClinicalImpression,
    RTTI_CodeSystem,
    RTTI_Communication,
    RTTI_CommunicationRequest,
    RTTI_CompartmentDefinition,
    RTTI_Composition,
    RTTI_ConceptMap,
    RTTI_Condition,
    RTTI_Consent, RTTI_Contract,
    RTTI_Coverage,
    RTTI_CoverageEligibilityRequest,
    RTTI_CoverageEligibilityResponse,
    RTTI_DetectedIssue,
    RTTI_Device,
    RTTI_DeviceDefinition,
    RTTI_DeviceMetric,
    RTTI_DeviceRequest,
    RTTI_DeviceUseStatement,
    RTTI_DiagnosticReport,
    RTTI_DocumentManifest,
    RTTI_DocumentReference,
    RTTI_Encounter,
    RTTI_Endpoint,
    RTTI_EnrollmentRequest,
    RTTI_EnrollmentResponse,
    RTTI_EntryDefinition,
    RTTI_EpisodeOfCare,
    RTTI_EventDefinition,
    RTTI_ExampleScenario,
    RTTI_ExplanationOfBenefit,
    RTTI_FamilyMemberHistory,
    RTTI_Flag,
    RTTI_Goal,
    RTTI_GraphDefinition,
    RTTI_Group,
    RTTI_GuidanceResponse,
    RTTI_HealthcareService,
    RTTI_ImagingStudy,
    RTTI_Immunization, 
    RTTI_ImmunizationEvaluation, 
    RTTI_ImmunizationRecommendation, 
    RTTI_ImplementationGuide, 
    RTTI_InsurancePlan,
    RTTI_Invoice,
    RTTI_ItemInstance, 
    RTTI_Library, 
    RTTI_Linkage, 
    RTTI_List, 
    RTTI_Location, 
    RTTI_Measure, 
    RTTI_MeasureReport,
    RTTI_Media,
    RTTI_Medication, 
    RTTI_MedicationAdministration, 
    RTTI_MedicationDispense, 
    RTTI_MedicationKnowledge, 
    RTTI_MedicationRequest, 
    RTTI_MedicationStatement, 
    RTTI_MedicinalProduct,
    RTTI_MedicinalProductAuthorization,
    RTTI_MedicinalProductClinicals, 
    RTTI_MedicinalProductContraindication, 
    RTTI_MedicinalProductDeviceSpec, 
    RTTI_MedicinalProductIndication, 
    RTTI_MedicinalProductIngredient, 
    RTTI_MedicinalProductInteraction, 
    RTTI_MedicinalProductManufactured,
    RTTI_MedicinalProductPackaged,
    RTTI_MedicinalProductPharmaceutical, 
    RTTI_MedicinalProductUndesirableEffect, 
    RTTI_MessageDefinition, 
    RTTI_MessageHeader,
    RTTI_NamingSystem,
    RTTI_NutritionOrder, 
    RTTI_Observation, 
    RTTI_ObservationDefinition, 
    RTTI_OperationDefinition, 
    RTTI_OperationOutcome, 
    RTTI_Organization,
    RTTI_OrganizationAffiliation,
    RTTI_Parameters, 
    RTTI_Patient, 
    RTTI_PaymentNotice, 
    RTTI_PaymentReconciliation, 
    RTTI_Person, 
    RTTI_PlanDefinition,
    RTTI_Practitioner,
    RTTI_PractitionerRole, 
    RTTI_Procedure, 
    RTTI_ProcessRequest, 
    RTTI_ProcessResponse, 
    RTTI_Provenance, 
    RTTI_Questionnaire,
    RTTI_QuestionnaireResponse,
    RTTI_RelatedPerson, 
    RTTI_RequestGroup, 
    RTTI_ResearchStudy, 
    RTTI_ResearchSubject, 
    RTTI_RiskAssessment, 
    RTTI_Schedule,
    RTTI_SearchParameter,
    RTTI_Sequence, 
    RTTI_ServiceRequest, 
    RTTI_Slot, 
    RTTI_Specimen, 
    RTTI_SpecimenDefinition, 
    RTTI_StructureDefinition,
    RTTI_StructureMap,
    RTTI_Subscription, 
    RTTI_Substance, 
    RTTI_SubstancePolymer, 
    RTTI_SubstanceReferenceInformation, 
    RTTI_SubstanceSpecification,
    RTTI_SupplyDelivery,
    RTTI_SupplyRequest, 
    RTTI_Task,
    RTTI_TerminologyCapabilities, 
    RTTI_TestReport,
    RTTI_TestScript, 
    RTTI_UserSession,
    RTTI_ValueSet, 
    RTTI_VerificationResult,
    RTTI_VisionPrescription
]);
export type IResourceList = t.TypeOf<typeof RTTI_ResourceList>;