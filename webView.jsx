const CLASS = "Implementation - webView";

import { useEffect, useState } from "react";
import { record } from "./controller";

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
  return (
    <div>
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

export { resultsBookList, error, filedBook, bookShelf };
