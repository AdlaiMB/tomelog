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
          className={`search-bar-button white-text sen-regular background-white ${isToastPresent ? "" : "background-white-hover"}`}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="7" stroke="#BABBAE" stroke-width="2" />
            <path
              d="M18.2929 17.7071C18.6834 18.0976 19.3166 18.0976 19.7071 17.7071C20.0976 17.3166 20.0976 16.6834 19.7071 16.2929L19 17L18.2929 17.7071ZM14 12L13.2929 12.7071L18.2929 17.7071L19 17L19.7071 16.2929L14.7071 11.2929L14 12Z"
              fill="#BABBAE"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
