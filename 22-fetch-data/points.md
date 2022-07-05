# create

- just wrap `createUser method`
- mutation returns useful props

## url

https://www.youtube.com/watch?v=NYCG1o38oEQ

- create post api
  ```
  createUser(newUser){
    axios.post('/users', newUser);
  }
  ```
- call `useMutation`, returns `mutation`
- mutation can receive argument for post api
  ```
  mutation(newUser)
  ```
