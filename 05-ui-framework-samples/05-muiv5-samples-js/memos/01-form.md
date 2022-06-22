# url

- How to Design a Perfect React Material UI Form
  https://www.youtube.com/watch?v=-XKaSCU0ZLM&t=11s

# steps

- add `makeStyle`
  ```
  npm i @mui/styles
  ```
- add `theme provider`

- create form
  - `form`
  - `TextField`
  - `Grid / container`
  - `Grid / item`
- use paper

  - `Paper`

- refactor

  - add `useForm` hook

- add radio button

- refactor

  - add `controls/input`

- add selector component

  - add `controls/select`

- add checkbox component

  - convert `event.target.checked` to `event.target.value`

- add date picker component
  - install npm package
    - install main (wrapper) package
      - `npm i @material-ui/pickers`
    - install dependency (date) package
      - `npm i date-fns@next @date-io/date-fns`
