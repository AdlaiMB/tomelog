import "../../styles/components/search/book-container.css";

import Book from "./Book";

function BookContainer({
  bookRef,
  books,
  updateToast,
  slideInToast,
  slideOutToast,
  updatedFile,
}) {
  return (
    <div className="books">
      {books.map((book, index) => (
        <Book
          ref={index === books.length - 1 ? bookRef : null}
          key={book.id}
          id={book.id}
          title={book.title}
          subtitle={book.subtitle}
          author={book.authorName}
          coverURL={book.coverURL}
          filed={book.recorded}
          updateToast={updateToast}
          slideInToast={slideInToast}
          slideOutToast={slideOutToast}
          updatedFile={updatedFile}
        />
      ))}
    </div>
  );
}

export default BookContainer;
