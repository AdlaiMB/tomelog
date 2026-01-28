const CLASS = "Implementation - webView";

import "./view.css";

import { useActionState, useState } from "react";
import {
  getChapterRatioDetails,
  getPageRatioDetails,
  updateBookChapters,
  updateBookPages,
  updateChapterBookmark,
  updatePageBookmark,
} from "./controller";

function NotFiledButton({ id, setFiled }) {
  // console.log(CLASS);
}

function FiledButton({ id, setFiled }) {
  // console.log(CLASS);
}

function resultsBookList(booklist) {
  // console.log(CLASS);
}

function error(errorMessage) {
  // console.log(CLASS);
  return (
    <div>
      <span>{errorMessage}</span>
    </div>
  );
}

function filedBook(filedBooks) {
  // console.log(CLASS)
  return FiledButton;
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

function UpdateBookDetailModal({ bookID }) {
  const [chaptersActionResult, updateChaptersAction] = useActionState(
    updateChapters,
    null,
  );
  const [pagesActionResult, updatePagesAction] = useActionState(
    updatePages,
    null,
  );

  return (
    <div className="modal">
      {chaptersActionResult}
      {pagesActionResult}
      <form action={updateChaptersAction}>
        <label htmlFor="chapters">chapters</label>
        <input id="chapters" name="chapters" type="number" />
        <input name="bookID" value={bookID} type="hidden" />
        <button>update</button>
      </form>
      <form action={updatePagesAction}>
        <label htmlFor="pages">pages</label>
        <input id="pages" name="startPage" type="number" />
        <input name="endPage" type="number" />
        <input name="bookID" value={bookID} type="hidden" />
        <button>update</button>
      </form>
    </div>
  );
}

function UpdateBookBookmarkModal({ bookID }) {
  const [chapterBookmarkActionResult, updateChapterBookmarkAction] =
    useActionState(updateBookmarkChapter, null);
  const [pageBookmarkActionResult, updatePageBookmarkAction] = useActionState(
    updateBookmarkPage,
    null,
  );

  return (
    <div className="modal">
      {chapterBookmarkActionResult}
      {pageBookmarkActionResult}
      <form action={updateChapterBookmarkAction}>
        <label htmlFor="chapterBookmark">chapter bookmark</label>
        <input id="chapterBookmark" name="chapter" type="number" />
        <input name="bookID" value={bookID} type="hidden" />
        <button>update</button>
      </form>
      <form action={updatePageBookmarkAction}>
        <label htmlFor="pageBookmark">page bookmark</label>
        <input id="pageBookmark" name="page" type="number" />
        <input name="bookID" value={bookID} type="hidden" />
        <button>update</button>
      </form>
    </div>
  );
}

function BookShelfBook({ id, title, subtitle, coverURL, displayModal }) {
  function displayProgressModal() {
    const { error: chapterDetailError, view: chapterRatioView } =
      getChapterRatioDetails(id);
    const { error: pageDetailError, view: pageRatioView } =
      getPageRatioDetails(id);

    if (!chapterDetailError && !pageDetailError) {
      displayModal(
        <div className="modal">
          {chapterRatioView}
          {pageRatioView}
        </div>,
      );
    } else {
      alert("error");
    }
  }

  function displayUpdateBookmarkModal() {
    displayModal(<UpdateBookBookmarkModal bookID={id} />);
  }

  function displayUpdateBookDetailModal() {
    displayModal(<UpdateBookDetailModal bookID={id} />);
  }

  return (
    <div>
      <img src={coverURL} alt="book cover" />
      <p>{title}</p>
      <p>{subtitle}</p>
      <div>
        <button onClick={displayProgressModal}>progress</button>
        <button onClick={displayUpdateBookmarkModal}>bookmarks</button>
        <button onClick={displayUpdateBookDetailModal}>details</button>
      </div>
    </div>
  );
}

function BookShelf({ booklist }) {
  const [modal, setModal] = useState(null);

  function displayModal(modal) {
    setModal(
      <div className="modal-container">
        <div className="modal-space">
          <button className="modal-close-button" onClick={() => setModal(null)}>
            close modal
          </button>
          {modal}
        </div>
      </div>,
    );
  }

  return (
    <>
      {modal}
      <div>
        {booklist.map((book) => (
          <BookShelfBook
            key={book.id}
            id={book.id}
            title={book.title}
            subtitle={book.subtitle}
            coverURL={book.coverURL}
            displayModal={displayModal}
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
  return (
    <div>
      <span>chapter progress</span>
      <div>
        percentage: {total > 0 ? Math.ceil((completed / total) * 100) : 0}%
      </div>
      <div>
        ratio: {completed} / {total}
      </div>
    </div>
  );
}

function pageProgress(completed, total) {
  return (
    <div>
      <span>page progress</span>
      <div>
        percentage: {total > 0 ? Math.ceil((completed / total) * 100) : 0}%
      </div>
      <div>
        ratio: {completed} / {total}
      </div>
    </div>
  );
}

function updatedBook(updatedBook) {
  return <div>Book has been updated</div>;
}

export {
  resultsBookList,
  error,
  filedBook,
  bookShelf,
  chapterProgress,
  pageProgress,
  updatedBook,
};
