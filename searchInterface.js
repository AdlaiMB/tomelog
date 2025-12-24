const TITLE = "Interface - discoverySearch";

function discoverySearch(query, implementation) {
  console.log(TITLE);
  // call any implementation
  return implementation(query);
}

module.exports = { discoverySearch };
