import './App.css';
import React, { useState, useEffect } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Search } from './Components/Search';
import { ResultsContainer } from './Components/ResultsContainer';

const useStyles = makeStyles((theme) => createStyles({
  defaultMessage: {
    ...theme.defaultMessage,
  },
}));

const App = () => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
  }, [searchString]);

  const classes = useStyles();

  return (
    <Grid className="App">
      <Search setSearchString={setSearchString} />
      {searchString.length >= 2 ? <ResultsContainer searchQuery={searchString} resultsPerPage={6} />
        : <Typography className={classes.defaultMessage}>Start your search!</Typography>}
    </Grid>
  );
};

export default App;
