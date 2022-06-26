import React from "react";
import { TextField, Button } from "@mui/material";

const LoginForm = () => {
  return (
    <form className="mt-5 flex flex-col">
      <div className="mb-5 flex justify-center">
        <TextField variant="outlined" name="email" label="Email" />
      </div>
      <div className="mb-5 flex justify-center">
        <TextField
          variant="outlined"
          name="password"
          label="Password"
          type="password"
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
