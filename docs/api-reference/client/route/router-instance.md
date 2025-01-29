---
sidebar_position: 1
---

# RouterInstance

The `RouterInstance` object is an instance of the router, providing methods to navigate and manipulate the browser history.

### `back`

```ts
back(): void;
```

Go back to the previous page.

### `forward`

```ts
forward(): void;
```

Go forward to the next page.

### `push`

```ts
push(href: string, options?: NavigateOptions): void;
```

Navigate to the given URL.

### `replace`

```ts
replace(href: string, options?: NavigateOptions): void;
```

Replace the current URL with the given URL.

