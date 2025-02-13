---
sidebar_position: 11
---

# Sequelize Schema Store

The Sequelize Schema Store is a model store that holds all schema information with sequelize model. It is used to interact with the database.

```ts title="config/schemaStore.ts"
import { SequelizeSchemaStore } from '@headless-adminapp/server-sdk-sequelize';

export const schemaStore = new SequelizeSchemaStore();

schemaStore.register(taskSchema);
schemaStore.validate();
schemaStore.ensureRelationships();
```

# Accessing model

```ts
const TaskModel = schemaStore.getModel('tasks');

const tasks = await TaskModel.find({});
```
