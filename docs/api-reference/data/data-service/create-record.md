---
sidebar_position: 8
---

# Create Record

Create record based on the provided parameters.

```ts
await dataService.createRecord(logicalName, data);
```

### Example

```ts
await dataService.createRecord('tasks', {
  title: 'Task 1',
  description: 'Description of task 1',
  status: 0,
  assignedTo: {
    id: 1,
  },
});
```

This example creates a new task record with the specified title, description, status, and assignedTo user. Here `assignedTo` is a lookup field that references the user with ID 1.
