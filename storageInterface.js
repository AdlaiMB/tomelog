const CLASS = "Interface - storage";

function writeBookByBookID(bookID, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(bookID);
}

module.exports = { writeBookByBookID };
