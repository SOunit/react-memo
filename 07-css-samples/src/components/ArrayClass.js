import React, { useState } from "react";
import classes from "./ArrayClass.module.css";

const ArrayClass = () => {
  const [isActive, setIsActive] = useState(false);

  const classArray = [classes.base];
  if (isActive) {
    classArray.push(classes["base--active"]);
  }

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleHandler}>Toggle State</button>
      <div className={classArray.join(" ")}>ArrayClass</div>
    </>
  );
};

export default ArrayClass;

// 1. use array to handle class list
