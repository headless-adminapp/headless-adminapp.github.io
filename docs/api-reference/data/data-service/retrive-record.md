---
sidebar_position: 6
---

# Retrive Single Record

Retrieves a single record based on the provided parameters.

```ts
await dataService.retriveRecord(logicalName, id, columns, expand);
```

### Example

```ts
await dataService.retriveRecord('tasks', 1, ['title', 'description'], {
  assignedTo: ['name'],
});
```

This example retrieves a single task record with the specified ID, including the title and description fields, and expands the assignedTo relationship to include the name of the user assigned to the task.
