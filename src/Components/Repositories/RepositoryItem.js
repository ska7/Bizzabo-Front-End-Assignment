import React from 'react';
import PropTypes from 'prop-types';

import {
  TableCell, TableRow, Link, Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { RepositoryStats } from './RepositoryStats';

const useStyles = makeStyles({
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75px',
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
  link: {
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

});

export const ResultItem = ({ repository }) => {
  const classes = useStyles();

  return (
    <TableRow hover className={classes.tableRow} key={repository.html_url}>
      <TableCell component="th" scope="row" className={classes.tableCell}>
        <Link href={repository.html_url} className={classes.link} target="_blank" rel="noreferrer noopener">
          <Typography className={classes.repositoryName}>{repository.full_name}</Typography>
          <RepositoryStats forks={repository.forks} stars={repository.stargazers_count} />
        </Link>
      </TableCell>
    </TableRow>
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
