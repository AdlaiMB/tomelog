const CLASS = "Implementation - bookRepo";
const API_BASE_URL = "https://openlibrary.org";

const assert = require("node:assert/strict");

const storageInterface = require("./storageInterface.js");
const storageImplementation = require("./storageImplementation.js");

async function queryByTitle(title) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL + "/search.json" + `?q=${title}&limit=5`
  );
  const openlibraryData = await openLibraryResponse.json();

  assert.strictEqual(
    Object.hasOwn(openlibraryData, "docs"),
    true,
    "Missing 'docs' property in response"
  );

  return openlibraryData["docs"];
}

function storeBook(bookID) {
  // console.log(CLASS);
  return storageInterface.writeBookByBookID(
    bookID,
    storageImplementation.writeBookByBookID
  );
}

async function getBookByBookID(bookID) {
  // console.log(CLASS);
  const openLibraryResponse = await fetch(
    API_BASE_URL + `/work/${bookID}.json`
  );
  const openlibraryData = await openLibraryResponse.json();

  assert.strictEqual(
    Object.hasOwn(openlibraryData, "error"),
    false,
    "Invalid BookID provided"
  );

  return openlibraryData;
}

function updateBookChapterBookmark(bookID, chapter) {
  // console.log(CLASS);
  return storageInterface.writeBookChapterBookmark(
    bookID,
    chapter,
    storageImplementation.writeBookChapterBookmark
  );
}

function updateBookPageBookmark(bookID, page) {
  // console.log(CLASS);
  return storageInterface.writeBookPageBookmark(
    bookID,
    page,
    storageImplementation.writeBookPageBookmark
  );
}

function updateBookChapters(bookID, chapters) {
  // console.log(CLASS);
  return storageInterface.writeBookChapters(
    bookID,
    chapters,
    storageImplementation.writeBookChapters
  );
}

function updateBookPages(bookID, startPage, endPage) {
  // console.log(CLASS);
  return storageInterface.writeBookPages(
    bookID,
    startPage,
    endPage,
    storageImplementation.writeBookPages
  );
}

function getMyBooks() {
  // console.log(CLASS);
  return storageInterface.fetchMyBooks(storageImplementation.fetchMyBooks);
}

function getBookPageTotal(bookID) {
  // console.log(CLASS);
  return storageInterface.fetchBookPageTotal(
    bookID,
    storageImplementation.fetchBookPageTotal
  );
}

function getBookPageBookmark(bookID) {
  // console.log(CLASS);
  return storageInterface.fetchBookPageBookmark(
    bookID,
    storageImplementation.fetchBookPageBookmark
  );
}

function getBookChapterBookmark(bookID) {
  // console.log(CLASS);
  return storageInterface.fetchBookChapterBookmark(
    bookID,
    storageImplementation.fetchBookChapterBookmark
  );
}

function getBookChapterTotal(bookID) {
  // console.log(CLASS);
  return storageInterface.fetchBookChapterTotal(
    bookID,
    storageImplementation.fetchBookChapterTotal
  );
}

module.exports = {
  queryByTitle,
  storeBook,
  getBookByBookID,
  updateBookChapterBookmark,
  updateBookPageBookmark,
  updateBookChapters,
  updateBookPages,
  getMyBooks,
  getBookPageTotal,
  getBookPageBookmark,
  getBookChapterBookmark,
  getBookChapterTotal,
};
