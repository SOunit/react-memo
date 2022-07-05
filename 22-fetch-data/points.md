# overall

- 90% just use `useQuery` and `useMutation`
- easy handle in client state data fetch in elegant way
- data fetch in react sucks

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

# query invalidation

- automatic refetch after mutation success
- use `useQueryClient` to setup query invalidation

# 2 approaches to set latest data after mutation

1. refetch pattern using query invalidation
   - get request after post request
   - just fetch new data, backend do not have to return new data
   ```
   useMutation(api.createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
   });
   ```
2. set new data pattern backend return new data

   - in case backend return new data
   - can save get request
   - url
     - https://www.youtube.com/watch?v=XI0SN5AI6YA

   ```

   ```

# optimistic update

- use these
  - `onMutate`
  - `onError`
  - `onSettled`
