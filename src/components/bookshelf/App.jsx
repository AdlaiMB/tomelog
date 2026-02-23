import { useEffect, useState } from "react";
import { getMyBooks } from "../../controller/controller";
import "../../styles/new_globals.css";
import "../../styles/resets.css";

import NavBar from "../NavBar";

function App() {
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   async function retrieveMyBooks() {
  //     const { error, view } = await getMyBooks();

  //     setBooks(view);
  //   }

  //   retrieveMyBooks();
  // }, []);
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <>
      <NavBar page="bookshelf" />
      <div className="page-content">
        <div className="page-content-margin">
          <div className="title-section">
            <h1 className="title">bookshelf</h1>
          </div>
          <div className="tab-book-section">
            <div className="tab-section">
              <h2 className="tab-title">shelves</h2>
              <div>
                <div className="tabs-container">
                  <div className="tabs">
                    <button className="tab">reading</button>
                    <button className="tab">read</button>
                    <button className="tab">all books</button>
                  </div>
                </div>
                <div className="drop-down-menu-section">
                  <button
                    onClick={() => setIsMenuShowing(!isMenuShowing)}
                    className="tab-drop-down-menu-button"
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
                            <button className="drop-down-menu-item-button">
                              reading
                            </button>
                          </li>
                          <li>
                            <button className="drop-down-menu-item-button">
                              read
                            </button>
                          </li>
                          <li>
                            <button className="drop-down-menu-item-button">
                              all books
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
