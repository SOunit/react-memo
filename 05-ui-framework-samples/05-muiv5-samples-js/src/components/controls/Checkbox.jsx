import React from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefaultEventParameter = (name, value) => {
    return { target: { name, value } };
  };

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(event) =>
              onChange(
                convertToDefaultEventParameter(name, event.target.checked)
              )
            }
          />
        }
        label={label}
      ></FormControlLabel>
    </FormControl>
  );
};

export default Checkbox;
