import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "../Form";
import User from "./User";
import CartLink from "./CartLink";
import { useAuth } from "../../hooks";

import { ButtonsGroup } from "./Header.styles";

const Actions = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const goToLogIn = () => {
    history.push("/login");
  };

  const goToSignUp = () => {
    history.push("/signup");
  };

  return (
    <ButtonsGroup>
      {isAuthenticated ? (
        <>
          <User />
          <CartLink />
        </>
      ) : (
        <>
          <Button onClick={goToLogIn}>Login</Button>
          <Button buttonType="secondary" onClick={goToSignUp}>
            Sign Up
          </Button>
        </>
      )}
    </ButtonsGroup>
  );
};

export default Actions;
