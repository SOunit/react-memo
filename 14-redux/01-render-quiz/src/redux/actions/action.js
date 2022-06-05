import { UPDATE_SNACK_QUANTITY, UPDATE_DRINK_QUANTITY } from "../types";

export const snackUpdate = (operator, id) => ({
  type: UPDATE_SNACK_QUANTITY,
  payload: { operator, id }
});

export const drinkUpdate = (operator, id) => ({
  type: UPDATE_DRINK_QUANTITY,
  payload: { operator, id }
});
