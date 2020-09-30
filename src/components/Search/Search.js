import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Button } from "./../Form";

import styles from "./Search.module.scss";

const Search = () => {
  const handleOnClick = () => {};

  return (
    <div className={styles.search}>
      <form>
        <input type="text" placeholder="Search" />
        <Button onClick={handleOnClick}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </form>
    </div>
  );
};

export default Search;
