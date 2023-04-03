import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ title, size, className }) {
  const classes = [styles.Title, styles[size], className].join(' ');
  return <h1 className={classes}>{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['First', 'Second', 'Third']),
  className: undefined,
};

Title.defaultProps = {
  size: 'Third',
};

export default Title;
