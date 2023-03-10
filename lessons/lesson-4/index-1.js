const texts = ["Alikhan", "Aman", "Ayauly", "Ali"];

const arsInAr = [[1], [0, 100], [-1, 2]];

const tripleAr = [
  [[[1, 2, 3]], [4, 5, 6]],
  [[1, 23], [1], [74, 90]],
];

// console.log(arsInAr[2][1]);

// or like this => for (let text of texts)
for (let i = 0; i < tripleAr.length; i += 1) {
  for (let j = 0; j < tripleAr[i].length; j += 1) {
    for (let k = 0; k < tripleAr[i][j].length; k += 1) {
      console.log(tripleAr[i][j][k]);
    }
  }
}
