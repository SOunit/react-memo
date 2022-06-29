import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { userActions } from "../store/user/user.slice";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import ComponentContainer from "./ComponentContainer";

const User = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(userActions.login({ user: { name: "Jack" } }));
  };
  const logoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <ComponentContainer>
      <h1>User</h1>
      {user && user.name}
      <ButtonContainer>
        <Button onClick={loginHandler}>Login</Button>
        <Button onClick={logoutHandler}>Logout</Button>
      </ButtonContainer>
    </ComponentContainer>
  );
};

export default User;
