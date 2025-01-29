# Listing page

Listing page is a page that displays a list of records of a specific entity includes search, filter, and pagination features.

```tsx title="app/data/[logicalName]/page.tsx"
'use client';

import { useState } from 'react';
import { PageEntityView } from '@headless-adminapp/fluent/PageEntityView';

export default function Page(props: { params: { logicalName: string } }) {
  const [viewId, setViewId] = useState<string | undefined>(undefined);

  return (
    <PageEntityView
      logicalName={props.params.logicalName}
      viewId={viewId}
      onChangeView={setViewId}
    />
  );
}
```

> `app/data/[logicalName]/page.tsx` is recommended but can be changed to different path. In case of changing the page, you must configure `routeResolver` and `isRouteActive` in AppLayout.
