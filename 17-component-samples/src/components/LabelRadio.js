import React from "react";
import classes from "./LabelRadio.module.css";

const LabelRadio = (props) => {
  const { isChecked, onChange, labelText, labelName } = props;

  return (
    <label className={`${classes["label"]} ${isChecked && classes["checked"]}`}>
      <input
        className={classes["visually-hidden"]}
        type="radio"
        name={labelName}
        onChange={onChange}
        checked={isChecked}
      />
      {labelText}
    </label>
  );
};

export default LabelRadio;
