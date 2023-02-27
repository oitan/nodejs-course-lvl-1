function makeChessboard(n, m) {
  const answer = [];

  for (let i = 0; i < n; i += 1) {
    const line = [];

    for (let j = 0; j < m; j += 1) {
      line.push((j + i) % 2 ? "*" : ".");
    }
    answer.push(line);
  }
  return answer;
}

// console.log(makeChessboard(1, 1));
// console.log(makeChessboard(1, 2));
console.log(makeChessboard(3, 5));
