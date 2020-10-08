import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../Form";

import Types from "../../actions/types";

import styles from "./Product.module.scss";

const Product = ({ description, id, imageURL, name, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoToProduct = (event) => {
    dispatch({
      type: Types.SET_CURRENT_PRODUCT,
      product: { description, id, imageURL, name, price },
    });

    history.push(`/product/${id}`);
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.product}
      onClick={(event) => handleGoToProduct(event)}
    >
      <div className={styles.image}>
        <img src={imageURL} alt={description} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <span className={styles.price}>${price}</span>
      </div>
      <Button onClick={(event) => handleBuyNow(event)}>Buy Now</Button>
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
