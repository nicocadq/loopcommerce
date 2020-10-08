import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "./Form";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
      <div className={styles["have-an-account"]}>
        Don't have an account?
        <Link to="/signup">Create one here</Link>
      </div>
    </div>
  );
};

export default Login;
