function Book({
  id,
  coverURL,
  title,
  subtitle,
  author,
  pageProgress,
  chapterProgress,
}) {
  return (
    <div className="book background-gray">
      <img src="/tomelog/image.png" alt="book cover" className="book-image" />
      <div className="book-content-metadata">
        <div className="book-titles capitalize sen-regular">
          <span>american dirt</span>
        </div>
        <span className="capitalize sen-regular">by: jeannie cummins</span>
        <div className="sen-regular small-text">
          <div className="book-progress">
            <span>pages progress: 20%</span>
            <div className="progress-bar-container background-dark-gray">
              <div
                className="progress-bar background-light-blue"
                style={{ width: "20%" }}
              ></div>
            </div>
          </div>
          <div className="book-progress">
            <span>chapters progress: 40%</span>
            <div className="progress-bar-container background-dark-gray">
              <div
                className="progress-bar background-light-blue"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="book-buttons">
        <button className="book-button white-text sen-regular uppercase background-blue">
          bookmark
        </button>
        <button className="book-button white-text sen-regular uppercase background-blue">
          details
        </button>
      </div>
    </div>
  );
}

export default Book;
