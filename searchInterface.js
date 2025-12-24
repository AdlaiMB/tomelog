const TITLE = "Interface - search";

function discoverySearch(query, implementation) {
  console.log(TITLE);
  // call any implementation
  return implementation(query);
}

module.exports = { discoverySearch };
