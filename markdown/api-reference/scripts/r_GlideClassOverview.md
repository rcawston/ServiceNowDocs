---
title: Glide class overview
description: The ServiceNow Glide classes expose JavaScript APIs that enable you to conveniently work with tables using scripts.
locale: en-US
release: australia
product: Scripts
classification: scripts
topic_type: reference
last_updated: "2026-03-12"
reading_time_minutes: 2
breadcrumb: [Scripting, API implementation, API implementation and reference]
---

# Glide class overview

The ServiceNow Glide classes expose JavaScript APIs that enable you to conveniently work with tables using scripts.

Using the Glide APIs, you can perform database operations without writing SQL queries, display UI pages, and define UI actions. The following tables provide brief descriptions of the Glide classes and links to detailed information.

|Class|Description|
|-----|-----------|
|GlideRecord|Use this class for database operations instead of writing SQL queries. GlideRecord is a special Java class that can be used in JavaScript exactly as if it were a native JavaScript class. A GlideRecord is an object that contains records from a single table. See [GlideRecord](../server-api-reference/c_GlideRecordScopedAPI.md#).|
|GlideElement|Use this class to operate on the fields of the current GlideRecord. See [GlideElement](../server-api-reference/c_GlideElementScopedAPI.md#).|
|GlideSystem|Use this class to get information about the system. See [GlideSystem](../server-api-reference/c_GlideSystemScopedAPI.md#).|
|GlideAggregate|Use this class to perform database aggregation queries, such COUNT, SUM, MIN, MAX, and AVG, for creating customized reports or calculations in calculated fields. See [GlideAggregate](../server-api-reference/c_GlideAggregateScopedAPI.md#).|
|GlideDateTime|Use this class to perform date-time operations, such as date-time calculations, formatting a date-time, or converting between date-time formats. See [GlideDateTime](../server-api-reference/c_GlideDateTimeScoped.md#).|

|Class|Description|
|-----|-----------|
|GlideAjax|Use this class to execute server-side code from the client. See [GlideAjax](../c_GlideAjaxAPI.md#).|
|GlideDialogWindow|Use this class to display a dialog window. See [GlideDialogWindow](../c_GlideDialogWindowAPI.md#).|
|GlideForm|Use this class to customize forms. See [GlideForm](../c_GlideFormAPI.md#).|
|GlideList2|Use this class to customize \(v2\) lists, including normal lists and related lists. See [GlideList2](../c_GlideList2API.md#).|
|GlideMenu|Use this class to customize UI Context Menu items. See [GlideMenu](../c_GlideMenuAPI.md#).|
|GlideUser|Use this class to get session information about the current user and current user roles. See [GlideUser](../c_GlideUserAPI.md#).|

-   **[Glide stack](r_GlideStack.md)**  
Glide is an extensible Web 2.0 development platform written in Java that facilitates rapid development of forms-based workflow applications \(work orders, trouble ticketing, and project management, for example\).

**Parent Topic:**[Scripting](c_Script.md)

