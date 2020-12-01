import React from "react";
import PropTypes from "prop-types";

import Option from "./Option";

import { StyledSelect, Label, RequiredText, InputError } from "./Form.styles";

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
      <Label htmlFor={id}>
        {label}
        {isRequired && <RequiredText>(Required)</RequiredText>}
      </Label>
      <StyledSelect
        hasError={error}
        onChange={onChange}
        placeholder={placeholder}
        {...leftoverProps}
      >
        <Option value="">{placeholder}</Option>

        {options.map(({ label, value, ...leftoverProps }) => (
          <Option key={value} value={value} {...leftoverProps}>
            {label}
          </Option>
        ))}
      </StyledSelect>
      {error && <InputError>{error}</InputError>}
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
