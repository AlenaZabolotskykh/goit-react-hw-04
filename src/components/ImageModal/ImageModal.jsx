import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      <div>
        <img src={image.src.regular} alt={image.alt} />
        <button className={css.btn} onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
