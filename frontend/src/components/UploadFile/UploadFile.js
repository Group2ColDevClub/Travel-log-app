import { useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import Text from '../ui/Text/Text';
import styles from './UploadFile.module.css';

function UploadFile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setIsImageLoaded(true);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setIsImageLoaded(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.file_input_container}`}>
        {!isImageLoaded && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label htmlFor='imageInput' className={`${styles.file_input_label}`}>
            <Text content='Click to choose an image' type='bold' />
          </label>
        )}
        <input type='file' id='imageInput' onChange={handleImageChange} accept='image/*' style={{ display: 'none' }} />
        {imagePreview && isImageLoaded && (
          <div>
            <img className={`${styles.image_upload}`} src={imagePreview} alt='Uploaded Preview' />
            <FaRegTrashAlt className={`${styles.trash_button}`} type='button' onClick={removeSelectedImage} />
          </div>
        )}
      </div>
    </form>
  );
}
export default UploadFile;
