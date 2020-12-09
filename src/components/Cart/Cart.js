import React from "react";
import { useSelector } from "react-redux";

import Header from "../Header";
import Footer from "../Footer";
import Table from "./Table";

import { Container } from "./Cart.styles";

const Cart = () => {
  const products = useSelector(({ cart: { products } }) => products);

  return (
    <>
      <Header />
      <Container>
        {products.length > 0 ? (
          <Table products={products} />
        ) : (
          <p>You don't have products in the cart yet.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
