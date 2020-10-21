import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import CartImage from "../../assets/images/cart.svg";

import styles from "./Header.module.scss";

const CartLink = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.products.length);

  const handleOnClick = () => {
    history.push("/cart");
  };

  return (
    <div className={styles.cart} onClick={handleOnClick}>
      <img src={CartImage} alt="Cart" />
      <span>{cartItems}</span>
    </div>
  );
};

export default CartLink;
