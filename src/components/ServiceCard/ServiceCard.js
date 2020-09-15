import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ backIconColor, description, icon, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles[backIconColor]}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  backIconColor: "grey",
};

ServiceCard.propType = {
  backIconColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServiceCard;
