# Schema Experience Builder

SchemaExperienceBuilder is a class that helps you to define experiences for the schema. It is used to define form, view, and other experiences for the schema.

```ts
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { taskSchema } from '../schema/task';

const builder = new SchemaExperienceBuilder(taskSchema);
```

#### Available methods

- [defineExperience](./define-experience.md)
- [defineFormExperience](./define-form-experience.md)
- [defineViewExperience](./define-view-experience.md)

#### Example

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
        columns: ['title', 'created_at']
      }
    }),
  }],
  forms: [{
    id: 'default',
    name: 'Task Form',
    experience: builder.defineFormExperience({
      tabs: [
        name: 'general',
        label: 'General',
        controls: ['title'],
      ],
      useHookFn: useCustomHook, // Optional
    }),
  }],
});
```
