import React from "react";
import PropTypes from "prop-types";

import { Button } from "./Button";
import Input from "./Input";
import Select from "./Select";

import styles from "./Form.module.scss";

const Form = ({ children, onSubmit }) => {
  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        {children}
      </form>
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
