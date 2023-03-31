import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ label, icon, onClick, size, variant, type, shape, className }) {
  const iconElement = icon ? <img src={icon} alt='' /> : null;

  const getButtonType = () => {
    if (type === 'submit' || type === 'reset' || type === 'button') {
      return type;
    }
    return 'button';
  };

  return (
    <button
      className={`${styles.button} ${styles[`button--${size}`]} ${styles[`button--${variant}`]} ${styles[`button--${shape}`]} ${className}`}
      onClick={onClick}
      type={getButtonType()}
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
