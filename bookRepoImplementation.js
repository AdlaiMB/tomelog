const CLASS = "Implementation - bookRepo";
const API_BASE_URL = "https://openlibrary.org/search.json";

const assert = require("node:assert/strict");

const storageInterface = require("./storageInterface.js");
const storageImplementation = require("./storageImplementation.js");

async function queryByTitle(title) {
  // console.log(CLASS);

  const openLibraryResponse = await fetch(API_BASE_URL + `?q=${title}&limit=5`);
  const openlibraryData = await openLibraryResponse.json();

  assert.strictEqual(
    Object.hasOwn(openlibraryData, "docs"),
    true,
    "Missing 'docs' property in response"
  );

  return openlibraryData["docs"];
}

function storeBook(bookID) {
  // console.log(CLASS);

  return storageInterface.writeBookByBookID(
    bookID,
    storageImplementation.writeBookByBookID
  );
}

module.exports = { queryByTitle, storeBook };
