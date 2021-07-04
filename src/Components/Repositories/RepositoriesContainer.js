import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Repositories } from './Repositories';
import { PaginationContainer } from '../Pagination/PaginationContainer';
import { Loader } from '../Loader';

const getRepositories = (searchString, page, resultsPerPage = 6) => axios.get(`https://api.github.com/search/repositories?q=${searchString}&per_page=${resultsPerPage}&page=${page}`);

// This is a Container component dedicated to holding the logic of
// fetching results that should be rendered in Results.js
export const RepositoriesContainer = ({ searchQuery, resultsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [totalRepositoriesCount, setTotalRepositoriesCount] = useState(0);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    getRepositories(searchQuery, activePage, resultsPerPage)
      .then(({ data }) => {
        setRepositories(data.items);
        // To learn how many pages the app could possibly render for this query, we divide the total number of results by resultsPerPage.
        setTotalPageCount(data.total_count / resultsPerPage);
        setTotalRepositoriesCount(data.total_count);
      })
      // If we catch some error, its message should be displayed in the Repositories component.
      .catch((e) => console.log(e.message))
      .finally(() => setLoading(false));
  }, [searchQuery, activePage]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : <Repositories repositories={repositories} repositoriesCount={totalRepositoriesCount} />}
      {/* We want to display the pagination block only if the total number of results
       is greater than the number of results displayed at once  */}
      {totalRepositoriesCount > resultsPerPage ? (
        <PaginationContainer
          totalPageCount={totalPageCount}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ) : null}

    </>
  );
};

RepositoriesContainer.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  resultsPerPage: PropTypes.number,
};
