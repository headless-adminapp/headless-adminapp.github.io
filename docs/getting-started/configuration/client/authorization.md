# Authorization

```tsx AppLayout.tsx
<LayoutProvider
  authProps={{
    sessionResolver,
    onUnauthorized, // optional
  }}
  authPlaceholder={AuthPlaceholder}
>
...
</LayoutProvider>
```

#### `sessionResolver`

```typescript
export type SessionResolver = () => Promise<Session>
```

A function that returns a promise that resolves to a session object.

**Example**

```typescript
export const sessionResolver: SessionResolver = async () => {
  const response = await fetch('/api/session');
  const session = await response.json();
  return session;
};
```

#### `onUnauthorized`

```typescript
export type OnUnauthorized = (reason: UnauthorizeReason) => void
```

A function that is called when the user is unauthorized.

| Reason        | Description |
| :---          | :---        |
| `sessionExpired` | The session has expired. |
| `unauthorized` | The user is unauthorized. |
| `logout` | The user has logged out. |
| `load` | Found unauthorize while initial load. |

#### `AuthPlaceholder`

```tsx
export const AuthPlaceholder: FC = () => {
  // Add your custom auth placeholder here
}
```

**Props**

| Name | Type | Description |
| :--- | :--- | :--- |
| loading | `boolean` | Indicates if the session is loading. |
| loadingError | `Error` | The error that occurred while loading the session. |
| unauthorized | `boolean` | Indicates if the user is unauthorized. |
| sessionExpired | `boolean` | Indicates if the session has expired. |
| retry | `() => void` | A function to retry loading the session. |
```
