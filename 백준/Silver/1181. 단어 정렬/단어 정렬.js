const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const length = input.shift()
  input.sort((a, b) => a.length - b.length || a.localeCompare(b));
  const result = input.filter((value, index) => {
    return value === input[index - 1] ? false : true;
  }
  );
  console.log(result.join("\n"));
});