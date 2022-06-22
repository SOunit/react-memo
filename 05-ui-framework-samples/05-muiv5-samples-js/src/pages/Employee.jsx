import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import EmployeeForm from "../components/form/EmployeeForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(5),
  },
}));

const Employee = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </div>
  );
};

export default Employee;
