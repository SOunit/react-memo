import React from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";
import useForm from "../hooks/useForm";
import tokenKeys from "../constants/token";
import { useNavigate } from "react-router-dom";

const initialValues = { email: "test@test.com", password: "password" };

const LoginForm = () => {
  const navigation = useNavigate();

  const { values, valuesChangeHandler } = useForm(initialValues);
  const { email, password } = values;

  const submitHandler = async (event) => {
    event.preventDefault();

    const data = { email, password };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        data
      );

      const { accessToken, refreshToken } = response.data;

      localStorage.setItem(tokenKeys.ACCESS_TOKEN, accessToken);
      localStorage.setItem(tokenKeys.REFRESH_TOKEN, refreshToken);

      navigation("/userDetail");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-5 flex flex-col" onSubmit={submitHandler}>
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
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
