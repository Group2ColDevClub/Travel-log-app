import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ title, size, className, variant }) {
  const classes = [styles.Title, styles[size], className].join(' ');
  const TagName = variant;
  return <TagName className={classes}>{title}</TagName>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['first', 'second', 'third']),
  className: undefined,
  variant: PropTypes.string,
};

Title.defaultProps = {
  size: 'third',
  variant: 'h1',
};

export default Title;
