import "../styles/Toast/index.css";

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
          close
        </button>
      </div>
      <p className="sen-regular">{toastConfig.message}</p>
    </div>
  );
}

export default Toast;
