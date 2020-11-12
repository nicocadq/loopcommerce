import React, { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";
import { Button } from "../Form";
import Footer from "../Footer";

import { addProduct } from "../../actions/cart";

import styles from "./ProductDetail.module.scss";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = useSelector((state) =>
    state.currentProduct?.id === Number(id) ? state.currentProduct : null
  );

  const increaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((previousQuantity) => previousQuantity - 1);
  };

  const handleBuyNow = () => {
    history.push("/cart");
  };

  const handleAddToCart = () => {
    dispatch(addProduct(product, quantity));

    history.push("/cart");
  };

  if (!product) return <Redirect to="/" />;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles["product-container"]}>
          <div className={styles["image-container"]}>
            <img src={product.imageURL} alt={product.description} />
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
            <div className={styles.quantity}>
              <span>Quantity</span>
              <div>
                <Button
                  buttonType="secondary--black"
                  onClick={increaseQuantity}
                >
                  +
                </Button>
                <span className={styles.amount}>{quantity}</span>
                <Button
                  buttonType="secondary--black"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </Button>
              </div>
            </div>
            <div className={styles["product-actions"]}>
              <Button onClick={handleBuyNow}>Buy Now</Button>
              <Button buttonType="secondary" onClick={handleAddToCart}>
                Add To Cart
                <span className={styles.icon}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
