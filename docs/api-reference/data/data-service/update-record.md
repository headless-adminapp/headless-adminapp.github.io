---
sidebar_position: 9
---

# Update Record

Update record based on the provided parameters.

```ts
await dataService.updateRecord(logicalName, id, data);
```

### Example

```ts
await dataService.updateRecord('tasks', 1, {
  description: 'Description of task 1',
});
```

This example updates the description of the task record with the specified ID to "Description of task 1".
