import React from "react";
import {
  faDollarSign,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import Banner from "../Banner";
import ServiceCard from "../ServiceCard";

import BannerImage from "../../assets/images/banner.png";

import styles from "./Home.module.scss";

const HighlightSection = () => {
  return (
    <>
      <div className={styles["banner-container"]}>
        <Banner bannerImage={BannerImage} />
      </div>
      <div className={styles["services-container"]}>
        <ServiceCard
          backIconColor="red"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faDollarSign}
          title="Reasonable Prices"
        />
        <ServiceCard
          backIconColor="green"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faPhone}
          title="Customer Support"
        />
        <ServiceCard
          backIconColor="blue"
          description="Have you finally just gave in to the temptation and read your horoscope"
          icon={faTruck}
          title="Express Delivery"
        />
      </div>
    </>
  );
};

export default HighlightSection;
