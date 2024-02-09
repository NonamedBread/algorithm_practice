var fs = require("fs");

var filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs.readFileSync(filePath).toString().trim().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
