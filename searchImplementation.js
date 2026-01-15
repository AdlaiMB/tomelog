const CLASS = "Implementation - search";

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

function searchByTitle(title) {
  // console.log(CLASS)
  return bookRepoInterface.queryByTitle(
    title,
    bookRepoImplementation.queryByTitle
  );
}

async function discoverySearch(search) {
  // console.log(CLASS);
  const { query } = search;

  const books = await searchByTitle(query);

  return { books };
}

module.exports = { discoverySearch };
