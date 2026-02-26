import { discoverySearch as interfaceDiscoverySearch } from "../interactor/searchInterface";
import { discoverySearch as implementationDiscoverySearch } from "../interactor/searchImplementation";

import {
  searchResultBooklist as interfaceSearchResultBooklist,
  errorMessage as interfaceErrorMeassage,
  recordedBook as interfaceRecordedBook,
  storedBooksBooklist as interfaceStoredBooksBooklist,
  chapterRatio as interfaceChapterRatio,
  pageRatio as interfacePageRatio,
  updatedBook as interfaceUpdatedBook,
  removedBook as interfaceRemovedBook,
  partialError as interfacePartialError,
} from "./presenterInterface";
import {
  searchResultBooklist as implementationSearchResultBooklist,
  errorMessage as implementationErrorMessage,
  recordedBook as implementationRecordedBook,
  storedBooksBooklist as implementationStoredBooksBooklist,
  chapterRatio as implementationChapterRatio,
  pageRatio as implementationPageRatio,
  updatedBook as implementationUpdatedBook,
  removedBook as implementationRemovedBook,
  partialError as implementationPartialError,
} from "../screen_presenter/screenPresenter";

import {
  storeBook as interfaceStoreBook,
  getMyBooks as interfaceGetMyBooks,
  getBookByBookID as interfaceGetBookByBookID,
  getBookChapterBookmark as interfaceGetBookChapterBookmark,
  getBookChapterTotal as interfaceGetBookChapterTotal,
  getBookPageBookmark as interfaceGetBookPageBookmark,
  getBookPageTotal as interfaceGetBookPageTotal,
  updateBookChapters as interfaceUpdateBookChapters,
  updateBookPages as interfaceUpdateBookPages,
  updateBookChapterBookmark as interfaceUpdateBookChapterBookmark,
  updateBookPageBookmark as interfaceUpdateBookPageBookmark,
  removeBook as interfaceRemoveBook,
} from "../interactor/bookRepoInterface";
import {
  storeBook as implementationStoreBook,
  getMyBooks as implementationGetMyBooks,
  getBookByBookID as implementationGetBookByBookID,
  getBookChapterBookmark as implementationGetBookChapterBookmark,
  getBookChapterTotal as implementationGetBookChapterTotal,
  getBookPageBookmark as implementationGetBookPageBookmark,
  getBookPageTotal as implementationGetBookPageTotal,
  updateBookChapters as implementationUpdateBookChapters,
  updateBookPages as implementationUpdateBookPages,
  updateBookChapterBookmark as implementationUpdateBookChapterBookmark,
  updateBookPageBookmark as implementationUpdateBookPageBookmark,
  removeBook as implementationRemoveBook,
} from "../database/bookRepoImplementation";

async function find(book, limit, page) {
  let resultBooksData = null;
  let errorMessage;

  try {
    resultBooksData = await interfaceDiscoverySearch(
      { query: book, limit, page },
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

function remove(bookID) {
  let books = null;
  let errorMessage;

  try {
    books = interfaceRemoveBook(bookID, implementationRemoveBook);
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (books !== null) {
    view = interfaceRemovedBook(books, implementationRemovedBook);
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
    const books = interfaceStoredBooksBooklist(
      recordedBooks,
      implementationStoredBooksBooklist,
    );
    response = { error: false, books };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function updateBookBookmarks(bookID, chapter, page) {
  if (chapter === null && page === null) {
    return {
      error: true,
      view: interfaceErrorMeassage(
        "No chapter or page bookmark provided to update.",
        implementationErrorMessage,
      ),
    };
  }

  let wasChapterBookmarkUpdateAttempted = false;
  let wasChapterUpdateError = false;
  let chapterUpdateErrorMessage = null;
  let wasPageBookmarkUpdateAttempted = false;
  let wasPageUpdateError = false;
  let pageUpdateErrorMessage = null;

  if (chapter !== null) {
    wasChapterBookmarkUpdateAttempted = true;
    const { error: chapterError, view: chapterResponse } =
      updateChapterBookmark(bookID, chapter);

    if (chapterError) {
      wasChapterUpdateError = true;
      chapterUpdateErrorMessage = chapterResponse;
    }
  }

  if (page !== null) {
    wasPageBookmarkUpdateAttempted = true;
    const { error: pageError, view: pageResponse } = updatePageBookmark(
      bookID,
      page,
    );

    if (pageError) {
      wasPageUpdateError = true;
      pageUpdateErrorMessage = pageResponse;
    }
  }

  if (wasChapterBookmarkUpdateAttempted && wasPageBookmarkUpdateAttempted) {
    if (wasChapterUpdateError === false && wasPageUpdateError === false) {
      return {
        error: false,
        response: interfaceUpdatedBook(
          "The book has updated successfully",
          implementationUpdatedBook,
        ),
      };
    } else {
      return {
        error: true,
        partial: true,
        response: interfacePartialError(
          { chapter: chapterUpdateErrorMessage, page: pageUpdateErrorMessage },
          implementationPartialError,
        ),
      };
    }
  } else {
    if (wasChapterBookmarkUpdateAttempted) {
      if (wasChapterUpdateError === false) {
        return {
          error: false,
          response: interfaceUpdatedBook(
            "The book has updated successfully",
            implementationUpdatedBook,
          ),
        };
      } else {
        return {
          error: true,
          partial: false,
          response: interfaceErrorMeassage(
            chapterUpdateErrorMessage,
            implementationErrorMessage,
          ),
        };
      }
    } else {
      if (wasPageUpdateError === false) {
        return {
          error: false,
          response: interfaceUpdatedBook(
            "The book has updated successfully",
            implementationUpdatedBook,
          ),
        };
      } else {
        return {
          error: true,
          partial: false,
          response: interfaceErrorMeassage(
            pageUpdateErrorMessage,
            implementationErrorMessage,
          ),
        };
      }
    }
  }
}

function updateChapterBookmark(bookID, chapter) {
  let updatedBook = null;
  let errorMessage;

  try {
    updatedBook = interfaceUpdateBookChapterBookmark(
      bookID,
      chapter,
      implementationUpdateBookChapterBookmark,
    );
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (updatedBook !== null) {
    view = interfaceUpdatedBook(updatedBook, implementationUpdatedBook);
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function updatePageBookmark(bookID, page) {
  let updatedBook = null;
  let errorMessage;

  try {
    updatedBook = interfaceUpdateBookPageBookmark(
      bookID,
      page,
      implementationUpdateBookPageBookmark,
    );
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (updatedBook !== null) {
    view = interfaceUpdatedBook(updatedBook, implementationUpdatedBook);
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function updateBookPages(bookID, startPage, EndPage) {
  let updatedBook = null;
  let errorMessage;

  try {
    updatedBook = interfaceUpdateBookPages(
      bookID,
      startPage,
      EndPage,
      implementationUpdateBookPages,
    );
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (updatedBook !== null) {
    view = interfaceUpdatedBook(updatedBook, implementationUpdatedBook);
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function updateBookChapters(bookID, chapters) {
  let updatedBook = null;
  let errorMessage;

  try {
    updatedBook = interfaceUpdateBookChapters(
      bookID,
      chapters,
      implementationUpdateBookChapters,
    );
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (updatedBook !== null) {
    view = interfaceUpdatedBook(updatedBook, implementationUpdatedBook);
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function getPageRatioDetails(bookID) {
  let pageRatio = null;
  let errorMessage;

  try {
    const pageBookmark = interfaceGetBookPageBookmark(
      bookID,
      implementationGetBookPageBookmark,
    );

    const pageTotal = interfaceGetBookPageTotal(
      bookID,
      implementationGetBookPageTotal,
    );

    pageRatio = { bookmark: pageBookmark, total: pageTotal };
  } catch (error) {
    errorMessage = error.message;
  }

  let response;
  let view;

  if (pageRatio !== null) {
    view = interfacePageRatio(
      pageRatio.bookmark,
      pageRatio.total,
      implementationPageRatio,
    );
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

function getChapterRatioDetails(bookID) {
  let chapterRatio = null;
  let errorMessage;

  try {
    const chapterBookmark = interfaceGetBookChapterBookmark(
      bookID,
      implementationGetBookChapterBookmark,
    );

    const chapterTotal = interfaceGetBookChapterTotal(
      bookID,
      implementationGetBookChapterTotal,
    );

    chapterRatio = { bookmark: chapterBookmark, total: chapterTotal };
  } catch (error) {
    errorMessage = error.messsage;
  }

  let response;
  let view;

  if (chapterRatio !== null) {
    view = interfaceChapterRatio(
      chapterRatio.bookmark,
      chapterRatio.total,
      implementationChapterRatio,
    );
    response = { error: false, view };
  } else {
    view = interfaceErrorMeassage(errorMessage, implementationErrorMessage);
    response = { error: true, view };
  }

  return response;
}

export {
  find,
  record,
  getMyBooks,
  getChapterRatioDetails,
  getPageRatioDetails,
  updateBookChapters,
  updateBookPages,
  updateChapterBookmark,
  updatePageBookmark,
  remove,
  updateBookBookmarks,
};
