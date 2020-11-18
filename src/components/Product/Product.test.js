import React from "react";
import faker from "faker";

import { render, renderWithRouter, fireEvent } from "../../testUtils";
import Product from "./Product";

const fakeProduct = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a urna quis metus pellentesque lobortis in eu lorem. Pellentesque ac dictum erat. Proin eu elit euismod, suscipit enim et, porta libero.",
  id: 123,
  imageURL: faker.image.imageUrl(),
  name: "Lorem ipsum",
  price: "12312",
};

describe("Product", () => {
  it("add the product to the cart when Buy Now is clicked", () => {
    const { getByRole, store } = renderWithRouter(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />,
      { history: ["/"] }
    );

    const buyNowButton = getByRole("button");
    fireEvent.click(buyNowButton);

    expect(store.getState().cart.products.includes(fakeProduct)).toBeTruthy();
  });

  it("goes to product detail when product is clicked", () => {
    const { getByTestId, history } = renderWithRouter(
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

    expect(history.location.pathname).toBe(`/product/${fakeProduct.id}`);
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
