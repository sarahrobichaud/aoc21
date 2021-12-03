const { readInput } = require("./utils/inputRead");

const data = readInput("input_day_3.txt");

const calcPowerConsumption = (data) => {
  const mostCommon = [],
    arr = data.split(/\r?\n/),
    arr2D = arr.map((item) => item.split(""));

  for (let i = 0; i < arr2D[0].length; i++) {
    let pos = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr2D[j][i] === "1") pos = pos + 1;
    }

    mostCommon.push(pos > arr2D.length / 2 ? 1 : 0);
  }

  const gammaRate = parseInt(
    mostCommon.toString().replaceAll(",", ""),
    2
  );

  const epsilonRate = parseInt(
    mostCommon
      .map((item) => (!parseInt(item) ? 1 : 0))
      .toString()
      .replaceAll(",", ""),
    2
  );

  return {
    powerConsumption: gammaRate * epsilonRate,
    gammaRate,
    epsilonRate,
  };
};

const { powerConsumption } = calcPowerConsumption(data);
console.log({ powerConsumption });
