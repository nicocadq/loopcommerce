import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.scss";

const Label = ({ children, htmlFor, isRequired, ...rest }) => {
  return (
    <>
      <label className={styles.label} htmlFor={htmlFor} {...rest}>
        {children}
        {isRequired && (
          <span className={styles["required-text"]}>(Required)</span>
        )}
      </label>
    </>
  );
};

Label.defaultProps = {
  isRequired: false,
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
};

export default Label;
