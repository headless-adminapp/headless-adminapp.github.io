---
sidebar_position: 11
---

# Mongo Schema Store

The Mongo Schema Store is a model store that holds all schema information with mongoose model. It is used to interact with the MongoDB database.

```ts title="config/schemaStore.ts"
import { MongoSchemaStore } from '@headless-adminapp/server-sdk-mongo';

export const schemaStore = new MongoSchemaStore();

schemaStore.register(taskSchema);
```

# Accessing model

```ts
const TaskModel = schemaStore.getModel('tasks');

const tasks = await TaskModel.find({});
```
