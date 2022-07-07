import React from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/errorSlice";

const Books = () => {
  const dispatch = useDispatch();

  const bookErrorHandler = () => {
    dispatch(errorActions.setError("Book Error!"));
  };

  return (
    <div>
      <h1>Books</h1>
      <button onClick={bookErrorHandler}>book error!</button>
    </div>
  );
};

export default Books;
