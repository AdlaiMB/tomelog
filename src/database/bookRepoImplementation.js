const CLASS = "Implementation - bookRepo";
const API_BASE_URL = "https://openlibrary.org";

import {
  writeBookByBookID as interfaceWriteBookByBookID,
  fetchMyBooks as interfaceFetchMyBooks,
  fetchBookChapterBookmark as interfaceFetchBookChapterBookmark,
  fetchBookChapterTotal as interfaceFetchBookChapterTotal,
  fetchBookPageBookmark as interfaceFetchBookPageBookmark,
  fetchBookPageTotal as interfaceFetchBookPageTotal,
  writeBookChapters as interfaceWriteBookChapters,
  writeBookPages as interfaceWriteBookPages,
  writeBookChapterBookmark as interfaceWriteBookChapterBookmark,
  writeBookPageBookmark as interfaceWriteBookPageBookmark,
  isBookWritten as interfaceIsBookWritten,
  unwriteBookByBookID as interfaceUnwriteBookByBookID,
} from "./storageInterface";
import {
  writeBookByBookID as implementationWriteBookByBookID,
  fetchMyBooks as implementationFetchMyBooks,
  fetchBookChapterBookmark as implementationFetchBookChapterBookmark,
  fetchBookChapterTotal as implementationFetchBookChapterTotal,
  fetchBookPageBookmark as implementationFetchBookPageBookmark,
  fetchBookPageTotal as implementationFetchBookPageTotal,
  writeBookChapters as implementationWriteBookChapters,
  writeBookPages as implementationWriteBookPages,
  writeBookChapterBookmark as implementationWriteBookChapterBookmark,
  writeBookPageBookmark as implementationWriteBookPageBookmark,
  isBookWritten as implementationIsBookWritten,
  unwriteBookByBookID as implementationUnwriteBookByBookID,
} from "./storageImplementation";

function getIDFromOpenLibraryKey(key) {
  return key.split("/").at(-1);
}

async function queryByTitle(title, limit, page) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL +
      "/search.json" +
      `?q=${title}&limit=${limit}&page=${page}&fields=key,title,subtitle,cover_i`,
  );
  const openlibraryData = await openLibraryResponse.json();

  // postcondition(s)
  if (!Object.hasOwn(openlibraryData, "docs")) {
    throw new Error("Missing fields in open library api response");
  }

  const results = [];

  for (const book of openlibraryData["docs"]) {
    const bookID = getIDFromOpenLibraryKey(book.key);
    const bookRepoBookDS = {
      id: bookID,
      title: book.title,
      subtitle: Object.hasOwn(book, "subtitle") ? book.subtitle : null,
      coverID: Object.hasOwn(book, "cover_i") ? book.cover_i : null,
      stored: interfaceIsBookWritten(bookID, implementationIsBookWritten),
    };

    results.push(bookRepoBookDS);
  }

  return results;
}

function storeBook(bookID) {
  // console.log(CLASS);
  return interfaceWriteBookByBookID(bookID, implementationWriteBookByBookID);
}

function removeBook(bookID) {
  return interfaceUnwriteBookByBookID(
    bookID,
    implementationUnwriteBookByBookID,
  );
}

async function getBookByBookID(bookID) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL + `/works/${bookID}.json`,
  );
  const openlibraryData = await openLibraryResponse.json();

  // postcondition(s)
  if (Object.hasOwn(openLibraryResponse, "error")) {
    throw new Error("Invalid book id provided");
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

function updateBookChapterBookmark(bookID, chapter) {
  // console.log(CLASS);
  return interfaceWriteBookChapterBookmark(
    bookID,
    chapter,
    implementationWriteBookChapterBookmark,
  );
}

function updateBookPageBookmark(bookID, page) {
  // console.log(CLASS);
  return interfaceWriteBookPageBookmark(
    bookID,
    page,
    implementationWriteBookPageBookmark,
  );
}

function updateBookChapters(bookID, chapters) {
  // console.log(CLASS);
  return interfaceWriteBookChapters(
    bookID,
    chapters,
    implementationWriteBookChapters,
  );
}

function updateBookPages(bookID, startPage, endPage) {
  // console.log(CLASS);
  return interfaceWriteBookPages(
    bookID,
    startPage,
    endPage,
    implementationWriteBookPages,
  );
}

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

export {
  queryByTitle,
  storeBook,
  getMyBooks,
  getBookByBookID,
  getBookChapterBookmark,
  getBookChapterTotal,
  getBookPageBookmark,
  getBookPageTotal,
  updateBookChapters,
  updateBookPages,
  updateBookChapterBookmark,
  updateBookPageBookmark,
  removeBook,
};
