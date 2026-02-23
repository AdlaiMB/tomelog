import DropDownMenu from "./DropDownMenu";

function NavBar() {
  const menuItems = [
    <a href="/tomelog/search/" className="link-menu-item">
      search
    </a>,
    <a href="/tomelog/bookshelf/" className="link-menu-item">
      bookshelf
    </a>,
  ];

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
          <DropDownMenu menuItems={menuItems} theme="dark" />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
