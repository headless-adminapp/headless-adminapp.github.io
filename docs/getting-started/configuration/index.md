---
sidebar_position: 2
---

# Configurations

Schema, Schema Experience, App, Plugin, and Stores are essential components that need to be configured to ensure the smooth operation and customization of your application.

After configuring [stores](/docs/getting-started/configuration/client/store), add it to AppLayout to make it available to the application.

```tsx title="AppLayout.tsx"
<LayoutProvider
    // ...
    dataService={dataService}
    metadataProps={{
      appStore,
      experienceStore: clientExperienceStore,
      schemaStore: clientSchemaStore,
    }}
>
  <App appId="default">{children}</App>
</LayoutProvider>
```
