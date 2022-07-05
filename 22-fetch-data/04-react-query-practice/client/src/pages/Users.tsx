import React, { FC } from "react";
import { useQuery } from "react-query";
import * as api from "../services/usersApi";
import { User } from "../types/User.type";

type Props = {};

const Users: FC<Props> = (props) => {
  const { data, isLoading, isError } = useQuery("users", api.getUsers);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <ul>
      {data?.map((user: User) => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
