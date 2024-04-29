const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" "));
}).on("close", () => {
  const length = input.length;

  for (let i = 0; i < length-1; i++) {
    const str = input[i][0];
    let isPalindrome = true;

    for (let j = 0; j < str.length / 2; j++) {
      if (str[j] !== str[str.length - 1 - j]) {
        isPalindrome = false;
        break;
      }
    }

    console.log(isPalindrome ? 'yes' : 'no');
  }
})