const searchInterface = require("./searchInterface.js");
const searchImplementation = require("./searchImplementation.js");

const presenterInterface = require("./presenterInterface.js");
const screenPrensenter = require("./screenPresenter.js");

async function find(book) {
  let response;

  try {
    const searchResult = await searchInterface.discoverySearch(
      { query: book },
      searchImplementation.discoverySearch
    );
    response = { error: false, books: searchResult.books };
  } catch (error) {
    response = { error: true, message: error.message };
  }

  if (!response.error) {
    presenterInterface.searchResultBooklist(
      response.books,
      screenPrensenter.searchResultBooklist
    );
  } else {
    presenterInterface.errorMessage(
      response.message,
      screenPrensenter.errorMessage
    );
  }
}

module.exports = {
  find,
};
