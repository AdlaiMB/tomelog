const CLASS = "Implementation - webView";

function resultsBookList(booklist) {
  // console.log(CLASS);
  return booklist.map((book) => (
    <div key={book.id}>
      <span>{book.title}</span>
      <img src={book.coverURL} />
    </div>
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

export { resultsBookList, error };
