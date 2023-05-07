import styles from './ModalNewPost.module.css';
import Input from '../ui/Input/input';
import Textarea from '../ui/Textarea/Textarea';
import UploadFile from '../UploadFile/UploadFile';

function ModalNewPost({ title, footer }) {
  return (
    <div className={`${styles.post_container}`}>
      <div className={`${styles.modal_title}`}>
        <h1> {title} </h1>
      </div>
      <div className={`${styles.modal_left}`}>
        <div className={`${styles.modal_photo}`}>
          <UploadFile />
        </div>
      </div>
      <div className={`${styles.modal_right}`}>
        <div className={`${styles.modal_textareas}`}>
          <h4> Title </h4>
          <Input className={`${styles.title}`} size='l' />
          <h4> Location </h4>
          <Input className={`${styles.location}`} size='l' />
          <h4> Description </h4>
          <Textarea className={`${styles.description}`} size='l' />
        </div>
      </div>
      <div className={`${styles.footer}`}>{footer}</div>
    </div>
  );
}
export default ModalNewPost;
