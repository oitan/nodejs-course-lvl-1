let ar = [1, -1, 2, 4];

for (let i = 0; i < ar.length; i += 1) {
  console.log(`index: ${i}. value: ${ar[i]}`);
}

console.log('and now reversed');

for (let i = ar.length - 1; i >= 0; i -= 1) {
  console.log(`index: ${i}. value: ${ar[i]}`);
}
