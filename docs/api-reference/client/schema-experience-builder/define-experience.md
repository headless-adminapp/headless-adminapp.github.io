---
sidebar_position: 1
---

# defineExperience

```ts
builder.defineExperience({
  Icon, // Optional
  views, // Optional (Default view will be created if not provided)
  forms, // Optional (Default form will be created if not provided)
  lookups, // Optional (Default lookup will be created if not provided)
  associatedViews, // Optional (Default associated view will be created if not provided)
  quickCreateForms, // Optional
  defaultViewId, // Optional (Default 'default' or first view id will be used if not provided)
  defaultFormId, // Optional (Default 'default' or first form id will be used if not provided)
  defaultLookupId, // Optional (Default 'default' or first lookup id will be used if not provided)
  defaultAssociatedViewId, // Optional (Default 'default' or first associated view id will be used if not provided)
  viewCommands, // Optional (Default view commands will be used from app configuration if not provided)
  formCommands, // Optional (Default form commands will be used from app configuration if not provided)
  subgridCommands, // Optional (Default subgrid commands will be used from app configuration if not provided)
});
```

| Name                      | Type                                    | Description                                                                           |
| :------------------------ | :-------------------------------------- | :------------------------------------------------------------------------------------ |
| `Icon`                    | [Icon](/docs/api-reference/client/icon) | Icon for schema                                                                       |
| `views`                   | AsyncView[]                             | Views for schema (Default view will be created if not provided)                       |
| `forms`                   | AsyncForm[]                             | Forms for schema (Default form will be created if not provided)                       |
| `lookups`                 | AsyncView[]                             | Lookups for schema (Default lookup will be created if not provided)                   |
| `associatedViews`         | AsyncView[]                             | Associated views for schema (Default associated view will be created if not provided) |
| `quickCreateForms`        | AsyncForm[]                             | Quick create forms for schema                                                         |
| `defaultViewId`           | string                                  | Default view id (Default `default` or first view id)                                  |
| `defaultFormId`           | string                                  | Default form id (Default `default` or first form id)                                  |
| `defaultLookupId`         | string                                  | Default lookup id (Default `default` or first)                                        |
| `defaultAssociatedViewId` | string                                  | Default associated view id (Default `default` or first)                               |
| `viewCommands`            | Command[]                               | View commands (Default commands inherit from app configuration)                       |
| `formCommands`            | Command[]                               | Form commands (Default commands inherit from app configuration)                       |
| `subgridCommands`         | Command[]                               | Subgrid commands (Default commands inherit from app configuration)                    |
