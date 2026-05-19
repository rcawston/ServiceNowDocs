---
title: GlideScriptableInputStream - Scoped, Global
description: A GlideScriptableInputStream object cannot be instantiated directly, but is used as an opaque object which is used to connect an input stream from GlideSysAttachment.getContentStream\(\) with other streaming APIs.
locale: en-US
release: australia
product: Server API Reference
classification: server-api-reference
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Server API reference, API reference, API implementation and reference]
---

# GlideScriptableInputStream - Scoped, Global

A GlideScriptableInputStream object cannot be instantiated directly, but is used as an opaque object which is used to connect an input stream from GlideSysAttachment.getContentStream\(\) with other streaming APIs.

The public APIs that can consume this input stream include:

-   [GlideDigest](c_GlideDigestScopedAPI.md#)
-   [GlideExcelParser](GlideExcelParserScopedAPI.md#)
-   [GlideTextReader](c_GlideTextReaderScopedAPI.md#)
-   [XMLDocument2](c_XMLDocument2ScopedAPI.md#)

**Parent Topic:**[Server API reference](api-server.md)

