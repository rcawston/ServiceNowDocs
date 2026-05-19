# Inline Code Anomaly Report

Generated: 2026-05-19T23:33:25.843Z

Repository: /Volumes/Samsung/ServiceNowDocs-official

## Scope

- Scanned all source `.md` and `.markdown` files in the repository, excluding generated report files.
- Reported unmatched single-backtick spans and unclosed double-backtick inline spans outside fenced code blocks.
- Did not report triple-backtick fence formatting issues; those are separate from inline code spans.

## Summary

- Inline-code anomalies found: 51
- Files containing anomalies: 31

### Anomalies By Issue

| Item | Count |
|---|---:|
| unclosed double-backtick inline code span | 41 |
| unmatched inline backtick | 10 |

## Inline Code Anomalies

| Source | Line | Column | Issue | Delimiter | Text |
|---|---:|---:|---|---|---|
| markdown/api-reference/rest-apis/sales_crm_pricing-POST-compute-price.md | 22 | 14 | unclosed double-backtick inline code span | \`\` | Default URL: \`\` |
| markdown/application-development/servicenow-sdk/acl-api-now-ts.md | 183 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/business-rule-api-now-ts.md | 95 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/business-rule-api-now-ts.md | 237 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/client-script-api-now-ts.md | 187 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-import-sets-api.md | 218 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-import-sets-api.md | 392 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-import-sets-api.md | 570 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-script-action-api.md | 83 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-script-action-api.md | 153 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-script-include-api.md | 84 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-catalog-api.md | 1514 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-catalog-api.md | 1569 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-catalog-api.md | 1598 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 106 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 127 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 160 | 114 | unclosed double-backtick inline code span | \`\` | -   To provide inline HTML, use string literals or template literals for multiple lines of code: \`'HTML' or \`HTML\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 181 | 111 | unclosed double-backtick inline code span | \`\` | -   To provide inline CSS, use string literals or template literals for multiple lines of code: \`'CSS' or \`CSS\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 288 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-service-portal-api.md | 537 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-action-api.md | 258 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-action-api.md | 273 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-action-api.md | 944 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-page-api.md | 116 | 114 | unclosed double-backtick inline code span | \`\` | -   To provide inline HTML, use string literals or template literals for multiple lines of code: \`'HTML' or \`HTML\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-page-api.md | 152 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/fluent-ui-page-api.md | 168 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/application-development/servicenow-sdk/scripted-rest-api-api-now-ts.md | 325 | 123 | unclosed double-backtick inline code span | \`\` | -   To provide an inline script, use string literals or template literals for multiple lines of code: \`'Script' or \`Script\`\`. |
| markdown/employee-service-management/employee-experience-foundation/check-company-news-using-nowassist-va.md | 42 | 169 | unclosed double-backtick inline code span | \`\` | -   To check the latest news or know about any particular news, enter your query like \`What's the latest news\`, \`show me the company news\`, \`show me news on 401k\`, \`\` or anything. |
| markdown/impact/exception-reason-properties.md | 52 | 9 | unclosed double-backtick inline code span | \`\` | -   \`\`Determines how approved exception reasons are handled when the finding's line number changes in the code. |
| markdown/integrate-applications/integration-hub/credly-connections.md | 34 | 63 | unclosed double-backtick inline code span | \`\` | \|Connection URL\|Base URL to connect to **Credly**. Enter: \`\`\| |
| markdown/integrate-applications/integration-hub/setup-cisco-teams.md | 310 | 57 | unclosed double-backtick inline code span | \`\` | \|Connection URL\|Base URL to connect to ****. Enter: \`\`\| |
| markdown/intelligent-experiences/configure-parameter-record-ad.md | 28 | 75 | unclosed double-backtick inline code span | \`\` | \`Connect to SSH server and retrieve my session info. Here are my details:\`\`\` |
| markdown/it-operations-management/agent-client-collector/nginx-checks-policies.md | 61 | 1 | unclosed double-backtick inline code span | \`\` | \`\` |
| markdown/it-operations-management/agent-client-collector/nginx-checks-policies.md | 139 | 1 | unclosed double-backtick inline code span | \`\` | \`\` |
| markdown/it-operations-management/discovery/discovery-ssh-probe-commands.md | 81 | 14 | unmatched inline backtick | \` | \`echo \`lsattr\` |
| markdown/it-operations-management/event-management/event-collection-via-MID-using-push.md | 46 | 392 | unclosed double-backtick inline code span | \`\` | Use the required MID Server script include to transform \\(parse\\) collected event messages and populate them into the mapped event field. The MID Server script include name is composed of a prefix and suffix. The prefix is the mandatory text \`TransformEvents_\` and the suffix is the transform name on the URL, for example, \`http://{MID_Server_IP}:{MID_Web_Server_Port}/api/mid/em/xmlSample\` \`\`. The composed script name is therefore \`TransformEvents_xmlSample\`. |
| markdown/it-service-management/digital-end-user-experience-dex/da-theme-variables.md | 401 | 1 | unclosed double-backtick inline code span | \`\` | \`\` |
| markdown/it-service-management/request-pred-intelli-inc-mgmt.md | 54 | 8 | unclosed double-backtick inline code span | \`\` | Enter: \`\` |
| markdown/it-service-management/request-pred-intelli-mim.md | 61 | 8 | unclosed double-backtick inline code span | \`\` | Enter: \`\` |
| markdown/mobile/sg-configure-multiscan-3.md | 28 | 117 | unclosed double-backtick inline code span | \`\` | These parameters are contained within the **input** object. You can access the parameters by using this format: \`\`input.grouped_input_name\`[\`input index\`]["\`UI Parameter Name\`"]\`. For example, if you have a grouped input called \`add_asset\` that has a UI parameter named \`Serial number\`, you would use \`input.add_asset[0]["Serial number"]\` to access the first serial number asset. |
| markdown/order-management/connect-sn-instance-logik.md | 36 | 26 | unclosed double-backtick inline code span | \`\` | 3.  In the filter, enter \`\`. |
| markdown/order-management/cpq-matrix-loader-csv-fields-and-field-options-upload-and-export.md | 62 | 163 | unmatched inline backtick | \` | Valid strings can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*ʼ&%$#”!\` |
| markdown/order-management/cpq-matrix-loader-csv-fields-and-field-options-upload-and-export.md | 299 | 163 | unmatched inline backtick | \` | Valid strings can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*ʼ&%$#”!\` |
| markdown/order-management/cpq-matrix-loader-csv-fields-and-field-options-upload-and-export.md | 349 | 163 | unmatched inline backtick | \` | Valid strings can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*ʼ&%$#”!\` |
| markdown/order-management/create-a-field-using-the-administration-ui.md | 38 | 181 | unmatched inline backtick | \` | -   \\(A\\) Valid field names can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*ʼ&%$#”!\` |
| markdown/order-management/matrix_loader_csv_rules_upload.md | 25 | 218 | unmatched inline backtick | \` | \|rule\\_name\|Name displayed on the rule list Admin page\|Valid strings can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*’&%$#”!\`\|Required\| |
| markdown/order-management/matrix_loader_csv_rules_upload.md | 27 | 233 | unmatched inline backtick | \` | \|rule\\_description\|Contextual description for administrator reference\|Valid strings can be composed of up to 255 characters, including letters, numbers, spaces, and the following special characters: \`{}[]()\|\\~\`_^@?<=>;:/.-,+*’&%$#”!\`\|Optional\| |
| markdown/order-management/matrix_loader_csv_rules_upload.md | 80 | 143 | unmatched inline backtick | \` | -   Valid strings may include letters, numbers, spaces, and special characters: \`{ } [ ] ( ) \| \\ ~ \` _ ^ @ ? < = > ; : / . - , + * ’ & % $ # "\` |
| markdown/order-management/rules_101.md | 104 | 128 | unmatched inline backtick | \` | -   A valid string composed of letters, numbers, spaces, and the following special characters:\`{}[]()\|\\~\`_^@?<=>;:/.-,+*ʼ&%$#”!\` |
| markdown/platform-security/instance-security-hardening-settings/sc-reset-password-max-sms-per-day.md | 20 | 70 | unclosed double-backtick inline code span | \`\` | Set the property **password\\_reset.sms.max\\_per\\_day** to a value of \`\` or less. |
| markdown/servicenow-platform/remote-tables/remote-table-script-def-example2.md | 152 | 105 | unmatched inline backtick | \` | When you query a specific record using \`GlideRecord.get(“<sys_id>“)\`, then \`v_query.isGet()\`\` is \`\`true\`\`. It fetches the specific record from the external service. |
