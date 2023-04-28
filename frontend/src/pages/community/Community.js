import { BsPlusCircle } from 'react-icons/bs';
import Post from '../../components/Post/Post';
import headerImg from '../../assets/communityImg.png';
import travelersPosts from '../../data/travelersPosts';
import './Community.css';

export default function CommunityPage() {
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
          <Post key={post.id} post={post} />
        ))}
      </div>
      <button className='btn-add-post'>
        <BsPlusCircle fill='red' size='3rem' />
      </button>
    </div>
  );
}
