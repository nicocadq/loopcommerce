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

import { TableCell } from "./Cart.styles";

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
    <tr>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>
        <Button
          buttonType="button"
          onClick={handleDecreaseAmount}
          disabled={amount === 1}
        >
          <span>-</span>
        </Button>
        <span>{amount}</span>
        <Button buttonType="button" onClick={handleIncreaseAmount}>
          <span>+</span>
        </Button>
      </TableCell>
      <td>${price}</td>
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
