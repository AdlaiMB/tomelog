import { useState } from "react";

function NavBar({ page }) {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <header className="navigation-bar">
      <div className="navigation-bar-content">
        <a href="/" className="white-text">
          <span className="logo">tomelog</span>
        </a>
        <div>
          <nav className="navigation-nav">
            <ul className="navigation-nav-links">
              <li>
                <a href="/tomelog/search/" className="navigation-nav-link">
                  search
                </a>
              </li>
              <li>
                <a href="/tomelog/bookshelf/" className="navigation-nav-link">
                  bookshelf
                </a>
              </li>
            </ul>
          </nav>
          <div className="drop-down-menu-section">
            <button
              onClick={() => setIsMenuShowing(!isMenuShowing)}
              className="drop-down-menu-button"
            >
              dropdown
            </button>
            <div className="drop-down-menu-position-contianer">
              <div
                className={`drop-down-menu-container ${isMenuShowing ? "showing" : ""}`}
              >
                <div className="drop-down-menu-content">
                  <ul className="drop-down-menu">
                    <li>
                      <a
                        href="/tomelog/search/"
                        className="drop-down-menu-item"
                      >
                        search
                      </a>
                    </li>
                    <li>
                      <a
                        href="/tomelog/bookshelf/"
                        className="drop-down-menu-item"
                      >
                        bookshelf
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
