import React, { useState } from "react";

const MultiSelect = () => {
  const [values, setValues] = useState([]);

  const changeSelect = ({
    target: { name, value, selectedOptions, multiple },
  }) => {
    // const { value, name, selectedOptions, multiple } = e.target

    if (multiple) {
      value = Array.from(selectedOptions).map((option) => option.value);
    }

    setValues(value);
  };

  return (
    <>
      <label>Multiple Select</label>
      <select
        name="multipleSelect"
        value={values}
        onChange={changeSelect}
        multiple
      >
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
      <h2>Selected Values</h2>
      <div>
        {values.map((value) => (
          <p key={value}>{value}</p>
        ))}
      </div>
    </>
  );
};

export default MultiSelect;
