---
sidebar_position: 1
---

# Retrive Single Record

Retrieves a single record based on the provided parameters.

```ts
await dataService.retriveRecord(logicalName, id, columns, expand)
```

### Example

```ts
await dataService.retriveRecord(
  'tasks',
  1,
  ['title', 'description'],
  {
    'assignedTo': ['name'],
  },
)
```
