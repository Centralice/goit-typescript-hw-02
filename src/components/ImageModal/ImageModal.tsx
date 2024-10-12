import s from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

type Props = {
  selectedPicture: string;
  modalIsOpen: boolean;
  closeModal: () => void;
};

const ImageModal = ({ selectedPicture, modalIsOpen, closeModal }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <img src={selectedPicture} />
    </Modal>
  );
};

export default ImageModal;
