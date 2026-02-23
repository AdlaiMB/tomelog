import "../../styles/new_globals.css";
import "../../styles/resets.css";

import NavBar from "../NavBar";
import DropDownMenu from "../DropDownMenu";

function App() {
  const menuItems = [
    <button className="tab-menu-item">reading</button>,
    <button className="tab-menu-item">read</button>,
    <button className="tab-menu-item">all books</button>,
  ];

  return (
    <>
      <NavBar />
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
                <DropDownMenu menuItems={menuItems} theme="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
