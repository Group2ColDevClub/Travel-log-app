import PropTypes from 'prop-types';
import './Card.css';

function Card({ title, image, description, size, variant, Footer, DescriptionHeader, className }) {
  const cardClassName = `card ${size && variant ? `card--${size}-${variant}` : `m-${variant}`}`;
  return (
    <div className={cardClassName}>
      {image && <img className='card-post-image' src={image} alt='backgroundImage' />}
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-content'>
        {DescriptionHeader && <div id='card-header-description'> {DescriptionHeader} </div>}
        <div id='card-post-description'>{description}</div>
        {Footer && <div id='card-footer'> {Footer} </div>}
      </div>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']).isRequired, // s=Cart,m=planTrip & Packages,l=Community
  DescriptionHeader: PropTypes.node,
  variant: PropTypes.oneOf(['wide', 'long']),
  image: PropTypes.string,
  Footer: PropTypes.node,
};

Card.defaultProps = {
  variant: 'wide',
};

export default Card;
