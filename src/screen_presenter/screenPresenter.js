const CLASS = "Implementation - screenPrensenter";

import {
  chapterProgress as interfaceChapterProgress,
  pageProgress as interfacePageProgress,
} from "./screenViewInterface";
import {
  chapterProgress as implementationChapterProgress,
  pageProgress as implementationPageProgress,
} from "../web_view/webView";

function generateCoverURL(coverId) {
  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}

function searchResultBooklist(bookList) {
  // console.log(CLASS);
  const results = [];

  for (const book of bookList) {
    const processedBook = {
      id: book.id,
      title: book.title,
      subtitle: book.subtitle,
      coverURL: book.coverID !== null ? generateCoverURL(book.coverID) : null,
      recorded: book.stored,
      authorName: book.authorName,
    };
    results.push(processedBook);
  }

  return results;
}

function errorMessage(errorMessage) {
  // console.log(CLASS);
  return errorMessage;
}

function recordedBook(recordedBook) {
  // console.log(CLASS);
  return "The book has been filed in to your bookshelf.";
}

function removedBook(removedBook) {
  // console.log(CLASS);
  return "The book has been unfiled from your bookshelf.";
}

function storedBooksBooklist(booklist) {
  // console.log(CLASS);
  const results = [];

  for (const book of booklist) {
    const processedBook = {
      id: book.id,
      title: book.title,
      subtitle: book.subtitle,
      coverURL: book.coverID !== null ? generateCoverURL(book.coverID) : null,
      authorName: book.authorName,
    };
    results.push(processedBook);
  }

  return results;
}

function pageRatio(completed, total) {
  // console.log(CLASS);
  return interfacePageProgress(completed, total, implementationPageProgress);
}

function chapterRatio(completed, total) {
  // console.log(CLASS);
  return interfaceChapterProgress(
    completed,
    total,
    implementationChapterProgress,
  );
}

function updatedBook(updatedBook) {
  // console.log(CLASS);
  return "The Book has been successfully updated.";
}

function partialError(updatedBook) {
  // console.log(CLASS);
  if (updatedBook.chapter === null) {
    return "The chapter bookmark was updated successfully. " + updatedBook.page;
  } else {
    return "The page bookmark was updated successfully. " + updatedBook.chapter;
  }
}

export {
  searchResultBooklist,
  errorMessage,
  recordedBook,
  storedBooksBooklist,
  chapterRatio,
  pageRatio,
  updatedBook,
  removedBook,
  partialError,
};
