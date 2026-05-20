---
title: Developer resources
description: Developers can use JavaScript or REST APIs to insert and retrieve time-series data from the MetricBase database and to run transforms on the data. The transformations enable you to visualize time-series data in a variety of ways.
locale: en-US
release: australia
product: MetricBase
classification: metricbase
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Reference, MetricBase, Manage instance data sources, Extend ServiceNow AI Platform capabilities]
---

# Developer resources

Developers can use JavaScript or REST APIs to insert and retrieve time-series data from the MetricBase database and to run transforms on the data. The transformations enable you to visualize time-series data in a variety of ways.

## REST APIs

For information about the MetricBase REST APIs that return time-series data from the MetricBase database, see [MetricBase Time Series API](../../api-reference/rest-apis/Clotho-Time-Series-API.md).

## JavaScript APIs

For information about the MetricBase JavaScript APIs that return time-series data from the MetricBase database, see:

-   [Client](../../api-reference/server-api-reference/ClientScopedAPI.md) — Execute transforms on the MetricBase database and receive the results.
-   [Data](../../api-reference/server-api-reference/DataScopedAPI.md) — Return the object that contains the result of a transform.
-   [DataBuilder](../../api-reference/server-api-reference/DataBuilderScopedAPI.md) — Create a series of data points for a metric.
-   [Transformer](../../api-reference/server-api-reference/TransformerScopedAPI.md) — Manipulate time-series data to prepare the data for evaluation and analysis.
-   [TransformPart](../../api-reference/server-api-reference/TransformPartScopedAPI.md) — Specify details of the transform to be done.
-   [TransformResult](../../api-reference/server-api-reference/TransformResultScopedAPI.md) — Return the object that contains the result of the transformation.

## Transformations

For more information about MetricBase time-series data transformations, see [MetricBase transforms](../../now-intelligence/reporting/metricbase-transforms.md).

## Data Explorer

Experiment and get familiar with the JavaScript APIs by using the [MetricBase Data Explorer](metricbase-data-explorer.md) that comes with the MetricBase Demo.

**Parent Topic:**[MetricBase reference](reference-metricbase.md)

**Related topics**  


[Domain separation and MetricBase](domain-separation-metricbase.md)

[MetricBase roles](metricbase-roles.md#)

