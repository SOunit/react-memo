import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { snackReducer } from "./reducers/snackReducer";
import { drinkReducer } from "./reducers/drinkReducer";

let middlewares = [thunk];
if (process.env.NODE_ENV !== "development") {
  middlewares = [...middlewares, logger];
}

const rootReducer = combineReducers({
  snack: snackReducer,
  drink: drinkReducer,
});

// state : { snack: { snackData : [] }, drink: { drinkData: [] }}
// state.snack.snackData.map()

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const AppProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
