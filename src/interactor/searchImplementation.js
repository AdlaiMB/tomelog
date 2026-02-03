const CLASS = "Implementation - search";

import { queryByTitle as interfaceQueryByTitle } from "./bookRepoInterface";
import { queryByTitle as implementationQueryByTitle } from "../database/bookRepoImplementation";

function searchByTitle(title, limit, page) {
  // console.log(CLASS)
  return interfaceQueryByTitle(title, limit, page, implementationQueryByTitle);
}

async function discoverySearch(search) {
  // console.log(CLASS);
  const { query, limit, page } = search;

  const books = await searchByTitle(query, limit, page);

  return { books };
}

export { discoverySearch };
