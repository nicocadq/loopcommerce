import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "../reducers";

let store;

const setupStore = (initialState = {}) => {
  if (process.env.NODE_ENV === "development") {
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware())
    );

    window.store = store;
  } else {
    store = createStore(rootReducer, initialState, applyMiddleware());
  }

  const persistor = persistStore(store);

  return { store, persistor };
};

export default setupStore;
