import "../styles/components/drop-down-menu.css";

import { useState } from "react";

function DropDownMenu({ menuItems, theme }) {
  const [isShowing, setIsShowing] = useState(false);
  const themes = {
    white: {
      button: "background-white background-white-hover",
      menu: "background-gray",
    },
    brown: {
      button: "background-brown background-brown-hover white-text",
      menu: "background-brown",
    },
  };

  return (
    <div className="drop-down-menu-section">
      <button
        onClick={() => setIsShowing(!isShowing)}
        className={`drop-down-menu-button sen-regular ${themes[theme].button}`}
      >
        dropdown
      </button>
      <div className="drop-down-menu-position-container">
        <div
          className={`drop-down-menu-container ${isShowing ? "showing" : ""}`}
        >
          <div className="drop-down-menu-content">
            <ul className={`drop-down-menu ${themes[theme].menu}`}>
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
