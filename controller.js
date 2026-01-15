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

function updateChapterBookmark(bookID, chapter) {
  let response;

  try {
    const updatedBook = bookRepoInterface.updateBookChapterBookmark(
      bookID,
      chapter,
      bookRepoImplementation.updateBookChapterBookmark
    );
    response = { error: false, updatedBook };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.updatedBook(
      response.updatedBook,
      screenPrensenter.updatedBook
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

function updatePageBookmark(bookID, page) {
  let response;

  try {
    const updatedBook = bookRepoInterface.updateBookPageBookmark(
      bookID,
      page,
      bookRepoImplementation.updateBookPageBookmark
    );
    response = { error: false, updatedBook };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.updatedBook(
      response.updatedBook,
      screenPrensenter.updatedBook
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

function updateBookPages(bookID, startPage, EndPage) {
  let response;

  try {
    const updatedBook = bookRepoInterface.updateBookPages(
      bookID,
      startPage,
      EndPage,
      bookRepoImplementation.updateBookPages
    );
    response = { error: false, updatedBook };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.updatedBook(
      response.updatedBook,
      screenPrensenter.updatedBook
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}
function updateBookChapters(bookID, chapters) {
  let response;

  try {
    const updatedBook = bookRepoInterface.updateBookChapters(
      bookID,
      chapters,
      bookRepoImplementation.updateBookChapters
    );
    response = { error: false, updatedBook };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.updatedBook(
      response.updatedBook,
      screenPrensenter.updatedBook
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

function getPageRatioDetails(bookID) {
  let response;

  try {
    const pageBookmark = bookRepoInterface.getBookPageBookmark(
      bookID,
      bookRepoImplementation.getBookPageBookmark
    );

    const pageTotal = bookRepoInterface.getBookPageTotal(
      bookID,
      bookRepoImplementation.getBookPageTotal
    );

    response = { error: false, bookmark: pageBookmark, total: pageTotal };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.pageRatio(
      response.bookmark,
      response.total,
      screenPrensenter.pageRatio
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

function getChapterRatioDetails(bookID) {
  let response;

  try {
    const chapterBookmark = bookRepoInterface.getBookChapterBookmark(
      bookID,
      bookRepoImplementation.getBookChapterBookmark
    );

    const chapterTotal = bookRepoInterface.getBookChapterTotal(
      bookID,
      bookRepoImplementation.getBookChapterTotal
    );

    response = { error: false, bookmark: chapterBookmark, total: chapterTotal };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.chapterRatio(
      response.bookmark,
      response.total,
      screenPrensenter.chapterRatio
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
  getPageRatioDetails,
  getChapterRatioDetails,
  updateChapterBookmark,
  updatePageBookmark,
  updateBookPages,
  updateBookChapters,
};
