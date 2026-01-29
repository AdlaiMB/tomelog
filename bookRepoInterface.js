const CLASS = "Interface - bookRepo";

async function queryByTitle(title, limit, page, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(limit)) {
    throw new Error(`limit ${limit} is not an integer`);
  }

  if (!Number.isInteger(page)) {
    throw new Error(`page ${page} is not an integer`);
  }

  if (limit <= 0) {
    throw new Error(`limit ${limit} must be greater than zero`);
  }

  if (page <= 0) {
    throw new Error(`page ${page} must be greater than zero`);
  }

  // call any implementation
  const books = await implementation(title, limit, page);

  // postcondition(s)
  if (!(books instanceof Array)) {
    throw new Error("Books is not an array");
  }

  return books;
}

function storeBook(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

async function getBookByBookID(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const book = await implementation(bookID);

  // postcondition(s)
  if (!(book instanceof Object)) {
    throw new Error("Book is not an object");
  }

  return book;
}

function updateBookChapterBookmark(bookID, chapter, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID, chapter);
}

function updateBookPageBookmark(bookID, page, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID, page);
}

function updateBookChapters(bookID, chapters, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID, chapters);
}

function updateBookPages(bookID, startPage, endPage, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID, startPage, endPage);
}

function getMyBooks(implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation();
}

function getBookPageTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

function getBookPageBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

function getBookChapterBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

function getBookChapterTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
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
};
