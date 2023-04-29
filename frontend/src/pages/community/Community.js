import { BsPlusCircle } from 'react-icons/bs';
import Post from '../../components/Post/Post';
import headerImg from '../../assets/communityImg.png';
import travelersPosts from '../../data/travelersPosts';
import styles from './Community.module.css';

export default function CommunityPage() {
  return (
    <div className={styles.community_page}>
      <div className={styles.header_img}>
        <img className={styles.community_header_image} src={headerImg} alt='your vacation' />
        <div className={styles.title_block}>
          <h1 className={styles.community_title}>Travelers Community</h1>
        </div>
      </div>
      <div className={styles.community_cards}>
        {travelersPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <button className={styles.btn_add_post}>
        <BsPlusCircle fill='red' size='3rem' />
      </button>
    </div>
  );
}
