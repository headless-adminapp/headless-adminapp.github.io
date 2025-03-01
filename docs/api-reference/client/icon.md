# Icon

The Icon component is a function that returns a JSX element. It accept some props to customize the icon.

```tsx
export type IconProps = {
  color?: string;
  size?: number | 'inherit' | (string & {});
  opacity?: number;
  filled?: boolean;
  className?: string;
};

export type Icon = (props: IconProps) => JSX.Element | null;
```
