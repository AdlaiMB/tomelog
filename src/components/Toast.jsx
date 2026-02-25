import "../styles/Toast/index.css";

import { useState } from "react";

function Toast() {
  const [animation, setAnimation] = useState("slide-in");

  //   setTimeout(() => {
  //     setAnimation("slide-out");
  //   }, 4000);

  return (
    <div className={`toast background-light-green border-green ${animation}`}>
      <div className="toast-title">
        <span className="sen-semibold capitalize">success</span>{" "}
        <button
          onClick={() => setAnimation("slide-out")}
          className="small-text sen-bold toast-button background-light-green background-light-green-hover"
        >
          close
        </button>
      </div>
      <p className="sen-regular">
        The book as been successfully filed in to your bookshelf.
      </p>
    </div>
  );
}

export default Toast;
