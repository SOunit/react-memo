import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  const { name, label, value, onChange } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outline"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
