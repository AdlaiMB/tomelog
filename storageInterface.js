const CLASS = "Interface - storage";

function writeBookByBookID(bookID, implementation) {
  // console.log(CLASS);

  // call any implementation
  const books = implementation(bookID);

  // postcondition(s)
  if (!books.includes(bookID)) {
    throw new Error(`Book with ID ${bookID} was not written to storage`);
  }

  return books;
}

function writeBookChapterBookmark(bookID, chapter, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(chapter)) {
    throw new Error(`Chapter ${chapter} is not an integer`);
  }

  if (chapter <= 0) {
    throw new Error(`Chapter ${chapter} must be greater than zero`);
  }

  // call any implementation
  const book = implementation(bookID, chapter);

  // postcondition(s)
  if (chapter !== book.bookmark.chapter) {
    throw new Error(
      `Book with ID ${bookID} has incorrect chapter bookmark after writing`,
    );
  }

  return book;
}

function writeBookPageBookmark(bookID, page, implementation) {
  // console.log(CLASS);
  // precondition(s)
  if (!Number.isInteger(page)) {
    throw new Error(`Page ${page} is not an integer`);
  }

  if (page <= 0) {
    throw new Error(`Page ${page} must be greater than zero`);
  }

  // call any implementation
  const book = implementation(bookID, page);

  // postcondition(s)
  if (page !== book.bookmark.page) {
    throw new Error(
      `Book with ID ${bookID} has incorrect page bookmark after writing`,
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
    throw new Error(`Chapters ${chapters} must be greater that zero`);
  }

  // call any implementation
  const book = implementation(bookID, chapters);

  // postcondition(s)
  if (chapters !== book.chapters) {
    throw new Error(
      `Book with ID ${bookID} has incorrect chapters after writing.`,
    );
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
    throw new Error(
      `End page ${endPage} must be greater than or equal to start page ${startPage}`,
    );
  }

  // call any implementation
  const book = implementation(bookID, startPage, endPage);

  // postcondition(s)
  if (startPage !== book.page.start) {
    throw new Error(
      `Book with ID ${bookID} has incorrect start page after writing`,
    );
  }

  if (endPage !== book.page.end) {
    throw new Error(
      `Book with ID ${bookID} has incorrect end page after writing`,
    );
  }

  return book;
}

function fetchMyBooks(implementation) {
  // console.log(CLASS);
  // call any implementation
  const books = implementation();

  // postcondition(s)
  if (!(books instanceof Array)) {
    throw new Error("Books is not array");
  }

  return books;
}

function fetchBookPageTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const pages = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(pages)) {
    throw new Error(`Page total for book with ID ${bookID} is not an integer`);
  }

  return pages;
}

function fetchBookPageBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const pageBookmark = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(pageBookmark)) {
    throw new Error(
      `Page bookmark for book with ID ${bookID} is not an integer`,
    );
  }

  return pageBookmark;
}

function fetchBookChapterBookmark(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const chapterBookmark = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(chapterBookmark)) {
    throw new Error(
      `Chapter bookmark for book with ID ${bookID} is not an integer`,
    );
  }

  return chapterBookmark;
}

function fetchBookChapterTotal(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const chapters = implementation(bookID);

  // postcondition(s)
  if (!Number.isInteger(chapters)) {
    throw new Error(
      `Chapter total for book with ID ${bookID} is not an integer`,
    );
  }

  return chapters;
}

function isBookWritten(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  const bookWritten = implementation(bookID);

  // postcondition(s)
  if (!(typeof bookWritten === "boolean")) {
    throw new Error("Bookwritten is not a boolean");
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
};
