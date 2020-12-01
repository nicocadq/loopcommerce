import React from "react";
import PropTypes from "prop-types";

import { Container, Error, Message } from "./ErrorBoundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const {
      hasError,
      error: { message },
    } = this.state;
    const { children } = this.props;
    const isDevelopmentMode = process.env.NODE_ENV === "development";

    if (hasError)
      return (
        <Container>
          <Message>There was an unexpected error, please reload</Message>
          {isDevelopmentMode && <Error>{message}</Error>}
        </Container>
      );

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
