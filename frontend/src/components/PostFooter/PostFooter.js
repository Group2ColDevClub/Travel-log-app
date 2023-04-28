import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { MdAddComment } from 'react-icons/md';
import styles from './PostFooter.module.css';

function PostFooter({ postId, likes, comments }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState([]);

  const handleLikeClick = (postId) => {
    if (isLiked.includes(postId)) {
      setIsLiked(isLiked.filter((id) => id !== postId));
    } else {
      setIsLiked([...isLiked, postId]);
    }
  };
  const handleCommentClick = () => {
    setIsModalOpen(true);
  };

  const isPostLiked = isLiked.includes(postId);

  return (
    <div className={styles.community_footer}>
      <p className={styles.like_counter}> {likes.length}</p>
      <button onClick={() => handleLikeClick(postId)}>
        <AiFillLike className={`${styles['community-icon']}`} fill={isPostLiked ? 'red' : ''} />
      </button>
      <button onClick={handleCommentClick}>
        <MdAddComment className={`${styles['community-icon']}`} fill='' />
      </button>
      <p className={styles.comments_counter}>{comments.length}</p>
    </div>
  );
}
export default PostFooter;
