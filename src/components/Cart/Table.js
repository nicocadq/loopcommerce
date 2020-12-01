import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import Product from "./Product";
import { Button } from "../Form";

import {
  TableContainer,
  StyledTable,
  TableHead,
  Checkout,
  TotalPrice,
} from "./Cart.styles";

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
    <TableContainer>
      <StyledTable>
        <thead>
          <tr>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>PPU</TableHead>
            <TableHead>Actions</TableHead>
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
      </StyledTable>
      <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
      <Checkout>
        <Button onClick={handleMakePurchase}>Checkout</Button>
      </Checkout>
    </TableContainer>
  );
};

Table.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Table;
