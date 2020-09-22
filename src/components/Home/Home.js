import React, { useState, useEffect } from "react";
import faker from "faker";

import HighlightSection from "./HighlightSection";
import Header from "../Header";
import Search from "../Search";
import ServerError from "../ServerError";
import Spinner from "../Loader";
import Product from "../Product";
import Pagination from "../Pagination";
import { useFetch } from "../../hooks";

import styles from "./Home.module.scss";

const Home = () => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [currentSearch, setCurrentSearch] = useState(null);

  const {
    data: { products },
    loading,
    error,
    headersData,
  } = useFetch(
    `${
      currentSearch
        ? `products/?filter=${currentSearch}&page=${currentPage}`
        : `products/?page=${currentPage}`
    }`
  );

  const onSearch = (value) => {
    setCurrentSearch(value);
  };

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (!isNaN(Number(headersData["total-pages"]))) {
      setTotalPages(Number(headersData["total-pages"]));
    }

    if (!isNaN(Number(headersData["current-page"]))) {
      setCurrentPage(Number(headersData["current-page"]));
    }

    if (!isNaN(Number(headersData["total-count"]))) {
      setTotalProductsCount(Number(headersData["total-count"]));
    }
  }, [headersData]);

  return (
    <>
      <Header>
        <Search onSearch={onSearch} />
      </Header>
      <div className={styles.container}>
        <HighlightSection />
        <h2 className={styles["new-arrivals-title"]}>New Arrivals</h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.products}>
            {(!totalProductsCount || error) && <ServerError />}
            {products?.map(({ description, id, name, price }) => (
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
        <div className={styles.pagination}>
          <Pagination
            onPageChange={onPageChange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
