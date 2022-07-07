import React from "react";
import { useDispatch } from "react-redux";
import { errorActions } from "../store/errorSlice";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  const { isOpen, title } = props;
  const dispatch = useDispatch();

  console.log("isOpen", isOpen);
  console.log("title", title);

  const closeModalHandler = () => {
    dispatch(errorActions.setError(null));
  };

  return (
    <div
      className={`bg-white flex left-1/4 w-2/4 top-1/4 flex-col justify-center ease-out duration-500 fixed items-center h-32 ${
        isOpen
          ? "translate-y-0 z-20 opacity-100"
          : "translate-y-[-5rem] -z-10 opacity-0"
      }`}
    >
      <div>{title}</div>
      <button onClick={closeModalHandler}>OK</button>
    </div>
  );
};

export default Modal;
