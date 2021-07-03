import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Results } from './Results';

const getResults = (searchString, page, resultsPerPage) => {
  const headers = {
    Authorization: `token ${process.env.REACT_APP_GITHUB_PRIVATE_TOKEN}`,
  };
  return axios.get(`https://api.github.com/search/repositories?q=${searchString}&per_page=${resultsPerPage}&page=${page}`, { headers });
};

// This is a Container component dedicated to holding the logic for fetching results that should be rendered in Results.js
export const ResultsContainer = ({ searchQuery, page, resultsPerPage }) => {
  const [results, setResults] = useState([]);
  const [totalResultsCount, setTotalResultsCount] = useState(0);

  useEffect(() => {
    // Make request only if query string is longer than 1 character
    if (searchQuery.length >= 2) {
      getResults(searchQuery, page, resultsPerPage)
        .then(({ data }) => {
          setTotalResultsCount(data.total_count);
          setResults(data.items);
        });
    }
  }, [searchQuery]);
  return (
    <Results repositories={results} repositoriesCount={totalResultsCount} />
  );
};

ResultsContainer.propTypes = {
  searchQuery: PropTypes.string,
  page: PropTypes.number,
  resultsPerPage: PropTypes.number,
};
