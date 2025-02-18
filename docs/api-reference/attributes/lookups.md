---
sidebar_position: 12
---

# MultiLookupAttribute

The multi lookup attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'lookups'` | Yes |
| `entity` | Logical name of the entity to lookup. | Yes |
| `behavior` | The behavior of the lookup. Can be `'reference'`, `'dependent'` | No |
| `relatedLabel` | The label to show in related tab inside form | No |
| `string` | `true` | No |
| `number` | `true` | No |
| `objectId` | `true` | No |
| `guid` | `true` | No |


> `string`, `number`, `objectId`, and `guid` are mutually exclusive. Only one of them can be set to `true` and required.
