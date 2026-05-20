---
title: System logs
description: The System Logs module provides a variety of logs that you can use to troubleshoot and debug transactions and events that take place within the instance.
locale: en-US
release: australia
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Logs, Platform Security]
---

# System logs

The System Logs module provides a variety of logs that you can use to troubleshoot and debug transactions and events that take place within the instance.

Access the following logs from the System Logs module:

|Log|Description|
|---|-----------|
|[Transactions](r_TransactionLogs.md)|All application activity for an instance.|
|[Email](r_EmailLogs.md) and [Push](push-log.md)|All email notifications and Push messages sent from all instances within the system.|
|[Event Logs](../platform-administration/system-events/event-logs-2.md)|All system events that occur within the system.|
|[Import](r_ImportLogs.md)|Data import activity within the platform.|
|Table Changes|Changes made to all tables in the system.|
|[Outbound web services logging](../api-reference/web-services/outbound-request-logging.md)|All outbound web services requests such as REST and SOAP requests.|
|[System](r_SystemLogs.md)|Warnings and errors for instance processes, records, and non-critical events, such as memory usage on the server machine.|

Use the [Log File Browser](r_LogUtilities.md) to search and download logs. You can also search archived logs in the [log history](r_LogHistory.md).

## Other logs

Your instance offers other logs in addition to those in the System Logs module. For example, the [System Diagnostics module](c_SystemDiagnosticsApplication.md) provides upgrade history and slow query logs, which you can use to gain insight into how queries are affecting platform performance. The [Customer Updates table](r_CustomerUpdatesTable.md) records every change that is made in the system.

