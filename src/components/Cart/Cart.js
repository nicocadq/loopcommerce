import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import Table from "./Table";

import styles from "./Cart.module.scss";

const Cart = () => {
  const products = useSelector(({ cart: { products } }) => products);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {products.length > 0 ? (
          <Table products={products} />
        ) : (
          <p className={styles.empty}>
            You don't have products in the cart yet.
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
