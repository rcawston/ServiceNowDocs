---
title: API Service Graph Connector for Kong Konnect
description: Use the ServiceNow API Service Graph Connector for Kong Konnect to import API details from a Kong Konnect service into the Configuration Management Database \(CMDB\).
locale: en-US
release: australia
product: Configuration Management Database \(CMDB\)
classification: configuration-management-database-cmdb
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 3
breadcrumb: [API Service Graph Connectors, Integrating third-party data into CMDB, Configuration Management, Extend ServiceNow AI Platform capabilities]
---

# API Service Graph Connector for Kong Konnect

Use the ServiceNow® API Service Graph Connector for Kong Konnect to import API details from a Kong Konnect service into the Configuration Management Database \(CMDB\).

## Request apps on the Store

Visit the [ServiceNow Store](https://store.servicenow.com/sn_appstore_store.do#!/store/home) to view all the available apps, and for information about submitting requests to the store. For cumulative release notes information for all released apps, see the [ServiceNow Store version history release notes](https://docs.servicenow.com/bundle/store-release-notes/page/release-notes/store/sn-store-release-notes.html).

## Key features

Import data into a normalized data model for consistency across other technologies.

The API Insights workspace provides a centralized interface where you can analyze and interact with API data, without needing direct access to Kong Konnect, enhancing visibility, governance, and collaboration across the API estate. To learn more, see [API Insights](../api-insights/api-insights.md).

## Supported ServiceNow versions

-   Xanadu
-   Yokohama
-   Zurich

## Use cases

You can use the API Service Graph Connector for Kong Konnect to:

-   Maintain an end-to-end inventory of defined APIs, identifying what APIs are published, used, and by whom.
-   Track APIs from customer-facing endpoints to the underlying services, identifying impacted endpoints when services change or fail and creating incidents for reported issues.
-   Address vulnerabilities and security incidents related to API endpoints and create compliance requirements to measure against.

## Configuring a connection for the connector

You can configure a connection for the connector by using the SGC Central view in the CMDB Workspace. The view enables you to discover and install connectors, and then effectively manage the full life cycle of creating, editing, monitoring, and debugging connections. To configure the connector using SGC Central, see [Configure API Service Graph Connector for Kong Konnect using SGC Central](sgcc-configure-kong-konnect.md).

## Data mapping

Data from the Kong Konnect data sources is mapped and transformed into the CMDB Configuration Item \(CI\) class definitions using the Robust Transform Engine \(RTE\). Data is inserted into the CMDB using the Identification and Reconciliation Engine \(IRE\).

When you complete setting up the connection, you can configure the integration to periodically pull data from a Kong Konnect service.

The following table lists the data sources in the order they run, the staging tables, and the target tables as CMDB CI classes and non-CMDB tables for a Kong Konnect service.

<table id="table_wfw_1pl_pgc" class="custom-rows"><thead><tr><th class="filter">

Data source

</th><th>

Staging table

</th><th>

Target tables

</th></tr></thead><tbody><tr><td>

Gateway

</td><td>

Gateway \[sn\_kong\_konnect\_gateway\]

</td><td>

[Kong Gateway](api-sgc-kong-konnect-tables.md#kong-gateway-cmdb-ci-kong-gateway)[DNS Alias](api-sgc-kong-konnect-tables.md#dns-alias-cmdb-ci-dns-alias)

[Logical Datacenter](api-sgc-kong-konnect-tables.md#logical-datacenter-cmdb-ci-logical-datacenter)

[Cloud Service Account](api-sgc-kong-konnect-tables.md#cloud-service-account-cmdb-ci-cloud-service-account)

[Key Value](api-sgc-kong-konnect-tables.md#key-value-cmdb-key-value)

</td></tr><tr><td>

Data Plane Node

</td><td>

Data Plane Node \[sn\_kong\_konnect\_data\_plane\_node\]

</td><td>

[Kong Data Plane Node](api-sgc-kong-konnect-tables.md#kong-data-plane-node-sn-kong-konnect-kong-data-plane-node)

</td></tr><tr><td>

Load Balancer

</td><td>

Load Balancer \[sn\_kong\_konnect\_load\_balancer\]

</td><td>

[Kong Load Balancer](api-sgc-kong-konnect-tables.md#kong-load-balancer-cmdb-ci-kong-lb)

</td></tr><tr><td>

Target

</td><td>

Target \[sn\_kong\_konnect\_target\]

</td><td>

[Kong Target](api-sgc-kong-konnect-tables.md#kong-target-cmdb-ci-kong-target)

</td></tr><tr><td>

Services

</td><td>

Services \[sn\_kong\_konnect\_services\]

</td><td>

[Managed API](api-sgc-kong-konnect-tables.md#managed-api-cmdb-ci-managed-api)[API Backend](api-sgc-kong-konnect-tables.md#api-backend-cmdb-ci-api-backend)

[Key Value](api-sgc-kong-konnect-tables.md#key-value-cmdb-key-value)

</td></tr><tr><td>

Routes

</td><td>

Routes \[sn\_kong\_konnect\_routes\]

</td><td>

[API Frontend](api-sgc-kong-konnect-tables.md#api-frontend-cmdb-ci-api-frontend)

</td></tr><tr><td>

Consumer

</td><td>

Consumer \[sn\_kong\_konnect\_consumer\]

</td><td>

[API Consumer](api-sgc-kong-konnect-tables.md#api-consumer-api-consumer)

</td></tr><tr><td>

Policy

</td><td>

Policy \[sn\_kong\_konnect\_policy\]

</td><td>

[API Policy](api-sgc-kong-konnect-tables.md#api-policy-api-policy)

</td></tr><tr><td>

Developers

</td><td>

Developers \[sn\_kong\_konnect\_developers\]

</td><td>

[API Consumer](api-sgc-kong-konnect-tables.md#api-consumer-api-consumer)

</td></tr><tr><td>

Applications

</td><td>

Applications \[sn\_kong\_konnect\_applications\]

</td><td>

[API Consumer Subscription](api-sgc-kong-konnect-tables.md#api-consumer-subscription-cmdb-ci-api-consumer-subscription)

</td></tr><tr><td>

API Consumer Access

</td><td>

API Consumer Access \[sn\_kong\_konnect\_api\_consumer\_access\]

</td><td>

[API Consumer Access](api-sgc-kong-konnect-tables.md#api-consumer-access-api-consumer-access)

</td></tr></tbody>
</table>For more information on where data is saved when pulling data from a Kong Konnect service, see [Target tables for storing API Service Graph Connector for Kong Konnect data](api-sgc-kong-konnect-tables.md).

You can use the IntegrationHub ETL app to view the data maps. See [IntegrationHub ETL](../integration-hub-etl/integrationhub-etl.md) for more information.

## Record removal process

The connector supports soft deletion for CMDB CI classes only, meaning records are not permanently removed from the system. Instead, any CMDB CI records not discovered during the last scheduled job run are marked as **Non-Operational**.

