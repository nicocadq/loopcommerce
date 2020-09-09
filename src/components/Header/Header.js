import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import Search from "../Search";
import Button from "../Button";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <Search />
        <div className={styles["buttons-group"]}>
          <Button onClick={() => {}}>
            <span>Login</span>
          </Button>
          <Button buttonType="secondary" onClick={() => {}}>
            <span>Sign Up</span>
          </Button>
          <Button buttonType="secondary--black" onClick={() => {}}>
            <span>My Cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
