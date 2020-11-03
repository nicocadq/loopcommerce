import { combineReducers } from "redux";

import authReducer from "./auth";
import currentProductReducer from "./product";
import cartReducer from "./cart";

export default combineReducers({
  auth: authReducer,
  currentProduct: currentProductReducer,
  cart: cartReducer,
});
