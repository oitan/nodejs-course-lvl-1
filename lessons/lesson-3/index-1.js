let nums = [1, 0, 2, 3, 5, -1, 56, -23, -3];

for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] < 0) {
    console.log(nums[i]);
    break;
  }
}

let nums2 = [0, 2, 4, 2, 6, 7, 8, 10, 11];
for (let i = 0; i < nums2.length; i += 1) {
  if (nums2[i] % 2 === 0) {
    console.log(nums2[i]);
  } else {
    break;
  }
}

console.log("exit");
