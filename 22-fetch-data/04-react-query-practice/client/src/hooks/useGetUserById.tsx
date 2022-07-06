import { useQuery } from "react-query";
import * as api from "../services/usersApi";

const useGetUserById = (userId: string) => {
  const { data, isLoading, isError, error } = useQuery(["user", userId], () =>
    api.getUser(userId)
  );

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useGetUserById;
