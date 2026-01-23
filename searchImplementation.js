const CLASS = "Implementation - search";

import { queryByTitle as interfaceQueryByTitle } from "./bookRepoInterface";
import { queryByTitle as implementationQueryByTitle } from "./bookRepoImplementation";

function searchByTitle(title) {
  // console.log(CLASS)
  return interfaceQueryByTitle(title, implementationQueryByTitle);
}

async function discoverySearch(search) {
  // console.log(CLASS);
  const { query } = search;

  const books = await searchByTitle(query);

  return { books };
}

export { discoverySearch };
