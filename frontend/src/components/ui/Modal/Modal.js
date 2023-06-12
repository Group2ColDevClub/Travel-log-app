import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

function Modal({ title, onClose, children, footer, isPostModal }) {
  const footerClassName = isPostModal ? styles.post_footer : styles.comment_footer;
  const titleClassName = isPostModal ? styles.post_title : styles.comment_title;
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className={`${styles.modal_background}`}>
      <div className={`${styles.modal_container}`}>
        <IoClose className={styles.close_icon} onClick={handleClose} />
        <h1 className={titleClassName}>{title}</h1>
        {children}
        <div className={footerClassName}> {footer} </div>
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
