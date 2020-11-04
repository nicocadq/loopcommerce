import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Loader";
import { useFetch } from "../../hooks";

import styles from "./Search.module.scss";

const LiveSearch = ({ onProductClick, value }) => {
  const {
    data: { products },
    isLoading,
  } = useFetch(`/products/?filter=${value}`);

  const handleOnClick = (value) => {
    onProductClick(value);
  };

  return (
    <div className={styles["live-search"]}>
      {isLoading ? (
        <Spinner />
      ) : (
        products?.map(({ id, name }) => (
          <span
            className={styles.product}
            onClick={() => handleOnClick(name)}
            key={id}
          >
            {name}
          </span>
        ))
      )}
    </div>
  );
};

LiveSearch.propTypes = {
  onProductClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LiveSearch;
