import React from "react";
import PropTypes from "prop-types";

import { Container, Image } from "./Banner.styles";

const Banner = ({ bannerImage }) => {
  return (
    <Container>
      <Image src={bannerImage} alt="Banner" />
    </Container>
  );
};

Banner.propType = {
  bannerImage: PropTypes.string.isRequired,
};

export default Banner;
