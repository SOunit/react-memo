import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { counterActions } from "../store/counter/counter.slice";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import ComponentContainer from "./ComponentContainer";

const Counter: FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.counter);
  const show = useSelector((state: RootState) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 10 }));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease({ amount: 10 }));
  };

  return (
    <ComponentContainer>
      <ButtonContainer>
        <Button onClick={incrementHandler}>INCREMENT</Button>
        <Button onClick={decrementHandler}>DECREMENT</Button>
        <Button onClick={toggleHandler}>TOGGLE</Button>
        <Button onClick={increaseHandler}>INCREASE by 10</Button>
        <Button onClick={decreaseHandler}>DECREASE by 10</Button>
      </ButtonContainer>
      <h1>Counter</h1>
      <p>{show && count}</p>
    </ComponentContainer>
  );
};

export default Counter;
