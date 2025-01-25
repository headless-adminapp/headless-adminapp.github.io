---
sidebar_position: 1
---

# ChoiceAttribute

The choice attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'choice'` | Yes |
| `string` | A boolean value that indicates whether the attribute is a string. | No |
| `number` | A boolean value that indicates whether the attribute is a number. | No |
| `options` | The options for the attribute. | Yes |

> Note: The `string` and `number` properties are mutually exclusive. One of them must be set to `true`.

### Option

| Property | Description | Required |
|---|---|---|
| `label` | The label of the option. | Yes |
| `value` | The value of the option. | Yes |
| `color` | The color of the option. | No |
