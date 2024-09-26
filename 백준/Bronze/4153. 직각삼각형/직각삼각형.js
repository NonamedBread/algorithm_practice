const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  for (let i = 0; i < input.length -1 ; i++) {
    const triangle = input[i];
    const sort = triangle.sort((a, b) => b - a);

    if (sort[0] ** 2 === sort[1] ** 2 + sort[2] ** 2) {
      console.log("right");
    } else {
      console.log("wrong");
    }

  }
});