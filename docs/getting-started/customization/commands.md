# Command Bar

```ts
const CustomCommand = {
  type: 'button',
  text: 'Custom Command',
  Icon,
  onClick: async (context) => {
    // Your custom logic here
  }
}
```

```tsx title="config/client/experience/task.ts"
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { taskSchema } from '../schema/task';

const builder = new SchemaExperienceBuilder(taskSchema);

export const taskSchemaExperience = builder.defineExperience({
  viewCommands: [CustomCommand]
});
```
