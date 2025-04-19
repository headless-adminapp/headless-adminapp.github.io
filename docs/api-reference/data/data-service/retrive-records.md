---
sidebar_position: 10
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
});
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
    assignedTo: ['name'],
  },
  search: 'task1',
  skkp: 0,
  limit: 10,
  sort: [
    {
      field: 'title',
      order: 'asc',
    },
  ],
});
```

This example retrieves multiple task records that match the specified filter, including the title and description fields, and expands the assignedTo relationship to include the name of the user assigned to each task. The results are sorted by title in ascending order, with a limit of 10 records per page.
