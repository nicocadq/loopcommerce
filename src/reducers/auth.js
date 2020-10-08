import Types from "../actions/types";
import { USER_PATH } from "../utils/constants";

const initialSate = JSON.parse(localStorage.getItem(USER_PATH)) || {
  user: null,
  headers: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_USER:
      const { user, headers } = action.payload;

      localStorage.setItem(USER_PATH, JSON.stringify({ user, headers }));

      return {
        ...state,
        user,
        headers,
      };

    case Types.DELETE_USER:
      localStorage.removeItem(USER_PATH);

      return { ...state, ...initialSate };

    default:
      return state;
  }
};
