const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

async function search(query) {
  const reqeust = { query };

  try {
    const response = await searchInterface.discoverySearch(
      reqeust,
      searchImplementation.discoverySearch
    );
    console.log("Results: ", response);
  } catch (error) {
    console.log("Error occurred during search: ", error.message);
  }
}

function addBookByTitle(title) {
  try {
    const books = bookRepoInterface.storeBook(
      title,
      bookRepoImplementation.storeBook
    );
    console.log("Stored Books: ", books);
  } catch (error) {
    console.log("Error occurred while storing book: ", error.message);
  }
}

async function getBook(bookID) {
  try {
    const book = await bookRepoInterface.getBookByBookID(
      bookID,
      bookRepoImplementation.getBookByBookID
    );
    console.log("Retrieved Book: ", book);
  } catch (error) {
    console.log("Error occurred while retrieving book: ", error.message);
  }
}

function updateBookmark(bookID, chapter) {
  try {
    const updatedBook = bookRepoInterface.updateBookChapterBookmark(
      bookID,
      chapter,
      bookRepoImplementation.updateBookChapterBookmark
    );
    console.log("Updated Book Chapter Bookmark: ", updatedBook);
  } catch (error) {
    console.log("Error occurred while updating bookmark: ", error.message);
  }
}

function updatePageBookmark(bookID, page) {
  try {
    const updatedBook = bookRepoInterface.updateBookPageBookmark(
      bookID,
      page,
      bookRepoImplementation.updateBookPageBookmark
    );
    console.log("Updated Book Page Bookmark: ", updatedBook);
  } catch (error) {
    console.log("Error occurred while updating page bookmark: ", error.message);
  }
}

function updateChapters(bookID, chapters) {
  try {
    const updatedBook = bookRepoInterface.updateBookChapters(
      bookID,
      chapters,
      bookRepoImplementation.updateBookChapters
    );
    console.log("Updated Book Chapters: ", updatedBook);
  } catch (error) {
    console.log("Error occurred while updating chapters: ", error.message);
  }
}

function updatePages(bookID, pages) {
  try {
    const updatedBook = bookRepoInterface.updateBookPages(
      bookID,
      pages[0],
      pages[1],
      bookRepoImplementation.updateBookPages
    );
    console.log("Updated Book Pages: ", updatedBook);
  } catch (error) {
    console.log("Error occurred while updating pages: ", error.message);
  }
}

const bookID = "OL7353617M";

console.log(`Retrieving a book with the ID '${bookID}' ...`);
getBook(bookID);

// let title = "the pragmatic programmer";

// console.log(`Searching for a book with the title '${title}' ...`);
// search(title);

// console.log(`Storing a book with the title '${title}' ...`);
// addBookByTitle(title);

// console.log(`Updating chapters for the book with the title '${title}' ...`);
// updateChapters(title, 10);

// console.log(`Updating pages for the book with the title '${title}' ...`);
// updatePages(title, [10, 300]);

// console.log(
//   `Updating chapter bookmark for the book with the title '${title}' ...`
// );
// updateBookmark(title, 20);

// console.log(
//   `Updating page bookmark for the book with the title '${title}' ...`
// );
// updatePageBookmark(title, 2);

// title = "clean architecture";

// console.log(`Storing a book with the title '${title}' ...`);
// addBookByTitle(title);

// title = "cracking the coding interview";

// console.log(`Storing a book with the title '${title}' ...`);
// addBookByTitle(title);
