const main_data = require("./main/main-data")
const docs_data = require("./docs")

console.log("main_data", main_data)

if (docs_data) {
  console.log("docs_data", docs_data)
} else {
  console.log("no docs data available")
}
