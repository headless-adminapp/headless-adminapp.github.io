---
sidebar_position: 13
---

# AttachmentsAttribute

The attachments attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'attachments'` | Yes |
| `format`  | The format of the attachment. Can be `'image'`, `'video'`, `'audio'`, `'document'`, or `'any'`. | Yes |
| `maxSize` | The maximum size of the attachment in bytes. | No |
| `location`| The location of the attachment. Can be `'local'` (default) or `'cloud'`. | No |

> For cloud storage, you need to configure [FileService](/docs/getting-started/configuration/client/file-service).
