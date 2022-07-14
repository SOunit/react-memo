# url

- Learn to Add Pagination to Your Website | Material UI
  https://www.youtube.com/watch?v=37xPlDBaA4A

# point

- pagination fire fetching data

  - create vars
    - `ITEMS_PER_PAGE` = 3 - to fetch data
    - `pagination`
      - `skip` = 0 - to fetch data
      - `limit` = `ITEMS_PER_PAGE` - to fetch data
      - `count` = 0 - to show total page
  - setup `useEffect` to fetch data
    - pass `skip`, `limit` to fetch `items` data
    - update `pagination` state
    - update `items` state
  - mui `Pagination` component update `skip`, `limit` via `onChange`
    - `useEffect` has dependency on `skip`, `limit`

- use `redux-toolkit` to update `items` from `pagination` component
