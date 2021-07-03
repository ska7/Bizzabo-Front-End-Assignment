import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from '@material-ui/core';
import { PaginationItem } from './PaginationItem';

const renderPaginationItems = (activePage, totalPageCount, callback) => {
  const pages = [];

  if (totalPageCount > 7) {
    if (activePage >= 5) {
      for (let page = activePage - 3; page < activePage + 4; page++) {
        pages.push(<PaginationItem pageNumber={page} activePage={activePage} setActivePage={callback} />);
      }
    } else {
      for (let page = 1; page < 8; page++) {
        pages.push(<PaginationItem pageNumber={page} activePage={activePage} setActivePage={callback} />);
      }
    }
  } else {
    for (let page = 0; page < totalPageCount; page++) {
      pages.push(<PaginationItem pageNumber={page} activePage={activePage} setActivePage={callback} />);
    }
  }

  return pages;
};

export const Pagination = ({ activePage, setActivePage, totalPageCount }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(renderPaginationItems(activePage, totalPageCount, setActivePage));
  }, [activePage]);

  return (
    <Grid>
      {activePage === 1 ? null : <Button onClick={() => setActivePage(activePage - 1)}>Prev</Button>}
      {pages.map((page) => page)}
      <Button onClick={() => setActivePage(activePage + 1)}>Next</Button>
    </Grid>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  totalPageCount: PropTypes.number.isRequired,
};
