import React from "react";
import { Link } from "react-router-dom";

import SignupForm from "./Form";

import { Container, AccountMessage } from "./Signup.styles";

const Signup = () => {
  return (
    <Container>
      <SignupForm />
      <AccountMessage>
        Already have an account?
        <Link to="/login">Sign In</Link>
      </AccountMessage>
    </Container>
  );
};

export default Signup;
