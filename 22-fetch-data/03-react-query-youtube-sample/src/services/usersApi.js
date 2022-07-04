import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });
// const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });

export const getUsers = () => {
  return api.get("/users").then((res) => res.data);
};

export const getUser = (id) => {
  return api.get(`/users/${id}`).then((res) => res.data);
};

export const updateUser = ({ id, ...updatedUser }) => {
  return api.put(`/users/${id}`, updatedUser).then((res) => res.data);
};
