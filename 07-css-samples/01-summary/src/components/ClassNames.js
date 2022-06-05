import React, { useState } from "react";
import classNames from "classnames";
import classes from "./ClassNames.module.css";

const ClassNames = () => {
  const [isActive, setIsActive] = useState(false);

  const classList = classNames(classes["base"], {
    [classes["base--active"]]: isActive,
  });

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleHandler}>Toggle State</button>
      <div className={classList}>ClassNames</div>
    </>
  );
};

export default ClassNames;

// 1. use array to handle class list
