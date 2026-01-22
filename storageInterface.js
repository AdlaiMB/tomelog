const CLASS = "Interface - storage";

function writeBookByBookID(bookID, implementation) {
  // console.log(CLASS);
  // preconditon(s)

  // call any implementation
  const books = implementation(bookID);

  // postcondition(s)
  if (!books.includes(bookID)) {
    throw new Error(`Book with ID ${bookID} was not written to storage`);
  }

  return books;
}

// function writeBookChapterBookmark(bookID, chapter, implementation) {
//   // console.log(CLASS);
//   // preconditon(s)
//   assert.strictEqual(
//     Number.isInteger(chapter),
//     true,
//     `Chapter ${chapter} is not an integer`
//   );

//   assert.strictEqual(
//     chapter > 0,
//     true,
//     `Chapter ${chapter} must be greater than zero`
//   );

//   // call any implementation
//   const book = implementation(bookID, chapter);

//   // postcondition(s)
//   assert.strictEqual(
//     book.bookmark.chapter,
//     chapter,
//     `Book with ID ${bookID} has incorrect chapter bookmark after writing`
//   );

//   return book;
// }

// function writeBookPageBookmark(bookID, page, implementation) {
//   // console.log(CLASS);
//   // preconditon(s)
//   assert.strictEqual(
//     Number.isInteger(page),
//     true,
//     `Page ${page} is not an integer`
//   );

//   assert.strictEqual(page > 0, true, `Page ${page} must be greater than zero`);

//   // call any implementation
//   const book = implementation(bookID, page);

//   // postcondition(s)
//   assert.strictEqual(
//     book.bookmark.page,
//     page,
//     `Book with ID ${bookID} has incorrect page bookmark after writing`
//   );

//   return book;
// }

// function writeBookChapters(bookID, chapters, implementation) {
//   // console.log(CLASS);
//   // preconditon(s)
//   assert.strictEqual(
//     Number.isInteger(chapters),
//     true,
//     `Chapters is not an integer`
//   );

//   assert.strictEqual(
//     chapters > 0,
//     true,
//     `Chapters ${chapters} must be greater than zero`
//   );

//   // call any implementation
//   const book = implementation(bookID, chapters);

//   // postcondition(s)
//   assert.strictEqual(
//     book.chapters,
//     chapters,
//     `Book with ID ${bookID} has incorrect chapters after writing`
//   );

//   return book;
// }

// function writeBookPages(bookID, startPage, endPage, implementation) {
//   // console.log(CLASS);
//   // preconditon(s)
//   assert.strictEqual(
//     Number.isInteger(startPage) && Number.isInteger(endPage),
//     true,
//     `Start page or End page is not an integer`
//   );

//   assert.strictEqual(
//     startPage > 0 && endPage > 0,
//     true,
//     `Start page and End Page ${startPage} must be greater than zero`
//   );

//   assert.strictEqual(
//     endPage >= startPage,
//     true,
//     `End page ${endPage} must be greater than or equal to start page ${startPage}`
//   );

//   // call any implementation
//   const book = implementation(bookID, startPage, endPage);

//   // postcondition(s)
//   assert.strictEqual(
//     book.page.start,
//     startPage,
//     `Book with ID ${bookID} has incorrect start page after writing`
//   );

//   assert.strictEqual(
//     book.page.end,
//     endPage,
//     `Book with ID ${bookID} has incorrect end page after writing`
//   );

//   return book;
// }

function fetchMyBooks(implementation) {
  // console.log(CLASS);
  // precondition(s)
  // call any implementation
  const books = implementation();

  // postcondition(s)
  if (!(books instanceof Array)) {
    throw new Error("Books is not array");
  }

  return books;
}

// function fetchBookPageTotal(bookID, implementation) {
//   // console.log(CLASS);
//   // precondition(s)
//   // call any implementation
//   const pages = implementation(bookID);

//   // postcondition(s)
//   assert.strictEqual(
//     Number.isInteger(pages),
//     true,
//     `Page total for book with ID ${bookID} is not an integer`
//   );

//   return pages;
// }

// function fetchBookPageBookmark(bookID, implementation) {
//   // console.log(CLASS);
//   // precondition(s)
//   // call any implementation
//   const pageBookmark = implementation(bookID);

//   // postcondition(s)
//   assert.strictEqual(
//     Number.isInteger(pageBookmark),
//     true,
//     `Page bookmark for book with ID ${bookID} is not an integer`
//   );

//   return pageBookmark;
// }

// function fetchBookChapterBookmark(bookID, implementation) {
//   // console.log(CLASS);
//   // precondition(s)
//   // call any implementation
//   const chapterBookmark = implementation(bookID);

//   // postcondition(s)
//   assert.strictEqual(
//     Number.isInteger(chapterBookmark),
//     true,
//     `Chapter bookmark for book with ID ${bookID} is not an integer`
//   );

//   return chapterBookmark;
// }

// function fetchBookChapterTotal(bookID, implementation) {
//   // console.log(CLASS);
//   // precondition(s)
//   // call any implementation
//   const chapters = implementation(bookID);

//   // postcondition(s)
//   assert.strictEqual(
//     Number.isInteger(chapters),
//     true,
//     `Chapter total for book with ID ${bookID} is not an integer`
//   );

//   return chapters;
// }

// module.exports = {
//   writeBookByBookID,
//   writeBookChapterBookmark,
//   writeBookPageBookmark,
//   writeBookChapters,
//   writeBookPages,
//   fetchMyBooks,
//   fetchBookPageTotal,
//   fetchBookPageBookmark,
//   fetchBookChapterBookmark,
//   fetchBookChapterTotal,
// };

export { writeBookByBookID, fetchMyBooks };
