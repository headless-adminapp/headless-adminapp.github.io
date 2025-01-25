---
sidebar_position: 1
---

# AttachmentAttribute

The attachment attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'attachment'` | Yes |
| `format`  | The format of the attachment. Can be `'image'`, `'video'`, `'audio'`, `'document'`, or `'any'`. | Yes |
| `maxSize` | The maximum size of the attachment in bytes. | No |
| `location`| The location of the attachment. Can be `'local'` (default) or `'cloud'`. | No |

> For cloud storage, you need to configure [FileService](/docs/getting-started/file-service).
