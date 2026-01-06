const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

async function search(query) {
  const reqeust = { query };

  try {
    const response = await searchInterface.discoverySearch(
      reqeust,
      searchImplementation.discoverySearch
    );
    console.log("Results: ", response);
  } catch (error) {
    console.log("Error occurred during search: ", error.message);
  }
}

const title = "the pragmatic programmer";

console.log(`Searching for a book with the title '${title}' ...`);
search(title);
