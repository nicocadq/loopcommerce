import React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.module.scss";

const Column = ({ links, title }) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        {links.map((link) => (
          <div className={styles.link} key={link}>
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

Column.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
};

export default Column;
