---
sidebar_position: 2
---

# defineViewExperience

defineViewExperience is helper function to define view experience for a schema.

```ts
builder.defineViewExperience({
  filter, // Optional
  defaultSorting, // Optional
  grid, // Optional
  card, // Optional
});
```

##### View Experience grid

```ts
builder.defineViewExperience({
  // ...
  grid: ['title', 'created_at'],
});

// OR

builder.defineViewExperience({
  // ...
  grid: {
    columns: ['title', 'created_at'],
  },
});

// OR

builder.defineViewExperience({
  // ...
  grid: {
    columns: [
      {
        width, // Optional
        maxWidth, // Optional
        name: 'title',
        expandedKey, // Optional
        component, // Optional
        plainText, // Optional Forcing plain text rendering
      },
    ],
  },
});
```
