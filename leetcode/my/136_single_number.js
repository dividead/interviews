var singleNumber = function (nums) {
  let unique = nums[0]
  for (let i = 1; i < nums.length; i++) {
    unique ^= nums[i]
  }
  return unique
  // return nums.reduce( (a, b) => a ^ b );
};