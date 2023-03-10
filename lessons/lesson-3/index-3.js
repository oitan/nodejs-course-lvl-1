let num = 0;

for (let i = 0; i < 3; i += 1) {
  let ar = [];

  for (let j = 0; j < 2; j += 1) {
    ar.push(num);
    num += 1;
  }

  console.log(ar);
}
