import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paginationBlock: {
    position: 'absolute',
    bottom: '50px',
  },
  hidden: {
    visibility: 'hidden',
  },
});

export const Pagination = ({
  pages, activePage, setActivePage, totalPageCount,
}) => {
  const classes = useStyles();
  return (
    <Grid className={classes.paginationBlock}>
      {/* If user is on the first page, we should hide the "Prev" button */}
      <Button className={activePage === 1 ? classes.hidden : ''} onClick={() => setActivePage(activePage - 1)}>Prev</Button>
      {pages.map((page) => page)}
      {/* If user is on the last page, we should hide the "Next" button */}
      <Button className={activePage === totalPageCount ? classes.hidden : ''} onClick={() => setActivePage(activePage + 1)}>Next</Button>
    </Grid>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.element),
  totalPageCount: PropTypes.number.isRequired,
};
