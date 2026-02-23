import DropDownMenu from "./DropDownMenu";
import "../styles/navigation/index.css";

function NavBar() {
  const menuItems = [
    <a
      href="/tomelog/search/"
      className="link-menu-item white-text sen-regular background-light-brown-hover"
    >
      search
    </a>,
    <a
      href="/tomelog/bookshelf/"
      className="link-menu-item white-text sen-regular background-light-brown-hover"
    >
      bookshelf
    </a>,
  ];

  return (
    <header className="navigation-bar">
      <div className="navigation-bar-content">
        <a href="/" className="white-text">
          <span className="logo-text biorhyme-bold">tomelog</span>
        </a>
        <div>
          <nav className="navigation-nav">
            <ul className="navigation-nav-links">
              <li>
                <a
                  href="/tomelog/search/"
                  className="navigation-nav-link white-text sen-regular background-light-brown-hover"
                >
                  search
                </a>
              </li>
              <li>
                <a
                  href="/tomelog/bookshelf/"
                  className="navigation-nav-link white-text sen-regular background-light-brown-hover"
                >
                  bookshelf
                </a>
              </li>
            </ul>
          </nav>
          <DropDownMenu menuItems={menuItems} theme="dark" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
