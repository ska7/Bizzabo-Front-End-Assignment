import './App.css';
import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Search } from './Components/Search';
import { RepositoriesContainer } from './Components/Repositories/RepositoriesContainer';

const useStyles = makeStyles((theme) => createStyles({
  defaultMessage: {
    ...theme.defaultMessage,
  },
}));

const App = () => {
  const [searchString, setSearchString] = useState('');

  const classes = useStyles();

  return (
    <Grid className="App">
      <Search setSearchString={setSearchString} />
      {/* We pass the search string to the RepositoriesContainer component only if it's at least 2 characters long */}
      {searchString.length >= 2 ? <RepositoriesContainer searchQuery={searchString} resultsPerPage={6} />
        : <Typography className={classes.defaultMessage}>Start your search!</Typography>}
    </Grid>
  );
};

export default App;
