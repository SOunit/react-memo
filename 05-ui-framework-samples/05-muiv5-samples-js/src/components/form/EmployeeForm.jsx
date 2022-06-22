// How to Design a Perfect React Material UI Form
// https://www.youtube.com/watch?v=-XKaSCU0ZLM&t=11s

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useForm, Form } from "../../hooks/useForm";
import Controls from "../controls/Controls";

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

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const EmployeeForm = () => {
  const { values, handleInputChange } = useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <Controls.Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            row
            label="Gender"
            name="gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
