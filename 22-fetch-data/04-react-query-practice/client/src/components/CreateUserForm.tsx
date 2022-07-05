import React, { useState } from "react";

const initialFormState = {
  name: "",
  age: "",
};

const CreateUserForm = () => {
  const [values, setValues] = useState(initialFormState);
  const { name, age } = values;

  const valueChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("create user form submit");
    console.log("values", values);
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" value={name} onChange={valueChangeHandler} />
      <input name="age" value={age} onChange={valueChangeHandler} />
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUserForm;
