import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/users/create">Create</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Navigation;
