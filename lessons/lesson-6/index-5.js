function map(ar, callback) {
  const result = [];
  for (let i = 0; i < ar.length; i += 1) {
    result.push(callback(ar[i], i, ar));
  }

  return result;
}

const square = map([1, 2, 3], (value, index, array) => {
  return value * value;
});

console.log(square);
