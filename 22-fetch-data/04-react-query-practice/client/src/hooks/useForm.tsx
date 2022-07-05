import { useState } from "react";

type InitialFormState = {
  [key: string]: string;
};

const useForm = (initialFormState: InitialFormState) => {
  const [values, setValues] = useState(initialFormState);

  const valueChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return { values, valueChangeHandler };
};

export default useForm;
