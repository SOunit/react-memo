import { useParams } from "react-router-dom";
import UpdateUserForm from "../components/UpdateUserForm";
import useGetUserById from "../hooks/useGetUserById";

const UpdateUser = () => {
  const { userId } = useParams();

  const { data: user, isLoading } = useGetUserById(userId!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <UpdateUserForm initialFormState={user} />;
};

export default UpdateUser;
