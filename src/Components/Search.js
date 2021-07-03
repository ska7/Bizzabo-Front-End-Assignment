import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    marginTop: '50px',
    width: '30vw',
  },
});

export const Search = ({ setSearchString }) => {
  const classes = useStyles();

  return (
    <TextField onChange={(e) => setSearchString(e.target.value)} className={classes.input} id="outlined-basic" label="Type in a repo name" variant="outlined" />
  );
};

Search.propTypes = {
  setSearchString: PropTypes.func,
};
