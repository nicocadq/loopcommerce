import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import Input from "./Input";
import Select from "./Select";

import { StyledForm } from "./Form.styles";

const Form = ({ children, onSubmit }) => {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
    </>
  );
};

Form.Button = Button;
Form.Input = Input;
Form.Select = Select;

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
