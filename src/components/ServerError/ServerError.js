import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./ServerError.module.scss";

const ServerError = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

ServerError.defaultProps = {
  message: " There was a server error, please try again later.",
};

ServerError.propTypes = {
  message: PropTypes.string,
};

export default ServerError;
