import Types from "../actions/types";

const initialSate = {
  user: null,
  headers: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_USER:
      const { user, headers } = action.payload;

      return {
        ...state,
        user,
        headers,
      };

    case Types.DELETE_USER:
    default:
      return state;
  }
};
