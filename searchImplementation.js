const TITLE = "Implementation - search";

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

function searchByTitle(title) {
  return bookRepoInterface.queryByTitle(
    title,
    bookRepoImplementation.queryByTitle
  );
}

function discoverySearch(query) {
  console.log(TITLE);
  const results = searchByTitle(query);
  return results;
}

module.exports = { discoverySearch };
