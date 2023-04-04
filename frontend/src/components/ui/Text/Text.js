import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

function Text({ content, type, className }) {
  return <p className={`${styles[type]} ${styles[className]}`}>{content}</p>;
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['regular', 'bold']),
  className: PropTypes.string,
};

Text.defaultProps = {
  type: 'regular',
};

export default Text;
