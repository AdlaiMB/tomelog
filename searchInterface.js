const CLASS = "Interface - search";

function discoverySearch(search, implementation) {
  // console.log(CLASS);
  // call any implementation
  return implementation(search);
}

// module.exports = { discoverySearch };

export { discoverySearch };
