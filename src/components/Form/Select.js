import React from "react";
import PropTypes from "prop-types";

import Option from "./Option";

import styles from "./Form.module.scss";

const Select = ({
  error,
  id,
  isRequired,
  onChange,
  options,
  placeholder,
  label,
  ...leftoverProps
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
        {isRequired && (
          <span className={styles["required-text"]}>(Required)</span>
        )}
      </label>
      <select
        className={`${error ? styles.error : ""} ${styles.select}`}
        onChange={onChange}
        placeholder={placeholder}
        {...leftoverProps}
      >
        <Option className={styles.placeholder} value="">
          {placeholder}
        </Option>

        {options.map(({ label, value, ...leftoverProps }) => (
          <Option key={value} value={value} {...leftoverProps}>
            {label}
          </Option>
        ))}
      </select>
      {error && <p className={styles["input-error"]}>{error}</p>}
    </>
  );
};

Select.defaultProps = {
  error: "",
  isRequired: false,
};

Select.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
