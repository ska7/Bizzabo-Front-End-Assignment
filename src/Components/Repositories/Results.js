import React from 'react';
import PropTypes from 'prop-types';

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ResultItem } from './ResultItem';

const useStyles = makeStyles((theme) => createStyles({
  tableContainer: {
    // height: '60vh',
    margin: '50px 0px',
    width: '80vw',
    display: 'flex',
    justifyContent: 'center',
  },
  table: {
    height: '100%',
    width: '100%',
  },
  tableHead: {
    background: 'grey',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  tableCell: {
    width: '100%',
    border: 'none',
  },
  tableCellHeader: {
    color: 'white',
    fontWeight: 'bold',
  },

  tableBody: {
    height: 'auto',
  },
  noResultsMessage: {
    ...theme.defaultMessage,
  },
}));

// This is a Presentational component dedicated to displaying results fetched in the ResultsContainer.js
export const Results = ({ repositories, repositoriesCount }) => {
  const classes = useStyles();
  return (
    <>
      {
      repositories.length ? (
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} size="medium" aria-label="a dense table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={`${classes.tableCell} ${classes.tableCellHeader}`}>
                  Found
                  {' '}
                  {repositoriesCount}
                  {' '}
                  repositories
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {repositories.map((row) => (
                <ResultItem key={row.full_name} repository={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : <Typography className={classes.noResultsMessage}>No repositories found, please try to adjust your request</Typography>
    }

    </>
  );
};

Results.propTypes = {
  repositories: PropTypes.arrayOf(PropTypes.object),
  repositoriesCount: PropTypes.number,
};
