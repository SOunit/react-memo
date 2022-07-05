import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import * as api from "../services/usersApi";

const initialFormState = {
  name: "",
  age: "",
};

const CreateUserForm = () => {
  const navigate = useNavigate();

  const { values, valueChangeHandler } = useForm(initialFormState);
  const { name, age } = values;
  //
  const { mutate: createUser } = useMutation(api.createUser);

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("create user form submit");
    console.log("values", values);
    createUser({ name, age });

    navigate("/users");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        type="text"
        value={name}
        onChange={valueChangeHandler}
      />
      <input
        name="age"
        type="number"
        value={age}
        onChange={valueChangeHandler}
      />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
