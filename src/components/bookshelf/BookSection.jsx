function BookSection() {
  return (
    <div className="book-section">
      <span className="sen-regular">shelves {">"} reading</span>
      <div className="books">
        <div className="book background-gray">
          <img
            src="/tomelog/image.png"
            alt="book cover"
            className="book-image"
          />
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
        <div className="book background-gray">
          <img
            src="/tomelog/image.png"
            alt="book cover"
            className="book-image"
          />
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
      </div>
    </div>
  );
}

export default BookSection;
