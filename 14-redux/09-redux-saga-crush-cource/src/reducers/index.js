import petCounter from "./petCounter";
import petFavorite from "./petFavorite";
import { combineReducers } from "redux";
import users from "./users";

const reducers = combineReducers({
  petCounter,
  petFavorite,
  users,
});

export default reducers;
