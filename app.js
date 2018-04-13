var catActions = require('./cat-actions');
var schrodinger = require("./schrodinger");

// console.log(schrodinger);
// console.log(catActions);
// console.log(module.exports === exports);

// console.log(module);


// console.log(schrodinger());

var input = process.argv[2];
console.log(catActions.meow(input));