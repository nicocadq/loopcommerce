import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ children, buttonType, onClick }) => {
  return (
    <>
      <button className={styles[buttonType]} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  buttonType: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
