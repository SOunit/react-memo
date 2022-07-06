import React, { FC } from "react";
import { useMutation, useQueryClient } from "react-query";
import useForm from "../hooks/useForm";
import UserForm, { UserInitialFormState } from "./UserForm";
import * as api from "../services/usersApi";
import { useNavigate, useParams } from "react-router-dom";

type Props = {
  initialFormState: UserInitialFormState;
};

const UpdateUserForm: FC<Props> = (props) => {
  const { initialFormState } = props;
  const { userId } = useParams();
  const navigate = useNavigate();
  const { values, valueChangeHandler } = useForm(initialFormState);
  const queryClient = useQueryClient();
  const {
    mutate: updateUser,
    isError,
    error,
  } = useMutation(api.updateUser, {
    onSuccess: (data) => {
      queryClient.setQueryData(["user", userId], data);
      queryClient.invalidateQueries("users");
    },
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    updateUser({ id: userId!, ...values });

    if (isError) {
      console.log(error);
    }

    navigate("/users");
  };

  return (
    <UserForm
      buttonText="Update User"
      submitHandler={submitHandler}
      valueChangeHandler={valueChangeHandler}
      values={values as UserInitialFormState}
    />
  );
};

export default UpdateUserForm;
