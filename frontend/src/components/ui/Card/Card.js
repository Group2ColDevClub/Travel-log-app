import './Card.css';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';

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
        </div>
        <Textarea className='card-textarea' value='type' size='l' placeholder='type your text here :' />
        <div className='card-btn'>
          <Button label='like' size='s' variant='tertiary' type='submit' shape='rectangle' />
          <Button label='like' size='s' variant='tertiary' type='submit' shape='rectangle' />
        </div>
      </div>
    </div>
  );
}

export default Card;
