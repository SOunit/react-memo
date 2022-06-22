// How to Design a Perfect React Material UI Form
// https://www.youtube.com/watch?v=-XKaSCU0ZLM&t=11s

import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useForm from "../../hooks/useForm";

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
  const { values, handleInputChange } = useForm(initialFieldValues);
  const classes = useStyle();

  return (
    <form className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="fullName"
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </form>
  );
};

export default EmployeeForm;
