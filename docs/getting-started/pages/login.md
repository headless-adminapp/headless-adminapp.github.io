---
sidebar_position: 4
---

# Login


### As Page

```tsx title="app/login/page.tsx"
import { PageLogin } from '@headless-adminapp/fluent/components/PageLogin';

export default function Page() {
  return (
    <PageLogin
      logoImageurl="/logo.png", // optional
      illustrationImageUrl="/illustration.png", // optional
      onLogin={(username, password) => {
        // handle login
      }}
    />
  );
}
```

### As Dialog

```tsx
import { DialogLogin } from '@headless-adminapp/fluent/components/DialogLogin';

export default function Login() {
  return (
    <DialogLogin
      logoImageUrl="/logo.png", // optional
      onLogin={(username, password) => {
        // handle login
      }}
    />
  );
}
```
