---
sidebar_position: 3
---

# StringAttribute

The string attribute is an object that extends [AttributeBase](/docs/api-reference/attributes/base) and contains the following properties:

| Property | Description | Required |
|---|---|---|
| `type` | `'string'` | Yes |
| format | The format of the string. Can be `'text'`, `'textarea'`, `'email'`, `'phone'`, `'url'`, `'richtext'`. | Yes |
| `pattern` | The pattern of the string to validate. | No |
| `minLength` | The minimum length of the string. | No |
| `maxLength` | The maximum length of the string. | No |
| `textTransform` | The text transform of the string. Can be `'none'`, `'uppercase'`, `'lowercase'`, `'capitalize'`. | No |
