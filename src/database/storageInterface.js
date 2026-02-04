const CLASS = "Interface - storage";

function writeBookByBookID(bookID, implementation) {
  // console.log(CLASS);

  // call any implementation
  const books = implementation(bookID);

  // postcondition(s)
  if (!books.includes(bookID)) {
    throw new Error(`Book was not saved to storage`);
  }

  return books;
}

function unwriteBookByBookID(bookID, implementation) {
  // console.log(CLASS);

  // call any implementation
  const books = implementation(bookID);

  // postcondition(s)
  if (books.includes(bookID)) {
    throw new Error(`Book was not removed from storage`);
  }

  return books;
}

function writeBookChapterBookmark(bookID, chapter, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(chapter)) {
    throw new Error(`Chapter bookmark is not an integer`);
  }

  if (chapter <= 0) {
    throw new Error(`Chapter bookmark must be greater than zero`);
  }

  // call any implementation
  const book = implementation(bookID, chapter);

  // postcondition(s)
  if (chapter !== book.bookmark.chapter) {
    throw new Error(`Book chapter bookmark has incorrect chapter after update`);
  }

  return book;
}

function writeBookPageBookmark(bookID, page, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(page)) {
    throw new Error(`Page bookmark is not an integer`);
  }

  if (page <= 0) {
    throw new Error(`Page bookmark must be greater than zero`);
  }

  // call any implementation
  const book = implementation(bookID, page);

  // postcondition(s)
  if (page !== book.bookmark.page) {
    throw new Error(
      `Book page bookmark has incorrect page bookmark after update`,
    );
  }

  return book;
}

function writeBookChapters(bookID, chapters, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(chapters)) {
    throw new Error("Chapters is not an integer");
  }

  if (chapters <= 0) {
    throw new Error(`Chapters must be greater that zero`);
  }

  // call any implementation
  const book = implementation(bookID, chapters);

  // postcondition(s)
  if (chapters !== book.chapters) {
    throw new Error(`Book has incorrect chapters after update.`);
  }

  return book;
}

function writeBookPages(bookID, startPage, endPage, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(startPage) && !Number.isInteger(endPage)) {
    throw new Error(`Start page or End page is not an integer`);
  }

  if (startPage <= 0 || endPage <= 0) {
    throw new Error(`Start page and End Page must be greater than zero`);
  }

  if (endPage < startPage) {
    throw new Error(`End page must be greater than or equal to start page`);
  }

  // call any implementation
  const book = implementation(bookID, startPage, endPage);

  // postcondition(s)
  if (startPage !== book.page.start) {
    throw new Error(`Book has incorrect start page after update`);
  }

  if (endPage !== book.page.end) {
    throw new Error(`Book has incorrect end page after update`);
  }

  return book;
}

function fetchMyBooks(implementation) {
  // console.log(CLASS);
  // call any implementation
  const books = implementation();

  // postcondition(s)
  if (!(books instanceof Array)) {
    throw new Error("Books was not stored correctly");
  }

  return books;
}

function fetchBookPageTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const pages = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(pages)) {
    throw new Error(`Page total is not an integer`);
  }

  return pages;
}

function fetchBookPageBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const pageBookmark = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(pageBookmark)) {
    throw new Error(`Page bookmark is not an integer`);
  }

  return pageBookmark;
}

function fetchBookChapterBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const chapterBookmark = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(chapterBookmark)) {
    throw new Error(`Chapter bookmark is not an integer`);
  }

  return chapterBookmark;
}

function fetchBookChapterTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const chapters = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(chapters)) {
    throw new Error(`Chapter total is not an integer`);
  }

  return chapters;
}

function isBookWritten(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const bookWritten = implementation(bookID);

  // postcondition(s)
  if (!(typeof bookWritten === "boolean")) {
    throw new Error("Incorrect book stored status");
  }

  return bookWritten;
}

export {
  writeBookByBookID,
  fetchMyBooks,
  fetchBookChapterBookmark,
  fetchBookChapterTotal,
  fetchBookPageBookmark,
  fetchBookPageTotal,
  writeBookChapters,
  writeBookPages,
  writeBookChapterBookmark,
  writeBookPageBookmark,
  isBookWritten,
  unwriteBookByBookID,
};
