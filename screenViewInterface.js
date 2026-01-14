const CLASS = "Interface - screenView";

function resultsBookList(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

function error(errorMessage, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(errorMessage);
}

function filedBook(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

function bookShelf(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

module.exports = { resultsBookList, error, filedBook, bookShelf };
