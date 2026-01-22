// const searchInterface = require("./searchInterface.js");
// const searchImplementation = require("./searchImplementation.js");

// const presenterInterface = require("./presenterInterface.js");
// const screenPrensenter = require("./screenPresenter.js");

// const bookRepoInterface = require("./bookRepoInterface.js");
// const bookRepoImplementation = require("./bookRepoImplementation.js");

import { discoverySearch as interfaceDiscoverySearch } from "./searchInterface";
import { discoverySearch as implementationDiscoverySearch } from "./searchImplementation";

import {
  searchResultBooklist as interfaceSearchResultBooklist,
  errorMessage as interfaceErrorMeassage,
  recordedBook as interfaceRecordedBook,
  storedBooksBooklist as interfaceStoredBooksBooklist,
} from "./presenterInterface";
import {
  searchResultBooklist as implementationSearchResultBooklist,
  errorMessage as implementationErrorMessage,
  recordedBook as implementationRecordedBook,
  storedBooksBooklist as implementationStoredBooksBooklist,
} from "./screenPresenter";

import {
  storeBook as interfaceStoreBook,
  getMyBooks as interfaceGetMyBooks,
  getBookByBookID as interfaceGetBookByBookID,
} from "./bookRepoInterface";
import {
  storeBook as implementationStoreBook,
  getMyBooks as implementationGetMyBooks,
  getBookByBookID as implementationGetBookByBookID,
} from "./bookRepoImplementation";

async function find(book) {
  let resultBooksData = null;
  let errorMessage;

  try {
    resultBooksData = await interfaceDiscoverySearch(
      { query: book },
      implementationDiscoverySearch,
    );
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (resultBooksData !== null) {
    view = interfaceSearchResultBooklist(
      resultBooksData.books,
      implementationSearchResultBooklist,
    );
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function record(bookID) {
  let recordedBooks = null;
  let errorMessage;

  try {
    recordedBooks = interfaceStoreBook(bookID, implementationStoreBook);
    console.log(recordedBooks);
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (recordedBooks !== null) {
    view = interfaceRecordedBook(recordedBooks, implementationRecordedBook);
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

async function getMyBooks() {
  let recordedBooks = null;
  let errorMessage;

  try {
    const books = [];
    const myBooksIDs = interfaceGetMyBooks(implementationGetMyBooks);

    for (const bookID of myBooksIDs) {
      const book = await interfaceGetBookByBookID(
        bookID,
        implementationGetBookByBookID,
      );
      books.push(book);
    }
    recordedBooks = books;
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (recordedBooks !== null) {
    view = interfaceStoredBooksBooklist(
      recordedBooks,
      implementationStoredBooksBooklist,
    );
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

// function updateChapterBookmark(bookID, chapter) {
//   let response;

//   try {
//     const updatedBook = bookRepoInterface.updateBookChapterBookmark(
//       bookID,
//       chapter,
//       bookRepoImplementation.updateBookChapterBookmark
//     );
//     response = { error: false, updatedBook };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.updatedBook(
//       response.updatedBook,
//       screenPrensenter.updatedBook
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }

// function updatePageBookmark(bookID, page) {
//   let response;

//   try {
//     const updatedBook = bookRepoInterface.updateBookPageBookmark(
//       bookID,
//       page,
//       bookRepoImplementation.updateBookPageBookmark
//     );
//     response = { error: false, updatedBook };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.updatedBook(
//       response.updatedBook,
//       screenPrensenter.updatedBook
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }

// function updateBookPages(bookID, startPage, EndPage) {
//   let response;

//   try {
//     const updatedBook = bookRepoInterface.updateBookPages(
//       bookID,
//       startPage,
//       EndPage,
//       bookRepoImplementation.updateBookPages
//     );
//     response = { error: false, updatedBook };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.updatedBook(
//       response.updatedBook,
//       screenPrensenter.updatedBook
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }
// function updateBookChapters(bookID, chapters) {
//   let response;

//   try {
//     const updatedBook = bookRepoInterface.updateBookChapters(
//       bookID,
//       chapters,
//       bookRepoImplementation.updateBookChapters
//     );
//     response = { error: false, updatedBook };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.updatedBook(
//       response.updatedBook,
//       screenPrensenter.updatedBook
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }

// function getPageRatioDetails(bookID) {
//   let response;

//   try {
//     const pageBookmark = bookRepoInterface.getBookPageBookmark(
//       bookID,
//       bookRepoImplementation.getBookPageBookmark
//     );

//     const pageTotal = bookRepoInterface.getBookPageTotal(
//       bookID,
//       bookRepoImplementation.getBookPageTotal
//     );

//     response = { error: false, bookmark: pageBookmark, total: pageTotal };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.pageRatio(
//       response.bookmark,
//       response.total,
//       screenPrensenter.pageRatio
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }

// function getChapterRatioDetails(bookID) {
//   let response;

//   try {
//     const chapterBookmark = bookRepoInterface.getBookChapterBookmark(
//       bookID,
//       bookRepoImplementation.getBookChapterBookmark
//     );

//     const chapterTotal = bookRepoInterface.getBookChapterTotal(
//       bookID,
//       bookRepoImplementation.getBookChapterTotal
//     );

//     response = { error: false, bookmark: chapterBookmark, total: chapterTotal };
//   } catch (error) {
//     response = { error: true, message: error.message };
//   }

//   if (!response.error) {
//     presenterInterface.chapterRatio(
//       response.bookmark,
//       response.total,
//       screenPrensenter.chapterRatio
//     );
//   } else {
//     presenterInterface.errorMessage(
//       response.message,
//       screenPrensenter.errorMessage
//     );
//   }
// }

// module.exports = {
//   find,
//   record,
//   getMyBooks,
//   getPageRatioDetails,
//   getChapterRatioDetails,
//   updateChapterBookmark,
//   updatePageBookmark,
//   updateBookPages,
//   updateBookChapters,
// };

export { find, record, getMyBooks };
