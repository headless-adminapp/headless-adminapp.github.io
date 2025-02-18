# Routes

```tsx AppLayout.tsx
<LayoutProvider
  routeProps={{
    router,
    pathname,
    searchParams,
    basePath, // optional
    routeResolver, // optional,
    isRouteActive, // optional
  }}
  ...
>
...
</LayoutProvider>
```

**Tip:** You can use the `useRouter`, `usePathName` and `useSearchParams` hook from `next/navigation` for nextjs projects.

Check the [RouteProps](/docs/api-reference/client/route/route-props) for more information.
