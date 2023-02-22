function test(ar) {
  let j = 0;
  for (let a of ar) {
    j -= a;
  }
  console.log(j);
}

test([-1, -1, -1]);
test([1, -1, -1]);
