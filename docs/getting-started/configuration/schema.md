---
sidebar_position: 1
---

# Schema

Schema is a set of rules that defines the structure of the data. It is used to validate the data and to ensure that the data is consistent. In Headless AdminApp, schema is used to define the structure of the data that is stored in the database.

```ts title="schema/task.ts"
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