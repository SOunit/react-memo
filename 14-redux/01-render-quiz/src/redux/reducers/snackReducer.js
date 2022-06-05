import { UPDATE_SNACK_QUANTITY } from "../types";

const initState = {
  snackData: [
    { id: 1, food: "Doritos", quantity: 10 },
    { id: 2, food: "Haribo", quantity: 1 },
    { id: 3, food: "Calbee", quantity: 12 },
    { id: 4, food: "M&Ms", quantity: 8 },
    { id: 5, food: "Jagabee", quantity: 5 },
    { id: 6, food: "Taquis", quantity: 2 }
  ]
};

export const snackReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SNACK_QUANTITY:
      const newSnackState = state.snackData.map((snack) => {
        return snack.id !== action.payload.id
          ? snack
          : action.payload.operator === "+"
          ? { ...snack, quantity: snack.quantity + 1 }
          : { ...snack, quantity: snack.quantity - 1 };
      });

      return { ...state, snackData: newSnackState };
    default:
      return state;
  }
};
