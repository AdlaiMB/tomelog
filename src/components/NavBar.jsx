function NavBar({ page }) {
  return (
    <header className="row space-between guard-rail">
      <a className="line-seed-jp-bold logo" href="/search/">
        tomelog
      </a>
      <nav>
        <ul className="nav-links row gap-m">
          <li>
            <a className="line-seed-jp-regular" href="/search/">
              search
            </a>
          </li>
          <li>
            <a className="line-seed-jp-regular" href="/bookshelf/">
              bookshelf
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
