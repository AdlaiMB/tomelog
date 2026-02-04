const CLASS = "Implementation - storage";

function initializeBooksObjectInStorage() {
  const booksObject = new Map();

  localStorage.setItem("books", JSON.stringify([...booksObject]));

  return booksObject;
}

function getBooksObjectFromStorage() {
  const booksObjectString = localStorage.getItem("books");

  if (booksObjectString !== null) {
    return new Map(JSON.parse(booksObjectString));
  }

  return initializeBooksObjectInStorage();
}

function updateBooksObjectInStorage(updatedBooksObject) {
  localStorage.setItem("books", JSON.stringify([...updatedBooksObject]));
}

function writeBookByBookID(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (books.has(bookID)) {
    throw new Error(`Book has already been stored`);
  }

  const originalBookLength = books.size;
  books.set(bookID, {
    chapters: 0,
    page: {
      start: 0,
      end: 0,
    },
    bookmark: { chapter: 0, page: 0 },
  });

  // postcondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book was not stored`);
  }

  if (originalBookLength + 1 !== books.size) {
    throw new Error("Book storage was not written to correctly");
  }

  updateBooksObjectInStorage(books);

  return [...books.keys()];
}

function unwriteBookByBookID(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(
      `Book has not been stored, cannot remove book that does not exist`,
    );
  }

  const originalBookLength = books.size;
  books.delete(bookID);

  // postcondition(s)
  if (books.has(bookID)) {
    throw new Error(`Book was not removed`);
  }

  if (originalBookLength - 1 !== books.size) {
    throw new Error("Book storage was not written to correctly");
  }

  updateBooksObjectInStorage(books);

  return [...books.keys()];
}

function writeBookChapterBookmark(bookID, chapter) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  if (chapter > book.chapters) {
    throw new Error(`Bookmark cannot be placed past total chapters`);
  }

  book.bookmark.chapter = chapter;
  books.set(bookID, book);

  // postcondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book was not stored after updating chapter bookmark`);
  }

  updateBooksObjectInStorage(books);

  return book;
}

function writeBookPageBookmark(bookID, page) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  if (page > book.page.end || page < book.page.start) {
    throw new Error(`Bookmark cannot be placed past total pages`);
  }

  book.bookmark.page = page;
  books.set(bookID, book);

  // postcondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book  was not stored after updating page bookmark`);
  }

  updateBooksObjectInStorage(books);

  return book;
}

function writeBookChapters(bookID, chapters) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  if (book.bookmark.chapter !== 0 && chapters < book.bookmark.chapter) {
    throw new Error(`Chapters cannot leave the chapter bookmark out of range`);
  }

  book.chapters = chapters;
  books.set(bookID, book);

  // postcondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book was not stored after updating book chapters`);
  }

  updateBooksObjectInStorage(books);

  return book;
}

function writeBookPages(bookID, startPage, endPage) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  if (
    book.bookmark.page !== 0 &&
    (startPage > book.bookmark.page || book.bookmark.page > endPage)
  ) {
    throw new Error(`Pages cannot leave the page bookmark out of range`);
  }

  book.page.start = startPage;
  book.page.end = endPage;
  books.set(bookID, book);

  // postcondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book  was not stored after updating book pages`);
  }

  updateBooksObjectInStorage(books);

  return book;
}

function fetchMyBooks() {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  return [...books.keys()];
}

function fetchBookPageTotal(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  // postcondition(s)
  if (book.page.start === 0) {
    return 0;
  }

  return book.page.end - book.page.start + 1;
}

function fetchBookPageBookmark(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  return book.bookmark.page;
}

function fetchBookChapterBookmark(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  return book.bookmark.chapter;
}

function fetchBookChapterTotal(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  // precondition(s)
  if (!books.has(bookID)) {
    throw new Error(`Book does not exist in storage`);
  }

  const book = books.get(bookID);

  return book.chapters;
}

function isBookWritten(bookID) {
  // console.log(CLASS);
  const books = getBooksObjectFromStorage();

  return books.has(bookID);
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
