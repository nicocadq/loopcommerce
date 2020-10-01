import Types from "../actions/types";

const initialSate = {
  user: null,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case Types.DELETE_USER:
    default:
      return state;
  }
};
