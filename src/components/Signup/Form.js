import React from "react";
import { Link } from "react-router-dom";

import Form from "../Form";
import Logo from "../Logo";
import { useForm, useDispatchableFetch } from "../../hooks";
import * as _ from "../../helpers";

import styles from "./Signup.module.scss";

const validateForm = (values) => {
  const errors = {};

  errors.email = _.validateEmail(values.email);
  errors.password = _.validatePassword(values.password);
  errors.first_name = _.validateFirstName(values.first_name);
  errors.last_name = _.validateLastName(values.last_name);
  errors.gender = _.validateGender(values.gender);

  return errors;
};

const SignupForm = () => {
  const { values, errors, handleOnChange, handleOnSubmit } = useForm(
    validateForm
  );

  const options = {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(values),
  };

  const { data, loading, error, execute } = useDispatchableFetch(
    "auth",
    options
  );

  const signup = () => {
    execute();
  };

  return (
    <div className={styles.form}>
      <Form onSubmit={(event) => handleOnSubmit(event, signup)}>
        <div className={styles.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className={styles["form-content"]}>
          <Form.Label htmlFor={"email"} isRequired>
            Email
          </Form.Label>
          <Form.Input
            error={errors.email || ""}
            id="email"
            name="email"
            onChange={handleOnChange}
            placeholder="johndoe@gmail.com"
          />

          <Form.Label htmlFor={"firstName"} isRequired>
            First Name
          </Form.Label>
          <Form.Input
            error={errors.first_name || ""}
            id="firstName"
            name="first_name"
            onChange={handleOnChange}
            placeholder="John"
          />

          <Form.Label htmlFor={"lastName"} isRequired>
            Last Name
          </Form.Label>
          <Form.Input
            error={errors.last_name || ""}
            id="lastName"
            name="last_name"
            onChange={handleOnChange}
            placeholder="Doe"
          />

          <Form.Label htmlFor={"gender"} isRequired>
            Gender
          </Form.Label>
          <Form.Select
            error={errors.gender}
            id="gender"
            name="gender"
            onChange={handleOnChange}
            placeholder="Gender"
          >
            <Form.Select.Option value="">Select your gender</Form.Select.Option>
            <Form.Select.Option value="female">Female</Form.Select.Option>
            <Form.Select.Option value="male">Male</Form.Select.Option>
            <Form.Select.Option value="other">Other</Form.Select.Option>
          </Form.Select>

          <Form.Label htmlFor={"address"}>Address</Form.Label>
          <Form.Input
            error={errors.address || ""}
            id="address"
            name="address"
            onChange={handleOnChange}
            placeholder="123 fake street"
          />

          <Form.Label htmlFor={"password"} isRequired>
            Password
          </Form.Label>
          <Form.Input
            error={errors.password || ""}
            id="password"
            name="password"
            onChange={handleOnChange}
            type="password"
            placeholder="Type your password"
          />

          <Form.Button type="submit">
            {loading ? "Loading..." : "Sign up"}
          </Form.Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
