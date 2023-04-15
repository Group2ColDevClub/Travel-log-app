import './Card.css';
import Button from '../Button/Button';

function Card({ title, image, location, author }) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={image} alt='' />
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-content'>
        <div className='card-body'>
          <h3 className='card-location'>{location}</h3>
          <p className='card-author'>{author}</p>
          <p className='card-textarea'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='card-btn'>
          <Button label='like' size='s' variant='tertiary' type='submit' shape='rectangle' />
          <Button label='comment' size='s' variant='tertiary' type='submit' shape='rectangle' />
        </div>
      </div>
    </div>
  );
}

export default Card;
