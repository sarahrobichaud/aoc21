const { readInput } = require("./utils/inputRead");

//const data = readInput("sample_day_3.txt");
const data = readInput("sample_day_3.txt");

console.log(data);

const split = (str) => str.split(/\r?\n/);
const findMostCommonVertically = (data) => {
    const mostCommon = [];

    const arr2D = split(data);

    for (let i = 0; i < arr2D[0].length; i++) {
        let ones = 0;

        for (let j = 0; j < arr2D.length; j++) {
            if (arr2D[j][i] === "1") ones = ones + 1;
        }

        mostCommon.push(ones > arr2D.length / 2 ? 1 : 0);
    }
    return mostCommon;
};

const filterDiagnostic = (arr, targetList, customTarget = 1) => {
    let lastPass = [];

    targetList = targetList.map((item) => item.toString());

    for (let i = 0; i < targetList.length; i++) {
        arr = lastPass.length !== 0 ? lastPass : arr;

        const ones = arr.filter((item) => {
            return item.split("")[i] === "1";
        }).length;

        const rest = arr.length - ones;

        lastPass = arr.filter((item) => {
            const char = item.split("")[i];

            if (ones !== rest) {
                return char === targetList[i];
            }

            return char === customTarget.toString();
        });

        if (lastPass.length === 1) {
            return lastPass[0];
        }
    }
};

const invertMostCommon = (arr) => arr.map((item) => (!item ? 1 : 0));

const calcLifeSupportRating = (data) => {
    const mostCommon = findMostCommonVertically(data);

    const arr = data.split(/\r?\n/).slice(0);

    const oxyRating = parseInt(filterDiagnostic(arr, mostCommon, 1), 2);
    console.log("---------- OXYGEN RATING --------------");

    const co2Rating = parseInt(
        filterDiagnostic(arr, invertMostCommon(mostCommon), 0),
        2
    );

    console.log("---------- CO2 RATING --------------");

    return {
        lifeSupportRating: oxyRating * co2Rating,
        oxyRating,
        co2Rating,
    };
};

const calcPowerConsumption = (data) => {
    const mostCommon = findMostCommonVertically(data);

    const gammaRate = parseInt(mostCommon.toString().replaceAll(",", ""), 2);

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
const { lifeSupportRating } = calcLifeSupportRating(data);

console.log({ powerConsumption, lifeSupportRating });

module.exports = {
    calcLifeSupportRating,
    calcPowerConsumption,
    findMostCommonVertically,
    split,
};
