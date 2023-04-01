import PropTypes from 'prop-types';
import style from './input.module.css';
import Label from '../Label/label';

function Input({ value, label, onChange, size, type, className, placeholder, defaultValue, name }) {
  return (
    <div className={[style.input, className]}>
      <Label labelName={label} />
      <input type={type} name={name} size={size} onChange={onChange} placeholder={placeholder} value={value ?? defaultValue} />
    </div>
  );
}

export default Input;

Input.defaultProps = {
  size: 'm',
  className: undefined,
  type: 'text',
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
