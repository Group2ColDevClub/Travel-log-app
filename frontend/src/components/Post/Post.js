import styles from './Post.module.css';
import Card from '../ui/Card/Card';
import PostFooter from '../PostFooter/PostFooter';

function Post({ post, handleCommentOpen }) {
  return (
    <Card
      key={post.id}
      title={post.title}
      image={post.image}
      DescriptionHeader={
        <div className={styles.community_desc_header}>
          <h3 className={styles.location_header}>{post.location}</h3>
          <h5 className={styles.author_name}>{post.author}</h5>
        </div>
      }
      description={post.description}
      Footer={<PostFooter key={post.id} post={post} likes={post.likes} comments={post.comments} handleCommentOpen={handleCommentOpen} />}
      size='m'
      variant='wide'
    />
  );
}
export default Post;
