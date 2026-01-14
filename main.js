const bookTrackerController = require("./controller.js");

function main() {
  const bookID = "OL26331930M";

  console.log(`recording a book with ID ${bookID}...`);
  bookTrackerController.record(bookID);
}

main();
