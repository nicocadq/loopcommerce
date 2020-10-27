import React from "react";
import faker from "faker";
import { Route } from "react-router-dom";

import { render, fireEvent } from "../../testUtils";
import ProductDetail from "./ProductDetail";

const fakeProduct = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a urna quis metus pellentesque lobortis in eu lorem. Pellentesque ac dictum erat. Proin eu elit euismod, suscipit enim et, porta libero.",
  id: 123,
  imageURL: faker.image.imageUrl(),
  name: "Lorem ipsum",
  price: "12312",
};

const fakeState = {
  auth: {},
  currentProduct: fakeProduct,
};

describe("Product", () => {
  it("renders component", () => {
    const { getByTestId } = render(
      <Route path="/product/:id">
        <ProductDetail />
      </Route>,
      {
        initialState: fakeState,
        history: [`/product/${fakeProduct.id}`],
      }
    );

    const product = getByTestId("product-detail");
    expect(product).toBeDefined();
  });

  it("redirects to home if currentProduct isn't in the store ", () => {
    const { history } = render(
      <Route path="/product/:id">
        <ProductDetail />
      </Route>,
      {
        history: [`/product/${fakeProduct.id}`],
      }
    );

    expect(history.location.pathname).toBe("/");
  });

  it("goes to thank you page when Buy Now is clicked ", () => {
    const { getByRole, history } = render(
      <Route path="/product/:id">
        <ProductDetail />
      </Route>,
      {
        initialState: fakeState,
        history: [`/product/${fakeProduct.id}`],
      }
    );

    const buyNowButton = getByRole("button", { name: "Buy Now" });
    fireEvent.click(buyNowButton);

    expect(history.location.pathname).toBe("/thank-you-page");
  });

  it("shows product information", () => {
    const { getByText, getByRole } = render(
      <Route path="/product/:id">
        <ProductDetail />
      </Route>,
      {
        initialState: fakeState,
        history: [`/product/${fakeProduct.id}`],
      }
    );

    const image = getByRole("img", { name: `${fakeProduct.description}` });

    expect(image).toHaveAttribute("src", `${fakeProduct.imageURL}`);

    expect(getByText(`${fakeProduct.name}`)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.price}`)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.description}`)).toBeInTheDocument();
  });
});
