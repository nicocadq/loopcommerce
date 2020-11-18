import React from "react";

import { render } from "../../testUtils";
import BannerImage from "../../assets/images/banner.png";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders the image correctly", () => {
    const { getByRole } = render(<Banner bannerImage={BannerImage} />);

    const image = getByRole("img", { name: "Banner" });
    expect(image).toHaveAttribute("src", `${BannerImage}`);
  });
});
