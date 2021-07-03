import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loader from '../img/loader.png';

const customStyles = makeStyles({
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  loader: {
    top: 0,
    bottom: 0,
    margin: 'auto 0px',
    position: 'absolute',
    animation: '$spin 1s forwards linear infinite',
    height: '150px',
    width: '150px',
  },
});

export const Loader = () => {
  const classes = customStyles();

  return (
    <img
      className={classes.loader}
      src={loader}
      alt="loader"
    />
  );
};
