function getBorder(ar) {
  if (!ar.length) {
    return [];
  }

  if (!ar[0].length) {
    return [];
  }

  if (ar.length === 1) {
    return ar[0];
  }

  let i = 0;
  let j = 0;
  const ans = [];

  // put numbers of the first array in to ans without the last element of the first array
  for (; j < ar[i].length - 1; j += 1) {
    ans.push(ar[i][j]);
  }

  // i is still first array index, but j is the last element index

  // put numbers of the last position of each array from 0 till the prelast
  for (; i < ar.length - 1; i += 1) {
    ans.push(ar[i][j]);
  }

  // now i is the index of the last array, but j is still the last element index inside arrays

  // put numbers of the last array in reverse order without the first element
  for (; j > 0; j -= 1) {
    ans.push(ar[i][j]);
  }

  // now i is still the index of the last array, but j  is the index of the first element

  // put numbers of first elements of each array in reverse order
  for (; i > 0; i -= 1) {
    ans.push(ar[i][j]);
  }

  return ans;
}

const ar = [[], []];

console.log(getBorder(ar));
