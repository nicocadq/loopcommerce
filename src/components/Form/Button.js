import React from "react";
import PropTypes from "prop-types";

import {
  PrimaryButton,
  SecondaryButton,
  SecondaryBlackButton,
} from "./Form.styles";

const Button = ({ buttonType, children, onClick, ...leftoverProps }) => {
  switch (buttonType) {
    case "secondary": {
      return (
        <SecondaryButton onClick={onClick} {...leftoverProps}>
          {children}
        </SecondaryButton>
      );
    }
    case "secondary--black": {
      return (
        <SecondaryBlackButton onClick={onClick} {...leftoverProps}>
          {children}
        </SecondaryBlackButton>
      );
    }
    default: {
      return (
        <PrimaryButton onClick={onClick} {...leftoverProps}>
          {children}
        </PrimaryButton>
      );
    }
  }
};

Button.defaultProps = {
  buttonType: "primary",
  type: "button",
};

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export { Button };
