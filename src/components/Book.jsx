import { getPageRatioDetails } from "../controller/controller";
import { getChapterRatioDetails } from "../controller/controller";

import { useEffect, useState } from "react";

import Overlay from "./Overlay";
import Modal from "./Modal";

function Book({
  id,
  coverURL,
  title,
  subtitle,
  author,
  displayModal,
  removeModal,
}) {
  const [pageProgress, setPageProgress] = useState(null);
  const [chapterProgress, setChapterProgress] = useState(null);

  useEffect(() => {
    async function fetchProgressDetails() {
      const { view: pageProgress } = getPageRatioDetails(id);
      const { view: chapterProgress } = getChapterRatioDetails(id);

      setPageProgress(pageProgress);
      setChapterProgress(chapterProgress);
    }

    fetchProgressDetails();
  }, []);

  const testModal = () => {
    displayModal(<Modal removeModal={removeModal} />);
  };

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
            <span>{subtitle}</span>
          </div>
          <span className="capitalize sen-regular">by: {author}</span>
          <div className="sen-regular small-text">
            {pageProgress}
            {chapterProgress}
          </div>
        </div>
        <div className="book-buttons">
          <button
            onClick={testModal}
            className="book-button white-text sen-regular uppercase background-blue"
          >
            bookmark
          </button>
          <button className="book-button white-text sen-regular uppercase background-blue">
            details
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
