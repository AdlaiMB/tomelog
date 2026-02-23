import { useState } from "react";

function DropDownMenu({ menuItems, theme }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="drop-down-menu-section">
      <button
        onClick={() => setIsShowing(!isShowing)}
        className={`drop-down-menu-button menu-button-${theme}`}
      >
        dropdown
      </button>
      <div className="drop-down-menu-position-contianer">
        <div
          className={`drop-down-menu-container ${isShowing ? "showing" : ""}`}
        >
          <div className="drop-down-menu-content">
            <ul className={`drop-down-menu menu-${theme}`}>
              {menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownMenu;
