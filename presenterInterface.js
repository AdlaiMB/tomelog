const CLASS = "Interface - presenter";

function searchResultBooklist(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

function errorMessage(errorMessage, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(errorMessage);
}

module.exports = { searchResultBooklist, errorMessage };
