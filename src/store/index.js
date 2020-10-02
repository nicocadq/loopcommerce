import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

let store;

if (process.env.NODE_ENV === "development") {
  store = createStore(rootReducer, composeWithDevTools());

  window.store = store;
} else {
  store = createStore(rootReducer);
}

export default store;
