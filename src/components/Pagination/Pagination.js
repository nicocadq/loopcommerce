import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  const [lastPage, setLastPage] = useState(1);
  const isUserAtTheEnd = currentPage === totalPages;
  const isUserAtBeginning = currentPage === 1;

  const pagesToBeShown = useMemo(() => {
    const pages = [1];
    if (currentPage <= 4 || lastPage <= 6) {
      for (let i = 2; i < 6 && i < lastPage; i += 1) {
        pages.push(i);
      }
    } else if (currentPage >= lastPage - 5) {
      for (let i = lastPage - 4; i < lastPage; i += 1) {
        pages.push(i);
      }
    } else {
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
    }
    if (!pages.includes(lastPage)) {
      pages.push(lastPage);
    }
    return pages;
  }, [currentPage, lastPage]);

  useEffect(() => {
    setLastPage(totalPages);
  }, [totalPages]);

  const handleOnItemClick = (item) => () => {
    if (currentPage !== item) onPageChange(item);
  };

  const handleOnNextClick = () => {
    if (!isUserAtTheEnd) onPageChange(currentPage + 1);
  };

  const handleOnPreviousClick = () => {
    if (!isUserAtBeginning) onPageChange(currentPage - 1);
  };

  return (
    <div>
      <Button buttonType="secondary--black" onClick={handleOnPreviousClick}>
        Previous
      </Button>
      {pagesToBeShown.map((pageNumber, index) => {
        if (pageNumber < pagesToBeShown[index + 1] - 1) {
          return (
            <React.Fragment key={pageNumber}>
              <Button
                buttonType={
                  pageNumber === currentPage ? "primary" : "secondary--black"
                }
                onClick={handleOnItemClick(pageNumber)}
              >
                {pageNumber}
              </Button>
              <Button
                buttonType="secondary--black"
                onClick={handleOnItemClick(pageNumber + 1)}
              >
                ...
              </Button>
            </React.Fragment>
          );
        }
        return (
          <Button
            key={pageNumber}
            buttonType={
              pageNumber === currentPage ? "primary" : "secondary--black"
            }
            onClick={handleOnItemClick(pageNumber)}
          >
            {pageNumber}
          </Button>
        );
      })}
      <Button buttonType="secondary--black" onClick={handleOnNextClick}>
        Next
      </Button>
    </div>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 1,
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
};

export default Pagination;
