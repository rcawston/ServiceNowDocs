---
title: Working with Technology Portfolio Management \(TPM\) in EA Workspace
description: Technology Portfolio Management provide visibility, governance, and actionable insights into the technologies used across the enterprise.
locale: en-US
release: australia
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 2
breadcrumb: [Managing Enterprise Architecture Workspace, Enterprise Architecture Workspace, Enterprise Architecture]
---

# Working with Technology Portfolio Management \(TPM\) in EA Workspace

Technology Portfolio Management provide visibility, governance, and actionable insights into the technologies used across the enterprise.

You can zoom on this page to 200% or 400% through your browser settings without the loss of content or functionality. Page layouts are transformed into a vertical, stacked view automatically.

-   **[Filter software results using an encoded query in TPM](use-tpm-encoded-query.md)**  
Filter out unwanted software products and reduce the number of results to skip unwanted software and their lifecycles to be shown in the **Lifecycle Timeline** view of a business application. By default, the TPM picks licensable software. Use this encoded query when you want TPM to include other software \(non-licensable\) and filter the result.
-   **[Update TPM data for a business application or application service](update-tpm-data.md)**  
Manually update the Technology Portfolio Management \(TPM\) lifecycle data including end of support date, end of extended support date, and end of life date for your software and hardware models for your business applications and application services.
-   **[Restart Populate TPM Discovered Technologies and Lifecycles scheduled job](eaw-restart-tpm-scheduled-job.md)**  
You can restart the **TPM Discovered Technologies and Lifecycles** job if it encounters any interruptions or failures.
-   **[View technology lifecycle details](eaw-view-tech-lifecycle.md)**  
You can view the Technology Portfolio Management \(TPM\) lifecycle timelines in Enterprise Architecture Workspace, to track the different phases of a product’s lifecycle, such as end of support, end of extended support, and end of life.
-   **[View TPM risk details](eaw-view-tech-risk.md)**  
View all the Technology Portfolio Management \(TPM\) risk data for software products that are facing high and moderate technology risks.
-   **[Update the system property to gather software products from a CMDB table](eaw-update-system-property-gather-software-cmdb.md)**  
You can optionally customize the default values of the **sn\_apm\_tpm.configurationItemsWithSoftwareInstalls** system property, to capture the details of Technology Portfolio Management \(TPM\) software products that aren’t stored in the default CMDB tables, Computer \(CMDB\_CI\_Computer\) and all similar instances of the table, Docker Container \(CMDB\_CI\_Docker\_Container\), and Serverless Hardwares \(CMDB\_CI\_Serverless\_Hardware\).
-   **[View technology portfolio audit risk details](eaw-view-audit-risk-details.md)**  
You can view all your technology portfolio details in the Enterprise Architecture Workspace.
-   **[View TPM logs](eaw-view-tpm-logs.md)**  
Track the progress of Technology Portfolio Management \(TPM\) analysis by examining the TPM Discovered Technology Run Logs \[sn\_apm\_tpm\_discovered\_technology\_run\_log\] table. Each time the analysis is run, an entry is added to this table.
-   **[Run a scheduled job to populate Technology Portfolio Management lifecycle record identifier](eaw-run-job-to-populate-tpm-lifecycle-identifier.md)**  
Run the Populate Number field in TPM Discovered Technologies job to populate missing Technology Portfolio Management \(TPM\) lifecycle record identifiers.
-   **[Run a scheduled job to generate TPM lifecycle data](eaw-run-scheduled-job-update-tpm-data.md)**  
Run a scheduled job to fetch the technology lifecycle data for your technology portfolio.
-   **[Schedule a job to generate TPM technology risk](eaw-schedule-job-generate-tpm-risk.md)**  
Execute the  **Populate Technology Lifecycle Risks** scheduled job to generate the TPM technology lifecycle risks and populate the result in the TPM Technology Lifecycle Risks \[sn\_apm\_tpm\_technology\_risk\] table.

**Parent Topic:**[Managing Enterprise Architecture Workspace](eaw-managing-ea-workspace.md)

