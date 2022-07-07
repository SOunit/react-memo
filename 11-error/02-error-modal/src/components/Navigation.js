import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink className="px-5 py-1 mx-3 bg-blue-300" to="/users">
        Users
      </NavLink>
      <NavLink className="px-5 py-1 mx-3 bg-blue-300" to="/items">
        Items
      </NavLink>
      <NavLink className="px-5 py-1 mx-3 bg-blue-300" to="/books">
        Books
      </NavLink>
    </div>
  );
};

export default Navigation;
