---
sidebar_position: 1
---

# MongoSchemaStore

MongoSchemaStore is extended from the `SchemaStore` class and provides an implementation for MongoDB.

## Methods

### `register`  

```ts
register<S extends SA>(schema: Schema<S>): void
```

Registers a schema in the schema store and define mongoose model.

### `getModel`

```ts
getModel<S extends SA>(logicalName: string): Model<InferredDbSchemaType<S>>
```

Get the mongoose model for the given logical name.
