import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../Form";
import { useAuth } from "../../hooks";

import { setCurrentProduct } from "../../actions/product";
import { addProduct } from "../../actions/cart";

import {
  ProductContainer,
  ImageContainer,
  Description,
  Name,
  Price,
} from "./Product.styles";

const Product = ({ description, id, imageURL, name, price }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const handleGoToProduct = (event) => {
    dispatch(setCurrentProduct({ description, id, imageURL, name, price }));

    history.push(`/product/${id}`);
  };

  const handleBuyNow = (event) => {
    event.stopPropagation();
    if (isAuthenticated) {
      dispatch(addProduct({ description, id, imageURL, name, price }, 1));
    } else {
      history.push("/login");
    }
  };

  return (
    <ProductContainer onClick={handleGoToProduct} data-testid="product">
      <ImageContainer>
        <img src={imageURL} alt={description} loading="lazy" />
      </ImageContainer>
      <Description>
        <Name>{name}</Name>
        <Price>
          $ <span>{price}</span>
        </Price>
      </Description>
      <Button onClick={handleBuyNow}>Add to Cart</Button>
    </ProductContainer>
  );
};

Product.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
