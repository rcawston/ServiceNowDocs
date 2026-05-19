---
title: Configure Financial Services Deposit Operations
description: Review the components that are installed with the Financial Services Deposit Operations application and modify as needed for your organization's business needs.
locale: en-US
release: australia
product: Financial Services Deposit Operations
classification: financial-services-deposit-operations
topic_type: task
last_updated: "2026-03-12"
reading_time_minutes: 3
breadcrumb: [Deposit Operations, Banking applications, Financial Services Operations \(FSO\)]
---

# Configure Financial Services Deposit Operations

Review the components that are installed with the Financial Services Deposit Operations application and modify as needed for your organization's business needs.

## Before you begin

Make sure that the Financial Services Deposit Operations application is installed. For more information, see [Install Financial Services Business Deposit Operations](install-fso-business-deposit-ops.md) and [Install Financial Services Personal Deposit Operations](install-fso-personal-deposit-ops.md).

Role required:

-   For Financial Services Business Deposit Operations: sn\_bom\_deposit\_b2b.admin and admin
-   Financial Services Personal Deposit Operations: sn\_bom\_deposit\_b2c.admin and admin

## Procedure

1.  Import your financial accounts, financial products, financial institutions, and transactions data into ServiceNow tables.

    For more information, see [Import your financial data using import sets](../import-financial-accounts-products-institutions.md).

2.  Review the installed components.

    Modify them or add new ones as applicable.

<table id="choicetable_ajc_kk5_z4b"><thead><tr><th align="left" id="d109569e162">

Task

</th><th align="left" id="d109569e165">

Description

</th></tr></thead><tbody><tr><td id="d109569e171">

**Configure service definitions**

</td><td>

[Configure service definitions](../configure-service-definitions.md) to enable unique flows and views for deposit service cases and tasks. You can add new case types and configure service definitions for each type.

</td></tr><tr><td id="d109569e193">

**Edit or create flows**

</td><td>

[Edit or create flows](../configure-flow-designer-flows-fso-apps.md) using Workflow Studio.

</td></tr><tr><td id="d109569e215">

**Configure playbooks**

</td><td>

[Edit or create a new playbook](../configure-playbooks-fso-apps.md) using Playbooks.

</td></tr><tr><td id="d109569e237">

**Configure CSM Configurable Workspace**

</td><td>

[Configure CSM Configurable Workspace](../configure-csm-workspace-fso-apps.md) to enable agents to interact with customers and create and work on cases.

</td></tr><tr><td id="d109569e265">

**Configure Service Level Agreements \(SLAs\)**

</td><td>

[Configure the installed SLAs](../configure-sla-definitions-fso-cases.md) to configure SLA timings for deposit service cases and tasks.

</td></tr><tr><td id="d109569e284">

**Configure user groups**

</td><td>

[Configure user groups](../configure-groups-fso.md) for assignment of cases and tasks. You can also assign roles to groups and users.Configure agent connector and contributor roles for the groups, if required. For more information, see [Roles and Personas](../fso-combine-csm-industry-roles.md).

</td></tr><tr><td id="d109569e321">

**Configure assignment rules**

</td><td>

[Configure assignment rules](../configure-assignment-rules-fso-applications.md) to identify cases that meet certain conditions and then route those cases to agents.

</td></tr><tr><td id="d109569e337">

**Configure Document Processor**

</td><td>

[Configure Document Processor](../configuring-fso-document-processor.md) for document categories, document types, inbound and outbound document rules, and approval rules for document deferments and exceptions.

</td></tr></tbody>
</table>
