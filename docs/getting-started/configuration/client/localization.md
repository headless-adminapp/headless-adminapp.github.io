# Localization

**Static Locale**

```ts title="config/client/locale.ts"
export const locale = {
  locale: 'en-US',
  direction: 'ltr', // Optional
  language: 'en', // Optional

  timezone: 'America/New_York',
  options: {
    dateFormats: {
      long: 'MMMM d, yyyy',
      short: 'MM/dd/yyyy',
    },
    timeFormats: {
      short: 'h:mm A',
    },
    currency: {
      currency: 'USD',
      currencyDisplay: 'narrowSymbol', // 'symbol' | 'narrowSymbol' | 'code';
      currencySign: 'accounting', // 'standard' | 'accounting';
    },
  },
}
```

**Dynamic Locale**

For dynamic locale, we can store locale in a global store and update it as needed.

```ts title="config/client/useLocale.ts"
export function useLocale() {
  // return the locale object
}
```
