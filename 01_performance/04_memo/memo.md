# issue

- re-render component which has no update

# fix

- use `memo` from `react` package
- use `useCallback` for `memo` to work well
- `memo` crate cache of component and prevent re-render only if component is same
- if function is re-created, that means component is different
- so `useCallback` comes in to prevent creating new function

# sample

- `snack` component
- to prevent `snack` render, wrap `snack` component with `memo`

# code

- before fix, all snacks were re-rendered in snack list

https://github.com/SOunit/react502/commit/dc38330a4d3ad031260e52636bbdad7d196b09ec
