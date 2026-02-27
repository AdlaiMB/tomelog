import "../../styles/components/search/book.css";

import { record, remove } from "../../controller/controller";
import { useState } from "react";

function Book({
  ref,
  id,
  title,
  subtitle,
  author,
  coverURL,
  filed,
  updateToast,
  slideInToast,
  slideOutToast,
  updatedFile,
  isToastPresent,
  setIsToastPresent,
}) {
  const fileBook = () => {
    const { error, view } = record(id);
    setIsToastPresent(true);

    if (error) {
      updateToast("error", "error", view);
    } else {
      updatedFile(id, true);
      updateToast("success", "success", view);
    }

    setIsToastPresent(true);
    slideInToast();
    setTimeout(() => {
      slideOutToast();
    }, 3000);
    setTimeout(() => {
      setIsToastPresent(false);
    }, 3500);
  };

  const unfileBook = () => {
    const { error, view } = remove(id);
    setIsToastPresent(true);

    if (error) {
      updateToast("error", "error", view);
    } else {
      updatedFile(id, false);
      updateToast("success", "success", view);
    }

    slideInToast();
    setTimeout(() => {
      slideOutToast();
    }, 3000);
    setTimeout(() => {
      setIsToastPresent(false);
    }, 3500);
  };

  return (
    <>
      <div ref={ref} className="book background-gray">
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
          <button
            disabled={isToastPresent}
            onClick={() => {
              filed ? unfileBook() : fileBook();
            }}
            className={`book-button white-text sen-regular uppercase background-blue ${isToastPresent ? "" : "background-blue-hover"}`}
          >
            {filed ? "unfile" : "file"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
