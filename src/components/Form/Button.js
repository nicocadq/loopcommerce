import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.scss";

const Button = ({ buttonType, children, onClick, ...leftoverProps }) => {
  return (
    <button className={styles[buttonType]} onClick={onClick} {...leftoverProps}>
      {children}
    </button>
  );
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
