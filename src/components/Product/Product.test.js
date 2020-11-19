import React from "react";
import faker from "faker";

import { render, renderWithRouter, fireEvent, waitFor } from "../../testUtils";
import Product from "./Product";

const fakeProduct = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a urna quis metus pellentesque lobortis in eu lorem. Pellentesque ac dictum erat. Proin eu elit euismod, suscipit enim et, porta libero.",
  id: 123,
  imageURL: faker.image.imageUrl(),
  name: "Lorem ipsum",
  price: "12312",
};

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

describe("Product", () => {
  it("add the product to the cart when Buy Now is clicked", () => {
    const { getByRole, store } = render(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />,
      { initialState: fakeState, history: ["/"] }
    );

    const addToCartButton = getByRole("button");
    fireEvent.click(addToCartButton);

    expect(
      store
        .getState()
        .cart.products.some((product) => product.id === fakeProduct.id)
    ).toBeTruthy();
  });

  it("goes to product detail when product is clicked", async () => {
    const { getByTestId, history } = render(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />,
      { history: ["/"] }
    );

    const product = getByTestId("product");
    fireEvent.click(product);

    await waitFor(() => {
      expect(history.location.pathname).toBe(`/product/${fakeProduct.id}`);
    });
  });

  it("shows product information", () => {
    const { getByRole, getByText } = render(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />
    );

    const image = getByRole("img", { name: `${fakeProduct.description}` });

    expect(image).toHaveAttribute("src", `${fakeProduct.imageURL}`);

    expect(getByText(`${fakeProduct.name}`)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.price}`)).toBeInTheDocument();
  });
});
