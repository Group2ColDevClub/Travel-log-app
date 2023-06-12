import styles from './ModalNewPost.module.css';
import Input from '../ui/Input/input';
import Textarea from '../ui/Textarea/Textarea';
import Text from '../ui/Text/Text';
import UploadFile from '../UploadFile/UploadFile';

function ModalNewPost() {
  return (
    <div className={`${styles.post_container}`}>
      <div className={`${styles.modal_left}`}>
        <div className={`${styles.modal_photo}`}>
          <UploadFile />
        </div>
      </div>
      <div className={`${styles.modal_right}`}>
        <div className={`${styles.modal_textareas}`}>
          <Text content='Title' type='bold' />
          <Input className={`${styles.title}`} size='l' />
          <Text content='Location' type='bold' />
          <Input className={`${styles.location}`} size='l' />
          <Text content='Description' type='bold' />
          <Textarea className={`${styles.description}`} size='l' />
        </div>
      </div>
    </div>
  );
}
export default ModalNewPost;
