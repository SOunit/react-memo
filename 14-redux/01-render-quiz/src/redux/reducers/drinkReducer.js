import { UPDATE_DRINK_QUANTITY } from "../types";

const initState = {
  drinkData: [
    { id: 1, beverage: "Fanta", quantity: 10 },
    { id: 2, beverage: "Poccari", quantity: 1 },
    { id: 3, beverage: "Coke", quantity: 12 },
    { id: 4, beverage: "Schweppes", quantity: 8 },
    { id: 5, beverage: "Green Tea", quantity: 5 },
    { id: 6, beverage: "Beer", quantity: 2 },
  ],
};

export const drinkReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_DRINK_QUANTITY:
      const newDrinkState = state.drinkData.map((drink) => {
        return drink.id !== action.payload.id
          ? drink
          : action.payload.operator === "+"
          ? { ...drink, quantity: drink.quantity + 1 }
          : { ...drink, quantity: drink.quantity - 1 };
      });

      return { ...state, drinkData: newDrinkState };
    default:
      return state;
  }
};
