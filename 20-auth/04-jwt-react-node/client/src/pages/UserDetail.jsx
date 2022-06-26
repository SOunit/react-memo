import React, { useState, useEffect } from "react";
import tokenKeys from "../constants/token";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem(tokenKeys.ACCESS_TOKEN);
        if (token) {
          const authAxios = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const response = await authAxios.get(`/user`);
          const { user } = response.data;
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div>
      {user ? (
        <div className="flex flex-col">
          <h1 className="text-center">{user.name}</h1>
          <p className="text-center">{user.email}</p>
        </div>
      ) : (
        <p className="flex justify-center mt-5">No user found!</p>
      )}
    </div>
  );
};

export default UserDetail;
