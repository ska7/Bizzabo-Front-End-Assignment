import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  TableCell, TableRow, Link, Typography, Grid, Icon,
} from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tableRow: {
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
  link: {
    width: '100%',
    textDecoration: 'none',
    color: 'black',
    padding: 0,
    margin: 0,
    display: 'flex',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  repositoryName: {
    width: '50%',
    paddingLeft: '25px',
  },
  repositoryInfoGrid: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0px 10px',
  },
  aligntTextRight: {
    textAlign: 'right',
    width: '50%',
  },
});

const formatNumber = (num) => {
  // 1 000 000 000 = 10 digits

  // if num is greater or equal to 1b, return "more than 1 billion" string
  if (num.toString().length >= 10) {
    return '> 1b';
  }
  // if num is smaller or equal to 999, return the number converted to string
  if (num.toString().length < 4) {
    return num.toString();
  }

  // for thousands
  if (num.toString().length > 3 && num.toString().length <= 6) {
    const wholePart = num.toString().slice(0, -3);
    const fractionalPart = num.toString().slice(-3);

    return `${parseFloat(`${wholePart}.${fractionalPart}`).toFixed()}k`;
  }

  // for millions
  if (num.toString().length >= 7 && num.toString().length < 10) {
    const wholePart = num.toString().slice(0, -6);
    const fractionalPart = num.toString().slice(-6);

    return `${parseFloat(`${wholePart}.${fractionalPart}`).toFixed()}m`;
  }

  return num;
};

export const ResultItem = ({ repository }) => {
  const classes = useStyles();

  return (
    <Link key={repository.full_name} className={classes.link} href={repository.html_url} target="_blank" rel="noreferrer noopener">
      <TableRow hover className={classes.tableRow}>
        <TableCell component="th" scope="row" className={classes.tableCell}>
          <Typography className={classes.repositoryName}>{repository.full_name}</Typography>
          <Grid className={classes.repositoryInfoGrid}>
              <Typography item className={classes.aligntTextRight}>{formatNumber(repository.forks)}</Typography> {/* eslint-disable-line */}
            <Icon item className={classes.icon}>
              <RestaurantIcon fontSize="small" />
            </Icon>
            <Icon className={classes.icon}>
              <StarIcon fontSize="small" />
            </Icon>
            <Typography>{formatNumber(repository.stargazers_count)}</Typography> {/* eslint-disable-line */}
          </Grid>
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
