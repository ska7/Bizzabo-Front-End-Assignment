import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

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

  const handleChange = (e) => setSearchString(e.target.value);
  // To avoid excessive number of requests to the Github API,
  // we update the search string half a second later after the last keyboard stroke
  const debouncedHandleChange = useMemo(() => debounce(handleChange, 500), []);

  /* eslint-disable arrow-body-style */
  useEffect(() => () => {
    return () => {
      // Cancelling the debounce effect. Not necessary with the existing application structure,
      // but will definetely pay off as the project gets bigger
      debouncedHandleChange.cancel();
    };
  }, []);
  return (
    <TextField
      onChange={debouncedHandleChange}
      color="secondary"
      className={classes.input}
      id="outlined-basic"
      label="Type in a repo name"
      variant="outlined"
      autoComplete={false}
    />
  );
};

Search.propTypes = {
  setSearchString: PropTypes.func.isRequired,
};
