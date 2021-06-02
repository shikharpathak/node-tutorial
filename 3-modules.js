// modules - encapsulated code(only share mimimun)
//commonJs , every file is module(by Default)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavors");

console.log(data);
console.log(names);
sayHi(names.jon);
sayHi(names.peter);
sayHi("anna");

require("./7-mind-grenade");
