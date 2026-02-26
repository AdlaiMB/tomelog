import "../styles/Toast/index.css";

import { useState } from "react";

function Toast({ toastConfig, slideOutToast }) {
  return (
    <div
      className={`toast background-light-green border-green out-view-position ${toastConfig.animation}`}
    >
      <div className="toast-title">
        <span className="sen-semibold capitalize">{toastConfig.title}</span>
        <button
          onClick={slideOutToast}
          className="small-text sen-bold toast-button background-light-green background-light-green-hover"
        >
          close
        </button>
      </div>
      <p className="sen-regular">{toastConfig.message}</p>
    </div>
  );
}

export default Toast;
