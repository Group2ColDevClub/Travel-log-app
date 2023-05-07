import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import ModalNewComment from '../../ModalNewComment/ModalNewComment';
import ModalNewPost from '../../ModalNewPost/ModalNewPost';

function Modal({ title, onClose, children, footer, isPostModal, post }) {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className={`${styles.modal_background}`}>
      <div className={`${styles.modal_container}`}>
        <IoClose className={styles.close_icon} onClick={handleClose} />
        {isPostModal ? <ModalNewPost title={title} footer={footer} /> : <ModalNewComment title={title} post={post} />}
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
  footer: PropTypes.node,
  isPostModal: PropTypes.bool,
};

export default Modal;
