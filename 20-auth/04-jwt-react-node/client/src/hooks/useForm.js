import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const valuesChangeHandler = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return { values, valuesChangeHandler };
};

export default useForm;
