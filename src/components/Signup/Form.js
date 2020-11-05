import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Form from "../Form";
import Logo from "../Logo";
import ServerError from "../ServerError";
import { useForm, useDispatchableFetch } from "../../hooks";
import * as _ from "../../helpers";
import Types from "../../actions/types";

import styles from "./Signup.module.scss";
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
      dispatch({
        type: Types.SET_USER,
        payload: { user: data, headers: { accessToken, client, uid } },
      });
      history.push("/");
    }
  }, [data, dispatch, headersData, history]);

  return (
    <div className={styles.form}>
      <Form onSubmit={(event) => handleOnSubmit(event, signup)}>
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
            <div className={styles.errors} key={error}>
              <ServerError message={error} />
            </div>
          ))}

          <Form.Button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Sign up"}
          </Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
