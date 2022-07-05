import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { User as UserType } from "../types/User.type";
import * as api from "../services/usersApi";

const User = () => {
  const { userId } = useParams();

  const { data, isLoading, isError } = useQuery(["user", userId], () =>
    api.getUser(userId!)
  );
  const user = data as UserType;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <Link to={`/users/${user._id}/update`}>Update</Link>
    </div>
  );
};

export default User;
