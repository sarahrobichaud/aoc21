const { countChanges } = require("./utils/countChange");

const { readInput } = require("./utils/inputRead");

const data = readInput("input_day_1.txt");

const arr = data
  .split(/\r?\n/)
  .map((item) => parseInt(item));

// Day 1 part 1
// Calculate how many increase
console.log(countChanges(arr));

// Day 1 part 2
// Parse 3 measurement sliding window
const sumArr = [];

arr.forEach((_item, index) => {
  let subArr = arr.slice(index, index + 3);

  if (subArr.length < 3) return;

  const sum = subArr.reduce(
    (partialSum, a) => partialSum + a
  );
  sumArr.push(sum);
});

console.log(countChanges(sumArr));
