import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ label, icon, onClick, size, variant, type, shape, className }) {
  const iconElement = icon ? <img src={icon} alt='' /> : null;

  return (
    <button
      className={`${styles.button} ${styles[`button_${size}`]} ${styles[`button_${variant}`]} ${styles[`button_${shape}`]} ${className}`}
      onClick={onClick}
      type={type || 'default'}
    >
      {iconElement}
      {label}
    </button>
  );
}

Button.defaultProps = {
  size: 'm',
  variant: 'primary',
  type: 'button',
  shape: 'rectangle',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  shape: PropTypes.oneOf(['rectangle', 'circle']),
  className: PropTypes.string,
};
export default Button;
