import React from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/errorSlice";

const Items = () => {
  const dispatch = useDispatch();

  const itemErrorHandler = () => {
    dispatch(errorActions.setError("Item Error!"));
  };

  return (
    <div>
      <h1>Items</h1>
      <button className="px-5 py-3 bg-blue-300" onClick={itemErrorHandler}>
        Item error!
      </button>
    </div>
  );
};

export default Items;
