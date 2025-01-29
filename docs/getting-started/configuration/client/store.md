---
sidebar_position: 3
---

# Stores

Basically we have 3 types of stores in client side:

- Schema Store - Store for schema information in client side.
- Client Experience Store - Store for client experience information in client side.
- App Store - Store for app information in client side.

## Schema Store

```ts title="task.ts"
import { InferredSchemaType } from '@headless-adminapp/core/schema';
import { defineSchema } from '@headless-adminapp/core/schema/utils';

export const taskSchema = defineSchema({
  logicalName: 'tasks',
  label: 'Task',
  pluralLabel: 'Tasks',
  idAttribute: '_id',
  primaryAttribute: 'title',
  attributes: {
    _id: {
      type: 'id',
      label: 'Id',
      required: true,
      readonly: true,
      objectId: true,
    },
    title: {
      type: 'string',
      format: 'text',
      label: 'Name',
    },
  },
});

export type TaskAttributes = (typeof taskSchema)['attributes'];
export type Task = InferredSchemaType<TaskAttributes>;
```

```tsx title="clientSchemaStore.ts"
import { SchemaStore } from '@headless-adminapp/core/store';

export const clientSchemaStore = new SchemaStore();

clientSchemaStore.register(taskSchema);
```
