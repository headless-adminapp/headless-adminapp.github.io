---
sidebar_position: 1
---

# Data Types & Operators

### Data Types

#### String

- [eq](#eq) - Equals to
- [ne](#ne) - Does not equals to
- [like](#like) - Contains
- [not-like](#not-like) - Does not contain
- [begins-with](#begins-with) - Begins with
- [not-begin-with](#not-begin-with) - Does not begin with
- [ends-with](#ends-with) - Ends with
- [not-end-with](#not-end-with) - Does not end with
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Number

- [eq](#eq) - Equals to
- [ne](#ne) - Does not equal to
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data
- [gt](#gt) - Greater than
- [gte](#gte) - Greater than or equals to
- [lt](#lt) - Less than
- [lte](#lte) - Less than or equals to
- [between](#between) - Between

#### Money

- [eq](#eq) - Equals to
- [ne](#ne) - Does not equal to
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data
- [gt](#gt) - Greater than
- [gte](#gte) - Greater than or equals to
- [lt](#lt) - Less than
- [lte](#lte) - Less than or equals to
- [between](#between) - Between

#### Date

- [on](#on) - Date is equals to
- [on-or-after](#on-or-after) - Date is on or after
- [on-or-before](#on-or-before) - Date is on or before
- [today](#today) - Today
- [yesterday](#yesterday) - Yesterday
- [tomorrow](#tomorrow) - Tomorrow
- [this-week](#this-week) - This week
- [this-month](#this-month) - This month
- [this-year](#this-year) - This year
- [this-fiscal-year](#this-fiscal-year) - This fiscal year
- [next-week](#next-week) - Next week
- [next-seven-days](#next-seven-days) - In the next seven days
- [next-month](#next-month) - Next month
- [next-year](#next-year) - Next year
- [next-fiscal-year](#next-fiscal-year) - Next fiscal year
- [next-x-hours](#next-x-hours) - In the next x hours
- [next-x-days](#next-x-days) - In the next x days
- [next-x-weeks](#next-x-weeks) - In the next x weeks
  [next-x-months](#next-x-months) - In the next x months
- [next-x-years](#next-x-years) - In the next x years
- [last-week](#last-week) - Last week
- [last-seven-days](#last-seven-days) - In the last seven days
- [last-month](#last-month) - Last month
- [last-year](#last-year) - Last year
- [last-fiscal-year](#last-fiscal-year) - Last fiscal year
- [last-x-hours](#last-x-hours) - In the last x hours
- [last-x-days](#last-x-days) - In the last x days
- [last-x-weeks](#last-x-weeks) - In the last x weeks
- [last-x-months](#last-x-months) - In the last x months
- [last-x-years](#last-x-years) - In the last x years
- [olderthan-x-hours](#olderthan-x-hours) - Older than x hours
- [olderthan-x-days](#olderthan-x-days) - Older than x days
- [olderthan-x-weeks](#olderthan-x-weeks) - Older than x weeks
- [olderthan-x-months](#olderthan-x-months) - Older than x months
- [olderthan-x-years](#olderthan-x-years) - Older than x years
- [in-fiscal-year](#in-fiscal-year) - In the fiscal year
- [between](#between) - Between two dates
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Choice

- [in](#in) - Equals to
- [not-in](#not-in) - Does not equal to
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Lookup

- [in](#in) - Equals to
- [not-in](#not-in) - Does not equal to
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Boolean

- [in](#in) - Equals to
- [not-in](#not-in) - Does not equal to
- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Id

- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Attachment

- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

#### Mixed

- [not-null](#not-null) - Contains data
- [null](#null) - Does not contain data

### Operators

#### eq

Value is equal to the specified value.

```ts
{
  field: 'fieldName',
  operator: 'eq',
  value: 'value'
}
```

Data types: [String](#string), [Number](#number), [Money](#money)

> **Note:** String comparisons are case insensitive, while other data types should be compared as is.

#### ne

Value is not equal to the specified value.

```ts
{
  field: 'fieldName',
  operator: 'ne',
  value: 'value'
}
```

Data types: [String](#string), [Number](#number), [Money](#money)

#### gt

```ts
{
  field: 'fieldName',
  operator: 'gt',
  value: 'value',
}
```

Data types: [Number](#number), [Money](#money)

#### lt

```ts
{
  field: 'fieldName',
  operator: 'lt',
  value: 'value',
}
```

Data types: [Number](#number), [Money](#money)

#### gte

```ts
{
  field: 'fieldName',
  operator: 'gte',
  value: 'value',
}
```

Data types: [Number](#number), [Money](#money)

#### lte

```ts
{
  field: 'fieldName',
  operator: 'lte',
  value: 'value',
}
```

Data types: [Number](#number), [Money](#money)

#### like

```ts
{
  field: 'fieldName',
  operator: 'like',
  value: 'value',
}
```

Data types: [String](#string)

#### not-like

```ts
{
  field: 'fieldName',
  operator: 'not-like',
  value: 'value',
}
```

Data types: [String](#string)

#### begins-with

```ts
{
  field: 'fieldName',
  operator: 'begins-with',
  value: 'value',
}
```

Data types: [String](#string)

#### not-begin-with

```ts
{
  field: 'fieldName',
  operator: 'not-begin-with',
  value: 'value',
}
```

Data types: [String](#string)

#### ends-with

```ts
{
  field: 'fieldName',
  operator: 'ends-with',
  value: 'value',
}
```

Data types: [String](#string)

#### not-end-with

```ts
{
  field: 'fieldName',
  operator: 'not-end-with',
  value: 'value',
}
```

Data types: [String](#string)

#### not-null

```ts
{
  field: 'fieldName',
  operator: 'not-null',
  value: 'value',
}
```

Data types: [String](#string), [Number](#number), [Money](#money), [Date](#date), [Choice](#choice), [Lookup](#lookup), [Boolean](#boolean), [Id](#Id), [Attachment](#Attachment), [Mixed](#Mixed)

#### null

```ts
{
  field: 'fieldName',
  operator: 'null',
  value: 'value',
}
```

Data types: [String](#string), [Number](#number), [Money](#money), [Date](#date), [Choice](#choice), [Lookup](#lookup), [Boolean](#boolean), [Id](#Id), [Attachment](#Attachment), [Mixed](#Mixed)

#### on

```ts
{
  field: 'fieldName',
  operator: 'on',
  value: 'value',
}
```

Data types: [Date](#date)

#### on-or-after

```ts
{
  field: 'fieldName',
  operator: 'on-or-after',
  value: 'value',
}
```

Data types: [Date](#date)

#### on-or-before

```ts
{
  field: 'fieldName',
  operator: 'on-or-before',
  value: 'value',
}
```

Data types: [Date](#date)

#### today

```ts
{
  field: 'fieldName',
  operator: 'today',
  value: 'value',
}
```

Data types: [Date](#date)

#### yesterday

```ts
{
  field: 'fieldName',
  operator: 'yesterday',
  value: 'value',
}
```

Data types: [Date](#date)

#### tomorrow

```ts
{
  field: 'fieldName',
  operator: 'tomorrow',
  value: 'value',
}
```

Data types: [Date](#date)

#### this-week

```ts
{
  field: 'fieldName',
  operator: 'this-week',
  value: 'value',
}
```

Data types: [Date](#date)

#### this-month

```ts
{
  field: 'fieldName',
  operator: 'this-month',
  value: 'value',
}
```

Data types: [Date](#date)

#### this-year

```ts
{
  field: 'fieldName',
  operator: 'this-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### this-fiscal-year

```ts
{
  field: 'fieldName',
  operator: 'this-fiscal-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-week

```ts
{
  field: 'fieldName',
  operator: 'next-week',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-seven-days

```ts
{
  field: 'fieldName',
  operator: 'next-seven-days',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-month

```ts
{
  field: 'fieldName',
  operator: 'next-month',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-year

```ts
{
  field: 'fieldName',
  operator: 'next-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-fiscal-year

```ts
{
  field: 'fieldName',
  operator: 'next-fiscal-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-x-hours

```ts
{
  field: 'fieldName',
  operator: 'next-x-hours',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-x-days

```ts
{
  field: 'fieldName',
  operator: 'next-x-days',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-x-weeks

```ts
{
  field: 'fieldName',
  operator: 'next-x-weeks',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-x-months

```ts
{
  field: 'fieldName',
  operator: 'next-x-months',
  value: 'value',
}
```

Data types: [Date](#date)

#### next-x-years

```ts
{
  field: 'fieldName',
  operator: 'next-x-years',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-week

```ts
{
  field: 'fieldName',
  operator: 'last-week',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-seven-days

```ts
{
  field: 'fieldName',
  operator: 'last-seven-days',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-month

```ts
{
  field: 'fieldName',
  operator: 'last-month',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-year

```ts
{
  field: 'fieldName',
  operator: 'last-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-fiscal-year

```ts
{
  field: 'fieldName',
  operator: 'last-fiscal-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-x-hours

```ts
{
  field: 'fieldName',
  operator: 'last-x-hours',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-x-days

```ts
{
  field: 'fieldName',
  operator: 'last-x-days',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-x-weeks

```ts
{
  field: 'fieldName',
  operator: 'last-x-weeks',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-x-months

```ts
{
  field: 'fieldName',
  operator: 'last-x-months',
  value: 'value',
}
```

Data types: [Date](#date)

#### last-x-years

```ts
{
  field: 'fieldName',
  operator: 'last-x-years',
  value: 'value',
}
```

Data types: [Date](#date)

#### olderthan-x-hours

```ts
{
  field: 'fieldName',
  operator: 'olderthan-x-hours',
  value: 'value',
}
```

Data types: [Date](#date)

#### olderthan-x-days

```ts
{
  field: 'fieldName',
  operator: 'olderthan-x-days',
  value: 'value',
}
```

Data types: [Date](#date)

#### olderthan-x-weeks

```ts
{
  field: 'fieldName',
  operator: 'olderthan-x-weeks',
  value: 'value',
}
```

Data types: [Date](#date)

#### olderthan-x-months

```ts
{
  field: 'fieldName',
  operator: 'olderthan-x-months',
  value: 'value',
}
```

Data types: [Date](#date)

#### olderthan-x-years

```ts
{
  field: 'fieldName',
  operator: 'olderthan-x-years',
  value: 'value',
}
```

Data types: [Date](#date)

#### in-fiscal-year

```ts
{
  field: 'fieldName',
  operator: 'in-fiscal-year',
  value: 'value',
}
```

Data types: [Date](#date)

#### between

```ts
{
  field: 'fieldName',
  operator: 'between',
  value: 'value',
}
```

Data types: [Date](#date), [Number](#number), [Money](#money)

#### in

```ts
{
  field: 'fieldName',
  operator: 'in',
  value: 'value',
}
```

Data types: [Choice](#choice), [Lookup](#lookup), [Boolean](#boolean)

#### not-in'

```ts
{
  field: 'fieldName',
  operator: 'not-in'',
  value: 'value',
}
```

Data types: [Choice](#choice), [Lookup](#lookup), [Boolean](#boolean)
