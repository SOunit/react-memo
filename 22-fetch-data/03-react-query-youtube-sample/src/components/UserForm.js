import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import * as api from "../services/usersApi";

const UserForm = ({ user, setIsEditing }) => {
  console.log("user form user", user);
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, isError, error, mutate } = useMutation(api.updateUser, {
    // onMutate: (updatedUser) => {
    //   queryClient.setQueryData(["users", user.id], updatedUser);
    //   setIsEditing(false);
    // },

    // recommended approach
    onSuccess: (data) => {
      // data come from backend
      queryClient.setQueryData(["users", user.id], data);
      setIsEditing(false);
      // // trigger the old data to be updated
      // queryClient.invalidateQueries(["users", user.id]);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);

    mutate(fields);
  };

  if (isLoading) {
    return "Saving your changes...";
  }

  if (isError) {
    console.log("error", error);
    return "Something went wrong!";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
        />
      </label>
      <label>
        username:
        <input
          name="username"
          type="text"
          value={fields.username}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
