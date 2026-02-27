import "../styles/components/book-container.css";

function BookContainer({ children }) {
  return <div className="books">{children}</div>;
}

export default BookContainer;
