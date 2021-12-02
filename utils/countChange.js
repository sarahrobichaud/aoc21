exports.countChanges = (arr) => {
  let last = null;

  let count = {
    increase: 0,
    decrease: 0,
    noChange: 0,
  };

  arr.forEach((item) => {
    if (!last) count.noChange = count.noChange + 1;

    last && item > last
      ? (count.increase = count.increase + 1)
      : (count.decrease = count.decrease + 1);

    last = item;
  });

  return count;
};
