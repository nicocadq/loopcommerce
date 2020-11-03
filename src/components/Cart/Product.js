import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Button } from "../Form";

import {
  deleteProduct,
  increaseProductAmount,
  decreaseProductAmount,
} from "../../actions/cart";

import styles from "./Cart.module.scss";

const Product = ({ amount, id, name, price }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  const handleIncreaseAmount = () => {
    dispatch(increaseProductAmount(id, 1));
  };

  const handleDecreaseAmount = () => {
    dispatch(decreaseProductAmount(id, 1));
  };

  return (
    <tr className={styles.product}>
      <td className={styles.id}>{id}</td>
      <td className={styles.name}>{name}</td>
      <td className={styles["amount-actions"]}>
        <Button
          buttonType="button"
          onClick={handleDecreaseAmount}
          disabled={amount === 1}
        >
          <span>-</span>
        </Button>
        <span className={styles.amount}>{amount}</span>
        <Button buttonType="button" onClick={handleIncreaseAmount}>
          <span>+</span>
        </Button>
      </td>
      <td className={styles.price}>${price}</td>
      <td>
        <Button buttonType="button" onClick={handleDeleteProduct}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

Product.propTypes = {
  amount: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
