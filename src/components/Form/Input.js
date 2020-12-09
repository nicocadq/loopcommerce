import React from "react";
import PropTypes from "prop-types";

import { Label, StyledInput, RequiredText, InputError } from "./Form.styles";

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
      <Label htmlFor={id}>
        {label}
        {isRequired && <RequiredText>(Required)</RequiredText>}
      </Label>
      <StyledInput
        id={id}
        hasError={error}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...leftoverProps}
      />
      {error && <InputError>{error}</InputError>}
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
