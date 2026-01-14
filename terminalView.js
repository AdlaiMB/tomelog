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

module.exports = { resultsBookList, error, filedBook, bookShelf };
