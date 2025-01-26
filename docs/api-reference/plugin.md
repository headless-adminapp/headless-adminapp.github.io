---
sidebar_position: 1
---

# Plugin

### Plugin Step

The plugin step is an object that contains the following properties:

- `logicalName` - The logical name of the entity. (Empty string for all entities)
- `messageName` - Enum `MessageName`. Possible values are:
  - `Create` - Represents a create operation.
  - `Update` - Represents an update operation.
  - `Delete` - Represents a delete operation.
- `stage` - Enum `ExecutionStage`. Possible values are:
  - `PreOperation` - Represents a pre-operation stage.
  - `PostOperation` - Represents a post-operation stage.
- `attributes` - The attributes to filter the plugin and run only for specific attributes modified or created. If empty, it will run for all attributes.
- `action` - The function that will run when the plugin is triggered.

### Plugin Action Parameters Context

The plugin context is an object that contains the following properties:

- `data` - The data that is being processed.
- `logicalName` - The logical name of the entity.
- `id` - The ID of the entity. (Pre-operation of create will not have an ID)
- `changedValues` - The changed values of the entity.
- `snapshot` - The snapshot of the record in the database.
- `sdkContext` - The SDK context.
- `dbContext` - The database context.
