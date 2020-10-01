import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.scss";

const Input = ({
  error,
  id,
  isRequired,
  type,
  onChange,
  placeholder,
  label,
  ...leftoverProps
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id} {...leftoverProps}>
        {label}
        {isRequired && (
          <span className={styles["required-text"]}>(Required)</span>
        )}
      </label>
      <input
        className={`${error ? styles.error : ""} ${styles.input}`}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...leftoverProps}
      />
      {error && <p className={styles["input-error"]}>{error}</p>}
    </>
  );
};

Input.defaultProps = {
  error: "",
  isRequired: false,
  type: "text",
};

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
