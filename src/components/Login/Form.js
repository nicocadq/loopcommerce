import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Form from "../Form";
import Logo from "../Logo";
import ServerError from "../ServerError";
import { useForm, useDispatchableFetch } from "../../hooks";
import { deleteEmptyProps } from "../../utils/objects";
import * as _ from "../../helpers";
import { setUser } from "../../actions/auth";

import {
  FormContainer,
  LogoContainer,
  ServerErrorContainer,
} from "./Login.styles";

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
  } = useDispatchableFetch("/auth/sign_in", options);

  const login = () => execute();

  useEffect(() => {
    if (Object.keys(data).length) {
      const accessToken = headersData["access-token"];
      const { uid, client } = headersData;
      dispatch(setUser(data, { accessToken, client, uid }));

      history.push("/");
    }
  }, [data, dispatch, headersData, history, state]);

  return (
    <FormContainer>
      <Form onSubmit={(event) => handleOnSubmit(event, login)}>
        <LogoContainer>
          <Link to="/">
            <Logo />
          </Link>
        </LogoContainer>
        <div>
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
            <ServerErrorContainer key={error}>
              <ServerError message={error} />
            </ServerErrorContainer>
          ))}

          <Form.Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Log In"}
          </Form.Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
