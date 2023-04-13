import PropTypes from 'prop-types';
import styles from './input.module.css';
import Label from '../Label/label';

function Input({ value, label, onChange, size, type, className, placeholder, defaultValue, name, inputLabelClassName }) {
  return (
    <div className={styles.input_wrapper}>
      <Label htmlFor={name} className={inputLabelClassName}>
        {label}
      </Label>
      <input
        type={type}
        name={name}
        id={name}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  type: PropTypes.oneOf(['number', 'date', 'password', 'text', 'email', 'select']),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  inputLabelClassName: PropTypes.string,
};

export default Input;
