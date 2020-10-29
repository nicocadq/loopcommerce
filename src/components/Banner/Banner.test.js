import React from "react";

import { render } from "../../testUtils";
import BannerImage from "../../assets/images/banner.png";
import Banner from "./Banner";

describe("Banner", () => {
  it("renders correctly", () => {
    expect(<Banner bannerImage={BannerImage} />).toBeTruthy();
  });
});
