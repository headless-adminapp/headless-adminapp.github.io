---
sidebar_position: 2
---

# Form page

Form page is a page that displays a form to create or edit a record of a specific entity.

### Edit record form

```tsx title="app/data/[logicalName]/[id]/page.tsx"
'use client';

import { PageEntityForm } from '@headless-adminapp/fluent/PageEntityForm';

export default function Page(props: {
  params: { logicalName: string; id: string };
}) {
  return (
    <PageEntityForm
      logicalName={props.params.logicalName}
      recordId={props.params.id}
    />
  );
}
```


### Create record form

```tsx title="app/data/[logicalName]/new/page.tsx"
'use client';

import { PageEntityForm } from '@headless-adminapp/fluent/PageEntityForm';

export default function Page(props: {
  params: { logicalName: string; id: string };
}) {
  return <PageEntityForm logicalName={props.params.logicalName} />;
}
```

> Recommended path can be changed to different path. In case of changing the page, you must configure `routeResolver` and `isRouteActive` in AppLayout.
```
