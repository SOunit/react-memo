// How to Design a Perfect React Material UI Form
// https://www.youtube.com/watch?v=-XKaSCU0ZLM&t=11s

import { Grid, TextField } from "@mui/material";
import { useForm, Form } from "../../hooks/useForm";

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

  return (
    <Form>
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
    </Form>
  );
};

export default EmployeeForm;
