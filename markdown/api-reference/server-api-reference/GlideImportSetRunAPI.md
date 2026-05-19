---
title: GlideImportSetRun - Scoped, Global
description: The GlideImportSetRun API provides methods to creates an Import Set Run record which the GlideImportSetTransformer API can consume.Instantiates a GlideImportSetRun object.Gets the sys\_id of the Import Set Run associated with the transformation.
locale: en-US
release: australia
product: Server API Reference
classification: server-api-reference
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Server API reference, API reference, API implementation and reference]
---

# GlideImportSetRun - Scoped, Global

The GlideImportSetRun API provides methods to creates an Import Set Run record which the GlideImportSetTransformer API can consume.

See also:

-   [Import sets](https://raw.githubusercontent.com/ServiceNow/ServiceNowDocs/australia/markdown/integrate-applications/system-import-sets/import-sets-landing-page.md)
-   [Import Set API](../rest-apis/c_ImportSetAPI.md#)

**Parent Topic:**[Server API reference](api-server.md)

**Related topics**  


[GlideImportLog](GlideImportLogAPI.md#)

[GlideImportSetTable](GlideImportSetTableAPI.md#)

[GlideImportSetTransformer](GlideImportSetTransformerAPI.md#)

[GlideImportSetTransformMap](GlideImportSetTransformMapAPI.md#)

[GlideTransformLog](GlideTransformLogAPI.md#)

## GlideImportSetRun - GlideImportSetRun\(String importSetID\)

Instantiates a GlideImportSetRun object.

|Name|Type|Description|
|----|----|-----------|
|importSetID|String|Optional. The sys\_id of the import set record listed in the Import Sets \[sys\_import\_set\] table. If not set, a new \[sys\_import\_set\] record is created and the GlideImportSetRun object represents this record.|

```
var importSetRun = new GlideImportSetRun();
```

## GlideImportSetRun - getImportSetRunSysID\(\)

Gets the sys\_id of the Import Set Run associated with the transformation.

|Name|Type|Description|
|----|----|-----------|
|None| | |

|Type|Description|
|----|-----------|
|String|The sys\_id of the Transform Histories \[sys\_import\_set\_run\] record associated with the transform.|

```
var importSetRun = new GlideImportSetRun();
var importSetRunSysId = importSetRun.getImportSetRunSysID();

```

