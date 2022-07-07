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
    <Backdrop className={isOpen ? "z-10" : "opacity-0 -z-10"}>
      <div
        className={`bg-white flex flex-col justify-center items-center h-32 w-32 ease-in ${
          isOpen ? "translate-y-0 z-10" : "translate-y-[-15rem] -z-10"
        }`}
      >
        <div>{title}</div>
        <button onClick={closeModalHandler}>OK</button>
      </div>
    </Backdrop>
  );
};

export default Modal;
