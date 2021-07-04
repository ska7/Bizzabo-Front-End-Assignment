import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  active: {
    background: theme.palette.secondary.main,
    color: 'white',
    '&:focus': {
      background: theme.palette.secondary.main,
    },
    '&:hover': {
      background: theme.palette.secondary.main,
    },
  },
  page: {
    height: '50px',
    minWidth: '50px',
    padding: 0,
    margin: '0px 10px',
  },
}));

export const PaginationItem = ({ pageNumber, activePage, setActivePage }) => {
  const classes = useStyles();

  return (
    <Button
      variant="text"
      disableElevation
      disableFocusRipple
      className={`${classes.page} ${pageNumber === activePage && classes.active}`}
      onClick={() => setActivePage(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
};

PaginationItem.propTypes = {
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
};
