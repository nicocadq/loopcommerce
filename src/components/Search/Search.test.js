import React from "react";

import { render, fireEvent } from "../../testUtils";
import Search from "./Search";

describe("Search", () => {
  it("executes onSearch callback when the user clicks on the search button", () => {
    const fakeOnSearch = jest.fn();

    const { getByRole, getByPlaceholderText } = render(
      <Search onSearch={fakeOnSearch} />
    );

    const input = getByPlaceholderText("Search");
    fireEvent.change(input, { target: "Hello " });
    const button = getByRole("button");
    fireEvent.click(button);

    expect(fakeOnSearch.mock.calls.length).toBe(1);
  });
});
