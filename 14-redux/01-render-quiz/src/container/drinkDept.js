import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Drink from "../components/Drink";
import { drinkUpdate } from "../redux/actions/action";

const DrinkDept = () => {
  const drinkData = useSelector((state) => state.drink.drinkData);
  const dispatch = useDispatch();

  console.log("DRINK RENDER");

  const handleQuantity = (operator, id) => {
    //dispatch to redux store
    dispatch(drinkUpdate(operator, id));
  };

  return (
    <>
      <h1>Drink Department</h1>
      <div className="card-group">
        {drinkData.map((drink) => (
          <Drink key={drink.id} drink={drink} handleQuantity={handleQuantity} />
        ))}
      </div>
    </>
  );
};

export default DrinkDept;
