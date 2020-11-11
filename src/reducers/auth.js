import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import Types from "../actions/types";
import { USER_PATH } from "../utils/constants";

const initialSate = {
  user: null,
  headers: null,
};

const authReducer = (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_USER:
      const { user, headers } = action;

      return {
        ...state,
        user,
        headers,
      };

    case Types.DELETE_USER:
      return initialSate;

    default:
      return state;
  }
};

const authPersistConfig = {
  storage,
  key: USER_PATH,
};

export default persistReducer(authPersistConfig, authReducer);
