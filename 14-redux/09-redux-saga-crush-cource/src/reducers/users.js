import { USER_ACTIONS } from "../actions";

const initialState = { users: [], loading: false, error: null };

const users = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.GET_USERS_REQUESTED: {
      return { ...state, loading: true };
    }
    case USER_ACTIONS.GET_USERS_SUCCESS: {
      return { ...state, loading: false, users: action.users };
    }
    case USER_ACTIONS.GET_USERS_FAILED: {
      return { ...state, loading: false, error: action.message };
    }

    default:
      return state;
  }
};

export default users;
