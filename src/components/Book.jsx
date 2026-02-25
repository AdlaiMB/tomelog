import { getPageRatioDetails } from "../controller/controller";
import { getChapterRatioDetails } from "../controller/controller";

import { useEffect, useState } from "react";

import Modal from "./Modal";
import Form from "./Form";

function getDetailsInputSection() {
  return [
    <>
      <label className="sen-bold" for="chapters">
        chapters
      </label>
      <div className="form-fields">
        <input
          id="chapters"
          name="chapters"
          placeholder="e.x. 20"
          className="sen-regular border-beige input form-field"
          type="number"
        />
      </div>
    </>,
    <>
      <span className="sen-bold ">pages</span>
      <div className="form-fields">
        <div className="form-subfield">
          <label className="sen-regular small-text" for="startPage">
            start page
          </label>
          <input
            id="startPage"
            name="startPage"
            placeholder="e.x. 5"
            className="sen-regular border-beige form-field"
            type="number"
          />
        </div>
        <div className="form-subfield">
          <label className="sen-regular small-text" for="endPage">
            end page
          </label>
          <input
            id="endPage"
            name="endPage"
            placeholder="e.x. 200"
            className="sen-regular border-beige form-field"
            type="number"
          />
        </div>
      </div>
    </>,
  ];
}

function getBookmarkInputSections() {
  return [
    <>
      <label className="sen-bold" for="chapters">
        chapters
      </label>
      <div className="form-fields">
        <input
          id="chapters"
          name="chapters"
          placeholder="e.x. 20"
          className="sen-regular border-beige input form-field"
          type="number"
        />
      </div>
    </>,
    <>
      <label className="sen-bold" for="pages">
        pages
      </label>
      <div className="form-fields">
        <input
          id="pages"
          name="pages"
          placeholder="e.x. 20"
          className="sen-regular border-beige input form-field"
          type="number"
        />
      </div>
    </>,
  ];
}

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

  const handleDetailsClick = () => {
    displayModal(
      <Modal removeModal={removeModal} title="book info">
        <Form id={id} inputSections={getDetailsInputSection()} />
      </Modal>,
    );
  };

  const handleBookmarkClick = () => {
    displayModal(
      <Modal removeModal={removeModal} title="book bookmarks">
        <Form id={id} inputSections={getBookmarkInputSections()} />
      </Modal>,
    );
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
            onClick={handleBookmarkClick}
            className="book-button white-text sen-regular uppercase background-blue"
          >
            bookmark
          </button>
          <button
            onClick={handleDetailsClick}
            className="book-button white-text sen-regular uppercase background-blue"
          >
            details
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
