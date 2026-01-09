const CLASS = "Implementation - storage";
const books = new Map();

const assert = require("node:assert/strict");

function writeBookByBookID(bookID) {
  // console.log(CLASS);

  const originalBookLength = books.size;
  books.set(bookID, {
    chapters: 0,
    page: {
      start: 0,
      end: 0,
    },
    bookmark: { chapter: 0, page: 0 },
  });

  assert.strictEqual(
    books.has(bookID),
    true,
    `Book with ID ${bookID} was not stored`
  );

  assert.strictEqual(
    originalBookLength + 1,
    books.size,
    "Book storage was not written to correctly"
  );

  return [...books.keys()];
}

function writeBookChapterBookmark(bookID, chapter) {
  // console.log(CLASS);

  const book = books.get(bookID);

  assert.strictEqual(
    book !== undefined,
    true,
    `Book with ID ${bookID} does not exist in storage`
  );

  assert.strictEqual(
    chapter <= book.chapters,
    true,
    `Chapter ${chapter} exceeds total chapters ${book.chapters} for book ID ${bookID}`
  );

  book.bookmark.chapter = chapter;
  books.set(bookID, book);

  assert.strictEqual(
    books.has(bookID),
    true,
    `Book with ID ${bookID} was not stored after updating chapter progress`
  );

  return book;
}

function writeBookPageBookmark(bookID, page) {
  // console.log(CLASS);

  const book = books.get(bookID);

  assert.strictEqual(
    book !== undefined,
    true,
    `Book with ID ${bookID} does not exist in storage`
  );

  assert.strictEqual(
    page <= book.page.end && page >= book.page.start,
    true,
    `Page ${page} falls out of page range of ${book.page.start} - ${book.page.end} for book ID ${bookID}`
  );

  book.bookmark.page = page;
  books.set(bookID, book);

  assert.strictEqual(
    books.has(bookID),
    true,
    `Book with ID ${bookID} was not stored after writing to page bookmark`
  );

  return book;
}

function writeBookChapters(bookID, chapters) {
  // console.log(CLASS);

  const book = books.get(bookID);

  assert.strictEqual(
    book !== undefined,
    true,
    `Book with ID ${bookID} does not exist in storage`
  );

  book.chapters = chapters;
  books.set(bookID, book);

  assert.strictEqual(
    books.has(bookID),
    true,
    `Book with ID ${bookID} was not stored after writing to book chapters`
  );

  return book;
}

function writeBookPages(bookID, startPage, endPage) {
  // console.log(CLASS);

  const book = books.get(bookID);

  assert.strictEqual(
    book !== undefined,
    true,
    `Book with ID ${bookID} does not exist in storage`
  );

  book.page.start = startPage;
  book.page.end = endPage;
  books.set(bookID, book);

  assert.strictEqual(
    books.has(bookID),
    true,
    `Book with ID ${bookID} was not stored after writing to book pages`
  );

  return book;
}

function fetchMyBooks() {
  return [...books.keys()];
}

module.exports = {
  writeBookByBookID,
  writeBookChapterBookmark,
  writeBookPageBookmark,
  writeBookChapters,
  writeBookPages,
  fetchMyBooks,
};
