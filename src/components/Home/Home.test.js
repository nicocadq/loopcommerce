import React from "react";

import { render, waitFor } from "../../testUtils";
import {
  mockProductsSuccess,
  mockProductsFailure,
  productsData,
} from "../../testUtils/mock/products";
import Home from "./Home";

describe("Home", () => {
  it("renders product list successfully", async () => {
    const mockedRequest = mockProductsSuccess();

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();

      const productFromServer = getByText(productsData[0].name);
      expect(productFromServer).toBeInTheDocument();
    });
  });

  it("shows an error when the request is failed", async () => {
    const errorMessage = "There was a server error, please try again later.";
    const mockedRequest = mockProductsFailure();

    const { getByText, screen } = render(<Home />);

    await waitFor(() => {
      expect(mockedRequest.isDone()).toBeTruthy();
      expect(getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
