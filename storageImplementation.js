const CLASS = "Implementation - storage";
const books = [];

const assert = require("node:assert/strict");

function writeBookByBookID(bookID) {
  // console.log(CLASS);

  const originalBookLength = books.length;
  const updatedBookLength = books.push(bookID);

  assert.strictEqual(
    originalBookLength + 1,
    updatedBookLength,
    "Book storage was not updated correctly"
  );

  assert.strictEqual(
    books.at(-1),
    bookID,
    `Book with ID ${bookID} was not stored correctly`
  );

  return books;
}

module.exports = { writeBookByBookID };
