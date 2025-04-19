---
sidebar_position: 1
---

# Server SDK Base

The `ServerSdk` class provides an abstract base class for server-side SDK implementations. It includes methods for validating and executing various operations such as creating, updating, deleting, and retrieving records.

:::info
This is abstract class and must be extended to implement the required methods. Currently `MongoServerSdk` and `SequelizeServerSdk` are available, but you can create your own implementation based on your needs.
:::

### Constructor

```typescript
constructor(options: Omit<Options, 'context'> & { context?: SdkContext })
```

Creates an instance of `ServerSdk`.

#### Options

| Name                   | Type                    | Description                 | Required |
| :--------------------- | :---------------------- | :-------------------------- | :------- |
| `schemaStore`          | `ISchemaStore`          | The schema store.           | Yes      |
| `context`              | `SdkContext`            | The SDK context.            | No       |
| `pluginStore`          | `IPluginStore`          | The plugin store.           | No       |
| `dataFilter`           | `IDataFilter`           | The data filter.            | No       |
| `defaultValueProvider` | `IDefaultValueProvider` | The default value provider. | No       |
| `autoNumberProvider`   | `IAutoNumberProvider`   | The auto number provider.   | No       |

### Methods

#### `execute`

```typescript
public async execute(params: ExecuteParams): Promise<unknown>
```

Executes the operation with session management.

##### ExecuteParams

| Name      | Type          | Description                              | Required |
| :-------- | :------------ | :--------------------------------------- | :------- |
| `type`    | `ExecuteType` | The type of operation.                   | Yes      |
| `payload` | -             | The payload based on the operation type. | Yes      |

#### `startSesssion`

```typescript
protected abstract startSesssion(): Promise<void>
```

Starts a session.

#### `commitSession`

```typescript
protected abstract commitSession(): Promise<void>
```

Commits the current session.

#### `abortSession`

```typescript
protected abstract abortSession(): Promise<void>
```

Aborts the current session.

#### `endSession`

```typescript
protected abstract endSession(): Promise<void>
```

Ends the current session.

#### `retriveRecord`

```typescript
protected abstract retriveRecord<T extends Record<string, unknown>>(params: RetriveRecordParams): Promise<RetriveRecordResult<T>>
```

Retrieves a single record based on the provided parameters.

#### `retriveRecords`

```typescript
protected abstract retriveRecords<T extends Record<string, unknown>>(params: RetriveRecordsParams): Promise<RetriveRecordsResult<T>>
```

Retrieves multiple records based on the provided parameters.

#### `deleteRecord`

```typescript
protected abstract deleteRecord(params: DeleteRecordParams): Promise<DeleteRecordResult>
```

Deletes a record based on the provided parameters.

#### `createRecord`

```typescript
protected abstract createRecord(params: CreateRecordParams): Promise<CreateRecordResult>
```

Creates a new record based on the provided parameters.

#### `updateRecord`

```typescript
protected abstract updateRecord(params: UpdateRecordParams): Promise<UpdateRecordResult>
```

Updates an existing record based on the provided parameters.

#### `retriveAggregate`

```typescript
protected abstract retriveAggregate<T = unknown>(params: AggregateQuery): Promise<T[]>
```

Retrieves aggregated data based on the provided parameters.

#### `getChangedValues`

```typescript
protected getChangedValues<T extends Record<string, any>>(previousData: T, newData: T): ChangedValues
```

Gets the changed values between the previous and new data.

#### `getDependedAttributes`

```typescript
protected getDependedAttributes(schema: Schema<SA>): Array<{ attributeName: string; schemaLogicalName: string; behavior?: LookupBehavior }>
```

Gets the attributes that depend on the given schema.
