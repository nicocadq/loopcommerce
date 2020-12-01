import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Container, IconContainer } from "./ServerError.styles";

const ServerError = ({ message }) => {
  return (
    <Container data-testid="server-error">
      <IconContainer>
        <FontAwesomeIcon icon={faTimes} />
      </IconContainer>
      <p>{message}</p>
    </Container>
  );
};

ServerError.defaultProps = {
  message: "There was a server error, please try again later.",
};

ServerError.propTypes = {
  message: PropTypes.string,
};

export default ServerError;
