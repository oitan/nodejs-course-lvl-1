let nums = [1, 2, 4, 2, 6, 7, 8, 10, 11];


for (let i = 0; i < nums.length; i += 1) {
  if (nums[i] % 2 === 0) {
    continue;
  }
  
  console.log(nums[i]);
}
