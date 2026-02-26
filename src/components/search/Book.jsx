function Book({ id, title, subtitle, author, coverURL, filed }) {
  return (
    <>
      <div className="book background-gray">
        {coverURL ? (
          <img src={coverURL} alt="book cover" className="book-image" />
        ) : (
          <div className="book-image background-white"></div>
        )}
        <div className="book-content-metadata">
          <div className="book-titles capitalize sen-regular">
            <span>{title}</span>
            <span className="small-text">{subtitle}</span>
          </div>
          <span className="capitalize sen-regular">by: {author}</span>
        </div>
        <div className="book-buttons">
          <button className="book-button white-text sen-regular uppercase background-blue background-blue-hover">
            {filed ? "unfile" : "file"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
