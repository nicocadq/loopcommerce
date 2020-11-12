import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../Form";
import { useAuth } from "../../hooks";

import { setCurrentProduct } from "../../actions/product";
import { addProduct } from "../../actions/cart";

import styles from "./Product.module.scss";

const Product = ({ description, id, imageURL, name, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const handleGoToProduct = (event) => {
    dispatch(setCurrentProduct({ description, id, imageURL, name, price }));

    history.push(`/product/${id}`);
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
    if (isAuthenticated) {
      dispatch(addProduct({ description, id, imageURL, name, price }, 1));
    } else {
      history.push("/login");
    }
  };

  return (
    <div
      className={styles.product}
      onClick={handleGoToProduct}
      data-testid="product"
    >
      <div className={styles.image}>
        <img src={imageURL} alt={description} loading="lazy" />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <span className={styles.price}>
          $ <span>{price}</span>
        </span>
      </div>
      <Button onClick={handleBuyNow}>Add to Cart</Button>
    </div>
  );
};

Product.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
