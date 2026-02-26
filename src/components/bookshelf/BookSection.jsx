import Book from "../Book";

function BookSection({
  books,
  slideInToast,
  updateToast,
  slideOutToast,
  displayModal,
}) {
  return (
    <div className="book-section">
      <span className="sen-regular">shelves {">"} all books</span>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            coverURL={book.coverURL}
            title={book.title}
            author={book.authorName}
            updateToast={updateToast}
            slideInToast={slideInToast}
            slideOutToast={slideOutToast}
            displayModal={displayModal}
          />
        ))}
      </div>
    </div>
  );
}

export default BookSection;
