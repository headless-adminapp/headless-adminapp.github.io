---
sidebar_position: 3
---

# defineFormExperience

defineFormExperience is helper function to define form experience for a schema.

```ts
builder.defineFormExperience({
  // ...
});
```

### Define form experience with controls names only

```ts
builder.defineFormExperience(['title', 'created_at']);
```

### Advance form experience

```ts
builder.defineFormExperience({
  useHookFn, // Optional
  relatedItems, // Optional
  processFlow, // Optional
  cloneAttributes, // Optional
  defaultValues, // Optional
  includeAttributes, // Optional
  headerControls, // Optional
  tabs, // Required (List of tabs)
});
```

#### Configure tab

```ts
// Config each columns
const tab1 = {
  name: 'general',
  label: 'General',
  tabColumns, // Required (List of tabColumns)
};

// or start with sections
const tab1 = {
  name: 'general',
  label: 'General',
  sections: // Required (List of sections)
};

// or directly pass controls
const tab1 = {
  name: 'general',
  label: 'General',
  controls, // Required (List of controls)
};
```

#### Configure section

```ts
const section = {
  name,
  label,
  columnCount,
  labelPosition,
  localizedLabels,
  hidden,
  hideLabel,
  noPadding,
  controls, // Required (List of controls)
};
```

#### Configure control

```ts
// Define controls by attribute names
const controls = ['title', 'created_at'];

// or
// Define controls by control object
const controls = [
  {
    type: 'standard',
    attributeName: 'title',
  },
  {
    type: 'standard',
    attributeName: 'created_at',
  },
];

// or mixed mode
const controls = [
  'title',
  {
    type: 'standard',
    attributeName: 'created_at',
  },
];
```

### Use custom hook

```tsx title="useCustomHook.ts"
import {
  useContextKey,
  useFormInstance,
} from '@headless-adminapp/app/dataform';
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
