import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import UserAccount from "./UserAccount";

import styles from "./Header.module.scss";

const Header = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        {children}
        <UserAccount />
      </div>
    </div>
  );
};

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
