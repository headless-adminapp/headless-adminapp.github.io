---
sidebar_position: 21
---

# Plugin

### Plugin Store

The plugin store is a place where you can register your custom logic to run before or after the execution of a specific message. You can register multiple plugins for the same message and stage.

```ts title="config/plugins/store.ts"
import {
  DatabaseContext,
  ExecutionStage,
  MessageName,
  PluginStore,
  ServerSdkContext,
} from '@headless-adminapp/server-sdk';

export const pluginStore = new PluginStore<ServerSdkContext, DatabaseContext>();

pluginStore.register({
  logicalName: '',
  messageName: MessageName.Create,
  stage: ExecutionStage.PreOperation,
  attributes: [],
  action: async (context) => {
    console.log(
      'I will run before create record for any record'
    );
  },
});

pluginStore.register({
  logicalName: 'tasks',
  messageName: MessageName.Create,
  stage: ExecutionStage.PostOperation,
  attributes: [],
  action: async (context) => {
    console.log(
      'I will run after create record for task record'
    );
  },
});
```

### Attach Plugin Store to sdk

```ts title="data/route.ts"
const sdk: IServerSdk = new MongoServerSdk<SdkContext>({
  schemaStore,
  pluginStore,
});
```

API Reference: [Plugin](/docs/api-reference/plugin)
