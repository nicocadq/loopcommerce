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
  it("renders component", () => {
    const { getByTestId } = render(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />
    );

    const product = getByTestId("product");
    expect(product).toBeDefined();
  });

  it("goes to thank you page when Buy Now is clicked", () => {
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

    const buyNowButton = getByTestId("buy-now-button");
    fireEvent.click(buyNowButton);

    expect(history.location.pathname).toEqual("/thank-you-page");
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

    expect(history.location.pathname).toEqual(`/product/${fakeProduct.id}`);
  });

  it("shows product information", () => {
    const { getByTestId, getByText, container } = render(
      <Product
        description={fakeProduct.description}
        id={fakeProduct.id}
        imageURL={fakeProduct.imageURL}
        name={fakeProduct.name}
        price={fakeProduct.price}
      />
    );

    const image = container.getElementsByTagName("img")[0];

    expect(image).toHaveAttribute("src", `${fakeProduct.imageURL}`);

    expect(getByText(`${fakeProduct.name}`)).toBeInTheDocument();
    expect(getByText(`${fakeProduct.price}`)).toBeInTheDocument();
  });
});
