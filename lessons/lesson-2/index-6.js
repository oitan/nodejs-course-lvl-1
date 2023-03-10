function updateSquareResult(a) {
  return a * a;
}

const ar = [1, 2, 4, 23, -10, 0.5];

for (let num of ar) {
  console.log(`square of ${num} is ${updateSquareResult(num)}`);
}
