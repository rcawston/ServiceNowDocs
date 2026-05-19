---
title: Client API reference
description: Use client-side JavaScript APIs to control aspects of how ServiceNow AI Platform is displayed and functions within the web browser. This reference lists available classes and methods along with parameters, descriptions, and examples to help control the end-user experience.
locale: en-US
release: australia
product: API Reference
classification: api-reference
topic_type: concept
last_updated: "2026-03-12"
reading_time_minutes: 4
breadcrumb: [API reference, API implementation and reference]
---

# Client API reference

Use client-side JavaScript APIs to control aspects of how ServiceNow AI Platform is displayed and functions within the web browser. This reference lists available classes and methods along with parameters, descriptions, and examples to help control the end-user experience.

-   **[StandaloneClientMethods](StandaloneClientMethods.md#)**  
Standalone client methods are methods that you can use within your client JavaScripts, such as reflistOpen, but aren't a part of any class or API.
-   **[DynamicTranslation - Client](DynamicTranslationClientAPI.md#)**  
The DynamicTranslation API provides methods that translate text, in real time, into multiple languages using translation service providers. This API is available for both standard clients and Angular-based Service Portal clients.
-   **[g\_service\_catalog - Client](g_service_catalogClientAPI.md#)**  
The g\_service\_catalog API provides methods to access data in a multi-row variable set \(MRVS\) when a model is open.
-   **[GlideAgentWorkspace \(g\_aw\) - Client](GlideAgentWorkspaceAPI.md#)**  
The g\_aw API provides methods that enable a UI action or client script to open a specified record in an Agent Workspace tab.
-   **[GlideAjax - Client](c_GlideAjaxAPI.md#)**  
The GlideAjax class enables a client script to call server-side code in a script include.
-   **[GlideDialogWindow - Client \(deprecated\)](c_GlideDialogWindowAPI.md#)**  
The GlideDialogWindow API provides methods for displaying a dialog in the current window and frame.
-   **[GlideDocument - Client](c_GlideDocumentV3API.md#)**  
The GlideDocument API provides methods to search a Document Object Model \(DOM\) element, a document, or a JQuery element.
-   **[GlideFlow - Client](GlideFlowAPI.md#)**  
The GlideFlow API provides methods for client-side interactions with actions, flows, and subflows.
-   **[GlideForm \(g\_form\) - Client](c_GlideFormAPI.md#)**  
The GlideForm API provides methods to customize forms.
-   **[Mobile GlideForm \(g\_form\) - Client](c_MobileGlideForm_API.md#)**  
The Mobile GlideForm \(g\_form\) API provides methods to work with forms on the mobile platform.
-   **[GlideGuid - Client](c_GlideGuidV3API.md#)**  
The GlideGuid API provides methods to create a globally unique identifier.
-   **[GlideList2 \(g\_list\) - Client](c_GlideList2API.md#)**  
The GlideList2 API provides methods to customize \(v2\) lists.
-   **[GlideListV3 \(g\_list\) - Client \(deprecated\)](c_GlideListV3API.md#)**  
The GlideListV3 API provides methods to manipulate lists.
-   **[GlideMenu \(g\_menu and g\_item\) - Client](c_GlideMenuAPI.md#)**  
The GlideMenu API provides methods that can be used in UI context menus and in `onShow` scripts to customize UI context menu items.
-   **[GlideModalForm - Client](c_GlideModalFormV3API.md#)**  
The GlideModalForm API provides methods to display a form in a GlideModal.
-   **[GlideModal - Client](c_GlideModalV3API.md#)**  
The GlideModal API provides methods for displaying a content overlay, known as a modal. Modals are interactive windows that appear above a page and close when a user takes an action. You can use a modal to display information, ask questions, or perform actions.
-   **[GlideNavigation - Client](c_GlideNavigationV3API.md#)**  
The GlideNavigation API provides methods to control and refresh the navigator and main frame.
-   **[GlideNotification - Client](c_GlideNotificationV3API.md#)**  
The GlideNotification API provides methods that display messages over the page content.
-   **[GlideRecord - Client](c_GlideRecordClientSideAPI.md#)**  
The GlideRecord API provides methods that perform database operations. This API enables the use of some GlideRecord functionality in client-side scripts, such as client scripts and UI policy scripts.
-   **[GlideURLV3 - Client](c_GlideURLV3API.md#)**  
The GlideURLV3 API provides methods for manipulating a URI.
-   **[GlideUser - Client](c_GlideUserAPI.md#)**  
The GlideUser API provides methods that access information about the current user and current user roles. Using this API avoids the need to use the slower GlideRecord queries to get user information.
-   **[GlideUIScripts - Client](GUIScriptsAPI.md#)**  
The GlideUIScripts API provides methods to access UI scripts from within client-side code.
-   **[Guided Tours - Client](guided_toursAPI.md#)**  
The Guided Tours API provides methods for launching and stopping guided tours.
-   **[i18N - Client](c_i18NV3API.md#)**  
The i18N API provides methods to get and format translated messages.
-   **[openFrameAPI - Client](c_openFrameAPI.md#)**  
The openFrameAPI provides methods that interact with OpenFrame. OpenFrame is an omni-present frame that communication partners can use to integrate their systems into the ServiceNow platform.
-   **[NotifyClient - Client](c_Notify2WebRTCClient.md#)**  
The NotifyClient API provides methods that enable you to use Notify telephony functionality, such as making and receiving calls from a web browser.
-   **[NotifyOnTaskClient - Client](NotifyOnTaskClient.md#)**  
The NotifyOnTaskClient API provides methods for sending SMS messages or starting/managing a conference call for various telephony service providers, such as Zoom and Webex.
-   **[ScopedSessionDomain - Client](ScopedSessionDomainAPI.md#)**  
The ScopedSessionDomain script include that contains client-side methods that provide functionality related to the current session domain.
-   **[ScriptLoader - Client](c_ScriptLoaderAPI.md#)**  
The ScriptLoader API provides methods to load scripts asynchronously.
-   **[SNAnalytics - Client](SNAnalyticsClientAPI.md#)**  
The SNAnalytics API provides methods to push custom analytics data \(events, pages, and user properties\) to the Usage Insights for Service Portal dashboard.
-   **[spAriaUtil - Client](spAriaUtil-API.md#)**  
The spAriaUtil API provides methods to show messages on a screen reader.
-   **[spContextManager - Client](spContextManagerAPI.md#)**  
Makes data from a Service Portal widget available to other applications and services in a Service Portal page. For example, pass widget data to Agent Chat when it opens in a Service Portal page.
-   **[spModal - Client](SPModal-API.md#)**  
Shows alerts, prompts, and confirmation dialogs in Service Portal widgets. The spModal class is available in Service Portal client scripts.
-   **[spUtil - Client](spUtilAPI.md#)**  
The spUtil API provides utility methods to perform common functions in a Service Portal widget client script.
-   **[StopWatch - Client](c_StopWatchAPI.md#)**  
The StopWatch API provides methods to measure the duration of operations.

**Parent Topic:**[API reference](api-reference.md)

