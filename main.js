const bookTrackerController = require("./controller.js");

async function main() {
  await bookTrackerController.find("Pragmatic Programmer");
}

main();
