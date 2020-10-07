import Types from "../actions/types";

const initialSate = JSON.parse(localStorage.getItem("user")) || {
  user: null,
  headers: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_USER:
      const { user, headers } = action.payload;

      localStorage.setItem("user", JSON.stringify({ user, headers }));

      return {
        ...state,
        user,
        headers,
      };

    case Types.DELETE_USER:
      localStorage.removeItem("user");

      return { ...state, ...initialSate };

    default:
      return state;
  }
};
