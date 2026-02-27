import "../styles/components/drop-down-menu.css";

import { useState } from "react";

function DropDownMenu({ menuItems, theme }) {
  const [isShowing, setIsShowing] = useState(false);
  const themes = {
    white: {
      button: "background-white background-white-hover",
      menu: "background-gray",
      icon: "black",
    },
    brown: {
      button: "background-brown background-brown-hover white-text",
      menu: "background-brown",
      icon: "white",
    },
  };

  return (
    <div className="drop-down-menu-section">
      <button
        onClick={() => setIsShowing(!isShowing)}
        className={`drop-down-menu-button sen-regular ${themes[theme].button}`}
      >
        <svg
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1"
            x2="23"
            y2="1"
            stroke={themes[theme].icon}
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="1"
            y1="9"
            x2="23"
            y2="9"
            stroke={themes[theme].icon}
            stroke-width="2"
            stroke-linecap="round"
          />
          <line
            x1="1"
            y1="17"
            x2="23"
            y2="17"
            stroke={themes[theme].icon}
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
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
