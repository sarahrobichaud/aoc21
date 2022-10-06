const { readInput } = require("./utils/inputRead");
// const data = readInput("input_day_3.txt");
const data = readInput("sample_day_3.txt");

// const inputLen = 12;
// const inputCount= 1000;

const inputLen = 5;
const inputCount = 12;
const {
    calcLifeSupportRating,
    calcPowerConsumption,
    findMostCommonVertically,
    split,
} = require("./day_3");

test('Splits the input data at "\\n"', () => {
    expect(split(data).length).toBe(inputCount);

    split(data).forEach((element) => {
        expect(element).toMatch(/^[0,1]{5}$/);
    });
});

test("Find the most common value verticaly", () => {
    const arr2d = split(data).map((i) => i.split(""));

    console.log(arr2d);
});
