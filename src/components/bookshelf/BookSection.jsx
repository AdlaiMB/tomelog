import Book from "../Book";

function BookSection({ books, displayModal }) {
  return (
    <div className="book-section">
      <span className="sen-regular">shelves {">"} reading</span>
      <div className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            coverURL={book.coverURL}
            title={book.title}
            author={book.author}
            displayModal={displayModal}
          />
        ))}
      </div>
    </div>
  );
}

export default BookSection;
