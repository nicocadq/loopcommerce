import React from "react";

import Header from "../Header";
import { Button } from "../Form";

import ShoppingImage from "../../assets/images/shopping.svg";
import styles from "./ThankYou.module.scss";

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
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
            <Button buttonType="secondary">Continue Shopping</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
