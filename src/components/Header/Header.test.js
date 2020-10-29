import React from "react";

import { render, fireEvent } from "../../testUtils";
import Header from "./Header";

const fakeState = {
  auth: {
    user: {
      id: 597,
      first_name: "Nico",
      last_name: "Nico",
      email: "roberto@gmail.com",
      gender: "male",
      address: null,
      created_at: "2020-10-06T15:06:50.232-04:00",
      updated_at: "2020-10-28T13:35:17.490-04:00",
      must_change_password: false,
    },
    headers: {
      accessToken: "RpBsw8VUKd0Rs4ZUKJBiZA",
      client: "WK7e2s_gdW7VB-NW50e76Q",
      uid: "roberto@gmail.com",
    },
  },
  currentProduct: null,
};

describe("Header", () => {
  it("redirects to home when the user clicks in the logo", () => {
    const { getByRole, history } = render(<Header />);

    const logo = getByRole("img", { name: "Logo" });
    fireEvent.click(logo);
    expect(history.location.pathname).toBe("/");
  });

  it("renders children successfully", () => {
    const children = <h1>Hello</h1>;

    const { getByRole } = render(<Header>{children}</Header>);

    getByRole("heading", { name: "Hello" });
  });

  it("displays actions user actions if user is logged in", () => {
    const { getByText } = render(<Header />, {
      initialState: fakeState,
    });

    const userActions = getByText("My account", { selector: "span" });
    expect(userActions).toBeInTheDocument();
  });

  it("logs out when the user clicks on the logout user action", () => {
    const { getByText, getByRole, store } = render(<Header />, {
      initialState: fakeState,
    });

    const userActions = getByText("My account", { selector: "span" });
    fireEvent.click(userActions);
    const signOutButton = getByRole("button", { name: "Sign Out" });
    fireEvent.click(signOutButton);

    expect(store.getState().auth).toStrictEqual({ user: null, headers: null });
  });

  it("displays authentication actions when the user isn't logged in", () => {
    const { getByRole } = render(<Header />);

    getByRole("button", { name: "Login" });
    getByRole("button", { name: "Sign Up" });
  });

  it("redirects to login page when the user isn't logged in and clicks in login", () => {
    const { getByRole, history } = render(<Header />);

    const loginButton = getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    expect(history.location.pathname).toBe("/login");
  });

  it("redirects to sign up page when the user isn't logged in and clicks in sign up", () => {
    const { getByRole, history } = render(<Header />);

    const signUpButton = getByRole("button", { name: "Sign Up" });
    fireEvent.click(signUpButton);

    expect(history.location.pathname).toBe("/signup");
  });
});
