---
title: Monitor DLP Integration Run process
description: Track and monitor the ongoing ingestion or the integration run process. The integration run processes contains the statistics on how much the data was processed and the integration status.
locale: en-US
release: australia
product: Data Loss Prevention
classification: data-loss-prevention
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 4
breadcrumb: [Administer, Data Loss Prevention Incident Response, Security Operations]
---

# Monitor DLP Integration Run process

Track and monitor the ongoing ingestion or the integration run process. The integration run processes contains the statistics on how much the data was processed and the integration status.

Role required: sn\_dlir.admin.

The integration run process lists the details on how many records are ingested. For example:

1.  In Symantec integration, the process contains both child and parent integration runs. The parent record indicates the ingestion data and child record indicates the enrichment calls and custom attribute records.
2.  In Microsoft integration, there is only parent record ingestion process to be run.

**DLP Integration Run Processes**: This displays the queue entries, status of queue entries, and fetched records.

The integration run contains the Source for which the integration profile and the integration run record is created, profile polling intervals, ingestion states and substates, incident count which indicates the number of records that are ingested.

1.  Navigate to **DLP Administration** &gt; **Integration Runs**.
2.  Select the integration run from the list.
3.  Navigate to the **DLP Integration Run Process**.
4.  View the queue entry status of the record.

**Parent Topic:**[DLP Incident Response Administration](data-loss-prevention-administration.md)

**Related topics**  


[DLP default configuration settings](configure-data-loss-prevention.md)

[Create end user lookup rules](configure-enduser-lookup-rules.md)

[Create assignment rules](create-assignment-rules.md)

[Create incident consolidation rules](configure-incident-consolidation-rules-to-consolidate-your-dlp-incidents.md)

[Create response due date rules](setup-response-due-date-rules.md)

[Create Approval Rules](configure-approval-rules.md)

[Create user instructions templates](create-and-manage-user-instructions-template-for-dlp-incidents.md)

[Create email templates](create-and-manage-email-templates.md)

[Create a Data Loss Prevention Incident Response SLA trigger](sla-records.md)

[Create a Data Loss Prevention Incident Response SLA definition](dlp-sla-definitions.md)

[Create assessments](create-and-manage-assessments-for-dlp-incidents.md)

[Configure response option for your DLP incidents](configure-response-option-mapping.md)

[Create incident response option rules](configure-end-user-action.md)

[Create age chart configurations](configure-age-chart.md)

[Create user delegate configurations](configure-delegation.md)

[Create repeat offender identification rules](repeat-offender-identification-rules.md)

[Create additional incident data fields](create-custom-fields-dlp.md)

[DLP SLA Definition form](dlp-sla-def-properties.md)

[Configure advanced settings](configure-advanced-settings-dlp.md)

[DLP Incident Access Restrictions](dlp-incident-access-restrictions.md)

[DLP Incidents Archival](dlp-archiving-rule.md)

