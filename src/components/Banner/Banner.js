import React from "react";
import PropTypes from "prop-types";

import styles from "./Banner.module.scss";

const Banner = ({ bannerImage }) => {
  return (
    <div className={styles.container}>
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

Banner.propType = {
  bannerImage: PropTypes.string.isRequired,
};

export default Banner;
