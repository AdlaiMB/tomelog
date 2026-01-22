const CLASS = "Implementation - webView";

import { useEffect, useState } from "react";
import {
  record,
  getChapterRatioDetails,
  getPageRatioDetails,
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

  return (
    <div>
      <button onClick={toggleProgressModal}>view progress</button>
      {progressModal}
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

export {
  resultsBookList,
  error,
  filedBook,
  bookShelf,
  chapterProgress,
  pageProgress,
};
