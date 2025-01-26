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
