---
sidebar_position: 1
---

# Schema

Schema is a way to define structure of data and has the following properties:

| Property | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| logicalName | `string` | The logical name of the schema. | Yes |
| label | `string` | Label for UI. | Yes |
| pluralLabel | `string` | Plural label for UI. | Yes |
| description |  `string` | Description about the schema. | No |
| idAttribute | `string` | The attribute name of the primary key. | Yes |
| primaryAttribute | `string` | The attribute name of the primary attribute. | Yes |
| createdAtAttribute | `string` | The attribute name of the created at attribute. | No |
| updatedAtAttribute | `string` | The attribute name of the updated at attribute. | No |
| avatarAttribute | `string` | The attribute name of the avatar attribute. | No |
| ownership | `scoped`, `global` | The ownership of the schema. | No |
| additionalMetadata | Record&lt;string, unknown&gt; | Additional metadata. | No |
| restrictions | [Restriction](#restriction) | The restrictions for operation | No |
| attributes | Record&lt;string, [Attribute](attributes)&gt; | The attributes of the schema. | Yes |
