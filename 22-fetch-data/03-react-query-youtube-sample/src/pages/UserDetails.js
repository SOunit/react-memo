import React from "react";
import { useQuery } from "react-query";
import * as api from "../services/usersApi";

const UserDetails = ({ userId }) => {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(
    ["user", userId],
    () => api.getUser(userId),
    // run if userId is truthy
    { enabled: Boolean(userId) }
  );

  if (!userId) {
    return <div>Select a user</div>;
  }

  if (isLoading) {
    return "Loading user details...";
  }

  return (
    <div>
      {isFetching && "Background fetching..."}
      <h2>{user.name}</h2>
      <p>{user.username}</p>
    </div>
  );
};

export default UserDetails;
