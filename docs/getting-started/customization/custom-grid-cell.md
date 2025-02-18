# Custom Grid Cell

### Register custom component

```tsx title="config/components/CustomCell.tsx"
export const CustomCell: React.FC<GridCellProps> = ({ value }) => {
  return <div>{value}</div>;
};
```

```ts
import { componentStore } from '@headless-adminapp/fluent/componentStore';
import { CustomCell } from './config/components/CustomCell';

componentStore.register('CustomCell', CustomCell);
```

### Use custom component in grid

```tsx title="/config/client/experience/task.ts"
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { taskSchema } from '../schema/task';

const builder = new SchemaExperienceBuilder(taskSchema);

export const taskSchemaExperience = builder.defineExperience({
  views: [{
    id: 'default',
    name: 'All Tasks',
    experience: builder.defineViewExperience({
      grid: {
        columns: [
          {
            name: 'title',
          },
          {
            name: 'created_at',
            component: 'CustomCell', // Use custom component
          },
        ]
      }
    }),
  }],
});
```