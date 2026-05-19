---
title: Get started with MITRE-ATT&amp;CK framework
description: Review the following information before you start setting up your MITRE-ATT&amp;CK framework.
locale: en-US
release: australia
topic_type: reference
last_updated: "2026-03-12"
reading_time_minutes: 6
breadcrumb: [MITRE-ATT&amp;CK administration, MITRE-ATT&amp;CK framework overview, Threat Intelligence, Enterprise security case management applications, Security Operations]
---

# Get started with MITRE-ATT&amp;CK framework

Review the following information before you start setting up your MITRE-ATT&amp;CK framework.

<table id="table_k2d_1bk_ynb"><thead><tr><th>

Setup task

</th><th>

Description

</th></tr></thead><tbody><tr><td>

Verify that you have assigned the required ServiceNow AI Platform, Threat Intelligence, and Security Incident Response roles.

</td><td>

The following roles are used across the MITRE-ATT&amp;CK features:-   The administrator \(admin\) installs the applications from the ServiceNow Store and assigns the security incident administrator \(sn\_si.admin\) and threat intelligence administrator \(sn\_ti.admin\) roles.
-   sn\_ti.admin
-   sn\_si.admin
-   sn\_si.analyst
-   sn\_ti.read
-   sn\_ti.write
-   sn\_ti.mitre\_analyst - The MITRE analyst role has been introduced to allow cross-navigation for the MITRE features between Security Incident Response and Threat Intelligence Support Common. With this role, you can view both the Threat Intelligence MITRE module and the Security Incident Response module in read-only mode.
-   sn\_si.read

 For more information, see [Setup Threat Intelligence](c_GetStartedWithThreatIntel.md#).

</td></tr><tr><td>

Verify that the ServiceNow core applications that are required to support the MITRE-ATT&amp;CK module are installed and activated.

</td><td>

Verify that the following Security Operations applications are installed and activated from the ServiceNow Store. If not installed, install and activate one application at a time in the following order to ensure a smooth installation.

-   Threat Intelligence Support Common UI Components \(sn\_ti\_seismic\) - Version 1.0 or higher
-   Threat Intelligence Support Common - Version 12.0 or higher
-   Threat Intelligence - Version 12.0 or higher
-   Security Incident Response - Version 12.0 or higher

 For more information on setting up your ServiceNow AI Platform instance for the integration, see [get entitlement for a Security Operations product](entitle-secops-product.md) or application and [activate a ServiceNow Store application](activate-entitled-store-app.md).

</td></tr><tr><td>

Domain separation

</td><td>

Verify the [domain separation section](domain-separation-and-mitre-att-ck.md) if you intend to separate data, processes, and administrative tasks.

</td></tr></tbody>
</table>**Parent Topic:**[MITRE-ATT&amp;CK administration](mitre-att-ck-administration.md)

**Related topics**  


[Understand the MITRE to STIX data model](understand-the-mitre-to-stix-data-model-mapping.md)

[Domain separation and MITRE-ATT&amp;CK](domain-separation-and-mitre-att-ck.md)

[Set up the MITRE-ATT&amp;CK framework](setup-mitre-profile.md)

[Manage matrices](view-mitre-collection.md)

[Manage techniques](view-techniques.md)

[Manage mitigations](manage-mitigations.md)

[Manage groups](manage-groups-threat-intel.md)

[Manage malware](manage-malware.md)

[Manage tools](manage-tools.md)

[Manage MITRE relationships](manage-mitre-relationships.md)

[Manage CVE and technique mapping](manage-cve-and-technique-mapping.md)

[Extend the MITRE-ATT&amp;CK data](view-and-extend-information.md)

[Define the data source and detection tool mapping](manage-mitre-att-ck-data-sources.md)

[Define the data source and data component mapping](map-the-data-source-and-data-components.md)

[Define the technique detection coverage](define-technique-coverage.md)

[Map your technique detection coverage to a technique](map-technique-coverage.md)

[Define the mitigation coverage](define-the-mitigation-coverage.md)

[Map your mitigation coverage to a technique](map-your-mitigation-coverage-to-a-technique.md)

[Create and map detection rules](create-detection-rules.md)

[Auto-extract technique rules for importing MITRE-ATT&amp;CK information](auto-extract-technique-rules.md#)

[Review threat group and MITRE-ATT&amp;CK techniques mapping](review-threat-group-and-techniques-mapping.md)

[Threat group to technique heatmap definition](threat-group-to-technique-heatmap-definition.md)

[Review the MITRE-ATT&amp;CK system properties](configure-mitre-att-ck-properties.md)

