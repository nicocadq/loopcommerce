import React from "react";

import { fireEvent, render } from "../../testUtils";
import ServerError from "./ServerError";

describe("ServerError", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<ServerError />);

    const serverError = getByTestId("server-error");

    expect(serverError).toBeDefined();
  });

  it("renders the default message if is not provided", () => {
    const defaultMessage = "There was a server error, please try again later.";

    const { getByText } = render(<ServerError />);

    getByText(defaultMessage);
  });

  it("renders correctly the message provided", () => {
    const errorMessage = "Error message";

    const { getByText } = render(<ServerError message={errorMessage} />);

    getByText(errorMessage);
  });
});
