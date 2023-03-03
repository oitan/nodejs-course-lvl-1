const ar = [567, 42, 38];

const squares = [];
for (let i = 0; i < ar.length; i += 1) {
  squares.push(ar[i] * ar[i]);
}
console.log(squares);

const mapResult = ar.map((value, index, array) => {
  return value * value;
});

console.log(mapResult);
