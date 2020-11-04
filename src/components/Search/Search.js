import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./../Form";
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

  const handleOnChange = (e) => {
    setValue(sanitizer(e.target.value));

    if (value.length > 2) {
      setShowLiveSearch(true);
    }
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setShowLiveSearch(false);
    }, 250);
  };

  const handleOnProductClick = (value) => {
    onSearch(value);
  };

  return (
    <div className={styles.search} onBlur={handleOnBlur}>
      <form>
        <input type="text" onChange={handleOnChange} placeholder="Search" />
        <Button>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
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
