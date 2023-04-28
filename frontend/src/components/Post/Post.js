import Card from '../ui/Card/Card';
import PostFooter from '../PostFooter/PostFooter';

function Post({ post }) {
  return (
    <Card
      key={post.id}
      title={post.title}
      image={post.image}
      DescriptionHeader={
        <div className='community-desc-header'>
          <h3>{post.location}</h3>
          <h5>{post.author}</h5>
        </div>
      }
      description={post.description}
      Footer={<PostFooter key={post.id} likes={post.likes} comments={post.comments} />}
      size='m'
      variant='wide'
    />
  );
}
export default Post;
