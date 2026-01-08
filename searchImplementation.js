const CLASS = "Implementation - search";

const assert = require("node:assert/strict");

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

function searchByTitle(title) {
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
