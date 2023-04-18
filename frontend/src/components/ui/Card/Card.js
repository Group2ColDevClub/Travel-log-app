import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, image, description, size, variant, className }) {
  const cardClassName = `card ${size && variant ? `card--${size}-${variant}` : `m-${variant}`}`;
  return (
    <div className={cardClassName}>
      {/* eslint-disable-next-line no-console */}
      {console.log(cardClassName)}
      {image && <img src={image} alt='backgroundImage' />}
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-content'> {description} </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired, // s=Cart,m=planTrip & Packages,l=Community
  variant: PropTypes.string,
  image: PropTypes.string,
};

Card.defaultProps = {
  variant: 'wide',
};

export default Card;
