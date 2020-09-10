import React from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import styles from "./Product.module.scss";

const Product = ({ description, imageURL, name, price }) => {
  return (
    <div className={styles.product}>
      <div className={styles.image}>
        <img src={imageURL} alt={description} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{name}</p>
        <span className={styles.price}>${price}</span>
      </div>
      <Button onClick={() => {}}>Add to cart</Button>
    </div>
  );
};

Product.propTypes = {
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
