import Types from "../actions/types";

const initialSate = null;

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.SET_CURRENT_PRODUCT:
      const { product } = action;

      return {
        ...state,
        ...product,
      };

    case Types.DELETE_USER:
      return {
        ...state,
        ...initialSate,
      };

    default:
      return state;
  }
};
