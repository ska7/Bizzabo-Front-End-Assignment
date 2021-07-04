import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PaginationItem } from './PaginationItem';
import { Pagination } from './Pagination';

const renderPaginationItems = (activePage, totalPageCount) => {
  const pages = [];

  if (totalPageCount > 7) {
    if (activePage >= 5) {
      // If active page is > 5, it should always be centered in the pagination block
      // with following and previous page tiles rendered sideways
      //  Active page = 8, pages = [5,6,7,8,9,10,11]
      //  Active page = 9, pages = [6,7,8,9,10,11,12]
      for (let page = activePage - 3; page < activePage + 4; page++) {
        pages.push(page);
      }
    } else {
      // If active page is < 5, pages = [1,2,3,4,5,6,7]
      for (let page = 1; page < 8; page++) {
        pages.push(page);
      }
    }
  } else {
    // If total page count is < 7, all available page tiles should render at once
    for (let page = 1; page < totalPageCount; page++) {
      pages.push(page);
    }
  }

  return pages;
};

// This is a Container component dedicated to holding the logic of how page tiles
// are generated that should be displayed in Pagination.js
export const PaginationContainer = ({ activePage, setActivePage, totalPageCount }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(renderPaginationItems(activePage, totalPageCount));
  }, [activePage]);

  return (
    <Pagination activePage={activePage} pages={pages} setActivePage={setActivePage} totalPageCount={totalPageCount} />
  );
};

PaginationContainer.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  totalPageCount: PropTypes.number.isRequired,
};
