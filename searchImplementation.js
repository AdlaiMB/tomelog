const CLASS = "Implementation - search";

const assert = require("node:assert/strict");

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

async function searchByTitle(title) {
  const books = await bookRepoInterface.queryByTitle(
    title,
    bookRepoImplementation.queryByTitle
  );

  assert.strictEqual(books instanceof Array, true, "Books is not an array");

  return books;
}

async function discoverySearch(search) {
  // console.log(CLASS);
  const { query } = search;

  const books = await searchByTitle(query);

  return { books };
}

module.exports = { discoverySearch };
