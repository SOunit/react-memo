export const petIncrement = (number) => {
  return {
    type: "PET_INCREASED",
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: "PET_DECREASED",
  };
};

export const USER_ACTIONS = {
  GET_USERS_REQUESTED: "GET_USERS_REQUESTED",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAILED: "GET_USERS_FAILED",
};

export const getUsers = () => {
  return {
    type: USER_ACTIONS.GET_USERS_REQUESTED,
  };
};
