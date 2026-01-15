const CLASS = "Implementation - terminalView";

function resultsBookList(booklist) {
  // console.log(CLASS);
  for (const book of booklist) {
    console.log("--------- Book ----------");
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Cover URL: ${book.coverURL}`);
    console.log("-------------------------");
    console.log("");
  }
}

function error(errorMessage) {
  // console.log(CLASS);
  console.log("------- Error Message -------");
  console.log(errorMessage);
  console.log("-----------------------------");
}

function filedBook(bookID) {
  // console.log(CLASS);
  console.log("------- Filed Book -------");
  console.log(`ID: ${bookID}`);
  console.log("--------------------------");
}

function bookShelf(booklist) {
  // console.log(CLASS);
  console.log("------- Book Shelf -------");
  for (const book of booklist) {
    console.log("");
    console.log("--------- Book ----------");
    console.log(`ID: ${book.id}`);
    console.log(`Title: ${book.title}`);
    console.log(`Cover URL: ${book.coverURL}`);
    console.log("-------------------------");
    console.log("");
  }
  console.log("--------------------------");
}

function pageProgress(completed, total) {
  // console.log(CLASS);
  console.log("------- Page Progress -------");
  console.log(
    `Percent Completed: ${
      total > 0 ? Math.ceil((completed / total) * 100) : 0
    }%`
  );
  console.log(`Completed Pages/Total Pages: ${completed} / ${total}`);
  console.log("-----------------------------");
}

function chapterProgress(completed, total) {
  // console.log(CLASS);
  console.log("----- Chapter Progress -----");
  console.log(
    `Percent Completed: ${
      total > 0 ? Math.ceil((completed / total) * 100) : 0
    }%`
  );
  console.log(`Completed Chapters/Total Chapters: ${completed} / ${total}`);
  console.log("----------------------------");
}

function updatedBook(updatedBook) {
  // console.log(CLASS);
  console.log("------- Updated Book -------");
  console.log(`pages: ${updatedBook.page.start} - ${updatedBook.page.end}`);
  console.log(`chapters: ${updatedBook.chapters}`);
  console.log(
    `bookmarks: page - ${updatedBook.bookmark.page}, chapter - ${updatedBook.bookmark.chapter}`
  );
  console.log("----------------------------");
}

module.exports = {
  resultsBookList,
  error,
  filedBook,
  bookShelf,
  pageProgress,
  chapterProgress,
  updatedBook,
};
