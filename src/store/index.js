import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const setupStore = (initialState = {}) => {
  if (process.env.NODE_ENV === "development") {
    return createStore(rootReducer, initialState, composeWithDevTools());
  } else {
    return createStore(rootReducer, initialState);
  }
};

export default setupStore;
