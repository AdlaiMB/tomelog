import {
  getPageRatioDetails,
  updateBookBookmarks,
  updateBookDetails,
} from "../controller/controller";
import { getChapterRatioDetails } from "../controller/controller";

import { useEffect, useState } from "react";

import Form from "./Form";

function getDetailsInputSection() {
  return [
    <>
      <label className="sen-bold" htmlFor="chapters">
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
          <label className="sen-regular small-text" htmlFor="startPage">
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
          <label className="sen-regular small-text" htmlFor="endPage">
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
      <label className="sen-bold" htmlFor="chapters">
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
      <label className="sen-bold" htmlFor="pages">
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
  updateToast,
  slideInToast,
  slideOutToast,
  displayModal,
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

  const updateBookmarkFormAction = (formData) => {
    const bookID = formData.get("bookID");
    const chapter =
      formData.get("chapters") === "" ? null : Number(formData.get("chapters"));
    const page =
      formData.get("pages") === "" ? null : Number(formData.get("pages"));

    const response = updateBookBookmarks(bookID, chapter, page);

    if (response.error === false) {
      updateToast("success", "update success", response.response);
    } else {
      if (response.partial) {
        updateToast("partial", "partial update", response.response);
      } else {
        updateToast("error", "update unsuccessful", response.response);
      }
    }

    slideInToast();
    setTimeout(() => {
      slideOutToast();
    }, 3000);
  };

  const updateBookDetailsFormAction = (formData) => {
    const bookID = formData.get("bookID");
    const chapters =
      formData.get("chapters") === "" ? null : Number(formData.get("chapters"));
    const startPage =
      formData.get("startPage") === ""
        ? null
        : Number(formData.get("startPage"));
    const endPage =
      formData.get("endPage") === "" ? null : Number(formData.get("endPage"));

    const response = updateBookDetails(bookID, chapters, startPage, endPage);

    if (response.error === false) {
      updateToast("success", "update success", response.response);
    } else {
      if (response.partial) {
        updateToast("partial", "partial update", response.response);
      } else {
        updateToast("error", "update unsuccessful", response.response);
      }
    }

    slideInToast();
    setTimeout(() => {
      slideOutToast();
    }, 3000);
  };

  const handleBookmarkClick = () => {
    displayModal(
      "book bookmarks",
      <Form
        id={id}
        inputSections={getBookmarkInputSections()}
        action={updateBookmarkFormAction}
      />,
    );
  };

  const handleDetailsClick = () => {
    displayModal(
      "book details",
      <Form
        id={id}
        inputSections={getDetailsInputSection()}
        action={updateBookDetailsFormAction}
      />,
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
            {chapterProgress}
            {pageProgress}
          </div>
        </div>
        <div className="book-buttons">
          <button
            onClick={handleBookmarkClick}
            className="book-button white-text sen-regular uppercase background-blue background-blue-hover"
          >
            bookmark
          </button>
          <button
            onClick={handleDetailsClick}
            className="book-button white-text sen-regular uppercase background-blue background-blue-hover"
          >
            details
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
