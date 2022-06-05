import React, { useState } from "react";

const LoggedUser = (props) => {
  const [user, setUser] = useState();

  const loginHandler = () => {
    setUser({ name: "Jack" });
  };

  const logoutHandler = () => {
    setUser(null);
  };

  return (
    <>
      <div>
        <button onClick={loginHandler}>login</button>
        <button onClick={logoutHandler}>logout</button>
      </div>
      <div>{props.children(user && user.name)}</div>
    </>
  );
};

export default LoggedUser;
