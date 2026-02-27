import "../styles/components/modal.css";

function Modal({ children, title, removeModal }) {
  return (
    <div className="modal background-white">
      <div className="modal-title-section border-beige">
        <h2 className="sen-regular capitalize">{title}</h2>
        <button
          onClick={removeModal}
          className="sen-bold small-text background-white background-white-hover modal-close-button"
        >
          close
        </button>
      </div>
      {children}
    </div>
  );
}

export default Modal;
