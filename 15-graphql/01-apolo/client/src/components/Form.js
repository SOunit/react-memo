import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    console.log(firstName, lastName, email, password);
    createUser({
      variables: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Form;
