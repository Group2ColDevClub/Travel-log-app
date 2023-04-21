import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { MdAddComment } from 'react-icons/md';
import cardImg from '../../assets/cardImg.png';
import headerImg from '../../assets/communityImg.png';
import travelersPosts from '../../data/travelersPosts';
import Card from '../../components/ui/Card/Card.js';
import './community.css';

export default function CommunityPage() {
  const [likes, setlikes] = useState(0);
  const [comments, setComments] = useState([]);

  return (
    <div className='community-page'>
      <div className='header-img'>
        <img className='community-header-image' src={headerImg} alt='your vacation' />
        <div className='title-block'>
          <h1 className='community-title'>Travelers Community</h1>
        </div>
      </div>
      <div className='community-cards'>
        {travelersPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            image={cardImg}
            DescriptionHeader={
              <div className='community-desc-header'>
                <h3>{post.location}</h3>
                <h5>{post.author}</h5>
              </div>
            }
            description={post.description}
            Footer={
              <div className='community-footer'>
                <p className='like-counter'> {post.likes.length}</p>
                <button>
                  <AiFillLike className='community-like' fill='' size='1.6rem' />
                </button>
                <button>
                  <MdAddComment className='community-add-comment' fill='' size='1.6rem' />
                </button>
                <p className='comments-counter'>{post.comments.length}</p>
              </div>
            }
            size='m'
            variant='wide'
          />
        ))}
      </div>
    </div>
  );
}
