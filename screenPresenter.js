const CLASS = "Implementation - screenPrensenter";

const screenViewInterface = require("./screenViewInterface.js");
const terminalView = require("./terminalView.js");

function generateCoverURL(coverId) {
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}

function searchResultBooklist(bookList) {
  // console.log(CLASS);
  // process bookList for presentation
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

module.exports = { searchResultBooklist, errorMessage };
