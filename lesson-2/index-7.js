let resultOfSquare;

function updateSquareResult(a) {
  resultOfSquare = a * a;
}

const ar = [1, 2, 4, 23, -10, 0.5];

for (let num of ar) {
  updateSquareResult(num);

  resultOfSquare = 0;

  console.log(`square of ${num} is ${resultOfSquare}`);
}
