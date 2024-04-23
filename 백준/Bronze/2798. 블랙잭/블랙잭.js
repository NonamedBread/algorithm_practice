const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const [length, score] = input.shift();
  const arr = input[0].sort((a, b) => a - b);
  
  let closestSum = 0;
  let diff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      let left = j + 1;
      let right = length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sum = arr[i] + arr[j] + arr[mid];
        if (sum <= score) {
          if (score - sum < diff) {
            diff = score - sum;
            closestSum = sum;
          }
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  console.log(closestSum);
})