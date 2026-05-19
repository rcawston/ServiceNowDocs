---
title: Activate a scheduled job
description: Activate and run the Add Manager Hub user role scheduled job to assign the Manager Hub user role to new people managers. When the scheduled job runs, it considers delta changes and assigns the Manager Hub user role to new managers only.
locale: en-US
release: australia
product: HR Service Delivery
classification: hr-service-delivery
topic_type: task
last_updated: "2026-03-12"
reading_time_minutes: 2
breadcrumb: [Configure, Manager Hub, HR Service Delivery, Employee Service Management]
---

# Activate a scheduled job

Activate and run the Add Manager Hub user role scheduled job to assign the Manager Hub user role to new people managers. When the scheduled job runs, it considers delta changes and assigns the Manager Hub user role to new managers only.

## Before you begin

-   Role required: admin
-   An administrator must review the criteria before assigning the Manager Hub user role to managers. Default criteria: The manager field of sys\_user table is considered for assigning the Manager Hub user role.

## Procedure

1.  Navigate to **All** &gt; **System Definition** &gt; **Scheduled jobs**.

2.  Open the Add Manager Hub user role scheduled job.

3.  Set up the time and schedule at which you want to run the scheduled job.

4.  Enable the **Active** check box.

5.  Click **Update**.


**Parent Topic:**[Configure Manager Hub](set-up-managerhub.md)

**Related topics**  


[RCA approvals for Manager Hub](run-rca-mh.md)

[Configure important dates](configure-imp-dates.md)

[Configure team requests](configure-team-requests.md)

[Configure team data](configure-team-data.md)

[Configure team column data](configure-team-columndata.md)

[Configure team filters](configure-team-filter.md)

[Set up View as Direct Reports](view-direct-reportee.md)

[Configure daily stats](configure-daily-stats.md)

[Configure to do mappings](use-to-do-map.md)

[Configure widgets](configure-team-insights.md)

