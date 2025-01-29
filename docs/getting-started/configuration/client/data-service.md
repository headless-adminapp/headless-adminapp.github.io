---
sidebar_position: 11
---

# Data Service

```ts title="config/dataService.ts"
import { RestDataService } from '@headless-adminapp/app/transport/RestDataService';

export const dataService = new RestDataService({
  endpoint: '/api/data', // The endpoint to the data service
});
```

## Register Data Service

```tsx AppLayout.tsx
<LayoutProvider
  dataService={dataService}
  ...
>
...
</LayoutProvider>
```