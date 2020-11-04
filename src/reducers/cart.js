import Types from "../actions/types";
import { CART_PRODUCTS_PATH } from "../utils/constants";
import { filterByProp, getObjectByProp } from "../utils/arrays";

const initialSate = JSON.parse(localStorage.getItem(CART_PRODUCTS_PATH)) || {
  products: [],
};

let newState;

export default (state = initialSate, action) => {
  switch (action.type) {
    case Types.ADD_PRODUCT_TO_CART:
      const { amount } = action;
      const productToAdd = action.product;

      if (getObjectByProp(productToAdd.id, "id", state.products)) {
        return {
          ...state,
          products: state.products.map((product) => {
            if (productToAdd.id !== product.id) return product;

            return { ...product, amount: product.amount + 1 };
          }),
        };
      }

      const formattedProduct = { ...productToAdd, amount };

      newState = {
        ...state,
        products: [...state.products, formattedProduct],
      };

      localStorage.setItem(CART_PRODUCTS_PATH, JSON.stringify(newState));

      return newState;

    case Types.DELETE_PRODUCT_FROM_CART:
      const productToDelete = action.product;

      newState = {
        ...state,
        products: filterByProp(productToDelete, "id", state.products),
      };

      localStorage.setItem(CART_PRODUCTS_PATH, JSON.stringify(newState));

      return newState;

    case Types.INCREASE_PRODUCT_AMOUNT:
      const idProductToIncreaseAmount = action.product;
      const amountToIncrease = action.amount;

      newState = {
        ...state,
        products: state.products.map((product) => {
          if (product.id !== idProductToIncreaseAmount) return product;

          return { ...product, amount: product.amount + amountToIncrease };
        }),
      };

      localStorage.setItem(CART_PRODUCTS_PATH, JSON.stringify(newState));

      return newState;

    case Types.DECREASE_PRODUCT_AMOUNT:
      const idProductToDecreaseAmount = action.product;
      const amountToDecrease = action.amount;

      newState = {
        ...state,
        products: state.products.map((product) => {
          if (product.id === idProductToDecreaseAmount && product.amount > 1) {
            return {
              ...product,
              amount: product.amount > 0 && product.amount - amountToDecrease,
            };
          }

          return product;
        }),
      };

      localStorage.setItem(CART_PRODUCTS_PATH, JSON.stringify(newState));

      return newState;

    case Types.CLEAR_CART:
      localStorage.removeItem(CART_PRODUCTS_PATH);

      return {
        products: [],
      };

    default:
      return {
        ...initialSate,
      };
  }
};
