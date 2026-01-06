const CLASS = "Interface - bookRepo";

function queryByTitle(titleSearch, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(titleSearch);
}

module.exports = { queryByTitle };
