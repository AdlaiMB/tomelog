import "../../styles/components/search/search-bar.css";

function SearchBar({ action, isToastPresent }) {
  return (
    <div className="search-bar-container">
      <form className="search-bar border-beige" action={action}>
        <input
          name="query"
          placeholder="Enter the title of your book (e.g. How to Hide an Empire)"
          className="search-bar-input sen-regular"
        />
        <button
          disabled={isToastPresent}
          className={`search-bar-button white-text sen-regular background-brown ${isToastPresent ? "" : "background-brown-hover"}`}
        >
          search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
