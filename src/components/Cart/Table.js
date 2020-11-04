import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Product from "./Product";
import { Button } from "../Form";

import styles from "./Cart.module.scss";

const Table = ({ products }) => {
  const history = useHistory();

  const totalPrice = products.reduce((accumulator, { price, amount }) => {
    const pricePerProduct = Number(price) * amount;
    return accumulator + pricePerProduct;
  }, 0);

  const handleMakePurchase = () => {
    history.push("/thank-you-page");
  };

  return (
    <div className={styles["table-container"]}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.head}>
            <th>ID</th>
            <th>Name</th>
            <th>Amount</th>
            <th>PPU</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ amount, id, name, price }) => (
            <Product
              key={id}
              amount={amount}
              id={id}
              name={name}
              price={price}
            />
          ))}
        </tbody>
      </table>
      <span className={styles["total-price"]}>Total Price: ${totalPrice}</span>
      <div className={styles.checkout}>
        <Button onClick={handleMakePurchase}>Checkout</Button>
      </div>
    </div>
  );
};

Table.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Table;
