const CLASS = "Interface - presenter";

function searchResultBooklist(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

function errorMessage(errorMessage, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(errorMessage);
}

function recordedBook(recordedBook, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(recordedBook);
}

function storedBooksBooklist(bookList, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookList);
}

// function pageRatio(bookmark, total, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookmark, total);
// }

// function chapterRatio(bookmark, total, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(bookmark, total);
// }

// function updatedBook(updatedBook, implementation) {
//   // console.log(CLASS);
//   // call any implementation
//   return implementation(updatedBook);
// }

// module.exports = {
//   searchResultBooklist,
//   errorMessage,
//   recordedBook,
//   storedBooksBooklist,
//   pageRatio,
//   chapterRatio,
//   updatedBook,
// };

export {
  searchResultBooklist,
  errorMessage,
  recordedBook,
  storedBooksBooklist,
};
