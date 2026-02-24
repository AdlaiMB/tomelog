import "../../styles/new_globals.css";
import "../../styles/resets.css";
import "../../styles/bookshelf/index.css";

import NavBar from "../NavBar";
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
      <NavBar />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
