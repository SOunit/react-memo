import { call, put, takeEvery } from "redux-saga/effects";
import { USER_ACTIONS } from "../../actions";
import fetchGetUsers from "../requests/fetchUsers";

function* handleGetUsers() {
  try {
    // http request
    const users = yield call(fetchGetUsers);

    // dispatch action
    yield put({ type: USER_ACTIONS.GET_USERS_SUCCESS, users });
  } catch (err) {
    // dispatch action
    yield put({ type: USER_ACTIONS.GET_USERS_FAILED, message: err.message });
  }
}

function* watcherUserSaga() {
  yield takeEvery(USER_ACTIONS.GET_USERS_REQUESTED, handleGetUsers);
}

export default watcherUserSaga;
