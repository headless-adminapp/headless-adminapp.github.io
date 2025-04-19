---
sidebar_position: 3
---

# Filter Query

```ts
const filter: Filter = {
  type: 'and',
  conditions: [
    // ...
  ],
};
```

Filter query is used to filter records based on specific conditions. It allows you to specify the logical operator (AND/OR) and the conditions or nested filters to apply.

Nested filters can be used to create complex queries by combining multiple conditions or filters together. The `type` property specifies the logical operator to use when combining the conditions or nested filters.

**Complex Filter Example:**

```ts
const filter: Filter = {
  type: 'and',
  filters: [
    {
      type: 'and',
      conditions: [
        // ...
      ],
    },
    {
      type: 'or',
      conditions: [
        // ...
      ],
    },
  ],
};
```

### Condition

```ts
interface Condition {
  field: string;
  operator: OperatorKey;
  value: any;
  extendedKey?: string;
}
```

Condition is used to specify a single condition for filtering records. It includes the field name, operator, and value to compare against.

| Property      | Type          | Description                                       |
| :------------ | :------------ | :------------------------------------------------ |
| `field`       | `string`      | The name of the field to filter on.               |
| `operator`    | `OperatorKey` | The operator to use for comparison.               |
| `value`       | `any`         | The value to compare against.                     |
| `extendedKey` | `string`      | The extended key of referenced record (optional). |
