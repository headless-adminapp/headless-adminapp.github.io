---
slug: custom-form
title: Custom Form
tags: [form, custom]
---

Create a custom form page using the `PageCustomEntityForm` component. This component allows you to create a form for a custom entity that is not stored in the database or transform it before performing operations on the database.

<!--truncate-->

References:

- [PageCustomEntityForm](/docs/getting-started/pages/custom-form)
- [Schema Experience Builder](/docs/api-reference/client/schema-experience-builder/)

```tsx title="data/tasks/new/page.tsx"
'use client';

import { PageCustomEntityForm } from '@headless-adminapp/fluent/PageEntityForm/PageCustomEntityForm';
import { appointmentSchema } from './config/schema';
import { form } from './config/form';
import { retriveRecordFn, saveRecordFn } from './config/utils';
import { commands } from './config/commands';

export default function Page() {
  return (
    <PageCustomEntityForm
      schema={appointmentSchema}
      form={form}
      commands={commands}
      retriveRecordFn={retriveRecordFn}
      saveRecordFn={saveRecordFn}
    />
  );
}
```

```ts title="data/tasks/new/config/retriveRecordFn.ts"
// Required only if form can be used to edit existing records
export const retriveRecordFn = async ({
  recordId,
  dataService,
  form,
  schema,
  columns,
  schemaStore,
}: RetriveRecordFn) => {
  const record = await dataService.retriveRecord({
    logicalName: schema.logicalName,;
    id: recordId;
    columns;
  })

  return record;
};
```

```ts title="data/tasks/new/config/saveRecordFn.ts"
export const saveRecordFn = async ({ values }) => {
  const result = await dataService.createRecord(
    appointmentSchema.logicalName,
    values
  );

  return {
    success: true,
    recordId: result.id,
  };
};
```

```ts title="data/tasks/new/config/commands.ts"
import { DefaultCommandBuilder } from '@headless-adminapp/app/builders/CommandBuilder/DefaultCommandBuilder';
import { iconSet } from '@headless-adminapp/icons-fluent';
import { FormCommandBuilder } from '@headless-adminapp/app/builders/CommandBuilder/FormCommandBuilder';

export const commands = [
  [
    FormCommandBuilder.createSaveCommand({
      Icon: iconSet.Save,
      text: DefaultCommandBuilder.defaultFormCommandStrings.save,
    }),
    FormCommandBuilder.createSaveAndCloseCommand({
      Icon: iconSet.Save,
      text: DefaultCommandBuilder.defaultFormCommandStrings.saveAndClose,
    }),
  ],
];
```

```ts title="data/taskss/new/config/schema.ts"
import { defineSchema } from '@headless-adminapp/core/schema/utils';

export const schema = defineSchema({
  logicalName: 'tasks',
  label: 'Task',
  pluralLabel: 'Tasks',
  idAttribute: '_id',
  primaryAttribute: 'title',
  ownership: 'global',
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
      label: 'Title',
      format: 'text',
      required: true,
    },
  },
});
```

```ts title="data/tasks/new/config/form.ts"
const builder = new SchemaExperienceBuilder(schema);

const formExperience = builder.defineFormExperience({
  tabs: [
    {
      name: 'general',
      label: 'General',
      controls: ['title'],
    },
  ],
  useHookFn, // optional
  defaultValues: () => ({
    title: 'Task Title',
  }),
});

export const form = {
  id: 'default',
  name: 'Task',
  logicalName: schema.logicalName,
  experience: formExperience,
};
```

```ts title="data/tasks/new/config/useHookFn.ts"
export function useHookFn() {
  const form = useFormInstance();

  const formRef = useRef(form);
  formRef.current = form;

  const dataService = useDataService();

  useOnFieldValueChangeListener('title', async (value) => {
    // Do something when the title field value changes
    formRef.current.setValue('totalamount', 0);
  });
}
```
