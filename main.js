const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

const bookRepoInterface = require("./bookRepoInterface.js");
const bookRepoImplementation = require("./bookRepoImplementation.js");

async function search(query) {
  const reqeust = { query };

  try {
    const response = await searchInterface.discoverySearch(
      reqeust,
      searchImplementation.discoverySearch
    );
    console.log("Results: ", response);
  } catch (error) {
    console.log("Error occurred during search: ", error.message);
  }
}

function addBookByTitle(title) {
  try {
    const books = bookRepoInterface.storeBook(
      title,
      bookRepoImplementation.storeBook
    );
    console.log("Stored Books: ", books);
  } catch (error) {
    console.log("Error occurred while storing book: ", error.message);
  }
}

let title = "the pragmatic programmer";

// console.log(`Searching for a book with the title '${title}' ...`);
// search(title);

console.log(`Storing a book with the title '${title}' ...`);
addBookByTitle(title);

title = "clean architecture";

console.log(`Storing a book with the title '${title}' ...`);
addBookByTitle(title);

title = "cracking the coding interview";

console.log(`Storing a book with the title '${title}' ...`);
addBookByTitle(title);
