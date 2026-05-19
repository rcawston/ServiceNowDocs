---
title: Real time anonymization
description: Use the real time anonymization\(RTA\) policy to anonymize data entries in real time.
locale: en-US
release: australia
product: Data Privacy \(Classic\)
classification: data-privacy-classic
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Data privacy, Data Privacy, Platform Privacy]
---

# Real time anonymization

Use the real time anonymization\(RTA\) policy to anonymize data entries in real time.

## Real time anonymization Overview

Users create an RTA policy by selecting real time anonymization in the [Anonymization Policies page](dps-create-anonymization-policies.md), and then selecting the appropriate data channel. For example you can use Virtual Agent with real time anonymization: create an anonymization policy with the Virtual Agent selected as its **Data Channel**.

Columns from the [target tables](../data-discovery/configure-data-discovery-target-table.md) may be selected for RTA, whereupon [active data patterns](../data-discovery/configure-data-discovery-patterns.md) are used and their policies applied to any valid record entries to the columns targeted for RTA. If an entry matches an active data pattern its associated [anonymization technique](dps-create-anonymization-techniques.md) will be used for anonymization.

**Tip:** If you need to change the anonymization technique see [Configure Data Discovery patterns](../data-discovery/configure-data-discovery-patterns.md).

## Real time anonymization failures

If an RTA policy fails, you can review its status with the [Real time anonymization failures](real-time-anonymization-failures.md) table.

