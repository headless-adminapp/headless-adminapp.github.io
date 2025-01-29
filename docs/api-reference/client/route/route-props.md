---
sidebar_position: 1
---

# RouteProps

The `RouteProps` object is used to pass route information to the `AppLayout` component.

| Name | Type | Description | Required |
| :--- | :--- | :--- | :--- |
| `router` | [RouterInstance]((/docs/api-reference/client/route/router-instance)) | Instance of [RouterInstance]((/docs/api-reference/client/route/router-instance)) | Yes |
| `pathname` | `string` | The pathname. | Yes |
| `searchParams` | `URLSearchParams` | The search params. | Yes |
| `basePath` | `string` | The base path. | No |
| `routeResolver` | [RouteResolver](/docs/api-reference/client/route/route-resolver) | A function that resolve route based on inputs | No |
| `isRouteActive` | [IsRouteActive](/docs/api-reference/client/route/is-route-active) | A function to check if route is active | No |

