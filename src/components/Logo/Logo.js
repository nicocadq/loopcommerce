import React from "react";

import LogoImage from "../../assets/images/logo.svg";
import LogoImageSM from "../../assets/images/logo-sm.svg";

const Logo = () => {
  return (
    <picture>
      <source srcset={LogoImageSM} media="(max-width: 670px)" />
      <img src={LogoImage} alt="Logo" />
    </picture>
  );
};

export default Logo;
