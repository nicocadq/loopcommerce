import React from "react";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

import { render, getByRole } from "../../testUtils";
import ServiceCard from "./ServiceCard";

const fakeServiceCardInfo = {
  title: "Title",
  description: "Description",
  backIconColor: "green",
  icon: faDollarSign,
};

describe("ServiceCard", () => {
  it("renders info correctly", () => {
    const { getByText, getByRole } = render(
      <ServiceCard
        backIconColor={fakeServiceCardInfo.backIconColor}
        description={fakeServiceCardInfo.description}
        icon={fakeServiceCardInfo.icon}
        title={fakeServiceCardInfo.title}
      />
    );

    const title = getByText(fakeServiceCardInfo.title);
    expect(title).toBeInTheDocument();

    const description = getByText(fakeServiceCardInfo.description);
    expect(description).toBeInTheDocument();
  });
});
