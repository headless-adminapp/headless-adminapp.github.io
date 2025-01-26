---
sidebar_position: 3
---

# App Experience

```ts title="app/default.ts"
export const defaultApp: AppExperience = {
  id: 'default',
  logo: {
    image: 'https://example.com/logo.png',
  },
  title: 'Headless Admin App',
  quickActionItems: [], // Quick action items showen in the header
  navItems: navPageGroupAreas, // Navigation items shown in the sidebar
  viewCommands: commands.view, // Default command bar items for listing views
  formCommands: commands.form, // Default command bar items for form
  subgridCommands: commands.subgrid, // Default command bar items for subgrid
}
```

```ts title="navigations.ts"
import {
  NavPageGroupArea,
  PageType,
} from '@headless-adminapp/core/experience/app';

export const navPageGroupAreas: NavPageGroupArea[] = [
  {
    label: 'Main',
    groups: [
      {
        label: 'Data',
        items: [
          {
            type: PageType.EntityView,
            logicalName: 'tasks',
          },
        ],
      },
    ],
  },
];
```

```ts title="commands.ts"
import { DefaultCommandBuilder } from '@headless-adminapp/app/builders/CommandBuilder/DefaultCommandBuilder';
import { iconSet } from '@headless-adminapp/icons-fluent';

export const commands = DefaultCommandBuilder.createDefaultCommands({
  icons: {
    Delete: iconSet.Delete,
    Edit: iconSet.Edit,
    Export: iconSet.Export,
    ExportCsv: iconSet.ExportCsv,
    ExportExcel: iconSet.ExportExcel,
    New: iconSet.Add,
    Refresh: iconSet.Refresh,
    Save: iconSet.Save,
    SaveAndClose: iconSet.Save,
  },
});
```
