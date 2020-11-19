import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import LiveSearch from "./LiveSearch";
import { useDebounce } from "../../hooks";

import styles from "./Search.module.scss";

const sanitizer = (value) => {
  return value.trim();
};

const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [showLiveSearch, setShowLiveSearch] = useState(false);
  const debouncedValue = useDebounce(200, value);
  const searchDivNode = useRef();

  const handleOnChange = (event) => {
    setValue(sanitizer(event.target.value));

    if (value.length > 2) {
      setShowLiveSearch(true);
    }
  };

  const handleOnProductClick = (value) => {
    setShowLiveSearch(false);
    onSearch(value);
  };

  const handleOnClick = (event) => {
    if (!searchDivNode.current?.contains(event.target))
      setShowLiveSearch(false);
  };

  const handleOnSubmit = (event) => event.preventDefault();

  useEffect(() => {
    document.addEventListener("mousedown", handleOnClick);

    return () => {
      document.removeEventListener("mousedown", handleOnClick);
    };
  }, []);

  return (
    <div className={styles.search} ref={searchDivNode}>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} placeholder="Search" />
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
      {showLiveSearch && (
        <LiveSearch
          onProductClick={handleOnProductClick}
          value={debouncedValue}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
