import React from 'react';
import PropTypes from 'prop-types';
import styles from './UploadFile.module.css';

function UploadFile({ onClick, size, value, className, name }) {
  const inputRef = React.useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    onClick(event.target.files[0]);
  };

  const classes = [styles.UploadFile, styles[size], className].join(' ');

  return (
    <div className={classes}>
      <button type='button' className='hi' style={{ padding: '5rem', background: 'none' }} onClick={handleButtonClick}>
        Upload File
      </button>
      <input type='file' ref={inputRef} style={{ display: 'none' }} onChange={handleChange} value={value} name={name} />
    </div>
  );
}

UploadFile.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  value: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

UploadFile.defaultProps = {
  size: 'm',
  value: undefined,
  className: undefined,
  name: undefined,
};

export default UploadFile;
