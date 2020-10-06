import React from "react";
import { Link } from "react-router-dom";

import SignupForm from "./Form";

import styles from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.container}>
      <SignupForm />
      <div className={styles["have-an-account"]}>
        Already have an account?
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
