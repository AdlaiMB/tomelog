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

module.exports = { queryByTitle, storeBook };
