import './App.css';
import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { Search } from './Components/Search';
import { ResultsContainer } from './Components/ResultsContainer';

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
  }, [searchString]);

  return (
    <Grid className="App">
      <Search setSearchString={setSearchString} />
      <ResultsContainer page={activePage} searchQuery={searchString} resultsPerPage={6} />
    </Grid>
  );
};

export default App;
