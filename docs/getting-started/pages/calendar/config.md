---
sidebar_position: 1
---

# Calendar Configuration

```ts title="app/calendar/config/index.ts"
import { defineCalendarConfig } from '@headless-adminapp/app/calendar/utils';

const config = defineCalendarConfig({
  eventsResolver: calendarEventsResolver,
  eventResolver: calendarEventResolver, // Optional
  saveEvent: calendarEventSave,
  deleteEvent: deleteEvent,
  beforeDescriptionAttributes: beforeDescriptionAttributes, // Optional
  afterDescriptionAttributes: afterDescriptionAttributes, // Optional
  filterAttributes: filterAttributes, // Optional
  defaultFilter: { // Optional
    view: 'all',
  },
  title: 'Appointments',
  description: 'Manage your appointments',
  eventLabel: 'Appointment',
});
```

```tsx title="app/calendar/config/index.ts"
export const calendarEventsResolver: CalendarEventsResolverFn<
  FilterAttributes
> = async (options) => {
  const result = await dataService.retriveRecords<Appointment>({
    logicalName: 'appointments', // Entity name
    sort: [],
    columns: [
      'id',
      'title',
      'start',
      'end',
      'allDay',
      'description',
      // ... other fields
    ],
    limit: 5000,
  });

  return result.records.map((record) => ({
    id: record.id,
    title: record.title ?? '',
    start: record.start ? new Date(record.start) : null,
    end: record.end ? new Date(record.end) : null,
    description: record.description,
    allDay: record.allDay ?? false,
  }));
};

export const calendarEventSave: CalendarEventSaveFn = async ({ event }) => {
  if (event.id) {
    // Update existing event
  } else {
    // Create new event
  }
};

export const deleteEvent: DeleteEventFn = async ({ eventId }) => {
  // Delete event
};
```
