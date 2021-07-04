import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Results } from './Results';
import { PaginationContainer } from '../Pagination/PaginationContainer';
import { Loader } from '../Loader';

const getResults = (searchString, page, resultsPerPage = 6) => {
  const headers = {
    Authorization: `token ${process.env.REACT_APP_GITHUB_PRIVATE_TOKEN}`,
  };
  return axios.get(`https://api.github.com/search/repositories?q=${searchString}&per_page=${resultsPerPage}&page=${page}`, { headers });
};

// This is a Container component dedicated to holding the logic of
// fetching results that should be rendered in Results.js
export const ResultsContainer = ({ searchQuery, resultsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const [results, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [totalResultsCount, setTotalResultsCount] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getResults(searchQuery, activePage, resultsPerPage)
      .then(({ data }) => {
        setTotalPageCount(data.total_count / resultsPerPage);
        setTotalResultsCount(data.total_count);
        setResults(data.items);

        // To learn how many pages the app could possibly render for this query, we divide the total number of results by resultsPerPage.
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [searchQuery, activePage]);
  return (
    <>
      {isLoading ? (
        <Grid style={{}}>
          <Loader />
        </Grid>
      ) : <Results repositories={results} repositoriesCount={totalResultsCount} />}
      {/* We want to display the pagination block only if the total number of results
       is greater than the number of results displayed at once  */}
      {totalResultsCount > resultsPerPage ? <PaginationContainer totalPageCount={totalPageCount} activePage={activePage} setActivePage={setActivePage} /> : null}

    </>
  );
};

ResultsContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  resultsPerPage: PropTypes.number,
};
