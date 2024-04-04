const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", function () {
  
  input.forEach((el) => {
    let a = el[0];
    let b = el[1];

    let sum = a + b;
    console.log(sum || '' );
  })
  process.exit();
});
