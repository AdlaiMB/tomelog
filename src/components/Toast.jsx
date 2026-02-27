import "../styles/components/toast.css";

function Toast({ toastConfig, slideOutToast }) {
  const themes = {
    success: {
      background: "background-light-green border-green",
      button: "background-light-green background-light-green-hover",
    },
    error: {
      background: "background-light-red border-red",
      button: "background-light-red background-light-red-hover",
    },
    partial: {
      background: "background-light-orange border-orange",
      button: "background-light-orange background-light-orange-hover",
    },
  };

  return (
    <div
      className={`toast out-view-position ${themes[toastConfig.theme].background} ${toastConfig.animation}`}
    >
      <div className="toast-title">
        <span className="sen-semibold capitalize">{toastConfig.title}</span>
        <button
          onClick={slideOutToast}
          className={`small-text sen-bold toast-button ${themes[toastConfig.theme].button}`}
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
      <p className="sen-regular">{toastConfig.message}</p>
    </div>
  );
}

export default Toast;
