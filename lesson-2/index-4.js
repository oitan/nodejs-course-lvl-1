let ar = [1, -1, 2, 4, 7, 10, -123, 100];

// every odd position with modulo
for (let i = 0; i < ar.length; i += 1) {
  if (i % 2 === 0) {
    console.log(`index: ${i}. value: ${ar[i]}`);
  }
}

// with steps
for (let i = 0; i < ar.length; i += 2) {
  console.log(`index: ${i}. value: ${ar[i]}`);
}
