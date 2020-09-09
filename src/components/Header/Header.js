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
          <Button onClick={() => {}}>Login</Button>
          <Button buttonType="secondary" onClick={() => {}}>
            Sign Up
          </Button>
          <Button buttonType="secondary--black" onClick={() => {}}>
            My Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
