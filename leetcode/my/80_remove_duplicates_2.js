var removeDuplicates = function (nums) {
  let x = 0
  for (let i of nums) {
    if (x < 2 || i > nums[x - 2]) nums[x++] = i
  }
  return x
};