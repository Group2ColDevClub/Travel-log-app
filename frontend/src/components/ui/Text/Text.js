import React from 'react';
import PropTypes from 'prop-types';
import styles from './Text.module.css';

function Text({ content, type, className }) {
  return <p className={`${styles[type]} ${styles[className]}`}>{content}</p>;
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['Regular', 'Bold']),
  className: undefined,
};

Text.defaultProps = {
  type: 'Regular',
};

export default Text;
