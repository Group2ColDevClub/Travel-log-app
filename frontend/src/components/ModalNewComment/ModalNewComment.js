import styles from './ModalNewComment.module.css';
import Input from '../ui/Input/input';
import Text from '../ui/Text/Text';
import Button from '../ui/Button/Button';

function ModalNewComment({ title, post }) {
  return (
    <div className={styles.comment_container}>
      <h2 className={styles.comment_title}>{title}</h2>
      <Text className={styles.comment_subTitle} content={post.location} />
      <div className={styles.comment_image}>
        <img className={styles.image} src={post.image} alt='post' />
      </div>
      <div className={styles.comment_body}>
        <div className={styles.comments}>
          <ul className={styles.list_item}>
            {post.comments.map((comment) => (
              <li>{comment}</li>
            ))}
          </ul>
        </div>
        <Input size='l' />
        <Button className={styles.send_button} size='m' variant='primary' type='submit' label='Send' />
      </div>
    </div>
  );
}
export default ModalNewComment;
