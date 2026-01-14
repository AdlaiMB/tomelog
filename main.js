const controller = require("./controller.js");

async function main() {
  const bookQuery = "the pragmatic programmer";

  console.log(`searching for books with query "${bookQuery}"...`);
  await controller.find(bookQuery);

  const bookID = "OL5748544W";

  console.log(`recording a book with ID ${bookID}...`);
  controller.record(bookID);

  await controller.getMyBooks();
}

main();
