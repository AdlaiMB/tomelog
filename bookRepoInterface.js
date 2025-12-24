const TITLE = "Interface - bookRepo";

function queryByTitle(title, implementation) {
  console.log(TITLE);
  // call any implementation
  return implementation(title);
}

module.exports = { queryByTitle };
