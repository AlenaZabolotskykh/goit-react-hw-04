import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal className={css.modal} isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}
