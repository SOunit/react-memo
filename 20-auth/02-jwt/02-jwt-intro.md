# url

- 【JWT】 入門
  https://qiita.com/knaot0/items/8427918564400968bd2b#jwt%E3%81%AE%E7%94%9F%E6%88%90

# point

- get auth data from token
- add token to request
- generate token from `email, password`

# flow

## login

- client: send `email, password` to server
- server: create user data in db
- server: get userId and generate token
- server: send token back to client

## request data

- client: send `token` to server
- server: verify `token`
- server: get userId from `token`
- server: access to user data
