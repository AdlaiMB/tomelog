const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

console.log("Searching for a book with the title 'clean architecture' ...");

const results = searchInterface.discoverySearch(
  "clean architecture",
  searchImplementation.discoverySearch
);

console.log("Results: ", results);
