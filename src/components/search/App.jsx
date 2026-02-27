import "../../styles/resets.css";
import "../../styles/globals.css";

import Navigation from "../Navigation";
import PageContent from "../PageContent";
import Toast from "../Toast";
import TitleSection from "./TitleSection";
import BookContainer from "./BookContainer";
import SearchBar from "./SearchBar";

import { find } from "../../controller/controller";
import { useState, useEffect, useRef } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [toastConfig, setToastConfig] = useState({
    theme: "success",
    title: "",
    message: "",
    animation: "",
  });
  const [isToastPresent, setIsToastPresent] = useState(false);
  const bookRef = useRef(null);

  const booksLength = books.length;

  useEffect(() => {
    if (bookRef.current === null) {
      return;
    }

    if (booksLength % 50 !== 0) {
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
          const nextPage = booksLength / 50 + 1;
          const response = await find(query, 50, nextPage);

          if (response.error) {
            setIsToastPresent(true);
            updateToast("error", "search error", response.view);
            slideInToast();
            setTimeout(() => {
              slideOutToast();
            }, 3000);
            setTimeout(() => {
              setIsToastPresent(false);
            }, 3500);
            observer.disconnect();
            return;
          }

          setBooks((books) => [...books, ...response.books]);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(bookRef.current);
    return () => {
      observer.disconnect();
    };
  }, [booksLength, query]);

  const updatedFile = (id, fileType) => {
    setBooks((books) => {
      const newBooks = [];
      for (const book of books) {
        let newBook = { ...book };
        if (book.id === id) {
          newBook.recorded = fileType;
        }
        newBooks.push(newBook);
      }
      return newBooks;
    });
  };

  const slideInToast = () => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      animation: "slide-in",
    }));
  };

  const slideOutToast = () => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      animation: "slide-out",
    }));
  };

  const updateToast = (theme, title, message) => {
    setToastConfig((toastConfig) => ({
      ...toastConfig,
      theme,
      title,
      message,
    }));
  };

  async function searchAction(formData) {
    const query = formData.get("query");
    const response = await find(query, 50, 1);

    if (response.error) {
      setIsToastPresent(true);
      updateToast("error", "search error", response.view);
      slideInToast();
      setTimeout(() => {
        slideOutToast();
      }, 3000);
      setTimeout(() => {
        setIsToastPresent(false);
      }, 3500);
      return;
    }

    if (response.books.length === 0) {
      setIsToastPresent(true);
      updateToast(
        "partial",
        "no books found",
        "There were no books found matching your query",
      );
      slideInToast();
      setTimeout(() => {
        slideOutToast();
      }, 3000);
      setTimeout(() => {
        setIsToastPresent(false);
      }, 3500);
      return;
    }

    setQuery(query);
    setBooks(response.books);
  }

  return (
    <>
      <Navigation />
      <Toast toastConfig={toastConfig} slideOutToast={slideOutToast} />
      <PageContent>
        <TitleSection title="search books" />
        <SearchBar action={searchAction} isToastPresent={isToastPresent} />
        <BookContainer
          bookRef={bookRef}
          books={books}
          updateToast={updateToast}
          slideInToast={slideInToast}
          slideOutToast={slideOutToast}
          updatedFile={updatedFile}
          isToastPresent={isToastPresent}
          setIsToastPresent={setIsToastPresent}
        />
      </PageContent>
    </>
  );
}

export default App;
