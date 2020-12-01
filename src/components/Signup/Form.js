import React, { useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import Form from "../Form";
import Logo from "../Logo";
import ServerError from "../ServerError";
import { useForm, useDispatchableFetch } from "../../hooks";
import * as _ from "../../helpers";
import { setUser } from "../../actions/auth";

import {
  FormContainer,
  LogoContainer,
  ServerErrorContainer,
} from "./Signup.styles";
import { deleteEmptyProps } from "../../utils/objects";

const validateForm = (values) => {
  const errors = {};

  errors.email = _.validateEmail(values.email);
  errors.password = _.validatePassword(values.password);
  errors.first_name = _.validateFirstName(values.first_name);
  errors.last_name = _.validateLastName(values.last_name);
  errors.gender = _.validateGender(values.gender);

  return deleteEmptyProps(errors);
};

const SignupForm = () => {
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
  } = useDispatchableFetch("/auth", options);

  const signup = () => execute();

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
      <Form onSubmit={(event) => handleOnSubmit(event, signup)}>
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
            placeholder="johndoe@gmail.com"
            label="Email"
          />

          <Form.Input
            error={errors.first_name}
            id="firstName"
            isRequired
            name="first_name"
            onChange={handleOnChange}
            placeholder="John"
            label="First Name"
          />

          <Form.Input
            error={errors.last_name}
            id="lastName"
            isRequired
            name="last_name"
            onChange={handleOnChange}
            placeholder="Doe"
            label="Last Name"
          />

          <Form.Select
            error={errors.gender}
            id="gender"
            isRequired
            name="gender"
            onChange={handleOnChange}
            placeholder="Select your gender"
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" },
            ]}
            label="Gender"
          />

          <Form.Input
            error={errors.address || ""}
            id="address"
            name="address"
            onChange={handleOnChange}
            placeholder="123 fake street"
            label="Address"
          />

          <Form.Input
            error={errors.password || ""}
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
            {loading ? "Loading..." : "Sign up"}
          </Form.Button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default SignupForm;
