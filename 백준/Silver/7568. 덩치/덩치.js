const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((el) => parseInt(el)));
}).on("close", () => {
  const length = input.shift()[0]
  const people = input.map((el) => ({weight: el[0], height: el[1], rank: 1})) 


  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (people[i].weight < people[j].weight && people[i].height < people[j].height) {
        people[i].rank++;
      }
    }
  }

  const rank = people.map((el) => el.rank).join(" ")

  console.log(rank)
});