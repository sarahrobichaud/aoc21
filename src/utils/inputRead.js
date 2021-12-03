const path = require("path");
const fs = require("fs");

exports.readInput = (input) => {
  return fs.readFileSync(
    path.join(__dirname, "..", "data", input),
    { encoding: "utf-8" }
  );
};
