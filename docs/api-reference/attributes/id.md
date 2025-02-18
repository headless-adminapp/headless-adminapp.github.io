---
sidebar_position: 2
---

# IdAttribute

The id attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'id'` | Yes |
| `string` | `true` | No |
| `number` | `true` | No |
| `objectId` | `true` | No |
| `guid` | `true` | No |

> `string`, `number`, `objectId`, and `guid` are mutually exclusive. Only one of them can be set to `true` and required.
