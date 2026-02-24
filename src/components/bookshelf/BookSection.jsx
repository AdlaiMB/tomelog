function BookSection({ books }) {
  return (
    <div className="book-section">
      <span className="sen-regular">shelves {">"} reading</span>
      <div className="books">{books}</div>
    </div>
  );
}

export default BookSection;
