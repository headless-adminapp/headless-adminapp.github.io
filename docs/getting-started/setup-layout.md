---
sidebar_position: 2
---

# Setup App Layout

```tsx title="AppLayout.tsx"
<LayoutProvider
    routeProps={{
      router,
      pathname,
      searchParams,
    }}
  >
    <App appId="default">{children}</App>
  </LayoutProvider>
);
```

Route props are required and should be passed to the `LayoutProvider` component.

**Tip:** You can use the `useRouter`, `usePathName` and `useSearchParams` hook from `next/navigation` for nextjs projects.

### LayoutProvider Props

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `theme` | `Theme` | The theme object. | No |
| `routeProps` | [RouteProps](/docs/api-reference/client/route/route-props) | The route props. | Yes |
| `queryClient` | `QueryClient` | React-Query instance | No |
| `localeProps` | `LocalProviderProps` | Locale information | No |
| `dataService` | `IDataService` | Data service instance | Required for crud operation |
| `fileService` | `IFileService` | File service instance | Required for file upload |
| `authProps` | `AuthProps` | Auth information | Required for authentication |
| `authPlaceholder` | `ReactNode` | Auth placeholder | No |
| `metadataProps` | `MetadataProviderProps` | Metadata information | No |
