---
sidebar_position: 1
---

# MongoServerSdk

MongoServerSdk is extended from the `ServerSdk` class and provides an implementation for MongoDB.

```ts
const sdk: IServerSdk = new MongoServerSdk({
  schemaStore,
});
```

#### Options

Extends the `ServerSdk` options with the following:

| Name        | Type             | Description       | Required |
| :---------- | :--------------- | :---------------- | :------- |
| schemaStore | MongoSchemaStore | The schema store. | Yes      |

#### MongoDatabaseContext

The `MongoDatabaseContext` available as `DbContext` in the plugin context.

| Name    | Type          | Description                 |
| :------ | :------------ | :-------------------------- |
| session | ClientSession | The MongoDB client session. |
