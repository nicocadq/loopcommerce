import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Product from "./Product";
import { Button } from "../Form";

import { clearCart } from "../../actions/cart";

import styles from "./Cart.module.scss";

const Table = ({ products }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleMakePurchase = () => {
    dispatch(clearCart());

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
      <div className={styles["make-purchase"]}>
        <Button onClick={handleMakePurchase}>Make the purchase</Button>
      </div>
    </div>
  );
};

Table.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Table;
