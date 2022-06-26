import React, { useState, useEffect } from "react";
import tokenKeys from "../constants/token";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserDetail = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const token = localStorage.getItem(tokenKeys.ACCESS_TOKEN);
      if (token) {
        const response = axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`);
        const { user } = response.data;
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  return (
    <div>
      {user ? (
        <p>{user.name}</p>
      ) : (
        <p className="flex justify-center mt-5">No user found!</p>
      )}
    </div>
  );
};

export default UserDetail;
