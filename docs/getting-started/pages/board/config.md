---
sidebar_position: 1
---

# Board Configuration


```tsx title="app/board/RecordItem.tsx"
interface RecordItemProps {
  record: Data<Ticket>;
}

export const RecordItem: FC<RecordItemProps> = ({ record }) => {
  // Render record item
}
```

```tsx title="app/board/config.ts"
import { defineBoardConfig } from '@headless-adminapp/app/board/utils';
import { RecordItem } from './RecordItem';

const config = defineBoardConfig({
  title: 'Ticket board',
  description: 'Drag and drop to change status',
  schema: ticketSchema,
  // sorting: [],
  projection: {
    columns: [
      // fields to retrieve
    ],
    expand: {
      // fields to retrieve from related entities
    },
  },
  PreviewComponent: RecordItem,
  columnConfigs: [
    {
      columnId: 'open',
      title: 'Open',
      filter: {
        // filter condition
      },
      acceptSourceIds: ['in_progress', 'resolved'],
      updateFn: async (context) => {
        // do something
      },
    },
    {
      columnId: 'in_progress',
      title: 'In Progress',
      filter: {
        // filter condition
      },
      acceptSourceIds: ['open', 'resolved'],
      updateFn: async (context) => {
        // do something
      },
    },
    // ... other columns
  ],
});
```