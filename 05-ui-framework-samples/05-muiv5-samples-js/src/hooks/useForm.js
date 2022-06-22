import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialFieldValues) => {
  const [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleInputChange };
};

export const Form = (props) => {
  const classes = useStyle();
  return <div className={classes.root}>{props.children}</div>;
};
