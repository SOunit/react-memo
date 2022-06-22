// How to Design a Perfect React Material UI Form
// https://www.youtube.com/watch?v=-XKaSCU0ZLM&t=11s

import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const [values, setValues] = useState(initialFieldValues);
  const classes = useStyle();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Full Name"
            value={values.fullName}
          />
          <TextField variant="outlined" label="Email" value={values.email} />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
