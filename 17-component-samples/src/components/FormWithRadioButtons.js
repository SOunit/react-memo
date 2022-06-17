import React, { useState } from "react";

const FormWithRadioButtons = () => {
  const [isMale, setIsMale] = useState(true);

  console.log("isMale", isMale);

  return (
    <form>
      <label>
        <input
          type="radio"
          name="gender"
          value={isMale}
          onChange={() => {
            setIsMale(true);
          }}
        />
        male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value={isMale}
          onChange={() => {
            setIsMale(false);
          }}
        />
        female
      </label>
    </form>
  );
};

export default FormWithRadioButtons;
