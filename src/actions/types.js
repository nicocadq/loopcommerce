const authTypes = {
  SET_USER: "SET_USER",
  DELETE_USER: "DELETE_USER",
};

const currentProductTypes = {
  SET_CURRENT_PRODUCT: "SET_CURRENT_PRODUCT",
  DELETE_CURRENT_PRODUCT: "DELETE_CURRENT_PRODUCT",
};

const cartTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  DELETE_PRODUCT_FROM_CART: "DELETE_PRODUCT_FROM_CART",
  INCREASE_PRODUCT_AMOUNT: "INCREASE_PRODUCT_AMOUNT",
  DECREASE_PRODUCT_AMOUNT: "DECREASE_PRODUCT_AMOUNT",
  CLEAR_CART: "CLEAR_CART",
};

export default {
  ...authTypes,
  ...currentProductTypes,
  ...cartTypes,
};
