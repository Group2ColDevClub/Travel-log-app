import React from 'react';
import PropTypes from 'prop-types';
import styles from './FloatingActionButton.module.css';

function FloatingActionButton({ icon, onClick }) {
  return (
    <button className={styles['floating-action-button']} onClick={onClick}>
      {/*  */}
    </button>
  );
}

FloatingActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FloatingActionButton;
