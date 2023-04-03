import PropTypes from 'prop-types';
import styles from './label.module.css';

function Label({ id, name, className, htmlFor, children }) {
  return (
    <label name={name} id={id} htmlFor={htmlFor} className={`${styles.label} ${className}`}>
      {children}
    </label>
  );
}

Label.propsTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;
