import { useState, useEffect, useRef, useActionState } from "react";
import { find, record, remove } from "../../controller/controller";
import "../../styles/resets.css";
import "../../styles/globals.css";
import "../../styles/bookshelf/index.css";
import "../../styles/search/index.css";

import Navigation from "../Navigation";
import PageContent from "../PageContent";
import TitleSection from "../bookshelf/TitleSection";
import Book from "../Book";

function ResultBook({ ref, id, title, subtitle, coverURL, filed }) {
  const [file, setFile] = useState(filed);
  const [fileResponse, setFileResponse] = useState(null);

  useEffect(() => {
    if (fileResponse !== null) {
      setTimeout(() => {
        setFileResponse(null);
      }, 2500);
    }
  }, [fileResponse]);

  function fileBook() {
    const { error, view } = record(id);

    if (!error) {
      setFile(true);
    }
    setFileResponse(view);
  }

  function unfileBook() {
    const { error, view } = remove(id);

    if (!error) {
      setFile(false);
    }

    setFileResponse(view);
  }

  return (
    <div ref={ref} className="book column gap-m">
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
        {file ? (
          <button onClick={unfileBook} className="book-button save-book-button">
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0.5V15.5L7.5 11.5L14.5 15.5V0.5H0.5Z"
                fill="#626161"
                stroke="#626161"
                stroke-linecap="round"
              />
            </svg>
          </button>
        ) : (
          <button onClick={fileBook} className="book-button save-book-button">
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0.5V15.5L7.5 11.5L14.5 15.5V0.5H0.5Z"
                stroke="#626161"
                stroke-linecap="round"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="book-notification">{fileResponse}</div>
    </div>
  );
}

function Booklist({ query, booklist }) {
  const [books, setBooks] = useState(booklist);
  const [error, setError] = useState(null);
  const bookRef = useRef(null);

  useEffect(() => {
    if (bookRef.current === null) {
      return;
    }

    if (books.length % 50 !== 0) {
      return;
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          const nextPage = books.length / 50 + 1;
          const { error, view } = await find(query, 50, nextPage);
          if (!error) {
            setBooks((books) => [...books, ...view]);
          } else {
            setError(view);
            observer.disconnect();
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(bookRef.current);
    return () => {
      observer.disconnect();
    };
  }, [books]);

  return (
    <>
      <div className="row  gap-l wrap">
        {books.map((book, index) =>
          index === books.length - 1 ? (
            <ResultBook
              ref={bookRef}
              key={book.id}
              id={book.id}
              title={book.title}
              subtitle={book.subtitle}
              coverURL={book.coverURL}
              filed={book.recorded}
            />
          ) : (
            <ResultBook
              ref={null}
              key={book.id}
              id={book.id}
              title={book.title}
              subtitle={book.subtitle}
              coverURL={book.coverURL}
              filed={book.recorded}
            />
          ),
        )}
      </div>
      {error}
    </>
  );
}

function App() {
  const [books, setBooks] = useState([]);

  async function searchAction(formData) {
    const query = formData.get("query");
    const response = await find(query, 50, 1);

    if (response.error) {
      return console.log(response.error.view);
    }

    setBooks(response.books);
  }

  return (
    <>
      <Navigation />
      <PageContent>
        <TitleSection title="search books" />
        <div className="search-bar-container">
          <form className="search-bar border-beige" action={searchAction}>
            <input
              name="query"
              placeholder="Enter the title of your book (e.g. How to Hide an Empires)"
              className="search-bar-input sen-regular"
            />
            <button className="search-bar-button white-text sen-regular background-brown background-brown-hover">
              search
            </button>
          </form>
        </div>
        <div className="books">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              subtitle={book.subtitle}
              coverURL={book.coverURL}
            />
          ))}
        </div>
      </PageContent>
    </>
  );
}

export default App;
