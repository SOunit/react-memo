import React from "react";
import classes from "./AssignClass.module.css";

const AssignClass = (props) => {
  return (
    <div className={`${classes["base"]} ${props.classes}`}>AssignClass</div>
  );
};

export default AssignClass;
