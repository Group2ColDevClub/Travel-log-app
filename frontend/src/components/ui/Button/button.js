import PropTypes from 'prop-types';
import styles from './button.module.css';

function Button({ label, icon, onClick, size, variant, type, shape, className }) {
  const iconElement = icon ? (
    <img src={icon.src} alt={icon.alt} className={shape === 'circle' ? styles.button_circle_icon : styles.button_rectangle_icon} />
  ) : null;

  if (!label && !icon) {
    console.error('Button must have either a label or an icon.');
  }

  return (
    <button
      className={`${styles.button} ${styles[`button_${size}`]} ${styles[`button_${variant}`]} ${
        shape === 'circle' ? styles.button_circle : styles.button_rectangle
      } ${className}`}
      onClick={onClick}
      type={type}
    >
      {hasLabel && !hasIcon && label}
      {!hasLabel && hasIcon && iconElement}
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
  label: PropTypes.string,
  icon: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  shape: PropTypes.oneOf(['rectangle', 'circle']),
  className: PropTypes.string,
};
export default Button;
