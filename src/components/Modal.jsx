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
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 11.8033L11.6066 1.19668"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M11.9099 11.6066L1.30331 0.999996"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      {children}
    </div>
  );
}

export default Modal;
