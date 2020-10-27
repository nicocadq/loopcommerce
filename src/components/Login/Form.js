import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Form from "../Form";
import Logo from "../Logo";
import ServerError from "../ServerError";
import { useForm, useDispatchableFetch } from "../../hooks";
import { deleteEmptyProps } from "../../utils/objects";
import * as _ from "../../helpers";
import Types from "../../actions/types";

import styles from "./Login.module.scss";

const validateForm = (values) => {
  const errors = {};

  errors.email = _.validateEmail(values.email);
  errors.password = _.validatePassword(values.password);

  return deleteEmptyProps(errors);
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  const { values, errors, handleOnChange, handleOnSubmit } = useForm(
    validateForm
  );

  const options = {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(values),
  };

  const {
    data,
    loading,
    serverErrors,
    execute,
    headersData,
  } = useDispatchableFetch("auth/sign_in", options);

  const login = () => execute();

  useEffect(() => {
    if (Object.keys(data).length) {
      const accessToken = headersData["access-token"];
      const { uid, client } = headersData;
      dispatch({
        type: Types.SET_USER,
        payload: { user: data, headers: { accessToken, client, uid } },
      });

      history.push(state?.from || "/");
    }
  }, [data, dispatch, headersData, history, state]);

  return (
    <div className={styles.form}>
      <Form onSubmit={(event) => handleOnSubmit(event, login)}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles["form-content"]}>
          <Form.Input
            error={errors.email}
            id="email"
            isRequired
            name="email"
            onChange={handleOnChange}
            placeholder="jhondoe@gmail.com"
            label="Email"
          />
          <Form.Input
            error={errors.password}
            id="password"
            isRequired
            name="password"
            onChange={handleOnChange}
            type="password"
            placeholder="Type your password"
            label="Password"
          />

          {serverErrors?.map((error) => (
            <div className={styles.errors} key={error}>
              <ServerError message={error} />
            </div>
          ))}

          <Form.Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Log In"}
          </Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
