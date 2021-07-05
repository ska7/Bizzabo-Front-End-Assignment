import React, { useMemo, useEffect, useRef } from 'react';
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
  const handleChange = (e) => setSearchString(e.target.value);
  // To avoid excessive number of requests to the Github API,
  // we update the search string half a second later after the last keyboard stroke
  // Also, we utilize useMemo so the interval doesn't get lost on the component re-render
  const debouncedHandleChange = useMemo(() => debounce(handleChange, 500), []);

  /* eslint-disable arrow-body-style */
  useEffect(() => () => {
    return () => {
      // Cancelling the debounce effect. Not necessary with the existing application structure,
      // but will definetely pay off as the project gets bigger
      debouncedHandleChange.cancel();
    };
  }, []);

  const classes = useStyles();
  /* eslint-disable react/jsx-no-duplicate-props */
  return (
    <TextField
      onChange={debouncedHandleChange}
      color="secondary"
      className={classes.input}
      id="outlined-basic"
      label="Type in a repo name"
      variant="outlined"
      inputProps={{
        autoComplete: 'off',
      }}
      InputProps={{
        autoFocus: true,
      }}
    />
  );
};

Search.propTypes = {
  setSearchString: PropTypes.func.isRequired,
};
