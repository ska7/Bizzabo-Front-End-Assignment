import './App.css';
import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { Search } from './Components/Search';

const App = () => {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
  }, [searchString]);

  return (
    <Grid className="App">
      <Search setSearchString={setSearchString} />
    </Grid>
  );
};

export default App;
