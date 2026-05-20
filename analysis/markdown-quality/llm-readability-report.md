# LLM Readability Report

Generated: 2026-05-20T02:33:31.141Z

Repository: /Volumes/Samsung/ServiceNowDocs-official

## Scope

- Scans source Markdown files outside generated analysis artifacts.
- Focuses on patterns that reduce LLM retrieval, grounding, summarization, or citation quality.
- Reports mechanical findings only; some low-severity findings require human judgment before editing.

## Summary

- Markdown files scanned: 46032
- Issues found: 118611
- Files with at least one issue: 46023
- Files indexed by llms.txt: 51
- llms.txt missing targets: 1
- llms.txt duplicate targets: 0

Note: `llms.txt` coverage findings are reported as P3 because a curated index may intentionally omit many source files.

### By Severity

| Severity | Count |
|---|---:|
| P3 | 97649 |
| P2 | 20590 |
| P1 | 372 |

### By Category

| Category | Count |
|---|---:|
| navigation-index | 45981 |
| chunkability | 24100 |
| markdown-validity | 20546 |
| page-identity | 9282 |
| heading-structure | 7409 |
| link-text-quality | 5131 |
| image-context | 4840 |
| code-api-readability | 1296 |
| duplication | 26 |

### By Issue Type

| Issue | Count |
|---|---:|
| markdown_file_absent_from_llms_txt | 45980 |
| html_table | 23318 |
| code_fence_missing_language | 16503 |
| duplicate_heading_anchor | 7394 |
| low_path_title_overlap | 5441 |
| table_inconsistent_columns | 3911 |
| same_link_text_multiple_targets | 3858 |
| duplicate_h1_across_files | 3815 |
| image_empty_alt_text | 3620 |
| parameter_table_missing_expected_columns | 1296 |
| weak_link_text | 1273 |
| visual_dependency_phrase | 1217 |
| large_section | 435 |
| very_large_section | 167 |
| unclosed_code_fence | 132 |
| large_file | 76 |
| very_large_file | 73 |
| large_markdown_table | 31 |
| exact_duplicate_page_body | 26 |
| skipped_heading_level | 15 |
| generic_h1 | 14 |
| missing_h1 | 12 |
| image_generic_alt_text | 3 |
| llms_target_missing_file | 1 |

## Highest Issue Files

| File | Issues | Words | H1 | Links | Images |
|---|---:|---:|---|---:|---:|
| markdown/api-reference/rest-apis/change-management-api.md | 500 | 38035 | Change Management API | 163 | 0 |
| markdown/api-reference/rest-apis/scim-api.md | 454 | 28865 | System for Cross-domain Identity Management (SCIM) API | 119 | 0 |
| markdown/release-notes/australia-xanadu-combined-release-notes.md | 416 | 5766 | Combined product release notes for upgrades from Xanadu to Australia | 413 | 0 |
| markdown/release-notes/australia-yokohama-combined-release-notes.md | 416 | 5766 | Combined product release notes for upgrades from Yokohama to Australia | 413 | 0 |
| markdown/release-notes/australia-zurich-combined-release-notes.md | 416 | 5766 | Combined product release notes for upgrades from Zurich to Australia | 413 | 0 |
| markdown/api-reference/rest-apis/product-catalog-open-api.md | 390 | 29593 | Product Catalog Open API | 52 | 0 |
| markdown/api-reference/rest-apis/integrations-api.md | 386 | 30087 | Install Base Item API | 77 | 0 |
| markdown/api-reference/server-api-reference/ChangeSuccessScopedAPI.md | 354 | 20957 | ChangeSuccess- Scoped | 8 | 0 |
| markdown/api-reference/rest-apis/c_ServiceCatalogAPI.md | 312 | 18386 | Service Catalog API | 103 | 0 |
| markdown/api-reference/rest-apis/devops-api.md | 307 | 20852 | DevOps API | 98 | 2 |
| markdown/api-reference/server-api-reference/c_GlideRecordAPI.md | 299 | 19460 | GlideRecord- Global | 245 | 0 |
| markdown/api-reference/rest-apis/tmf622_product_ordering-api.md | 294 | 33986 | Product Order Open API | 53 | 1 |
| markdown/api-reference/rest-apis/cicd-api.md | 292 | 16749 | Continuous Integration/Continuous Delivery (CICD) API | 114 | 0 |
| markdown/api-reference/rest-apis/applications-api.md | 276 | 18144 | CdmApplicationsApi | 130 | 7 |
| markdown/api-reference/rest-apis/c_IdentifyReconcileAPI.md | 270 | 19893 | Identification and Reconciliation API | 30 | 0 |
| markdown/api-reference/server-api-reference/c_GlideSystemAPI.md | 268 | 12995 | GlideSystem- Global | 60 | 0 |
| markdown/api-reference/server-api-reference/c_GlideDateTimeAPI.md | 242 | 10192 | GlideDateTime- Global | 63 | 0 |
| markdown/api-reference/rest-apis/service-test-management-api.md | 211 | 18896 | Service Test Management Open API | 33 | 0 |
| markdown/api-reference/rest-apis/wsd_reservation-api.md | 210 | 19367 | WSD Reservation API | 50 | 0 |
| markdown/api-reference/rest-apis/ai-assets-api.md | 205 | 16959 | AI Assets API | 24 | 0 |
| markdown/api-reference/rest-apis/agnt_clnt_cll-api.md | 184 | 14737 | Agent Client Collector API | 70 | 0 |
| markdown/api-reference/rest-apis/sales_agreement-api.md | 182 | 22379 | Sales Agreement API | 8 | 0 |
| markdown/api-reference/rest-apis/ci-lifecycle-management-api.md | 182 | 7048 | CI Lifecycle Management API | 60 | 0 |
| markdown/api-reference/rest-apis/servicecontract-api.md | 170 | 21711 | Service Contract API | 20 | 0 |
| markdown/api-reference/rest-apis/tmf-party-management-open-api.md | 170 | 14383 | Party Management Open API | 20 | 0 |

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
| markdown/api-reference/rest-apis/change-management-api.md | 38035 | 15142 | 188 | Change Management API |
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
| P1 | unclosed_code_fence | markdown/api-reference/c_Notify2WebRTCClient.md | 639 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/cllent-mobile-api-reference/cabrillo-attachments-namespace.md | 286 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/cllent-mobile-api-reference/cabrillo-viewLayout-namespace.md | 395 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/cllent-mobile-api-reference/NowAnalyticsServiceiOSProtocol.md | 581 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/cllent-mobile-api-reference/NowSDKConfigurationiOSAPI.md | 156 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/developer-guides/mobsdk-and-add-push-msg-content.md | 86 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/developer-guides/mobsdk-ios-add-push-msg-content.md | 86 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/GlideAgentWorkspaceAPI.md | 517 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/ap-invoice-api.md | 4572 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/cloudrunner-testgeneration-api.md | 733 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/cloudrunner-testrunner-api.md | 594 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/cloudrunner-testuser-api.md | 864 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/digital-product-release-api.md | 2987 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/knowledge-api.md | 2085 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/sales_crm_pricing-POST-compute-price.md | 5125 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/sg_services-api.md | 2145 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/voice-interaction-resource-api.md | 1320 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/wsd_presence-api.md | 2602 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/rest-apis/wsd_reservable_module-api.md | 1540 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/AccCheckDefsAPIAPIScoped.md | 1197 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/c_CartJSScoped.md | 995 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/c_CatItem.md | 1106 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/CIActionScopedAPI.md | 225 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/ClassificationSolutionStoreAPI.md | 248 | A fenced code block is opened but not closed before end of file. |
| P1 | unclosed_code_fence | markdown/api-reference/server-api-reference/cloudrnr-TestGenerationAPI-scoped.md | 328 | A fenced code block is opened but not closed before end of file. |

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

1. Fix `P1` Markdown validity and chunkability findings first, especially unclosed fences and very large sections.
2. Improve missing, duplicate, and generic H1s because they directly affect retrieval labels.
3. Replace weak link text with destination-specific labels.
4. Add prose summaries before large tables and image-dependent procedures.
5. Review files absent from `llms.txt` and decide whether they should be indexed.

## Output Files

- analysis/markdown-quality/llm-readability-report.md
- analysis/markdown-quality/llm-readability-issues.csv
- analysis/markdown-quality/llm-readability-page-metrics.csv
