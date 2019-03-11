var maxSubArray = function (nums) {
  let cMax = nums[0]
  let gMax = nums[0]
  for (let i = 1; i < nums.length; i++) {
    cMax = Math.max(nums[i], cMax + nums[i])
    if (gMax < cMax) gMax = cMax
    console.log({ cMax, gMax, i: nums[i] })
  }
  console.log(gMax)
  return gMax
  // let cMax = -Infinity
  // let gMax = -Infinity
  // for (let i of nums) {
  //   cMax = Math.max(i, cMax + i)
  //   if (gMax < cMax) gMax = cMax
  //   console.log({ cMax, gMax, i })
  // }
  // console.log(gMax)
  // return gMax
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([-2, 1])