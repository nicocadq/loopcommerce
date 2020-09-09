import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ buttonType, children, onClick }) => {
  return (
    <button className={styles[buttonType]} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "primary",
};

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
