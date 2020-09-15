import React from "react";
import faker from "faker";

import Header from "../Header";
import Product from "../Product";
import Spinner from "../Loader";
import { useFetch } from "../../hooks";

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
