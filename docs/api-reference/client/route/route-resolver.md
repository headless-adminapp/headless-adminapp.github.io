---
sidebar_position: 1
---

# RouteResolver

The `RouteResolver` function is used to resolve the URL for a given page item. The function is passed to the `Router` component as a prop.

```ts
type RouteResolver = (item: NavPageItem, basePath: string | undefined) => string;
```
