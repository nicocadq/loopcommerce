import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const store = createStore(rootReducer, composeWithDevTools());

window.store = store;

export default store;
