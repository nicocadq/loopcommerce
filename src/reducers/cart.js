import Types from "../actions/types";
import { filterByProp, getObjectByProp } from "../utils/arrays";

const initialSate = {
  products: [],
};

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

      return {
        ...state,
        products: [...state.products, formattedProduct],
      };

    case Types.DELETE_PRODUCT_FROM_CART:
      const productToDelete = action.product;

      return {
        ...state,
        products: filterByProp(productToDelete, "id", state.products),
      };

    case Types.INCREASE_PRODUCT_AMOUNT:
      const idProductToIncreaseAmount = action.product;
      const amountToIncrease = action.amount;

      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id !== idProductToIncreaseAmount) return product;

          return { ...product, amount: product.amount + amountToIncrease };
        }),
      };

    case Types.DECREASE_PRODUCT_AMOUNT:
      const idProductToDecreaseAmount = action.product;
      const amountToDecrease = action.amount;

      return {
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

    case Types.CLEAR_CART:
    default:
      return {
        ...initialSate,
      };
  }
};
