const CLASS = "Interface - bookRepo";

function queryByTitle(title, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(title);
}

function storeBook(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

function getBookByBookID(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
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

module.exports = {
  queryByTitle,
  storeBook,
  getBookByBookID,
  updateBookChapterBookmark,
  updateBookPageBookmark,
  updateBookChapters,
  updateBookPages,
};
