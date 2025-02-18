---
sidebar_position: 1
---

# Retrive Multiple Record

Retrieves multiple record based on the provided parameters.

```ts
await dataService.retriveRecord({
  logicalName,
  filter,
  columns,
  expand,
  search,
  skkp,
  limit,
  sort,
})
```

### Example

```ts
await dataService.retriveRecord({
  logicalName: 'tasks',
  filter: {
    type: 'and',
    conditions: [
      {
        attribute: 'status',
        operator: 'eq',
        value: 0,
      },
    ],
  },
  columns: ['title', 'description'],
  expand: {
    'assignedTo': ['name'],
  },
  search: 'task1',
  skkp: 0,
  limit: 10,
  sort: [{
    field: 'title',
    order: 'asc',
  }],
})
```