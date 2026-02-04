function NavBar({ page }) {
  return (
    <header className="row space-between guard-rail">
      <a className="biorhyme-bold logo uppercase" href="/tomelog/">
        tomelog
      </a>
      <nav>
        <ul className="nav-links row gap-m">
          <li>
            <a
              className={`${page === "search" ? "sen-bold" : "sen-regular"}`}
              href="/tomelog/"
            >
              search
            </a>
          </li>
          <li>
            <a
              className={`${page === "bookshelf" ? "sen-bold" : "sen-regular"}`}
              href="/tomelog/bookshelf/"
            >
              bookshelf
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
