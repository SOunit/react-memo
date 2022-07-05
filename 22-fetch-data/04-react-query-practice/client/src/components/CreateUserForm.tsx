import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import * as api from "../services/usersApi";
import { User } from "../types/User.type";

const initialFormState = {
  name: "",
  age: "",
};

const CreateUserForm = () => {
  const navigate = useNavigate();

  const { values, valueChangeHandler } = useForm(initialFormState);
  const { name, age } = values;

  const queryClient = useQueryClient();
  const {
    mutate: createUser,
    isError,
    isLoading,
    error,
  } = useMutation(api.createUser, {
    onSuccess: (data) => {
      // pattern 1.
      // - refetch data after mutation
      // - create get request after mutation
      // queryClient.invalidateQueries("users");
      //
      // pattern 2.
      // - set data from backend
      // - no get request
      queryClient.setQueryData<User[]>("users", (oldQueryData) => {
        if (oldQueryData) {
          return [...oldQueryData, data];
        } else {
          return [data];
        }
      });
    },
  });

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
