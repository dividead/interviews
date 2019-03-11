var removeDuplicates = function (nums) {
  let x = 1
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[x] = nums[i + 1]
      x++
    }
  }
  console.log({ x, nums })
  return x
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])