const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

const presenterInterface = require("./presenterInterface.js");
const screenPrensenter = require("./screenPresenter.js");

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

async function find(book) {
  let response;

  try {
    const searchResult = await searchInterface.discoverySearch(
      { query: book },
      searchImplementation.discoverySearch
    );
    response = { error: false, books: searchResult.books };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.searchResultBooklist(
      response.books,
      screenPrensenter.searchResultBooklist
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

function record(bookID) {
  let response;

  try {
    const recordedBooks = bookRepoInterface.storeBook(
      bookID,
      bookRepoImplementation.storeBook
    );
    response = { error: false, recordedBook: recordedBooks.at(-1) };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.recordedBook(
      response.recordedBook,
      screenPrensenter.recordedBook
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

async function getMyBooks() {
  let response;

  try {
    const books = [];
    const myBooks = bookRepoInterface.getMyBooks(
      bookRepoImplementation.getMyBooks
    );
    for (const bookID of myBooks) {
      const book = await bookRepoInterface.getBookByBookID(
        bookID,
        bookRepoImplementation.getBookByBookID
      );
      books.push(book);
    }
    response = { error: false, books };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.storedBooksBooklist(
      response.books,
      screenPrensenter.storedBooksBooklist
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

module.exports = {
  find,
  record,
  getMyBooks,
};
