import React from "react";
import { useQuery } from "react-query";
import * as api from "../services/usersApi";

const Users = () => {
  const { data, isLoading, isError, error } = useQuery("users", api.getUsers, {
    retry: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
