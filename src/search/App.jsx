import { useState, useEffect, useRef, useActionState } from "react";
import { find, record, remove } from "../../controller";
import "../bookshelf/App.css";

function ResultBook({ ref, id, title, subtitle, coverURL, filed }) {
  const [file, setFile] = useState(filed);
  const [fileResponse, setFileResponse] = useState(null);

  useEffect(() => {
    if (fileResponse !== null) {
      setTimeout(() => {
        setFileResponse(null);
      }, 4000);
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
    <div ref={ref} className="book">
      {coverURL === null ? (
        <div className="missing-book-cover"></div>
      ) : (
        <img src={coverURL} alt="book cover" />
      )}
      <p>{title}</p>
      <p className="book-subtitle">{subtitle}</p>
      <div className="book-buttons">
        {file ? (
          <button onClick={unfileBook}>unfile</button>
        ) : (
          <button onClick={fileBook}>file</button>
        )}
      </div>
      <div className="book-notification">{fileResponse}</div>
    </div>
  );
}

function Booklist({ query, booklist }) {
  const [books, setBooks] = useState(booklist);
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
            alert("error");
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
    <div className="search-results">
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
      <div className="content">
        <form className="search-bar" action={searchAction}>
          <input
            name="query"
            placeholder="Enter the title of your book e.g. the pragmatic programmer"
          />
          <button>search</button>
        </form>
        {searchActionResult}
      </div>
    </>
  );
}

export default App;
