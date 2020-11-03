import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../Header";
import { Button } from "../Form";
import Footer from "../Footer";

import { clearCart } from "../../actions/cart";

import ShoppingImage from "../../assets/images/shopping.svg";
import styles from "./ThankYou.module.scss";

const ThankYou = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleContinueShopping = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles["image-container"]}>
          <img src={ShoppingImage} alt="Shipping" />
        </div>
        <div className={styles["text-container"]}>
          <div>
            <h3>Thanks for shopping with us!</h3>
            <p>
              You should e receiving an email with your order details ny minute
              now, if you any concern please contact us here.
            </p>
          </div>

          <div className={styles.actions}>
            <Button buttonType="secondary" onClick={handleContinueShopping}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ThankYou;
