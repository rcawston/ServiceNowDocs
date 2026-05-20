# LLM Readability Report

Generated: 2026-05-20T03:07:59.757Z

Repository: /Volumes/Samsung/ServiceNowDocs-official

## Scope

- Scans source Markdown files outside generated analysis artifacts.
- Focuses on patterns that reduce LLM retrieval, grounding, summarization, or citation quality.
- Reports mechanical findings only; some low-severity findings require human judgment before editing.

## Summary

- Markdown files scanned: 46032
- Issues found: 73534
- Files with at least one issue: 23383
- Files indexed by llms.txt: 50 (informational; product indexes may intentionally link onward into their trees)
- llms.txt missing targets: 0
- llms.txt duplicate targets: 0

### By Severity

| Severity | Count |
|---|---:|
| P3 | 52823 |
| P2 | 20711 |

### By Category

| Category | Count |
|---|---:|
| chunkability | 24509 |
| markdown-validity | 20715 |
| page-identity | 9282 |
| heading-structure | 7692 |
| link-text-quality | 5169 |
| image-context | 4845 |
| code-api-readability | 1296 |
| duplication | 26 |

### By Issue Type

| Issue | Count |
|---|---:|
| html_table | 23746 |
| code_fence_missing_language | 16681 |
| duplicate_heading_anchor | 7677 |
| low_path_title_overlap | 5441 |
| table_inconsistent_columns | 4034 |
| same_link_text_multiple_targets | 3896 |
| duplicate_h1_across_files | 3815 |
| image_empty_alt_text | 3621 |
| parameter_table_missing_expected_columns | 1296 |
| weak_link_text | 1273 |
| visual_dependency_phrase | 1221 |
| large_section | 430 |
| very_large_section | 153 |
| large_file | 76 |
| very_large_file | 73 |
| large_markdown_table | 31 |
| exact_duplicate_page_body | 26 |
| skipped_heading_level | 15 |
| generic_h1 | 14 |
| missing_h1 | 12 |
| image_generic_alt_text | 3 |

## Highest Issue Files

| File | Issues | Words | H1 | Links | Images |
|---|---:|---:|---|---:|---:|
| markdown/api-reference/rest-apis/change-management-api.md | 604 | 38035 | Change Management API | 214 | 0 |
| markdown/api-reference/rest-apis/scim-api.md | 453 | 28865 | System for Cross-domain Identity Management (SCIM) API | 119 | 0 |
| markdown/release-notes/australia-xanadu-combined-release-notes.md | 415 | 5766 | Combined product release notes for upgrades from Xanadu to Australia | 413 | 0 |
| markdown/release-notes/australia-yokohama-combined-release-notes.md | 415 | 5766 | Combined product release notes for upgrades from Yokohama to Australia | 413 | 0 |
| markdown/release-notes/australia-zurich-combined-release-notes.md | 415 | 5766 | Combined product release notes for upgrades from Zurich to Australia | 413 | 0 |
| markdown/api-reference/rest-apis/product-catalog-open-api.md | 389 | 29593 | Product Catalog Open API | 52 | 0 |
| markdown/api-reference/rest-apis/integrations-api.md | 385 | 30087 | Install Base Item API | 77 | 0 |
| markdown/api-reference/server-api-reference/ChangeSuccessScopedAPI.md | 372 | 20957 | ChangeSuccess- Scoped | 11 | 0 |
| markdown/api-reference/rest-apis/c_ServiceCatalogAPI.md | 311 | 18386 | Service Catalog API | 103 | 0 |
| markdown/api-reference/rest-apis/devops-api.md | 306 | 20852 | DevOps API | 98 | 2 |
| markdown/api-reference/server-api-reference/c_GlideRecordAPI.md | 298 | 19460 | GlideRecord- Global | 245 | 0 |
| markdown/api-reference/rest-apis/tmf622_product_ordering-api.md | 293 | 33986 | Product Order Open API | 53 | 1 |
| markdown/api-reference/rest-apis/cicd-api.md | 291 | 16749 | Continuous Integration/Continuous Delivery (CICD) API | 114 | 0 |
| markdown/api-reference/rest-apis/agnt_clnt_cll-api.md | 276 | 14737 | Agent Client Collector API | 114 | 0 |
| markdown/api-reference/rest-apis/applications-api.md | 275 | 18144 | CdmApplicationsApi | 130 | 7 |
| markdown/api-reference/rest-apis/c_IdentifyReconcileAPI.md | 269 | 19893 | Identification and Reconciliation API | 30 | 0 |
| markdown/api-reference/server-api-reference/c_GlideSystemAPI.md | 267 | 12995 | GlideSystem- Global | 60 | 0 |
| markdown/api-reference/server-api-reference/c_GlideDateTimeAPI.md | 241 | 10192 | GlideDateTime- Global | 63 | 0 |
| markdown/api-reference/rest-apis/ai-assets-api.md | 229 | 16959 | AI Assets API | 30 | 0 |
| markdown/api-reference/rest-apis/service-test-management-api.md | 210 | 18896 | Service Test Management Open API | 33 | 0 |
| markdown/api-reference/rest-apis/wsd_reservation-api.md | 209 | 19367 | WSD Reservation API | 50 | 0 |
| markdown/api-reference/rest-apis/sales_agreement-api.md | 181 | 22379 | Sales Agreement API | 8 | 0 |
| markdown/api-reference/rest-apis/ci-lifecycle-management-api.md | 181 | 7048 | CI Lifecycle Management API | 60 | 0 |
| markdown/api-reference/server-api-reference/DecisionTableAPI.md | 172 | 10755 | DecisionTableAPI - Scoped, Global | 11 | 0 |
| markdown/api-reference/rest-apis/servicecontract-api.md | 169 | 21711 | Service Contract API | 20 | 0 |

## Largest Files

| File | Words | Lines | Headings | H1 |
|---|---:|---:|---:|---|
| markdown/api-reference/index.md | 197789 | 6670 | 1 | Australia API Reference |
| markdown/employee-service-management/index.md | 173252 | 5331 | 1 | Australia Employee Service Management |
| markdown/servicenow-platform/index.md | 115031 | 3524 | 1 | Australia ServiceNow AI Platform Capabilities |
| markdown/security-management/index.md | 110791 | 3000 | 1 | Australia Security Management |
| markdown/it-operations-management/index.md | 107659 | 2918 | 1 | Australia IT Operations Management |
| markdown/it-service-management/index.md | 94652 | 2773 | 1 | Australia IT Service Management |
| markdown/integrate-applications/index.md | 91482 | 3021 | 1 | Australia Workflow Data Fabric |
| markdown/governance-risk-compliance/index.md | 89261 | 2306 | 1 | Australia Governance, Risk, and Compliance |
| markdown/platform-administration/index.md | 76174 | 2451 | 1 | Australia ServiceNow AI Platform Administration |
| markdown/customer-service-management/index.md | 72244 | 2193 | 1 | Australia Customer Service Management |
| markdown/it-business-management/index.md | 69978 | 2082 | 1 | Australia Strategic Portfolio Management |
| markdown/it-asset-management/index.md | 60381 | 1746 | 1 | Australia IT Asset Management |
| markdown/application-development/index.md | 57011 | 1920 | 1 | Australia Build or modify applications |
| markdown/platform-security/index.md | 53673 | 1809 | 1 | Australia Platform security |
| markdown/release-notes/rn-summary-new-features.md | 49363 | 6199 | 1 | New features and products in Australia |
| markdown/now-intelligence/index.md | 48026 | 1471 | 1 | Australia Platform Analytics |
| markdown/source-to-pay-operations/index.md | 47447 | 1542 | 1 | Australia Finance and Supply Chain |
| markdown/api-reference/rest-apis/change-management-api.md | 38035 | 15153 | 242 | Change Management API |
| markdown/platform-user-interface/index.md | 34919 | 1094 | 1 | Australia ServiceNow AI Platform user interface |
| markdown/order-management/index.md | 34714 | 1162 | 1 | Australia Sales Customer Relationship Management |
| markdown/api-reference/rest-apis/case-api.md | 34668 | 17548 | 39 | Case API |
| markdown/field-service-management/index.md | 34312 | 1072 | 1 | Australia Field Service Management |
| markdown/api-reference/rest-apis/tmf622_product_ordering-api.md | 33986 | 14776 | 39 | Product Order Open API |
| markdown/platform-administration/r_AvailableSystemProperties.md | 32373 | 4762 | 9 | Available system properties |
| markdown/conversational-interfaces/index.md | 31545 | 913 | 1 | Australia Conversational Interfaces |

## Page Identity Samples

| Severity | Issue | Source | Line | Heading | Detail |
|---|---|---|---:|---|---|
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-config-cust-success.md |  | customer success | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-configure.md |  | account onboarding | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-create-engage.md |  | create an engagement | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-cust-success-related-items.md |  | view related items | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-events-customer-success-about.md |  | customer success | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-events-landing.md |  | customer success management | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-manage-engagement.md |  | manage engagements | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-playbook-overview.md |  | account onboarding | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-related-items.md |  | view related items | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-use-cust-success.md |  | customer success | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/acct-lifecycle-events/account-lifecycle-use.md |  | account onboarding | H1 appears in 3 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/business-rules-classic/c_BusinessRules.md |  | classic business rules | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-add-default-push-reg.md |  | add a default push registration | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-add-push-app.md |  | add a push application record | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-add-push-msg-content.md |  | add a push notification message content record | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-add-push-notif-msg.md |  | add a push notification message | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-config_results_returned.md |  | configure return results data | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-config-certificate.md |  | configure certificate and create an oauth entity | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-config-guest-access.md |  | configure guest user access | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-config-project.md |  | configure your project | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-display-web-pages.md |  | display web pages hosted on your servicenow instance | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-imp-chat.md |  | implement virtual and live agent chat | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-init-nowsdk-in-app.md |  | initialize the nowsdk in your application | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-install_config-sdk_plugin.md |  | install and configure the mobile sdk scoped application | H1 appears in 2 files. |
| P2 | duplicate_h1_across_files | markdown/api-reference/developer-guides/mobsdk-and-interact_data_instance.md |  | interact with table data in a servicenow instance | H1 appears in 2 files. |

## Markdown Validity Samples

| Severity | Issue | Source | Line | Detail |
|---|---|---|---:|---|
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 134 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 258 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 415 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 629 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 901 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 1764 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 1802 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 1882 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2109 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2355 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2405 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2495 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2549 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2603 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2660 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2731 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2817 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2875 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2927 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 2997 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 3079 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideFormAPI.md | 3167 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideList2API.md | 294 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideList2API.md | 450 | Table row has 2 cells; header has 3. |
| P2 | table_inconsistent_columns | markdown/api-reference/c_GlideList2API.md | 512 | Table row has 2 cells; header has 3. |

## Weak Link Text Samples

| Source | Line | Detail |
|---|---:|---|
| markdown/api-reference/web-services/r_LclDtaStorePullDta.md | 23 | Link text "here" points to http://www.servicenowguru.com/integration/exporting-report-ftp/. |
| markdown/application-development/index.md | 1328 | Link text "page" points to ui-builder/ui-builder-glossary.md. |
| markdown/application-development/ui-builder/ui-builder-overview.md | 20 | Link text "page" points to ui-builder-glossary.md#. |
| markdown/application-development/ui-builder/uib-tutorial.md | 22 | Link text "page" points to ui-builder-glossary.md#. |
| markdown/application-development/ui-builder/work-events.md | 20 | Link text "page" points to ui-builder-glossary.md#. |
| markdown/conversational-interfaces/virtual-agent/conversation-designer-virtual-agent.md | 106 | Link text "topic" points to create-virtual-agent-topic.md. |
| markdown/employee-service-management/workplace-concierge/add-a-collaborator.md | 26 | Link text "here" points to set-in-office-days.md#choicetable_presence_dashboard. |
| markdown/employee-service-management/workplace-concierge/manage-presence-privacy-settings.md | 47 | Link text "here" points to set-in-office-days.md#choicetable_presence_dashboard. |
| markdown/employee-service-management/workplace-concierge/remove-a-collaborator.md | 26 | Link text "here" points to set-in-office-days.md#choicetable_presence_dashboard. |
| markdown/employee-service-management/workplace-concierge/update-in-office-days-exceptions.md | 26 | Link text "here" points to set-in-office-days.md#choicetable_presence_dashboard. |
| markdown/employee-service-management/workplace-concierge/update-your-in-office-days.md | 26 | Link text "here" points to set-in-office-days.md#choicetable_presence_dashboard. |
| markdown/glossary/index.md | 505 | Link text "page" points to now-platform-glossary.md. |
| markdown/glossary/index.md | 732 | Link text "topic" points to now-platform-glossary.md. |
| markdown/intelligent-experiences/index.md | 338 | Link text "topic" points to now-assist-center-glossary.md. |
| markdown/intelligent-experiences/predictive-intelligence/configure-hdbscan-clustering-solution.md | 29 | Link text "this article" points to https://hdbscan.readthedocs.io/en/latest/how_hdbscan_works.html. |
| markdown/intelligent-experiences/predictive-intelligence/configure-hdbscan-clustering-solution.md | 29 | Link text "this article" points to https://hdbscan.readthedocs.io/en/latest/comparing_clustering_algorithms.html#dbscan. |
| markdown/intelligent-experiences/predictive-intelligence/configure-hdbscan-clustering-solution.md | 29 | Link text "this article" points to https://hdbscan.readthedocs.io/en/latest/comparing_clustering_algorithms.html#hdbscan. |
| markdown/order-management/how_to_hide_the_setfield_grid_index.md | 38 | Link text "Link" points to https://docs.google.com/spreadsheets/d/13tWln8PHc6ITf8_gheuML_CCO-IuFLIps8-jOZNIsPw/edit?usp=sharing. |
| markdown/order-management/how_to_hide_the_setfield_grid_index.md | 44 | Link text "Link" points to https://docs.google.com/spreadsheets/d/1Kt7lISg87_aNTOrKcKLbJ4ObKeROcGqOOT8vPVx00Vc/edit?usp=sharing. |
| markdown/order-management/installation-and-setup-guide-for-environments-linked-to-salesforce-org.md | 85 | Link text "here" points to https://test.salesforce.com/packaging/installPackage.apexp?p0=04tDm000000cYuyIAE. |
| markdown/order-management/installation-and-setup-guide-for-environments-linked-to-salesforce-org.md | 86 | Link text "here" points to https://login.salesforce.com/packaging/installPackage.apexp?p0=04tDm000000cYuyIAE. |
| markdown/order-management/installation-and-setup-guide-for-environments-linked-to-salesforce-org.md | 91 | Link text "here" points to https://test.salesforce.com/packaging/installPackage.apexp?p0=04tDm000000cYvDIAU. |
| markdown/order-management/installation-and-setup-guide-for-environments-linked-to-salesforce-org.md | 92 | Link text "here" points to https://login.salesforce.com/packaging/installPackage.apexp?p0=04tDm000000cYvDIAU. |
| markdown/order-management/transaction-manager-integration-get.md | 71 | Link text "here" points to https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_graph.htm. |
| markdown/order-management/transaction-manager-integration-post.md | 111 | Link text "here" points to https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_graph.htm. |

## Recommended Next Fixes

1. Fix any `P1` parser-breaking findings first, especially unclosed fences.
2. Triage `P2` chunkability findings, especially very large files and sections.
3. Improve missing, duplicate, and generic H1s because they directly affect retrieval labels.
4. Replace weak link text with destination-specific labels.
5. Add prose summaries before large tables and image-dependent procedures.
6. Keep `llms.txt` target integrity clean, but do not treat product-index coverage as a defect by itself.

## Output Files

- analysis/markdown-quality/llm-readability-report.md
- analysis/markdown-quality/llm-readability-issues.csv
- analysis/markdown-quality/llm-readability-page-metrics.csv
