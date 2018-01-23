function sumItems(array) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;
}

const array = [1, [[2, [3]], [[[4]], 5]]];
sumItems(array);


module.exports = sumItems;