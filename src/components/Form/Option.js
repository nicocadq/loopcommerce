import React from "react";
import PropTypes from "prop-types";

import styles from "./Form.module.scss";

const Option = ({ children, value, ...leftoverProps }) => {
  return (
    <option className={styles.option} value={value} {...leftoverProps}>
      {children}
    </option>
  );
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
