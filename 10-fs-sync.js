const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/generic/first.txt", "utf-8");
const second = readFileSync("./content/generic/second.txt", "utf-8");
writeFileSync(
  "./content/result-sync.txt",
  `here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log(first);
