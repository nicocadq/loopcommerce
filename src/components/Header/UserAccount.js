import React from "react";

import Button from "../Button";

import styles from "./Header.module.scss";

const UserAccount = () => {
  return (
    <div className={styles["buttons-group"]}>
      <Button onClick={() => {}}>Login</Button>
      <Button buttonType="secondary" onClick={() => {}}>
        Sign Up
      </Button>
      <Button buttonType="secondary--black" onClick={() => {}}>
        My Cart
      </Button>
    </div>
  );
};

export default UserAccount;
