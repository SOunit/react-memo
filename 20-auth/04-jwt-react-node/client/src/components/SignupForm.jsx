import React from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import useForm from "../hooks/useForm";

const formInitialValues = {
  name: "",
  email: "",
  password: "",
};

const SignupForm = () => {
  const { values, valuesChangeHandler } = useForm(formInitialValues);
  const { name, email, password } = values;

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        name,
        email,
        password,
      });
    } catch (error) {}
  };

  return (
    <form className="mt-5 flex flex-col" onSubmit={submitHandler}>
      <div className="mb-5 flex justify-center">
        <TextField
          variant="outlined"
          name="name"
          label="Name"
          value={name}
          onChange={valuesChangeHandler}
        />
      </div>
      <div className="mb-5 flex justify-center">
        <TextField
          variant="outlined"
          name="email"
          label="Email"
          value={email}
          onChange={valuesChangeHandler}
        />
      </div>
      <div className="mb-5 flex justify-center">
        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={valuesChangeHandler}
        />
      </div>
      <div className="mb-5 flex justify-center">
        <Button type="submit" color="primary" variant="contained">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
