import React from "react";
import faker from "faker";
import {
  faDollarSign,
  faPhone,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";
import Product from "../Product";
import Spinner from "../Loader";
import Banner from "../Banner";
import ServiceCard from "../ServiceCard";
import { useFetch } from "../../hooks";

import BannerImage from "../../assets/images/banner.png";

import styles from "./Home.module.scss";

const Home = () => {
  const {
    data: { products },
    loading,
    error,
  } = useFetch("products/");

  return (
    <>
      <Header />
      <div className={styles.container}>
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
        <h2 className={styles["new-arrivals-title"]}>New Arrivals</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.products}>
            {products.map(({ description, id, name, price }) => (
              <Product
                key={id}
                description={description}
                imageURL={faker.image.imageUrl()}
                name={name}
                price={price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
