import { TextField } from "@mui/material";
import React from "react";

const Input = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
