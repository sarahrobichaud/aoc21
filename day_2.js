const { readInput } = require("./utils/inputRead");

const data = readInput("input_day_2.txt");

const arr = data.split(/\r?\n/);

const parsedArr = arr.map((item) => {
  const group = item.split(" ");
  group[1] = parseInt(group[1]);
  return group;
});

const calculatePosition = (commands) => {
  let y1 = 0;
  let x1 = 0;

  let x2 = 0;
  let y2 = 0;
  let aim = 0;

  commands.forEach((command) => {
    switch (command[0]) {
      case "forward":
        x1 = x1 + command[1];
        x2 = x2 + command[1];
        y2 = y2 + aim * command[1];
        break;
      case "down":
        y1 = y1 + command[1];
        aim = aim + command[1];
        break;
      case "up":
        y1 = y1 - command[1];
        aim = aim - command[1];
        break;

      default:
        return null;
    }
  });
  return {
    part1: { x: x1, y: y1, answer: x1 * y1 },
    part2: { x: x2, y: y2, aim, answer: x2 * y2 },
  };
};

const { part1, part2 } = calculatePosition(parsedArr);
console.log({ part1, part2 });
