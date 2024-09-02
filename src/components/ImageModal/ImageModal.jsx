import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, isOpen, onClose }) {
  return (
    <Modal
      className={css['modal']}
      overlayClassName={css['overlay']}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
}

export default ImageModal;
