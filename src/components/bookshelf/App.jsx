import "../../styles/globals.css";
import "../../styles/resets.css";
import "../../styles/bookshelf/index.css";

import Navigation from "../Navigation";
import DropDownMenu from "../DropDownMenu";

function App() {
  const menuItems = [
    <button className="button-menu-item sen-regular background-gray background-gray-hover">
      reading
    </button>,
    <button className="button-menu-item sen-regular background-gray background-gray-hover">
      read
    </button>,
    <button className="button-menu-item sen-regular background-gray background-gray-hover">
      all books
    </button>,
  ];

  return (
    <>
      <Navigation />
      <div className="page-content">
        <div className="page-content-margin">
          <div className="title-section border-beige">
            <h1 className="capitalize sen-regular">bookshelf</h1>
          </div>
          <div className="tab-book-section">
            <div className="tab-section border-beige">
              <h2 className="sen-regular">shelves</h2>
              <div className="tabs-container">
                <div className="tabs">
                  <button className="tab background-white sen-regular background-white-hover">
                    reading
                  </button>
                  <button className="tab background-white sen-regular background-white-hover">
                    read
                  </button>
                  <button className="tab background-white sen-regular background-white-hover">
                    all books
                  </button>
                </div>
              </div>
              <DropDownMenu menuItems={menuItems} theme="white" />
            </div>
            <div className="book-section">
              <span className="sen-regular">shelves {">"} reading</span>
              <div className="books">
                <div className="book background-gray">
                  <img
                    src="/tomelog/image.png"
                    alt="book cover"
                    className="book-image"
                  />
                  <div className="book-content-metadata">
                    <div className="book-titles capitalize sen-regular">
                      <span>american dirt</span>
                    </div>
                    <span className="capitalize sen-regular">
                      by: jeannie cummins
                    </span>
                    <div className="sen-regular small-text">
                      <div className="book-progress">
                        <span>pages progress: 20%</span>
                        <div className="progress-bar-container background-dark-gray">
                          <div
                            className="progress-bar background-light-blue"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="book-progress">
                        <span>chapters progress: 40%</span>
                        <div className="progress-bar-container background-dark-gray">
                          <div
                            className="progress-bar background-light-blue"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book-buttons">
                    <button className="book-button white-text sen-regular uppercase background-blue">
                      bookmark
                    </button>
                    <button className="book-button white-text sen-regular uppercase background-blue">
                      details
                    </button>
                  </div>
                </div>
                <div className="book background-gray">
                  <img
                    src="/tomelog/image.png"
                    alt="book cover"
                    className="book-image"
                  />
                  <div className="book-content-metadata">
                    <div className="book-titles capitalize sen-regular">
                      <span>american dirt</span>
                    </div>
                    <span className="capitalize sen-regular">
                      by: jeannie cummins
                    </span>
                    <div className="sen-regular small-text">
                      <div className="book-progress">
                        <span>pages progress: 20%</span>
                        <div className="progress-bar-container background-dark-gray">
                          <div
                            className="progress-bar background-light-blue"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="book-progress">
                        <span>chapters progress: 40%</span>
                        <div className="progress-bar-container background-dark-gray">
                          <div
                            className="progress-bar background-light-blue"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="book-buttons">
                    <button className="book-button white-text sen-regular uppercase background-blue">
                      bookmark
                    </button>
                    <button className="book-button white-text sen-regular uppercase background-blue">
                      details
                    </button>
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
