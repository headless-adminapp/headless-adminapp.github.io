---
sidebar_position: 2
---

# Schema Experience

Schema Experience allows you to tailor the schema for specific use cases, such as forms, lists, or detail views. By defining the schema experience, you can customize how the schema is presented and interacted with, ensuring it meets the requirements of your application.

**Experience schema with default layout**

```ts title="experience/task.ts"
import { SchemaExperienceBuilder } from '@headless-adminapp/app/builders';
import { taskSchema } from '../schema/task';

const builder = new SchemaExperienceBuilder(taskSchema);

export const taskSchemaExperience = builder.defineExperience({});
```

[Schema Experience Builder API Reference](/docs/api-reference/client/schema-experience-builder)
