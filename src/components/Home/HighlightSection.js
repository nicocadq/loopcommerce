import React from "react";
import {
  faDollarSign,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import Banner from "../Banner";
import ServiceCard from "../ServiceCard";

import BannerImage from "../../assets/images/banner.png";

import { BannerContainer, ServiceContainer } from "./Home.styles";

const HighlightSection = () => {
  return (
    <>
      <BannerContainer>
        <Banner bannerImage={BannerImage} />
      </BannerContainer>
      <ServiceContainer>
        <ServiceCard
          iconBackgroundColor="lightRed"
          iconColor="scaleRed"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faDollarSign}
          title="Reasonable Prices"
        />
        <ServiceCard
          iconBackgroundColor="scaleGreen0"
          iconColor="scaleGreen1"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faPhone}
          title="Customer Support"
        />
        <ServiceCard
          iconBackgroundColor="scaleSkyBlue0"
          iconColor="scaleSkyBlue1"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faTruck}
          title="Express Delivery"
        />
      </ServiceContainer>
    </>
  );
};

export default HighlightSection;
