import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ title, size, className, variant }) {
  const classes = [styles.title, styles[size], className].join(' ');
  const TagName = variant;
  return <TagName className={classes}>{title}</TagName>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  className: undefined,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

Title.defaultProps = {
  size: 's',
};

export default Title;
