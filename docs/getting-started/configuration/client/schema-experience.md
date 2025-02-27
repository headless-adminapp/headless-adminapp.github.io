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
    }),
  }],
  useHookFn: useCustomHook, // Optional
});
```

### Use custom hook

```tsx title="useCustomHook.ts"
import { useContextKey, useFormInstance } from '@headless-adminapp/app/dataform';
import { useOnFieldValueChangeListener } from '@headless-adminapp/app/dataform/hooks/useOnFieldValueChangeListener';
import { useFormManager } from '@/packages/app/dataform/hooks/useFormManager';

export function useCustomHook() {
  // Custom hook implementation
  const contextKey = useContextKey(); // Context key change when schema, form or record change
  const form = useFormInstance();
  const formManager = useFormManager();

  useOnFieldValueChangeListener('title', (value) => {
    // Do something when title field value change
  });

  useEffect(() => {
    // Control ui control and section satte
    formManager.getControl('title')?.setHidden(true);
    formManager.getSection('general')?.setHidden(true);
  }, [formManager, contextKey]);
}
```
