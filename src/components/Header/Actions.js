import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "../Button";
import User from "./User";

import styles from "./Header.module.scss";

const Actions = () => {
  const history = useHistory();
  const user = useSelector((state) => state.auth.user);

  const goToLogIn = () => {
    history.push("/login");
  };

  const goToSignUp = () => {
    history.push("/signup");
  };

  console.log(user);

  return (
    <div className={styles["buttons-group"]}>
      {user ? (
        <>
          <User />
        </>
      ) : (
        <>
          <Button onClick={goToLogIn}>Login</Button>
          <Button buttonType="secondary" onClick={goToSignUp}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
};

export default Actions;
