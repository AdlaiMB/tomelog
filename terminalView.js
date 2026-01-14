const CLASS = "Implementation - terminalView";

function resultsBookList(bookList) {
  // console.log(CLASS);
  for (const book of bookList) {
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

module.exports = { resultsBookList, error, filedBook };
