const CLASS = "Implementation - webView";

import { useActionState, useState } from "react";
import {
  getChapterRatioDetails,
  getPageRatioDetails,
  updateBookChapters,
  updateBookPages,
  updateChapterBookmark,
  updatePageBookmark,
} from "../controller/controller";

function resultsBookList(booklist) {
  // console.log(CLASS);
  return booklist;
}

function error(errorMessage) {
  // console.log(CLASS);
  return (
    <div className="error column gap-sm stretch">
      <p className="sen-bold">Error</p>
      <p className="sen-regular font-sm">{errorMessage}</p>
    </div>
  );
}

function filedBook(filedBooks) {
  // console.log(CLASS)
  return (
    <div className="success column gap-sm book-width">
      <p className="sen-bold">Success</p>
      <p className="sen-regular font-sm">The book has been filed</p>
    </div>
  );
}

function unfiledBook(unfiledBook) {
  // console.log(CLASS);
  return (
    <div className="success column gap-sm book-width">
      <p className="sen-bold">Success</p>
      <p className="sen-regular font-sm">The book has been unfiled</p>
    </div>
  );
}

function updateChapters(prevState, formData) {
  const chapters = formData.get("chapters");
  const bookID = formData.get("bookID");

  const { error, view } = updateBookChapters(bookID, Number(chapters));

  return view;
}

function updatePages(prevState, formData) {
  const startPage = formData.get("startPage");
  const endPage = formData.get("endPage");
  const bookID = formData.get("bookID");

  const { error, view } = updateBookPages(
    bookID,
    Number(startPage),
    Number(endPage),
  );

  return view;
}

function updateBookmarkPage(prevState, formData) {
  const page = formData.get("page");
  const bookID = formData.get("bookID");

  const { error, view } = updatePageBookmark(bookID, Number(page));

  return view;
}

function updateBookmarkChapter(prevState, formData) {
  const chapter = formData.get("chapter");
  const bookID = formData.get("bookID");

  console.log("chapter", chapter);
  console.log("bookID", bookID);

  const { error, view } = updateChapterBookmark(bookID, Number(chapter));

  return view;
}

function UpdateBookDetailModal({ bookID, removeModal }) {
  const [chaptersActionResult, updateChaptersAction] = useActionState(
    updateChapters,
    null,
  );
  const [pagesActionResult, updatePagesAction] = useActionState(
    updatePages,
    null,
  );

  return (
    <div className="modal column gap-l">
      <div className="row space-between">
        <h6 className="capitalize sen-bold">Details Update</h6>
        <button className="modal-close-button" onClick={removeModal}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8137 11.8137L0.5 0.5"
              stroke="#ffffff"
              stroke-linecap="round"
            />
            <path
              d="M0.500012 11.8137L11.8137 0.5"
              stroke="#ffffff"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      {chaptersActionResult}
      {pagesActionResult}
      <div className="column gap-m">
        <form className="column gap-sm" action={updateChaptersAction}>
          <label htmlFor="chapters" className="sen-regular">
            chapters
          </label>
          <input name="bookID" value={bookID} type="hidden" />
          <div className="row gap-m">
            <input
              id="chapters"
              name="chapters"
              type="number"
              className="sen-regular"
              placeholder="10"
              required
            />
            <button className="button sen-bold">update</button>
          </div>
        </form>
        <form className="column gap-sm" action={updatePagesAction}>
          <label htmlFor="pages" className="sen-regular">
            pages
          </label>
          <input name="bookID" value={bookID} type="hidden" />
          <div className="row gap-m">
            <div className="row space-between">
              <input
                id="pages"
                name="startPage"
                type="number"
                className="sen-regular w-45"
                placeholder="1"
                required
              />
              <input
                name="endPage"
                type="number"
                className="sen-regular w-45"
                placeholder="100"
                required
              />
            </div>
            <button className="button sen-bold">update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function UpdateBookBookmarkModal({ bookID, removeModal }) {
  const [chapterBookmarkActionResult, updateChapterBookmarkAction] =
    useActionState(updateBookmarkChapter, null);
  const [pageBookmarkActionResult, updatePageBookmarkAction] = useActionState(
    updateBookmarkPage,
    null,
  );

  return (
    <div className="modal column gap-l">
      <div className="row space-between">
        <h6 className="capitalize sen-bold">Bookmark Update</h6>
        <button className="modal-close-button" onClick={removeModal}>
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.8137 11.8137L0.5 0.5"
              stroke="#ffffff"
              stroke-linecap="round"
            />
            <path
              d="M0.500012 11.8137L11.8137 0.5"
              stroke="#ffffff"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
      {chapterBookmarkActionResult}
      {pageBookmarkActionResult}
      <div className="column gap-m">
        <form className="column gap-sm" action={updateChapterBookmarkAction}>
          <label htmlFor="chapterBookmark" className="sen-regular">
            chapter
          </label>
          <input name="bookID" value={bookID} type="hidden" />
          <div className="row gap-m">
            <input
              id="chapterBookmark"
              name="chapter"
              type="number"
              placeholder="2"
              required
            />
            <button className="button sen-bold">update</button>
          </div>
        </form>
        <form className="column gap-sm" action={updatePageBookmarkAction}>
          <label htmlFor="pageBookmark" className="sen-regular">
            page
          </label>
          <input name="bookID" value={bookID} type="hidden" />
          <div className="row gap-m">
            <input
              id="pageBookmark"
              name="page"
              type="number"
              placeholder="65"
              required
            />
            <button className="button sen-bold">update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function BookShelfBook({
  id,
  title,
  subtitle,
  coverURL,
  displayModal,
  removeModal,
}) {
  const [options, setOptions] = useState(false);
  function displayProgressModal() {
    const { error: chapterDetailError, view: chapterRatioView } =
      getChapterRatioDetails(id);
    const { error: pageDetailError, view: pageRatioView } =
      getPageRatioDetails(id);

    displayModal(
      <div className="modal column gap-l">
        <div className="row space-between">
          <h6 className="capitalize sen-bold">progress</h6>
          <button className="modal-close-button" onClick={removeModal}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8137 11.8137L0.5 0.5"
                stroke="#ffffff"
                stroke-linecap="round"
              />
              <path
                d="M0.500012 11.8137L11.8137 0.5"
                stroke="#ffffff"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="column gap-m">
          {chapterRatioView}
          {pageRatioView}
        </div>
      </div>,
    );
  }

  function displayUpdateBookmarkModal() {
    displayModal(
      <UpdateBookBookmarkModal bookID={id} removeModal={removeModal} />,
    );
  }

  function displayUpdateBookDetailModal() {
    displayModal(
      <UpdateBookDetailModal bookID={id} removeModal={removeModal} />,
    );
  }

  return (
    <div className="book column gap-m">
      {coverURL === null ? (
        <div className="missing-book-cover"></div>
      ) : (
        <img src={coverURL} alt="book cover" className="book-cover" />
      )}
      <div className="column gap-sm">
        <p className="sen-bold book-title">{title}</p>
        <p className="sen-regular font-sm book-title">{subtitle}</p>
      </div>
      <div className="book-buttons">
        <button
          className="book-button options-book-button"
          onClick={() => setOptions(!options)}
        >
          <svg
            width="3"
            height="15"
            viewBox="0 0 3 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" />
            <circle cx="1.5" cy="7.5" r="1.5" fill="#ffffff" />
            <circle cx="1.5" cy="13.5" r="1.5" fill="#ffffff" />
          </svg>
        </button>
      </div>
      {options && (
        <div className="options">
          <div className="option sen-bold" onClick={displayProgressModal}>
            progress
          </div>
          <div className="option sen-bold" onClick={displayUpdateBookmarkModal}>
            bookmark
          </div>
          <div
            className="option sen-bold"
            onClick={displayUpdateBookDetailModal}
          >
            details
          </div>
        </div>
      )}
    </div>
  );
}

function BookShelf({ booklist }) {
  const [modal, setModal] = useState(null);

  function removeModal() {
    setModal(null);
  }

  function displayModal(modal) {
    setModal(<div className="modal-container">{modal}</div>);
  }

  return (
    <>
      {modal}
      <div className="row gap-l wrap">
        {booklist.map((book) => (
          <BookShelfBook
            key={book.id}
            id={book.id}
            title={book.title}
            subtitle={book.subtitle}
            coverURL={book.coverURL}
            displayModal={displayModal}
            removeModal={removeModal}
          />
        ))}
      </div>
    </>
  );
}

function bookShelf(booklist) {
  return <BookShelf booklist={booklist} />;
}

function chapterProgress(completed, total) {
  const percentage = total > 0 ? Math.ceil((completed / total) * 100) : 0;
  return (
    <div className="column gap-sm">
      <div className="row space-between">
        <p className="capitalize sen-bold">chapters</p>
        <span className="sen-regular">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <span
          className="progress-bar-bar"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <p className="sen-regular">
        {completed}chs of {total}chs
      </p>
    </div>
  );
}

function pageProgress(completed, total) {
  const percentage = total > 0 ? Math.ceil((completed / total) * 100) : 0;
  return (
    <div className="column gap-sm">
      <div className="row space-between">
        <p className="capitalize sen-bold">pages</p>
        <span className="sen-regular">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <span
          className="progress-bar-bar"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <p className="sen-regular">
        {completed}pgs of {total}pgs
      </p>
    </div>
  );
}

function updatedBook(updatedBook) {
  return (
    <div className="success column gap-sm stretch">
      <p className="sen-bold">Success</p>
      <p className="sen-regular font-sm">Book has been updated</p>
    </div>
  );
}

export {
  resultsBookList,
  error,
  filedBook,
  bookShelf,
  chapterProgress,
  pageProgress,
  updatedBook,
  unfiledBook,
};
