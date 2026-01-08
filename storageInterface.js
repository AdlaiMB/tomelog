const assert = require("node:assert/strict");

const CLASS = "Interface - storage";

function writeBookByBookID(bookID, implementation) {
  // console.log(CLASS);

  // preconditon(s)

  // call any implementation
  const books = implementation(bookID);

  // postcondition(s)
  assert.strictEqual(
    books.includes(bookID),
    true,
    `Bookid with ID ${bookID} was not written to storage`
  );

  return books;
}

function writeBookChapterBookmark(bookID, chapter, implementation) {
  // console.log(CLASS);

  // preconditon(s)
  assert.strictEqual(
    chapter >= 0,
    true,
    `Chapter ${chapter} must be non-negative`
  );

  // call any implementation
  const book = implementation(bookID, chapter);

  // postcondition(s)
  assert.strictEqual(
    book.bookmark.chapter,
    chapter,
    `Book with ID ${bookID} has incorrect chapter bookmark after writing`
  );

  return book;
}

function writeBookPageBookmark(bookID, page, implementation) {
  // console.log(CLASS);

  // preconditon(s)
  assert.strictEqual(page >= 0, true, `Page ${page} must be non-negative`);

  // call any implementation
  const book = implementation(bookID, page);

  // postcondition(s)
  assert.strictEqual(
    book.bookmark.page,
    page,
    `Book with ID ${bookID} has incorrect page bookmark after writing`
  );

  return book;
}

function writeBookChapters(bookID, chapters, implementation) {
  // console.log(CLASS);

  // preconditon(s)
  assert.strictEqual(
    chapters >= 0,
    true,
    `Chapters ${chapters} must be non-negative`
  );

  // call any implementation
  const book = implementation(bookID, chapters);

  // postcondition(s)
  assert.strictEqual(
    book.chapters,
    chapters,
    `Book with ID ${bookID} has incorrect chapters after writing`
  );

  return book;
}

function writeBookPages(bookID, startPage, endPage, implementation) {
  // console.log(CLASS);

  // preconditon(s)
  assert.strictEqual(
    startPage >= 0 && endPage >= 0,
    true,
    `Start page and End Page ${startPage} must be non-negative`
  );

  assert.strictEqual(
    endPage >= startPage,
    true,
    `End page ${endPage} must be greater than or equal to start page ${startPage}`
  );

  // call any implementation
  const book = implementation(bookID, startPage, endPage);

  // postcondition(s)
  assert.strictEqual(
    book.page.start,
    startPage,
    `Book with ID ${bookID} has incorrect start page after writing`
  );

  assert.strictEqual(
    book.page.end,
    endPage,
    `Book with ID ${bookID} has incorrect end page after writing`
  );

  return book;
}

module.exports = {
  writeBookByBookID,
  writeBookChapterBookmark,
  writeBookPageBookmark,
  writeBookChapters,
  writeBookPages,
};
