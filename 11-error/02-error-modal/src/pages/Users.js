import React from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/errorSlice";

const Users = () => {
  const dispatch = useDispatch();

  const userErrorHandler = () => {
    dispatch(errorActions.setError("User Error!"));
  };

  return (
    <div>
      <h1>Users</h1>
      <button className="px-5 py-3 bg-blue-300" onClick={userErrorHandler}>
        user error!
      </button>
    </div>
  );
};

export default Users;
