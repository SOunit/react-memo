# url

- Udemy, max, mern, auth section
  https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/learn/lecture/16916242#overview

# check / test

- action - result

1. login - state change to login
2. logout - state change to logout
3. auto-login - state change to login after page reload
4. auto-logout - state change to logout after a time
5. auto-logout after page reload - state change to logout after page reload and when token is expired

# mechanism / summary

- login

  - generate expiration time
    - current time + validate time duration
  - set timeout for auto-logout via useEffect using token change

- logout

  - delete stored data
  - delete set timeout via useEffect using token change

- auto-login

  - check token
  - check expiration time
  - login
    - generate expiration time
      - current time + validate time duration
    - set timeout for auto-logout

- auto-logout
  - timeout is set when user login

# manual-login

- create expiration date
- save data
  - token
  - expiration date

# manual-logout

- delete data
  - token
  - expiration date

# auto-login

- login if expiration date is future than current date
  - get data
  - check expiration date
  - call manual-login if date is future

# auto-logout

- set timeout to call logout when user login by both manual and auto login
- logout if check expiration date if past than current date

  - trigger is token set to state
  - get data
  - set timeout to logout using expiration time
