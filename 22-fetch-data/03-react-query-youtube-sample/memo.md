# React Query deals with

- caching
- de-duping
- optimistic update
- background refetching
- data fetching
- global state

# Data fetching in React sucks

- so many to tack in react when fetching data
  - loading state
  - error state
  - caching
  - de-duping / less data usage for mobile users

# steps

- install `react-query`
- setup react-query-client in `index.js`
- setup react-query-devtool in `index.js`

- use `useQuery` in `react-query`
- setup key for caching and validating, key is very important

- try to fetch data in error
  - can configure
  - several times by default
