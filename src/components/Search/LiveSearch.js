import React from "react";
import PropTypes from "prop-types";

import Spinner from "../Loader";
import { useFetch } from "../../hooks";

import { LiveSearchContainer, ProductContainer } from "./Search.styles";

const LiveSearch = ({ onProductClick, value }) => {
  const {
    data: { products },
    isLoading,
  } = useFetch(`/products/?filter=${value}`);

  const handleOnClick = (value) => {
    onProductClick(value);
  };

  return (
    <LiveSearchContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        products?.map(({ id, name }) => (
          <ProductContainer onClick={() => handleOnClick(name)} key={id}>
            {name}
          </ProductContainer>
        ))
      )}
    </LiveSearchContainer>
  );
};

LiveSearch.propTypes = {
  onProductClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default LiveSearch;
