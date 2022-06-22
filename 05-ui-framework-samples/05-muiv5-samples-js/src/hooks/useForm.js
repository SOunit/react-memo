import { useState } from "react";

const useForm = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleInputChange };
};

export default useForm;
