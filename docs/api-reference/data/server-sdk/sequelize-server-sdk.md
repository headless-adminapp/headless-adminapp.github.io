---
sidebar_position: 2
---

# SequelizeServerSdk

SequelizeServerSdk is extended from the `ServerSdk` class and provides an implementation for Sequelize.

```ts
const sdk: IServerSdk = new SequelizeServerSdk({
  schemaStore,
  sequelize,
});
```

#### Options

Extends the `ServerSdk` options with the following:

| Name        | Type             | Description             | Required |
| :---------- | :--------------- | :---------------------- | :------- |
| schemaStore | MongoSchemaStore | The schema store.       | Yes      |
| sequelize   | Sequelize        | The Sequelize instance. | Yes      |

#### MongoDatabaseContext

The `MongoDatabaseContext` available as `DbContext` in the plugin context.

| Name    | Type        | Description                |
| :------ | :---------- | :------------------------- |
| session | Transaction | The Sequelize transaction. |
