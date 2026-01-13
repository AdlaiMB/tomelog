const CLASS = "Interface - screenView";

function resultsBookList(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

function error(errorMessage, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(errorMessage);
}

module.exports = { resultsBookList, error };
