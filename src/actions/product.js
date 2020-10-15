import Types from "./types";

export const setCurrentProduct = (product) => ({
  type: Types.SET_CURRENT_PRODUCT,
  product,
});

export const deleteCurrentProduct = () => ({
  type: Types.DELETE_CURRENT_PRODUCT,
});
