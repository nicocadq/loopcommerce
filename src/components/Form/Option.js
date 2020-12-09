import React from "react";
import PropTypes from "prop-types";

const Option = ({ children, value, ...leftoverProps }) => {
  return (
    <option value={value} {...leftoverProps}>
      {children}
    </option>
  );
};

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
