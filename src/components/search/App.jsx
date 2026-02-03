import { useState, useEffect, useRef, useActionState } from "react";
import { find, record, remove } from "../../controller/controller";
import "../../styles/global.css";

import NavBar from "../NavBar";

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
        <p className="line-seed-jp-bold">{title}</p>
        <p className="line-seed-jp-regular font-sm gray-text">{subtitle}</p>
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
      <div className="row space-between gap-m wrap">
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

async function search(prevState, formData) {
  const query = formData.get("query");
  const { error, view } = await find(query, 50, 1);

  if (error) {
    return view;
  }

  return <Booklist key={query} query={query} booklist={view} />;
}

function App() {
  const [searchActionResult, searchAction] = useActionState(search, null);

  return (
    <>
      <NavBar />
      <div className="guard-rail column gap-l">
        <form className="search-bar row gap-sm" action={searchAction}>
          <input
            name="query"
            placeholder="Enter the title of your book e.g. the pragmatic programmer"
            className="search line-seed-jp-regular"
          />
          <button className="button line-seed-jp-regular search-button">
            search
          </button>
        </form>
        {searchActionResult}
      </div>
    </>
  );
}

export default App;
