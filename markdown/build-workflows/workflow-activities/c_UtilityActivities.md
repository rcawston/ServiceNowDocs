---
title: Utility workflow activities
description: Utility activities provide controls over the path of the workflow, and other useful tools.
locale: en-US
release: australia
product: Workflow Activities
classification: workflow-activities
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 1
breadcrumb: [Workflow activities reference, Workflow activities, Classic Workflow, Build workflows]
---

# Utility workflow activities

Utility activities provide controls over the path of the workflow, and other useful tools.

-   **[Branch workflow activity](r_BranchActivity.md)**  
The **Branch** activity splits the workflow into multiple transition paths from a single activity.
-   **[Join workflow activity](r_JoinActivity.md)**  
The **Join** activity unites multiple execution paths into one transition.
-   **[Lock workflow activity](r_LockActivity.md)**  
The **Lock** activity prevents other instances of this workflow from continuing past this activity until the lock is released.
-   **[Log Message workflow activity](r_LogMessageActivity.md)**  
The **Log Message** activity writes a message to the workflow log.
-   **[Log Trace Message workflow activity](c_LogTraceMessage.md)**  
The **Log Trace Message** activity writes a trace message to the workflow log.
-   **[REST Message legacy workflow activity](r_RESTMessageActivity.md)**  
The legacy **REST Message** activity enables an administrator to override the REST endpoint or supply the variables configured in the REST Message module.
-   **[Return Value workflow activity](r_ReturnValueActivity.md)**  
The **Return Value** activity returns a value to a parent workflow, when run from a subflow.
-   **[Run Script workflow activity](r_RunScriptActivity.md)**  
The **Run Script** activity runs the specified script in the scope of the workflow version.
-   **[Set Values workflow activity](r_SetValuesActivity.md)**  
The **Set Values** activity sets values on the current record when the workflow quiesces or ends.
-   **[SOAP Message legacy workflow activity](r_SOAPMessageActivity_1.md)**  
The legacy **SOAP Message** activity uses SOAP messages defined in the System Web Services plugin and can call the messages using a MID Server.
-   **[Turnstile workflow activity](r_TurnstileActivity.md)**  
The **Turnstile** activity limits how many times a workflow can pass through the same point.
-   **[Unlock workflow activity](r_UnlockActivity.md)**  
The **Unlock** activity releases a lock that was previously placed by the **Lock** activity.

**Parent Topic:**[Workflow activities](c_WorkflowActivities.md)

