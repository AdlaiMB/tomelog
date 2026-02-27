import "../../styles/components/bookshelf/tab-section.css";

import DropDownMenu from "../DropDownMenu";

function TabSection() {
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
  );
}

export default TabSection;
