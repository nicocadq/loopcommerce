import React, { useState } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";
import { Button } from "../Form";
import Footer from "../Footer";

import { addProduct } from "../../actions/cart";

import {
  Container,
  ProductContainer,
  ImageContainer,
  Wrapper,
  Info,
  Name,
  PriceContainer,
  Price,
  Description,
  QuantityActionsContainer,
  Amount,
  ProductActionsContainer,
  IconContainer,
} from "./ProductDetail.styles";

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
    dispatch(addProduct(product, quantity));

    history.push("/cart");
  };

  const handleAddToCart = () => dispatch(addProduct(product, quantity));

  if (!product) return <Redirect to="/" />;

  return (
    <>
      <Header />
      <Container>
        <ProductContainer>
          <ImageContainer>
            <img src={product.imageURL} alt={product.name} />
          </ImageContainer>
          <Wrapper>
            <Info>
              <Name>{product.name}</Name>
              <PriceContainer>
                <Price>
                  <span>$</span>
                  {product.price}
                </Price>
                <span>/per unit</span>
              </PriceContainer>
              <Description>{product.description} </Description>
            </Info>
            <QuantityActionsContainer>
              <span>Quantity</span>
              <div>
                <Button
                  buttonType="secondary--black"
                  onClick={increaseQuantity}
                >
                  +
                </Button>
                <Amount>{quantity}</Amount>
                <Button
                  buttonType="secondary--black"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </Button>
              </div>
            </QuantityActionsContainer>
            <ProductActionsContainer>
              <Button onClick={handleBuyNow}>Buy Now</Button>
              <Button buttonType="secondary" onClick={handleAddToCart}>
                Add To Cart
                <IconContainer>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </IconContainer>
              </Button>
            </ProductActionsContainer>
          </Wrapper>
        </ProductContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetail;
