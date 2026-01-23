const CLASS = "Implementation - webView";

import { useEffect, useState } from "react";
import {
  record,
  getChapterRatioDetails,
  getPageRatioDetails,
  updateBookChapters,
  updateBookPages,
  updateChapterBookmark,
  updatePageBookmark,
} from "./controller";

function NotFiledButton({ id, setFiled }) {
  // console.log(CLASS);
  const file = (id) => {
    const { error, view: FiledBook } = record(id);

    if (!error) {
      setFiled(<FiledBook id={id} setFiled={setFiled} />);
    } else {
      alert("error");
    }
  };

  return <button onClick={() => file(id)}>file</button>;
}

function FiledButton({ id, setFiled }) {
  // console.log(CLASS);
  const unfile = (id) => {
    // TODO: add remove book from storage capability
  };

  return <button onClick={() => unfile(id)}>unfile</button>;
}

function Book({ id, title, subtitle, coverURL }) {
  // console.log(CLASS);
  const [filed, setFiled] = useState();

  useEffect(() => {
    // TODO: set the correct initial state
    setFiled(<NotFiledButton id={id} setFiled={setFiled} />);
  }, []);

  return (
    <div>
      {filed}
      <img src={coverURL}></img>
      <span>
        {title}-{subtitle}
      </span>
    </div>
  );
}

function StoredBook({ id, title, subtitle, coverURL }) {
  const [progressModal, setProgressModal] = useState(null);
  const [bookDetailsModal, setBookDetailsModal] = useState(false);
  const [bookmarksModal, setBookmarksModal] = useState(null);

  const toggleProgressModal = () => {
    if (progressModal !== null) {
      setProgressModal(null);
      return;
    }

    const { error: chapterRatioError, view: chapterRatioView } =
      getChapterRatioDetails(id);
    const { error: pageRatioError, view: pageRatioView } =
      getPageRatioDetails(id);

    if (!chapterRatioError && !pageRatioError) {
      setProgressModal(
        <div>
          {chapterRatioView}
          {pageRatioView}
        </div>,
      );
    } else {
      console.log(chapterRatioError);
      console.log(pageRatioError, pageRatioView);
      alert("error");
    }
  };

  const toggleBookDetailsModal = () => {
    setBookDetailsModal(!bookDetailsModal);
  };

  const updateChapters = (formData) => {
    const chapters = formData.get("chapters");
    const { error, view } = updateBookChapters(id, Number(chapters));

    if (!error) {
      // TODO : handle the view
    } else {
      alert("error");
      console.log(view);
    }
  };

  const updatePages = (formData) => {
    const startPage = formData.get("startPage");
    const endPage = formData.get("endPage");
    const { error, view } = updateBookPages(
      id,
      Number(startPage),
      Number(endPage),
    );

    if (!error) {
      // TODO: handle the view
    } else {
      alert("error");
      console.log(view);
    }
  };

  const toggleBookmarksModal = () => {
    setBookmarksModal(!bookmarksModal);
  };

  const updatebookmarkchapter = (formData) => {
    const chapterBookmark = formData.get("chapterBookmark");
    const { error, view } = updateChapterBookmark(id, Number(chapterBookmark));

    if (!error) {
      // TODO: handle the view
    } else {
      alert("error");
      console.log(view);
    }
  };

  const updatepagebookmark = (formData) => {
    const pageBookmark = formData.get("pageBookmark");
    const { error, view } = updatePageBookmark(id, Number(pageBookmark));

    if (!error) {
      // TODO: handle the view
    } else {
      alert("error");
      console.log(view);
    }
  };

  return (
    <div>
      <button onClick={toggleProgressModal}>view progress</button>
      <button onClick={toggleBookmarksModal}>update bookmarks</button>
      <button onClick={toggleBookDetailsModal}>update book info</button>
      {progressModal}
      {bookDetailsModal && (
        <div>
          <form action={updatePages}>
            <input name="startPage" type="number" />
            <input name="endPage" type="number" />
            <button>update pages</button>
          </form>
          <form action={updateChapters}>
            <input name="chapters" type="number" />
            <button>update chapters</button>
          </form>
        </div>
      )}
      {bookmarksModal && (
        <div>
          <form action={updatebookmarkchapter}>
            <input name="chapterBookmark" type="number" />
            <button>update chapter bookmark</button>
          </form>
          <form action={updatepagebookmark}>
            <input name="pageBookmark" type="number" />
            <button>update page bookmark</button>
          </form>
        </div>
      )}
      <img src={coverURL}></img>
      <span>
        {title}-{subtitle}
      </span>
    </div>
  );
}

function resultsBookList(booklist) {
  // console.log(CLASS);
  return booklist.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      title={book.title}
      subtitle={book.subtitle}
      coverURL={book.coverURL}
    />
  ));
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

function bookShelf(booklist) {
  return booklist.map((book) => (
    <StoredBook
      key={book.id}
      id={book.id}
      title={book.title}
      subtitle={book.subtitle}
      coverURL={book.coverURL}
    />
  ));
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
