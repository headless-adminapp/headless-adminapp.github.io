---
sidebar_position: 3
---

# Customized Form page

PageCustomEntityForm works same as regular form page, but here we can use a schema which is not bounded to any entity (db table). This is useful when we want to create or edit a form for a custom entity which is not stored in the database or transform it before doing operation on db.

Example:

1. In memory settings page, where we can store settings in memory and use it in the application.
2. Merged data of two seperate entity to show in a single form.

```tsx title="app/data/[logicalName]/[id]/page.tsx"
'use client';

import { PageCustomEntityForm } from '@headless-adminapp/fluent/PageEntityForm/PageCustomEntityForm';

export default function Page(props: {
  params: { logicalName: string; id: string };
}) {
  return (
    <PageCustomEntityForm
      logicalName={props.params.logicalName}
      recordId={props.params.id}
      schema={customSchema}
      form={customForm}
      retrieveRecord={customRetrieveRecord}
      saveRecord={customSaveRecord}
    />
  );
}
```
