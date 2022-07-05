import React, { useState } from "react";
import { useQuery } from "react-query";
import UserForm from "../components/UserForm";
import * as api from "../services/usersApi";

const UserDetails = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
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

  console.log("user", user);

  return (
    <div>
      {isFetching && "Background fetching..."}
      <button onClick={() => setIsEditing((prevState) => !prevState)}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
