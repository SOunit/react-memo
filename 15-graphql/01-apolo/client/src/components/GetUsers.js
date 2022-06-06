import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) {
      setUsers([data.getAllUsers[0], data.getAllUsers[1], data.getAllUsers[2]]);
    }
  }, [data, setUsers]);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
};

export default GetUsers;
