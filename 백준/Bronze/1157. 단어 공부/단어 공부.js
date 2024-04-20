const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push((line.toUpperCase()));
}).on("close", () => {
  let count = new Array(26).fill(0);
  const str = input[0];

  for (let i = 0; i < str.length; i++) {
    count[str.charCodeAt(i) - 65]++;
  }

  let max = Math.max(...count);

  if (count.filter((v) => v === max).length > 1) {
    console.log("?");
  }
  else {
    console.log(String.fromCharCode(count.indexOf(max) + 65));
  }
});