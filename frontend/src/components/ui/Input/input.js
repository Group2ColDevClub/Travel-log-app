import PropTypes from 'prop-types';
import styles from './input.module.css';
import Label from '../Label/label';

export default function Input({ value, label, onChange, size, type, className, placeholder, defaultValue, name }) {
  return (
    <div className={styles.input_wrapper}>
      <Label htmlFor={name}>{label}</Label>
      <input
        type={type}
        name={name}
        size={size}
        className={`${styles.input} ${styles[size]} ${className}`}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </div>
  );
}

Input.defaultProps = {
  size: 'm',
  type: 'text',
  value: undefined,
};

Input.propTypes = {
  value: PropTypes.string || PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  type: PropTypes.oneOf(['number', 'date', 'password', 'text', 'email', 'select']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
};
