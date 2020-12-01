import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../Header";
import { Button } from "../Form";
import Footer from "../Footer";

import { clearCart } from "../../actions/cart";

import ShoppingImage from "../../assets/images/shopping.svg";
import {
  Container,
  ImageContainer,
  TextContainer,
  ActionsContainer,
} from "./ThankYou.styles";

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
      <Container>
        <ImageContainer>
          <img src={ShoppingImage} alt="Shipping" />
        </ImageContainer>
        <TextContainer>
          <div>
            <h3>Thanks for shopping with us!</h3>
            <p>
              You should be receiving an email with your order details any
              minute now, if you have any concern please contact us here.
            </p>
          </div>

          <ActionsContainer>
            <Button buttonType="secondary" onClick={handleContinueShopping}>
              Continue Shopping
            </Button>
          </ActionsContainer>
        </TextContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ThankYou;
