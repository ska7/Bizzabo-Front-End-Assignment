import React from 'react';
import PropTypes from 'prop-types';

import {
  TableCell, TableRow, Link, Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { RepositoryStats } from './RepositoryStats';

const useStyles = makeStyles({
  link: {
    height: '75px',
    width: '100%',
    display: 'flex',
    textDecoration: 'none',
    color: 'black',
    padding: 0,
    margin: 0,
    '&:hover': {
      textDecoration: 'none',
    },
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  tableCell: {
    padding: '20px 0px',
    width: '100%',
    border: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  repositoryName: {
    width: '50%',
    paddingLeft: '25px',
  },

});

export const ResultItem = ({ repository }) => {
  const classes = useStyles();

  return (
    <Link key={repository.full_name} className={classes.link} href={repository.html_url} target="_blank" rel="noreferrer noopener">
      <TableRow hover className={classes.tableRow}>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          <Typography className={classes.repositoryName}>{repository.full_name}</Typography>
          <RepositoryStats forks={repository.forks} stars={repository.stargazers_count} />
        </TableCell>
      </TableRow>
    </Link>
  );
};

ResultItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    forks: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
  }),
};
