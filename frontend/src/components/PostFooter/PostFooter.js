import { useState } from 'react';
import { AiFillLike } from 'react-icons/ai';
import { MdAddComment } from 'react-icons/md';

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
    <div className='community-footer'>
      <p className='like-counter'> {likes.length}</p>
      <button onClick={() => handleLikeClick(postId)}>
        <AiFillLike className='community-like' fill={isPostLiked ? 'red' : ''} size='1.6rem' />
      </button>
      <button onClick={handleCommentClick}>
        <MdAddComment className='community-add-comment' fill='' size='1.6rem' />
      </button>
      <p className='comments-counter'>{comments.length}</p>

      {/* {isModalOpen && <Modal />} */}
    </div>
  );
}
export default PostFooter;
