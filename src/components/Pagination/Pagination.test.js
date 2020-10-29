import React from "react";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders correctly", () => {
    expect(
      <Pagination currentPage={1} onPageChange={() => {}} totalPages={1} />
    ).toBeTruthy();
  });
});
