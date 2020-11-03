import Types from "./types";

export const addProduct = (product, amount) => ({
  type: Types.ADD_PRODUCT_TO_CART,
  product,
  amount,
});

export const deleteProduct = (productID) => ({
  type: Types.DELETE_PRODUCT_FROM_CART,
  product: productID,
});

export const increaseProductAmount = (productID, amount) => ({
  type: Types.INCREASE_PRODUCT_AMOUNT,
  product: productID,
  amount: amount,
});

export const decreaseProductAmount = (productID, amount) => ({
  type: Types.DECREASE_PRODUCT_AMOUNT,
  product: productID,
  amount: amount,
});

export const clearCart = () => ({
  type: Types.CLEAR_CART,
});
