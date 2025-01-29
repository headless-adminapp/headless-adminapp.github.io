---
sidebar_position: 1
---

# IsRouteActive

The `IsRouteActive` function is used to determine if a route is active. The function is passed to the `Nav` component as a prop.

```ts
type IsRouteActive = (path: string, item: NavPageItem, basePath: string | undefined) => boolean;
```
