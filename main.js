const controller = require("./controller.js");

async function main() {
  // const bookQuery = "the pragmatic programmer";

  // console.log(`searching for books with query "${bookQuery}"...`);
  // await controller.find(bookQuery);

  const bookID = "OL5748544W";

  console.log(`recording a book with ID ${bookID}...`);
  controller.record(bookID);

  await controller.getMyBooks();

  console.log(`getting page information for book with ID ${bookID}...`);
  controller.getPageRatioDetails(bookID);

  console.log(`getting chapter information for book with ID ${bookID}...`);
  controller.getChapterRatioDetails(bookID);

  console.log(`updating book pages for book with ID ${bookID} ...`);
  controller.updateBookPages(bookID, 10, 200);

  console.log(`updating book chapters for book with ID ${bookID} ...`);
  controller.updateBookChapters(bookID, 20);

  console.log(`updating book chapter bookmark for book with ID ${bookID} ...`);
  controller.updateChapterBookmark(bookID, 10);

  console.log(`updating book page bookmark for book with ID ${bookID} ...`);
  controller.updatePageBookmark(bookID, 100);

  console.log(`getting page information for book with ID ${bookID}...`);
  controller.getPageRatioDetails(bookID);

  console.log(`getting chapter information for book with ID ${bookID}...`);
  controller.getChapterRatioDetails(bookID);

  console.log(`updating book pages for book with ID ${bookID}`);
  controller.updateBookPages(bookID, 1, 10);

  console.log(`getting page information for book with ID ${bookID}...`);
  controller.getPageRatioDetails(bookID);

  console.log(`updating book chapters for book with ID ${bookID}`);
  controller.updateBookChapters(bookID, 5);

  console.log(`getting chapter information for book with ID ${bookID}...`);
  controller.getChapterRatioDetails(bookID);
}

main();
