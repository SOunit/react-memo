import React from "react";

const RadioButtons = () => {
  return (
    <div
      onChange={(e) => {
        console.log(e.target.value);
      }}
    >
      <label>
        <input type="radio" value="Male" name="gender" /> Male
      </label>
      <label>
        <input type="radio" value="Female" name="gender" /> Female
      </label>
      <label>
        <input type="radio" value="Other" name="gender" /> Other
      </label>
    </div>
  );
};

export default RadioButtons;
