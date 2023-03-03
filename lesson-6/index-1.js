const ar = [1, 2, 3];

function forEach(array, callback) {
  for (let index = 0; index < array.length; index += 1) {
    callback(array[index], index, array);
  }
}

forEach(ar, (num, i, ar) => {
  console.log(num, i, ar);
});

ar.forEach((num, i, ar) => {
  console.log(num, i, ar);
});
