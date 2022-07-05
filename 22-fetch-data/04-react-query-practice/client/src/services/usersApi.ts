import axios from "axios";
import { BACKEND_API_URL } from "../constants/constants";

const api = axios.create({ baseURL: BACKEND_API_URL });

export const getUsers = () => {
  return api.get("/users").then((res) => res.data);
};

export const getUser = (id: string) => {
  return api.get(`/users/${id}`).then((res) => res.data);
};

export const updateUser = ({ id, ...updatedUser }: { id: string }) => {
  return api.put(`/users/${id}`, updatedUser).then((res) => res.data);
};

export const createUser = ({ ...newUser }) => {
  return api.post(`/users`, newUser).then((res) => res.data);
};
