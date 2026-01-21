const CLASS = "Interface - bookRepo";

async function queryByTitle(title, implementation) {
  // console.log(CLASS);
  // call any implementation
  const books = await implementation(title);

  // postcondition(s)
  if (!books instanceof Array) {
    throw new Error("Books is not an array");
  }

  return books;
}

function storeBook(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

// async function getBookByBookID(bookID, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   const book = await implementation(bookID);

//   // postcondition(s)
//   assert.strictEqual(book instanceof Object, true, "Book is not an object");

//   return book;
// }

// function updateBookChapterBookmark(bookID, chapter, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID, chapter);
// }

// function updateBookPageBookmark(bookID, page, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID, page);
// }

// function updateBookChapters(bookID, chapters, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID, chapters);
// }

// function updateBookPages(bookID, startPage, endPage, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID, startPage, endPage);
// }

// function getMyBooks(implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation();
// }

// function getBookPageTotal(bookID, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID);
// }

// function getBookPageBookmark(bookID, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID);
// }

// function getBookChapterBookmark(bookID, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID);
// }

// function getBookChapterTotal(bookID, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookID);
// }

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

export { queryByTitle, storeBook };
