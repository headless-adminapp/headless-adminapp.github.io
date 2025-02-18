---
sidebar_position: 3
---

# Stores

Basically we have 3 types of stores in client side:

- Schema Store - Store for schema information in client side.
- Client Experience Store - Store for client experience information in client side.
- App Store - Store for app information in client side. (App Store is planned to deprecated)

## Schema Store

```tsx title="clientSchemaStore.ts"
import { SchemaStore } from '@headless-adminapp/core/store';

import { taskSchema } from '../schemas/task';

export const clientSchemaStore = new SchemaStore();

clientSchemaStore.register(taskSchema);
```

### Schema Experience Store

```tsx title="clientSchemaExperienceStore.ts"
import { SchemaExperienceStore } from '@headless-adminapp/core/store';

import { taskSchemaExperience } from './schema-experience/task';

export const clientSchemaExperienceStore = new SchemaExperienceStore();

clientSchemaExperienceStore.register(taskSchemaExperience);
```
