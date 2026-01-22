const CLASS = "Implementation - bookRepo";
const API_BASE_URL = "https://openlibrary.org";

// const assert = require("node:assert/strict");

// const storageInterface = require("./storageInterface.js");
// const storageImplementation = require("./storageImplementation.js");

import {
  writeBookByBookID as interfaceWriteBookByBookID,
  fetchMyBooks as interfaceFetchMyBooks,
  fetchBookChapterBookmark as interfaceFetchBookChapterBookmark,
  fetchBookChapterTotal as interfaceFetchBookChapterTotal,
  fetchBookPageBookmark as interfaceFetchBookPageBookmark,
  fetchBookPageTotal as interfaceFetchBookPageTotal,
} from "./storageInterface";
import {
  writeBookByBookID as implementationWriteBookByBookID,
  fetchMyBooks as implementationFetchMyBooks,
  fetchBookChapterBookmark as implementationFetchBookChapterBookmark,
  fetchBookChapterTotal as implementationFetchBookChapterTotal,
  fetchBookPageBookmark as implementationFetchBookPageBookmark,
  fetchBookPageTotal as implementationFetchBookPageTotal,
} from "./storageImplementation";

function getIDFromOpenLibraryKey(key) {
  return key.split("/").at(-1);
}

async function queryByTitle(title) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL +
      "/search.json" +
      `?q=${title}&limit=5&fields=key,title,subtitle,cover_i`,
  );
  const openlibraryData = await openLibraryResponse.json();

  // postcondition(s)
  if (!Object.hasOwn(openlibraryData, "docs")) {
    throw new Error("Missing 'docs' property in response");
  }

  const results = [];

  for (const book of openlibraryData["docs"]) {
    const bookRepoBookDS = {
      id: getIDFromOpenLibraryKey(book.key),
      title: book.title,
      subtitle: Object.hasOwn(book, "subtitle") ? book.subtitle : null,
      coverID: Object.hasOwn(book, "cover_i") ? book.cover_i : null,
    };

    results.push(bookRepoBookDS);
  }

  return results;
}

function storeBook(bookID) {
  // console.log(CLASS);
  return interfaceWriteBookByBookID(bookID, implementationWriteBookByBookID);
}

async function getBookByBookID(bookID) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL + `/works/${bookID}.json`,
  );
  const openlibraryData = await openLibraryResponse.json();

  // postcondition(s)
  if (Object.hasOwn(openLibraryResponse, "error")) {
    throw new Error("Invalid BookID provided");
  }

  const book = {
    id: getIDFromOpenLibraryKey(openlibraryData.key),
    title: openlibraryData.title,
    subtitle: Object.hasOwn(openlibraryData, "subtitle")
      ? openlibraryData.subtitle
      : null,
    coverID: Object.hasOwn(openlibraryData, "covers")
      ? openlibraryData.covers[0]
      : null,
  };

  return book;
}

// function updateBookChapterBookmark(bookID, chapter) {
//   // console.log(CLASS);
//   return storageInterface.writeBookChapterBookmark(
//     bookID,
//     chapter,
//     storageImplementation.writeBookChapterBookmark
//   );
// }

// function updateBookPageBookmark(bookID, page) {
//   // console.log(CLASS);
//   return storageInterface.writeBookPageBookmark(
//     bookID,
//     page,
//     storageImplementation.writeBookPageBookmark
//   );
// }

// function updateBookChapters(bookID, chapters) {
//   // console.log(CLASS);
//   return storageInterface.writeBookChapters(
//     bookID,
//     chapters,
//     storageImplementation.writeBookChapters
//   );
// }

// function updateBookPages(bookID, startPage, endPage) {
//   // console.log(CLASS);
//   return storageInterface.writeBookPages(
//     bookID,
//     startPage,
//     endPage,
//     storageImplementation.writeBookPages
//   );
// }

function getMyBooks() {
  // console.log(CLASS);
  return interfaceFetchMyBooks(implementationFetchMyBooks);
}

function getBookPageTotal(bookID) {
  // console.log(CLASS);
  return interfaceFetchBookPageTotal(bookID, implementationFetchBookPageTotal);
}

function getBookPageBookmark(bookID) {
  // console.log(CLASS);
  return interfaceFetchBookPageBookmark(
    bookID,
    implementationFetchBookPageBookmark,
  );
}

function getBookChapterBookmark(bookID) {
  // console.log(CLASS);
  return interfaceFetchBookChapterBookmark(
    bookID,
    implementationFetchBookChapterBookmark,
  );
}

function getBookChapterTotal(bookID) {
  // console.log(CLASS);
  return interfaceFetchBookChapterTotal(
    bookID,
    implementationFetchBookChapterTotal,
  );
}

// module.exports = {
//   queryByTitle,
//   storeBook,
//   getBookByBookID,
//   updateBookChapterBookmark,
//   updateBookPageBookmark,
//   updateBookChapters,
//   updateBookPages,
//   getMyBooks,
//   getBookPageTotal,
//   getBookPageBookmark,
//   getBookChapterBookmark,
//   getBookChapterTotal,
// };

export {
  queryByTitle,
  storeBook,
  getMyBooks,
  getBookByBookID,
  getBookChapterBookmark,
  getBookChapterTotal,
  getBookPageBookmark,
  getBookPageTotal,
};
