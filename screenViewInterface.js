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

function pageProgress(completed, total, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(completed, total);
}

function chapterProgress(completed, total, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(completed, total);
}

function updatedBook(updatedBook, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(updatedBook);
}

export {
  resultsBookList,
  error,
  filedBook,
  bookShelf,
  chapterProgress,
  pageProgress,
  updatedBook,
};
