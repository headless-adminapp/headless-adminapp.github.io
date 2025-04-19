# Data Transport

Data transport is a core part of the framework, allowing you to interact with data sources in a consistent and efficient manner. The data transport layer is responsible for sending and receiving data between the client and server, as well as handling any necessary transformations or mappings.

```ts title="server-side"
const sdk: IServerSdk = new ServerSdk({
  schemaStore,
});

const result = await sdk.execute(body);
```

```ts title="client-side"
const dataService = new RestDataService({
  endpoint: '/api/data',
});

dataService.retriveRecords({
  logicalName: 'orders',
  columns: ['id', 'name'],
});
```

How simple is that? The data transport layer abstracts away the complexities of data retrieval and manipulation, allowing you to focus on building your application logic. You can easily switch between different data sources or transport methods without having to change your application code.
