---
sidebar_position: 11
---

# File Service

```ts title="config/fileService.ts"
import { IFileService } from '@headless-adminapp/core/transport';

export const fileService: IFileService = {
  uploadFile: async (file, options) => {
    // put your file upload logic here and return the file URL
    return url;
  },
};
```

## Register File Service

```tsx AppLayout.tsx
<LayoutProvider
  fileService={fileService}
  ...
>
...
</LayoutProvider>
```