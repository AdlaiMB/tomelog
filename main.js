const controller = require("./controller.js");

async function main() {
  const bookID = "OL26331930M";

  console.log(`recording a book with ID ${bookID}...`);
  controller.record(bookID);

  await controller.getMyBooks();
}

main();
