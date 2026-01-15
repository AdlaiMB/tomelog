const CLASS = "Implementation - screenPrensenter";

const screenViewInterface = require("./screenViewInterface.js");
const terminalView = require("./terminalView.js");

function generateCoverURL(coverId) {
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}

function searchResultBooklist(bookList) {
  // console.log(CLASS);
  const result = [];

  for (const book of bookList) {
    const processedBook = {
      id: book.key,
      title: book.title,
      coverURL: Object.hasOwn(book, "cover_i")
        ? generateCoverURL(book.cover_i)
        : null,
    };
    result.push(processedBook);
  }

  screenViewInterface.resultsBookList(result, terminalView.resultsBookList);
}

function errorMessage(errorMessage) {
  // console.log(CLASS);
  screenViewInterface.error(errorMessage, terminalView.error);
}

function recordedBook(recordedBook) {
  // console.log(CLASS);
  screenViewInterface.filedBook(recordedBook, terminalView.filedBook);
}

function storedBooksBooklist(booklist) {
  // console.log(CLASS);
  const result = [];

  for (const book of booklist) {
    const processedBook = {
      id: book.key,
      title: book.title,
      coverURL:
        Object.hasOwn(book, "covers") &&
        book.covers.length > 0 &&
        book.covers[0] > 0
          ? generateCoverURL(book.covers[0])
          : null,
    };
    result.push(processedBook);
  }

  screenViewInterface.bookShelf(result, terminalView.bookShelf);
}

function pageRatio(completed, total) {
  // console.log(CLASS);
  screenViewInterface.pageProgress(completed, total, terminalView.pageProgress);
}

function chapterRatio(completed, total) {
  // console.log(CLASS);
  screenViewInterface.chapterProgress(
    completed,
    total,
    terminalView.chapterProgress
  );
}

function updatedBook(updatedBook) {
  // console.log(CLASS);
  screenViewInterface.updatedBook(updatedBook, terminalView.updatedBook);
}

module.exports = {
  searchResultBooklist,
  errorMessage,
  recordedBook,
  storedBooksBooklist,
  pageRatio,
  chapterRatio,
  updatedBook,
};
