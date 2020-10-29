import React from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../Header";
import { Button } from "../Form";

import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const history = useHistory();
  const { id } = useParams();

  const product = useSelector((state) =>
    state.currentProduct?.id === Number(id) ? state.currentProduct : null
  );

  const handleBuyNow = () => {
    history.push("/thank-you-page");
  };

  if (!product) return <Redirect to="/" />;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles["product-container"]}>
        <div className={styles["image-container"]}>
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h3 className={styles.name}>{product.name}</h3>
            <div className={styles.price}>
              <span className={styles.number}>
                <span>$</span>
                {product.price}
              </span>
              <span>/per unit</span>
            </div>
            <p className={styles.description}>{product.description} </p>
          </div>
          <div className={styles["product-actions"]}>
            <Button onClick={handleBuyNow}>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
