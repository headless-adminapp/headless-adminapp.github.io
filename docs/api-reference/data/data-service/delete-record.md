---
sidebar_position: 5
---

# Delete Record

Delte record based on the provided parameters.

```ts
await dataService.deleteRecord(logicalName, id);
```

### Example

```ts
await dataService.deleteRecord('tasks', 1);
```

This example deletes the task record with the specified ID.
