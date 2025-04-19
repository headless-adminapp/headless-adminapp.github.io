---
sidebar_position: 2
---

# Data Service

The `IDataService` interface provides methods for interacting with data records. It includes methods for creating, updating, deleting, and retrieving records.

## Available Implementations

#### RestDataService

```ts
const dataService = new RestDataService({
  endpoint: '/api/data',
});
```

### Available Methods

- [retriveRecord](retrive-record) - Retrieves a single record based on the provided parameters.
- [retriveRecords](retrive-records) - Retrieves multiple records based on the provided parameters.
- [createRecord](create-record) - Creates a new record based on the provided parameters.
- [updateRecord](update-record) - Updates an existing record based on the provided parameters.
- [deleteRecord](delete-record) - Deletes a record based on the provided parameters.
