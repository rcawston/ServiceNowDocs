---
title: Now Assist agentic workflows
description: Agentic workflows are AI‑driven workflow orchestrations that use one or more AI agents to achieve a specific outcome. They go beyond single‑step automation by dynamically planning, executing, and adapting actions based on context, data, and intermediate results.
locale: en-US
release: australia
topic_type: concept
last_updated: "2026-04-27"
reading_time_minutes: 7
keywords: [AI Agents, Agentic AI]
breadcrumb: [Now Assist AI assets, Enable AI experiences]
---

# Now Assist agentic workflows

Agentic workflows are AI‑driven workflow orchestrations that use one or more AI agents to achieve a specific outcome. They go beyond single‑step automation by dynamically planning, executing, and adapting actions based on context, data, and intermediate results.

Unlike traditional workflows that follow a fixed, predefined path, agentic workflows are designed to handle routine but variable procedures, such as investigation, remediation, and analysis, where the exact steps may differ from case to case.

**Note:** Depending on your license, you will have access to certain application features, generative AI skills, agentic workflows, and AI agents. For more information, see [ServiceNow product tiers](ai-native-sku-overview.md).

## Agentic workflows overview

Agentic workflows use multiple AI agents to achieve specific outcomes. Different workflows offer different available tasks. Many agentic workflow templates are available for you to activate, duplicate, or customize. For more information, see [Activate an agentic workflow template](activate-aia-use-case.md) and [Duplicate an agentic workflow](clone-aia-usecase.md).

For more information about the in-product agentic AI experience, see [In-product agentic AI](in-product-agentic-ai.md). You can create UI actions for your agentic workflows in AI Agent Studio. Open the agentic workflow, navigate to the [Select channels and access](channels-access-aw.md) step in the guided setup, and create a UI action.

## What an agentic workflow does

Agentic workflows are designed to:

-   Achieve an outcome, not just complete a task

    The workflow focuses on resolving a business problem or completing a goal, rather than executing a single action.

-   Coordinate multiple AI agents and skills

    Agentic workflows can invoke generative AI skills and AI agents as needed to gather information, reason over data, take action, and verify results.

-   Adapt to variability

    Workflows can adjust execution paths based on conditions, findings, or system responses, making them suitable for non deterministic scenarios such as troubleshooting or analysis.

-   Operate across systems and records

    Agentic workflows interact with the ServiceNow AI Platform and connected systems to read data, update records, and trigger downstream actions.


## How agentic workflows are used

Agentic workflows are commonly used to:

-   Resolve tasks that follow a repeatable decision pattern but vary in execution.
-   Investigate issues by gathering and analyzing contextual data.
-   Execute remediation steps based on findings.
-   Assist users with analytical or exploratory workflows.

Depending on the product and configuration, agentic workflows can be triggered automatically or initiated by a user through a contextual UI or action.

## Available agentic workflows by product

The following table describes the available agentic workflows that are included in Now Assist applications.

<table id="table_tw1_t4n_g2c"><thead><tr><th class="filter">

Product

</th><th>

Available agentic workflows

</th></tr></thead><tbody><tr><td>

[Build Agent](../application-development/build-agent.md)

</td><td>

[Create in-app agents, skills, and workflows](../application-development/create-custom-ai-agent.md)

</td></tr><tr><td>

[Now Assist for Configuration Management Database \(CMDB\)](../servicenow-platform/now-assist-for-configuration-management-database-cmdb/now-assist-landing-cmdb.md)

</td><td>

-   [Create configuration item](../servicenow-platform/now-assist-for-configuration-management-database-cmdb/na-cmdb-awf-ci-creator.md)
-   [Provide advice on CMDB governance](../servicenow-platform/now-assist-for-configuration-management-database-cmdb/na-cmdb-awf-governance.md)
-   [Search CMDB](../servicenow-platform/now-assist-for-configuration-management-database-cmdb/na-cmdb-awf-search.md)

</td></tr><tr><td>

[Now Assist in Contract Management](../employee-service-management/contract-management-pro/cncore-now-assit-landing.md)

</td><td>

-   [Conversational contract search and insights](../employee-service-management/contract-management-pro/cncore-conf-converse-skill.md)
-   [Manage contract repository](../employee-service-management/contract-management-pro/cmpro-na-reminder-agentic-wf.md)

</td></tr><tr><td>

[Now Assist for Core Business Suite](../core-business-suite/now-assist-cbs.md)

</td><td>

[CBS setup](../core-business-suite/using-ai-agent-workflows-na-cbs.md)

</td></tr><tr><td>

[Now Assist for Creator](../application-development/now-assist-for-creator/now-assist-for-creator-landing.md)

</td><td>

[Create a theme using Now Assist](../platform-user-interface/create-theme-now-assist.md)

</td></tr><tr><td>

[Now Assist for Customer Service Management \(CSM\)](../customer-service-management/now-assist-for-csm/now-assist-csm.md)

</td><td>

-   [Accelerate complaint case handling](../customer-service-management/now-assist-for-csm/accelerate-complaint-case-handling.md)
-   [Provide Customer 360 insights](../customer-service-management/now-assist-for-csm/customer-service-management-ai-agent-collection-customer-360.md)
-   [Triage cases](../customer-service-management/now-assist-for-csm/case-resolving-use-case.md)

</td></tr><tr><td>

[Now Assist for Enterprise Architecture \(EA\)](../application-portfolio-management/now-assist-ea.md)

</td><td>

[Generate enterprise architecture diagram](../application-portfolio-management/now-assist-aiagents-ea-diagramming-usecase.md)

</td></tr><tr><td>

[Enterprise Asset Management](../it-asset-management/enterprise-asset-management/enterprise-asset-management.md)

</td><td>

-   [Help repair enterprise assets](../it-asset-management/enterprise-asset-management/now-assist-eam-help-repair-enterprise-assets-workflow.md)
-   [Help manage enterprise asset requests](../it-asset-management/enterprise-asset-management/now-assist-eam-help-manage-enterprise-asset-requests-workflow.md)

</td></tr><tr><td>

[Now Assist for Operational Sustainability Management](../environmental-social-governance/now-assist-for-esg.md)

</td><td>

[Generate carbon calculations for metrics](../environmental-social-governance/generate-carbon-calculcations-for-metrics.md)

</td></tr><tr><td>

[Now Assist for Field Service Management \(FSM\)](../field-service-management/now-assist-for-field-service-management-fsm/now-assist-fsm.md)

</td><td>

[Create a work order](../field-service-management/now-assist-for-field-service-management-fsm/create-work-order-now-assist-fsm.md)

</td></tr><tr><td>

[Now Assist for Finance and Supply Chain \(FSC\)](../source-to-pay-operations/now-assist-for-fsc-common/now-assist-fsc-common-landing.md)

</td><td>

[Conversational intake for sourcing and procurement](../source-to-pay-operations/sourcing-and-procurement-operations/spo-help-fulfill-pr-agentic.md)

</td></tr><tr><td>

[Now Assist for Financial Services Operations \(FSO\)](../financial-services-operations/now-assist-for-financial-services-operations-fso/now-assist-for-financial-services-operations.md)

</td><td>

[Help resolve friendly fraud disputes](../financial-services-operations/now-assist-for-financial-services-operations-fso/friendly-fraud-agentic-ai-workflow.md)

</td></tr><tr><td>

[Now Assist for Hardware Asset Management \(HAM\)](../it-asset-management/now-assist-for-hardware-asset-management/now-assist-ham.md)

</td><td>

-   [Help manage hardware asset requests](../it-asset-management/now-assist-for-hardware-asset-management/now-assist-ham-fulfill-req-agent-workflow.md)
-   [Help repair hardware assets](../it-asset-management/now-assist-for-hardware-asset-management/now-assist-ham-repair-agent-workflow.md)

</td></tr><tr><td>

[Now Assist for Health and Safety](../employee-service-management/now-assist-for-health-and-safety/now-assist-hs-landing.md)

</td><td>

-   [Create actions for safety incidents](../employee-service-management/now-assist-for-health-and-safety/create-actions-safety-incidents.md)
-   [Help resolve health and safety cases agentic workflow](../employee-service-management/now-assist-for-health-and-safety/help-resolve-safety-cases-agentic-workflow.md)
-   [Health safety incident patterns assistant agentic workflow](../employee-service-management/now-assist-for-health-and-safety/hs-incident-pattern-analysis-agentic-workflow.md)

</td></tr><tr><td>

[Now Assist for HR Service Delivery \(HRSD\)](../employee-service-management/now-assist-for-hrsd/now-assist-hrsd.md)

</td><td>

-   [Help resolve tuition requests](../employee-service-management/now-assist-for-hrsd/now-assist-hrsd-ai-agents-policy-resolving-tr-usecase.md)
-   [Help resolve tuition reimbursement requests](../employee-service-management/now-assist-for-hrsd/resolve-tuition-reimbursement-requests.md)
-   [Predict service and transfer HR cases](../employee-service-management/now-assist-for-hrsd/predict-transfer-hrcase.md)
-   [Resolve noncritical HR cases](../employee-service-management/now-assist-for-hrsd/employee-issue-resolver-na.md)
-   [Resolve critical HR cases](../employee-service-management/now-assist-for-hrsd/employee-issue-resolve-critical.md)
-   [Generate onboarding ramp-up plan](../employee-service-management/now-assist-for-hrsd/onboarding-ramp-up-plan-agentic-wf.md)
-   [Recommend catalog and order guide tasks in Onboarding Journey](../employee-service-management/now-assist-for-hrsd/onboarding-ramp-up-plan-agentic-wf.md)
-   [Schedule interviews](../employee-service-management/now-assist-for-hrsd/use-ai-agents-to-schedule-interviews.md)

</td></tr><tr><td>

[Now Assist for Integrated Risk Management \(IRM\)](../governance-risk-compliance/grc-common-functions/now-assist-for-irm.md)

</td><td>

-   [Generate regulatory action plans](../governance-risk-compliance/grc-common-functions/generate_regulatory_action_plans.md)
-   [Get regulatory analysis](../governance-risk-compliance/grc-common-functions/get-rcm-reg-insight.md)
-   [Identify risks for an entity](../governance-risk-compliance/grc-common-functions/identify-risks-for-entity.md)
-   [Optimize issue resolution](../governance-risk-compliance/grc-common-functions/generate-grc-issue-resolution.md)

</td></tr><tr><td>

[Now Assist for IT Operations Management \(ITOM\)](../it-operations-management/now-assist-for-it-operations-management/now-assist-itom.md)

</td><td>

-   [Analyze alert impact](../it-operations-management/now-assist-for-it-operations-management/now-assist-itom-agentic-aia.md)
-   [Agent Client Collector \(ACC\) diagnostic workflow](../it-operations-management/now-assist-for-it-operations-management/use-acc-diagnostic-workflow.md)
-   [Analyze potential impact](../it-operations-management/now-assist-for-it-operations-management/now-assist-itom-analyze-potential-impact-workflow.md)
-   [Manage alerts autonomously](../it-operations-management/now-assist-for-it-operations-management/itom-autonomous-operator-workflow.md)
-   [Triage and analyze alerts](../it-operations-management/now-assist-for-it-operations-management/itom-alert-triage-agentic-workflow.md)

</td></tr><tr><td>

[Now Assist for IT Service Management \(ITSM\)](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm.md)

</td><td>

-   [Assess conflicts for a change request](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-assess-conflicts-workflow.md)
-   [Assess quality of a change request](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-assess-quality-change-request-workflow.md)
-   [Create outages for a change request](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-create-outages-for-a-change-request.md)
-   [Create standard change request](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-create-change-request-workflow.md)
-   [Create standard change template proposal](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-create-standard-change-template-proposal.md)
-   [DEX issue diagnosis and resolution](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-dex-diagnosis-resolution-workflow.md)
-   [Explain SLA](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-explain-sla-workflow.md)
-   [Generate change request plans](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-change-planner-usecase.md)
-   [Generate post incident reviews](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-mim-usecase.md)
-   [Incident assist](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-incident-assist-workflow.md)
-   [Investigate and resolve ITSM incidents](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-incident-resolver-workflow.md)
-   [Manage Microsoft 365 group members](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-O365-groupmembers-workflow.md)
-   [Notify users with Twilio](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-twilio-text-usecase.md)
-   [Schedule a change](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-schedule-change-agentic-workflow.md)
-   [Suggest configuration items for a change request](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-suggest-configuration-items-for-a-change-request.md)
-   [Triage and categorize ITSM incidents](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-aiagents-catincidents-usecase.md)
-   [Wrap-up and resolve ITSM incidents](../it-service-management/now-assist-for-it-service-management-itsm/now-assist-itsm-wrap-up-resolve-incident-aw.md)

</td></tr><tr><td>

[Now Assist for Legal Service Delivery \(LSD\)](../employee-service-management/now-assist-for-legal-service-delivery/now-assist-lsd-landing.md)

</td><td>

-   [Conversational contract search and insights](../employee-service-management/contract-management-pro/cmpro-agentic-use-conv-search.md)
-   [Triage legal requests](../employee-service-management/now-assist-for-legal-service-delivery/trans-legal-request-agent.md)

</td></tr><tr><td>

[Now Assist for Manufacturing Commercial Operations \(MCO\)](../manufacturing/now-assist-for-MCO.md)

</td><td>

[Execute recall campaigns faster](../manufacturing/execute-recall-campaigns.md)

</td></tr><tr><td>

[Operational Technology \(OT\) Manager Foundation](../operational-technology/now-assist-for-otm-landing.md)

</td><td>

[Import the OT device spreadsheet into OT CMDB](../operational-technology/now-assist-otm-aiagents-import-ot-device-workflow.md)

</td></tr><tr><td>

[Now Assist for Operational Technology Service Management \(OTSM\)](../operational-technology/now-assist-for-operational-technology-service-management.md)

</td><td>

[Generate OT KB articles agentic workflow](../operational-technology/agent-ot-knowledge-generator.md)

</td></tr><tr><td>

[Now Assist in Notifications](../platform-administration/now-assist-notifications.md)

</td><td>

[Email Intent to Action](../platform-administration/email-agentic-workflow.md)

</td></tr><tr><td>

[Now Assist for Public Sector Digital Services \(PSDS\)](../government-industry/now-assist-for-psds.md)

</td><td>

Help manage public information requests

</td></tr><tr><td>

[Now Assist for Sales Force Automation \(SFA\)](../order-management/now-assist-for-sales-and-order-management-som.md)

</td><td>

[Help nurture new leads](../order-management/help-nurture-new-leads-agentic-workflow.md)

</td></tr><tr><td>

[Now Assist for Security Incident Response](../security-management/now-assist-for-security-incident-response-sir/now-assist-security-incident-landing.md)

</td><td>

-   [Analyze security operations metrics](../security-management/now-assist-for-security-incident-response-sir/now-assist-sir-soc-efficiency-usecase.md)
-   [Close security incident](../security-management/now-assist-for-security-incident-response-sir/now-assist-sir-close-incident-usecase.md)
-   [Generate SIR shift handover report](../security-management/now-assist-for-security-incident-response-sir/add-incidents-shifthandover-ai-agent.md)
-   [Resolve security incident](../security-management/now-assist-for-security-incident-response-sir/now-assist-sir-resolve-incident-ai-workflow.md)

</td></tr><tr><td>

[Now Assist for Software Asset Management \(SAM\)](../it-asset-management/now-assist-for-software-asset-management-sam/now-assist-sam.md)

</td><td>

-   [Create software reclamation rule](../it-asset-management/now-assist-for-software-asset-management-sam/now-assist-sam-create-software-reclamation-rule-workflow.md)
-   [Evaluate software removal candidate](../it-asset-management/now-assist-for-software-asset-management-sam/now-assist-sam-evaluate-removal-candidate-workflow.md)
-   [Help manage software asset requests](../it-asset-management/now-assist-for-software-asset-management-sam/now-assist-sam-fulfill-sw-asset-requests-workflow.md)

</td></tr><tr><td>

[Now Assist for Strategic Portfolio Management \(SPM\)](../it-business-management/now-assist-for-strategic-portfolio-management-spm/now-assist-spm.md)

</td><td>

-   [Generate Agile stories](../it-business-management/enterprise-agile-planning/generate-agile-story-planning-items.md)
-   [Monitor project tasks](../it-business-management/now-assist-for-strategic-portfolio-management-spm/na-spm-task-monitoring-usecase.md)

</td></tr><tr><td>

[Now Assist for Supplier Lifecycle Operations \(SLO\)](../source-to-pay-operations/supplier-lifecycle-operations/now-assist-slo.md)

</td><td>

[Email intent to action](../source-to-pay-operations/supplier-lifecycle-operations/automated-supplier-case-creation-from-emails.md)

</td></tr><tr><td>

[Now Assist for Telecommunications, Media and Technology \(TMT\)](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-spmc.md)

</td><td>

-   [Help remediate bill issues](../telecom-media-technology/now-assist-for-telecom-media-and-technology/billissue-remediation-usecase.md)
-   [Analyze network incident](../telecom-media-technology/now-assist-for-telecom-media-and-technology/network-incident-analysis-usecase.md)
-   [Customer voice quality issue resolutions](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-customer-voice.md)
-   [Monitor engagement health](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-tmt-monitor-health.md)
-   [Recommend risk signal solutions agentic workflow](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-tmt-resolve-risk.md)
-   [Trigger risk mitigation touchpoint](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-tmt-touchpoint-meeting-scheduler.md)
-   [Support renewals and expansions](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-tmt-renewal-analyzer.md)
-   [Service Exchange onboarding](../telecom-media-technology/now-assist-for-telecom-media-and-technology/now-assist-tmt-register-consumer-users-sb.md)

</td></tr><tr><td>

[Now Assist for Vault](../platform-security/now-assist-vault-landing.md)

</td><td>

-   [Access observer configuration](../platform-security/now-assist-vault-access-observer-config.md)
-   [Field encryption with Vault module](../platform-security/now-assist-vault-field-encryption-module.md)
-   [Securing custom apps with Vault agents](../platform-security/now-assist-vault-securing-custom-apps-agents.md)
-   [Summarize access observer logs](../platform-security/now-assist-vault-access-observer-logs.md)

</td></tr><tr><td>

[Now Assist for Workplace Service Delivery \(WSD\)](../employee-service-management/now-assist-for-wsd/now-assist-wsd-landing.md)

</td><td>

-   [Automate map updates](../employee-service-management/now-assist-for-wsd/automate-map-updates-agent-ai.md)
-   [Help manage workplace reservations](../employee-service-management/now-assist-for-wsd/manage-workplace-reservations-agent-ai.md)
-   [Manage temporary space closures](../employee-service-management/now-assist-for-wsd/maintenance-meeting-room-agent-ai.md)
-   [Optimize cleaning activities](../employee-service-management/now-assist-for-wsd/optimize-cleaning-activities-agent.md)
-   [Workplace Concierge](../employee-service-management/now-assist-for-wsd/workplace-concierge-ai-agent.md)

</td></tr><tr><td>

[Now Assist for Zero Copy Connector](../integrate-applications/now-assist-for-zero-copy-connector-for-erp.md)

</td><td>

[Explore ERP models](../integrate-applications/now-assist-erp-aiagents-data-explorer-workflow.md)

</td></tr><tr><td>

[Now Assist Platform](na-ai-agents.md)

</td><td>

-   [Analyze incident trends](incident-trends.md)
-   [Classify tasks](classify-tasks.md)
-   [Generate my work plan](generate-work-plan.md)
-   [Generate resolution plans](resolve-requests.md)
-   [Help optimize team productivity](help-optimize-productivity.md)
-   [Identify ways to improve services](service-improvement.md)
-   [Investigate IT problems](problem-investigation.md)
-   [Notification agent](../platform-administration/notification-creation-agent.md)
-   [Process images for tasks](images-tasks.md)
-   [Suggest survey responses](survey-suggest.md)

</td></tr></tbody>
</table>