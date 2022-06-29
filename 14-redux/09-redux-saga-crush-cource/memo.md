# React Redux Saga Crash Course - Make HTTP Requests & Middleware

https://www.youtube.com/watch?v=6GvMQ0vMXQU

# Setup redux-saga and run saga

- create `sagaMiddleware`

```
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
```

- apply middleware to redux

  - `compose`
  - `applyMiddleware`

- run saga

```
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);
```

# rootSaga

- setup watcher

```
export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
```

# watcher / handler

- create http request by `call`
- dispatch action by `put`

```
function* watcherUserSaga() {
  yield takeEvery(USER_ACTIONS.GET_USERS_REQUESTED, handleGetUsers);
}
```

# request / http request

- http request method

```
const url = `https://jsonplaceholder.typicode.com/users`;

const fetchGetUsers = () => {
  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => {
      throw err;
    });
};

export default fetchGetUsers;
```
