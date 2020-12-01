import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "./Form";

import { Container, AccountMessage } from "./Login.styles";

const Login = () => {
  return (
    <Container>
      <LoginForm />
      <AccountMessage>
        Don't have an account?
        <Link to="/signup">Create one here</Link>
      </AccountMessage>
    </Container>
  );
};

export default Login;
