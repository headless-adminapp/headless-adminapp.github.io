---
sidebar_position: 3
---

# Create Record

Create record based on the provided parameters.

```ts
await dataService.createRecord(logicalName, data)
```

### Example

```ts
await dataService.createRecord('tasks', {
  title: 'Task 1',
  description: 'Description of task 1',
  status: 0,
  assignedTo: {
    id: 1,
  }
})
```
