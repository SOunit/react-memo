import React, { FC } from "react";

export type UserInitialFormState = {
  name: string;
  age: string;
};

type Props = {
  submitHandler: React.FormEventHandler<HTMLFormElement>;
  values: UserInitialFormState;
  valueChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  buttonText: string;
};

const UserForm: FC<Props> = (props) => {
  const { submitHandler, values, valueChangeHandler, buttonText } = props;
  const { name, age } = values;

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
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default UserForm;
