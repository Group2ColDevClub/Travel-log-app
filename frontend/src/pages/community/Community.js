import { BsPlusCircle } from 'react-icons/bs';
import { useState } from 'react';
import Post from '../../components/Post/Post';
import ModalNewComment from '../../components/ModalNewComment/ModalNewComment';
import headerImg from '../../assets/communityImg.png';
import travelersPosts from '../../data/travelersPosts';
import Modal from '../../components/ui/Modal/Modal';
import Button from '../../components/ui/Button/Button';
import styles from './Community.module.css';

export default function CommunityPage() {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCommentOpen = (post) => {
    setShowCommentModal(true);
    if (!selectedPost) setSelectedPost(post);
  };
  const handlePostOpen = () => {
    setShowPostModal(true);
  };
  const handleCommentClose = () => {
    setShowCommentModal(false);
    if (selectedPost) setSelectedPost(null);
  };
  const handlePostClose = () => {
    setShowPostModal(false);
  };
  return (
    <div className={styles.community_page}>
      {showPostModal && (
        <Modal
          onClose={handlePostClose}
          title='Upload Post'
          isPostModal
          footer={<Button size='l' variant='primary' type='submit' label='Upload' />}
        />
      )}
      {showCommentModal && (
        <Modal onClose={handleCommentClose} title='Comments' post={selectedPost}>
          <ModalNewComment />
        </Modal>
      )}
      <div className={styles.header_img}>
        <img className={styles.community_header_image} src={headerImg} alt='your vacation' />
        <div className={styles.title_block}>
          <h1 className={styles.community_title}>Travelers Community</h1>
        </div>
      </div>
      <div className={styles.community_cards}>
        {travelersPosts.map((post) => (
          <Post key={post.id} post={post} handleCommentOpen={handleCommentOpen} />
        ))}
      </div>
      <button onClick={handlePostOpen} className={styles.btn_add_post}>
        <BsPlusCircle fill='red' size='3rem' />
      </button>
    </div>
  );
}
