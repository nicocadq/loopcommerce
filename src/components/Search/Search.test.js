import React from "react";

import { render, fireEvent, waitFor } from "../../testUtils";
import Search from "./Search";

describe("Search", () => {
  it("executes onSearch callback when the user search for some resource", async () => {
    const fakeOnSearch = () => jest.fn();

    const { getByPlaceholderText } = render(<Search onSearch={fakeOnSearch} />);

    const input = getByPlaceholderText("Search");
    fireEvent.change(input, { target: "Hello " });

    waitFor(() => {
      expect(fakeOnSearch).toHaveBeenCalled();
    });
  });
});
