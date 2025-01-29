---
sidebar_position: 2
---

# Schema Experience

Schema Experience allows you to tailor the schema for specific use cases, such as forms, lists, or detail views. By defining the schema experience, you can customize how the schema is presented and interacted with, ensuring it meets the requirements of your application.

**Experience schema with default layout**

```ts title="experience/task.ts"
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { taskSchema } from '../schema/task';

const builder = new SchemaExperienceBuilder(taskSchema);

export const taskSchemaExperience = builder.defineExperience({});
```

**Experience schema with custom layout**

```ts title="experience/task.ts"
const TaskIcon = bundleLazyIcon(
  'Task24Regular',
  'Task24Filled'
);

export const taskSchemaExperience = builder.defineExperience({
  Icon: TaskIcon,
  views: [{
    id: 'default',
    name: 'All Tasks',
    experience: builder.defineViewExperience({
      defaultSorting: [
        {
          field: 'created_at',
          order: 'desc',
        },
      ],
      grid: {
        columns: [
          {
            name: 'title',
          },
          {
            name: 'created_at',
          },
        ]
      }
    }),
  }],
  forms: [{
    id: 'default',
    name: 'Task Form',
    experience: builder.defineFormExperience({
      tabs: [
        columnCount: 2,
        name: 'general',
        label: 'General',
        tabColumns: [
          {
            sections: [
              {
                name: 'general',
                label: 'General',
                controls: [
                  {
                    type: 'standard',
                    attributeName: 'title',
                  },
                ],
              },
            ],
          },
        ],
      ],
    }),
  }]
});
```
