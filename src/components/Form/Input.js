import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.scss";

const Input = ({ error, id, type, onChange, placeholder, ...rest }) => {
  return (
    <>
      <input
        className={`${error ? styles.error : ""} ${styles.input}`}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
      {error && <p className={styles["input-error"]}>{error}</p>}
    </>
  );
};

Input.defaultProps = {
  error: "",
  type: "text",
};

Input.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
