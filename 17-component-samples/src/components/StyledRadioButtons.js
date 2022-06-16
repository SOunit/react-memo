import React, { useState } from "react";
import LabelRadio from "./LabelRadio";
import classes from "./StyledRadioButtons.module.css";

// https://kiomiru.co.jp/blog/coding/radio-checkbox/
const StyledRadioButtons = () => {
  const [isMale, setIsMale] = useState(false);

  console.log("isMale", isMale);

  return (
    <form>
      <LabelRadio
        isChecked={isMale}
        onChange={() => {
          setIsMale(true);
        }}
        labelText="male"
        labelName="gender"
      />
      <label className={`${classes["label"]} ${!isMale && classes["checked"]}`}>
        <input
          className={classes["visually-hidden"]}
          type="radio"
          name="gender"
          onChange={() => {
            setIsMale(false);
          }}
          checked={!isMale}
        />
        female
      </label>
    </form>
  );
};

export default StyledRadioButtons;
