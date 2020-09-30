import React from "react";
import PropTypes from "prop-types";

import Option from "./Option";

import styles from "./Form.module.scss";

const Select = ({ children, error, onChange, placeholder, ...rest }) => {
  return (
    <>
      <select
        className={`${error ? styles.error : ""} ${styles.select}`}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      >
        {children}
      </select>
      {error && <p className={styles["input-error"]}>{error}</p>}
    </>
  );
};

Select.Option = Option;

Select.propTypes = {
  children: PropTypes.elementType.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Select;
