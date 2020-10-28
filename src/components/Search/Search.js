import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./../Form";

import styles from "./Search.module.scss";

const sanitizer = (value) => {
  return value.trim();
};

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(sanitizer(e.target.value));
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div className={styles.search} data-testid="search">
      <form>
        <input type="text" onChange={handleOnChange} placeholder="Search" />
        <Button onClick={handleOnClick}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </form>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
