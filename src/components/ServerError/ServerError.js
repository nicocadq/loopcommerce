import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./ServerError.module.scss";

const ServerError = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <p className={styles.text}>
        There was a server error, please try again later.
      </p>
    </div>
  );
};

export default ServerError;
