import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import CartImage from "../../assets/images/cart.svg";

import { CartContainer } from "./Header.styles";

const CartLink = () => {
  const history = useHistory();
  const cartItems = useSelector(({ cart: { products } }) => products);
  const amountOfProducts = cartItems.reduce(
    (accumulator, { amount }) => accumulator + amount,
    0
  );

  const handleOnClick = () => {
    history.push("/cart");
  };

  return (
    <CartContainer onClick={handleOnClick}>
      <img src={CartImage} alt="Cart" />
      <span>{amountOfProducts}</span>
    </CartContainer>
  );
};

export default CartLink;
