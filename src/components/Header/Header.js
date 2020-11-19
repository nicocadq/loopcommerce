import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import Logo from "../Logo";
import Actions from "./Actions";

import styles from "./Header.module.scss";

const Header = ({ children }) => {
  const location = useLocation();

  const reloadHomePage = () =>
    location.pathname === "/" && window.location.reload(true);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" onClick={reloadHomePage}>
          <Logo />
        </Link>
        {children}
        <Actions />
      </div>
    </header>
  );
};

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
