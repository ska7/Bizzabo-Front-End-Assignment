import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Icon, Typography } from '@material-ui/core';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({
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

export const RepositoryStats = ({ forks, stars }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.repositoryInfoGrid}>
      <Typography item className={classes.aligntTextRight}>{formatNumber(forks)}</Typography>
      <Icon item className={classes.icon}>
        <RestaurantIcon fontSize="small" />
      </Icon>
      <Icon className={classes.icon}>
        <StarIcon fontSize="small" />
      </Icon>
      <Typography>{formatNumber(stars)}</Typography>
    </Grid>
  );
};

RepositoryStats.propTypes = {
  forks: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,

};
