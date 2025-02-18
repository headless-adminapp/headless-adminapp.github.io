---
sidebar_position: 4
---

# Update Record

Update record based on the provided parameters.

```ts
await dataService.updateRecord(logicalName, id, data)
```

### Example

```ts
await dataService.updateRecord('tasks', 1, {
  description: 'Description of task 1',
})
```
